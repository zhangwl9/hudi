/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

package org.apache.hudi.gcp.bigquery;

import org.apache.hudi.common.model.HoodieAvroPayload;
import org.apache.hudi.common.model.HoodieTableType;
import org.apache.hudi.common.table.HoodieTableMetaClient;
import org.apache.hudi.hadoop.fs.HadoopFSUtils;
import org.apache.hudi.sync.common.HoodieSyncConfig;
import org.apache.hudi.sync.common.util.ManifestFileWriter;

import com.google.cloud.bigquery.BigQuery;
import com.google.cloud.bigquery.ExternalTableDefinition;
import com.google.cloud.bigquery.Field;
import com.google.cloud.bigquery.HivePartitioningOptions;
import com.google.cloud.bigquery.Job;
import com.google.cloud.bigquery.JobInfo;
import com.google.cloud.bigquery.JobStatus;
import com.google.cloud.bigquery.QueryJobConfiguration;
import com.google.cloud.bigquery.Schema;
import com.google.cloud.bigquery.StandardSQLTypeName;
import com.google.cloud.bigquery.Table;
import com.google.cloud.bigquery.TableId;
import org.apache.hadoop.conf.Configuration;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;
import org.mockito.ArgumentCaptor;

import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Properties;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

public class TestHoodieBigQuerySyncClient {
  private static final String PROJECT_ID = "test_project";
  private static final String MANIFEST_FILE_URI = "file:/manifest_file";
  private static final String SOURCE_PREFIX = "file:/manifest_file/date=*";
  private static final String TEST_TABLE = "test_table";
  private static final String TEST_DATASET = "test_dataset";

  static @TempDir Path tempDir;

  private static String basePath;
  private static HoodieTableMetaClient metaClient;
  private final BigQuery mockBigQuery = mock(BigQuery.class);
  private HoodieBigQuerySyncClient client;
  private Properties properties;

  @BeforeAll
  static void setupOnce() throws Exception {
    basePath = tempDir.toString();
    metaClient = HoodieTableMetaClient.withPropertyBuilder()
        .setTableType(HoodieTableType.COPY_ON_WRITE)
        .setTableName(TEST_TABLE)
        .setPayloadClass(HoodieAvroPayload.class)
        .initTable(HadoopFSUtils.getStorageConf(new Configuration()), basePath);
  }

  @BeforeEach
  void setup() {
    properties = new Properties();
    properties.setProperty(BigQuerySyncConfig.BIGQUERY_SYNC_PROJECT_ID.key(), PROJECT_ID);
    properties.setProperty(BigQuerySyncConfig.BIGQUERY_SYNC_DATASET_NAME.key(), TEST_DATASET);
    properties.setProperty(HoodieSyncConfig.META_SYNC_BASE_PATH.key(), tempDir.toString());
    properties.setProperty(BigQuerySyncConfig.BIGQUERY_SYNC_REQUIRE_PARTITION_FILTER.key(), "true");
  }

  @Test
  void createTableWithManifestFile_partitioned() throws Exception {
    properties.setProperty(BigQuerySyncConfig.BIGQUERY_SYNC_BIG_LAKE_CONNECTION_ID.key(), "my-project.us.bl_connection");
    BigQuerySyncConfig config = new BigQuerySyncConfig(properties);
    client = new HoodieBigQuerySyncClient(config, mockBigQuery, metaClient);

    Schema schema = Schema.of(Field.of("field", StandardSQLTypeName.STRING));
    ArgumentCaptor<JobInfo> jobInfoCaptor = ArgumentCaptor.forClass(JobInfo.class);
    Job mockJob = mock(Job.class);
    when(mockBigQuery.create(jobInfoCaptor.capture())).thenReturn(mockJob);
    Job mockJobFinished = mock(Job.class);
    when(mockJob.waitFor()).thenReturn(mockJobFinished);
    JobStatus mockJobStatus = mock(JobStatus.class);
    when(mockJobFinished.getStatus()).thenReturn(mockJobStatus);
    when(mockJobStatus.getError()).thenReturn(null);
    client.createOrUpdateTableUsingBqManifestFile(TEST_TABLE, MANIFEST_FILE_URI, SOURCE_PREFIX, schema);

    QueryJobConfiguration configuration = jobInfoCaptor.getValue().getConfiguration();
    assertEquals(configuration.getQuery(),
        String.format("CREATE OR REPLACE EXTERNAL TABLE `%s.%s.%s` ( `field` STRING ) WITH PARTITION COLUMNS WITH CONNECTION `my-project.us.bl_connection` "
                + "OPTIONS (enable_list_inference=true, hive_partition_uri_prefix=\"%s\", "
                + "require_hive_partition_filter=true, uris=[\"%s\"], format=\"PARQUET\", file_set_spec_type=\"NEW_LINE_DELIMITED_MANIFEST\")",
            PROJECT_ID, TEST_DATASET, TEST_TABLE, SOURCE_PREFIX, MANIFEST_FILE_URI));
  }

  @Test
  void createTableWithManifestFile_nonPartitioned() throws Exception {
    BigQuerySyncConfig config = new BigQuerySyncConfig(properties);
    client = new HoodieBigQuerySyncClient(config, mockBigQuery, metaClient);

    Schema schema = Schema.of(Field.of("field", StandardSQLTypeName.STRING));
    ArgumentCaptor<JobInfo> jobInfoCaptor = ArgumentCaptor.forClass(JobInfo.class);
    Job mockJob = mock(Job.class);
    when(mockBigQuery.create(jobInfoCaptor.capture())).thenReturn(mockJob);
    Job mockJobFinished = mock(Job.class);
    when(mockJob.waitFor()).thenReturn(mockJobFinished);
    JobStatus mockJobStatus = mock(JobStatus.class);
    when(mockJobFinished.getStatus()).thenReturn(mockJobStatus);
    when(mockJobStatus.getError()).thenReturn(null);
    client.createOrUpdateTableUsingBqManifestFile(TEST_TABLE, MANIFEST_FILE_URI, "", schema);

    QueryJobConfiguration configuration = jobInfoCaptor.getValue().getConfiguration();
    assertEquals(configuration.getQuery(),
        String.format("CREATE OR REPLACE EXTERNAL TABLE `%s.%s.%s` ( `field` STRING ) OPTIONS (enable_list_inference=true, uris=[\"%s\"], format=\"PARQUET\", "
            + "file_set_spec_type=\"NEW_LINE_DELIMITED_MANIFEST\")", PROJECT_ID, TEST_DATASET, TEST_TABLE, MANIFEST_FILE_URI));
  }

  @Test
  void skipUpdatingSchema_partitioned() {
    BigQuerySyncConfig config = new BigQuerySyncConfig(properties);
    client = new HoodieBigQuerySyncClient(config, mockBigQuery, metaClient);
    Table mockTable = mock(Table.class);
    ExternalTableDefinition mockTableDefinition = mock(ExternalTableDefinition.class);
    // The table schema has no change: it contains a "field" and a "partition_field".
    Schema schema = Schema.of(Field.of("field", StandardSQLTypeName.STRING));
    List<String> partitionFields = new ArrayList<String>();
    partitionFields.add("partition_field");
    List<Field> bqFields = new ArrayList<Field>();
    // The "partition_field" always follows "field".
    bqFields.add(Field.of("field", StandardSQLTypeName.STRING));
    bqFields.add(Field.of("partition_field", StandardSQLTypeName.STRING));
    Schema bqSchema = Schema.of(bqFields);
    HivePartitioningOptions hivePartitioningOptions = HivePartitioningOptions.newBuilder().setRequirePartitionFilter(true).build();

    when(mockBigQuery.getTable(any())).thenReturn(mockTable);
    when(mockTable.getDefinition()).thenReturn(mockTableDefinition);
    when(mockTableDefinition.getSchema()).thenReturn(bqSchema);
    when(mockTableDefinition.getHivePartitioningOptions()).thenReturn(hivePartitioningOptions);

    client.updateTableSchema(TEST_TABLE, schema, partitionFields);
    // Expect no update.
    verify(mockBigQuery, never()).update(mockTable);
  }

  @Test
  void testTableNotExistsOrDoesNotMatchSpecification() {
    BigQuerySyncConfig config = new BigQuerySyncConfig(properties);
    client = new HoodieBigQuerySyncClient(config, mockBigQuery, metaClient);
    // table does not exist
    assertTrue(client.tableNotExistsOrDoesNotMatchSpecification(TEST_TABLE));

    TableId tableId = TableId.of(PROJECT_ID, TEST_DATASET, TEST_TABLE);
    Table table = mock(Table.class);
    when(mockBigQuery.getTable(tableId)).thenReturn(table);

    ExternalTableDefinition externalTableDefinition = mock(ExternalTableDefinition.class);
    when(table.exists()).thenReturn(true);
    when(table.getDefinition()).thenReturn(externalTableDefinition);

    // manifest does not exist
    when(externalTableDefinition.getSourceUris()).thenReturn(Collections.emptyList());
    assertTrue(client.tableNotExistsOrDoesNotMatchSpecification(TEST_TABLE));

    // manifest exists but base path is outdated
    when(externalTableDefinition.getSourceUris()).thenReturn(Collections.singletonList(
        basePath + "/.hoodie/" + ManifestFileWriter.ABSOLUTE_PATH_MANIFEST_FOLDER_NAME));
    assertFalse(client.tableNotExistsOrDoesNotMatchSpecification(TEST_TABLE));

    // manifest exists but base path is outdated
    when(externalTableDefinition.getSourceUris()).thenReturn(Collections.singletonList(ManifestFileWriter.ABSOLUTE_PATH_MANIFEST_FOLDER_NAME));
    when(externalTableDefinition.getHivePartitioningOptions()).thenReturn(
        HivePartitioningOptions.newBuilder().setSourceUriPrefix(basePath + "1").build());
    assertTrue(client.tableNotExistsOrDoesNotMatchSpecification(TEST_TABLE));

    // manifest exists, base path is up-to-date
    when(externalTableDefinition.getHivePartitioningOptions()).thenReturn(
        HivePartitioningOptions.newBuilder().setSourceUriPrefix(basePath + "/").build());
    assertFalse(client.tableNotExistsOrDoesNotMatchSpecification(TEST_TABLE));
  }
}

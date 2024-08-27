"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[1946],{8640:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=t(74848),s=t(28453);const a={version:"0.5.1",title:"Writing Hudi Tables",keywords:["hudi","incremental","batch","stream","processing","Hive","ETL","Spark SQL"],summary:"In this page, we will discuss some available tools for incrementally ingesting & storing data.",toc:!0,last_modified_at:new Date("2019-12-30T19:59:57.000Z")},r=void 0,o={id:"writing_data",title:"Writing Hudi Tables",description:"In this section, we will cover ways to ingest new changes from external sources or even other Hudi tables using the DeltaStreamer tool, as well as",source:"@site/versioned_docs/version-0.5.1/writing_data.md",sourceDirName:".",slug:"/writing_data",permalink:"/docs/0.5.1/writing_data",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.5.1/writing_data.md",tags:[],version:"0.5.1",frontMatter:{version:"0.5.1",title:"Writing Hudi Tables",keywords:["hudi","incremental","batch","stream","processing","Hive","ETL","Spark SQL"],summary:"In this page, we will discuss some available tools for incrementally ingesting & storing data.",toc:!0,last_modified_at:"2019-12-30T19:59:57.000Z"},sidebar:"docs",previous:{title:"Use Cases",permalink:"/docs/0.5.1/use_cases"},next:{title:"Querying Hudi Tables",permalink:"/docs/0.5.1/querying_data"}},l={},c=[{value:"Write Operations",id:"write-operations",level:2},{value:"DeltaStreamer",id:"deltastreamer",level:2},{value:"Datasource Writer",id:"datasource-writer",level:2},{value:"Syncing to Hive",id:"syncing-to-hive",level:2},{value:"Deletes",id:"deletes",level:2},{value:"Optimized DFS Access",id:"optimized-dfs-access",level:2}];function d(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:["In this section, we will cover ways to ingest new changes from external sources or even other Hudi tables using the ",(0,n.jsx)(i.a,{href:"#deltastreamer",children:"DeltaStreamer"})," tool, as well as\nspeeding up large Spark jobs via upserts using the ",(0,n.jsx)(i.a,{href:"#datasource-writer",children:"Hudi datasource"}),". Such tables can then be ",(0,n.jsx)(i.a,{href:"/docs/querying_data",children:"queried"})," using various query engines."]}),"\n",(0,n.jsx)(i.h2,{id:"write-operations",children:"Write Operations"}),"\n",(0,n.jsx)(i.p,{children:"Before that, it may be helpful to understand the 3 different write operations provided by Hudi datasource or the delta streamer tool and how best to leverage them. These operations\ncan be chosen/changed across each commit/deltacommit issued against the table."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"UPSERT"})," : This is the default operation where the input records are first tagged as inserts or updates by looking up the index and\nthe records are ultimately written after heuristics are run to determine how best to pack them on storage to optimize for things like file sizing.\nThis operation is recommended for use-cases like database change capture where the input almost certainly contains updates."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"INSERT"})," : This operation is very similar to upsert in terms of heuristics/file sizing but completely skips the index lookup step. Thus, it can be a lot faster than upserts\nfor use-cases like log de-duplication (in conjunction with options to filter duplicates mentioned below). This is also suitable for use-cases where the table can tolerate duplicates, but just\nneed the transactional writes/incremental pull/storage management capabilities of Hudi."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"BULK_INSERT"})," : Both upsert and insert operations keep input records in memory to speed up storage heuristics computations faster (among other things) and thus can be cumbersome for\ninitial loading/bootstrapping a Hudi table at first. Bulk insert provides the same semantics as insert, while implementing a sort-based data writing algorithm, which can scale very well for several hundred TBs\nof initial load. However, this just does a best-effort job at sizing files vs guaranteeing file sizes like inserts/upserts do."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"deltastreamer",children:"DeltaStreamer"}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"HoodieDeltaStreamer"})," utility (part of hudi-utilities-bundle) provides the way to ingest from different sources such as DFS or Kafka, with the following capabilities."]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Exactly once ingestion of new events from Kafka, ",(0,n.jsx)(i.a,{href:"https://sqoop.apache.org/docs/1.4.2/SqoopUserGuide#_incremental_imports",children:"incremental imports"})," from Sqoop or output of ",(0,n.jsx)(i.code,{children:"HiveIncrementalPuller"})," or files under a DFS folder"]}),"\n",(0,n.jsx)(i.li,{children:"Support json, avro or a custom record types for the incoming data"}),"\n",(0,n.jsx)(i.li,{children:"Manage checkpoints, rollback & recovery"}),"\n",(0,n.jsxs)(i.li,{children:["Leverage Avro schemas from DFS or Confluent ",(0,n.jsx)(i.a,{href:"https://github.com/confluentinc/schema-registry",children:"schema registry"}),"."]}),"\n",(0,n.jsx)(i.li,{children:"Support for plugging in transformations"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Command line options describe capabilities in more detail"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-java",children:"[hoodie]$ spark-submit --class org.apache.hudi.utilities.deltastreamer.HoodieDeltaStreamer `ls packaging/hudi-utilities-bundle/target/hudi-utilities-bundle-*.jar` --help\nUsage: <main class> [options]\nOptions:\n    --checkpoint\n      Resume Delta Streamer from this checkpoint.\n    --commit-on-errors\n      Commit even when some records failed to be written\n      Default: false\n    --compact-scheduling-minshare\n      Minshare for compaction as defined in\n      https://spark.apache.org/docs/latest/job-scheduling\n      Default: 0\n    --compact-scheduling-weight\n      Scheduling weight for compaction as defined in\n      https://spark.apache.org/docs/latest/job-scheduling\n      Default: 1\n    --continuous\n      Delta Streamer runs in continuous mode running source-fetch -> Transform\n      -> Hudi Write in loop\n      Default: false\n    --delta-sync-scheduling-minshare\n      Minshare for delta sync as defined in\n      https://spark.apache.org/docs/latest/job-scheduling\n      Default: 0\n    --delta-sync-scheduling-weight\n      Scheduling weight for delta sync as defined in\n      https://spark.apache.org/docs/latest/job-scheduling\n      Default: 1\n    --disable-compaction\n      Compaction is enabled for MoR table by default. This flag disables it\n      Default: false\n    --enable-hive-sync\n      Enable syncing to hive\n      Default: false\n    --filter-dupes\n      Should duplicate records from source be dropped/filtered out before\n      insert/bulk-insert\n      Default: false\n    --help, -h\n\n    --hoodie-conf\n      Any configuration that can be set in the properties file (using the CLI\n      parameter \"--propsFilePath\") can also be passed command line using this\n      parameter\n      Default: []\n    --max-pending-compactions\n      Maximum number of outstanding inflight/requested compactions. Delta Sync\n      will not happen unlessoutstanding compactions is less than this number\n      Default: 5\n    --min-sync-interval-seconds\n      the min sync interval of each sync in continuous mode\n      Default: 0\n    --op\n      Takes one of these values : UPSERT (default), INSERT (use when input is\n      purely new data/inserts to gain speed)\n      Default: UPSERT\n      Possible Values: [UPSERT, INSERT, BULK_INSERT]\n    --payload-class\n      subclass of HoodieRecordPayload, that works off a GenericRecord.\n      Implement your own, if you want to do something other than overwriting\n      existing value\n      Default: org.apache.hudi.common.model.OverwriteWithLatestAvroPayload\n    --props\n      path to properties file on localfs or dfs, with configurations for\n      hoodie client, schema provider, key generator and data source. For\n      hoodie client props, sane defaults are used, but recommend use to\n      provide basic things like metrics endpoints, hive configs etc. For\n      sources, referto individual classes, for supported properties.\n      Default: file:///Users/vinoth/bin/hoodie/src/test/resources/delta-streamer-config/dfs-source.properties\n    --schemaprovider-class\n      subclass of org.apache.hudi.utilities.schema.SchemaProvider to attach\n      schemas to input & target table data, built in options:\n      org.apache.hudi.utilities.schema.FilebasedSchemaProvider.Source (See\n      org.apache.hudi.utilities.sources.Source) implementation can implement\n      their own SchemaProvider. For Sources that return Dataset<Row>, the\n      schema is obtained implicitly. However, this CLI option allows\n      overriding the schemaprovider returned by Source.\n    --source-class\n      Subclass of org.apache.hudi.utilities.sources to read data. Built-in\n      options: org.apache.hudi.utilities.sources.{JsonDFSSource (default),\n      AvroDFSSource, JsonKafkaSource, AvroKafkaSource, HiveIncrPullSource}\n      Default: org.apache.hudi.utilities.sources.JsonDFSSource\n    --source-limit\n      Maximum amount of data to read from source. Default: No limit For e.g:\n      DFS-Source => max bytes to read, Kafka-Source => max events to read\n      Default: 9223372036854775807\n    --source-ordering-field\n      Field within source record to decide how to break ties between records\n      with same key in input data. Default: 'ts' holding unix timestamp of\n      record\n      Default: ts\n    --spark-master\n      spark master to use.\n      Default: local[2]\n  * --table-type\n      Type of table. COPY_ON_WRITE (or) MERGE_ON_READ\n  * --target-base-path\n      base path for the target hoodie table. (Will be created if did not exist\n      first time around. If exists, expected to be a hoodie table)\n  * --target-table\n      name of the target table in Hive\n    --transformer-class\n      subclass of org.apache.hudi.utilities.transform.Transformer. Allows\n      transforming raw source Dataset to a target Dataset (conforming to\n      target schema) before writing. Default : Not set. E:g -\n      org.apache.hudi.utilities.transform.SqlQueryBasedTransformer (which\n      allows a SQL query templated to be passed as a transformation function)\n"})}),"\n",(0,n.jsxs)(i.p,{children:["The tool takes a hierarchically composed property file and has pluggable interfaces for extracting data, key generation and providing schema. Sample configs for ingesting from kafka and dfs are\nprovided under ",(0,n.jsx)(i.code,{children:"hudi-utilities/src/test/resources/delta-streamer-config"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["For e.g: once you have Confluent Kafka, Schema registry up & running, produce some test data using (",(0,n.jsx)(i.a,{href:"https://docs.confluent.io/current/ksql/docs/tutorials/generate-custom-test-data",children:"impressions.avro"})," provided by schema-registry repo)"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-java",children:"[confluent-5.0.0]$ bin/ksql-datagen schema=../impressions.avro format=avro topic=impressions key=impressionid\n"})}),"\n",(0,n.jsx)(i.p,{children:"and then ingest it as follows."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-java",children:"[hoodie]$ spark-submit --class org.apache.hudi.utilities.deltastreamer.HoodieDeltaStreamer `ls packaging/hudi-utilities-bundle/target/hudi-utilities-bundle-*.jar` \\\n  --props file://${PWD}/hudi-utilities/src/test/resources/delta-streamer-config/kafka-source.properties \\\n  --schemaprovider-class org.apache.hudi.utilities.schema.SchemaRegistryProvider \\\n  --source-class org.apache.hudi.utilities.sources.AvroKafkaSource \\\n  --source-ordering-field impresssiontime \\\n  --target-base-path file:\\/\\/\\/tmp/hudi-deltastreamer-op \\ \n  --target-table uber.impressions \\\n  --op BULK_INSERT\n"})}),"\n",(0,n.jsxs)(i.p,{children:["In some cases, you may want to migrate your existing table into Hudi beforehand. Please refer to ",(0,n.jsx)(i.a,{href:"/docs/migration_guide",children:"migration guide"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"datasource-writer",children:"Datasource Writer"}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"hudi-spark"})," module offers the DataSource API to write (and also read) any data frame into a Hudi table.\nFollowing is how we can upsert a dataframe, while specifying the field names that need to be used\nfor ",(0,n.jsx)(i.code,{children:"recordKey => _row_key"}),", ",(0,n.jsx)(i.code,{children:"partitionPath => partition"})," and ",(0,n.jsx)(i.code,{children:"precombineKey => timestamp"})]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-java",children:'inputDF.write()\n       .format("org.apache.hudi")\n       .options(clientOpts) // any of the Hudi client opts can be passed in as well\n       .option(DataSourceWriteOptions.RECORDKEY_FIELD_OPT_KEY(), "_row_key")\n       .option(DataSourceWriteOptions.PARTITIONPATH_FIELD_OPT_KEY(), "partition")\n       .option(DataSourceWriteOptions.PRECOMBINE_FIELD_OPT_KEY(), "timestamp")\n       .option(HoodieWriteConfig.TABLE_NAME, tableName)\n       .mode(SaveMode.Append)\n       .save(basePath);\n'})}),"\n",(0,n.jsx)(i.h2,{id:"syncing-to-hive",children:"Syncing to Hive"}),"\n",(0,n.jsxs)(i.p,{children:["Both tools above support syncing of the table's latest schema to Hive metastore, such that queries can pick up new columns and partitions.\nIn case, its preferable to run this from commandline or in an independent jvm, Hudi provides a ",(0,n.jsx)(i.code,{children:"HiveSyncTool"}),", which can be invoked as below,\nonce you have built the hudi-hive module. Following is how we sync the above Datasource Writer written table to Hive metastore."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-java",children:"cd hudi-hive\n./run_sync_tool.sh  --jdbc-url jdbc:hive2:\\/\\/hiveserver:10000 --user hive --pass hive --partitioned-by partition --base-path <basePath> --database default --table <tableName>\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Starting with Hudi 0.5.1 version read optimized version of merge-on-read tables are suffixed '_ro' by default. For backwards compatibility with older Hudi versions,\nan optional HiveSyncConfig - ",(0,n.jsx)(i.code,{children:"--skip-ro-suffix"}),", has been provided to turn off '_ro' suffixing if desired. Explore other hive sync options using the following command:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-java",children:"cd hudi-hive\n./run_sync_tool.sh\n [hudi-hive]$ ./run_sync_tool.sh --help\n"})}),"\n",(0,n.jsx)(i.h2,{id:"deletes",children:"Deletes"}),"\n",(0,n.jsxs)(i.p,{children:["Hudi supports implementing two types of deletes on data stored in Hudi tables, by enabling the user to specify a different record payload implementation.\nFor more info refer to ",(0,n.jsx)(i.a,{href:"https://cwiki.apache.org/confluence/x/6IqvC",children:"Delete support in Hudi"}),"."]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Soft Deletes"})," : With soft deletes, user wants to retain the key but just null out the values for all other fields.\nThis can be simply achieved by ensuring the appropriate fields are nullable in the table schema and simply upserting the table after setting these fields to null."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Hard Deletes"})," : A stronger form of delete is to physically remove any trace of the record from the table. This can be achieved by issuing an upsert with a custom payload implementation\nvia either DataSource or DeltaStreamer which always returns Optional.Empty as the combined value. Hudi ships with a built-in ",(0,n.jsx)(i.code,{children:"org.apache.hudi.EmptyHoodieRecordPayload"})," class that does exactly this."]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-java",children:' deleteDF // dataframe containing just records to be deleted\n   .write().format("org.apache.hudi")\n   .option(...) // Add HUDI options like record-key, partition-path and others as needed for your setup\n   // specify record_key, partition_key, precombine_fieldkey & usual params\n   .option(DataSourceWriteOptions.PAYLOAD_CLASS_OPT_KEY, "org.apache.hudi.EmptyHoodieRecordPayload")\n \n'})}),"\n",(0,n.jsx)(i.h2,{id:"optimized-dfs-access",children:"Optimized DFS Access"}),"\n",(0,n.jsx)(i.p,{children:"Hudi also performs several key storage management functions on the data stored in a Hudi table. A key aspect of storing data on DFS is managing file sizes and counts\nand reclaiming storage space. For e.g HDFS is infamous for its handling of small files, which exerts memory/RPC pressure on the Name Node and can potentially destabilize\nthe entire cluster. In general, query engines provide much better performance on adequately sized columnar files, since they can effectively amortize cost of obtaining\ncolumn statistics etc. Even on some cloud data stores, there is often cost to listing directories with large number of small files."}),"\n",(0,n.jsx)(i.p,{children:"Here are some ways to efficiently manage the storage of your Hudi tables."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.a,{href:"/docs/configurations#compactionSmallFileSize",children:"small file handling feature"})," in Hudi, profiles incoming workload\nand distributes inserts to existing file groups instead of creating new file groups, which can lead to small files."]}),"\n",(0,n.jsxs)(i.li,{children:["Cleaner can be ",(0,n.jsx)(i.a,{href:"/docs/configurations#retainCommits",children:"configured"})," to clean up older file slices, more or less aggressively depending on maximum time for queries to run & lookback needed for incremental pull"]}),"\n",(0,n.jsxs)(i.li,{children:["User can also tune the size of the ",(0,n.jsx)(i.a,{href:"/docs/configurations#limitFileSize",children:"base/parquet file"}),", ",(0,n.jsx)(i.a,{href:"/docs/configurations#logFileMaxSize",children:"log files"})," & expected ",(0,n.jsx)(i.a,{href:"/docs/configurations#parquetCompressionRatio",children:"compression ratio"}),",\nsuch that sufficient number of inserts are grouped into the same file group, resulting in well sized base files ultimately."]}),"\n",(0,n.jsxs)(i.li,{children:["Intelligently tuning the ",(0,n.jsx)(i.a,{href:"/docs/configurations#withBulkInsertParallelism",children:"bulk insert parallelism"}),", can again in nicely sized initial file groups. It is in fact critical to get this right, since the file groups\nonce created cannot be deleted, but simply expanded as explained before."]}),"\n",(0,n.jsxs)(i.li,{children:["For workloads with heavy updates, the ",(0,n.jsx)(i.a,{href:"/docs/concepts#merge-on-read-table",children:"merge-on-read table"})," provides a nice mechanism for ingesting quickly into smaller files and then later merging them into larger base files via compaction."]}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>o});var n=t(96540);const s={},a=n.createContext(s);function r(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);
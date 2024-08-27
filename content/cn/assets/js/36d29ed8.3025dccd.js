"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[58484],{5933:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=t(74848),a=t(28453);t(11470),t(19365);const i={title:"SQL DDL",summary:"In this page, we discuss using SQL DDL commands with Hudi",toc:!0,last_modified_at:null},s=void 0,l={id:"sql_ddl",title:"SQL DDL",description:"This page describes support for creating and altering tables using SQL across various engines.",source:"@site/versioned_docs/version-0.14.0/sql_ddl.md",sourceDirName:".",slug:"/sql_ddl",permalink:"/cn/docs/0.14.0/sql_ddl",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.14.0/sql_ddl.md",tags:[],version:"0.14.0",frontMatter:{title:"SQL DDL",summary:"In this page, we discuss using SQL DDL commands with Hudi",toc:!0,last_modified_at:null},sidebar:"docs",previous:{title:"Record Payload",permalink:"/cn/docs/0.14.0/record_payload"},next:{title:"SQL DML",permalink:"/cn/docs/0.14.0/sql_dml"}},d={},o=[{value:"Spark SQL",id:"spark-sql",level:2},{value:"Create table",id:"create-table",level:3},{value:"Create non-partitioned table",id:"create-non-partitioned-table",level:3},{value:"Create partitioned table",id:"create-partitioned-table",level:3},{value:"Create table with record keys and ordering fields",id:"create-table-with-record-keys-and-ordering-fields",level:3},{value:"Create table from an external location",id:"create-table-from-an-external-location",level:3},{value:"Create Table As Select (CTAS)",id:"create-table-as-select-ctas",level:3},{value:"Setting Hudi configs",id:"setting-hudi-configs",level:3},{value:"Using set command",id:"using-set-command",level:4},{value:"Using table properties",id:"using-table-properties",level:4},{value:"Table Properties",id:"table-properties",level:3},{value:"Passing Lock Providers for Concurrent Writers",id:"passing-lock-providers-for-concurrent-writers",level:4},{value:"Enabling Column Stats / Record Level Index for the table",id:"enabling-column-stats--record-level-index-for-the-table",level:4},{value:"Spark Alter Table",id:"spark-alter-table",level:3},{value:"Modifying Table Properties",id:"modifying-table-properties",level:3},{value:"Alter config options",id:"alter-config-options",level:3},{value:"Show and drop partitions",id:"show-and-drop-partitions",level:3},{value:"Caveats",id:"caveats",level:3},{value:"Flink",id:"flink",level:2},{value:"Create Catalog",id:"create-catalog",level:3},{value:"Options",id:"options",level:4},{value:"Create Table",id:"create-table-1",level:3},{value:"Alter Table",id:"alter-table",level:3},{value:"Supported Types",id:"supported-types",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This page describes support for creating and altering tables using SQL across various engines."}),"\n",(0,r.jsx)(n.h2,{id:"spark-sql",children:"Spark SQL"}),"\n",(0,r.jsx)(n.h3,{id:"create-table",children:"Create table"}),"\n",(0,r.jsx)(n.p,{children:"You can create tables using standard CREATE TABLE syntax, which supports partitioning and passing table properties."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE [IF NOT EXISTS] [db_name.]table_name\n  [(col_name data_type [COMMENT col_comment], ...)]\n  [COMMENT table_comment]\n  [PARTITIONED BY (col_name, ...)]\n  [ROW FORMAT row_format]\n  [STORED AS file_format]\n  [LOCATION path]\n  [TBLPROPERTIES (property_name=property_value, ...)]\n  [AS select_statement];\n"})}),"\n",(0,r.jsxs)(n.admonition,{title:"NOTE:",type:"note",children:[(0,r.jsxs)(n.p,{children:["For users running this tutorial locally and have a Spark-Hive(HMS) integration in their environment: If you use\n",(0,r.jsx)(n.code,{children:"default"})," database or if you don't provide ",(0,r.jsx)(n.code,{children:"[LOCATION path]"})," with the DDL statement, Spark will return\n",(0,r.jsx)(n.code,{children:"java.io.IOException: Mkdirs failed to create file:/user/hive/warehouse/hudi_table/.hoodie"})," error.\nTo get around this, you can follow either of the two options mentioned below:"]}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Create a database i.e. ",(0,r.jsx)(n.code,{children:"CREATE DATABASE hudidb;"})," and use it i.e. ",(0,r.jsx)(n.code,{children:"USE hudidb;"})," before running the DDL statement."]}),"\n",(0,r.jsxs)(n.li,{children:["Or provide a path using ",(0,r.jsx)(n.code,{children:"LOCATION"})," keyword to persist the data with the DDL statement."]}),"\n"]})]}),"\n",(0,r.jsx)(n.h3,{id:"create-non-partitioned-table",children:"Create non-partitioned table"}),"\n",(0,r.jsx)(n.p,{children:"Creating a non-partitioned table is as simple as creating a regular table."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"-- create a Hudi table\nCREATE TABLE IF NOT EXISTS hudi_table (\n  id INT,\n  name STRING,\n  price DOUBLE\n) USING hudi;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"create-partitioned-table",children:"Create partitioned table"}),"\n",(0,r.jsxs)(n.p,{children:["A partitioned table can be created by adding a ",(0,r.jsx)(n.code,{children:"partitioned by"})," clause. Partitioning helps to organize the data into multiple folders\nbased on the partition columns. It can also help speed up queries and index lookups by limiting the amount of metadata, index and data scanned."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE IF NOT EXISTS hudi_table_partitioned (\n  id BIGINT,\n  name STRING,\n  dt STRING,\n  hh STRING\n) USING hudi\nTBLPROPERTIES (\n  type = 'cow'\n)\nPARTITIONED BY (dt);\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["You can also create a table partitioned by multiple fields by supplying comma-separated field names.\nWhen creating a table partitioned by multiple fields, ensure that you specify the columns in the ",(0,r.jsx)(n.code,{children:"PARTITIONED BY"})," clause\nin the same order as they appear in the ",(0,r.jsx)(n.code,{children:"CREATE TABLE"})," schema. For example, for the above table, the partition fields\nshould be specified as ",(0,r.jsx)(n.code,{children:"PARTITIONED BY (dt, hh)"}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"create-table-with-record-keys-and-ordering-fields",children:"Create table with record keys and ordering fields"}),"\n",(0,r.jsxs)(n.p,{children:["As discussed ",(0,r.jsx)(n.a,{href:"/docs/quick-start-guide#keys",children:"here"}),", tables track each record in the table using a record key. Hudi auto-generated a highly compressed\nkey for each new record in the examples so far. If you want to use an existing field as the key, you can set the ",(0,r.jsx)(n.code,{children:"primaryKey"})," option.\nTypically, this is also accompanied by configuring a ",(0,r.jsx)(n.code,{children:"preCombineField"})," option to deal with out-of-order data and potential\nduplicate records with the same key in the incoming writes."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"You can choose multiple fields as primary keys for a given table on a need basis. For eg, \"primaryKey = 'id, name'\", and\nthis materializes a composite key of the two fields, which can be useful for exploring the table."})}),"\n",(0,r.jsxs)(n.p,{children:["Here is an example of creating a table using both options. Typically, a field that denotes the time of the event or\nfact, e.g., order creation time, event generation time etc., is used as the ",(0,r.jsx)(n.em,{children:"preCombineField"}),". Hudi resolves multiple versions\nof the same record by ordering based on this field when queries are run on the table."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE IF NOT EXISTS hudi_table_keyed (\n  id INT,\n  name STRING,\n  price DOUBLE,\n  ts BIGINT\n) USING hudi\nTBLPROPERTIES (\n  type = 'cow',\n  primaryKey = 'id',\n  preCombineField = 'ts'\n);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"create-table-from-an-external-location",children:"Create table from an external location"}),"\n",(0,r.jsxs)(n.p,{children:["Often, Hudi tables are created from streaming writers like the ",(0,r.jsx)(n.a,{href:"/docs/hoodie_streaming_ingestion#hudi-streamer",children:"streamer tool"}),", which\nmay later need some SQL statements to run on them. You can create an External table using the ",(0,r.jsx)(n.code,{children:"location"})," statement."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE hudi_table_external\nUSING hudi\nLOCATION 'file:///tmp/hudi_table/';\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"You don't need to specify the schema and any properties except the partitioned columns if they exist. Hudi can automatically\nrecognize the schema and configurations."})}),"\n",(0,r.jsx)(n.h3,{id:"create-table-as-select-ctas",children:"Create Table As Select (CTAS)"}),"\n",(0,r.jsxs)(n.p,{children:["Hudi supports CTAS(Create table as select) to support initial loads into Hudi tables. To ensure this is done efficiently,\neven for large loads, CTAS uses ",(0,r.jsx)(n.strong,{children:"bulk insert"})," as the write operation"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"# create managed parquet table\nCREATE TABLE parquet_table\nUSING parquet\nLOCATION 'file:///tmp/parquet_dataset/';\n\n# CTAS by loading data into Hudi table\nCREATE TABLE hudi_table_ctas\nUSING hudi\nTBLPROPERTIES (\n  type = 'cow',\n  preCombineField = 'ts'\n)\nPARTITIONED BY (dt)\nAS SELECT * FROM parquet_table;\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can create a non-partitioned table as well"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"# create managed parquet table\nCREATE TABLE parquet_table\nUSING parquet\nLOCATION 'file:///tmp/parquet_dataset/';\n\n# CTAS by loading data into Hudi table\nCREATE TABLE hudi_table_ctas\nUSING hudi\nTBLPROPERTIES (\n  type = 'cow',\n  preCombineField = 'ts'\n)\nAS SELECT * FROM parquet_table;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If you prefer explicitly setting the record keys, you can do so by setting ",(0,r.jsx)(n.code,{children:"primaryKey"})," config in table properties."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE hudi_table_ctas\nUSING hudi\nTBLPROPERTIES (\n  type = 'cow',\n  primaryKey = 'id'\n)\nPARTITIONED BY (dt)\nAS\nSELECT 1 AS id, 'a1' AS name, 10 AS price, 1000 AS dt;\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can also use CTAS to copy data across external locations"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"# create managed parquet table\nCREATE TABLE parquet_table\nUSING parquet\nLOCATION 'file:///tmp/parquet_dataset/*.parquet';\n\n# CTAS by loading data into hudi table\nCREATE TABLE hudi_table_ctas\nUSING hudi\nLOCATION 'file:///tmp/hudi/hudi_tbl/'\nTBLPROPERTIES (\n  type = 'cow'\n)\nAS SELECT * FROM parquet_table;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"setting-hudi-configs",children:"Setting Hudi configs"}),"\n",(0,r.jsx)(n.p,{children:"There are different ways you can pass the configs for a given hudi table."}),"\n",(0,r.jsx)(n.h4,{id:"using-set-command",children:"Using set command"}),"\n",(0,r.jsxs)(n.p,{children:["You can use the ",(0,r.jsx)(n.strong,{children:"set"})," command to set any of Hudi's write configs. This will apply to operations across the whole spark session."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"set hoodie.insert.shuffle.parallelism = 100;\nset hoodie.upsert.shuffle.parallelism = 100;\nset hoodie.delete.shuffle.parallelism = 100;\n"})}),"\n",(0,r.jsx)(n.h4,{id:"using-table-properties",children:"Using table properties"}),"\n",(0,r.jsx)(n.p,{children:"You can also configure table options when creating a table. This will be applied only for the table and override any SET command values."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE IF NOT EXISTS tableName (\n  colName1 colType1,\n  colName2 colType2,\n  ...\n) USING hudi\nTBLPROPERTIES (\n  primaryKey = '${colName1}',\n  type = 'cow',\n  ${hoodie.config.key1} = '${hoodie.config.value1}',\n  ${hoodie.config.key2} = '${hoodie.config.value2}',\n  ....\n);\n\ne.g.\nCREATE TABLE IF NOT EXISTS hudi_table (\n  id BIGINT,\n  name STRING,\n  price DOUBLE\n) USING hudi\nTBLPROPERTIES (\n  primaryKey = 'id',\n  type = 'cow',\n  hoodie.cleaner.fileversions.retained = '20',\n  hoodie.keep.max.commits = '20'\n);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"table-properties",children:"Table Properties"}),"\n",(0,r.jsx)(n.p,{children:"Users can set table properties while creating a table. The important table properties are discussed below."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter Name"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"type"}),(0,r.jsx)(n.td,{children:"cow"}),(0,r.jsxs)(n.td,{children:["The table type to create. ",(0,r.jsx)(n.code,{children:"type = 'cow'"})," creates a COPY-ON-WRITE table, while ",(0,r.jsx)(n.code,{children:"type = 'mor'"})," creates a MERGE-ON-READ table. Same as ",(0,r.jsx)(n.code,{children:"hoodie.datasource.write.table.type"}),". More details can be found ",(0,r.jsx)(n.a,{href:"/docs/table_types",children:"here"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"primaryKey"}),(0,r.jsx)(n.td,{children:"uuid"}),(0,r.jsxs)(n.td,{children:["The primary key field names of the table separated by commas. Same as ",(0,r.jsx)(n.code,{children:"hoodie.datasource.write.recordkey.field"}),". If this config is ignored, hudi will auto-generate primary keys. If explicitly set, primary key generation will honor user configuration."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"preCombineField"}),(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["The pre-combine field of the table. It is used for resolving the final version of the record among multiple versions. Generally, ",(0,r.jsx)(n.code,{children:"event time"})," or another similar column will be used for ordering purposes. Hudi will be able to handle out-of-order data using the preCombine field value."]})]})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"primaryKey"}),", ",(0,r.jsx)(n.code,{children:"preCombineField"}),", and ",(0,r.jsx)(n.code,{children:"type"})," and other properties are case-sensitive."]})}),"\n",(0,r.jsx)(n.h4,{id:"passing-lock-providers-for-concurrent-writers",children:"Passing Lock Providers for Concurrent Writers"}),"\n",(0,r.jsxs)(n.p,{children:["Hudi requires a lock provider to support concurrent writers or asynchronous table services. Users can pass these table\nproperties into ",(0,r.jsx)(n.em,{children:"TBLPROPERTIES"})," as well. Below is an example for a Zookeeper based configuration."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'-- Properties to use Lock configurations to support Multi Writers\nTBLPROPERTIES(\n  hoodie.write.lock.zookeeper.url = "zookeeper",\n  hoodie.write.lock.zookeeper.port = "2181",\n  hoodie.write.lock.zookeeper.lock_key = "tableName",\n  hoodie.write.lock.provider = "org.apache.hudi.client.transaction.lock.ZookeeperBasedLockProvider",\n  hoodie.write.concurrency.mode = "optimistic_concurrency_control",\n  hoodie.write.lock.zookeeper.base_path = "/tableName"\n)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"enabling-column-stats--record-level-index-for-the-table",children:"Enabling Column Stats / Record Level Index for the table"}),"\n",(0,r.jsx)(n.p,{children:"Hudi provides the ability to leverage rich metadata and index about the table, speed up DMLs and queries.\nFor e.g: collection of column statistics can be enabled to perform quick data skipping or a record-level index can be used to perform fast updates or point lookups\nusing the following table properties."}),"\n",(0,r.jsxs)(n.p,{children:["For more, see ",(0,r.jsx)("a",{href:"/docs/configurations/#Metadata-Configs",children:"Metadata Configurations"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"TBLPROPERTIES(\n  'hoodie.metadata.index.column.stats.enable' = 'true'\n  'hoodie.metadata.record.index.enable' = 'true' \n)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"spark-alter-table",children:"Spark Alter Table"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"-- Alter table name\nALTER TABLE oldTableName RENAME TO newTableName;\n\n-- Alter table add columns\nALTER TABLE tableIdentifier ADD COLUMNS(colAndType [, colAndType]);\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"--rename to:\nALTER TABLE hudi_table RENAME TO hudi_table_renamed;\n\n--add column:\nALTER TABLE hudi_table ADD COLUMNS(remark STRING);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"modifying-table-properties",children:"Modifying Table Properties"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"-- alter table ... set|unset\nALTER TABLE tableIdentifier SET|UNSET TBLPROPERTIES (table_property = 'property_value');\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE hudi_table SET TBLPROPERTIES (hoodie.keep.max.commits = '10');\nALTER TABLE hudi_table SET TBLPROPERTIES (\"note\" = \"don't drop this table\");\n\nALTER TABLE hudi_table UNSET TBLPROPERTIES IF EXISTS (hoodie.keep.max.commits);\nALTER TABLE hudi_table UNSET TBLPROPERTIES IF EXISTS ('note');\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Currently, trying to change the column type may throw an error ",(0,r.jsx)(n.code,{children:"ALTER TABLE CHANGE COLUMN is not supported for changing column colName with oldColType to colName with newColType."}),", due to an ",(0,r.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/SPARK-21823",children:"open SPARK issue"})]})}),"\n",(0,r.jsx)(n.h3,{id:"alter-config-options",children:"Alter config options"}),"\n",(0,r.jsxs)(n.p,{children:["You can also alter the write config for a table by the ",(0,r.jsx)(n.strong,{children:"ALTER TABLE SET SERDEPROPERTIES"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"-- alter table ... set|unset\nALTER TABLE tableName SET SERDEPROPERTIES ('property' = 'property_value');\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:" ALTER TABLE hudi_table SET SERDEPROPERTIES ('key1' = 'value1');\n"})}),"\n",(0,r.jsx)(n.h3,{id:"show-and-drop-partitions",children:"Show and drop partitions"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"-- Show partitions\nSHOW PARTITIONS tableIdentifier;\n\n-- Drop partition\nALTER TABLE tableIdentifier DROP PARTITION ( partition_col_name = partition_col_val [ , ... ] );\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"--Show partition:\nSHOW PARTITIONS hudi_table;\n\n--Drop partition\uff1a\nALTER TABLE hudi_table DROP PARTITION (dt='2021-12-09', hh='10');\n"})}),"\n",(0,r.jsx)(n.h3,{id:"caveats",children:"Caveats"}),"\n",(0,r.jsx)(n.p,{children:"Hudi currently has the following limitations when using Spark SQL, to create/alter tables."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ALTER TABLE ... RENAME TO ..."})," is not supported when using AWS Glue Data Catalog as hive metastore as Glue itself does\nnot support table renames."]}),"\n",(0,r.jsxs)(n.li,{children:["A new Hudi table created by Spark SQL will by default set ",(0,r.jsx)(n.code,{children:"hoodie.datasource.write.hive_style_partitioning=true"}),", for ease\nof use. This can be overridden using table properties."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"flink",children:"Flink"}),"\n",(0,r.jsx)(n.h3,{id:"create-catalog",children:"Create Catalog"}),"\n",(0,r.jsxs)(n.p,{children:["The catalog helps to manage the SQL tables, the table can be shared among sessions if the catalog persists the table definitions.\nFor ",(0,r.jsx)(n.code,{children:"hms"})," mode, the catalog also supplements the hive syncing options."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE CATALOG hoodie_catalog\n  WITH (\n    'type'='hudi',\n    'catalog.path' = '${catalog default root path}',\n    'hive.conf.dir' = '${directory where hive-site.xml is located}',\n    'mode'='hms' -- supports 'dfs' mode that uses the DFS backend for table DDLs persistence\n  );\n"})}),"\n",(0,r.jsx)(n.h4,{id:"options",children:"Options"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Option Name"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Remarks"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"catalog.path"})}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"--"}),(0,r.jsxs)(n.td,{children:["Default path for the catalog's table storage, the path is used to infer the table path automatically, the default table path: ",(0,r.jsx)(n.code,{children:"${catalog.path}/${db_name}/${table_name}"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"default-database"})}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"default"}),(0,r.jsx)(n.td,{children:"default database name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"hive.conf.dir"})}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"--"}),(0,r.jsxs)(n.td,{children:["The directory where hive-site.xml is located, only valid in ",(0,r.jsx)(n.code,{children:"hms"})," mode"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"mode"})}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"dfs"}),(0,r.jsxs)(n.td,{children:["Supports ",(0,r.jsx)(n.code,{children:"hms"})," mode that uses HMS to persist the table options"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"table.external"})}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsxs)(n.td,{children:["Whether to create the external table, only valid in ",(0,r.jsx)(n.code,{children:"hms"})," mode"]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"create-table-1",children:"Create Table"}),"\n",(0,r.jsxs)(n.p,{children:["The following is an example of creating a Flink table. Read the ",(0,r.jsx)(n.a,{href:"/docs/flink-quick-start-guide",children:"Flink Quick Start"})," guide for more examples."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE hudi_table2(\n  id int, \n  name string, \n  price double\n)\nWITH (\n'connector' = 'hudi',\n'path' = 's3://bucket-name/hudi/',\n'table.type' = 'MERGE_ON_READ' -- this creates a MERGE_ON_READ table, default is COPY_ON_WRITE\n);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"alter-table",children:"Alter Table"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE tableA RENAME TO tableB;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"supported-types",children:"Supported Types"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Spark"}),(0,r.jsx)(n.th,{children:"Hudi"}),(0,r.jsx)(n.th,{children:"Notes"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"byte"}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"short"}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"integer"}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"long"}),(0,r.jsx)(n.td,{children:"long"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"date"}),(0,r.jsx)(n.td,{children:"date"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"timestamp"}),(0,r.jsx)(n.td,{children:"timestamp"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{children:"float"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"double"}),(0,r.jsx)(n.td,{children:"double"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"decimal"}),(0,r.jsx)(n.td,{children:"decimal"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"binary"}),(0,r.jsx)(n.td,{children:"bytes"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"array"}),(0,r.jsx)(n.td,{children:"array"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"map"}),(0,r.jsx)(n.td,{children:"map"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"struct"}),(0,r.jsx)(n.td,{children:"struct"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"char"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"not supported"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"varchar"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"not supported"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"numeric"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"not supported"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"null"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"not supported"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"not supported"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var i=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(96540),a=t(34164),i=t(23104),s=t(56347),l=t(205),d=t(57485),o=t(31682),c=t(70679);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=u(e),[s,d]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[o,h]=x({queryString:t,groupId:a}),[m,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),b=(()=>{const e=o??m;return p({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{b&&d(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),j(e)}),[h,j,i]),tabValues:i}}var j=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function f(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),c=e=>{const n=e.currentTarget,t=d.indexOf(n),a=l[t].value;a!==r&&(o(n),s(a))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>d.push(e),onKeyDown:h,onClick:c,...i,className:(0,a.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function T(e){let{lazy:n,children:t,selectedValue:i}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function E(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,g.jsx)(f,{...n,...e}),(0,g.jsx)(T,{...n,...e})]})}function y(e){const n=(0,j.A)();return(0,g.jsx)(E,{...e,children:h(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(96540);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);
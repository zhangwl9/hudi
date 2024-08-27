"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[96276],{73925:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var a=t(74848),i=t(28453),r=t(11470),l=t(19365);const s={title:"Flink Quick Start",toc:!0,last_modified_at:new Date("2023-08-16T04:53:57.000Z")},o=void 0,d={id:"flink-quick-start-guide",title:"Flink Quick Start",description:"This page introduces Flink-Hudi integration. We can feel the unique charm of how Flink brings in the power of streaming into Hudi.",source:"@site/versioned_docs/version-0.15.0/flink-quick-start-guide.md",sourceDirName:".",slug:"/flink-quick-start-guide",permalink:"/docs/flink-quick-start-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.15.0/flink-quick-start-guide.md",tags:[],version:"0.15.0",frontMatter:{title:"Flink Quick Start",toc:!0,last_modified_at:"2023-08-16T04:53:57.000Z"},sidebar:"docs",previous:{title:"Spark Quick Start",permalink:"/docs/quick-start-guide"},next:{title:"Docker Demo",permalink:"/docs/docker_demo"}},c={},u=[{value:"Setup",id:"setup",level:2},{value:"Flink Support Matrix",id:"flink-support-matrix",level:3},{value:"Download Flink and Start Flink cluster",id:"download-flink-and-start-flink-cluster",level:3},{value:"Start Flink SQL client",id:"start-flink-sql-client",level:3},{value:"Create Table",id:"create-table",level:2},{value:"Insert Data",id:"insert-data",level:2},{value:"Query Data",id:"query-data",level:2},{value:"Update Data",id:"update-data",level:2},{value:"Delete Data",id:"deletes",level:2},{value:"Row-level Delete",id:"row-level-delete",level:3},{value:"Batch Delete",id:"batch-delete",level:3},{value:"Streaming Query",id:"streaming-query",level:2},{value:"Change Data Capture Query",id:"change-data-capture-query",level:2},{value:"Where To Go From Here?",id:"where-to-go-from-here",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"This page introduces Flink-Hudi integration. We can feel the unique charm of how Flink brings in the power of streaming into Hudi."}),"\n",(0,a.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,a.jsx)(n.h3,{id:"flink-support-matrix",children:"Flink Support Matrix"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{style:{textAlign:"left"},children:"Hudi"}),(0,a.jsx)(n.th,{style:{textAlign:"left"},children:"Supported Flink version"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{style:{textAlign:"left"},children:"0.15.x"}),(0,a.jsx)(n.td,{style:{textAlign:"left"},children:"1.14.x, 1.15.x, 1.16.x, 1.17.x, 1.18.x"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{style:{textAlign:"left"},children:"0.14.x"}),(0,a.jsx)(n.td,{style:{textAlign:"left"},children:"1.13.x, 1.14.x, 1.15.x, 1.16.x, 1.17.x"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{style:{textAlign:"left"},children:"0.13.x"}),(0,a.jsx)(n.td,{style:{textAlign:"left"},children:"1.13.x, 1.14.x, 1.15.x, 1.16.x"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{style:{textAlign:"left"},children:"0.12.x"}),(0,a.jsx)(n.td,{style:{textAlign:"left"},children:"1.13.x, 1.14.x, 1.15.x"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{style:{textAlign:"left"},children:"0.11.x"}),(0,a.jsx)(n.td,{style:{textAlign:"left"},children:"1.13.x, 1.14.x"})]})]})]}),"\n",(0,a.jsx)(n.h3,{id:"download-flink-and-start-flink-cluster",children:"Download Flink and Start Flink cluster"}),"\n",(0,a.jsxs)(n.p,{children:["Hudi works with Flink 1.13 (up to Hudi 0.14.x release), Flink 1.14, Flink 1.15, Flink 1.16, Flink 1.17, and Flink 1.18.\nYou can follow the instructions ",(0,a.jsx)(n.a,{href:"https://flink.apache.org/downloads",children:"here"})," for setting up Flink. Then, start a standalone Flink cluster\nwithin hadoop environment. In case we are trying on local setup, then we could download hadoop binaries and set HADOOP_HOME."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# HADOOP_HOME is your hadoop root directory after unpack the binary package.\nexport HADOOP_CLASSPATH=`$HADOOP_HOME/bin/hadoop classpath`\n\n# Start the Flink standalone cluster\n./bin/start-cluster.sh\n"})}),"\n",(0,a.jsxs)("div",{className:"notice--info",children:[(0,a.jsx)("h4",{children:"Please note the following: "}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"We suggest hadoop 2.9.x+ version because some of the object storage has filesystem implementation only after that"}),(0,a.jsx)("li",{children:"The flink-parquet and flink-avro formats are already packaged into the hudi-flink-bundle jar"})]})]}),"\n",(0,a.jsxs)(r.A,{defaultValue:"flinksql",values:[{label:"Flink SQL",value:"flinksql"},{label:"DataStream API",value:"dataStream"}],children:[(0,a.jsxs)(l.A,{value:"flinksql",children:[(0,a.jsxs)(n.p,{children:["We use the ",(0,a.jsx)(n.a,{href:"https://ci.apache.org/projects/flink/flink-docs-release-1.13/docs/dev/table/sqlclient/",children:"Flink Sql Client"})," because it's a good\nquick start tool for SQL users."]}),(0,a.jsx)(n.h3,{id:"start-flink-sql-client",children:"Start Flink SQL client"}),(0,a.jsxs)(n.p,{children:["Hudi supports packaged bundle jar for Flink, which should be loaded in the Flink SQL Client when it starts up.\nYou can build the jar manually under path ",(0,a.jsx)(n.code,{children:"hudi-source-dir/packaging/hudi-flink-bundle"}),"(see ",(0,a.jsx)(n.a,{href:"/docs/syncing_metastore#install",children:"Build Flink Bundle Jar"}),"), or download it from the\n",(0,a.jsx)(n.a,{href:"https://repo.maven.apache.org/maven2/org/apache/hudi/",children:"Apache Official Repository"}),"."]}),(0,a.jsx)(n.p,{children:"Now start the SQL CLI:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# For Flink versions: 1.13 - 1.18\nexport FLINK_VERSION=1.17 \nexport HUDI_VERSION=0.15.0\nwget https://repo1.maven.org/maven2/org/apache/hudi/hudi-flink${FLINK_VERSION}-bundle/${HUDI_VERSION}/hudi-flink${FLINK_VERSION}-bundle-${HUDI_VERSION}.jar -P $FLINK_HOME/lib/\n./bin/sql-client.sh embedded -j lib/hudi-flink${FLINK_VERSION}-bundle-${HUDI_VERSION}.jar shell\n"})}),(0,a.jsx)(n.p,{children:"Setup table name, base path and operate using SQL for this guide.\nThe SQL CLI only executes the SQL line by line."})]}),(0,a.jsxs)(l.A,{value:"dataStream",children:[(0,a.jsx)(n.p,{children:"Hudi works with Flink 1.13 (up to Hudi 0.14.x release), Flink 1.14, Flink 1.15, Flink 1.16, Flink 1.17, and Flink 1.18.\nPlease add the desired dependency to your project:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"\x3c!-- For Flink versions 1.13 - 1.18--\x3e\n<properties>\n    <flink.version>1.17.0</flink.version>\n    <flink.binary.version>1.17</flink.binary.version>\n    <hudi.version>0.15.0</hudi.version>\n</properties>\n<dependency>\n    <groupId>org.apache.hudi</groupId>\n    <artifactId>hudi-flink${flink.binary.version}-bundle</artifactId>\n    <version>${hudi.version}</version>\n</dependency>\n"})})]})]}),"\n",(0,a.jsx)(n.h2,{id:"create-table",children:"Create Table"}),"\n",(0,a.jsx)(n.p,{children:"First, let's create a Hudi table. Here, we use a partitioned table for illustration, but Hudi also supports non-partitioned tables."}),"\n",(0,a.jsxs)(r.A,{defaultValue:"flinksql",values:[{label:"Flink SQL",value:"flinksql"},{label:"DataStream API",value:"dataStream"}],children:[(0,a.jsxs)(l.A,{value:"flinksql",children:[(0,a.jsx)(n.p,{children:"Here is an example of creating a flink Hudi table."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- sets up the result mode to tableau to show the results directly in the CLI\nset sql-client.execution.result-mode = tableau;\nDROP TABLE hudi_table;\nCREATE TABLE hudi_table(\n    ts BIGINT,\n    uuid VARCHAR(40) PRIMARY KEY NOT ENFORCED,\n    rider VARCHAR(20),\n    driver VARCHAR(20),\n    fare DOUBLE,\n    city VARCHAR(20)\n)\nPARTITIONED BY (`city`)\nWITH (\n  'connector' = 'hudi',\n  'path' = 'file:///tmp/hudi_table',\n  'table.type' = 'MERGE_ON_READ'\n);\n"})})]}),(0,a.jsx)(l.A,{value:"dataStream",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// Java\n// First commit will auto-initialize the table, if it did not exist in the specified base path. \n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"insert-data",children:"Insert Data"}),"\n",(0,a.jsxs)(r.A,{defaultValue:"flinksql",values:[{label:"Flink SQL",value:"flinksql"},{label:"DataStream API",value:"dataStream"}],children:[(0,a.jsxs)(l.A,{value:"flinksql",children:[(0,a.jsxs)(n.p,{children:["Insert data into the Hudi table using SQL ",(0,a.jsx)(n.code,{children:"VALUES"}),"."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- insert data using values\nINSERT INTO hudi_table\nVALUES\n(1695159649087,'334e26e9-8355-45cc-97c6-c31daf0df330','rider-A','driver-K',19.10,'san_francisco'),\n(1695091554788,'e96c4396-3fad-413a-a942-4cb36106d721','rider-C','driver-M',27.70 ,'san_francisco'),\n(1695046462179,'9909a8b1-2d15-4d3d-8ec9-efc48c536a00','rider-D','driver-L',33.90 ,'san_francisco'),\n(1695332066204,'1dced545-862b-4ceb-8b43-d2a568f6616b','rider-E','driver-O',93.50,'san_francisco'),\n(1695516137016,'e3cf430c-889d-4015-bc98-59bdce1e530c','rider-F','driver-P',34.15,'sao_paulo'),\n(1695376420876,'7a84095f-737f-40bc-b62f-6b69664712d2','rider-G','driver-Q',43.40 ,'sao_paulo'),\n(1695173887231,'3eeb61f7-c2b0-4636-99bd-5d7a5a1d2c04','rider-I','driver-S',41.06 ,'chennai'),\n(1695115999911,'c8abbe79-8d89-47ea-b4ce-4d224bae5bfa','rider-J','driver-T',17.85,'chennai');\n"})})]}),(0,a.jsxs)(l.A,{value:"dataStream",children:[(0,a.jsx)(n.p,{children:"Add some streaming source to flink and load the data in hudi table. Since, this is the first write, it will also auto-create the table."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'import org.apache.flink.streaming.api.datastream.DataStream;\nimport org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;\nimport org.apache.flink.table.data.RowData;\nimport org.apache.hudi.common.model.HoodieTableType;\nimport org.apache.hudi.configuration.FlinkOptions;\nimport org.apache.hudi.util.HoodiePipeline;\n\nStreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();\nString targetTable = "hudi_table";\nString basePath = "file:///tmp/hudi_table";\n\nMap<String, String> options = new HashMap<>();\noptions.put("path", basePath);\noptions.put("table.type", HoodieTableType.MERGE_ON_READ.name());\noptions.put("precombine.field", "ts");\n\nDataStream<RowData> dataStream = env.addSource(...);\nHoodiePipeline.Builder builder = HoodiePipeline.builder(targetTable)\n    .column("uuid VARCHAR(20)")\n    .column("name VARCHAR(10)")\n    .column("age INT")\n    .column("ts TIMESTAMP(3)")\n    .column("`partition` VARCHAR(20)")\n    .pk("uuid")\n    .partition("partition")\n    .options(options);\n\nbuilder.sink(dataStream, false); // The second parameter indicating whether the input data stream is bounded\nenv.execute("Api_Sink");\n'})}),(0,a.jsxs)(n.p,{children:["Refer Full Quickstart Example ",(0,a.jsx)(n.a,{href:"https://github.com/ad1happy2go/hudi-examples/blob/main/flink/src/main/java/com/hudi/flink/quickstart/HudiDataStreamWriter.java",children:"here"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"query-data",children:"Query Data"}),"\n",(0,a.jsxs)(r.A,{defaultValue:"flinksql",values:[{label:"Flink SQL",value:"flinksql"},{label:"DataStream API",value:"dataStream"}],children:[(0,a.jsx)(l.A,{value:"flinksql",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- query from the Hudi table\nselect * from hudi_table;\n"})})}),(0,a.jsxs)(l.A,{value:"dataStream",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'import org.apache.flink.streaming.api.datastream.DataStream;\nimport org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;\nimport org.apache.flink.table.data.RowData;\nimport org.apache.hudi.common.model.HoodieTableType;\nimport org.apache.hudi.configuration.FlinkOptions;\nimport org.apache.hudi.util.HoodiePipeline;\n\nStreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();\nString targetTable = "hudi_table";\nString basePath = "file:///tmp/hudi_table";\n\nMap<String, String> options = new HashMap<>();\noptions.put("path", basePath);\noptions.put("table.type", HoodieTableType.MERGE_ON_READ.name());\noptions.put("read.streaming.enabled", "true"); // this option enable the streaming read\noptions.put("read.start-commit", "20210316134557"); // specifies the start commit instant time\n    \nHoodiePipeline.Builder builder = HoodiePipeline.builder(targetTable)\n    .column("uuid VARCHAR(20)")\n    .column("name VARCHAR(10)")\n    .column("age INT")\n    .column("ts TIMESTAMP(3)")\n    .column("`partition` VARCHAR(20)")\n    .pk("uuid")\n    .partition("partition")\n    .options(options);\n\nDataStream<RowData> rowDataDataStream = builder.source(env);\nrowDataDataStream.print();\nenv.execute("Api_Source");\n'})}),(0,a.jsxs)(n.p,{children:["Refer Full Streaming Reader Example ",(0,a.jsx)(n.a,{href:"https://github.com/ad1happy2go/hudi-examples/blob/main/flink/src/main/java/com/hudi/flink/quickstart/HudiDataStreamReader.java",children:"here"})]})]})]}),"\n",(0,a.jsxs)(n.p,{children:["This statement queries snapshot view of the dataset.\nRefers to ",(0,a.jsx)(n.a,{href:"/docs/concepts#table-types--queries",children:"Table types and queries"})," for more info on all table types and query types supported."]}),"\n",(0,a.jsx)(n.h2,{id:"update-data",children:"Update Data"}),"\n",(0,a.jsx)(n.p,{children:"This is similar to inserting new data."}),"\n",(0,a.jsxs)(r.A,{defaultValue:"flinksql",values:[{label:"Flink SQL",value:"flinksql"},{label:"DataStream API",value:"dataStream"}],children:[(0,a.jsxs)(l.A,{value:"flinksql",children:[(0,a.jsx)(n.p,{children:"Hudi tables can be updated by either inserting reocrds with same primary key or using a standard UPDATE statement shown as below."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- Update Queries only works with batch execution mode\nSET 'execution.runtime-mode' = 'batch';\nUPDATE hudi_table SET fare = 25.0 WHERE uuid = '334e26e9-8355-45cc-97c6-c31daf0df330';\n"})}),(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"UPDATE"})," statement is supported since Flink 1.17, so only Hudi Flink bundle compiled with Flink 1.17+ supplies this functionality.\nOnly ",(0,a.jsx)(n.strong,{children:"batch"})," queries on Hudi table with primary key work correctly."]})})]}),(0,a.jsxs)(l.A,{value:"dataStream",children:[(0,a.jsxs)(n.p,{children:["Add some streaming source to flink and load the data in hudi table using DataStream API as ",(0,a.jsx)(n.a,{href:"#insert-data",children:"above"}),".\nWhen new rows with the same primary key arrive in stream, then it will be be updated.\nIn the insert example incoming row with same record id will be updated."]}),(0,a.jsxs)(n.p,{children:["Refer Update Example ",(0,a.jsx)(n.a,{href:"https://github.com/ad1happy2go/hudi-examples/blob/main/flink/src/main/java/com/hudi/flink/quickstart/HudiDataStreamWriter.java",children:"here"})]})]})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"#query-data",children:"Querying"})," the data again will now show updated records. Each write operation generates a new ",(0,a.jsx)(n.a,{href:"/docs/concepts",children:"commit"}),"\ndenoted by the timestamp."]}),"\n",(0,a.jsx)(n.h2,{id:"deletes",children:"Delete Data"}),"\n",(0,a.jsxs)(r.A,{defaultValue:"flinksql",values:[{label:"Flink SQL",value:"flinksql"},{label:"DataStream API",value:"dataStream"}],children:[(0,a.jsxs)(l.A,{value:"flinksql",children:[(0,a.jsx)(n.h3,{id:"row-level-delete",children:"Row-level Delete"}),(0,a.jsxs)(n.p,{children:["When consuming data in streaming query, Hudi Flink source can also accept the change logs from the upstream data source if the ",(0,a.jsx)(n.code,{children:"RowKind"})," is set up per-row,\nit can then apply the UPDATE and DELETE in row level. You can then sync a NEAR-REAL-TIME snapshot on Hudi for all kinds\nof RDBMS."]}),(0,a.jsx)(n.h3,{id:"batch-delete",children:"Batch Delete"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- delete all the records with age greater than 23\n-- NOTE: only works for batch sql queries\nSET 'execution.runtime-mode' = 'batch';\nDELETE FROM t1 WHERE age > 23;\n"})}),(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"DELETE"})," statement is supported since Flink 1.17, so only Hudi Flink bundle compiled with Flink 1.17+ supplies this functionality.\nOnly ",(0,a.jsx)(n.strong,{children:"batch"})," queries on Hudi table with primary key work correctly."]})})]}),(0,a.jsxs)(l.A,{value:"dataStream",children:[(0,a.jsx)(n.p,{children:"Creates a Flink Hudi table first and insert data into the Hudi table using DataStream API as below.\nWhen new rows with the same primary key and Row Kind as Delete arrive in stream, then it will be be deleted."}),(0,a.jsxs)(n.p,{children:["Refer Delete Example ",(0,a.jsx)(n.a,{href:"https://github.com/ad1happy2go/hudi-examples/blob/main/flink/src/main/java/com/hudi/flink/quickstart/HudiDataStreamWriter.java",children:"here"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"streaming-query",children:"Streaming Query"}),"\n",(0,a.jsx)(n.p,{children:"Hudi Flink also provides capability to obtain a stream of records that changed since given commit timestamp.\nThis can be achieved using Hudi's streaming querying and providing a start time from which changes need to be streamed.\nWe do not need to specify endTime, if we want all changes after the given commit (as is the common case)."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE t1(\n  uuid VARCHAR(20) PRIMARY KEY NOT ENFORCED,\n  name VARCHAR(10),\n  age INT,\n  ts TIMESTAMP(3),\n  `partition` VARCHAR(20)\n)\nPARTITIONED BY (`partition`)\nWITH (\n  'connector' = 'hudi',\n  'path' = '${path}',\n  'table.type' = 'MERGE_ON_READ',\n  'read.streaming.enabled' = 'true',  -- this option enable the streaming read\n  'read.start-commit' = '20210316134557', -- specifies the start commit instant time\n  'read.streaming.check-interval' = '4' -- specifies the check interval for finding new source commits, default 60s.\n);\n\n-- Then query the table in stream mode\nselect * from t1;\n"})}),"\n",(0,a.jsx)(n.h2,{id:"change-data-capture-query",children:"Change Data Capture Query"}),"\n",(0,a.jsx)(n.p,{children:"Hudi Flink also provides capability to obtain a stream of records with Change Data Capture.\nCDC queries are useful for applications that need to obtain all the changes, along with before/after images of records."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"set sql-client.execution.result-mode = tableau;\n\nCREATE TABLE hudi_table(\n    ts BIGINT,\n    uuid VARCHAR(40) PRIMARY KEY NOT ENFORCED,\n    rider VARCHAR(20),\n    driver VARCHAR(20),\n    fare DOUBLE,\n    city VARCHAR(20)\n)\nPARTITIONED BY (`city`)\nWITH (\n  'connector' = 'hudi',\n  'path' = 'file:///tmp/hudi_table',\n  'table.type' = 'COPY_ON_WRITE',\n  'cdc.enabled' = 'true' -- this option enable the cdc log enabled\n);\n-- insert data using values\nINSERT INTO hudi_table\nVALUES\n(1695159649087,'334e26e9-8355-45cc-97c6-c31daf0df330','rider-A','driver-K',19.10,'san_francisco'),\n(1695091554788,'e96c4396-3fad-413a-a942-4cb36106d721','rider-C','driver-M',27.70 ,'san_francisco'),\n(1695046462179,'9909a8b1-2d15-4d3d-8ec9-efc48c536a00','rider-D','driver-L',33.90 ,'san_francisco'),\n(1695332066204,'1dced545-862b-4ceb-8b43-d2a568f6616b','rider-E','driver-O',93.50,'san_francisco'),\n(1695516137016,'e3cf430c-889d-4015-bc98-59bdce1e530c','rider-F','driver-P',34.15,'sao_paulo'),\n(1695376420876,'7a84095f-737f-40bc-b62f-6b69664712d2','rider-G','driver-Q',43.40 ,'sao_paulo'),\n(1695173887231,'3eeb61f7-c2b0-4636-99bd-5d7a5a1d2c04','rider-I','driver-S',41.06 ,'chennai'),\n(1695115999911,'c8abbe79-8d89-47ea-b4ce-4d224bae5bfa','rider-J','driver-T',17.85,'chennai');\nSET 'execution.runtime-mode' = 'batch';\nUPDATE hudi_table SET fare = 25.0 WHERE uuid = '334e26e9-8355-45cc-97c6-c31daf0df330';\n-- Query the table in stream mode in another shell to see change logs\nSET 'execution.runtime-mode' = 'streaming';\nselect * from hudi_table/*+ OPTIONS('read.streaming.enabled'='true')*/;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This will give all changes that happened after the ",(0,a.jsx)(n.code,{children:"read.start-commit"})," commit. The unique thing about this\nfeature is that it now lets you author streaming pipelines on streaming or batch data source."]}),"\n",(0,a.jsx)(n.h2,{id:"where-to-go-from-here",children:"Where To Go From Here?"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Quick Start"})," : Read ",(0,a.jsx)(n.a,{href:"#quick-start",children:"Quick Start"})," to get started quickly Flink sql client to write to(read from) Hudi."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Configuration"})," : For ",(0,a.jsx)(n.a,{href:"/docs/next/flink_tuning#global-configurations",children:"Global Configuration"}),", sets up through ",(0,a.jsx)(n.code,{children:"$FLINK_HOME/conf/flink-conf.yaml"}),". For per job configuration, sets up through ",(0,a.jsx)(n.a,{href:"/docs/next/flink_tuning#table-options",children:"Table Option"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Writing Data"})," : Flink supports different modes for writing, such as ",(0,a.jsx)(n.a,{href:"/docs/next/ingestion_flink#cdc-ingestion",children:"CDC Ingestion"}),", ",(0,a.jsx)(n.a,{href:"/docs/next/ingestion_flink#bulk-insert",children:"Bulk Insert"}),", ",(0,a.jsx)(n.a,{href:"/docs/next/ingestion_flink#index-bootstrap",children:"Index Bootstrap"}),", ",(0,a.jsx)(n.a,{href:"/docs/next/ingestion_flink#changelog-mode",children:"Changelog Mode"})," and ",(0,a.jsx)(n.a,{href:"/docs/next/ingestion_flink#append-mode",children:"Append Mode"}),". Flink also supports multiple streaming writers with ",(0,a.jsx)(n.a,{href:"/docs/next/sql_dml#non-blocking-concurrency-control-experimental",children:"non-blocking concurrency control"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Reading Data"})," : Flink supports different modes for reading, such as ",(0,a.jsx)(n.a,{href:"/docs/sql_queries#streaming-query",children:"Streaming Query"})," and ",(0,a.jsx)(n.a,{href:"/docs/sql_queries#incremental-query",children:"Incremental Query"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Tuning"})," : For write/read tasks, this guide gives some tuning suggestions, such as ",(0,a.jsx)(n.a,{href:"/docs/next/flink_tuning#memory-optimization",children:"Memory Optimization"})," and ",(0,a.jsx)(n.a,{href:"/docs/next/flink_tuning#write-rate-limit",children:"Write Rate Limit"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Optimization"}),": Offline compaction is supported ",(0,a.jsx)(n.a,{href:"/docs/compaction#flink-offline-compaction",children:"Offline Compaction"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Query Engines"}),": Besides Flink, many other engines are integrated: ",(0,a.jsx)(n.a,{href:"/docs/syncing_metastore#flink-setup",children:"Hive Query"}),", ",(0,a.jsx)(n.a,{href:"/docs/querying_data#prestodb",children:"Presto Query"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Catalog"}),": A Hudi specific catalog is supported: ",(0,a.jsx)(n.a,{href:"/docs/sql_ddl/#create-catalog",children:"Hudi Catalog"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"If you are relatively new to Apache Hudi, it is important to be familiar with a few core concepts:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/next/timeline",children:"Hudi Timeline"})," \u2013 How Hudi manages transactions and other table services"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/next/file_layouts",children:"Hudi File Layout"})," - How the files are laid out on storage"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/next/table_types",children:"Hudi Table Types"})," \u2013 ",(0,a.jsx)(n.code,{children:"COPY_ON_WRITE"})," and ",(0,a.jsx)(n.code,{children:"MERGE_ON_READ"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/next/table_types#query-types",children:"Hudi Query Types"})," \u2013 Snapshot Queries, Incremental Queries, Read-Optimized Queries"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:'See more in the "Concepts" section of the docs.'}),"\n",(0,a.jsxs)(n.p,{children:["Take a look at recent ",(0,a.jsx)(n.a,{href:"/blog",children:"blog posts"})," that go in depth on certain topics or use cases."]}),"\n",(0,a.jsxs)(n.p,{children:["Hudi tables can be queried from query engines like Hive, Spark, Flink, Presto and much more. We have put together a\n",(0,a.jsx)(n.a,{href:"https://www.youtube.com/watch?v=VhNgUsxdrD0",children:"demo video"})," that show cases all of this on a docker based setup with all\ndependent systems running locally. We recommend you replicate the same setup and run the demo yourself, by following\nsteps ",(0,a.jsx)(n.a,{href:"/docs/docker_demo",children:"here"})," to get a taste for it. Also, if you are looking for ways to migrate your existing data\nto Hudi, refer to ",(0,a.jsx)(n.a,{href:"/docs/migration_guide",children:"migration guide"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var a=t(34164);const i={tabItem:"tabItem_Ymn6"};var r=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var a=t(96540),i=t(34164),r=t(23104),l=t(56347),s=t(205),o=t(57485),d=t(31682),c=t(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}(t);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,l.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=h(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[d,u]=m({queryString:t,groupId:i}),[f,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,c.Dv)(t);return[i,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),b=(()=>{const e=d??f;return p({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),x(e)}),[u,x,r]),tabValues:r}}var x=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function j(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),i=s[t].value;i!==a&&(d(n),l(i))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:u,onClick:c,...r,className:(0,i.A)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function k(e){let{lazy:n,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,g.jsx)(j,{...n,...e}),(0,g.jsx)(k,{...n,...e})]})}function y(e){const n=(0,x.A)();return(0,g.jsx)(v,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var a=t(96540);const i={},r=a.createContext(i);function l(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);
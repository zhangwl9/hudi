"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[55836],{75714:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var o=t(74848),i=t(28453);const n={title:"Troubleshooting",keywords:["hudi","troubleshooting"],last_modified_at:new Date("2021-08-18T19:59:57.000Z")},r=void 0,s={id:"troubleshooting",title:"Troubleshooting",description:"Troubleshooting",source:"@site/versioned_docs/version-0.13.1/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/cn/docs/0.13.1/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.13.1/troubleshooting.md",tags:[],version:"0.13.1",frontMatter:{title:"Troubleshooting",keywords:["hudi","troubleshooting"],last_modified_at:"2021-08-18T19:59:57.000Z"},sidebar:"docs",previous:{title:"Encryption",permalink:"/cn/docs/0.13.1/encryption"},next:{title:"Tuning Guide",permalink:"/cn/docs/0.13.1/tuning-guide"}},l={},c=[{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Missing records",id:"missing-records",level:3},{value:"Duplicates",id:"duplicates",level:3},{value:"Spark failures",id:"spark-ui",level:3},{value:"Common Issues",id:"common-issues",level:3},{value:"Writing Data",id:"writing-data",level:4},{value:"Caused by: org.apache.parquet.io.InvalidRecordException: Parquet/Avro schema mismatch: Avro field &#39;col1&#39; not found",id:"caused-by-orgapacheparquetioinvalidrecordexception-parquetavro-schema-mismatch-avro-field-col1-not-found",level:5},{value:"Caused by: java.lang.UnsupportedOperationException: org.apache.parquet.avro.AvroConverters$FieldIntegerConverter",id:"caused-by-javalangunsupportedoperationexception-orgapacheparquetavroavroconvertersfieldintegerconverter",level:5},{value:"org.apache.hudi.exception.SchemaCompatabilityException: Unable to validate the rewritten record &lt;record&gt; against schema &lt;schema&gt; at org.apache.hudi.common.util.HoodieAvroUtils.rewrite(HoodieAvroUtils.java:215)",id:"orgapachehudiexceptionschemacompatabilityexception-unable-to-validate-the-rewritten-record-record-against-schema-schema-at-orgapachehudicommonutilhoodieavroutilsrewritehoodieavroutilsjava215",level:5},{value:"hudi consumes too much space in a temp folder while upsert",id:"hudi-consumes-too-much-space-in-a-temp-folder-while-upsert",level:5},{value:"Ingestion",id:"ingestion",level:4},{value:"Caused by: java.io.EOFException: Received -1 when reading from channel, socket has likely been closed. at kafka.utils.Utils$.read(Utils.scala:381) at kafka.network.BoundedByteBufferReceive.readFrom(BoundedByteBufferReceive.scala:54)",id:"caused-by-javaioeofexception-received--1-when-reading-from-channel-socket-has-likely-been-closed-at-kafkautilsutilsreadutilsscala381-at-kafkanetworkboundedbytebufferreceivereadfromboundedbytebufferreceivescala54",level:5},{value:"Exception in thread &quot;main&quot; org.apache.kafka.common.KafkaException: Failed to construct kafka consumer",id:"exception-in-thread-main-orgapachekafkacommonkafkaexception-failed-to-construct-kafka-consumer",level:5},{value:"Caused by: java.lang.IllegalArgumentException: Could not find a &#39;KafkaClient&#39; entry in the JAAS configuration. System property &#39;java.security.auth.login.config&#39; is not set",id:"caused-by-javalangillegalargumentexception-could-not-find-a-kafkaclient-entry-in-the-jaas-configuration-system-property-javasecurityauthloginconfig-is-not-set",level:5},{value:"com.uber.hoodie.exception.HoodieException: created_at(Part -created_at) field not found in record. Acceptable fields were :[col1, col2, col3, id, name, dob, created_at, updated_at]",id:"comuberhoodieexceptionhoodieexception-created_atpart--created_at-field-not-found-in-record-acceptable-fields-were-col1-col2-col3-id-name-dob-created_at-updated_at",level:5},{value:"If it is possible to use a nullable field that contains null records as a primary key when creating hudi table",id:"if-it-is-possible-to-use-a-nullable-field-that-contains-null-records-as-a-primary-key-when-creating-hudi-table",level:5},{value:"IOException: Write end dead or CIRCULAR REFERENCE while writing to GCS",id:"ioexception-write-end-dead-or-circular-reference-while-writing-to-gcs",level:4},{value:"Hive Sync",id:"hive-sync",level:4},{value:"Caused by: java.sql.SQLException: Error while processing statement: FAILED: Execution Error, return code 1 from org.apache.hadoop.hive.ql.exec.DDLTask. Unable to alter table. The following columns have types incompatible with the existing columns in their respective positions : __col1,__col2",id:"caused-by-javasqlsqlexception-error-while-processing-statement-failed-execution-error-return-code-1-from-orgapachehadoophiveqlexecddltask-unable-to-alter-table-the-following-columns-have-types-incompatible-with-the-existing-columns-in-their-respective-positions--__col1__col2",level:5},{value:"com.uber.hoodie.hive.HoodieHiveSyncException: Could not convert field Type from &lt;type1&gt; to &lt;type2&gt; for field col1",id:"comuberhoodiehivehoodiehivesyncexception-could-not-convert-field-type-from-type1-to-type2-for-field-col1",level:5},{value:"Caused by: org.apache.hadoop.hive.ql.parse.SemanticException: Database does not exist: test_db",id:"caused-by-orgapachehadoophiveqlparsesemanticexception-database-does-not-exist-test_db",level:5},{value:"Caused by: org.apache.thrift.TApplicationException: Invalid method name: &#39;get_table_req&#39;",id:"caused-by-orgapachethrifttapplicationexception-invalid-method-name-get_table_req",level:5},{value:"Caused by : java.lang.UnsupportedOperationException: Table rename is not supported",id:"caused-by--javalangunsupportedoperationexception-table-rename-is-not-supported",level:5},{value:"Running from IDE",id:"running-from-ide",level:4},{value:"&quot;java.lang.IllegalArgumentException: Unsupported class file major version 56&quot;",id:"javalangillegalargumentexception-unsupported-class-file-major-version-56",level:5}];function d(e){const a={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,o.jsx)(a.p,{children:"Section below generally aids in debugging Hudi failures. Off the bat, the following metadata is added to every record to help triage  issues easily using standard Hadoop SQL engines (Hive/PrestoDB/Spark)"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.strong,{children:"_hoodie_record_key"})," - Treated as a primary key within each DFS partition, basis of all updates/inserts"]}),"\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.strong,{children:"_hoodie_commit_time"})," - Last commit that touched this record"]}),"\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.strong,{children:"_hoodie_file_name"})," - Actual file name containing the record (super useful to triage duplicates)"]}),"\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.strong,{children:"_hoodie_partition_path"})," - Path from basePath that identifies the partition containing this record"]}),"\n"]}),"\n",(0,o.jsxs)(a.p,{children:["For performance related issues, please refer to the ",(0,o.jsx)(a.a,{href:"https://hudi.apache.org/docs/tuning-guide",children:"tuning guide"})]}),"\n",(0,o.jsx)(a.h3,{id:"missing-records",children:"Missing records"}),"\n",(0,o.jsx)(a.p,{children:"Please check if there were any write errors using the admin commands above, during the window at which the record could have been written.\nIf you do find errors, then the record was not actually written by Hudi, but handed back to the application to decide what to do with it."}),"\n",(0,o.jsx)(a.h3,{id:"duplicates",children:"Duplicates"}),"\n",(0,o.jsxs)(a.p,{children:["First of all, please confirm if you do indeed have duplicates ",(0,o.jsx)(a.strong,{children:"AFTER"})," ensuring the query is accessing the Hudi table ",(0,o.jsx)(a.a,{href:"/docs/querying_data",children:"properly"})," ."]}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"If confirmed, please use the metadata fields above, to identify the physical files & partition files containing the records ."}),"\n",(0,o.jsx)(a.li,{children:"If duplicates span files across partitionpath, then this means your application is generating different partitionPaths for same recordKey, Please fix your app"}),"\n",(0,o.jsxs)(a.li,{children:["if duplicates span multiple files within the same partitionpath, please engage with mailing list. This should not happen. You can use the ",(0,o.jsx)(a.code,{children:"records deduplicate"})," command to fix your data."]}),"\n"]}),"\n",(0,o.jsx)(a.h3,{id:"spark-ui",children:"Spark failures"}),"\n",(0,o.jsx)(a.p,{children:"Typical upsert() DAG looks like below. Note that Hudi client also caches intermediate RDDs to intelligently profile workload and size files and spark parallelism.\nAlso Spark UI shows sortByKey twice due to the probe job also being shown, nonetheless its just a single sort."}),"\n",(0,o.jsx)("figure",{children:(0,o.jsx)("img",{className:"docimage",src:t(81892).A,alt:"hudi_upsert_dag.png"})}),"\n",(0,o.jsx)(a.p,{children:"At a high level, there are two steps"}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.strong,{children:"Index Lookup to identify files to be changed"})}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"Job 1 : Triggers the input data read, converts to HoodieRecord object and then stops at obtaining a spread of input records to target partition paths"}),"\n",(0,o.jsx)(a.li,{children:"Job 2 : Load the set of file names which we need check against"}),"\n",(0,o.jsx)(a.li,{children:"Job 3  & 4 : Actual lookup after smart sizing of spark join parallelism, by joining RDDs in 1 & 2 above"}),"\n",(0,o.jsx)(a.li,{children:"Job 5 : Have a tagged RDD of recordKeys with locations"}),"\n"]}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.strong,{children:"Performing the actual writing of data"})}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"Job 6 : Lazy join of incoming records against recordKey, location to provide a final set of HoodieRecord which now contain the information about which file/partitionpath they are found at (or null if insert). Then also profile the workload again to determine sizing of files"}),"\n",(0,o.jsx)(a.li,{children:"Job 7 : Actual writing of data (update + insert + insert turned to updates to maintain file size)"}),"\n"]}),"\n",(0,o.jsx)(a.p,{children:"Depending on the exception source (Hudi/Spark), the above knowledge of the DAG can be used to pinpoint the actual issue. The most often encountered failures result from YARN/DFS temporary failures.\nIn the future, a more sophisticated debug/management UI would be added to the project, that can help automate some of this debugging."}),"\n",(0,o.jsx)(a.h3,{id:"common-issues",children:"Common Issues"}),"\n",(0,o.jsxs)(a.p,{children:["This section lists down all the common issues that users have faced while using Hudi. ",(0,o.jsx)(a.a,{href:"https://hudi.apache.org/contribute/get-involved",children:"Contributions"})," are always welcome to improve this section."]}),"\n",(0,o.jsx)(a.h4,{id:"writing-data",children:"Writing Data"}),"\n",(0,o.jsx)(a.h5,{id:"caused-by-orgapacheparquetioinvalidrecordexception-parquetavro-schema-mismatch-avro-field-col1-not-found",children:"Caused by: org.apache.parquet.io.InvalidRecordException: Parquet/Avro schema mismatch: Avro field 'col1' not found"}),"\n",(0,o.jsxs)(a.p,{children:["It is recommended that schema should evolve in ",(0,o.jsx)(a.a,{href:"https://docs.confluent.io/platform/current/schema-registry/avro.html",children:"backwards compatible way"})," while using Hudi. Please refer here for more information on avro schema resolution - ",(0,o.jsx)(a.a,{href:"https://avro.apache.org/docs/1.8.2/spec.html",children:"https://avro.apache.org/docs/1.8.2/spec.html"}),". This error generally occurs when the schema has evolved in backwards ",(0,o.jsx)(a.strong,{children:"incompatible"})," way by deleting some column 'col1' and we are trying to update some record in parquet file which has alredy been written with previous schema (which had 'col1'). In such cases, parquet tries to find all the present fields in the incoming record and when it finds 'col1' is not present, the mentioned exception is thrown."]}),"\n",(0,o.jsx)(a.p,{children:"The fix for this is to try and create uber schema using all the schema versions evolved so far for the concerned event and use this uber schema as the target schema. One of the good approaches can be fetching schema from hive metastore and merging it with the current schema."}),"\n",(0,o.jsxs)(a.p,{children:['Sample stacktrace where a field named "toBeDeletedStr" was omitted from new batch of updates : ',(0,o.jsx)(a.a,{href:"https://gist.github.com/nsivabalan/cafc53fc9a8681923e4e2fa4eb2133fe",children:"https://gist.github.com/nsivabalan/cafc53fc9a8681923e4e2fa4eb2133fe"})]}),"\n",(0,o.jsx)(a.h5,{id:"caused-by-javalangunsupportedoperationexception-orgapacheparquetavroavroconvertersfieldintegerconverter",children:"Caused by: java.lang.UnsupportedOperationException: org.apache.parquet.avro.AvroConverters$FieldIntegerConverter"}),"\n",(0,o.jsx)(a.p,{children:"This error will again occur due to schema evolutions in non-backwards compatible way. Basically there is some incoming update U for a record R which is already written to your Hudi dataset in the concerned parquet file. R contains field F which is having certain data type, let us say long. U has the same field F with updated data type of int type. Such incompatible data type conversions are not supported by Parquet FS."}),"\n",(0,o.jsx)(a.p,{children:"For such errors, please try to ensure only valid data type conversions are happening in your primary data source from where you are trying to ingest."}),"\n",(0,o.jsxs)(a.p,{children:["Sample stacktrace when trying to evolve a field from Long type to Integer type with Hudi : ",(0,o.jsx)(a.a,{href:"https://gist.github.com/nsivabalan/0d81cd60a3e7a0501e6a0cb50bfaacea",children:"https://gist.github.com/nsivabalan/0d81cd60a3e7a0501e6a0cb50bfaacea"})]}),"\n",(0,o.jsx)(a.h5,{id:"orgapachehudiexceptionschemacompatabilityexception-unable-to-validate-the-rewritten-record-record-against-schema-schema-at-orgapachehudicommonutilhoodieavroutilsrewritehoodieavroutilsjava215",children:"org.apache.hudi.exception.SchemaCompatabilityException: Unable to validate the rewritten record <record> against schema <schema> at org.apache.hudi.common.util.HoodieAvroUtils.rewrite(HoodieAvroUtils.java:215)"}),"\n",(0,o.jsx)(a.p,{children:"This can possibly occur if your schema has some non-nullable field whose value is not present or is null. It is recommended to evolve schema in backwards compatible ways. In essence, this means either have every newly added field as nullable or define default values for every new field. In case if you are relying on default value for your field, as of Hudi version 0.5.1, this is not handled."}),"\n",(0,o.jsx)(a.h5,{id:"hudi-consumes-too-much-space-in-a-temp-folder-while-upsert",children:"hudi consumes too much space in a temp folder while upsert"}),"\n",(0,o.jsx)(a.p,{children:'When upsert large input data, hudi will spills part of input data to disk when reach the max memory for merge. if there is enough memory, please increase spark executor\'s memory and  "hoodie.memory.merge.fraction" option, for example'}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-java",children:'option("hoodie.memory.merge.fraction", "0.8")\n'})}),"\n",(0,o.jsx)(a.h4,{id:"ingestion",children:"Ingestion"}),"\n",(0,o.jsx)(a.h5,{id:"caused-by-javaioeofexception-received--1-when-reading-from-channel-socket-has-likely-been-closed-at-kafkautilsutilsreadutilsscala381-at-kafkanetworkboundedbytebufferreceivereadfromboundedbytebufferreceivescala54",children:"Caused by: java.io.EOFException: Received -1 when reading from channel, socket has likely been closed. at kafka.utils.Utils$.read(Utils.scala:381) at kafka.network.BoundedByteBufferReceive.readFrom(BoundedByteBufferReceive.scala:54)"}),"\n",(0,o.jsx)(a.p,{children:"This might happen if you are ingesting from Kafka source, your cluster is ssl enabled by default and you are using some version of Hudi older than 0.5.1. Previous versions of Hudi were using spark-streaming-kafka-0-8 library. With the release of 0.5.1 version of Hudi, spark was upgraded to 2.4.4 and spark-streaming-kafka library was upgraded to spark-streaming-kafka-0-10. SSL support was introduced from spark-streaming-kafka-0-10. Please see here for reference."}),"\n",(0,o.jsx)(a.p,{children:"The workaround can be either use Kafka cluster which is not ssl enabled, else upgrade Hudi version to at least 0.5.1 or spark-streaming-kafka library to spark-streaming-kafka-0-10."}),"\n",(0,o.jsx)(a.h5,{id:"exception-in-thread-main-orgapachekafkacommonkafkaexception-failed-to-construct-kafka-consumer",children:'Exception in thread "main" org.apache.kafka.common.KafkaException: Failed to construct kafka consumer'}),"\n",(0,o.jsx)(a.h5,{id:"caused-by-javalangillegalargumentexception-could-not-find-a-kafkaclient-entry-in-the-jaas-configuration-system-property-javasecurityauthloginconfig-is-not-set",children:"Caused by: java.lang.IllegalArgumentException: Could not find a 'KafkaClient' entry in the JAAS configuration. System property 'java.security.auth.login.config' is not set"}),"\n",(0,o.jsx)(a.p,{children:"This might happen when you are trying to ingest from ssl enabled kafka source and your setup is not able to read jars.conf file and its properties. To fix this, you need to pass the required property as part of your spark-submit command something like"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-java",children:"--files jaas.conf,failed_tables.json --conf 'spark.driver.extraJavaOptions=-Djava.security.auth.login.config=jaas.conf' --conf 'spark.executor.extraJavaOptions=-Djava.security.auth.login.config=jaas.conf'\n"})}),"\n",(0,o.jsx)(a.h5,{id:"comuberhoodieexceptionhoodieexception-created_atpart--created_at-field-not-found-in-record-acceptable-fields-were-col1-col2-col3-id-name-dob-created_at-updated_at",children:"com.uber.hoodie.exception.HoodieException: created_at(Part -created_at) field not found in record. Acceptable fields were :[col1, col2, col3, id, name, dob, created_at, updated_at]"}),"\n",(0,o.jsx)(a.p,{children:"Happens generally when field marked as recordKey or partitionKey is not present in some incoming record. Please cross verify your incoming record once."}),"\n",(0,o.jsx)(a.h5,{id:"if-it-is-possible-to-use-a-nullable-field-that-contains-null-records-as-a-primary-key-when-creating-hudi-table",children:"If it is possible to use a nullable field that contains null records as a primary key when creating hudi table"}),"\n",(0,o.jsx)(a.p,{children:"No, will throw HoodieKeyException"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-scala",children:'Caused by: org.apache.hudi.exception.HoodieKeyException: recordKey value: "null" for field: "name" cannot be null or empty.\n  at org.apache.hudi.keygen.SimpleKeyGenerator.getKey(SimpleKeyGenerator.java:58)\n  at org.apache.hudi.HoodieSparkSqlWriter$$anonfun$1.apply(HoodieSparkSqlWriter.scala:104)\n  at org.apache.hudi.HoodieSparkSqlWriter$$anonfun$1.apply(HoodieSparkSqlWriter.scala:100)\n'})}),"\n",(0,o.jsx)(a.h4,{id:"ioexception-write-end-dead-or-circular-reference-while-writing-to-gcs",children:"IOException: Write end dead or CIRCULAR REFERENCE while writing to GCS"}),"\n",(0,o.jsx)(a.p,{children:"If you encounter below stacktrace, please set the spark config as suggested below."}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{children:"--conf 'spark.hadoop.fs.gs.outputstream.pipe.type=NIO_CHANNEL_PIPE'\n"})}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{children:" at org.apache.hudi.io.storage.HoodieAvroParquetWriter.close(HoodieAvroParquetWriter.java:84)\n\tSuppressed: java.io.IOException: Upload failed for 'gs://bucket/b0ee4274-5193-4a26-bcff-d60654fd7b24-0_0-42-671_20230228055305900.parquet'\n\t\tat com.google.cloud.hadoop.repackaged.gcs.com.google.cloud.hadoop.util.BaseAbstractGoogleAsyncWriteChannel.waitForCompletionAndThrowIfUploadFailed(BaseAbstractGoogleAsyncWriteChannel.java:260)\n\t\tat com.google.cloud.hadoop.repackaged.gcs.com.google.cloud.hadoop.util.BaseAbstractGoogleAsyncWriteChannel.write(BaseAbstractGoogleAsyncWriteChannel.java:121)\n\t\tat java.base/java.nio.channels.Channels.writeFullyImpl(Channels.java:74)\n\t\tat java.base/java.nio.channels.Channels.writeFully(Channels.java:97)\n\t\tat java.base/java.nio.channels.Channels$1.write(Channels.java:172)\n\t\tat java.base/java.io.BufferedOutputStream.flushBuffer(BufferedOutputStream.java:81)\n\t\tat java.base/java.io.BufferedOutputStream.flush(BufferedOutputStream.java:142)\n\t\tat java.base/java.io.FilterOutputStream.close(FilterOutputStream.java:182)\n\t\t... 44 more\n\tCaused by: java.io.IOException: Write end dead\n\t\tat java.base/java.io.PipedInputStream.read(PipedInputStream.java:310)\n\t\tat java.base/java.io.PipedInputStream.read(PipedInputStream.java:377)\n\t\tat com.google.cloud.hadoop.repackaged.gcs.com.google.api.client.util.ByteStreams.read(ByteStreams.java:172)\n\t\tat com.google.cloud.hadoop.repackaged.gcs.com.google.api.client.googleapis.media.MediaHttpUploader.buildContentChunk(MediaHttpUploader.java:610)\n\t\tat com.google.cloud.hadoop.repackaged.gcs.com.google.api.client.googleapis.media.MediaHttpUploader.resumableUpload(MediaHttpUploader.java:380)\n\t\tat com.google.cloud.hadoop.repackaged.gcs.com.google.api.client.googleapis.media.MediaHttpUploader.upload(MediaHttpUploader.java:308)\n\t\tat com.google.cloud.hadoop.repackaged.gcs.com.google.api.client.googleapis.services.AbstractGoogleClientRequest.executeUnparsed(AbstractGoogleClientRequest.java:539)\n\t\tat com.google.cloud.hadoop.repackaged.gcs.com.google.api.client.googleapis.services.AbstractGoogleClientRequest.executeUnparsed(AbstractGoogleClientRequest.java:466)\n\t\tat com.google.cloud.hadoop.repackaged.gcs.com.google.api.client.googleapis.services.AbstractGoogleClientRequest.execute(AbstractGoogleClientRequest.java:576)\n\t\tat com.google.cloud.hadoop.repackaged.gcs.com.google.cloud.hadoop.util.AbstractGoogleAsyncWriteChannel$UploadOperation.call(AbstractGoogleAsyncWriteChannel.java:85)\n\t\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\n\t\t... 3 more\nCaused by: [CIRCULAR REFERENCE: java.io.IOException: Write end dead]\n"})}),"\n",(0,o.jsxs)(a.p,{children:["We have an active patch(",(0,o.jsx)(a.a,{href:"https://github.com/apache/hudi/pull/7245",children:"https://github.com/apache/hudi/pull/7245"}),") on fixing the issue. Until we land this, you can use above config to bypass the issue."]}),"\n",(0,o.jsx)(a.h4,{id:"hive-sync",children:"Hive Sync"}),"\n",(0,o.jsx)(a.h5,{id:"caused-by-javasqlsqlexception-error-while-processing-statement-failed-execution-error-return-code-1-from-orgapachehadoophiveqlexecddltask-unable-to-alter-table-the-following-columns-have-types-incompatible-with-the-existing-columns-in-their-respective-positions--__col1__col2",children:"Caused by: java.sql.SQLException: Error while processing statement: FAILED: Execution Error, return code 1 from org.apache.hadoop.hive.ql.exec.DDLTask. Unable to alter table. The following columns have types incompatible with the existing columns in their respective positions : __col1,__col2"}),"\n",(0,o.jsx)(a.p,{children:"This will usually happen when you are trying to add a new column to existing hive table using our HiveSyncTool.java class. Databases usually will not allow to modify a column datatype from a higher order to lower order or cases where the datatypes may clash with the data that is already stored/will be stored in the table. To fix the same, try setting the following property -"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-scala",children:"set hive.metastore.disallow.incompatible.col.type.changes=false;\n"})}),"\n",(0,o.jsx)(a.h5,{id:"comuberhoodiehivehoodiehivesyncexception-could-not-convert-field-type-from-type1-to-type2-for-field-col1",children:"com.uber.hoodie.hive.HoodieHiveSyncException: Could not convert field Type from <type1> to <type2> for field col1"}),"\n",(0,o.jsx)(a.p,{children:"This occurs because HiveSyncTool currently supports only few compatible data type conversions. Doing any other incompatible change will throw this exception. Please check the data type evolution for the concerned field and verify if it indeed can be considered as a valid data type conversion as per Hudi code base."}),"\n",(0,o.jsx)(a.h5,{id:"caused-by-orgapachehadoophiveqlparsesemanticexception-database-does-not-exist-test_db",children:"Caused by: org.apache.hadoop.hive.ql.parse.SemanticException: Database does not exist: test_db"}),"\n",(0,o.jsx)(a.p,{children:"This generally occurs if you are trying to do Hive sync for your Hudi dataset and the configured hive_sync database does not exist. Please create the corresponding database on your Hive cluster and try again."}),"\n",(0,o.jsx)(a.h5,{id:"caused-by-orgapachethrifttapplicationexception-invalid-method-name-get_table_req",children:"Caused by: org.apache.thrift.TApplicationException: Invalid method name: 'get_table_req'"}),"\n",(0,o.jsx)(a.p,{children:"This issue is caused by hive version conflicts, hudi built with hive-2.3.x version, so if still want hudi work with older hive version"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-scala",children:"Steps: (build with hive-2.1.0)\n1. git clone git@github.com:apache/incubator-hudi.git\n2. rm hudi-hadoop-mr/src/main/java/org/apache/hudi/hadoop/hive/HoodieCombineHiveInputFormat.java\n3. mvn clean package -DskipTests -DskipITs -Dhive.version=2.1.0\n"})}),"\n",(0,o.jsx)(a.h5,{id:"caused-by--javalangunsupportedoperationexception-table-rename-is-not-supported",children:"Caused by : java.lang.UnsupportedOperationException: Table rename is not supported"}),"\n",(0,o.jsxs)(a.p,{children:["This issue could occur when syncing to hive. Possible reason is that, hive does not play well if your table name has upper and lower case letter. Try to have all lower case letters for your table name and it should likely get fixed. Related issue: ",(0,o.jsx)(a.a,{href:"https://github.com/apache/hudi/issues/2409",children:"https://github.com/apache/hudi/issues/2409"})]}),"\n",(0,o.jsx)(a.h4,{id:"running-from-ide",children:"Running from IDE"}),"\n",(0,o.jsx)(a.h5,{id:"javalangillegalargumentexception-unsupported-class-file-major-version-56",children:'"java.lang.IllegalArgumentException: Unsupported class file major version 56"'}),"\n",(0,o.jsx)(a.p,{children:"Please use java 8, and not java 11"})]})}function h(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},81892:(e,a,t)=>{t.d(a,{A:()=>o});const o=t.p+"assets/images/hudi_upsert_dag-3b2d81de8560fad7af112e40a2f8c437.png"},28453:(e,a,t)=>{t.d(a,{R:()=>r,x:()=>s});var o=t(96540);const i={},n=o.createContext(i);function r(e){const a=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(n.Provider,{value:a},e.children)}}}]);
"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[60257],{31832:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>l,contentTitle:()=>t,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var a=s(74848),r=s(28453);const n={title:"Older Releases",sidebar_position:20,layout:"releases",toc:!0,last_modified_at:new Date("2020-05-28T15:40:00.000Z")},t=void 0,o={id:"older-releases",title:"Older Releases",description:"This page contains older release information, for bookkeeping purposes. It's recommended that you upgrade to one of the",source:"@site/releases/older-releases.md",sourceDirName:".",slug:"/older-releases",permalink:"/releases/older-releases",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Older Releases",sidebar_position:20,layout:"releases",toc:!0,last_modified_at:"2020-05-28T15:40:00.000Z"},sidebar:"releases",previous:{title:"Release 0.6.0",permalink:"/releases/release-0.6.0"}},l={},d=[{value:"Release 0.5.3 (docs)",id:"release-053-docs",level:2},{value:"Migration Guide for this release",id:"migration-guide-for-this-release",level:3},{value:"Release Highlights",id:"release-highlights",level:3},{value:"Raw Release Notes",id:"raw-release-notes",level:3},{value:"Release 0.5.2-incubating (docs)",id:"release-052-incubating-docs",level:2},{value:"Migration Guide for this release",id:"migration-guide-for-this-release-1",level:3},{value:"Release Highlights",id:"release-highlights-1",level:3},{value:"Raw Release Notes",id:"raw-release-notes-1",level:3},{value:"Release 0.5.1-incubating (docs)",id:"release-051-incubating-docs",level:2},{value:"Migration Guide for this release",id:"migration-guide-for-this-release-2",level:3},{value:"Release Highlights",id:"release-highlights-2",level:3},{value:"Raw Release Notes",id:"raw-release-notes-2",level:3},{value:"Release 0.5.0-incubating (docs)",id:"release-050-incubating-docs",level:2},{value:"Release Highlights",id:"release-highlights-3",level:3},{value:"Migration Guide for this release",id:"migration-guide-for-this-release-3",level:3},{value:"Raw Release Notes",id:"raw-release-notes-3",level:3},{value:"Release 0.4.7",id:"release-047",level:2},{value:"Release Highlights",id:"release-highlights-4",level:3},{value:"PR LIST",id:"pr-list",level:3}];function h(e){const i={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.p,{children:["This page contains older release information, for bookkeeping purposes. It's recommended that you upgrade to one of the\nmore recent releases listed ",(0,a.jsx)(i.a,{href:"/releases/download",children:"here"})]}),"\n",(0,a.jsxs)(i.h2,{id:"release-053-docs",children:[(0,a.jsx)(i.a,{href:"https://github.com/apache/hudi/releases/tag/release-0.5.3",children:"Release 0.5.3"})," (",(0,a.jsx)(i.a,{href:"/docs/quick-start-guide",children:"docs"}),")"]}),"\n",(0,a.jsx)(i.h3,{id:"migration-guide-for-this-release",children:"Migration Guide for this release"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"This is a bug fix only release and no special migration steps needed when upgrading from 0.5.2. If you are upgrading from earlier releases \u201cX\u201d, please make sure you read the migration guide for each subsequent release between \u201cX\u201d and 0.5.3"}),"\n",(0,a.jsx)(i.li,{children:'0.5.3 is the first hudi release after graduation. As a result, all hudi jars will no longer have "-incubating" in the version name. In all the places where hudi version is referred, please make sure "-incubating" is no longer present.'}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"For example hudi-spark-bundle pom dependency would look like:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-xml",children:"    <dependency>\n        <groupId>org.apache.hudi</groupId>\n        <artifactId>hudi-spark-bundle_2.12</artifactId>\n        <version>0.5.3</version>\n    </dependency>\n"})}),"\n",(0,a.jsx)(i.h3,{id:"release-highlights",children:"Release Highlights"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["Hudi now supports ",(0,a.jsx)(i.code,{children:"aliyun OSS"})," storage service."]}),"\n",(0,a.jsx)(i.li,{children:"Embedded Timeline Server is enabled by default for both delta-streamer and spark datasource writes. This feature was in experimental mode before this release. Embedded Timeline Server caches file listing calls in Spark driver and serves them to Spark writer tasks. This reduces the number of file listings needed to be performed for each write."}),"\n",(0,a.jsx)(i.li,{children:"Incremental Cleaning is enabled by default for both delta-streamer and spark datasource writes. This feature was also in experimental mode before this release. In the steady state, incremental cleaning avoids the costly step of scanning all partitions and instead uses Hudi metadata to find files to be cleaned up."}),"\n",(0,a.jsx)(i.li,{children:"Delta-streamer config files can now be placed in different filesystem than actual data."}),"\n",(0,a.jsx)(i.li,{children:"Hudi Hive Sync now supports tables partitioned by date type column."}),"\n",(0,a.jsx)(i.li,{children:"Hudi Hive Sync now supports syncing directly via Hive MetaStore. You simply need to set hoodie.datasource.hive_sync.use_jdbc\n=false. Hive Metastore Uri will be read implicitly from environment. For example, when writing through Spark Data Source,"}),"\n"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-Scala",children:" spark.write.format(\u201chudi\u201d)\n .option(\u2026)\n .option(\u201choodie.datasource.hive_sync.username\u201d, \u201c<user>\u201d)\n .option(\u201choodie.datasource.hive_sync.password\u201d, \u201c<password>\u201d)\n .option(\u201choodie.datasource.hive_sync.partition_fields\u201d, \u201c<partition_fields>\u201d)\n .option(\u201choodie.datasource.hive_sync.database\u201d, \u201c<db_name>\u201d)\n .option(\u201choodie.datasource.hive_sync.table\u201d, \u201c<table_name>\u201d)\n .option(\u201choodie.datasource.hive_sync.use_jdbc\u201d, \u201cfalse\u201d)\n .mode(APPEND)\n .save(\u201c/path/to/dataset\u201d)\n"})}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["Other Writer Performance related fixes:","\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"DataSource Writer now avoids unnecessary loading of data after write."}),"\n",(0,a.jsx)(i.li,{children:"Hudi Writer now leverages spark parallelism when searching for existing files for writing new records."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"raw-release-notes",children:"Raw Release Notes"}),"\n",(0,a.jsxs)(i.p,{children:["The raw release notes are available ",(0,a.jsx)(i.a,{href:"https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12322822&version=12348256",children:"here"})]}),"\n",(0,a.jsxs)(i.h2,{id:"release-052-incubating-docs",children:[(0,a.jsx)(i.a,{href:"https://github.com/apache/hudi/releases/tag/release-0.5.2-incubating",children:"Release 0.5.2-incubating"})," (",(0,a.jsx)(i.a,{href:"/docs/quick-start-guide",children:"docs"}),")"]}),"\n",(0,a.jsx)(i.h3,{id:"migration-guide-for-this-release-1",children:"Migration Guide for this release"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["Write Client restructuring has moved classes around (",(0,a.jsx)(i.a,{href:"https://issues.apache.org/jira/browse/HUDI-554",children:"HUDI-554"}),"). Package ",(0,a.jsx)(i.code,{children:"client"})," now has all the various client classes, that do the transaction management. ",(0,a.jsx)(i.code,{children:"func"})," renamed to ",(0,a.jsx)(i.code,{children:"execution"})," and some helpers moved to ",(0,a.jsx)(i.code,{children:"client/utils"}),". All compaction code under ",(0,a.jsx)(i.code,{children:"io"})," now under ",(0,a.jsx)(i.code,{children:"table/compact"}),". Rollback code under ",(0,a.jsx)(i.code,{children:"table/rollback"})," and in general all code for individual operations under ",(0,a.jsx)(i.code,{children:"table"}),". This change only affects the apps/projects depending on hudi-client. Users of deltastreamer/datasource will not need to change anything."]}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"release-highlights-1",children:"Release Highlights"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["Support for overwriting the payload implementation in ",(0,a.jsx)(i.code,{children:"hoodie.properties"})," via specifying the ",(0,a.jsx)(i.code,{children:"hoodie.compaction.payload.class"})," config option. Previously, once the payload class is set once in ",(0,a.jsx)(i.code,{children:"hoodie.properties"}),", it cannot be changed. In some cases, if a code refactor is done and the jar updated, one may need to pass the new payload class name."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"TimestampBasedKeyGenerator"})," supports for ",(0,a.jsx)(i.code,{children:"CharSequence"}),"  types. Previously ",(0,a.jsx)(i.code,{children:"TimestampBasedKeyGenerator"})," only supports ",(0,a.jsx)(i.code,{children:"Double"}),", ",(0,a.jsx)(i.code,{children:"Long"}),", ",(0,a.jsx)(i.code,{children:"Float"})," and ",(0,a.jsx)(i.code,{children:"String"})," 4 data types for the partition key. Now, after data type extending, ",(0,a.jsx)(i.code,{children:"CharSequence"})," has been supported in ",(0,a.jsx)(i.code,{children:"TimestampBasedKeyGenerator"}),"."]}),"\n",(0,a.jsxs)(i.li,{children:["Hudi now supports incremental pulling from defined partitions via the ",(0,a.jsx)(i.code,{children:"hoodie.datasource.read.incr.path.glob"})," ",(0,a.jsx)(i.a,{href:"https://github.com/apache/hudi/blob/master/hudi-spark/src/main/scala/org/apache/hudi/DataSourceOptions.scala#L111",children:"config option"}),". For some use case that users only need to pull the incremental part of certain partitions, it can run faster by only loading relevant parquet files."]}),"\n",(0,a.jsxs)(i.li,{children:["With 0.5.2, hudi allows partition path to be updated with ",(0,a.jsx)(i.code,{children:"GLOBAL_BLOOM"})," index. Previously, when a record is to be updated with a new partition path, and when set to ",(0,a.jsx)(i.code,{children:"GLOBAL_BLOOM"})," as index, hudi ignores the new partition path and update the record in the original partition path. Now, hudi allows records to be inserted into their new partition paths and delete the records in the old partition paths. A configuration (e.g. ",(0,a.jsx)(i.code,{children:"hoodie.index.bloom.update.partition.path=true"}),") can be added to enable this feature."]}),"\n",(0,a.jsxs)(i.li,{children:["A ",(0,a.jsx)(i.code,{children:"JdbcbasedSchemaProvider"})," schema provider has been provided to get metadata through JDBC. For the use case that users want to synchronize data from MySQL, and at the same time, want to get the schema from the database, it's very helpful."]}),"\n",(0,a.jsxs)(i.li,{children:["Simplify ",(0,a.jsx)(i.code,{children:"HoodieBloomIndex"})," without the need for 2GB limit handling. Prior to spark 2.4.0, each spark partition has a limit of 2GB. In Hudi 0.5.1, after we upgraded to spark 2.4.4, we don't have the limitation anymore. Hence removing the safe parallelism constraint we had in",(0,a.jsx)(i.code,{children:" HoodieBloomIndex"}),"."]}),"\n",(0,a.jsxs)(i.li,{children:["CLI related changes:","\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["Allows users to specify option to print additional commit metadata, e.g. ",(0,a.jsx)(i.em,{children:"Total Log Blocks"}),", ",(0,a.jsx)(i.em,{children:"Total Rollback Blocks"}),", ",(0,a.jsx)(i.em,{children:"Total Updated Records Compacted"})," and so on."]}),"\n",(0,a.jsxs)(i.li,{children:["Supports ",(0,a.jsx)(i.code,{children:"temp_query"})," and ",(0,a.jsx)(i.code,{children:"temp_delete"})," to query and delete temp view. This command creates a temp table. Users can write HiveQL queries against the table to filter the desired row. For example,"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"temp_query --sql \"select Instant, NumInserts, NumWrites from satishkotha_debug where FileId='ed33bd99-466f-4417-bd92-5d914fa58a8f' and Instant > '20200123211217' order by Instant\"\n"})}),"\n",(0,a.jsx)(i.h3,{id:"raw-release-notes-1",children:"Raw Release Notes"}),"\n",(0,a.jsxs)(i.p,{children:["The raw release notes are available ",(0,a.jsx)(i.a,{href:"https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12322822&version=12346606",children:"here"})]}),"\n",(0,a.jsxs)(i.h2,{id:"release-051-incubating-docs",children:[(0,a.jsx)(i.a,{href:"https://github.com/apache/hudi/releases/tag/release-0.5.1-incubating",children:"Release 0.5.1-incubating"})," (",(0,a.jsx)(i.a,{href:"/docs/quick-start-guide",children:"docs"}),")"]}),"\n",(0,a.jsx)(i.h3,{id:"migration-guide-for-this-release-2",children:"Migration Guide for this release"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Upgrade hudi readers (query engines) first with 0.5.1-incubating release before upgrading writer."}),"\n",(0,a.jsxs)(i.li,{children:["In 0.5.1, the community restructured the package of key generators. The key generator related classes have been moved from ",(0,a.jsx)(i.code,{children:"org.apache.hudi"})," to ",(0,a.jsx)(i.code,{children:"org.apache.hudi.keygen"}),"."]}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"release-highlights-2",children:"Release Highlights"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)(i.p,{children:"Dependency Version Upgrades"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Upgrade from Spark 2.1.0 to Spark 2.4.4"}),"\n",(0,a.jsx)(i.li,{children:"Upgrade from Avro 1.7.7 to Avro 1.8.2"}),"\n",(0,a.jsx)(i.li,{children:"Upgrade from Parquet 1.8.1 to Parquet 1.10.1"}),"\n",(0,a.jsx)(i.li,{children:"Upgrade from Kafka 0.8.2.1 to Kafka 2.0.0 as a result of updating spark-streaming-kafka artifact from 0.8_2.11/2.12 to 0.10_2.11/2.12."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:"IMPORTANT"})," This version requires your runtime spark version to be upgraded to 2.4+."]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:["Hudi now supports both Scala 2.11 and Scala 2.12, please refer to ",(0,a.jsx)(i.a,{href:"https://github.com/apache/hudi#build-with-scala-212",children:"Build with Scala 2.12"})," to build with Scala 2.12.\nAlso, the packages hudi-spark, hudi-utilities, hudi-spark-bundle and hudi-utilities-bundle are changed correspondingly to hudi-spark_{scala_version}, hudi-spark_{scala_version}, hudi-utilities_{scala_version}, hudi-spark-bundle_{scala_version} and hudi-utilities-bundle_{scala_version}.\nNote that scala_version here is one of (2.11, 2.12)."]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:["With 0.5.1, we added functionality to stop using renames for Hudi timeline metadata operations. This feature is automatically enabled for newly created Hudi tables. For existing tables, this feature is turned off by default. Please read this ",(0,a.jsx)(i.a,{href:"https://hudi.apache.org/docs/deployment#upgrading",children:"section"}),', before enabling this feature for existing hudi tables.\nTo enable the new hudi timeline layout which avoids renames, use the write config "hoodie.timeline.layout.version=1". Alternatively, you can use "repair overwrite-hoodie-props" to append the line "hoodie.timeline.layout.version=1" to hoodie.properties. Note that in any case, upgrade hudi readers (query engines) first with 0.5.1-incubating release before upgrading writer.']}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:["CLI supports ",(0,a.jsx)(i.code,{children:"repair overwrite-hoodie-props"})," to overwrite the table's hoodie.properties with specified file, for one-time updates to table name or even enabling the new timeline layout above. Note that few queries may temporarily fail while the overwrite happens (few milliseconds)."]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:["DeltaStreamer CLI parameter for capturing table type is changed from ",(0,a.jsx)(i.code,{children:"--storage-type"})," to ",(0,a.jsx)(i.code,{children:"--table-type"}),". Refer to ",(0,a.jsx)(i.a,{href:"https://cwiki.apache.org/confluence/display/HUDI/Design+And+Architecture",children:"wiki"})," with more latest terminologies."]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)(i.p,{children:"Configuration Value change for Kafka Reset Offset Strategies. Enum values are changed from LARGEST to LATEST, SMALLEST to EARLIEST for configuring Kafka reset offset strategies with configuration(auto.offset.reset) in deltastreamer."}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:["When using spark-shell to give a quick peek at Hudi, please provide ",(0,a.jsx)(i.code,{children:"--packages org.apache.spark:spark-avro_2.11:2.4.4"}),", more details would refer to ",(0,a.jsx)(i.a,{href:"https://hudi.apache.org/docs/quick-start-guide",children:"latest quickstart docs"})]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)(i.p,{children:'Key generator moved to separate package under org.apache.hudi.keygen. If you are using overridden key generator classes (configuration ("hoodie.datasource.write.keygenerator.class")) that comes with hudi package, please ensure the fully qualified class name is changed accordingly.'}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:["Hive Sync tool will register RO tables for MOR with a _ro suffix, so query with _ro suffix. You would use ",(0,a.jsx)(i.code,{children:"--skip-ro-suffix"})," in sync config in sync config to retain the old naming without the _ro suffix."]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:["With 0.5.1, hudi-hadoop-mr-bundle which is used by query engines such as presto and hive includes shaded avro package to support hudi real time queries through these engines. Hudi supports pluggable logic for merging of records. Users provide their own implementation of ",(0,a.jsx)(i.a,{href:"https://github.com/apache/hudi/blob/master/hudi-common/src/main/java/org/apache/hudi/common/model/HoodieRecordPayload.java",children:"HoodieRecordPayload"}),".\nIf you are using this feature, you need to relocate the avro dependencies in your custom record payload class to be consistent with internal hudi shading. You need to add the following relocation when shading the package containing the record payload implementation."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-xml",children:"<relocation>\n  <pattern>org.apache.avro.</pattern>\n  <shadedPattern>org.apache.hudi.org.apache.avro.</shadedPattern>\n</relocation>\n"})}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:["Better delete support in DeltaStreamer, please refer to ",(0,a.jsx)(i.a,{href:"https://cwiki.apache.org/confluence/display/HUDI/2020/01/15/Delete+support+in+Hudi",children:"blog"})," for more info."]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:["Support for AWS Database Migration Service(DMS) in DeltaStreamer, please refer to ",(0,a.jsx)(i.a,{href:"https://cwiki.apache.org/confluence/display/HUDI/2020/01/20/Change+Capture+Using+AWS+Database+Migration+Service+and+Hudi",children:"blog"})," for more info."]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:["Support for DynamicBloomFilter. This is turned off by default, to enable the DynamicBloomFilter, please use the index config ",(0,a.jsx)(i.code,{children:"hoodie.bloom.index.filter.type=DYNAMIC_V0"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"raw-release-notes-2",children:"Raw Release Notes"}),"\n",(0,a.jsxs)(i.p,{children:["The raw release notes are available ",(0,a.jsx)(i.a,{href:"https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12322822&version=12346183",children:"here"})]}),"\n",(0,a.jsxs)(i.h2,{id:"release-050-incubating-docs",children:[(0,a.jsx)(i.a,{href:"https://github.com/apache/hudi/releases/tag/release-0.5.0-incubating",children:"Release 0.5.0-incubating"})," (",(0,a.jsx)(i.a,{href:"/docs/quick-start-guide",children:"docs"}),")"]}),"\n",(0,a.jsx)(i.h3,{id:"release-highlights-3",children:"Release Highlights"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Package and format renaming from com.uber.hoodie to org.apache.hudi (See migration guide section below)"}),"\n",(0,a.jsx)(i.li,{children:"Major redo of Hudi bundles to address class and jar version mismatches in different environments"}),"\n",(0,a.jsxs)(i.li,{children:["Upgrade from Hive 1.x to Hive 2.x for compile time dependencies - Hive 1.x runtime integration still works with a patch : See ",(0,a.jsx)(i.a,{href:"https://lists.apache.org/thread/48b3f0553f47c576fd7072f56bb0d8a24fb47d4003880d179c7f88a3@%3Cdev.hudi.apache.org%3E",children:"the discussion thread"})]}),"\n",(0,a.jsx)(i.li,{children:"DeltaStreamer now supports continuous running mode with managed concurrent compaction"}),"\n",(0,a.jsx)(i.li,{children:"Support for Composite Keys as record key"}),"\n",(0,a.jsx)(i.li,{children:"HoodieCombinedInputFormat to scale huge hive queries running on Hoodie tables"}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"migration-guide-for-this-release-3",children:"Migration Guide for this release"}),"\n",(0,a.jsxs)(i.p,{children:['This is the first Apache release for Hudi. Prior to this release, Hudi Jars were published using "com.uber.hoodie" maven co-ordinates. We have a ',(0,a.jsx)(i.a,{href:"https://cwiki.apache.org/confluence/display/HUDI/Migration+Guide+From+com.uber.hoodie+to+org.apache.hudi",children:"migration guide"})]}),"\n",(0,a.jsx)(i.h3,{id:"raw-release-notes-3",children:"Raw Release Notes"}),"\n",(0,a.jsxs)(i.p,{children:["The raw release notes are available ",(0,a.jsx)(i.a,{href:"https://jira.apache.org/jira/secure/ReleaseNote.jspa?projectId=12322822&version=12346087",children:"here"})]}),"\n",(0,a.jsx)(i.h2,{id:"release-047",children:(0,a.jsx)(i.a,{href:"https://github.com/apache/hudi/releases/tag/hoodie-0.4.7",children:"Release 0.4.7"})}),"\n",(0,a.jsx)(i.h3,{id:"release-highlights-4",children:"Release Highlights"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Major releases with fundamental changes to filesystem listing & write failure handling"}),"\n",(0,a.jsx)(i.li,{children:"Introduced the first version of HoodieTimelineServer that runs embedded on the driver"}),"\n",(0,a.jsx)(i.li,{children:"With all executors fetching filesystem listing via RPC to timeline server, drastically reduced filesystem listing!"}),"\n",(0,a.jsx)(i.li,{children:"Failing concurrent write tasks are now handled differently to be robust against spark stage retries"}),"\n",(0,a.jsx)(i.li,{children:"Bug fixes/clean up around indexing, compaction"}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"pr-list",children:"PR LIST"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["Skip Meta folder when looking for partitions. ",(0,a.jsx)(i.a,{href:"https://github.com/apache/hudi/pull/698",children:"#698"})]}),"\n",(0,a.jsxs)(i.li,{children:["HUDI-134 - Disable inline compaction for Hoodie Demo. ",(0,a.jsx)(i.a,{href:"https://github.com/apache/hudi/pull/696",children:"#696"})]}),"\n",(0,a.jsxs)(i.li,{children:["Default implementation for HBase index qps allocator. ",(0,a.jsx)(i.a,{href:"https://github.com/apache/hudi/pull/685",children:"#685"})]}),"\n",(0,a.jsxs)(i.li,{children:["Handle duplicate record keys across partitions. ",(0,a.jsx)(i.a,{href:"https://github.com/apache/hudi/pull/687",children:"#687"})]}),"\n",(0,a.jsxs)(i.li,{children:["Fix up offsets not available on leader exception. ",(0,a.jsx)(i.a,{href:"https://github.com/apache/hudi/pull/650",children:"#650"})]}),"\n"]})]})}function c(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,i,s)=>{s.d(i,{R:()=>t,x:()=>o});var a=s(96540);const r={},n=a.createContext(r);function t(e){const i=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(n.Provider,{value:i},e.children)}}}]);
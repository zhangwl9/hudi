"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[44640],{91474:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var r=a(74848),i=a(28453);a(11470),a(19365);const n={title:"Release 0.10.0",sidebar_position:15,layout:"releases",toc:!0},s=void 0,o={id:"release-0.10.0",title:"Release 0.10.0",description:"Release 0.10.0 (docs)",source:"@site/releases/release-0.10.0.md",sourceDirName:".",slug:"/release-0.10.0",permalink:"/cn/releases/release-0.10.0",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"Release 0.10.0",sidebar_position:15,layout:"releases",toc:!0},sidebar:"releases",previous:{title:"Release 0.10.1",permalink:"/cn/releases/release-0.10.1"},next:{title:"Release 0.9.0",permalink:"/cn/releases/release-0.9.0"}},l={},d=[{value:"Release 0.10.0 (docs)",id:"release-0100-docs",level:2},{value:"Migration Guide",id:"migration-guide",level:2},{value:"Prerequisites for enabling metadata table",id:"prerequisites-for-enabling-metadata-table",level:3},{value:"Upgrade steps",id:"upgrade-steps",level:3},{value:"Spark-SQL primary key requirements",id:"spark-sql-primary-key-requirements",level:3},{value:"Release Highlights",id:"release-highlights",level:2},{value:"Kafka Connect",id:"kafka-connect",level:3},{value:"Z-Ordering, Hilbert Curves and Data Skipping",id:"z-ordering-hilbert-curves-and-data-skipping",level:3},{value:"Debezium Deltastreamer sources",id:"debezium-deltastreamer-sources",level:3},{value:"External config file support",id:"external-config-file-support",level:3},{value:"Metadata table",id:"metadata-table",level:3},{value:"Documentation overhaul",id:"documentation-overhaul",level:3},{value:"Writer side improvements",id:"writer-side-improvements",level:2},{value:"DynamoDB based lock provider",id:"dynamodb-based-lock-provider",level:3},{value:"Default flips",id:"default-flips",level:3},{value:"Spark SQL improvements",id:"spark-sql-improvements",level:3},{value:"Query side improvements",id:"query-side-improvements",level:2},{value:"Flink Integration Improvements",id:"flink-integration-improvements",level:2},{value:"Ecosystem",id:"ecosystem",level:2},{value:"DBT support",id:"dbt-support",level:3},{value:"Monitoring",id:"monitoring",level:3},{value:"DevEx",id:"devex",level:3},{value:"Repair tool for dangling data files",id:"repair-tool-for-dangling-data-files",level:3},{value:"Raw Release Notes",id:"raw-release-notes",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h2,{id:"release-0100-docs",children:[(0,r.jsx)(t.a,{href:"https://github.com/apache/hudi/releases/tag/release-0.10.0",children:"Release 0.10.0"})," (",(0,r.jsx)(t.a,{href:"/docs/0.10.0/quick-start-guide",children:"docs"}),")"]}),"\n",(0,r.jsx)(t.h2,{id:"migration-guide",children:"Migration Guide"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"If migrating from an older release, please also check the upgrade instructions for each subsequent release below."}),"\n",(0,r.jsx)(t.li,{children:"With 0.10.0, we have made some foundational fix to metadata table and so as part of upgrade, any existing metadata table is cleaned up.\nWhenever Hudi is launched with newer table version i.e 3 (or moving from an earlier release to 0.10.0), an upgrade step will be executed automatically.\nThis automatic upgrade step will happen just once per Hudi table as the hoodie.table.version will be updated in property file after upgrade is completed."}),"\n",(0,r.jsx)(t.li,{children:"Similarly, a command line tool for Downgrading (command - downgrade) is added if in case some users want to downgrade Hudi\nfrom table version 3 to 2 or move from Hudi 0.10.0 to pre 0.10.0. This needs to be executed from a 0.10.0 hudi-cli binary/script."}),"\n",(0,r.jsx)(t.li,{children:"We have made some major fixes to 0.10.0 release around metadata table and would recommend users to try out metadata\nfor better performance from optimized file listings. As part of the upgrade, please follow the below steps to enable metadata table."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"prerequisites-for-enabling-metadata-table",children:"Prerequisites for enabling metadata table"}),"\n",(0,r.jsx)(t.p,{children:"Hudi writes and reads have to perform \u201clist files\u201d operation on the file system to get the current view of the system.\nThis could be very costly in cloud stores which could throttle your requests depending on the scale/size of your dataset.\nSo, we introduced a metadata table in 0.7.0 to cache the file listing for the table. With 0.10.0, we have made a foundational fix\nto the metadata table with synchronous updates instead of async updates to simplify the overall design and to assist in\nbuilding future enhancements like multi-modal indexing. This can be turned on using the config hoodie.metadata.enable.\nBy default, metadata table based file listing feature is disabled."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Deployment Model"})," 1 : If your current deployment model is single writer and all table services (cleaning, clustering, compaction) are configured to be ",(0,r.jsx)(t.strong,{children:"inline"}),",\nthen you can turn on the metadata table without needing any additional configuration."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Deployment Model"})," 2 : If your current deployment model is ",(0,r.jsx)(t.a,{href:"https://hudi.apache.org/docs/concurrency_control",children:"multi writer"}),"\nalong with ",(0,r.jsx)(t.a,{href:"https://hudi.apache.org/docs/concurrency_control#enabling-multi-writing",children:"lock providers"})," configured,\nthen you can turn on the metadata table without needing any additional configuration."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Deployment Model 3"})," : If your current deployment model is single writer along with async table services (such as cleaning, clustering, compaction) configured,\nthen it is a must to have the lock providers configured before turning on the metadata table.\nEven if you have already had a metadata table turned on, and your deployment model employs async table services,\nthen it is  a must to have lock providers configured before upgrading to this release."]}),"\n",(0,r.jsx)(t.h3,{id:"upgrade-steps",children:"Upgrade steps"}),"\n",(0,r.jsx)(t.p,{children:"For deployment mode 1, restarting the Single Writer with 0.10.0 is sufficient to upgrade the table."}),"\n",(0,r.jsxs)(t.p,{children:["For deployment model 2 with multi-writers, you can bring up the writers with 0.10.0 sequentially.\nIf you intend to use the metadata table, it is a must to have the ",(0,r.jsx)(t.a,{href:"https://hudi.apache.org/docs/configurations/#hoodiemetadataenable",children:"metadata config"})," enabled across all the writers.\nOtherwise, it will lead to loss of data from the inconsistent writer."]}),"\n",(0,r.jsx)(t.p,{children:"For deployment model 3 with single writer and async table services, restarting the single writer along with async services is sufficient to upgrade the table.\nIf async services are configured to run separately from the writer, then it is a must to have a consistent metadata config across all writers and async jobs.\nRemember to configure the lock providers as detailed above if enabling the metadata table."}),"\n",(0,r.jsx)(t.p,{children:"To leverage the metadata table based file listings, readers must have metadata config turned on explicitly while querying.\nIf not, readers will not leverage the file listings from the metadata table."}),"\n",(0,r.jsx)(t.h3,{id:"spark-sql-primary-key-requirements",children:"Spark-SQL primary key requirements"}),"\n",(0,r.jsxs)(t.p,{children:["Spark SQL in Hudi requires ",(0,r.jsx)(t.code,{children:"primaryKey"})," to be specified by tblproperites or options in sql statement.\nFor update and delete operations, ",(0,r.jsx)(t.code,{children:"preCombineField"})," is required as well. These requirements align with\nHudi datasource writer\u2019s and the alignment resolves many behavioural discrepancies reported in previous versions."]}),"\n",(0,r.jsxs)(t.p,{children:["To specify ",(0,r.jsx)(t.code,{children:"primaryKey"}),", ",(0,r.jsx)(t.code,{children:"preCombineField"})," or other hudi configs, ",(0,r.jsx)(t.code,{children:"tblproperties"})," is a preferred way than ",(0,r.jsx)(t.code,{children:"options"}),".\nSpark SQL syntax is detailed ",(0,r.jsx)(t.a,{href:"https://spark.apache.org/docs/latest/sql-ref-syntax-ddl-create-table-datasource.html",children:"DDL CREATE TABLE"}),".\nIn summary, any Hudi table created pre 0.10.0 without a ",(0,r.jsx)(t.code,{children:"primaryKey"})," need to be recreated with a ",(0,r.jsx)(t.code,{children:"primaryKey"})," field with 0.10.0.\nWe plan to remove the need for primary keys in future versions more holistically."]}),"\n",(0,r.jsx)(t.h2,{id:"release-highlights",children:"Release Highlights"}),"\n",(0,r.jsx)(t.h3,{id:"kafka-connect",children:"Kafka Connect"}),"\n",(0,r.jsxs)(t.p,{children:["In 0.10.0, we are adding a Kafka Connect Sink for Hudi that provides the ability for users to ingest/stream records from Apache Kafka to Hudi Tables.\nWhile users can already stream Kafka records into Hudi tables using deltastreamer, the Kafka connect sink offers greater flexibility\nto current users of Kafka connect sinks such as S3, HDFS, etc to additionally sink their data to a data lake.\nIt also helps users who do not want to deploy and operate spark.  The sink is currently experimental,\nand users can quickly get started by referring to the detailed steps in the ",(0,r.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/master/hudi-kafka-connect/README.md",children:"README"}),".\nFor users who are curious about the internals, you can refer to the ",(0,r.jsx)(t.a,{href:"https://cwiki.apache.org/confluence/display/HUDI/RFC-32+Kafka+Connect+Sink+for+Hudi",children:"RFC"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"z-ordering-hilbert-curves-and-data-skipping",children:"Z-Ordering, Hilbert Curves and Data Skipping"}),"\n",(0,r.jsxs)(t.p,{children:["In 0.10.0 we\u2019re bringing (in experimental mode) support for indexing based on space-filling curves ordering initially\nsupporting ",(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Z-order_curve",children:"Z-order"})," and ",(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Hilbert_curve",children:"Hilbert curves"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Data skipping is crucial in optimizing query performance. Enabled by the Column Statistics Index containing column level stats (like min, max, number of nulls, etc)\nfor individual data files, allows to quickly prune (for some queries) the search space by excluding files that are guaranteed\nnot to contain the values of interest for the query in question. Effectiveness of Data Skipping is maximized\nwhen data is globally ordered by the columns, allowing individual Parquet files to contain disjoint ranges of values,\nallowing for more effective pruning."}),"\n",(0,r.jsx)(t.p,{children:"Using space-filling curves (like Z-order, Hilbert, etc) allows to effectively order rows in your table based on sort-key\ncomprising multiple columns, while preserving very important property: ordering of the rows using space-filling curve\non multi-column key will preserve within itself the ordering by each individual column as well.\nThis property comes very handy in use-cases when rows need to be ordered by complex multi-column sort keys,\nwhich need to be queried efficiently by any subset of they key (not necessarily key\u2019s prefix), making space-filling curves stand out\nfrom plain and simple linear (or lexicographical) multi-column ordering. Using space-filling curves in such use-cases might bring order(s)\nof magnitude speed-up in your queries' performance by considerably reducing search space, if applied appropriately."}),"\n",(0,r.jsx)(t.p,{children:"These features are currently experimental, we\u2019re planning to dive into more details showcasing real-world application\nof the space-filling curves in a blog post soon."}),"\n",(0,r.jsx)(t.h3,{id:"debezium-deltastreamer-sources",children:"Debezium Deltastreamer sources"}),"\n",(0,r.jsx)(t.p,{children:"We have added two new debezium sources to our deltastreamer ecosystem. Debezium is an open source distributed platform for change data capture(CDC).\nWe have added PostgresDebeziumSource and MysqlDebeziumSource to route CDC logs into Apache Hudi via deltastreamer for postgres and my sql db respectively.\nWith this capability, we can continuously capture row-level changes that insert, update and delete records that were committed to a database and ingest to hudi."}),"\n",(0,r.jsx)(t.h3,{id:"external-config-file-support",children:"External config file support"}),"\n",(0,r.jsxs)(t.p,{children:["Instead of directly and sometimes passing configurations to every Hudi job, since 0.10.0 users can now pass in configuration via a configuration file ",(0,r.jsx)(t.code,{children:"hudi-defaults.conf"}),".\nBy default, Hudi would load the configuration file under /etc/hudi/conf directory. You can specify a different configuration directory location\nby setting the ",(0,r.jsx)(t.strong,{children:"HUDI_CONF_DIR"})," environment variable. This can be useful for uniformly enforcing often repeated configs\nlike Hive sync settings, write/index tuning parameters, across your entire data lake."]}),"\n",(0,r.jsx)(t.h3,{id:"metadata-table",children:"Metadata table"}),"\n",(0,r.jsxs)(t.p,{children:["With 0.10.0, we have made a foundational fix to the metadata table with synchronous updates instead of async updates\nto simplify the overall design and to assist in building future enhancements. This can be turned on using the config ",(0,r.jsx)(t.a,{href:"https://hudi.apache.org/docs/configurations/#hoodiemetadataenable",children:"hoodie.metadata.enable"}),".\nBy default, metadata table based file listing feature is disabled. We have few following up tasks we are looking to fix by 0.11.0.\nYou can follow ",(0,r.jsx)(t.a,{href:"https://issues.apache.org/jira/browse/HUDI-1292",children:"HUDI-1292"})," umbrella ticket for further details.\nPlease refer to the Migration guide section before turning on the metadata table."]}),"\n",(0,r.jsx)(t.h3,{id:"documentation-overhaul",children:"Documentation overhaul"}),"\n",(0,r.jsxs)(t.p,{children:["Documentation was added for many pre-existing features that were previously missing docs. We reorganised the documentation\nlayout to improve discoverability and help new users ramp up on Hudi. We made many doc improvements based on community feedback.\nSee the latest docs at: ",(0,r.jsx)(t.a,{href:"https://hudi.apache.org/docs/overview",children:"overview"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"writer-side-improvements",children:"Writer side improvements"}),"\n",(0,r.jsx)(t.p,{children:"Commit instant time format have been upgraded to ms granularity from secs granularity. Users don\u2019t have to do any special handling in this,\nregular upgrade should work smoothly."}),"\n",(0,r.jsx)(t.p,{children:"Deltastreamer:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"ORCDFSSource has been added to support orc files with DFSSource."}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"S3EventsHoodieIncrSource"})," can now fan-out multiple tables off a single S3 metadata table."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Clustering:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"We have added support to retain same file groups with clustering to cater to the requirements of external index.\nIncremental timeline support has been added for pending clustering operations."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"dynamodb-based-lock-provider",children:"DynamoDB based lock provider"}),"\n",(0,r.jsx)(t.p,{children:"Hudi added support for multi-writers in 0.7.0 and as part of it, users are required to configure lock service providers.\nIn 0.10.0, we are adding DynamoDBBased lock provider that users can make use of. To configure this lock provider, users have to set the below configs:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"hoodie.write.lock.provider=org.apache.hudi.aws.transaction.lock.DynamoDBBasedLockProvider\nHoodie.write.lock.dynamodb.table\nHoodie.write.lock.dynamodb.partition_keyhoodie.write.lock.dynamodb.region\n"})}),"\n",(0,r.jsx)(t.p,{children:"Also, to set up the credentials for accessing AWS resources, users can set the below property:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"hoodie.aws.access.keyhoodie.aws.secret.keyhoodie.aws.session.token\n"})}),"\n",(0,r.jsxs)(t.p,{children:["More details on concurrency control are covered ",(0,r.jsx)(t.a,{href:"https://hudi.apache.org/docs/next/concurrency_control",children:"here"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"default-flips",children:"Default flips"}),"\n",(0,r.jsxs)(t.p,{children:["We have flipped defaults for all shuffle parallelism configs in hudi from 1500 to 200. The configs of interest are ",(0,r.jsx)(t.a,{href:"https://hudi.apache.org/docs/next/configurations#hoodieinsertshuffleparallelism",children:(0,r.jsx)(t.code,{children:"hoodie.insert.shuffle.parallelism"})}),",\n",(0,r.jsx)(t.a,{href:"https://hudi.apache.org/docs/next/configurations#hoodiebulkinsertshuffleparallelism",children:(0,r.jsx)(t.code,{children:"hoodie.bulkinsert.shuffle.parallelism"})}),",\n",(0,r.jsx)(t.a,{href:"https://hudi.apache.org/docs/next/configurations#hoodieupsertshuffleparallelism",children:(0,r.jsx)(t.code,{children:"hoodie.upsert.shuffle.parallelism"})})," and\n",(0,r.jsx)(t.a,{href:"https://hudi.apache.org/docs/next/configurations#hoodiedeleteshuffleparallelism",children:(0,r.jsx)(t.code,{children:"hoodie.delete.shuffle.parallelism"})}),".\nIf you have been relying on the default settings, just watch out after upgrading. We have tested these configs at a reasonable scale though."]}),"\n",(0,r.jsxs)(t.p,{children:["We have enabled the rollback strategy to use marker based from listing based. And we have also made timeline server based\nmarkers as default with this release. You can read more on the timeline server based markers ",(0,r.jsx)(t.a,{href:"https://hudi.apache.org/blog/2021/08/18/improving-marker-mechanism",children:"here"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Clustering: Default plan strategy changed to ",(0,r.jsx)(t.code,{children:"SparkSizeBasedClusteringPlanStrategy"}),". By default, commit metadata will be preserved when clustering.\nIt will be useful for incremental query support with replace commits in the timeline."]}),"\n",(0,r.jsx)(t.h3,{id:"spark-sql-improvements",children:"Spark SQL improvements"}),"\n",(0,r.jsxs)(t.p,{children:["We have made more improvements to spark-sql like adding support for ",(0,r.jsx)(t.code,{children:"MERGE INTO"})," to work with non-primary keys,\nand added support for new operations like ",(0,r.jsx)(t.code,{children:"SHOW PARTITIONS"})," and ",(0,r.jsx)(t.code,{children:"DROP PARTITIONS"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"query-side-improvements",children:"Query side improvements"}),"\n",(0,r.jsx)(t.p,{children:"Hive Incremental query support and partition pruning for snapshot query has been added for MOR table. Support has been added for incremental read with clustering commit."}),"\n",(0,r.jsx)(t.p,{children:"We have improved the listing logic to gain 65% on query time and 2.8x parallelism on Presto queries against the Hudi tables."}),"\n",(0,r.jsx)(t.p,{children:"In general, we have made a lot of bug fixes (multi writers, archival, rollbacks, metadata, clustering, etc) and stability fixes in this release.\nAnd have improved our CLI around metadata and clustering commands. Hoping users will have a smoother ride with hudi 0.10.0."}),"\n",(0,r.jsx)(t.h2,{id:"flink-integration-improvements",children:"Flink Integration Improvements"}),"\n",(0,r.jsxs)(t.p,{children:["Flink reader now supports incremental read, set ",(0,r.jsx)(t.code,{children:"hoodie.datasource.query.type"})," as ",(0,r.jsx)(t.code,{children:"incremental"})," to enable for batch execution mode.\nConfigure option ",(0,r.jsx)(t.code,{children:"read.start-commit"})," to specify the reading start commit, configure option ",(0,r.jsx)(t.code,{children:"read.end-commit"}),"\nto specify the end commit (both are inclusive). Streaming reader can also specify the start offset with the same option ",(0,r.jsx)(t.code,{children:"read.start-commit"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Upsert operation is now supported for batch execution mode, use ",(0,r.jsx)(t.code,{children:"INSERT INTO"})," syntax to update the existing data set."]}),"\n",(0,r.jsxs)(t.p,{children:["For non-updating data set like the log data, flink writer now supports appending the new data set directly without merging,\nthis now becomes the default mode for Copy On Write table type with ",(0,r.jsx)(t.code,{children:"INSERT"})," operation,\nby default, the writer does not merge the existing small files, set option ",(0,r.jsx)(t.code,{children:"write.insert.cluster"})," as ",(0,r.jsx)(t.code,{children:"true"})," to enable merging of the small files."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"write.precombine.field"})," now becomes optional(not a required option) for flink writer, when the field is not specified,\nif there is a field named ",(0,r.jsx)(t.code,{children:"ts"})," in the table schema, the writer use it as the preCombine field,\nor the writer compares records by processing sequence: always choose later records."]}),"\n",(0,r.jsx)(t.p,{children:"The small file strategy is tweaked to be more stable, with the new strategy, each bucket assign task manages a subset of filegroups separately,\nthat means, the parallelism of bucket assign task would affect the number of small files."}),"\n",(0,r.jsxs)(t.p,{children:["The metadata table is also supported for flink writer and reader, metadata table can reduce the partition lookup and file listing obviously for the underneath storage for both writer and reader side.\nSet option ",(0,r.jsx)(t.code,{children:"metadata.enabled"})," to ",(0,r.jsx)(t.code,{children:"true"})," to enable this feature."]}),"\n",(0,r.jsx)(t.h2,{id:"ecosystem",children:"Ecosystem"}),"\n",(0,r.jsx)(t.h3,{id:"dbt-support",children:"DBT support"}),"\n",(0,r.jsxs)(t.p,{children:["We've made it so much easier to create derived hudi datasets by integrating with the very popular data transformation tool (dbt).\nWith 0.10.0, users can create incremental hudi datasets using dbt. Please see this PR for details ",(0,r.jsx)(t.a,{href:"https://github.com/dbt-labs/dbt-spark/issues/187",children:"https://github.com/dbt-labs/dbt-spark/issues/187"})]}),"\n",(0,r.jsx)(t.h3,{id:"monitoring",children:"Monitoring"}),"\n",(0,r.jsxs)(t.p,{children:["Hudi now supports publishing metrics to Amazon CloudWatch. It can be configured by setting ",(0,r.jsx)(t.a,{href:"https://hudi.apache.org/docs/next/configurations#hoodiemetricsreportertype",children:(0,r.jsx)(t.code,{children:"hoodie.metrics.reporter.type"})})," to \u201cCLOUDWATCH\u201d.\nStatic AWS credentials to be used can be configured using ",(0,r.jsx)(t.a,{href:"https://hudi.apache.org/docs/next/configurations#hoodieawsaccesskey",children:(0,r.jsx)(t.code,{children:"hoodie.aws.access.key"})}),",\n",(0,r.jsx)(t.a,{href:"https://hudi.apache.org/docs/next/configurations#hoodieawssecretkey",children:(0,r.jsx)(t.code,{children:"hoodie.aws.secret.key"})}),",\n",(0,r.jsx)(t.a,{href:"https://hudi.apache.org/docs/next/configurations#hoodieawssessiontoken",children:(0,r.jsx)(t.code,{children:"hoodie.aws.session.token"})})," properties.\nIn the absence of static AWS credentials being configured, ",(0,r.jsx)(t.code,{children:"DefaultAWSCredentialsProviderChain"})," will be used to get credentials by checking environment properties.\nAdditional Amazon CloudWatch reporter specific properties that can be tuned are in the ",(0,r.jsx)(t.code,{children:"HoodieMetricsCloudWatchConfig"})," class."]}),"\n",(0,r.jsx)(t.h3,{id:"devex",children:"DevEx"}),"\n",(0,r.jsxs)(t.p,{children:["Default maven spark3 version is not upgraded to 3.1 So, ",(0,r.jsx)(t.code,{children:"maven profile -Dspark3"})," will build Hudi against Spark 3.1.2 with 0.10.0. Use ",(0,r.jsx)(t.code,{children:"-Dspark3.0.x"})," for building against Spark 3.0.x versions"]}),"\n",(0,r.jsx)(t.h3,{id:"repair-tool-for-dangling-data-files",children:"Repair tool for dangling data files"}),"\n",(0,r.jsxs)(t.p,{children:["Sometimes, there could be dangling data files lying around due to various reasons ranging from rollback failing mid-way\nto cleaner failing to clean up all data files, or data files created by spark task failures were not cleaned up properly.\nSo, we are adding a repair tool to clean up any dangling data files which are not part of completed commits. Feel free to try out\nthe tool via spark-submit at ",(0,r.jsx)(t.code,{children:"org.apache.hudi.utilities.HoodieRepairTool"})," in hudi-utilities bundle, if you encounter issues in 0.10.0 release.\nThe tool has dry run mode as well which would print the dangling files without actually deleting it. The tool is available\nfrom 0.11.0-SNAPSHOT on master."]}),"\n",(0,r.jsx)(t.h2,{id:"raw-release-notes",children:"Raw Release Notes"}),"\n",(0,r.jsxs)(t.p,{children:["The raw release notes are available ",(0,r.jsx)(t.a,{href:"https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12322822&version=12350285",children:"here"})]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>s});a(96540);var r=a(34164);const i={tabItem:"tabItem_Ymn6"};var n=a(74848);function s(e){let{children:t,hidden:a,className:s}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>j});var r=a(96540),i=a(34164),n=a(23104),s=a(56347),o=a(205),l=a(57485),d=a(31682),c=a(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:i}}=e;return{value:t,label:a,attributes:r,default:i}}))}(a);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const i=(0,s.W6)(),n=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(n),(0,r.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(i.location.search);t.set(n,e),i.replace({...i.location,search:t.toString()})}),[n,i])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:i}=e,n=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:n}))),[d,u]=m({queryString:a,groupId:i}),[f,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,n]=(0,c.Dv)(a);return[i,(0,r.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:i}),b=(()=>{const e=d??f;return p({value:e,tabValues:n})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,n]),tabValues:n}}var g=a(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(74848);function y(e){let{className:t,block:a,selectedValue:r,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,n.a_)(),c=e=>{const t=e.currentTarget,a=l.indexOf(t),i=o[a].value;i!==r&&(d(t),s(i))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:n}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:u,onClick:c,...n,className:(0,i.A)("tabs__item",b.tabItem,n?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function x(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function w(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,v.jsx)(y,{...t,...e}),(0,v.jsx)(x,{...t,...e})]})}function j(e){const t=(0,g.A)();return(0,v.jsx)(w,{...e,children:u(e.children)},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>o});var r=a(96540);const i={},n=r.createContext(i);function s(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[54881],{1940:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var n=t(74848),o=t(28453);const a={title:"Compaction",summary:"In this page, we describe async compaction in Hudi.",toc:!0,toc_min_heading_level:2,toc_max_heading_level:4,last_modified_at:null},s=void 0,r={id:"compaction",title:"Compaction",description:"Background",source:"@site/versioned_docs/version-0.14.1/compaction.md",sourceDirName:".",slug:"/compaction",permalink:"/docs/0.14.1/compaction",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.14.1/compaction.md",tags:[],version:"0.14.1",frontMatter:{title:"Compaction",summary:"In this page, we describe async compaction in Hudi.",toc:!0,toc_min_heading_level:2,toc_max_heading_level:4,last_modified_at:null},sidebar:"docs",previous:{title:"Bootstrapping",permalink:"/docs/0.14.1/migration_guide"},next:{title:"Clustering",permalink:"/docs/0.14.1/clustering"}},c={},l=[{value:"Background",id:"background",level:2},{value:"Why MOR tables need compaction?",id:"why-mor-tables-need-compaction",level:3},{value:"Compaction Architecture",id:"compaction-architecture",level:2},{value:"Strategies in Compaction Scheduling",id:"strategies-in-compaction-scheduling",level:3},{value:"Trigger Strategies",id:"trigger-strategies",level:4},{value:"Compaction Strategies",id:"compaction-strategies",level:4},{value:"Ways to trigger Compaction",id:"ways-to-trigger-compaction",level:2},{value:"Inline",id:"inline",level:3},{value:"Async &amp; Offline Compaction models",id:"async--offline-compaction-models",level:3},{value:"Async execution within the same process",id:"async-execution-within-the-same-process",level:4},{value:"Spark Structured Streaming",id:"spark-structured-streaming",level:5},{value:"Hudi Streamer Continuous Mode",id:"hudi-streamer-continuous-mode",level:5},{value:"Scheduling and Execution by a separate process",id:"scheduling-and-execution-by-a-separate-process",level:4},{value:"Scheduling inline and executing async",id:"scheduling-inline-and-executing-async",level:4},{value:"Hudi Compactor Utility",id:"hudi-compactor-utility",level:4},{value:"Hudi CLI",id:"hudi-cli",level:4},{value:"Flink Offline Compaction",id:"flink-offline-compaction",level:4},{value:"Options",id:"options",level:4}];function d(e){const i={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"background",children:"Background"}),"\n",(0,n.jsx)(i.p,{children:"Compaction is a table service employed by Hudi specifically in Merge On Read(MOR) tables to merge updates from row-based log\nfiles to the corresponding columnar-based base file periodically to produce a new version of the base file. Compaction is\nnot applicable to Copy On Write(COW) tables and only applies to MOR tables."}),"\n",(0,n.jsx)(i.h3,{id:"why-mor-tables-need-compaction",children:"Why MOR tables need compaction?"}),"\n",(0,n.jsxs)(i.p,{children:["To understand the significance of compaction in MOR tables, it is helpful to understand the MOR table layout first. In Hudi,\ndata is organized in terms of ",(0,n.jsx)(i.a,{href:"https://hudi.apache.org/docs/file_layouts/",children:"file groups"}),". Each file group in a MOR table\nconsists of a base file and one or more log files. Typically, during writes, inserts are stored in the base file, and updates\nare appended to log files."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{alt:"mor_table_file_layout",src:t(67587).A+"",width:"6528",height:"2450"}),"\n",(0,n.jsx)(i.em,{children:"Figure: MOR  table file layout showing different file groups with base data file and log files"})]}),"\n",(0,n.jsx)(i.p,{children:"During the compaction process, updates from the log files are merged with the base file to form a new version of the\nbase file as shown below. Since MOR is designed to be write-optimized, on new writes, after index tagging is complete,\nHudi appends the records pertaining to each file groups as log blocks in log files. There is no synchronous merge\nhappening during write, resulting in a lower write amplification and better write latency. In contrast, on new writes to a\nCOW table, Hudi combines the new writes with the older base file to produce a new version of the base file resulting in\na higher write amplification and higher write latencies."}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{alt:"mor_table_file_layout",src:t(56040).A+"",width:"5081",height:"3148"}),"\n",(0,n.jsx)(i.em,{children:"Figure: Compaction on a given file group"})]}),"\n",(0,n.jsx)(i.p,{children:"While serving the read query(snapshot read), for each file group, records in base file and all its corresponding log\nfiles are merged together and served. And hence the read latency for MOR snapshot query might be higher compared to\nCOW table since there is no merge involved in case of COW at read time. Compaction takes care of merging the updates from\nlog files with the base file at regular intervals to bound the growth of log files and to ensure the read latencies do not\nspike up."}),"\n",(0,n.jsx)(i.h2,{id:"compaction-architecture",children:"Compaction Architecture"}),"\n",(0,n.jsx)(i.p,{children:"There are two steps to compaction."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:(0,n.jsx)(i.strong,{children:"Compaction Scheduling"})}),": In this step, Hudi scans the partitions and selects file slices to be compacted. A compaction\nplan is finally written to Hudi timeline."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:(0,n.jsx)(i.strong,{children:"Compaction Execution"})}),": In this step the compaction plan is read and file slices are compacted."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"strategies-in-compaction-scheduling",children:"Strategies in Compaction Scheduling"}),"\n",(0,n.jsx)(i.p,{children:"There are two strategies involved in scheduling the compaction:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Trigger Strategy: Determines how often to trigger scheduling of the compaction."}),"\n",(0,n.jsx)(i.li,{children:"Compaction Strategy: Determines which file groups to compact."}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Hudi provides various options for both these strategies as discussed below."}),"\n",(0,n.jsx)(i.h4,{id:"trigger-strategies",children:"Trigger Strategies"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Config Name"}),(0,n.jsx)(i.th,{children:"Default"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"hoodie.compact.inline.trigger.strategy"}),(0,n.jsx)(i.td,{children:"NUM_COMMITS (Optional)"}),(0,n.jsxs)(i.td,{children:["org.apache.hudi.table.action.compact.CompactionTriggerStrategy: Controls when compaction is scheduled.",(0,n.jsx)("br",{}),(0,n.jsx)(i.code,{children:"Config Param: INLINE_COMPACT_TRIGGER_STRATEGY"})]})]})})]}),"\n",(0,n.jsxs)(i.p,{children:["Possible values:",(0,n.jsx)("br",{}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)(i.code,{children:"NUM_COMMITS"}),": triggers compaction when there are at least N delta commits after last completed compaction."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(i.code,{children:"NUM_COMMITS_AFTER_LAST_REQUEST"}),": triggers compaction when there are at least N delta commits after last completed or requested compaction."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(i.code,{children:"TIME_ELAPSED"}),": triggers compaction after N seconds since last compaction."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(i.code,{children:"NUM_AND_TIME"}),": triggers compaction when both there are at least N delta commits and N seconds elapsed (both must be satisfied) after last completed compaction."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(i.code,{children:"NUM_OR_TIME"}),": triggers compaction when both there are at least N delta commits or N seconds elapsed (either condition is satisfied) after last completed compaction."]})]})]}),"\n",(0,n.jsx)(i.h4,{id:"compaction-strategies",children:"Compaction Strategies"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Config Name"}),(0,n.jsx)(i.th,{children:"Default"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"hoodie.compaction.strategy"}),(0,n.jsx)(i.td,{children:"org.apache.hudi.table.action.compact.strategy.LogFileSizeBasedCompactionStrategy (Optional)"}),(0,n.jsxs)(i.td,{children:["Compaction strategy decides which file groups are picked up for compaction during each compaction run. By default. Hudi picks the log file with most accumulated unmerged data. ",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(i.code,{children:"Config Param: COMPACTION_STRATEGY"})]})]})})]}),"\n",(0,n.jsxs)(i.p,{children:["Available Strategies (Provide the full package name when using the strategy): ",(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)(i.code,{children:"LogFileNumBasedCompactionStrategy"}),":\norders the compactions based on the total log files count, filters the file group with log files count greater than the\nthreshold and limits the compactions within a configured IO bound."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(i.code,{children:"LogFileSizeBasedCompactionStrategy"}),": orders\nthe compactions based on the total log files size, filters the file group which log files size is greater than the\nthreshold and limits the compactions within a configured IO bound."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(i.code,{children:"BoundedIOCompactionStrategy"}),": CompactionStrategy\nwhich looks at total IO to be done for the compaction (read + write) and limits the list of compactions to be under a\nconfigured limit on the IO."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(i.code,{children:"BoundedPartitionAwareCompactionStrategy"}),":This"," strategy ensures that the last N partitions\nare picked up even if there are later partitions created for the table. lastNPartitions is defined as the N partitions before\nthe currentDate. currentDay = 2018/01/01 The table has partitions for 2018/02/02 and 2018/03/03 beyond the currentDay This\nstrategy will pick up the following partitions for compaction : (2018/01/01, allPartitionsInRange[(2018/01/01 - lastNPartitions)\nto 2018/01/01), 2018/02/02, 2018/03/03)"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(i.code,{children:"DayBasedCompactionStrategy"}),":This"," strategy orders compactions in reverse\norder of creation of Hive Partitions. It helps to compact data in latest partitions first and then older capped at the\nTotal_IO allowed."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(i.code,{children:"UnBoundedCompactionStrategy"}),": UnBoundedCompactionStrategy will not change ordering or filter\nany compaction. It is a pass-through and will compact all the base files which has a log file. This usually means\nno-intelligence on compaction."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(i.code,{children:"UnBoundedPartitionAwareCompactionStrategy"}),":UnBoundedPartitionAwareCompactionStrategy"," is a custom UnBounded Strategy. This will filter all the partitions that\nare eligible to be compacted by a {@link BoundedPartitionAwareCompactionStrategy} and return the result. This is done\nso that a long running UnBoundedPartitionAwareCompactionStrategy does not step over partitions in a shorter running\nBoundedPartitionAwareCompactionStrategy. Essentially, this is an inverse of the partitions chosen in\nBoundedPartitionAwareCompactionStrategy"]})]})]}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsxs)(i.p,{children:["Please refer to ",(0,n.jsx)(i.a,{href:"https://hudi.apache.org/docs/next/configurations#Compaction-Configs",children:"advanced configs"})," for more details."]})}),"\n",(0,n.jsx)(i.h2,{id:"ways-to-trigger-compaction",children:"Ways to trigger Compaction"}),"\n",(0,n.jsx)(i.h3,{id:"inline",children:"Inline"}),"\n",(0,n.jsx)(i.p,{children:"By default, compaction is run asynchronously."}),"\n",(0,n.jsx)(i.p,{children:"If latency of ingesting records is important for you, you are most likely using Merge-On-Read tables.\nMerge-On-Read tables store data using a combination of columnar (e.g parquet) + row based (e.g avro) file formats.\nUpdates are logged to delta files & later compacted to produce new versions of columnar files.\nTo improve ingestion latency, Async Compaction is the default configuration."}),"\n",(0,n.jsx)(i.p,{children:"If immediate read performance of a new commit is important for you, or you want simplicity of not managing separate compaction jobs,\nyou may want synchronous inline compaction, which means that as a commit is written it is also compacted by the same job."}),"\n",(0,n.jsxs)(i.p,{children:["For this deployment mode, please use ",(0,n.jsx)(i.code,{children:"hoodie.compact.inline = true"})," for Spark Datasource and Spark SQL writers. For\nHoodieStreamer sync once mode inline compaction can be achieved by passing the flag ",(0,n.jsx)(i.code,{children:"--disable-compaction"})," (Meaning to\ndisable async compaction). Further in HoodieStreamer when both\ningestion and compaction is running in the same spark context, you can use resource allocation configuration\nin Hudi Streamer CLI such as (",(0,n.jsx)(i.code,{children:"--delta-sync-scheduling-weight"}),",\n",(0,n.jsx)(i.code,{children:"--compact-scheduling-weight"}),", ",(0,n.jsx)(i.code,{children:"--delta-sync-scheduling-minshare"}),", and ",(0,n.jsx)(i.code,{children:"--compact-scheduling-minshare"}),")\nto control executor allocation between ingestion and compaction."]}),"\n",(0,n.jsx)(i.h3,{id:"async--offline-compaction-models",children:"Async & Offline Compaction models"}),"\n",(0,n.jsx)(i.p,{children:"There are a couple of ways here to trigger compaction ."}),"\n",(0,n.jsx)(i.h4,{id:"async-execution-within-the-same-process",children:"Async execution within the same process"}),"\n",(0,n.jsx)(i.p,{children:"In streaming ingestion write models like HoodieStreamer\ncontinuous mode, Flink and Spark Streaming, async compaction is enabled by default and runs alongside without blocking\nregular ingestion."}),"\n",(0,n.jsx)(i.h5,{id:"spark-structured-streaming",children:"Spark Structured Streaming"}),"\n",(0,n.jsx)(i.p,{children:"Compactions are scheduled and executed asynchronously inside the\nstreaming job.Here is an example snippet in java"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-properties",children:'import org.apache.hudi.DataSourceWriteOptions;\nimport org.apache.hudi.HoodieDataSourceHelpers;\nimport org.apache.hudi.config.HoodieCompactionConfig;\nimport org.apache.hudi.config.HoodieWriteConfig;\n\nimport org.apache.spark.sql.streaming.OutputMode;\nimport org.apache.spark.sql.streaming.ProcessingTime;\n\n\n DataStreamWriter<Row> writer = streamingInput.writeStream().format("org.apache.hudi")\n        .option(DataSourceWriteOptions.OPERATION_OPT_KEY(), operationType)\n        .option(DataSourceWriteOptions.TABLE_TYPE_OPT_KEY(), tableType)\n        .option(DataSourceWriteOptions.RECORDKEY_FIELD_OPT_KEY(), "_row_key")\n        .option(DataSourceWriteOptions.PARTITIONPATH_FIELD_OPT_KEY(), "partition")\n        .option(DataSourceWriteOptions.PRECOMBINE_FIELD_OPT_KEY(), "timestamp")\n        .option(HoodieCompactionConfig.INLINE_COMPACT_NUM_DELTA_COMMITS_PROP, "10")\n        .option(DataSourceWriteOptions.ASYNC_COMPACT_ENABLE_OPT_KEY(), "true")\n        .option(HoodieWriteConfig.TABLE_NAME, tableName).option("checkpointLocation", checkpointLocation)\n        .outputMode(OutputMode.Append());\n writer.trigger(new ProcessingTime(30000)).start(tablePath);\n'})}),"\n",(0,n.jsx)(i.h5,{id:"hudi-streamer-continuous-mode",children:"Hudi Streamer Continuous Mode"}),"\n",(0,n.jsxs)(i.p,{children:["Hudi Streamer provides continuous ingestion mode where a single long running spark application",(0,n.jsx)(i.br,{}),"\n","ingests data to Hudi table continuously from upstream sources. In this mode, Hudi supports managing asynchronous\ncompactions. Here is an example snippet for running in continuous mode with async compactions"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-properties",children:"spark-submit --packages org.apache.hudi:hudi-utilities-bundle_2.11:0.6.0 \\\n--class org.apache.hudi.utilities.streamer.HoodieStreamer \\\n--table-type MERGE_ON_READ \\\n--target-base-path <hudi_base_path> \\\n--target-table <hudi_table> \\\n--source-class org.apache.hudi.utilities.sources.JsonDFSSource \\\n--source-ordering-field ts \\\n--props /path/to/source.properties \\\n--continous\n"})}),"\n",(0,n.jsx)(i.h4,{id:"scheduling-and-execution-by-a-separate-process",children:"Scheduling and Execution by a separate process"}),"\n",(0,n.jsxs)(i.p,{children:["For some use cases with long running table services, instead of having the regular writes block, users have the option to run\nboth steps of the compaction (",(0,n.jsx)(i.a,{href:"#compaction-architecture",children:"scheduling and execution"}),") offline in a separate process altogether.\nThis allows for regular writers to not bother about these compaction steps and allows users to provide more resources for\nthe compaction job as needed."]}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsx)(i.p,{children:"This model needs a lock provider configured for all jobs - the regular writer as well as the offline compaction job."})}),"\n",(0,n.jsx)(i.h4,{id:"scheduling-inline-and-executing-async",children:"Scheduling inline and executing async"}),"\n",(0,n.jsx)(i.p,{children:"In this model, it is possible for a Spark Datasource writer or a Flink job to just schedule the compaction inline ( that\nwill serialize the compaction plan in the timeline but will not execute it). And then a separate utility like\nHudiCompactor or HoodieFlinkCompactor can take care of periodically executing the compaction plan."}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsxs)(i.p,{children:["This model may need a lock provider ",(0,n.jsx)(i.strong,{children:"if"})," metadata table is enabled."]})}),"\n",(0,n.jsx)(i.h4,{id:"hudi-compactor-utility",children:"Hudi Compactor Utility"}),"\n",(0,n.jsxs)(i.p,{children:["Hudi provides a standalone tool to execute specific compactions asynchronously. Below is an example and you can read more in the ",(0,n.jsx)(i.a,{href:"/docs/cli#compactions",children:"deployment guide"}),"\nThe compactor utility allows to do scheduling and execution of compaction."]}),"\n",(0,n.jsx)(i.p,{children:"Example:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-properties",children:"spark-submit --packages org.apache.hudi:hudi-utilities-bundle_2.11:0.6.0 \\\n--class org.apache.hudi.utilities.HoodieCompactor \\\n--base-path <base_path> \\\n--table-name <table_name> \\\n--schema-file <schema_file> \\\n--instant-time <compaction_instant>\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Note, the ",(0,n.jsx)(i.code,{children:"instant-time"})," parameter is now optional for the Hudi Compactor Utility. If using the utility without ",(0,n.jsx)(i.code,{children:"--instant time"}),",\nthe spark-submit will execute the earliest scheduled compaction on the Hudi timeline."]}),"\n",(0,n.jsx)(i.h4,{id:"hudi-cli",children:"Hudi CLI"}),"\n",(0,n.jsxs)(i.p,{children:["Hudi CLI is yet another way to execute specific compactions asynchronously. Here is an example and you can read more in the ",(0,n.jsx)(i.a,{href:"/docs/cli#compactions",children:"deployment guide"})]}),"\n",(0,n.jsx)(i.p,{children:"Example:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-properties",children:"hudi:trips->compaction run --tableName <table_name> --parallelism <parallelism> --compactionInstant <InstantTime>\n...\n"})}),"\n",(0,n.jsx)(i.h4,{id:"flink-offline-compaction",children:"Flink Offline Compaction"}),"\n",(0,n.jsxs)(i.p,{children:["Offline compaction needs to submit the Flink task on the command line. The program entry is as follows: ",(0,n.jsx)(i.code,{children:"hudi-flink-bundle_2.11-0.9.0-SNAPSHOT.jar"})," :\n",(0,n.jsx)(i.code,{children:"org.apache.hudi.sink.compact.HoodieFlinkCompactor"})]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"# Command line\n./bin/flink run -c org.apache.hudi.sink.compact.HoodieFlinkCompactor lib/hudi-flink-bundle_2.11-0.9.0.jar --path hdfs://xxx:9000/table\n"})}),"\n",(0,n.jsx)(i.h4,{id:"options",children:"Options"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Option Name"}),(0,n.jsx)(i.th,{children:"Default"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"--path"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"n/a **(Required)**"})}),(0,n.jsx)(i.td,{children:"The path where the target table is stored on Hudi"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"--compaction-max-memory"})}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.code,{children:"100"})," (Optional)"]}),(0,n.jsx)(i.td,{children:"The index map size of log data during compaction, 100 MB by default. If you have enough memory, you can turn up this parameter"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"--schedule"})}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.code,{children:"false"})," (Optional)"]}),(0,n.jsx)(i.td,{children:"whether to execute the operation of scheduling compaction plan. When the write process is still writing\uff0c turning on this parameter have a risk of losing data. Therefore, it must be ensured that there are no write tasks currently writing data to this table when this parameter is turned on"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"--seq"})}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.code,{children:"LIFO"}),"  (Optional)"]}),(0,n.jsxs)(i.td,{children:["The order in which compaction tasks are executed. Executing from the latest compaction plan by default. ",(0,n.jsx)(i.code,{children:"LIFO"}),": executing from the latest plan. ",(0,n.jsx)(i.code,{children:"FIFO"}),": executing from the oldest plan."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"--service"})}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.code,{children:"false"}),"  (Optional)"]}),(0,n.jsx)(i.td,{children:"Whether to start a monitoring service that checks and schedules new compaction task in configured interval."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"--min-compaction-interval-seconds"})}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.code,{children:"600(s)"})," (optional)"]}),(0,n.jsx)(i.td,{children:"The checking interval for service mode, by default 10 minutes."})]})]})]})]})}function h(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},67587:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/hudi_mor_file_layout-643f9f7fda5aa0d532682af27fe3e42c.jpg"},56040:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/hudi_mor_file_layout_post_compaction-9f10af785d4927dc3d66303dac5bc7ba.jpg"},28453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>r});var n=t(96540);const o={},a=n.createContext(o);function s(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);
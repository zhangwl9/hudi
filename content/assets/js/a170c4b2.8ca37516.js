"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[20405],{29819:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var t=i(74848),o=i(28453);const a={title:"Compaction",summary:"In this page, we describe async compaction in Hudi.",toc:!0,last_modified_at:null},s=void 0,c={id:"compaction",title:"Compaction",description:"Async Compaction",source:"@site/versioned_docs/version-0.12.3/compaction.md",sourceDirName:".",slug:"/compaction",permalink:"/docs/0.12.3/compaction",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.3/compaction.md",tags:[],version:"0.12.3",frontMatter:{title:"Compaction",summary:"In this page, we describe async compaction in Hudi.",toc:!0,last_modified_at:null},sidebar:"docs",previous:{title:"Bootstrapping",permalink:"/docs/0.12.3/migration_guide"},next:{title:"Clustering",permalink:"/docs/0.12.3/clustering"}},r={},d=[{value:"Async Compaction",id:"async-compaction",level:2},{value:"Spark Structured Streaming",id:"spark-structured-streaming",level:3},{value:"DeltaStreamer Continuous Mode",id:"deltastreamer-continuous-mode",level:3},{value:"Synchronous Compaction",id:"synchronous-compaction",level:2},{value:"Offline Compaction",id:"offline-compaction",level:2},{value:"Hudi Compactor Utility",id:"hudi-compactor-utility",level:3},{value:"Hudi CLI",id:"hudi-cli",level:3},{value:"Flink Offline Compaction",id:"flink-offline-compaction",level:3},{value:"Options",id:"options",level:4}];function l(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"async-compaction",children:"Async Compaction"}),"\n",(0,t.jsx)(n.p,{children:"Compaction is executed asynchronously with Hudi by default. Async Compaction is performed in 2 steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Compaction Scheduling"})}),": This is done by the ingestion job. In this step, Hudi scans the partitions and selects ",(0,t.jsx)(n.strong,{children:"file\nslices"})," to be compacted. A compaction plan is finally written to Hudi timeline."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Compaction Execution"})}),": In this step the compaction plan is read and file slices are compacted."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"There are few ways by which we can execute compactions asynchronously."}),"\n",(0,t.jsx)(n.h3,{id:"spark-structured-streaming",children:"Spark Structured Streaming"}),"\n",(0,t.jsx)(n.p,{children:"Compactions are scheduled and executed asynchronously inside the\nstreaming job.  Async Compactions are enabled by default for structured streaming jobs\non Merge-On-Read table."}),"\n",(0,t.jsx)(n.p,{children:"Here is an example snippet in java"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-properties",children:'import org.apache.hudi.DataSourceWriteOptions;\nimport org.apache.hudi.HoodieDataSourceHelpers;\nimport org.apache.hudi.config.HoodieCompactionConfig;\nimport org.apache.hudi.config.HoodieWriteConfig;\n\nimport org.apache.spark.sql.streaming.OutputMode;\nimport org.apache.spark.sql.streaming.ProcessingTime;\n\n\n DataStreamWriter<Row> writer = streamingInput.writeStream().format("org.apache.hudi")\n        .option(DataSourceWriteOptions.OPERATION_OPT_KEY(), operationType)\n        .option(DataSourceWriteOptions.TABLE_TYPE_OPT_KEY(), tableType)\n        .option(DataSourceWriteOptions.RECORDKEY_FIELD_OPT_KEY(), "_row_key")\n        .option(DataSourceWriteOptions.PARTITIONPATH_FIELD_OPT_KEY(), "partition")\n        .option(DataSourceWriteOptions.PRECOMBINE_FIELD_OPT_KEY(), "timestamp")\n        .option(HoodieCompactionConfig.INLINE_COMPACT_NUM_DELTA_COMMITS_PROP, "10")\n        .option(DataSourceWriteOptions.ASYNC_COMPACT_ENABLE_OPT_KEY(), "true")\n        .option(HoodieWriteConfig.TABLE_NAME, tableName).option("checkpointLocation", checkpointLocation)\n        .outputMode(OutputMode.Append());\n writer.trigger(new ProcessingTime(30000)).start(tablePath);\n'})}),"\n",(0,t.jsx)(n.h3,{id:"deltastreamer-continuous-mode",children:"DeltaStreamer Continuous Mode"}),"\n",(0,t.jsxs)(n.p,{children:["Hudi DeltaStreamer provides continuous ingestion mode where a single long running spark application",(0,t.jsx)(n.br,{}),"\n","ingests data to Hudi table continuously from upstream sources. In this mode, Hudi supports managing asynchronous\ncompactions. Here is an example snippet for running in continuous mode with async compactions"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-properties",children:"spark-submit --packages org.apache.hudi:hudi-utilities-bundle_2.11:0.6.0 \\\n--class org.apache.hudi.utilities.deltastreamer.HoodieDeltaStreamer \\\n--table-type MERGE_ON_READ \\\n--target-base-path <hudi_base_path> \\\n--target-table <hudi_table> \\\n--source-class org.apache.hudi.utilities.sources.JsonDFSSource \\\n--source-ordering-field ts \\\n--schemaprovider-class org.apache.hudi.utilities.schema.FilebasedSchemaProvider \\\n--props /path/to/source.properties \\\n--continous\n"})}),"\n",(0,t.jsx)(n.h2,{id:"synchronous-compaction",children:"Synchronous Compaction"}),"\n",(0,t.jsx)(n.p,{children:"By default, compaction is run asynchronously."}),"\n",(0,t.jsx)(n.p,{children:"If latency of ingesting records is important for you, you are most likely using Merge-On-Read tables.\nMerge-On-Read tables store data using a combination of columnar (e.g parquet) + row based (e.g avro) file formats.\nUpdates are logged to delta files & later compacted to produce new versions of columnar files.\nTo improve ingestion latency, Async Compaction is the default configuration."}),"\n",(0,t.jsx)(n.p,{children:"If immediate read performance of a new commit is important for you, or you want simplicity of not managing separate compaction jobs,\nyou may want Synchronous compaction, which means that as a commit is written it is also compacted by the same job."}),"\n",(0,t.jsx)(n.p,{children:'Compaction is run synchronously by passing the flag "--disable-compaction" (Meaning to disable async compaction scheduling).\nWhen both ingestion and compaction is running in the same spark context, you can use resource allocation configuration\nin DeltaStreamer CLI such as ("--delta-sync-scheduling-weight",\n"--compact-scheduling-weight", ""--delta-sync-scheduling-minshare", and "--compact-scheduling-minshare")\nto control executor allocation between ingestion and compaction.'}),"\n",(0,t.jsx)(n.h2,{id:"offline-compaction",children:"Offline Compaction"}),"\n",(0,t.jsx)(n.p,{children:"The compaction of the MERGE_ON_READ table is enabled by default. The trigger strategy is to perform compaction after completing\nfive commits. Because compaction consumes a lot of memory and is placed in the same pipeline with the write operation, it's easy to\ninterfere with the write operation when there is a large amount of data (> 100000 per second). As this time, it is more stable to execute\nthe compaction task by using offline compaction."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The execution of a compaction task includes two parts: schedule compaction plan and execute compaction plan. It's recommended that\nthe process of schedule compaction plan be triggered periodically by the write task, and the write parameter ",(0,t.jsx)(n.code,{children:"compaction.schedule.enable"}),"\nis enabled by default."]})}),"\n",(0,t.jsx)(n.h3,{id:"hudi-compactor-utility",children:"Hudi Compactor Utility"}),"\n",(0,t.jsxs)(n.p,{children:["Hudi provides a standalone tool to execute specific compactions asynchronously. Below is an example and you can read more in the ",(0,t.jsx)(n.a,{href:"/docs/deployment#compactions",children:"deployment guide"})]}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-properties",children:"spark-submit --packages org.apache.hudi:hudi-utilities-bundle_2.11:0.6.0 \\\n--class org.apache.hudi.utilities.HoodieCompactor \\\n--base-path <base_path> \\\n--table-name <table_name> \\\n--schema-file <schema_file> \\\n--instant-time <compaction_instant>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Note, the ",(0,t.jsx)(n.code,{children:"instant-time"})," parameter is now optional for the Hudi Compactor Utility. If using the utility without ",(0,t.jsx)(n.code,{children:"--instant time"}),",\nthe spark-submit will execute the earliest scheduled compaction on the Hudi timeline."]}),"\n",(0,t.jsx)(n.h3,{id:"hudi-cli",children:"Hudi CLI"}),"\n",(0,t.jsxs)(n.p,{children:["Hudi CLI is yet another way to execute specific compactions asynchronously. Here is an example and you can read more in the ",(0,t.jsx)(n.a,{href:"/docs/cli#compactions",children:"deployment guide"})]}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-properties",children:"hudi:trips->compaction run --tableName <table_name> --parallelism <parallelism> --compactionInstant <InstantTime>\n...\n"})}),"\n",(0,t.jsx)(n.h3,{id:"flink-offline-compaction",children:"Flink Offline Compaction"}),"\n",(0,t.jsxs)(n.p,{children:["Offline compaction needs to submit the Flink task on the command line. The program entry is as follows: ",(0,t.jsx)(n.code,{children:"hudi-flink-bundle_2.11-0.9.0-SNAPSHOT.jar"})," :\n",(0,t.jsx)(n.code,{children:"org.apache.hudi.sink.compact.HoodieFlinkCompactor"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Command line\n./bin/flink run -c org.apache.hudi.sink.compact.HoodieFlinkCompactor lib/hudi-flink-bundle_2.11-0.9.0.jar --path hdfs://xxx:9000/table\n"})}),"\n",(0,t.jsx)(n.h4,{id:"options",children:"Options"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Option Name"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Default"}),(0,t.jsx)(n.th,{children:"Remarks"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"--path"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"true"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"--"})}),(0,t.jsx)(n.td,{children:"The path where the target table is stored on Hudi"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"--compaction-max-memory"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"100"})}),(0,t.jsx)(n.td,{children:"The index map size of log data during compaction, 100 MB by default. If you have enough memory, you can turn up this parameter"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"--schedule"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:"whether to execute the operation of scheduling compaction plan. When the write process is still writing\uff0c turning on this parameter have a risk of losing data. Therefore, it must be ensured that there are no write tasks currently writing data to this table when this parameter is turned on"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"--seq"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"LIFO"})}),(0,t.jsxs)(n.td,{children:["The order in which compaction tasks are executed. Executing from the latest compaction plan by default. ",(0,t.jsx)(n.code,{children:"LIFO"}),": executing from the latest plan. ",(0,t.jsx)(n.code,{children:"FIFO"}),": executing from the oldest plan."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"--service"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:"Whether to start a monitoring service that checks and schedules new compaction task in configured interval."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"--min-compaction-interval-seconds"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"600(s)"})}),(0,t.jsx)(n.td,{children:"The checking interval for service mode, by default 10 minutes."})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>c});var t=i(96540);const o={},a=t.createContext(o);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);
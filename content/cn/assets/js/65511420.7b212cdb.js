"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[32875],{28866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(74848),s=n(28453);const r={title:"Asynchronous Clustering using Hudi",excerpt:"How to setup Hudi for asynchronous clustering",author:"codope",category:"blog",image:"/assets/images/blog/clustering/example_perf_improvement.png",tags:["design","clustering","apache hudi"]},a=void 0,o={permalink:"/cn/blog/2021/08/23/async-clustering",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-08-23-async-clustering.md",source:"@site/blog/2021-08-23-async-clustering.md",title:"Asynchronous Clustering using Hudi",description:"In one of the previous blog posts, we introduced a new",date:"2021-08-23T00:00:00.000Z",tags:[{inline:!0,label:"design",permalink:"/cn/blog/tags/design"},{inline:!0,label:"clustering",permalink:"/cn/blog/tags/clustering"},{inline:!0,label:"apache hudi",permalink:"/cn/blog/tags/apache-hudi"}],readingTime:6.055,hasTruncateMarker:!0,authors:[{name:"codope",key:null,page:null}],frontMatter:{title:"Asynchronous Clustering using Hudi",excerpt:"How to setup Hudi for asynchronous clustering",author:"codope",category:"blog",image:"/assets/images/blog/clustering/example_perf_improvement.png",tags:["design","clustering","apache hudi"]},unlisted:!1,prevItem:{title:"Building an ExaByte-level Data Lake Using Apache Hudi at ByteDance",permalink:"/cn/blog/2021/09/01/building-eb-level-data-lake-using-hudi-at-bytedance"},nextItem:{title:"Reliable ingestion from AWS S3 using Hudi",permalink:"/cn/blog/2021/08/23/s3-events-source"}},l={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Clustering Strategies",id:"clustering-strategies",level:2},{value:"Plan Strategy",id:"plan-strategy",level:3},{value:"Execution Strategy",id:"execution-strategy",level:3},{value:"Update Strategy",id:"update-strategy",level:3},{value:"Asynchronous Clustering",id:"asynchronous-clustering",level:2},{value:"HoodieClusteringJob",id:"hoodieclusteringjob",level:3},{value:"HoodieDeltaStreamer",id:"hoodiedeltastreamer",level:3},{value:"Spark Structured Streaming",id:"spark-structured-streaming",level:3},{value:"Conclusion and Future Work",id:"conclusion-and-future-work",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["In one of the ",(0,i.jsx)(t.a,{href:"/blog/2021/01/27/hudi-clustering-intro",children:"previous blog"})," posts, we introduced a new\nkind of table service called clustering to reorganize data for improved query performance without compromising on\ningestion speed. We learnt how to setup inline clustering. In this post, we will discuss what has changed since then and\nsee how asynchronous clustering can be setup using HoodieClusteringJob as well as DeltaStreamer utility."]}),"\n",(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(t.p,{children:["On a high level, clustering creates a plan based on a configurable strategy, groups eligible files based on specific\ncriteria and then executes the plan. Hudi supports ",(0,i.jsx)(t.a,{href:"https://hudi.apache.org/docs/concurrency_control#enabling-multi-writing",children:"multi-writers"})," which provides\nsnapshot isolation between multiple table services, thus allowing writers to continue with ingestion while clustering\nruns in the background. For a more detailed overview of the clustering architecture please check out the previous blog\npost."]}),"\n",(0,i.jsx)(t.h2,{id:"clustering-strategies",children:"Clustering Strategies"}),"\n",(0,i.jsx)(t.p,{children:"As mentioned before, clustering plan as well as execution depends on configurable strategy. These strategies can be\nbroadly classified into three types: clustering plan strategy, execution strategy and update strategy."}),"\n",(0,i.jsx)(t.h3,{id:"plan-strategy",children:"Plan Strategy"}),"\n",(0,i.jsxs)(t.p,{children:["This strategy comes into play while creating clustering plan. It helps to decide what file groups should be clustered.\nLet's look at different plan strategies that are available with Hudi. Note that these strategies are easily pluggable\nusing this ",(0,i.jsx)(t.a,{href:"/docs/next/configurations#hoodieclusteringplanstrategyclass",children:"config"}),"."]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"SparkSizeBasedClusteringPlanStrategy"}),": It selects file slices based on\nthe ",(0,i.jsx)(t.a,{href:"/docs/next/configurations/#hoodieclusteringplanstrategysmallfilelimit",children:"small file limit"}),"\nof base files and creates clustering groups upto max file size allowed per group. The max size can be specified using\nthis ",(0,i.jsx)(t.a,{href:"/docs/next/configurations/#hoodieclusteringplanstrategymaxbytespergroup",children:"config"}),". This\nstrategy is useful for stitching together medium-sized files into larger ones to reduce lot of files spread across\ncold partitions."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"SparkRecentDaysClusteringPlanStrategy"}),": It looks back previous 'N' days partitions and creates a plan that will\ncluster the 'small' file slices within those partitions. This is the default strategy. It could be useful when the\nworkload is predictable and data is partitioned by time."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"SparkSelectedPartitionsClusteringPlanStrategy"}),": In case you want to cluster only specific partitions within a range,\nno matter how old or new are those partitions, then this strategy could be useful. To use this strategy, one needs\nto set below two configs additionally (both begin and end partitions are inclusive):"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"hoodie.clustering.plan.strategy.cluster.begin.partition\nhoodie.clustering.plan.strategy.cluster.end.partition\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"All the strategies are partition-aware and the latter two are still bound by the size limits of the first strategy."})}),"\n",(0,i.jsx)(t.h3,{id:"execution-strategy",children:"Execution Strategy"}),"\n",(0,i.jsxs)(t.p,{children:["After building the clustering groups in the planning phase, Hudi applies execution strategy, for each group, primarily\nbased on sort columns and size. The strategy can be specified using this ",(0,i.jsx)(t.a,{href:"/docs/next/configurations/#hoodieclusteringexecutionstrategyclass",children:"config"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"SparkSortAndSizeExecutionStrategy"})," is the default strategy. Users can specify the columns to sort the data by, when\nclustering using\nthis ",(0,i.jsx)(t.a,{href:"/docs/next/configurations/#hoodieclusteringplanstrategysortcolumns",children:"config"}),". Apart from\nthat, we can also set ",(0,i.jsx)(t.a,{href:"/docs/next/configurations/#hoodieparquetmaxfilesize",children:"max file size"}),"\nfor the parquet files produced due to clustering. The strategy uses bulk insert to write data into new files, in which\ncase, Hudi implicitly uses a partitioner that does sorting based on specified columns. In this way, the strategy changes\nthe data layout in a way that not only improves query performance but also balance rewrite overhead automatically."]}),"\n",(0,i.jsxs)(t.p,{children:["Now this strategy can be executed either as a single spark job or multiple jobs depending on number of clustering groups\ncreated in the planning phase. By default, Hudi will submit multiple spark jobs and union the results. In case you want\nto force Hudi to use single spark job, set the execution strategy\nclass ",(0,i.jsx)(t.a,{href:"/docs/next/configurations/#hoodieclusteringexecutionstrategyclass",children:"config"}),"\nto ",(0,i.jsx)(t.code,{children:"SingleSparkJobExecutionStrategy"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"update-strategy",children:"Update Strategy"}),"\n",(0,i.jsxs)(t.p,{children:["Currently, clustering can only be scheduled for tables/partitions not receiving any concurrent updates. By default,\nthe ",(0,i.jsx)(t.a,{href:"/docs/next/configurations/#hoodieclusteringupdatesstrategy",children:"config for update strategy"})," is\nset to ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"SparkRejectUpdateStrategy"})}),". If some file group has updates during clustering then it will reject updates and\nthrow an exception. However, in some use-cases updates are very sparse and do not touch most file groups. The default\nstrategy to simply reject updates does not seem fair. In such use-cases, users can set the config to ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"SparkAllowUpdateStrategy"})}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["We discussed the critical strategy configurations. All other configurations related to clustering are\nlisted ",(0,i.jsx)(t.a,{href:"/docs/next/configurations/#Clustering-Configs",children:"here"}),". Out of this list, a few\nconfigurations that will be very useful are:"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Config key"}),(0,i.jsx)(t.th,{children:"Remarks"}),(0,i.jsx)(t.th,{children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"hoodie.clustering.async.enabled"})}),(0,i.jsx)(t.td,{children:"Enable running of clustering service, asynchronously as writes happen on the table."}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"hoodie.clustering.async.max.commits"})}),(0,i.jsx)(t.td,{children:"Control frequency of async clustering by specifying after how many commits clustering should be triggered."}),(0,i.jsx)(t.td,{children:"4"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"hoodie.clustering.preserve.commit.metadata"})}),(0,i.jsx)(t.td,{children:"When rewriting data, preserves existing _hoodie_commit_time. This means users can run incremental queries on clustered data without any side-effects."}),(0,i.jsx)(t.td,{children:"False"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"asynchronous-clustering",children:"Asynchronous Clustering"}),"\n",(0,i.jsxs)(t.p,{children:["Previously, we have seen how users\ncan ",(0,i.jsx)(t.a,{href:"/blog/2021/01/27/hudi-clustering-intro#setting-up-clustering",children:"setup inline clustering"}),".\nAdditionally, users can\nleverage ",(0,i.jsx)(t.a,{href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+19+Clustering+data+for+freshness+and+query+performance#RFC19Clusteringdataforfreshnessandqueryperformance-SetupforAsyncclusteringJob",children:"HoodieClusteringJob"}),"\nto setup 2-step asynchronous clustering."]}),"\n",(0,i.jsx)(t.h3,{id:"hoodieclusteringjob",children:"HoodieClusteringJob"}),"\n",(0,i.jsxs)(t.p,{children:["With the release of Hudi version 0.9.0, we can schedule as well as execute clustering in the same step. We just need to\nspecify the ",(0,i.jsx)(t.code,{children:"\u2014mode"})," or ",(0,i.jsx)(t.code,{children:"-m"})," option. There are three modes:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"schedule"}),": Make a clustering plan. This gives an instant which can be passed in execute mode."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"execute"}),": Execute a clustering plan at given instant which means --instant-time is required here."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"scheduleAndExecute"}),": Make a clustering plan first and execute that plan immediately."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Note that to run this job while the original writer is still running, please enable multi-writing:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"hoodie.write.concurrency.mode=optimistic_concurrency_control\nhoodie.write.lock.provider=org.apache.hudi.client.transaction.lock.ZookeeperBasedLockProvider\n"})}),"\n",(0,i.jsx)(t.p,{children:"A sample spark-submit command to setup HoodieClusteringJob is as below:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"spark-submit \\\n--class org.apache.hudi.utilities.HoodieClusteringJob \\\n/path/to/hudi-utilities-bundle/target/hudi-utilities-bundle_2.12-0.9.0-SNAPSHOT.jar \\\n--props /path/to/config/clusteringjob.properties \\\n--mode scheduleAndExecute \\\n--base-path /path/to/hudi_table/basePath \\\n--table-name hudi_table_schedule_clustering \\\n--spark-memory 1g\n"})}),"\n",(0,i.jsxs)(t.p,{children:["A sample ",(0,i.jsx)(t.code,{children:"clusteringjob.properties"})," file:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"hoodie.clustering.async.enabled=true\nhoodie.clustering.async.max.commits=4\nhoodie.clustering.plan.strategy.target.file.max.bytes=1073741824\nhoodie.clustering.plan.strategy.small.file.limit=629145600\nhoodie.clustering.execution.strategy.class=org.apache.hudi.client.clustering.run.strategy.SparkSortAndSizeExecutionStrategy\nhoodie.clustering.plan.strategy.sort.columns=column1,column2\n"})}),"\n",(0,i.jsx)(t.h3,{id:"hoodiedeltastreamer",children:"HoodieDeltaStreamer"}),"\n",(0,i.jsxs)(t.p,{children:["This brings us to our users' favorite utility in Hudi. Now, we can trigger asynchronous clustering with DeltaStreamer.\nJust set the ",(0,i.jsx)(t.code,{children:"hoodie.clustering.async.enabled"})," config to true and specify other clustering config in properties file\nwhose location can be pased as ",(0,i.jsx)(t.code,{children:"\u2014props"})," when starting the deltastreamer (just like in the case of HoodieClusteringJob)."]}),"\n",(0,i.jsx)(t.p,{children:"A sample spark-submit command to setup HoodieDeltaStreamer is as below:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"spark-submit \\\n--class org.apache.hudi.utilities.deltastreamer.HoodieDeltaStreamer \\\n/path/to/hudi-utilities-bundle/target/hudi-utilities-bundle_2.12-0.9.0-SNAPSHOT.jar \\\n--props /path/to/config/clustering_kafka.properties \\\n--schemaprovider-class org.apache.hudi.utilities.schema.SchemaRegistryProvider \\\n--source-class org.apache.hudi.utilities.sources.AvroKafkaSource \\\n--source-ordering-field impresssiontime \\\n--table-type COPY_ON_WRITE \\\n--target-base-path /path/to/hudi_table/basePath \\\n--target-table impressions_cow_cluster \\\n--op INSERT \\\n--hoodie-conf hoodie.clustering.async.enabled=true \\\n--continuous\n"})}),"\n",(0,i.jsx)(t.h3,{id:"spark-structured-streaming",children:"Spark Structured Streaming"}),"\n",(0,i.jsx)(t.p,{children:"We can also enable asynchronous clustering with Spark structured streaming sink as shown below."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-scala",children:'val commonOpts = Map(\n   "hoodie.insert.shuffle.parallelism" -> "4",\n   "hoodie.upsert.shuffle.parallelism" -> "4",\n   DataSourceWriteOptions.RECORDKEY_FIELD.key -> "_row_key",\n   DataSourceWriteOptions.PARTITIONPATH_FIELD.key -> "partition",\n   DataSourceWriteOptions.PRECOMBINE_FIELD.key -> "timestamp",\n   HoodieWriteConfig.TBL_NAME.key -> "hoodie_test"\n)\n\ndef getAsyncClusteringOpts(isAsyncClustering: String, \n                           clusteringNumCommit: String, \n                           executionStrategy: String):Map[String, String] = {\n   commonOpts + (DataSourceWriteOptions.ASYNC_CLUSTERING_ENABLE.key -> isAsyncClustering,\n           HoodieClusteringConfig.ASYNC_CLUSTERING_MAX_COMMITS.key -> clusteringNumCommit,\n           HoodieClusteringConfig.EXECUTION_STRATEGY_CLASS_NAME.key -> executionStrategy\n   )\n}\n\ndef initStreamingWriteFuture(hudiOptions: Map[String, String]): Future[Unit] = {\n   val streamingInput = // define the source of streaming\n   Future {\n      println("streaming starting")\n      streamingInput\n              .writeStream\n              .format("org.apache.hudi")\n              .options(hudiOptions)\n              .option("checkpointLocation", basePath + "/checkpoint")\n              .mode(Append)\n              .start()\n              .awaitTermination(10000)\n      println("streaming ends")\n   }\n}\n\ndef structuredStreamingWithClustering(): Unit = {\n   val df = //generate data frame\n   val hudiOptions = getClusteringOpts("true", "1", "org.apache.hudi.client.clustering.run.strategy.SparkSortAndSizeExecutionStrategy")\n   val f1 = initStreamingWriteFuture(hudiOptions)\n   Await.result(f1, Duration.Inf)\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"conclusion-and-future-work",children:"Conclusion and Future Work"}),"\n",(0,i.jsx)(t.p,{children:"In this post, we discussed different clustering strategies and how to setup asynchronous clustering. The story is not\nover yet and future work entails:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Support clustering with updates."}),"\n",(0,i.jsx)(t.li,{children:"CLI tools to support clustering."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Please follow this ",(0,i.jsx)(t.a,{href:"https://issues.apache.org/jira/browse/HUDI-1042",children:"JIRA"})," to learn more about active development on\nthis issue. We look forward to contributions from the community. Hope you enjoyed this post. Put your Hudi on and keep\nstreaming!"]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(96540);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[32039],{55291:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var t=i(74848),a=i(28453);const r={title:"Metadata Indexing",summary:"In this page, we describe how to run metadata indexing asynchronously.",toc:!0,last_modified_at:null},o=void 0,s={id:"metadata_indexing",title:"Metadata Indexing",description:"We can now create different metadata indexes, including files, bloom filters and column stats,",source:"@site/versioned_docs/version-0.12.3/metadata_indexing.md",sourceDirName:".",slug:"/metadata_indexing",permalink:"/cn/docs/0.12.3/metadata_indexing",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.3/metadata_indexing.md",tags:[],version:"0.12.3",frontMatter:{title:"Metadata Indexing",summary:"In this page, we describe how to run metadata indexing asynchronously.",toc:!0,last_modified_at:null},sidebar:"docs",previous:{title:"Clustering",permalink:"/cn/docs/0.12.3/clustering"},next:{title:"Cleaning",permalink:"/cn/docs/0.12.3/hoodie_cleaner"}},d={},l=[{value:"Setup Async Indexing",id:"setup-async-indexing",level:2},{value:"Schedule indexing",id:"schedule-indexing",level:3},{value:"Execute Indexing",id:"execute-indexing",level:3},{value:"Drop Index",id:"drop-index",level:3},{value:"Caveats",id:"caveats",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"We can now create different metadata indexes, including files, bloom filters and column stats,\nasynchronously in Hudi, which are then used by queries and writing to improve performance.\nBeing able to index without blocking writing has two benefits,"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"improved write latency"}),"\n",(0,t.jsx)(n.li,{children:"reduced resource wastage due to contention between writing and indexing."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["To learn more about the design of this feature, please check out ",(0,t.jsx)(n.a,{href:"https://github.com/apache/hudi/blob/master/rfc/rfc-45/rfc-45.md",children:"RFC-45"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"setup-async-indexing",children:"Setup Async Indexing"}),"\n",(0,t.jsxs)(n.p,{children:["First, we will generate a continuous workload. In the below example, we are going to start a ",(0,t.jsx)(n.a,{href:"/docs/0.12.3/hoodie_deltastreamer#deltastreamer",children:"deltastreamer"})," which will continuously write data\nfrom raw parquet to Hudi table. We used the widely available ",(0,t.jsx)(n.a,{href:"https://registry.opendata.aws/nyc-tlc-trip-records-pds/",children:"NY Taxi dataset"}),", whose setup details are as below:"]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Ingestion write config"}),(0,t.jsx)("p",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"hoodie.datasource.write.recordkey.field=VendorID\nhoodie.datasource.write.partitionpath.field=tpep_dropoff_datetime\nhoodie.datasource.write.precombine.field=tpep_dropoff_datetime\nhoodie.deltastreamer.source.dfs.root=/Users/home/path/to/data/parquet_files/\nhoodie.deltastreamer.schemaprovider.target.schema.file=/Users/home/path/to/schema/schema.avsc\nhoodie.deltastreamer.schemaprovider.source.schema.file=/Users/home/path/to/schema/schema.avsc\n// set lock provider configs\nhoodie.write.lock.provider=org.apache.hudi.client.transaction.lock.ZookeeperBasedLockProvider\nhoodie.write.lock.zookeeper.url=<zk_url>\nhoodie.write.lock.zookeeper.port=<zk_port>\nhoodie.write.lock.zookeeper.lock_key=<zk_key>\nhoodie.write.lock.zookeeper.base_path=<zk_base_path>\n"})})})]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Run deltastreamer"}),(0,t.jsx)("p",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"spark-submit \\\n--class org.apache.hudi.utilities.deltastreamer.HoodieDeltaStreamer `ls /Users/home/path/to/hudi-utilities-bundle/target/hudi-utilities-bundle_2.11-0.12.3-SNAPSHOT.jar` \\\n--props `ls /Users/home/path/to/write/config.properties` \\\n--source-class org.apache.hudi.utilities.sources.ParquetDFSSource  --schemaprovider-class org.apache.hudi.utilities.schema.FilebasedSchemaProvider \\\n--source-ordering-field tpep_dropoff_datetime   \\\n--table-type COPY_ON_WRITE \\\n--target-base-path file:///tmp/hudi-ny-taxi/   \\\n--target-table ny_hudi_tbl  \\\n--op UPSERT  \\\n--continuous \\\n--source-limit 5000000 \\\n--min-sync-interval-seconds 60\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"From version 0.11.0 onwards, Hudi metadata table is enabled by default and the files index will be automatically created. While the deltastreamer is running in continuous mode, let\nus schedule the indexing for COLUMN_STATS index. First we need to define a properties file for the indexer."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Enabling metadata table and configuring a lock provider are the prerequisites for using async indexer."})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"# ensure that both metadata and async indexing is enabled as below two configs\nhoodie.metadata.enable=true\nhoodie.metadata.index.async=true\n# enable column_stats index config\nhoodie.metadata.index.column.stats.enable=true\n# set concurrency mode and lock configs as this is a multi-writer scenario\n# check https://hudi.apache.org/docs/concurrency_control/ for differnt lock provider configs\nhoodie.write.concurrency.mode=optimistic_concurrency_control\nhoodie.write.lock.provider=org.apache.hudi.client.transaction.lock.ZookeeperBasedLockProvider\nhoodie.write.lock.zookeeper.url=<zk_url>\nhoodie.write.lock.zookeeper.port=<zk_port>\nhoodie.write.lock.zookeeper.lock_key=<zk_key>\nhoodie.write.lock.zookeeper.base_path=<zk_base_path>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"schedule-indexing",children:"Schedule indexing"}),"\n",(0,t.jsxs)(n.p,{children:["Now, we can schedule indexing using ",(0,t.jsx)(n.code,{children:"HoodieIndexer"})," in ",(0,t.jsx)(n.code,{children:"schedule"})," mode as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"spark-submit \\\n--class org.apache.hudi.utilities.HoodieIndexer \\\n/Users/home/path/to/hudi-utilities-bundle/target/hudi-utilities-bundle_2.11-0.12.3-SNAPSHOT.jar \\\n--props /Users/home/path/to/indexer.properties \\\n--mode schedule \\\n--base-path /tmp/hudi-ny-taxi \\\n--table-name ny_hudi_tbl \\\n--index-types COLUMN_STATS \\\n--parallelism 1 \\\n--spark-memory 1g\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This will write an ",(0,t.jsx)(n.code,{children:"indexing.requested"})," instant to the timeline."]}),"\n",(0,t.jsx)(n.h3,{id:"execute-indexing",children:"Execute Indexing"}),"\n",(0,t.jsxs)(n.p,{children:["To execute indexing, run the indexer in ",(0,t.jsx)(n.code,{children:"execute"})," mode as below."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"spark-submit \\\n--class org.apache.hudi.utilities.HoodieIndexer \\\n/Users/home/path/to/hudi-utilities-bundle/target/hudi-utilities-bundle_2.11-0.12.3-SNAPSHOT.jar \\\n--props /Users/home/path/to/indexer.properties \\\n--mode execute \\\n--base-path /tmp/hudi-ny-taxi \\\n--table-name ny_hudi_tbl \\\n--index-types COLUMN_STATS \\\n--parallelism 1 \\\n--spark-memory 1g\n"})}),"\n",(0,t.jsxs)(n.p,{children:["We can also run the indexer in ",(0,t.jsx)(n.code,{children:"scheduleAndExecute"})," mode to do the above two steps in one shot. Doing it separately gives us better control over when we want to execute."]}),"\n",(0,t.jsx)(n.p,{children:"Let's look at the data timeline."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ls -lrt /tmp/hudi-ny-taxi/.hoodie\ntotal 1816\n-rw-r--r--  1 sagars  wheel       0 Apr 14 19:53 20220414195327683.commit.requested\n-rw-r--r--  1 sagars  wheel  153423 Apr 14 19:54 20220414195327683.inflight\n-rw-r--r--  1 sagars  wheel  207061 Apr 14 19:54 20220414195327683.commit\n-rw-r--r--  1 sagars  wheel       0 Apr 14 19:54 20220414195423420.commit.requested\n-rw-r--r--  1 sagars  wheel     659 Apr 14 19:54 20220414195437837.indexing.requested\n-rw-r--r--  1 sagars  wheel  323950 Apr 14 19:54 20220414195423420.inflight\n-rw-r--r--  1 sagars  wheel       0 Apr 14 19:55 20220414195437837.indexing.inflight\n-rw-r--r--  1 sagars  wheel  222920 Apr 14 19:55 20220414195423420.commit\n-rw-r--r--  1 sagars  wheel     734 Apr 14 19:55 hoodie.properties\n-rw-r--r--  1 sagars  wheel     979 Apr 14 19:55 20220414195437837.indexing\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In the data timeline, we can see that indexing was scheduled after one commit completed (",(0,t.jsx)(n.code,{children:"20220414195327683.commit"}),") and another was requested\n(",(0,t.jsx)(n.code,{children:"20220414195423420.commit.requested"}),"). This would have picked ",(0,t.jsx)(n.code,{children:"20220414195327683"})," as the base instant. Indexing was inflight with an inflight writer as well. If we parse the\nindexer logs, we would find that it indeed caught up with instant ",(0,t.jsx)(n.code,{children:"20220414195423420"})," after indexing upto the base instant."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"22/04/14 19:55:22 INFO HoodieTableMetaClient: Finished Loading Table of type MERGE_ON_READ(version=1, baseFileFormat=HFILE) from /tmp/hudi-ny-taxi/.hoodie/metadata\n22/04/14 19:55:22 INFO RunIndexActionExecutor: Starting Index Building with base instant: 20220414195327683\n22/04/14 19:55:22 INFO HoodieBackedTableMetadataWriter: Creating a new metadata index for partition 'column_stats' under path /tmp/hudi-ny-taxi/.hoodie/metadata upto instant 20220414195327683\n...\n...\n22/04/14 19:55:38 INFO RunIndexActionExecutor: Total remaining instants to index: 1\n22/04/14 19:55:38 INFO HoodieTableMetaClient: Loading HoodieTableMetaClient from /tmp/hudi-ny-taxi/.hoodie/metadata\n22/04/14 19:55:38 INFO HoodieTableConfig: Loading table properties from /tmp/hudi-ny-taxi/.hoodie/metadata/.hoodie/hoodie.properties\n22/04/14 19:55:38 INFO HoodieTableMetaClient: Finished Loading Table of type MERGE_ON_READ(version=1, baseFileFormat=HFILE) from /tmp/hudi-ny-taxi/.hoodie/metadata\n22/04/14 19:55:38 INFO HoodieActiveTimeline: Loaded instants upto : Option{val=[20220414195423420__deltacommit__COMPLETED]}\n22/04/14 19:55:38 INFO RunIndexActionExecutor: Starting index catchup task\n...\n"})}),"\n",(0,t.jsx)(n.h3,{id:"drop-index",children:"Drop Index"}),"\n",(0,t.jsxs)(n.p,{children:["To drop an index, just run the index in ",(0,t.jsx)(n.code,{children:"dropindex"})," mode."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"spark-submit \\\n--class org.apache.hudi.utilities.HoodieIndexer \\\n/Users/home/path/to/hudi-utilities-bundle/target/hudi-utilities-bundle_2.11-0.12.3-SNAPSHOT.jar \\\n--props /Users/home/path/to/indexer.properties \\\n--mode dropindex \\\n--base-path /tmp/hudi-ny-taxi \\\n--table-name ny_hudi_tbl \\\n--index-types COLUMN_STATS \\\n--parallelism 1 \\\n--spark-memory 2g\n"})}),"\n",(0,t.jsx)(n.h2,{id:"caveats",children:"Caveats"}),"\n",(0,t.jsx)(n.p,{children:"Asynchronous indexing feature is still evolving. Few points to note from deployment perspective while running the indexer:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"While an index can be created concurrently with ingestion, it cannot be dropped concurrently. Please stop all writers\nbefore dropping an index."}),"\n",(0,t.jsx)(n.li,{children:"Files index is created by default as long as the metadata table is enabled."}),"\n",(0,t.jsx)(n.li,{children:"Trigger indexing for one metadata partition (or index type) at a time."}),"\n",(0,t.jsx)(n.li,{children:"If an index is enabled via async HoodieIndexer, then ensure that index is also enabled in configs corresponding to regular ingestion writers. Otherwise, metadata writer will\nthink that particular index was disabled and cleanup the metadata partition."}),"\n",(0,t.jsx)(n.li,{children:"In the case of multi-writers, enable async index and specific index config for all writers."}),"\n",(0,t.jsx)(n.li,{children:"Unlike other table services like compaction and clustering, where we have a separate configuration to run inline, there is no such inline config here.\nFor example, if async indexing is disabled and metadata is enabled along with column stats index type, then both files and column stats index will be created synchronously with ingestion."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Some of these limitations will be removed in the upcoming releases. Please\nfollow ",(0,t.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/HUDI-2488",children:"HUDI-2488"})," for developments on this feature."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>s});var t=i(96540);const a={},r=t.createContext(a);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);
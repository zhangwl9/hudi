"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[66559],{15032:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var t=i(74848),s=i(28453);const o={title:"Indexing",toc:!0,toc_min_heading_level:2,toc_max_heading_level:4},a=void 0,r={id:"indexing",title:"Indexing",description:"Indexing",source:"@site/versioned_docs/version-0.14.0/indexing.md",sourceDirName:".",slug:"/indexing",permalink:"/docs/0.14.0/indexing",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.14.0/indexing.md",tags:[],version:"0.14.0",frontMatter:{title:"Indexing",toc:!0,toc_min_heading_level:2,toc_max_heading_level:4},sidebar:"docs",previous:{title:"Table & Query Types",permalink:"/docs/0.14.0/table_types"},next:{title:"File Layouts",permalink:"/docs/0.14.0/file_layouts"}},d={},l=[{value:"Indexing",id:"indexing",level:2},{value:"Index Types in Hudi",id:"index-types-in-hudi",level:2},{value:"Global and Non-Global Indexes",id:"global-and-non-global-indexes",level:3},{value:"Configs",id:"configs",level:3},{value:"Spark based configs",id:"spark-based-configs",level:4},{value:"Flink based configs",id:"flink-based-configs",level:4},{value:"Indexing Strategies",id:"indexing-strategies",level:2},{value:"Workload 1: Late arriving updates to fact tables",id:"workload-1-late-arriving-updates-to-fact-tables",level:3},{value:"Workload 2: De-Duplication in event tables",id:"workload-2-de-duplication-in-event-tables",level:3},{value:"Workload 3: Random updates/deletes to a dimension table",id:"workload-3-random-updatesdeletes-to-a-dimension-table",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"indexing",children:"Indexing"}),"\n",(0,t.jsx)(n.p,{children:"Hudi provides efficient upserts, by mapping a given hoodie key (record key + partition path) consistently to a file id, via an indexing mechanism.\nThis mapping between record key and file group/file id, never changes once the first version of a record has been written to a file. In short, the\nmapped file group contains all versions of a group of records."}),"\n",(0,t.jsxs)(n.p,{children:["For ",(0,t.jsx)(n.a,{href:"/docs/table_types#copy-on-write-table",children:"Copy-On-Write tables"}),", this enables fast upsert/delete operations, by\navoiding the need to join against the entire dataset to determine which files to rewrite.\nFor ",(0,t.jsx)(n.a,{href:"/docs/table_types#merge-on-read-table",children:"Merge-On-Read tables"}),", this design allows Hudi to bound the amount of\nrecords any given base file needs to be merged against.\nSpecifically, a given base file needs to merged only against updates for records that are part of that base file. In contrast,\ndesigns without an indexing component (e.g: ",(0,t.jsx)(n.a,{href:"https://cwiki.apache.org/confluence/display/Hive/Hive+Transactions",children:"Apache Hive ACID"}),"),\ncould end up having to merge all the base files against all incoming updates/delete records:"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Fact table",src:i(16097).A+"",width:"1200",height:"600"}),"\n",(0,t.jsx)(n.em,{children:"Figure: Comparison of merge cost for updates (yellow blocks) against base files (white blocks)"})]}),"\n",(0,t.jsx)(n.h2,{id:"index-types-in-hudi",children:"Index Types in Hudi"}),"\n",(0,t.jsx)(n.p,{children:"Currently, Hudi supports the following index types. Default is SIMPLE on Spark engine, and INMEMORY on Flink and Java\nengines."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"BLOOM:"})," Employs bloom filters built out of the record keys, optionally also pruning candidate files using\nrecord key ranges.Key uniqueness is enforced inside partitions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"GLOBAL_BLOOM:"})," Employs bloom filters built out of the record keys, optionally also pruning candidate files using\nrecord key ranges. Key uniqueness is enforced across all partitions in the table."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"SIMPLE (default for Spark engines):"})," Default index type for spark engine. Performs a lean join of the incoming records against keys extracted from the table on\nstorage. Key uniqueness is enforced inside partitions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"GLOBAL_SIMPLE:"})," Performs a lean join of the incoming records against keys extracted from the table on\nstorage. Key uniqueness is enforced across all partitions in the table."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"HBASE:"})," Manages the index mapping in an external Apache HBase table."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"INMEMORY (default for Flink and Java):"})," Uses in-memory hashmap in Spark and Java engine and Flink in-memory state in Flink for indexing."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"BUCKET:"})," Employs bucket hashing to locates the file group containing the records. Particularly beneficial in\nlarge scale. Use ",(0,t.jsx)(n.code,{children:"hoodie.index.bucket.engine"})," to choose bucket engine type, i.e., how buckets are generated;","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"SIMPLE(default)"}),": Uses a fixed number of buckets for file groups per partition which cannot shrink or expand. This works for both COW and\nMOR tables. Since the num of buckets cannot be changed and design of one-on-one mapping between buckets and file groups,\nthis index might not suit well for highly skewed partitions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"CONSISTENT_HASHING"}),": Supports dynamic number of buckets with bucket resizing to properly size each bucket. This\nsolves potential data skew problem where partitions with high volume of data can be dynamically resized to have\nmultiple buckets that are reasonably sized in contrast to the fixed number of buckets per partition in SIMPLE\nbucket engine type. This only works with MOR tables."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"RECORD_INDEX:"})," Index which saves the record key to location mappings in the HUDI Metadata Table. Record index is a\nglobal index, enforcing key uniqueness across all partitions in the table. Supports sharding to achieve very high scale."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Bring your own implementation:"})," You can extend this ",(0,t.jsx)(n.a,{href:"https://github.com/apache/hudi/blob/master/hudi-client/hudi-client-common/src/main/java/org/apache/hudi/index/HoodieIndex.java",children:"public API"}),"\nto implement custom indexing."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Writers can pick one of these options using ",(0,t.jsx)(n.code,{children:"hoodie.index.type"})," config option. Additionally, a custom index implementation can also be employed\nusing ",(0,t.jsx)(n.code,{children:"hoodie.index.class"})," and supplying a subclass of ",(0,t.jsx)(n.code,{children:"SparkHoodieIndex"})," (for Apache Spark writers)"]}),"\n",(0,t.jsx)(n.h3,{id:"global-and-non-global-indexes",children:"Global and Non-Global Indexes"}),"\n",(0,t.jsxs)(n.p,{children:["Another key aspect worth understanding is the difference between global and non-global indexes. Both bloom and simple index have\nglobal options - ",(0,t.jsx)(n.code,{children:"hoodie.index.type=GLOBAL_BLOOM"})," and ",(0,t.jsx)(n.code,{children:"hoodie.index.type=GLOBAL_SIMPLE"})," - respectively. Record index and\nHBase index are by nature a global index."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Global index:"}),"  Global indexes enforce uniqueness of keys across all partitions of a table i.e guarantees that exactly\none record exists in the table for a given record key. Global indexes offer stronger guarantees, but the update/delete\ncost can still grow with size of the table ",(0,t.jsx)(n.code,{children:"O(size of table)"}),", since the record could belong to any partition in storage.\nIn case of non-global index, lookup involves file groups only for the matching partitions from the incoming records and\nso its not impacted by the total size of the table. These global indexes(GLOBAL_SIMPLE or GLOBAL_BLOOM), might be\nacceptable for decent sized tables, but for large tables, a newly added index (0.14.0) called Record Level Index (RLI),\ncan offer pretty good index lookup performance compared to other global indices(GLOBAL_SIMPLE or GLOBAL_BLOOM) or\nHbase and also avoids the operational overhead of maintaining external systems."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Non Global index:"})," On the other hand, the default index implementations enforce this constraint only within a specific partition.\nAs one might imagine, non global indexes depends on the writer to provide the same consistent partition path for a given record key during update/delete,\nbut can deliver much better performance since the index lookup operation becomes ",(0,t.jsx)(n.code,{children:"O(number of records updated/deleted)"})," and\nscales well with write volume."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"configs",children:"Configs"}),"\n",(0,t.jsx)(n.h4,{id:"spark-based-configs",children:"Spark based configs"}),"\n",(0,t.jsxs)(n.p,{children:["For Spark DataSource, Spark SQL, DeltaStreamer and Structured Streaming following are the key configs that control\nindexing behavior. Please refer to ",(0,t.jsx)(n.a,{href:"https://hudi.apache.org/docs/configurations#Common-Index-Configs-advanced-configs",children:"Advanced Configs"}),"\nfor more details. All these, support the index types mentioned ",(0,t.jsx)(n.a,{href:"#index-types-in-hudi",children:"above"}),"."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Config Name"}),(0,t.jsx)(n.th,{children:"Default"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"hoodie.index.type"}),(0,t.jsxs)(n.td,{children:["N/A ",(0,t.jsx)(n.strong,{children:"(Required)"})]}),(0,t.jsxs)(n.td,{children:["org.apache.hudi.index.HoodieIndex$IndexType: Determines how input records are indexed, i.e., looked up based on the key for the location in the existing table. Default is SIMPLE on Spark engine, and INMEMORY on Flink and Java engines. Possible Values: ",(0,t.jsx)("br",{})," ",(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"BLOOM"}),(0,t.jsx)("li",{children:"GLOBAL_BLOOM"}),(0,t.jsx)("li",{children:"SIMPLE"}),(0,t.jsx)("li",{children:"GLOBAL_SIMPLE"}),(0,t.jsx)("li",{children:"HBASE"}),(0,t.jsx)("li",{children:"INMEMORY"}),(0,t.jsx)("li",{children:"FLINK_STATE"}),(0,t.jsx)("li",{children:"BUCKET"}),(0,t.jsx)("li",{children:"RECORD_INDEX"})]}),(0,t.jsx)("br",{}),(0,t.jsx)(n.code,{children:"Config Param: INDEX_TYPE"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"hoodie.index.bucket.engine"}),(0,t.jsx)(n.td,{children:"SIMPLE (Optional)"}),(0,t.jsxs)(n.td,{children:["org.apache.hudi.index.HoodieIndex$BucketIndexEngineType: Determines the type of bucketing or hashing to use when ",(0,t.jsx)(n.code,{children:"hoodie.index.type"})," is set to ",(0,t.jsx)(n.code,{children:"BUCKET"}),".    Possible Values: ",(0,t.jsx)("br",{})," ",(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"SIMPLE"}),(0,t.jsx)("li",{children:"CONSISTENT_HASHING"})]})," ",(0,t.jsx)("br",{}),(0,t.jsx)(n.code,{children:"Config Param: BUCKET_INDEX_ENGINE_TYPE"}),(0,t.jsx)("br",{}),(0,t.jsx)(n.code,{children:"Since Version: 0.11.0"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"hoodie.index.class"}),(0,t.jsx)(n.td,{children:"(Optional)"}),(0,t.jsxs)(n.td,{children:["Full path of user-defined index class and must be a subclass of HoodieIndex class. It will take precedence over the hoodie.index.type configuration if specified",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(n.code,{children:"Config Param: INDEX_CLASS_NAME"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"hoodie.bloom.index.update.partition.path"}),(0,t.jsx)(n.td,{children:"true (Optional)"}),(0,t.jsxs)(n.td,{children:["Only applies if index type is GLOBAL_BLOOM. When set to true, an update including the partition path of a record that already exists will result in inserting the incoming record into the new partition and deleting the original record in the old partition. When set to false, the original record will only be updated in the old partition, ignoring the new incoming partition if there is a mis-match between partition value for an incoming record with whats in storage.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(n.code,{children:"Config Param: BLOOM_INDEX_UPDATE_PARTITION_PATH_ENABLE"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"hoodie.record.index.update.partition.path"}),(0,t.jsx)(n.td,{children:"false (Optional)"}),(0,t.jsxs)(n.td,{children:["Similar to Key: 'hoodie.bloom.index.update.partition.path' , Only applies if index type is RECORD_INDEX. When set to true, an update including the partition path of a record that already exists will result in inserting the incoming record into the new partition and deleting the original record in the old partition. When set to false, the original record will only be updated in the old partition, ignoring the new incoming partition if there is a mis-match between partition value for an incoming record with whats in storage. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(n.code,{children:"Config Param: RECORD_INDEX_UPDATE_PARTITION_PATH_ENABLE"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"hoodie.simple.index.update.partition.path"}),(0,t.jsx)(n.td,{children:"true (Optional)"}),(0,t.jsxs)(n.td,{children:["Similar to Key: 'hoodie.bloom.index.update.partition.path' , Only applies if index type is GLOBAL_SIMPLE. When set to true, an update including the partition path of a record that already exists will result in inserting the incoming record into the new partition and deleting the original record in the old partition. When set to false, the original record will only be updated in the old partition, ignoring the new incoming partition if there is a mis-match between partition value for an incoming record with whats in storage. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(n.code,{children:"Config Param: SIMPLE_INDEX_UPDATE_PARTITION_PATH_ENABLE"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"hoodie.hbase.index.update.partition.path"}),(0,t.jsx)(n.td,{children:"false (Optional)"}),(0,t.jsxs)(n.td,{children:["Only applies if index type is HBASE. When an already existing record is upserted to a new partition compared to whats in storage, this config when set, will delete old record in old partition and will insert it as new record in new partition.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(n.code,{children:"Config Param: UPDATE_PARTITION_PATH_ENABLE"})]})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"flink-based-configs",children:"Flink based configs"}),"\n",(0,t.jsxs)(n.p,{children:["For Flink DataStream and Flink SQL only support Bucket Index and internal Flink state store backed in memory index.\nFollowing are the basic configs that control the indexing behavior. Please refer ",(0,t.jsx)(n.a,{href:"https://hudi.apache.org/docs/configurations#Flink-Options-advanced-configs",children:"here"}),"\nfor advanced configs."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Config Name"}),(0,t.jsx)(n.th,{children:"Default"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"index.type"}),(0,t.jsx)(n.td,{children:"FLINK_STATE (Optional)"}),(0,t.jsxs)(n.td,{children:["Index type of Flink write job, default is using state backed index. Possible values:",(0,t.jsx)("br",{})," ",(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"FLINK_STATE"}),(0,t.jsx)("li",{children:"BUCKET"})]}),(0,t.jsx)("br",{}),"  ",(0,t.jsx)(n.code,{children:"Config Param: INDEX_TYPE"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"hoodie.index.bucket.engine"}),(0,t.jsx)(n.td,{children:"SIMPLE (Optional)"}),(0,t.jsxs)(n.td,{children:["org.apache.hudi.index.HoodieIndex$BucketIndexEngineType: Determines the type of bucketing or hashing to use when ",(0,t.jsx)(n.code,{children:"hoodie.index.type"})," is set to ",(0,t.jsx)(n.code,{children:"BUCKET"}),".    Possible Values: ",(0,t.jsx)("br",{})," ",(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"SIMPLE"}),(0,t.jsx)("li",{children:"CONSISTENT_HASHING"})]})]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"indexing-strategies",children:"Indexing Strategies"}),"\n",(0,t.jsx)(n.p,{children:"Since data comes in at different volumes, velocity and has different access patterns, different indices could be used for different workload types.\nLet\u2019s walk through some typical workload types and see how to leverage the right Hudi index for such use-cases.\nThis is based on our experience and you should diligently decide if the same strategies are best for your workloads."}),"\n",(0,t.jsx)(n.h3,{id:"workload-1-late-arriving-updates-to-fact-tables",children:"Workload 1: Late arriving updates to fact tables"}),"\n",(0,t.jsx)(n.p,{children:"Many companies store large volumes of transactional data in NoSQL data stores. For eg, trip tables in case of ride-sharing, buying and selling of shares,\norders in an e-commerce site. These tables are usually ever growing with random updates on most recent data with long tail updates going to older data, either\ndue to transactions settling at a later date/data corrections. In other words, most updates go into the latest partitions with few updates going to older ones."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Fact table",src:i(37629).A+"",width:"1280",height:"720"}),"\n",(0,t.jsx)(n.em,{children:"Figure: Typical update pattern for Fact tables"})]}),"\n",(0,t.jsxs)(n.p,{children:["For such workloads, the ",(0,t.jsx)(n.code,{children:"BLOOM"})," index performs well, since index look-up will prune a lot of data files based on a well-sized bloom filter.\nAdditionally, if the keys can be constructed such that they have a certain ordering, the number of files to be compared is further reduced by range pruning.\nHudi constructs an interval tree with all the file key ranges and efficiently filters out the files that don't match any key ranges in the updates/deleted records."]}),"\n",(0,t.jsxs)(n.p,{children:["In order to efficiently compare incoming record keys against bloom filters i.e with minimal number of bloom filter reads and uniform distribution of work across\nthe executors, Hudi leverages caching of input records and employs a custom partitioner that can iron out data skews using statistics. At times, if the bloom filter\nfalse positive ratio is high, it could increase the amount of data shuffled to perform the lookup. Hudi supports dynamic bloom filters\n(enabled using ",(0,t.jsx)(n.code,{children:"hoodie.bloom.index.filter.type=DYNAMIC_V0"}),"), which adjusts its size based on the number of records stored in a given file to deliver the\nconfigured false positive ratio."]}),"\n",(0,t.jsx)(n.h3,{id:"workload-2-de-duplication-in-event-tables",children:"Workload 2: De-Duplication in event tables"}),"\n",(0,t.jsx)(n.p,{children:'Event Streaming is everywhere. Events coming from Apache Kafka or similar message bus are typically 10-100x the size of fact tables and often treat "time" (event\'s arrival time/processing\ntime) as a first class citizen. For eg, IoT event stream, click stream data, ad impressions etc. Inserts and updates only span the last few partitions as these are mostly append only data.\nGiven duplicate events can be introduced anywhere in the end-end pipeline, de-duplication before storing on the data lake is a common requirement.'}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Event table",src:i(97047).A+"",width:"1280",height:"720"}),"\n",(0,t.jsx)(n.em,{children:"Figure showing the spread of updates for Event table."})]}),"\n",(0,t.jsxs)(n.p,{children:["In general, this is a very challenging problem to solve at lower cost. Although, we could even employ a key value store to perform this de-duplication with HBASE index, the index storage\ncosts would grow linear with number of events and thus can be prohibitively expensive. In fact, ",(0,t.jsx)(n.code,{children:"BLOOM"})," index with range pruning is the optimal solution here. One can leverage the fact\nthat time is often a first class citizen and construct a key such as ",(0,t.jsx)(n.code,{children:"event_ts + event_id"})," such that the inserted records have monotonically increasing keys. This yields great returns\nby pruning large amounts of files even within the latest table partitions."]}),"\n",(0,t.jsx)(n.h3,{id:"workload-3-random-updatesdeletes-to-a-dimension-table",children:"Workload 3: Random updates/deletes to a dimension table"}),"\n",(0,t.jsx)(n.p,{children:"These types of tables usually contain high dimensional data and hold reference data e.g user profile, merchant information. These are high fidelity tables where the updates are often small but also spread\nacross a lot of partitions and data files ranging across the dataset from old to new. Often times, these tables are also un-partitioned, since there is also not a good way to partition these tables."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Dimensions table",src:i(59331).A+"",width:"1280",height:"720"}),"\n",(0,t.jsx)(n.em,{children:"Figure showing the spread of updates for Dimensions table."})]}),"\n",(0,t.jsxs)(n.p,{children:["As discussed before, the ",(0,t.jsx)(n.code,{children:"BLOOM"})," index may not yield benefits if a good number of files cannot be pruned out by comparing ranges/filters. In such a random write workload, updates end up touching\nmost files within in the table and thus bloom filters will typically indicate a true positive for all files based on some incoming update. Consequently, we would end up comparing ranges/filter, only\nto finally check the incoming updates against all files. The ",(0,t.jsx)(n.code,{children:"SIMPLE"})," Index will be a better fit as it does not do any upfront pruning based, but directly joins with interested fields from every data file.\n",(0,t.jsx)(n.code,{children:"HBASE"})," index can be employed, if the operational overhead is acceptable and would provide much better lookup times for these tables."]}),"\n",(0,t.jsxs)(n.p,{children:["When using a global index, users should also consider setting ",(0,t.jsx)(n.code,{children:"hoodie.bloom.index.update.partition.path=true"})," or ",(0,t.jsx)(n.code,{children:"hoodie.simple.index.update.partition.path=true"})," to deal with cases where the\npartition path value could change due to an update e.g users table partitioned by home city; user relocates to a different city. These tables are also excellent candidates for the Merge-On-Read table type."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},59331:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/Dimension20tables-6bbe96fbe9102541487b1819532f6bd4.gif"},97047:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/Event20tables-8998b57588a66cb2f5d3e9233dfb6d0f.gif"},37629:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/Fact20tables-0255e82a96683124f7116060e9f76cbe.gif"},16097:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/with-and-without-index-81d481917e61e4cd1be2426c12994b8b.png"},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var t=i(96540);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);
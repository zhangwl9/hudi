"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[94864],{79421:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=n(74848),s=n(28453);const a={title:"Indexing",toc:!0},o=void 0,r={id:"indexing",title:"Indexing",description:"Hudi provides efficient upserts, by mapping a given hoodie key (record key + partition path) consistently to a file id, via an indexing mechanism.",source:"@site/versioned_docs/version-0.12.3/indexing.md",sourceDirName:".",slug:"/indexing",permalink:"/docs/0.12.3/indexing",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.3/indexing.md",tags:[],version:"0.12.3",frontMatter:{title:"Indexing",toc:!0},sidebar:"docs",previous:{title:"Table & Query Types",permalink:"/docs/0.12.3/table_types"},next:{title:"File Layouts",permalink:"/docs/0.12.3/file_layouts"}},d={},l=[{value:"Index Types in Hudi",id:"index-types-in-hudi",level:2},{value:"Indexing Strategies",id:"indexing-strategies",level:2},{value:"Workload 1: Late arriving updates to fact tables",id:"workload-1-late-arriving-updates-to-fact-tables",level:3},{value:"Workload 2: De-Duplication in event tables",id:"workload-2-de-duplication-in-event-tables",level:3},{value:"Workload 3: Random updates/deletes to a dimension table",id:"workload-3-random-updatesdeletes-to-a-dimension-table",level:3}];function c(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Hudi provides efficient upserts, by mapping a given hoodie key (record key + partition path) consistently to a file id, via an indexing mechanism.\nThis mapping between record key and file group/file id, never changes once the first version of a record has been written to a file. In short, the\nmapped file group contains all versions of a group of records."}),"\n",(0,i.jsxs)(t.p,{children:["For ",(0,i.jsx)(t.a,{href:"/docs/table_types#copy-on-write-table",children:"Copy-On-Write tables"}),", this enables fast upsert/delete operations, by\navoiding the need to join against the entire dataset to determine which files to rewrite.\nFor ",(0,i.jsx)(t.a,{href:"/docs/table_types#merge-on-read-table",children:"Merge-On-Read tables"}),", this design allows Hudi to bound the amount of\nrecords any given base file needs to be merged against.\nSpecifically, a given base file needs to merged only against updates for records that are part of that base file. In contrast,\ndesigns without an indexing component (e.g: ",(0,i.jsx)(t.a,{href:"https://cwiki.apache.org/confluence/display/Hive/Hive+Transactions",children:"Apache Hive ACID"}),"),\ncould end up having to merge all the base files against all incoming updates/delete records:"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Fact table",src:n(16097).A+"",width:"1200",height:"600"}),"\n",(0,i.jsx)(t.em,{children:"Figure: Comparison of merge cost for updates (yellow blocks) against base files (white blocks)"})]}),"\n",(0,i.jsx)(t.h2,{id:"index-types-in-hudi",children:"Index Types in Hudi"}),"\n",(0,i.jsx)(t.p,{children:"Currently, Hudi supports the following indexing options."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Bloom Index (default):"})," Employs bloom filters built out of the record keys, optionally also pruning candidate files using record key ranges."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Simple Index:"})," Performs a lean join of the incoming update/delete records against keys extracted from the table on storage."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"HBase Index:"})," Manages the index mapping in an external Apache HBase table."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Bring your own implementation:"})," You can extend this ",(0,i.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/master/hudi-client/hudi-client-common/src/main/java/org/apache/hudi/index/HoodieIndex.java",children:"public API"}),"\nto implement custom indexing."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Writers can pick one of these options using ",(0,i.jsx)(t.code,{children:"hoodie.index.type"})," config option. Additionally, a custom index implementation can also be employed\nusing ",(0,i.jsx)(t.code,{children:"hoodie.index.class"})," and supplying a subclass of ",(0,i.jsx)(t.code,{children:"SparkHoodieIndex"})," (for Apache Spark writers)"]}),"\n",(0,i.jsxs)(t.p,{children:["Another key aspect worth understanding is the difference between global and non-global indexes. Both bloom and simple index have\nglobal options - ",(0,i.jsx)(t.code,{children:"hoodie.index.type=GLOBAL_BLOOM"})," and ",(0,i.jsx)(t.code,{children:"hoodie.index.type=GLOBAL_SIMPLE"})," - respectively. HBase index is by nature a global index."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Global index:"}),"  Global indexes enforce uniqueness of keys across all partitions of a table i.e guarantees that exactly\none record exists in the table for a given record key. Global indexes offer stronger guarantees, but the update/delete cost grows\nwith size of the table ",(0,i.jsx)(t.code,{children:"O(size of table)"}),", which might still be acceptable for smaller tables."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Non Global index:"})," On the other hand, the default index implementations enforce this constraint only within a specific partition.\nAs one might imagine, non global indexes depends on the writer to provide the same consistent partition path for a given record key during update/delete,\nbut can deliver much better performance since the index lookup operation becomes ",(0,i.jsx)(t.code,{children:"O(number of records updated/deleted)"})," and\nscales well with write volume."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Since data comes in at different volumes, velocity and has different access patterns, different indices could be used for different workload types.\nLet\u2019s walk through some typical workload types and see how to leverage the right Hudi index for such use-cases.\nThis is based on our experience and you should diligently decide if the same strategies are best for your workloads."}),"\n",(0,i.jsx)(t.h2,{id:"indexing-strategies",children:"Indexing Strategies"}),"\n",(0,i.jsx)(t.h3,{id:"workload-1-late-arriving-updates-to-fact-tables",children:"Workload 1: Late arriving updates to fact tables"}),"\n",(0,i.jsx)(t.p,{children:"Many companies store large volumes of transactional data in NoSQL data stores. For eg, trip tables in case of ride-sharing, buying and selling of shares,\norders in an e-commerce site. These tables are usually ever growing with random updates on most recent data with long tail updates going to older data, either\ndue to transactions settling at a later date/data corrections. In other words, most updates go into the latest partitions with few updates going to older ones."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Fact table",src:n(37629).A+"",width:"1280",height:"720"}),"\n",(0,i.jsx)(t.em,{children:"Figure: Typical update pattern for Fact tables"})]}),"\n",(0,i.jsxs)(t.p,{children:["For such workloads, the ",(0,i.jsx)(t.code,{children:"BLOOM"})," index performs well, since index look-up will prune a lot of data files based on a well-sized bloom filter.\nAdditionally, if the keys can be constructed such that they have a certain ordering, the number of files to be compared is further reduced by range pruning.\nHudi constructs an interval tree with all the file key ranges and efficiently filters out the files that don't match any key ranges in the updates/deleted records."]}),"\n",(0,i.jsxs)(t.p,{children:["In order to efficiently compare incoming record keys against bloom filters i.e with minimal number of bloom filter reads and uniform distribution of work across\nthe executors, Hudi leverages caching of input records and employs a custom partitioner that can iron out data skews using statistics. At times, if the bloom filter\nfalse positive ratio is high, it could increase the amount of data shuffled to perform the lookup. Hudi supports dynamic bloom filters\n(enabled using ",(0,i.jsx)(t.code,{children:"hoodie.bloom.index.filter.type=DYNAMIC_V0"}),"), which adjusts its size based on the number of records stored in a given file to deliver the\nconfigured false positive ratio."]}),"\n",(0,i.jsx)(t.h3,{id:"workload-2-de-duplication-in-event-tables",children:"Workload 2: De-Duplication in event tables"}),"\n",(0,i.jsx)(t.p,{children:'Event Streaming is everywhere. Events coming from Apache Kafka or similar message bus are typically 10-100x the size of fact tables and often treat "time" (event\'s arrival time/processing\ntime) as a first class citizen. For eg, IoT event stream, click stream data, ad impressions etc. Inserts and updates only span the last few partitions as these are mostly append only data.\nGiven duplicate events can be introduced anywhere in the end-end pipeline, de-duplication before storing on the data lake is a common requirement.'}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Event table",src:n(97047).A+"",width:"1280",height:"720"}),"\n",(0,i.jsx)(t.em,{children:"Figure showing the spread of updates for Event table."})]}),"\n",(0,i.jsxs)(t.p,{children:["In general, this is a very challenging problem to solve at lower cost. Although, we could even employ a key value store to perform this de-duplication with HBASE index, the index storage\ncosts would grow linear with number of events and thus can be prohibitively expensive. In fact, ",(0,i.jsx)(t.code,{children:"BLOOM"})," index with range pruning is the optimal solution here. One can leverage the fact\nthat time is often a first class citizen and construct a key such as ",(0,i.jsx)(t.code,{children:"event_ts + event_id"})," such that the inserted records have monotonically increasing keys. This yields great returns\nby pruning large amounts of files even within the latest table partitions."]}),"\n",(0,i.jsx)(t.h3,{id:"workload-3-random-updatesdeletes-to-a-dimension-table",children:"Workload 3: Random updates/deletes to a dimension table"}),"\n",(0,i.jsx)(t.p,{children:"These types of tables usually contain high dimensional data and hold reference data e.g user profile, merchant information. These are high fidelity tables where the updates are often small but also spread\nacross a lot of partitions and data files ranging across the dataset from old to new. Often times, these tables are also un-partitioned, since there is also not a good way to partition these tables."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Dimensions table",src:n(59331).A+"",width:"1280",height:"720"}),"\n",(0,i.jsx)(t.em,{children:"Figure showing the spread of updates for Dimensions table."})]}),"\n",(0,i.jsxs)(t.p,{children:["As discussed before, the ",(0,i.jsx)(t.code,{children:"BLOOM"})," index may not yield benefits if a good number of files cannot be pruned out by comparing ranges/filters. In such a random write workload, updates end up touching\nmost files within in the table and thus bloom filters will typically indicate a true positive for all files based on some incoming update. Consequently, we would end up comparing ranges/filter, only\nto finally check the incoming updates against all files. The ",(0,i.jsx)(t.code,{children:"SIMPLE"})," Index will be a better fit as it does not do any upfront pruning based, but directly joins with interested fields from every data file.\n",(0,i.jsx)(t.code,{children:"HBASE"})," index can be employed, if the operational overhead is acceptable and would provide much better lookup times for these tables."]}),"\n",(0,i.jsxs)(t.p,{children:["When using a global index, users should also consider setting ",(0,i.jsx)(t.code,{children:"hoodie.bloom.index.update.partition.path=true"})," or ",(0,i.jsx)(t.code,{children:"hoodie.simple.index.update.partition.path=true"})," to deal with cases where the\npartition path value could change due to an update e.g users table partitioned by home city; user relocates to a different city. These tables are also excellent candidates for the Merge-On-Read table type."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},59331:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/Dimension20tables-6bbe96fbe9102541487b1819532f6bd4.gif"},97047:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/Event20tables-8998b57588a66cb2f5d3e9233dfb6d0f.gif"},37629:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/Fact20tables-0255e82a96683124f7116060e9f76cbe.gif"},16097:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/with-and-without-index-81d481917e61e4cd1be2426c12994b8b.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var i=n(96540);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);
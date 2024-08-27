"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[65223],{36404:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=n(74848),a=n(28453);const o={title:"Employing the right indexes for fast updates, deletes in Apache Hudi",excerpt:"Detailing different indexing mechanisms in Hudi and when to use each of them",author:"vinoth",category:"blog",image:"/assets/images/blog/hudi-indexes/with-and-without-index.png",tags:["how-to","indexing","apache hudi"]},s=void 0,r={permalink:"/blog/2020/11/11/hudi-indexing-mechanisms",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2020-11-11-hudi-indexing-mechanisms.md",source:"@site/blog/2020-11-11-hudi-indexing-mechanisms.md",title:"Employing the right indexes for fast updates, deletes in Apache Hudi",description:"Apache Hudi employs an index to locate the file group, that an update/delete belongs to. For Copy-On-Write tables, this enables",date:"2020-11-11T00:00:00.000Z",tags:[{inline:!0,label:"how-to",permalink:"/blog/tags/how-to"},{inline:!0,label:"indexing",permalink:"/blog/tags/indexing"},{inline:!0,label:"apache hudi",permalink:"/blog/tags/apache-hudi"}],readingTime:7.585,hasTruncateMarker:!0,authors:[{name:"vinoth",key:null,page:null}],frontMatter:{title:"Employing the right indexes for fast updates, deletes in Apache Hudi",excerpt:"Detailing different indexing mechanisms in Hudi and when to use each of them",author:"vinoth",category:"blog",image:"/assets/images/blog/hudi-indexes/with-and-without-index.png",tags:["how-to","indexing","apache hudi"]},unlisted:!1,prevItem:{title:"Can Big Data Solutions Be Affordable?",permalink:"/blog/2020/11/29/Can-Big-Data-Solutions-Be-Affordable"},nextItem:{title:"Architecting Data Lakes for the Modern Enterprise at Data Summit Connect Fall 2020",permalink:"/blog/2020/10/21/Architecting-Data-Lakes-for-the-Modern-Enterprise-at-Data-Summit-Connect-Fall-2020"}},l={authorsImageUrls:[void 0]},d=[{value:"Index Types in Hudi",id:"index-types-in-hudi",level:2},{value:"Workload: Late arriving updates to fact tables",id:"workload-late-arriving-updates-to-fact-tables",level:2},{value:"Workload: De-Duplication in event tables",id:"workload-de-duplication-in-event-tables",level:2},{value:"Workload: Random updates/deletes to a dimension table",id:"workload-random-updatesdeletes-to-a-dimension-table",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Apache Hudi employs an index to locate the file group, that an update/delete belongs to. For Copy-On-Write tables, this enables\nfast upsert/delete operations, by avoiding the need to join against the entire dataset to determine which files to rewrite.\nFor Merge-On-Read tables, this design allows Hudi to bound the amount of records any given base file needs to be merged against.\nSpecifically, a given base file needs to merged only against updates for records that are part of that base file. In contrast,\ndesigns without an indexing component (e.g: ",(0,i.jsx)(t.a,{href:"https://cwiki.apache.org/confluence/display/Hive/Hive+Transactions",children:"Apache Hive ACID"}),"),\ncould end up having to merge all the base files against all incoming updates/delete records."]}),"\n",(0,i.jsxs)(t.p,{children:["At a high level, an index maps a record key + an optional partition path to a file group ID on storage (explained\nmore in detail ",(0,i.jsx)(t.a,{href:"/docs/concepts",children:"here"}),") and during write operations, we lookup this mapping to route an incoming update/delete\nto a log file attached to the base file (MOR) or to the latest base file that now needs to be merged against (COW). The index also enables\nHudi to enforce unique constraints based on the record keys."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Fact table",src:n(16097).A+"",width:"1200",height:"600"}),"\n",(0,i.jsx)(t.em,{children:"Figure: Comparison of merge cost for updates (yellow blocks) against base files (white blocks)"})]}),"\n",(0,i.jsx)(t.p,{children:"Given that Hudi already supports few different indexing techniques and is also continuously improving/adding more to its toolkit, the rest of the blog\nattempts to explain different categories of workloads, from our experience and suggests what index types to use for each. We will also interlace\ncommentary on existing limitations, upcoming work and optimizations/tradeoffs along the way."}),"\n",(0,i.jsx)(t.h2,{id:"index-types-in-hudi",children:"Index Types in Hudi"}),"\n",(0,i.jsx)(t.p,{children:"Currently, Hudi supports the following indexing options."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Bloom Index (default):"})," Employs bloom filters built out of the record keys, optionally also pruning candidate files using record key ranges."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Simple Index:"})," Performs a lean join of the incoming update/delete records against keys extracted from the table on storage."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"HBase Index:"})," Manages the index mapping in an external Apache HBase table."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Writers can pick one of these options using ",(0,i.jsx)(t.code,{children:"hoodie.index.type"})," config option. Additionally, a custom index implementation can also be employed\nusing ",(0,i.jsx)(t.code,{children:"hoodie.index.class"})," and supplying a subclass of ",(0,i.jsx)(t.code,{children:"SparkHoodieIndex"})," (for Apache Spark writers)"]}),"\n",(0,i.jsxs)(t.p,{children:["Another key aspect worth understanding is the difference between global and non-global indexes. Both bloom and simple index have\nglobal options - ",(0,i.jsx)(t.code,{children:"hoodie.index.type=GLOBAL_BLOOM"})," and ",(0,i.jsx)(t.code,{children:"hoodie.index.type=GLOBAL_SIMPLE"})," - respectively. HBase index is by nature a global index."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Global index:"}),"  Global indexes enforce uniqueness of keys across all partitions of a table i.e guarantees that exactly\none record exists in the table for a given record key. Global indexes offer stronger guarantees, but the update/delete cost grows\nwith size of the table ",(0,i.jsx)(t.code,{children:"O(size of table)"}),", which might still be acceptable for smaller tables."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Non Global index:"})," On the other hand, the default index implementations enforce this constraint only within a specific partition.\nAs one might imagine, non global indexes depends on the writer to provide the same consistent partition path for a given record key during update/delete,\nbut can deliver much better performance since the index lookup operation becomes ",(0,i.jsx)(t.code,{children:"O(number of records updated/deleted)"})," and\nscales well with write volume."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Since data comes in at different volumes, velocity and has different access patterns, different indices could be used for different workloads.\nNext, let\u2019s walk through some typical workloads and see how to leverage the right Hudi index for such use-cases."}),"\n",(0,i.jsx)(t.h2,{id:"workload-late-arriving-updates-to-fact-tables",children:"Workload: Late arriving updates to fact tables"}),"\n",(0,i.jsx)(t.p,{children:"Many companies store large volumes of transactional data in NoSQL data stores. For eg, trip tables in case of ride-sharing, buying and selling of shares,\norders in an e-commerce site. These tables are usually ever growing with random updates on most recent data with long tail updates going to older data, either\ndue to transactions settling at a later date/data corrections. In other words, most updates go into the latest partitions with few updates going to older ones."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Fact table",src:n(37629).A+"",width:"1280",height:"720"}),"\n",(0,i.jsx)(t.em,{children:"Figure: Typical update pattern for Fact tables"})]}),"\n",(0,i.jsxs)(t.p,{children:["For such workloads, the ",(0,i.jsx)(t.code,{children:"BLOOM"})," index performs well, since index look-up will prune a lot of data files based on a well-sized bloom filter.\nAdditionally, if the keys can be constructed such that they have a certain ordering, the number of files to be compared is further reduced by range pruning.\nHudi constructs an interval tree with all the file key ranges and efficiently filters out the files that don't match any key ranges in the updates/deleted records."]}),"\n",(0,i.jsxs)(t.p,{children:["In order to efficiently compare incoming record keys against bloom filters i.e with minimal number of bloom filter reads and uniform distribution of work across\nthe executors, Hudi leverages caching of input records and employs a custom partitioner that can iron out data skews using statistics. At times, if the bloom filter\nfalse positive ratio is high, it could increase the amount of data shuffled to perform the lookup. Hudi supports dynamic bloom filters\n(enabled using ",(0,i.jsx)(t.code,{children:"hoodie.bloom.index.filter.type=DYNAMIC_V0"}),"), which adjusts its size based on the number of records stored in a given file to deliver the\nconfigured false positive ratio."]}),"\n",(0,i.jsxs)(t.p,{children:["In the near future, we plan to introduce a much speedier version of the BLOOM index that tracks bloom filters/ranges in an internal Hudi metadata table, indexed for fast\npoint lookups. This would avoid any current limitations around reading bloom filters/ranges from the base files themselves, to perform the lookup. (see\n",(0,i.jsx)(t.a,{href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+15%3A+HUDI+File+Listing+and+Query+Planning+Improvements?src=contextnavpagetreemode",children:"RFC-15"})," for the general design)"]}),"\n",(0,i.jsx)(t.h2,{id:"workload-de-duplication-in-event-tables",children:"Workload: De-Duplication in event tables"}),"\n",(0,i.jsx)(t.p,{children:'Event Streaming is everywhere. Events coming from Apache Kafka or similar message bus are typically 10-100x the size of fact tables and often treat "time" (event\'s arrival time/processing\ntime) as a first class citizen. For eg, IoT event stream, click stream data, ad impressions etc. Inserts and updates only span the last few partitions as these are mostly append only data.\nGiven duplicate events can be introduced anywhere in the end-end pipeline, de-duplication before storing on the data lake is a common requirement.'}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Event table",src:n(97047).A+"",width:"1280",height:"720"}),"\n",(0,i.jsx)(t.em,{children:"Figure showing the spread of updates for Event table."})]}),"\n",(0,i.jsxs)(t.p,{children:["In general, this is a very challenging problem to solve at lower cost. Although, we could even employ a key value store to perform this de-duplication ala HBASE index, the index storage\ncosts would grow linear with number of events and thus can be prohibitively expensive. In fact, ",(0,i.jsx)(t.code,{children:"BLOOM"})," index with range pruning is the optimal solution here. One can leverage the fact\nthat time is often a first class citizen and construct a key such as ",(0,i.jsx)(t.code,{children:"event_ts + event_id"})," such that the inserted records have monotonically increasing keys. This yields great returns\nby pruning large amounts of files even within the latest table partitions."]}),"\n",(0,i.jsx)(t.h2,{id:"workload-random-updatesdeletes-to-a-dimension-table",children:"Workload: Random updates/deletes to a dimension table"}),"\n",(0,i.jsx)(t.p,{children:"These types of tables usually contain high dimensional data and hold reference data e.g user profile, merchant information. These are high fidelity tables where the updates are often small but also spread\nacross a lot of partitions and data files ranging across the dataset from old to new. Often times, these tables are also un-partitioned, since there is also not a good way to partition these tables."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Dimensions table",src:n(59331).A+"",width:"1280",height:"720"}),"\n",(0,i.jsx)(t.em,{children:"Figure showing the spread of updates for Dimensions table."})]}),"\n",(0,i.jsxs)(t.p,{children:["As discussed before, the ",(0,i.jsx)(t.code,{children:"BLOOM"})," index may not yield benefits if a good number of files cannot be pruned out by comparing ranges/filters. In such a random write workload, updates end up touching\nmost files within in the table and thus bloom filters will typically indicate a true positive for all files based on some incoming update. Consequently, we would end up comparing ranges/filter, only\nto finally check the incoming updates against all files. The ",(0,i.jsx)(t.code,{children:"SIMPLE"})," Index will be a better fit as it does not do any upfront pruning based, but directly joins with interested fields from every data file.\n",(0,i.jsx)(t.code,{children:"HBASE"})," index can be employed, if the operational overhead is acceptable and would provide much better lookup times for these tables."]}),"\n",(0,i.jsxs)(t.p,{children:["When using a global index, users should also consider setting ",(0,i.jsx)(t.code,{children:"hoodie.bloom.index.update.partition.path=true"})," or ",(0,i.jsx)(t.code,{children:"hoodie.simple.index.update.partition.path=true"})," to deal with cases where the\npartition path value could change due to an update e.g users table partitioned by home city; user relocates to a different city. These tables are also excellent candidates for the Merge-On-Read table type."]}),"\n",(0,i.jsxs)(t.p,{children:["Going forward, we plan to build ",(0,i.jsx)(t.a,{href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+08+%3A+Record+level+indexing+mechanisms+for+Hudi+datasets?src=contextnavpagetreemode",children:"record level indexing"}),"\nright within Hudi, which will improve the index look-up time and will also avoid additional overhead of maintaining an external system like hbase."]}),"\n",(0,i.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsxs)(t.p,{children:["Without the indexing capabilities in Hudi, it would not been possible to make upserts/deletes happen at ",(0,i.jsx)(t.a,{href:"https://eng.uber.com/apache-hudi-graduation/",children:"very large scales"}),".\nHopefully this post gave you good enough context on the indexing mechanisms today and how different tradeoffs play out."]}),"\n",(0,i.jsx)(t.p,{children:"Some interesting work underway in this area:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Apache Flink based writing with a RocksDB state store backed indexing mechanism, unlocking true streaming upserts on data lakes."}),"\n",(0,i.jsx)(t.li,{children:"A brand new MetadataIndex, which reimagines the bloom index today on top of the metadata table in Hudi."}),"\n",(0,i.jsx)(t.li,{children:"Record level index implementation, as a secondary index using another Hudi table."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Going forward, this will remain an area of active investment for the project. we are always looking for contributors who can drive these roadmap items forward.\nPlease ",(0,i.jsx)(t.a,{href:"/community/get-involved",children:"engage"})," with our community if you want to get involved."]})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},59331:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/Dimension20tables-6bbe96fbe9102541487b1819532f6bd4.gif"},97047:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/Event20tables-8998b57588a66cb2f5d3e9233dfb6d0f.gif"},37629:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/Fact20tables-0255e82a96683124f7116060e9f76cbe.gif"},16097:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/with-and-without-index-81d481917e61e4cd1be2426c12994b8b.png"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var i=n(96540);const a={},o=i.createContext(a);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);
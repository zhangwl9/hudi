"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[41135],{12325:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var n=i(74848),s=i(28453);const a={version:"0.6.0",title:"Concepts",keywords:["hudi","design","table","queries","timeline"],summary:"Here we introduce some basic concepts & give a broad technical overview of Hudi",toc:!0,last_modified_at:new Date("2019-12-30T19:59:57.000Z")},o=void 0,r={id:"concepts",title:"Concepts",description:"Apache Hudi (pronounced \u201cHudi\u201d) provides the following streaming primitives over hadoop compatible storages",source:"@site/versioned_docs/version-0.12.2/concepts.md",sourceDirName:".",slug:"/concepts",permalink:"/cn/docs/0.12.2/concepts",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.2/concepts.md",tags:[],version:"0.12.2",frontMatter:{version:"0.6.0",title:"Concepts",keywords:["hudi","design","table","queries","timeline"],summary:"Here we introduce some basic concepts & give a broad technical overview of Hudi",toc:!0,last_modified_at:"2019-12-30T19:59:57.000Z"}},l={},d=[{value:"Timeline",id:"timeline",level:2},{value:"File management",id:"file-management",level:2},{value:"Index",id:"index",level:2},{value:"Table Types &amp; Queries",id:"table-types--queries",level:2},{value:"Table Types",id:"table-types",level:3},{value:"Query types",id:"query-types",level:3},{value:"Copy On Write Table",id:"copy-on-write-table",level:2},{value:"Merge On Read Table",id:"merge-on-read-table",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Apache Hudi (pronounced \u201cHudi\u201d) provides the following streaming primitives over hadoop compatible storages"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Update/Delete Records      (how do I change records in a table?)"}),"\n",(0,n.jsx)(t.li,{children:"Change Streams             (how do I fetch records that changed?)"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"In this section, we will discuss key concepts & terminologies that are important to understand, to be able to effectively use these primitives."}),"\n",(0,n.jsx)(t.h2,{id:"timeline",children:"Timeline"}),"\n",(0,n.jsxs)(t.p,{children:["At its core, Hudi maintains a ",(0,n.jsx)(t.code,{children:"timeline"})," of all actions performed on the table at different ",(0,n.jsx)(t.code,{children:"instants"})," of time that helps provide instantaneous views of the table,\nwhile also efficiently supporting retrieval of data in the order of arrival. A Hudi instant consists of the following components"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Instant action"})," : Type of action performed on the table"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Instant time"})," : Instant time is typically a timestamp (e.g: 20190117010349), which monotonically increases in the order of action's begin time."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"state"})," : current state of the instant"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Hudi guarantees that the actions performed on the timeline are atomic & timeline consistent based on the instant time."}),"\n",(0,n.jsx)(t.p,{children:"Key actions performed include"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"COMMITS"})," - A commit denotes an ",(0,n.jsx)(t.strong,{children:"atomic write"})," of a batch of records into a table."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"CLEANS"})," - Background activity that gets rid of older versions of files in the table, that are no longer needed."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"DELTA_COMMIT"})," - A delta commit refers to an ",(0,n.jsx)(t.strong,{children:"atomic write"})," of a batch of records into a  MergeOnRead type table, where some/all of the data could be just written to delta logs."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"COMPACTION"})," - Background activity to reconcile differential data structures within Hudi e.g: moving updates from row based log files to columnar formats. Internally, compaction manifests as a special commit on the timeline"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"ROLLBACK"})," - Indicates that a commit/delta commit was unsuccessful & rolled back, removing any partial files produced during such a write"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"SAVEPOINT"}),' - Marks certain file groups as "saved", such that cleaner will not delete them. It helps restore the table to a point on the timeline, in case of disaster/data recovery scenarios.']}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Any given instant can be\nin one of the following states"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"REQUESTED"})," - Denotes an action has been scheduled, but has not initiated"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"INFLIGHT"})," - Denotes that the action is currently being performed"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"COMPLETED"})," - Denotes completion of an action on the timeline"]}),"\n"]}),"\n",(0,n.jsx)("figure",{children:(0,n.jsx)("img",{className:"docimage",src:"/assets/images/hudi_timeline.png",alt:"hudi_timeline.png"})}),"\n",(0,n.jsxs)(t.p,{children:["Example above shows upserts happenings between 10:00 and 10:20 on a Hudi table, roughly every 5 mins, leaving commit metadata on the Hudi timeline, along\nwith other background cleaning/compactions. One key observation to make is that the commit time indicates the ",(0,n.jsx)(t.code,{children:"arrival time"})," of the data (10:20AM), while the actual data\norganization reflects the actual time or ",(0,n.jsx)(t.code,{children:"event time"}),", the data was intended for (hourly buckets from 07:00). These are two key concepts when reasoning about tradeoffs between latency and completeness of data."]}),"\n",(0,n.jsx)(t.p,{children:"When there is late arriving data (data intended for 9:00 arriving >1 hr late at 10:20), we can see the upsert producing new data into even older time buckets/folders.\nWith the help of the timeline, an incremental query attempting to get all new data that was committed successfully since 10:00 hours, is able to very efficiently consume\nonly the changed files without say scanning all the time buckets > 07:00."}),"\n",(0,n.jsx)(t.h2,{id:"file-management",children:"File management"}),"\n",(0,n.jsxs)(t.p,{children:["Hudi organizes a table into a directory structure under a ",(0,n.jsx)(t.code,{children:"basepath"})," on DFS. Table is broken up into partitions, which are folders containing data files for that partition,\nvery similar to Hive tables. Each partition is uniquely identified by its ",(0,n.jsx)(t.code,{children:"partitionpath"}),", which is relative to the basepath."]}),"\n",(0,n.jsxs)(t.p,{children:["Within each partition, files are organized into ",(0,n.jsx)(t.code,{children:"file groups"}),", uniquely identified by a ",(0,n.jsx)(t.code,{children:"file id"}),". Each file group contains several\n",(0,n.jsx)(t.code,{children:"file slices"}),", where each slice contains a base file (",(0,n.jsx)(t.code,{children:"*.parquet"}),") produced at a certain commit/compaction instant time,\nalong with set of log files (",(0,n.jsx)(t.code,{children:"*.log.*"}),") that contain inserts/updates to the base file since the base file was produced.\nHudi adopts a MVCC design, where compaction action merges logs and base files to produce new file slices and cleaning action gets rid of\nunused/older file slices to reclaim space on DFS."]}),"\n",(0,n.jsx)(t.h2,{id:"index",children:"Index"}),"\n",(0,n.jsx)(t.p,{children:"Hudi provides efficient upserts, by mapping a given hoodie key (record key + partition path) consistently to a file id, via an indexing mechanism.\nThis mapping between record key and file group/file id, never changes once the first version of a record has been written to a file. In short, the\nmapped file group contains all versions of a group of records."}),"\n",(0,n.jsx)(t.h2,{id:"table-types--queries",children:"Table Types & Queries"}),"\n",(0,n.jsxs)(t.p,{children:["Hudi table types define how data is indexed & laid out on the DFS and how the above primitives and timeline activities are implemented on top of such organization (i.e how data is written).\nIn turn, ",(0,n.jsx)(t.code,{children:"query types"})," define how the underlying data is exposed to the queries (i.e how data is read)."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Table Type"}),(0,n.jsx)(t.th,{children:"Supported Query types"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Copy On Write"}),(0,n.jsx)(t.td,{children:"Snapshot Queries + Incremental Queries"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Merge On Read"}),(0,n.jsx)(t.td,{children:"Snapshot Queries + Incremental Queries + Read Optimized Queries"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"table-types",children:"Table Types"}),"\n",(0,n.jsx)(t.p,{children:"Hudi supports the following table types."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#copy-on-write-table",children:"Copy On Write"})," : Stores data using exclusively columnar file formats (e.g parquet). Updates simply version & rewrite the files by performing a synchronous merge during write."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#merge-on-read-table",children:"Merge On Read"})," : Stores data using a combination of columnar (e.g parquet) + row based (e.g avro) file formats. Updates are logged to delta files & later compacted to produce new versions of columnar files synchronously or asynchronously."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Following table summarizes the trade-offs between these two table types"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Trade-off"}),(0,n.jsx)(t.th,{children:"CopyOnWrite"}),(0,n.jsx)(t.th,{children:"MergeOnRead"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Data Latency"}),(0,n.jsx)(t.td,{children:"Higher"}),(0,n.jsx)(t.td,{children:"Lower"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Update cost (I/O)"}),(0,n.jsx)(t.td,{children:"Higher (rewrite entire parquet)"}),(0,n.jsx)(t.td,{children:"Lower (append to delta log)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Parquet File Size"}),(0,n.jsx)(t.td,{children:"Smaller (high update(I/0) cost)"}),(0,n.jsx)(t.td,{children:"Larger (low update cost)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Write Amplification"}),(0,n.jsx)(t.td,{children:"Higher"}),(0,n.jsx)(t.td,{children:"Lower (depending on compaction strategy)"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"query-types",children:"Query types"}),"\n",(0,n.jsx)(t.p,{children:"Hudi supports the following query types"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Snapshot Queries"})," : Queries see the latest snapshot of the table as of a given commit or compaction action. In case of merge on read table, it exposes near-real time data(few mins) by merging\nthe base and delta files of the latest file slice on-the-fly. For copy on write table,  it provides a drop-in replacement for existing parquet tables, while providing upsert/delete and other write side features."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Incremental Queries"})," : Queries only see new data written to the table, since a given commit/compaction. This effectively provides change streams to enable incremental data pipelines."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Read Optimized Queries"})," : Queries see the latest snapshot of table as of a given commit/compaction action. Exposes only the base/columnar files in latest file slices and guarantees the\nsame columnar query performance compared to a non-hudi columnar table."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Following table summarizes the trade-offs between the different query types."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Trade-off"}),(0,n.jsx)(t.th,{children:"Snapshot"}),(0,n.jsx)(t.th,{children:"Read Optimized"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Data Latency"}),(0,n.jsx)(t.td,{children:"Lower"}),(0,n.jsx)(t.td,{children:"Higher"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Query Latency"}),(0,n.jsx)(t.td,{children:"Higher (merge base / columnar file + row based delta / log files)"}),(0,n.jsx)(t.td,{children:"Lower (raw base / columnar file performance)"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"copy-on-write-table",children:"Copy On Write Table"}),"\n",(0,n.jsx)(t.p,{children:"File slices in Copy-On-Write table only contain the base/columnar file and each commit produces new versions of base files.\nIn other words, we implicitly compact on every commit, such that only columnar data exists. As a result, the write amplification\n(number of bytes written for 1 byte of incoming data) is much higher, where read amplification is zero.\nThis is a much desired property for analytical workloads, which is predominantly read-heavy."}),"\n",(0,n.jsx)(t.p,{children:"Following illustrates how this works conceptually, when data written into copy-on-write table  and two queries running on top of it."}),"\n",(0,n.jsx)("figure",{children:(0,n.jsx)("img",{className:"docimage",src:"/assets/images/hudi_cow.png",alt:"hudi_cow.png"})}),"\n",(0,n.jsxs)(t.p,{children:["As data gets written, updates to existing file groups produce a new slice for that file group stamped with the commit instant time,\nwhile inserts allocate a new file group and write its first slice for that file group. These file slices and their commit instant times are color coded above.\nSQL queries running against such a table (eg: ",(0,n.jsx)(t.code,{children:"select count(*)"})," counting the total records in that partition), first checks the timeline for the latest commit\nand filters all but latest file slices of each file group. As you can see, an old query does not see the current inflight commit's files color coded in pink,\nbut a new query starting after the commit picks up the new data. Thus queries are immune to any write failures/partial writes and only run on committed data."]}),"\n",(0,n.jsx)(t.p,{children:"The intention of copy on write table, is to fundamentally improve how tables are managed today through"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"First class support for atomically updating data at file-level, instead of rewriting whole tables/partitions"}),"\n",(0,n.jsx)(t.li,{children:"Ability to incremental consume changes, as opposed to wasteful scans or fumbling with heuristics"}),"\n",(0,n.jsx)(t.li,{children:"Tight control of file sizes to keep query performance excellent (small files hurt query performance considerably)."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"merge-on-read-table",children:"Merge On Read Table"}),"\n",(0,n.jsx)(t.p,{children:"Merge on read table is a superset of copy on write, in the sense it still supports read optimized queries of the table by exposing only the base/columnar files in latest file slices.\nAdditionally, it stores incoming upserts for each file group, onto a row based delta log, to support snapshot queries by applying the delta log,\nonto the latest version of each file id on-the-fly during query time. Thus, this table type attempts to balance read and write amplification intelligently, to provide near real-time data.\nThe most significant change here, would be to the compactor, which now carefully chooses which delta log files need to be compacted onto\ntheir columnar base file, to keep the query performance in check (larger delta log files would incur longer merge times with merge data on query side)"}),"\n",(0,n.jsx)(t.p,{children:"Following illustrates how the table works, and shows two types of queries - snapshot query and read optimized query."}),"\n",(0,n.jsx)("figure",{children:(0,n.jsx)("img",{className:"docimage",src:"/assets/images/hudi_mor.png",alt:"hudi_mor.png"})}),"\n",(0,n.jsx)(t.p,{children:"There are lot of interesting things happening in this example, which bring out the subtleties in the approach."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"We now have commits every 1 minute or so, something we could not do in the other table type."}),"\n",(0,n.jsx)(t.li,{children:"Within each file id group, now there is an delta log file, which holds incoming updates to the records already present in the base columnar files. In the example, the delta log files hold\nall the data from 10:05 to 10:10. The base columnar files are still versioned with the commit, as before.\nThus, if one were to simply look at base files alone, then the table layout looks exactly like a copy on write table."}),"\n",(0,n.jsx)(t.li,{children:"A periodic compaction process reconciles these changes from the delta log and produces a new version of base file, just like what happened at 10:05 in the example."}),"\n",(0,n.jsx)(t.li,{children:"There are two ways of querying the same underlying table: Read Optimized query and Snapshot query, depending on whether we chose query performance or freshness of data."}),"\n",(0,n.jsx)(t.li,{children:"The semantics around when data from a commit is available to a query changes in a subtle way for a read optimized query. Note, that such a query\nrunning at 10:10, wont see data after 10:05 above, while a snapshot query always sees the freshest data."}),"\n",(0,n.jsx)(t.li,{children:"When we trigger compaction & what it decides to compact hold all the key to solving these hard problems. By implementing a compacting\nstrategy, where we aggressively compact the latest partitions compared to older partitions, we could ensure the read optimized queries see data\npublished within X minutes in a consistent fashion."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The intention of merge on read table is to enable near real-time processing directly on top of DFS, as opposed to copying\ndata out to specialized systems, which may not be able to handle the data volume. There are also a few secondary side benefits to\nthis table such as reduced write amplification by avoiding synchronous merge of data, i.e, the amount of data written per 1 bytes of data in a batch"})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>r});var n=i(96540);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);
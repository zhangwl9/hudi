"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[62957],{94196:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var t=i(74848),a=i(28453);const s={title:"Performance",keywords:["hudi","index","storage","compaction","cleaning","implementation"],toc:!1,last_modified_at:new Date("2019-12-30T19:59:57.000Z")},o=void 0,r={id:"performance",title:"Performance",description:"Optimized DFS Access",source:"@site/versioned_docs/version-0.12.2/performance.md",sourceDirName:".",slug:"/performance",permalink:"/docs/0.12.2/performance",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.2/performance.md",tags:[],version:"0.12.2",frontMatter:{title:"Performance",keywords:["hudi","index","storage","compaction","cleaning","implementation"],toc:!1,last_modified_at:"2019-12-30T19:59:57.000Z"},sidebar:"docs",previous:{title:"Query Engine Setup",permalink:"/docs/0.12.2/query_engine_setup"},next:{title:"Deployment",permalink:"/docs/0.12.2/deployment"}},l={},d=[{value:"Optimized DFS Access",id:"optimized-dfs-access",level:2},{value:"Performance Optimizations",id:"performance-optimizations",level:2},{value:"Write Path",id:"write-path",level:3},{value:"Bulk Insert",id:"bulk-insert",level:4},{value:"Upserts",id:"upserts",level:4},{value:"Indexing",id:"indexing",level:4},{value:"Read Path",id:"read-path",level:3},{value:"Data Skipping",id:"data-skipping",level:4}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"optimized-dfs-access",children:"Optimized DFS Access"}),"\n",(0,t.jsx)(n.p,{children:"Hudi also performs several key storage management functions on the data stored in a Hudi table. A key aspect of storing data on DFS is managing file sizes and counts\nand reclaiming storage space. For e.g HDFS is infamous for its handling of small files, which exerts memory/RPC pressure on the Name Node and can potentially destabilize\nthe entire cluster. In general, query engines provide much better performance on adequately sized columnar files, since they can effectively amortize cost of obtaining\ncolumn statistics etc. Even on some cloud data stores, there is often cost to listing directories with large number of small files."}),"\n",(0,t.jsx)(n.p,{children:"Here are some ways to efficiently manage the storage of your Hudi tables."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.a,{href:"/docs/configurations/#hoodieparquetsmallfilelimit",children:"small file handling feature"})," in Hudi, profiles incoming workload\nand distributes inserts to existing file groups instead of creating new file groups, which can lead to small files."]}),"\n",(0,t.jsxs)(n.li,{children:["Cleaner can be ",(0,t.jsx)(n.a,{href:"/docs/configurations#hoodiecleanercommitsretained",children:"configured"})," to clean up older file slices, more or less aggressively depending on maximum time for queries to run & lookback needed for incremental pull"]}),"\n",(0,t.jsxs)(n.li,{children:["User can also tune the size of the ",(0,t.jsx)(n.a,{href:"/docs/configurations#hoodieparquetmaxfilesize",children:"base/parquet file"}),", ",(0,t.jsx)(n.a,{href:"/docs/configurations#hoodielogfilemaxsize",children:"log files"})," & expected ",(0,t.jsx)(n.a,{href:"/docs/configurations#hoodieparquetcompressionratio",children:"compression ratio"}),",\nsuch that sufficient number of inserts are grouped into the same file group, resulting in well sized base files ultimately."]}),"\n",(0,t.jsxs)(n.li,{children:["Intelligently tuning the ",(0,t.jsx)(n.a,{href:"/docs/configurations#hoodiebulkinsertshuffleparallelism",children:"bulk insert parallelism"}),", can again in nicely sized initial file groups. It is in fact critical to get this right, since the file groups\nonce created cannot be changed without re-clustering the table. Writes will simply expand given file groups with new updates/inserts as explained before."]}),"\n",(0,t.jsxs)(n.li,{children:["For workloads with heavy updates, the ",(0,t.jsx)(n.a,{href:"/docs/concepts#merge-on-read-table",children:"merge-on-read table"})," provides a nice mechanism for ingesting quickly into smaller files and then later merging them into larger base files via compaction."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"performance-optimizations",children:"Performance Optimizations"}),"\n",(0,t.jsx)(n.p,{children:"In this section, we go over some real world performance numbers for Hudi upserts, incremental pull and compare them against\nthe conventional alternatives for achieving these tasks."}),"\n",(0,t.jsx)(n.h3,{id:"write-path",children:"Write Path"}),"\n",(0,t.jsx)(n.h4,{id:"bulk-insert",children:"Bulk Insert"}),"\n",(0,t.jsx)(n.p,{children:"Write configurations in Hudi are optimized for incremental upserts by default. In fact, the default write operation type is UPSERT as well.\nFor simple append-only use case to bulk load the data, following set of configurations are recommended for optimal writing:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"-- Use \u201cbulk-insert\u201d write-operation instead of default \u201cupsert\u201d\nhoodie.datasource.write.operation = BULK_INSERT\n-- Disable populating meta columns and metadata, and enable virtual keys\nhoodie.populate.meta.fields = false\nhoodie.metadata.enable = false\n-- Enable snappy compression codec for lesser CPU cycles (but more storage overhead)\nhoodie.parquet.compression.codec = snappy\n"})}),"\n",(0,t.jsx)(n.p,{children:"For ingesting via spark-sql"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"-- Use \u201cbulk-insert\u201d write-operation instead of default \u201cupsert\u201d\nhoodie.sql.insert.mode = non-strict,\nhoodie.sql.bulk.insert.enable = true,\n-- Disable populating meta columns and metadata, and enable virtual keys\nhoodie.populate.meta.fields = false\nhoodie.metadata.enable = false\n-- Enable snappy compression codec for lesser CPU cycles (but more storage overhead)\nhoodie.parquet.compression.codec = snappy\n"})}),"\n",(0,t.jsxs)(n.p,{children:["We recently benchmarked Hudi against TPC-DS workload.\nPlease check out ",(0,t.jsx)(n.a,{href:"/blog/2022/06/29/Apache-Hudi-vs-Delta-Lake-transparent-tpc-ds-lakehouse-performance-benchmarks",children:"our blog"})," for more details."]}),"\n",(0,t.jsx)(n.h4,{id:"upserts",children:"Upserts"}),"\n",(0,t.jsx)(n.p,{children:"Following shows the speed up obtained for NoSQL database ingestion, from incrementally upserting on a Hudi table on the copy-on-write storage,\non 5 tables ranging from small to huge (as opposed to bulk loading the tables)"}),"\n",(0,t.jsx)("figure",{children:(0,t.jsx)("img",{className:"docimage",src:i(63490).A,alt:"hudi_upsert_perf1.png"})}),"\n",(0,t.jsx)(n.p,{children:"Given Hudi can build the table incrementally, it opens doors for also scheduling ingesting more frequently thus reducing latency, with\nsignificant savings on the overall compute cost."}),"\n",(0,t.jsx)("figure",{children:(0,t.jsx)("img",{className:"docimage",src:i(19577).A,alt:"hudi_upsert_perf2.png"})}),"\n",(0,t.jsxs)(n.p,{children:["Hudi upserts have been stress tested upto 4TB in a single commit across the t1 table.\nSee ",(0,t.jsx)(n.a,{href:"https://cwiki.apache.org/confluence/display/HUDI/Tuning+Guide",children:"here"})," for some tuning tips."]}),"\n",(0,t.jsx)(n.h4,{id:"indexing",children:"Indexing"}),"\n",(0,t.jsx)(n.p,{children:"In order to efficiently upsert data, Hudi needs to classify records in a write batch into inserts & updates (tagged with the file group\nit belongs to). In order to speed this operation, Hudi employs a pluggable index mechanism that stores a mapping between recordKey and\nthe file group id it belongs to. By default, Hudi uses a built in index that uses file ranges and bloom filters to accomplish this, with\nupto 10x speed up over a spark join to do the same."}),"\n",(0,t.jsxs)(n.p,{children:["Hudi provides best indexing performance when you model the recordKey to be monotonically increasing (e.g timestamp prefix), leading to range pruning filtering\nout a lot of files for comparison. Even for UUID based keys, there are ",(0,t.jsx)(n.a,{href:"https://www.percona.com/blog/2014/12/19/store-uuid-optimized-way/",children:"known techniques"})," to achieve this.\nFor e.g , with 100M timestamp prefixed keys (5% updates, 95% inserts) on a event table with 80B keys/3 partitions/11416 files/10TB data, Hudi index achieves a\n",(0,t.jsx)(n.strong,{children:"~7X (2880 secs vs 440 secs) speed up"})," over vanilla spark join. Even for a challenging workload like an '100% update' database ingestion workload spanning\n3.25B UUID keys/30 partitions/6180 files using 300 cores, Hudi indexing offers a ",(0,t.jsx)(n.strong,{children:"80-100% speedup"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"read-path",children:"Read Path"}),"\n",(0,t.jsx)(n.h4,{id:"data-skipping",children:"Data Skipping"}),"\n",(0,t.jsx)(n.p,{children:"Data Skipping is a technique (originally introduced in Hudi 0.10) that leverages metadata to very effectively prune the search space of a query,\nby eliminating files that cannot possibly contain data matching the query's filters. By maintaining this metadata in the internal Hudi metadata table,\nHudi avoids reading file footers to obtain this information, which can be costly for queries spanning tens of thousands of files."}),"\n",(0,t.jsxs)(n.p,{children:["Data Skipping leverages metadata table's ",(0,t.jsx)(n.code,{children:"col_stats"})," partition bearing column-level statistics (such as min-value, max-value, count of null-values in the column, etc)\nfor every file of the Hudi table. This then allows Hudi for every incoming query instead of enumerating every file in the table and reading its corresponding metadata\n(for ex, Parquet footers) for analysis whether it could contain any data matching the query filters, to simply do a query against a Column Stats Index\nin the Metadata Table (which in turn is a Hudi table itself) and within seconds (even for TBs scale tables, with 10s of thousands of files) obtain the list\nof ",(0,t.jsx)(n.em,{children:"all the files that might potentially contain the data"})," matching query's filters with crucial property that files that could be ruled out as not containing such data\n(based on their column-level statistics) will be stripped out. See ",(0,t.jsx)(n.a,{href:"https://github.com/apache/hudi/blob/master/rfc/rfc-27/rfc-27.md",children:"RFC-27"})," for detailed design."]}),"\n",(0,t.jsx)(n.p,{children:"Partitioning can be considered a coarse form of indexing and data skipping using the col_stats partition can be thought of as a range index, that databases use to identify potential\nblocks of data interesting to a query. Unlike partition pruning for tables using physical partitioning where records in the dataset are organized into a folder structure based\non some column's value, data skipping using col_stats delivers a logical/virtual partitioning."}),"\n",(0,t.jsx)(n.p,{children:"For very large tables (1Tb+, 10s of 1000s of files), Data skipping could"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Substantially improve query execution runtime ",(0,t.jsx)(n.strong,{children:"10x"})," as compared to the same query on the same dataset but w/o Data Skipping enabled."]}),"\n",(0,t.jsx)(n.li,{children:"Help avoid hitting Cloud Storages throttling limits (for issuing too many requests, for ex, AWS limits # of requests / sec that could be issued based on the object's prefix which considerably complicates things for partitioned tables)"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To unlock the power of Data Skipping you will need to"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Enable Metadata Table along with Column Stats Index on the ",(0,t.jsx)(n.em,{children:"write path"})," (See ",(0,t.jsx)(n.a,{href:"/docs/metadata_indexing",children:"Metadata Indexing"}),"), using ",(0,t.jsx)(n.code,{children:"hoodie.metadata.enable=true"})," (to enable Metadata Table on the write path, enabled by default)"]}),"\n",(0,t.jsxs)(n.li,{children:["Enable Data Skipping in your queries, using ",(0,t.jsx)(n.code,{children:"hoodie.metadata.index.column.stats.enable=true"})," (to enable Column Stats Index being populated on the write path, disabled by default)"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If you're planning on enabling Column Stats Index for already existing table, please check out the ",(0,t.jsx)(n.a,{href:"/docs/metadata_indexing",children:"Metadata Indexing"})," guide on how to build Metadata Table Indices (such as Column Stats Index) for existing tables."]})}),"\n",(0,t.jsxs)(n.p,{children:["To enable Data Skipping in your queries make sure to set following properties to ",(0,t.jsx)(n.code,{children:"true"})," (on the read path):"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"hoodie.enable.data.skipping"})," (to enable Data Skipping)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"hoodie.metadata.enable"})," (to enable Metadata Table use on the read path)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"hoodie.metadata.index.column.stats.enable"})," (to enable Column Stats Index use on the read path)"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},63490:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/hudi_upsert_perf1-8f41921dacb5fb026f1e5457f8c47aa6.png"},19577:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/hudi_upsert_perf2-d4bfcab4e9e8d942a02b712797ee2755.png"},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var t=i(96540);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
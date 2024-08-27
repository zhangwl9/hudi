"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[83203],{67048:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=n(74848),s=n(28453);const o={title:"File Sizing",toc:!0},r=void 0,a={id:"file_sizing",title:"File Sizing",description:"This doc will show you how Apache Hudi overcomes the dreaded small files problem. A key design decision in Hudi was to",source:"@site/versioned_docs/version-0.12.3/file_sizing.md",sourceDirName:".",slug:"/file_sizing",permalink:"/docs/0.12.3/file_sizing",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.3/file_sizing.md",tags:[],version:"0.12.3",frontMatter:{title:"File Sizing",toc:!0},sidebar:"docs",previous:{title:"Marker Mechanism",permalink:"/docs/0.12.3/markers"},next:{title:"Disaster Recovery",permalink:"/docs/0.12.3/disaster_recovery"}},l={},d=[{value:"Auto-Size During ingestion",id:"auto-size-during-ingestion",level:2},{value:"For Copy-On-Write",id:"for-copy-on-write",level:3},{value:"For Merge-On-Read",id:"for-merge-on-read",level:3},{value:"Auto-Size With Clustering",id:"auto-size-with-clustering",level:2}];function c(e){const i={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"This doc will show you how Apache Hudi overcomes the dreaded small files problem. A key design decision in Hudi was to\navoid creating small files in the first place and always write properly sized files.\nThere are 2 ways to manage small files in Hudi and below will describe the advantages and trade-offs of each."}),"\n",(0,t.jsx)(i.h2,{id:"auto-size-during-ingestion",children:"Auto-Size During ingestion"}),"\n",(0,t.jsx)(i.p,{children:"You can automatically manage size of files during ingestion. This solution adds a little latency during ingestion, but\nit ensures that read queries are always efficient as soon as a write is committed. If you don't\nmanage file sizing as you write and instead try to periodically run a file-sizing clean-up, your queries will be slow until that resize cleanup is periodically performed."}),"\n",(0,t.jsxs)(i.p,{children:["(Note: ",(0,t.jsx)(i.a,{href:"/docs/write_operations",children:"bulk_insert"})," write operation does not provide auto-sizing during ingestion)"]}),"\n",(0,t.jsx)(i.h3,{id:"for-copy-on-write",children:"For Copy-On-Write"}),"\n",(0,t.jsxs)(i.p,{children:["This is as simple as configuring the ",(0,t.jsx)(i.a,{href:"/docs/configurations#hoodieparquetmaxfilesize",children:"maximum size for a base/parquet file"}),"\nand the ",(0,t.jsx)(i.a,{href:"/docs/configurations#hoodieparquetsmallfilelimit",children:"soft limit"})," below which a file should\nbe considered a small file. For the initial bootstrap of a Hudi table, tuning record size estimate is also important to\nensure sufficient records are bin-packed in a parquet file. For subsequent writes, Hudi automatically uses average\nrecord size based on previous commit. Hudi will try to add enough records to a small file at write time to get it to the\nconfigured maximum limit. For e.g , with ",(0,t.jsx)(i.code,{children:"compactionSmallFileSize=100MB"})," and limitFileSize=120MB, Hudi will pick all\nfiles < 100MB and try to get them upto 120MB."]}),"\n",(0,t.jsx)(i.h3,{id:"for-merge-on-read",children:"For Merge-On-Read"}),"\n",(0,t.jsx)(i.p,{children:"MergeOnRead works differently for different INDEX choices so there are few more configs to set:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Indexes with ",(0,t.jsx)(i.strong,{children:"canIndexLogFiles = true"})," : Inserts of new data go directly to log files. In this case, you can\nconfigure the ",(0,t.jsx)(i.a,{href:"/docs/configurations#hoodielogfilemaxsize",children:"maximum log size"})," and a\n",(0,t.jsx)(i.a,{href:"/docs/configurations#hoodielogfiletoparquetcompressionratio",children:"factor"})," that denotes reduction in\nsize when data moves from avro to parquet files."]}),"\n",(0,t.jsxs)(i.li,{children:["Indexes with ",(0,t.jsx)(i.strong,{children:"canIndexLogFiles = false"})," : Inserts of new data go only to parquet files. In this case, the\nsame configurations as above for the COPY_ON_WRITE case applies."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"NOTE : In either case, small files will be auto sized only if there is no PENDING compaction or associated log file for\nthat particular file slice. For example, for case 1: If you had a log file and a compaction C1 was scheduled to convert\nthat log file to parquet, no more inserts can go into that log file. For case 2: If you had a parquet file and an update\nended up creating an associated delta log file, no more inserts can go into that parquet file. Only after the compaction\nhas been performed and there are NO log files associated with the base parquet file, can new inserts be sent to auto size that parquet file."}),"\n",(0,t.jsx)(i.h2,{id:"auto-size-with-clustering",children:"Auto-Size With Clustering"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"/docs/clustering",children:"Clustering"})})," is a feature in Hudi to group\nsmall files into larger ones either synchronously or asynchronously. Since first solution of auto-sizing small files has\na tradeoff on ingestion speed (since the small files are sized during ingestion), if your use-case is very sensitive to\ningestion latency where you don't want to compromise on ingestion speed which may end up creating a lot of small files,\nclustering comes to the rescue. Clustering can be scheduled through the ingestion job and an asynchronus job can stitch\nsmall files together in the background to generate larger files. NOTE that during this, ingestion can continue to run concurrently."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsxs)(i.em,{children:["Please note that Hudi always creates immutable files on disk. To be able to do auto-sizing or clustering, Hudi will\nalways create a newer version of the smaller file, resulting in 2 versions of the same file.\nThe ",(0,t.jsx)(i.a,{href:"/docs/hoodie_cleaner",children:"cleaner service"})," will later kick in and delete the older version small file and keep the latest one."]})})]})}function u(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>a});var t=n(96540);const s={},o=t.createContext(s);function r(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);
"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[16747],{63444:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=i(74848),t=i(28453);const r={version:"0.5.0",title:"Performance",keywords:["hudi","index","storage","compaction","cleaning","implementation"],toc:!1,last_modified_at:new Date("2019-12-30T19:59:57.000Z")},o=void 0,a={id:"performance",title:"Performance",description:"In this section, we go over some real world performance numbers for Hudi upserts, incremental pull and compare them against",source:"@site/versioned_docs/version-0.5.0/performance.md",sourceDirName:".",slug:"/performance",permalink:"/docs/0.5.0/performance",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.5.0/performance.md",tags:[],version:"0.5.0",frontMatter:{version:"0.5.0",title:"Performance",keywords:["hudi","index","storage","compaction","cleaning","implementation"],toc:!1,last_modified_at:"2019-12-30T19:59:57.000Z"},sidebar:"docs",previous:{title:"Configurations",permalink:"/docs/0.5.0/configurations"},next:{title:"S3 Filesystem",permalink:"/docs/0.5.0/s3_hoodie"}},d={},c=[{value:"Upserts",id:"upserts",level:2},{value:"Indexing",id:"indexing",level:2},{value:"Read Optimized Queries",id:"read-optimized-queries",level:2}];function l(e){const n={a:"a",h2:"h2",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"In this section, we go over some real world performance numbers for Hudi upserts, incremental pull and compare them against\nthe conventional alternatives for achieving these tasks."}),"\n",(0,s.jsx)(n.h2,{id:"upserts",children:"Upserts"}),"\n",(0,s.jsx)(n.p,{children:"Following shows the speed up obtained for NoSQL database ingestion, from incrementally upserting on a Hudi dataset on the copy-on-write storage,\non 5 tables ranging from small to huge (as opposed to bulk loading the tables)"}),"\n",(0,s.jsx)("figure",{children:(0,s.jsx)("img",{className:"docimage",src:"/assets/images/hudi_upsert_perf1.png",alt:"hudi_upsert_perf1.png"})}),"\n",(0,s.jsx)(n.p,{children:"Given Hudi can build the dataset incrementally, it opens doors for also scheduling ingesting more frequently thus reducing latency, with\nsignificant savings on the overall compute cost."}),"\n",(0,s.jsx)("figure",{children:(0,s.jsx)("img",{className:"docimage",src:"/assets/images/hudi_upsert_perf2.png",alt:"hudi_upsert_perf2.png"})}),"\n",(0,s.jsxs)(n.p,{children:["Hudi upserts have been stress tested upto 4TB in a single commit across the t1 table.\nSee ",(0,s.jsx)(n.a,{href:"https://cwiki.apache.org/confluence/display/HUDI/Tuning+Guide",children:"here"})," for some tuning tips."]}),"\n",(0,s.jsx)(n.h2,{id:"indexing",children:"Indexing"}),"\n",(0,s.jsx)(n.p,{children:"In order to efficiently upsert data, Hudi needs to classify records in a write batch into inserts & updates (tagged with the file group\nit belongs to). In order to speed this operation, Hudi employs a pluggable index mechanism that stores a mapping between recordKey and\nthe file group id it belongs to. By default, Hudi uses a built in index that uses file ranges and bloom filters to accomplish this, with\nupto 10x speed up over a spark join to do the same."}),"\n",(0,s.jsxs)(n.p,{children:["Hudi provides best indexing performance when you model the recordKey to be monotonically increasing (e.g timestamp prefix), leading to range pruning filtering\nout a lot of files for comparison. Even for UUID based keys, there are ",(0,s.jsx)(n.a,{href:"https://www.percona.com/blog/2014/12/19/store-uuid-optimized-way/",children:"known techniques"})," to achieve this.\nFor e.g , with 100M timestamp prefixed keys (5% updates, 95% inserts) on a event table with 80B keys/3 partitions/11416 files/10TB data, Hudi index achieves a\n",(0,s.jsx)(n.strong,{children:"~7X (2880 secs vs 440 secs) speed up"})," over vanilla spark join. Even for a challenging workload like an '100% update' database ingestion workload spanning\n3.25B UUID keys/30 partitions/6180 files using 300 cores, Hudi indexing offers a ",(0,s.jsx)(n.strong,{children:"80-100% speedup"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"read-optimized-queries",children:"Read Optimized Queries"}),"\n",(0,s.jsx)(n.p,{children:"The major design goal for read optimized view is to achieve the latency reduction & efficiency gains in previous section,\nwith no impact on queries. Following charts compare the Hudi vs non-Hudi datasets across Hive/Presto/Spark queries and demonstrate this."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Hive"})}),"\n",(0,s.jsx)("figure",{children:(0,s.jsx)("img",{className:"docimage",src:"/assets/images/hudi_query_perf_hive.png",alt:"hudi_query_perf_hive.png"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Spark"})}),"\n",(0,s.jsx)("figure",{children:(0,s.jsx)("img",{className:"docimage",src:"/assets/images/hudi_query_perf_spark.png",alt:"hudi_query_perf_spark.png"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Presto"})}),"\n",(0,s.jsx)("figure",{children:(0,s.jsx)("img",{className:"docimage",src:"/assets/images/hudi_query_perf_presto.png",alt:"hudi_query_perf_presto.png"})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var s=i(96540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[62469],{354:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var s=r(74848),a=r(28453);const n={title:"Structure",keywords:["big data","stream processing","cloud","hdfs","storage","upserts","change capture"],summary:"Hudi brings stream processing to big data, providing fresh data while being an order of magnitude efficient over traditional batch processing.",last_modified_at:new Date("2019-12-30T19:59:57.000Z")},o=void 0,i={id:"structure",title:"Structure",description:"Hudi (pronounced \u201cHoodie\u201d) ingests & manages storage of large analytical tables over DFS (HDFS or cloud stores) and provides three types of queries.",source:"@site/versioned_docs/version-0.13.0/structure.md",sourceDirName:".",slug:"/structure",permalink:"/cn/docs/0.13.0/structure",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.13.0/structure.md",tags:[],version:"0.13.0",frontMatter:{title:"Structure",keywords:["big data","stream processing","cloud","hdfs","storage","upserts","change capture"],summary:"Hudi brings stream processing to big data, providing fresh data while being an order of magnitude efficient over traditional batch processing.",last_modified_at:"2019-12-30T19:59:57.000Z"}},c={},d=[];function u(e){const t={a:"a",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Hudi (pronounced \u201cHoodie\u201d) ingests & manages storage of large analytical tables over DFS (",(0,s.jsx)(t.a,{href:"http://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-hdfs/HdfsDesign",children:"HDFS"})," or cloud stores) and provides three types of queries."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Read Optimized query"})," - Provides excellent query performance on pure columnar storage, much like plain ",(0,s.jsx)(t.a,{href:"https://parquet.apache.org/",children:"Parquet"})," tables."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Incremental query"})," - Provides a change stream out of the dataset to feed downstream jobs/ETLs."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Snapshot query"})," - Provides queries on real-time data, using a combination of columnar & row based storage (e.g Parquet + ",(0,s.jsx)(t.a,{href:"http://avro.apache.org/docs/current/mr",children:"Avro"}),")"]}),"\n"]}),"\n",(0,s.jsx)("figure",{children:(0,s.jsx)("img",{className:"docimage",src:r(98544).A,alt:"hudi_intro_1.png"})}),"\n",(0,s.jsxs)(t.p,{children:["By carefully managing how data is laid out in storage & how it\u2019s exposed to queries, Hudi is able to power a rich data ecosystem where external sources can be ingested in near real-time and made available for interactive SQL Engines like ",(0,s.jsx)(t.a,{href:"https://prestodb.io",children:"PrestoDB"})," & ",(0,s.jsx)(t.a,{href:"https://spark.apache.org/sql/",children:"Spark"}),", while at the same time capable of being consumed incrementally from processing/ETL frameworks like ",(0,s.jsx)(t.a,{href:"https://hive.apache.org/",children:"Hive"})," & ",(0,s.jsx)(t.a,{href:"https://spark.apache.org/docs/latest/",children:"Spark"})," to build derived (Hudi) tables."]}),"\n",(0,s.jsxs)(t.p,{children:["Hudi broadly consists of a self contained Spark library to build tables and integrations with existing query engines for data access. See ",(0,s.jsx)(t.a,{href:"/docs/quick-start-guide",children:"quickstart"})," for a demo."]})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},98544:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/hudi_intro_1-802c5b502d13c9b2a25b8e65c8cf27fd.png"},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var s=r(96540);const a={},n=s.createContext(a);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);
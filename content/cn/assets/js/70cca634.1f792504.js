"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[59680],{8568:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>n,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=t(74848),a=t(28453);const i={version:"0.8.0",title:"Structure",keywords:["big data","stream processing","cloud","hdfs","storage","upserts","change capture"],summary:"Hudi brings stream processing to big data, providing fresh data while being an order of magnitude efficient over traditional batch processing.",last_modified_at:new Date("2019-12-30T19:59:57.000Z")},n=void 0,o={id:"structure",title:"Structure",description:"Hudi (pronounced \u201cHoodie\u201d) ingests & manages storage of large analytical tables over DFS (HDFS or cloud stores) and provides three types of queries.",source:"@site/versioned_docs/version-0.8.0/structure.md",sourceDirName:".",slug:"/structure",permalink:"/cn/docs/0.8.0/structure",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.8.0/structure.md",tags:[],version:"0.8.0",frontMatter:{version:"0.8.0",title:"Structure",keywords:["big data","stream processing","cloud","hdfs","storage","upserts","change capture"],summary:"Hudi brings stream processing to big data, providing fresh data while being an order of magnitude efficient over traditional batch processing.",last_modified_at:"2019-12-30T19:59:57.000Z"}},d={},c=[];function u(e){const r={a:"a",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["Hudi (pronounced \u201cHoodie\u201d) ingests & manages storage of large analytical tables over DFS (",(0,s.jsx)(r.a,{href:"http://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-hdfs/HdfsDesign",children:"HDFS"})," or cloud stores) and provides three types of queries."]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Read Optimized query"})," - Provides excellent query performance on pure columnar storage, much like plain ",(0,s.jsx)(r.a,{href:"https://parquet.apache.org/",children:"Parquet"})," tables."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Incremental query"})," - Provides a change stream out of the dataset to feed downstream jobs/ETLs."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Snapshot query"})," - Provides queries on real-time data, using a combination of columnar & row based storage (e.g Parquet + ",(0,s.jsx)(r.a,{href:"http://avro.apache.org/docs/current/mr",children:"Avro"}),")"]}),"\n"]}),"\n",(0,s.jsx)("figure",{children:(0,s.jsx)("img",{className:"docimage",src:"/assets/images/hudi_intro_1.png",alt:"hudi_intro_1.png"})}),"\n",(0,s.jsxs)(r.p,{children:["By carefully managing how data is laid out in storage & how it\u2019s exposed to queries, Hudi is able to power a rich data ecosystem where external sources can be ingested in near real-time and made available for interactive SQL Engines like ",(0,s.jsx)(r.a,{href:"https://prestodb.io",children:"PrestoDB"})," & ",(0,s.jsx)(r.a,{href:"https://spark.apache.org/sql/",children:"Spark"}),", while at the same time capable of being consumed incrementally from processing/ETL frameworks like ",(0,s.jsx)(r.a,{href:"https://hive.apache.org/",children:"Hive"})," & ",(0,s.jsx)(r.a,{href:"https://spark.apache.org/docs/latest/",children:"Spark"})," to build derived (Hudi) tables."]}),"\n",(0,s.jsxs)(r.p,{children:["Hudi broadly consists of a self contained Spark library to build tables and integrations with existing query engines for data access. See ",(0,s.jsx)(r.a,{href:"/docs/quick-start-guide",children:"quickstart"})," for a demo."]})]})}function l(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>n,x:()=>o});var s=t(96540);const a={},i=s.createContext(a);function n(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);
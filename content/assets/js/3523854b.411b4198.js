"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[60613],{18685:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var i=t(74848),r=t(28453);const s={title:"Query Engine Setup",summary:"In this page, we describe how to setup various query engines for Hudi.",toc:!0,last_modified_at:null},o=void 0,a={id:"query_engine_setup",title:"Query Engine Setup",description:"Spark",source:"@site/versioned_docs/version-0.9.0/query_engine_setup.md",sourceDirName:".",slug:"/query_engine_setup",permalink:"/docs/0.9.0/query_engine_setup",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.9.0/query_engine_setup.md",tags:[],version:"0.9.0",frontMatter:{title:"Query Engine Setup",summary:"In this page, we describe how to setup various query engines for Hudi.",toc:!0,last_modified_at:null}},d={},h=[{value:"Spark",id:"spark",level:2},{value:"PrestoDB",id:"prestodb",level:2},{value:"Trino",id:"trino",level:2},{value:"Hive",id:"hive",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"spark",children:"Spark"}),"\n",(0,i.jsxs)(n.p,{children:["The Spark Datasource API is a popular way of authoring Spark ETL pipelines. Hudi tables can be queried via the Spark datasource with a simple ",(0,i.jsx)(n.code,{children:"spark.read.parquet"}),".\nSee the ",(0,i.jsx)(n.a,{href:"/docs/quick-start-guide",children:"Spark Quick Start"})," for more examples of Spark datasource reading queries."]}),"\n",(0,i.jsxs)(n.p,{children:["If your Spark environment does not have the Hudi jars installed, add ",(0,i.jsx)(n.code,{children:"--jars <path to jar>/hudi-spark-bundle_2.11-<hudi version>.jar"})," to the classpath of drivers\nand executors. Alternatively, hudi-spark-bundle can also fetched via the ",(0,i.jsx)(n.code,{children:"--packages"})," options (e.g: ",(0,i.jsx)(n.code,{children:"--packages org.apache.hudi:hudi-spark-bundle_2.11:0.5.3"}),")."]}),"\n",(0,i.jsx)(n.h2,{id:"prestodb",children:"PrestoDB"}),"\n",(0,i.jsx)(n.p,{children:"PrestoDB is a popular query engine, providing interactive query performance. PrestoDB currently supports snapshot querying on COPY_ON_WRITE tables.\nBoth snapshot and read optimized queries are supported on MERGE_ON_READ Hudi tables. Since PrestoDB-Hudi integration has evolved over time, the installation\ninstructions for PrestoDB would vary based on versions. Please check the below table for query types supported and installation instructions\nfor different versions of PrestoDB."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"PrestoDB Version"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Installation description"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Query types supported"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"< 0.233"}),(0,i.jsxs)(n.td,{children:["Requires the ",(0,i.jsx)(n.code,{children:"hudi-presto-bundle"})," jar to be placed into ",(0,i.jsx)(n.code,{children:"<presto_install>/plugin/hive-hadoop2/"}),", across the installation."]}),(0,i.jsx)(n.td,{children:"Snapshot querying on COW tables. Read optimized querying on MOR tables."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:">= 0.233"}),(0,i.jsx)(n.td,{children:"No action needed. Hudi (0.5.1-incubating) is a compile time dependency."}),(0,i.jsx)(n.td,{children:"Snapshot querying on COW tables. Read optimized querying on MOR tables."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:">= 0.240"}),(0,i.jsx)(n.td,{children:"No action needed. Hudi 0.5.3 version is a compile time dependency."}),(0,i.jsx)(n.td,{children:"Snapshot querying on both COW and MOR tables"})]})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["We upgraded Hudi version from 0.5.3 to 0.9.0 in Presto 0.265 but that introduced a breaking dependency change in\nanother presto module. See ",(0,i.jsx)(n.a,{href:"https://github.com/prestodb/presto/issues/17164",children:"this issue"})," for more details. Since then,\nwe have ",(0,i.jsx)(n.a,{href:"https://github.com/apache/hudi/pull/4551",children:"fixed the hudi-presto-bundle"})," in version 0.10.1. Now, we need to\nupgrade Hudi in Presto again. This is being tracked by ",(0,i.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/HUDI-3010",children:"HUDI-3010"}),".\nOur suggestion is to avoid upgrading Presto until the issue is fixed. However, if this is not an option, then the\nworkaround is to download the hudi-presto-bundle jar from our ",(0,i.jsx)(n.a,{href:"https://mvnrepository.com/artifact/org.apache.hudi/hudi-presto-bundle",children:"maven repo"}),"\nand place it in ",(0,i.jsx)(n.code,{children:"<presto_install>/plugin/hive-hadoop2/"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"trino",children:"Trino"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://trino.io/",children:"Trino"})," (formerly PrestoSQL) was forked off of PrestoDB a few years ago. Hudi supports 'Snapshot' queries for Copy-On-Write tables and 'Read Optimized' queries\nfor Merge-On-Read tables. This is through the initial input format based integration in PrestoDB (pre forking). This approach has\nknown performance limitations with very large tables, which has been since fixed on PrestoDB. We are working on replicating the same fixes on Trino as well."]})}),"\n",(0,i.jsxs)(n.p,{children:["To query Hudi tables on Trino, please place the ",(0,i.jsx)(n.code,{children:"hudi-trino-bundle"})," jar into the Hive connector installation ",(0,i.jsx)(n.code,{children:"<trino_install>/plugin/hive-hadoop2"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"hive",children:"Hive"}),"\n",(0,i.jsx)(n.p,{children:"In order for Hive to recognize Hudi tables and query correctly,"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["the HiveServer2 needs to be provided with the ",(0,i.jsx)(n.code,{children:"hudi-hadoop-mr-bundle-x.y.z-SNAPSHOT.jar"})," in its ",(0,i.jsx)(n.a,{href:"https://www.cloudera.com/documentation/enterprise/5-6-x/topics/cm_mc_hive_udf#concept_nc3_mms_lr",children:"aux jars path"}),". This will ensure the input format\nclasses with its dependencies are available for query planning & execution."]}),"\n",(0,i.jsx)(n.li,{children:"For MERGE_ON_READ tables, additionally the bundle needs to be put on the hadoop/hive installation across the cluster, so that queries can pick up the custom RecordReader as well."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In addition to setup above, for beeline cli access, the ",(0,i.jsx)(n.code,{children:"hive.input.format"})," variable needs to be set to the fully qualified path name of the\ninputformat ",(0,i.jsx)(n.code,{children:"org.apache.hudi.hadoop.HoodieParquetInputFormat"}),". For Tez, additionally the ",(0,i.jsx)(n.code,{children:"hive.tez.input.format"})," needs to be set\nto ",(0,i.jsx)(n.code,{children:"org.apache.hadoop.hive.ql.io.HiveInputFormat"}),". Then proceed to query the table like any other Hive table."]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
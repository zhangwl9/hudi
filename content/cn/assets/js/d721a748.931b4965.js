"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[73891],{76126:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=i(74848),s=i(28453);const o={title:"File Layouts",toc:!0},a=void 0,r={id:"file_layouts",title:"File Layouts",description:"The following describes the general file layout structure for Apache Hudi",source:"@site/versioned_docs/version-0.10.0/file_layouts.md",sourceDirName:".",slug:"/file_layouts",permalink:"/cn/docs/0.10.0/file_layouts",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.10.0/file_layouts.md",tags:[],version:"0.10.0",frontMatter:{title:"File Layouts",toc:!0},sidebar:"docs",previous:{title:"Indexing",permalink:"/cn/docs/0.10.0/indexing"},next:{title:"Metadata Table",permalink:"/cn/docs/0.10.0/metadata"}},c={},l=[];function d(e){const t={a:"a",em:"em",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"The following describes the general file layout structure for Apache Hudi"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Hudi organizes data tables into a directory structure under a base path on a distributed file system"}),"\n",(0,n.jsx)(t.li,{children:"Tables are broken up into partitions"}),"\n",(0,n.jsx)(t.li,{children:"Within each partition, files are organized into file groups, uniquely identified by a file ID"}),"\n",(0,n.jsx)(t.li,{children:"Each file group contains several file slices"}),"\n",(0,n.jsxs)(t.li,{children:["Each slice contains a base file (",(0,n.jsx)(t.em,{children:".parquet) produced at a certain commit/compaction instant time, along with set of log files ("}),".log.*) that contain inserts/updates to the base file since the base file was produced."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Hudi adopts Multiversion Concurrency Control (MVCC), where ",(0,n.jsx)(t.a,{href:"/docs/compaction",children:"compaction"})," action merges logs and base files to produce new\nfile slices and ",(0,n.jsx)(t.a,{href:"/docs/hoodie_cleaner",children:"cleaning"})," action gets rid of unused/older file slices to reclaim space on the file system."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Partition On HDFS",src:i(99582).A+"",width:"1900",height:"920"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},99582:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/hudi_partitions_HDFS-5f9da4e0c57c9ee20b74b31c035ba0e6.png"},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>r});var n=i(96540);const s={},o=n.createContext(s);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);
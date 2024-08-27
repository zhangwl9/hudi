"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[47087],{59952:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var i=a(74848),n=a(28453);const o={title:"Optimize Data lake layout using Clustering in Apache Hudi",excerpt:"Introduce clustering feature to change data layout",author:"satish.kotha",category:"blog",image:"/assets/images/blog/2021-01-27-hudi-clustering-intro.png",tags:["design","clustering","apache hudi"]},r=void 0,s={permalink:"/blog/2021/01/27/hudi-clustering-intro",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-01-27-hudi-clustering-intro.md",source:"@site/blog/2021-01-27-hudi-clustering-intro.md",title:"Optimize Data lake layout using Clustering in Apache Hudi",description:"Background",date:"2021-01-27T00:00:00.000Z",tags:[{inline:!0,label:"design",permalink:"/blog/tags/design"},{inline:!0,label:"clustering",permalink:"/blog/tags/clustering"},{inline:!0,label:"apache hudi",permalink:"/blog/tags/apache-hudi"}],readingTime:5.705,hasTruncateMarker:!0,authors:[{name:"satish.kotha",key:null,page:null}],frontMatter:{title:"Optimize Data lake layout using Clustering in Apache Hudi",excerpt:"Introduce clustering feature to change data layout",author:"satish.kotha",category:"blog",image:"/assets/images/blog/2021-01-27-hudi-clustering-intro.png",tags:["design","clustering","apache hudi"]},unlisted:!1,prevItem:{title:"Apache Hudi Key Generators",permalink:"/blog/2021/02/13/hudi-key-generators"},nextItem:{title:"Building High-Performance Data Lake Using Apache Hudi and Alluxio at T3Go",permalink:"/blog/2020/12/01/high-perf-data-lake-with-hudi-and-alluxio-t3go"}},l={authorsImageUrls:[void 0]},u=[{value:"Background",id:"background",level:2}];function c(e){const t={a:"a",h2:"h2",p:"p",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"background",children:"Background"}),"\n",(0,i.jsxs)(t.p,{children:["Apache Hudi brings stream processing to big data, providing fresh data while being an order of magnitude efficient over traditional batch processing. In a data lake/warehouse, one of the key trade-offs is between ingestion speed and query performance. Data ingestion typically prefers small files to improve parallelism and make data available to queries as soon as possible. However, query performance degrades poorly with a lot of small files. Also, during ingestion, data is typically co-located based on arrival time. However, the query engines perform better when the data frequently queried is co-located together. In most architectures each of these systems tend to add optimizations independently to improve performance which hits limitations due to un-optimized data layouts. This blog introduces a new kind of table service called clustering ",(0,i.jsx)(t.a,{href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+19+Clustering+data+for+freshness+and+query+performance",children:"[RFC-19]"})," to reorganize data for improved query performance without compromising on ingestion speed."]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>s});var i=a(96540);const n={},o=i.createContext(n);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);
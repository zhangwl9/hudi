"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[12613],{47537:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(74848),i=a(28453);const r={title:"Adding support for Virtual Keys in Hudi",excerpt:"Supporting Virtual keys in Hudi for reducing storage overhead",author:"shivnarayan",category:"blog",tags:["design","metadata","apache hudi"]},o=void 0,s={permalink:"/cn/blog/2021/08/18/virtual-keys",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-08-18-virtual-keys.md",source:"@site/blog/2021-08-18-virtual-keys.md",title:"Adding support for Virtual Keys in Hudi",description:"Apache Hudi helps you build and manage data lakes with different table types, config knobs to cater to everyone's need.",date:"2021-08-18T00:00:00.000Z",tags:[{inline:!0,label:"design",permalink:"/cn/blog/tags/design"},{inline:!0,label:"metadata",permalink:"/cn/blog/tags/metadata"},{inline:!0,label:"apache hudi",permalink:"/cn/blog/tags/apache-hudi"}],readingTime:4.95,hasTruncateMarker:!0,authors:[{name:"shivnarayan",key:null,page:null}],frontMatter:{title:"Adding support for Virtual Keys in Hudi",excerpt:"Supporting Virtual keys in Hudi for reducing storage overhead",author:"shivnarayan",category:"blog",tags:["design","metadata","apache hudi"]},unlisted:!1,prevItem:{title:"Improving Marker Mechanism in Apache Hudi",permalink:"/cn/blog/2021/08/18/improving-marker-mechanism"},nextItem:{title:"Schema evolution with DeltaStreamer using KafkaSource",permalink:"/cn/blog/2021/08/16/kafka-custom-deserializer"}},d={authorsImageUrls:[void 0]},l=[];function c(e){const t={a:"a",code:"code",p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(t.p,{children:["Apache Hudi helps you build and manage data lakes with different table types, config knobs to cater to everyone's need.\nHudi adds per record metadata fields like ",(0,n.jsx)(t.code,{children:"_hoodie_record_key"}),", ",(0,n.jsx)(t.code,{children:"_hoodie_partition path"}),", ",(0,n.jsx)(t.code,{children:"_hoodie_commit_time"})," which serves multiple purposes.\nThey assist in avoiding re-computing the record key, partition path during merges, compaction and other table operations\nand also assists in supporting ",(0,n.jsx)(t.a,{href:"/blog/2021/07/21/streaming-data-lake-platform#readers",children:"record-level"})," incremental queries (in comparison to other table formats, that merely track files).\nIn addition, it ensures data quality by ensuring unique key constraints are enforced even if the key field changes for a given table, during its lifetime.\nBut one of the repeated asks from the community is to leverage existing fields and not to add additional meta fields, for simple use-cases where such benefits are not desired or key changes are very rare."]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>s});var n=a(96540);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);
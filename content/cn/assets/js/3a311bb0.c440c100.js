"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[86480],{29566:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var t=n(74848),i=n(28453);const o={title:"Record Payload",keywords:["hudi","merge","upsert","precombine"]},a=void 0,d={id:"record_payload",title:"Record Payload",description:"Record Payload",source:"@site/versioned_docs/version-0.13.1/record_payload.md",sourceDirName:".",slug:"/record_payload",permalink:"/cn/docs/0.13.1/record_payload",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.13.1/record_payload.md",tags:[],version:"0.13.1",frontMatter:{title:"Record Payload",keywords:["hudi","merge","upsert","precombine"]},sidebar:"docs",previous:{title:"Concurrency Control",permalink:"/cn/docs/0.13.1/concurrency_control"},next:{title:"SQL DDL",permalink:"/cn/docs/0.13.1/table_management"}},s={},l=[{value:"Record Payload",id:"record-payload",level:2},{value:"Existing Payloads",id:"existing-payloads",level:3},{value:"OverwriteWithLatestAvroPayload",id:"overwritewithlatestavropayload",level:4},{value:"DefaultHoodieRecordPayload",id:"defaulthoodierecordpayload",level:4},{value:"EventTimeAvroPayload",id:"eventtimeavropayload",level:4},{value:"OverwriteNonDefaultsWithLatestAvroPayload",id:"overwritenondefaultswithlatestavropayload",level:4},{value:"PartialUpdateAvroPayload",id:"partialupdateavropayload",level:4},{value:"Summary",id:"summary",level:3}];function c(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"record-payload",children:"Record Payload"}),"\n",(0,t.jsx)(r.p,{children:"One of the core features of Hudi is the ability to incrementally upsert data, deduplicate and merge records on the fly.\nAdditionally, users can implement their custom logic to merge the input records with the record on storage. Record\npayload is an abstract representation of a Hudi record that allows the aforementioned capability. As we shall see below,\nHudi provides out-of-the-box support for different payloads for different use cases. But, first let us understand how record\npayload is used in the Hudi upsert path."}),"\n",(0,t.jsx)("figure",{children:(0,t.jsx)("img",{className:"docimage",src:n(41426).A,alt:"upsert_path.png"})}),"\n",(0,t.jsx)(r.p,{children:"Figure above shows the main stages that records go through while being written to the Hudi table. In the precombining\nstage, Hudi performs any deduplication based on the payload implementation and precombine key configured by the user.\nFurther, on index lookup, Hudi identifies which records are being updated and the record payload implementation tells\nHudi how to merge the incoming record with the existing record on storage."}),"\n",(0,t.jsx)(r.h3,{id:"existing-payloads",children:"Existing Payloads"}),"\n",(0,t.jsx)(r.h4,{id:"overwritewithlatestavropayload",children:"OverwriteWithLatestAvroPayload"}),"\n",(0,t.jsxs)(r.p,{children:["This is the default record payload implementation. It picks the record with the greatest value (determined by calling\n",(0,t.jsx)(r.code,{children:".compareTo()"})," on the value of precombine key) to break ties and simply picks the latest record while merging. This gives\nlatest-write-wins style semantics."]}),"\n",(0,t.jsx)(r.h4,{id:"defaulthoodierecordpayload",children:"DefaultHoodieRecordPayload"}),"\n",(0,t.jsxs)(r.p,{children:["While ",(0,t.jsx)(r.code,{children:"OverwriteWithLatestAvroPayload"})," precombines based on an ordering field and picks the latest record while merging,\n",(0,t.jsx)(r.code,{children:"DefaultHoodieRecordPayload"})," honors the ordering field for both precombining and merging. Let's understand the difference with an example:"]}),"\n",(0,t.jsxs)(r.p,{children:["Let's say the ordering field is ",(0,t.jsx)(r.code,{children:"ts"})," and record key is ",(0,t.jsx)(r.code,{children:"id"})," and schema is:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'{\n  [\n    {"name":"id","type":"string"},\n    {"name":"ts","type":"long"},\n    {"name":"name","type":"string"},\n    {"name":"price","type":"string"}\n  ]\n}\n'})}),"\n",(0,t.jsx)(r.p,{children:"Current record in storage:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    id      ts      name    price\n    1       2       name_2  price_2\n"})}),"\n",(0,t.jsx)(r.p,{children:"Incoming record:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    id      ts      name    price\n    1       1       name_1    price_1\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Result data after merging using ",(0,t.jsx)(r.code,{children:"OverwriteWithLatestAvroPayload"})," (latest-write-wins):"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    id      ts      name    price\n    1       1       name_1  price_1\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Result data after merging using ",(0,t.jsx)(r.code,{children:"DefaultHoodieRecordPayload"})," (always honors ordering field):"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    id      ts      name    price\n    1       2       name_2  price_2\n"})}),"\n",(0,t.jsx)(r.h4,{id:"eventtimeavropayload",children:"EventTimeAvroPayload"}),"\n",(0,t.jsxs)(r.p,{children:["Some use cases require merging records by event time and thus event time plays the role of an ordering field. This\npayload is particularly useful in the case of late-arriving data. For such use cases, users need to set\nthe ",(0,t.jsx)(r.a,{href:"/docs/configurations#RECORD_PAYLOAD",children:"payload event time field"})," configuration."]}),"\n",(0,t.jsx)(r.h4,{id:"overwritenondefaultswithlatestavropayload",children:"OverwriteNonDefaultsWithLatestAvroPayload"}),"\n",(0,t.jsxs)(r.p,{children:["This payload is quite similar to ",(0,t.jsx)(r.code,{children:"OverwriteWithLatestAvroPayload"})," with slight difference while merging records. For\nprecombining, just like ",(0,t.jsx)(r.code,{children:"OverwriteWithLatestAvroPayload"}),", it picks the latest record for a key, based on an ordering\nfield. While merging, it overwrites the existing record on storage only for the specified ",(0,t.jsx)(r.strong,{children:"fields that do not equal\nthe default value"})," for that field."]}),"\n",(0,t.jsx)(r.h4,{id:"partialupdateavropayload",children:"PartialUpdateAvroPayload"}),"\n",(0,t.jsxs)(r.p,{children:["This payload supports partial update. Typically, once the merge step resolves which record to pick, then the record on\nstorage is fully replaced by the resolved record. But, in some cases, the requirement is to update only certain fields\nand not replace the whole record. This is called partial update. ",(0,t.jsx)(r.code,{children:"PartialUpdateAvroPayload"})," provides out-of-box support\nfor such use cases. To illustrate the point, let us look at a simple example:"]}),"\n",(0,t.jsxs)(r.p,{children:["Let's say the ordering field is ",(0,t.jsx)(r.code,{children:"ts"})," and record key is ",(0,t.jsx)(r.code,{children:"id"})," and schema is:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'{\n  [\n    {"name":"id","type":"string"},\n    {"name":"ts","type":"long"},\n    {"name":"name","type":"string"},\n    {"name":"price","type":"string"}\n  ]\n}\n'})}),"\n",(0,t.jsx)(r.p,{children:"Current record in storage:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    id      ts      name    price\n    1       2       name_1  null\n"})}),"\n",(0,t.jsx)(r.p,{children:"Incoming record:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    id      ts      name    price\n    1       1       null    price_1\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Result data after merging using ",(0,t.jsx)(r.code,{children:"PartialUpdateAvroPayload"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    id      ts      name    price\n    1       2       name_1  price_1\n"})}),"\n",(0,t.jsx)(r.h3,{id:"summary",children:"Summary"}),"\n",(0,t.jsxs)(r.p,{children:["In this document, we highlighted the role of record payload to support fast incremental ETL with updates and deletes. We\nalso talked about some payload implementations readily provided by Hudi. There are quite a few other implementations\nand developers would be interested in looking at the hierarchy of ",(0,t.jsx)(r.code,{children:"HoodieRecordPayload"})," interface. For\nexample, ",(0,t.jsx)(r.code,{children:"MySqlDebeziumAvroPayload"})," and ",(0,t.jsx)(r.code,{children:"PostgresDebeziumAvroPayload"})," provides support for seamlessly applying changes\ncaptured via Debezium for MySQL and PostgresDB. ",(0,t.jsx)(r.code,{children:"AWSDmsAvroPayload"})," provides support for applying changes captured via\nAmazon Database Migration Service onto S3."]}),"\n",(0,t.jsxs)(r.p,{children:["Record payloads are tunable to suit many use cases. Please check out the configurations\nlisted ",(0,t.jsx)(r.a,{href:"/docs/configurations#RECORD_PAYLOAD",children:"here"}),". Moreover, if users want to implement their own custom merge logic,\nplease check\nout ",(0,t.jsx)(r.a,{href:"/docs/faq/#can-i-implement-my-own-logic-for-how-input-records-are-merged-with-record-on-storage",children:"this FAQ"}),". In a\nseparate document, we will talk about a new record merger API for optimized payload handling."]})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},41426:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/upsert_path-0935f9caee7f799b5ba273d3b077c87d.png"},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>d});var t=n(96540);const i={},o=t.createContext(i);function a(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);
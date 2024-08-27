"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[14003],{40716:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>s,contentTitle:()=>d,default:()=>h,frontMatter:()=>n,metadata:()=>t,toc:()=>l});var i=a(74848),o=a(28453);const n={title:"Record Payload",keywords:["hudi","merge","upsert","precombine"],toc:!0,toc_min_heading_level:2,toc_max_heading_level:4},d=void 0,t={id:"record_payload",title:"Record Payload",description:"Background",source:"@site/versioned_docs/version-0.14.0/record_payload.md",sourceDirName:".",slug:"/record_payload",permalink:"/docs/0.14.0/record_payload",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.14.0/record_payload.md",tags:[],version:"0.14.0",frontMatter:{title:"Record Payload",keywords:["hudi","merge","upsert","precombine"],toc:!0,toc_min_heading_level:2,toc_max_heading_level:4},sidebar:"docs",previous:{title:"Concurrency Control",permalink:"/docs/0.14.0/concurrency_control"},next:{title:"SQL DDL",permalink:"/docs/0.14.0/sql_ddl"}},s={},l=[{value:"Background",id:"background",level:3},{value:"Configs",id:"configs",level:3},{value:"Existing Payloads",id:"existing-payloads",level:3},{value:"OverwriteWithLatestAvroPayload",id:"overwritewithlatestavropayload",level:4},{value:"DefaultHoodieRecordPayload",id:"defaulthoodierecordpayload",level:4},{value:"EventTimeAvroPayload",id:"eventtimeavropayload",level:4},{value:"OverwriteNonDefaultsWithLatestAvroPayload",id:"overwritenondefaultswithlatestavropayload",level:4},{value:"PartialUpdateAvroPayload",id:"partialupdateavropayload",level:4},{value:"Summary",id:"summary",level:3}];function c(e){const r={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h3,{id:"background",children:"Background"}),"\n",(0,i.jsx)(r.p,{children:"One of the core features of Hudi is the ability to incrementally upsert data, deduplicate and merge records on the fly.\nAdditionally, users can implement their custom logic to merge the input records with the record on storage. Record\npayload is an abstract representation of a Hudi record that allows the aforementioned capability. As we shall see below,\nHudi provides out-of-box support for different payloads for different use cases. But, first let us understand how record\npayload is used in the Hudi upsert path."}),"\n",(0,i.jsx)("figure",{children:(0,i.jsx)("img",{className:"docimage",src:a(41426).A,alt:"upsert_path.png"})}),"\n",(0,i.jsx)(r.p,{children:"Figure above shows the main stages that records go through while being written to the Hudi table. In the precombining\nstage, Hudi performs any deduplication based on the payload implementation and precombine key configured by the user.\nFurther, on index lookup, Hudi identifies which records are being updated and the record payload implementation tells\nHudi how to merge the incoming record with the existing record on storage."}),"\n",(0,i.jsx)(r.h3,{id:"configs",children:"Configs"}),"\n",(0,i.jsxs)(r.p,{children:["Payload class can be specified using the below configs. For more advanced configs refer ",(0,i.jsx)(r.a,{href:"https://hudi.apache.org/docs/configurations#RECORD_PAYLOAD",children:"here"})]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Spark based configs;"})}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Config Name"}),(0,i.jsx)(r.th,{children:"Default"}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"hoodie.datasource.write.payload.class"}),(0,i.jsx)(r.td,{children:"org.apache.hudi.common.model.OverwriteWithLatestAvroPayload (Optional)"}),(0,i.jsxs)(r.td,{children:["Payload class used. Override this, if you like to roll your own merge logic, when upserting/inserting. This will render any value set for PRECOMBINE_FIELD_OPT_VAL in-effective",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(r.code,{children:"Config Param: WRITE_PAYLOAD_CLASS_NAME"})]})]})})]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Flink based configs:"})}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Config Name"}),(0,i.jsx)(r.th,{children:"Default"}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"payload.class"}),(0,i.jsx)(r.td,{children:"org.apache.hudi.common.model.EventTimeAvroPayload (Optional)"}),(0,i.jsxs)(r.td,{children:["Payload class used. Override this, if you like to roll your own merge logic, when upserting/inserting. This will render any value set for the option in-effective",(0,i.jsx)("br",{}),(0,i.jsx)("br",{})," ",(0,i.jsx)(r.code,{children:"Config Param: PAYLOAD_CLASS_NAME"})]})]})})]}),"\n",(0,i.jsx)(r.h3,{id:"existing-payloads",children:"Existing Payloads"}),"\n",(0,i.jsx)(r.h4,{id:"overwritewithlatestavropayload",children:"OverwriteWithLatestAvroPayload"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-scala",children:"hoodie.datasource.write.payload.class=org.apache.hudi.common.model.OverwriteWithLatestAvroPayload\n"})}),"\n",(0,i.jsxs)(r.p,{children:["This is the default record payload implementation. It picks the record with the greatest value (determined by calling\n",(0,i.jsx)(r.code,{children:".compareTo()"})," on the value of precombine key) to break ties and simply picks the latest record while merging. This gives\nlatest-write-wins style semantics."]}),"\n",(0,i.jsx)(r.h4,{id:"defaulthoodierecordpayload",children:"DefaultHoodieRecordPayload"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-scala",children:"hoodie.datasource.write.payload.class=org.apache.hudi.common.model.DefaultHoodieRecordPayload\n"})}),"\n",(0,i.jsxs)(r.p,{children:["While ",(0,i.jsx)(r.code,{children:"OverwriteWithLatestAvroPayload"})," precombines based on an ordering field and picks the latest record while merging,\n",(0,i.jsx)(r.code,{children:"DefaultHoodieRecordPayload"})," honors the ordering field for both precombinig and merging. Let's understand the difference with an example:"]}),"\n",(0,i.jsxs)(r.p,{children:["Let's say the ordering field is ",(0,i.jsx)(r.code,{children:"ts"})," and record key is ",(0,i.jsx)(r.code,{children:"id"})," and schema is:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:'{\n  [\n    {"name":"id","type":"string"},\n    {"name":"ts","type":"long"},\n    {"name":"name","type":"string"},\n    {"name":"price","type":"string"}\n  ]\n}\n'})}),"\n",(0,i.jsx)(r.p,{children:"Current record in storage:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"    id      ts      name    price\n    1       2       name_2  price_2\n"})}),"\n",(0,i.jsx)(r.p,{children:"Incoming record:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"    id      ts      name    price\n    1       1       name_1    price_1\n"})}),"\n",(0,i.jsxs)(r.p,{children:["Result data after merging using ",(0,i.jsx)(r.code,{children:"OverwriteWithLatestAvroPayload"})," (latest-write-wins):"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"    id      ts      name    price\n    1       1       name_1  price_1\n"})}),"\n",(0,i.jsxs)(r.p,{children:["Result data after merging using ",(0,i.jsx)(r.code,{children:"DefaultHoodieRecordPayload"})," (always honors ordering field):"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"    id      ts      name    price\n    1       2       name_2  price_2\n"})}),"\n",(0,i.jsx)(r.h4,{id:"eventtimeavropayload",children:"EventTimeAvroPayload"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-scala",children:"hoodie.datasource.write.payload.class=org.apache.hudi.common.model.EventTimeAvroPayload\n"})}),"\n",(0,i.jsxs)(r.p,{children:["This is the default record payload for Flink based writing. Some use cases require merging records by event time and\nthus event time plays the role of an ordering field. This payload is particularly useful in the case of late-arriving data.\nFor such use cases, users need to set the ",(0,i.jsx)(r.a,{href:"/docs/configurations#RECORD_PAYLOAD",children:"payload event time field"})," configuration."]}),"\n",(0,i.jsx)(r.h4,{id:"overwritenondefaultswithlatestavropayload",children:"OverwriteNonDefaultsWithLatestAvroPayload"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-scala",children:"hoodie.datasource.write.payload.class=org.apache.hudi.common.model.OverwriteNonDefaultsWithLatestAvroPayload\n"})}),"\n",(0,i.jsxs)(r.p,{children:["This payload is quite similar to ",(0,i.jsx)(r.code,{children:"OverwriteWithLatestAvroPayload"})," with slight difference while merging records. For\nprecombining, just like ",(0,i.jsx)(r.code,{children:"OverwriteWithLatestAvroPayload"}),", it picks the latest record for a key, based on an ordering\nfield. While merging, it overwrites the existing record on storage only for the specified ",(0,i.jsx)(r.strong,{children:"fields that don't equal\ndefault value"})," for that field."]}),"\n",(0,i.jsx)(r.h4,{id:"partialupdateavropayload",children:"PartialUpdateAvroPayload"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-scala",children:"hoodie.datasource.write.payload.class=org.apache.hudi.common.model.PartialUpdateAvroPayload\n"})}),"\n",(0,i.jsxs)(r.p,{children:["This payload supports partial update. Typically, once the merge step resolves which record to pick, then the record on\nstorage is fully replaced by the resolved record. But, in some cases, the requirement is to update only certain fields\nand not replace the whole record. This is called partial update. ",(0,i.jsx)(r.code,{children:"PartialUpdateAvroPayload"})," provides out-of-box support\nfor such use cases. To illustrate the point, let us look at a simple example:"]}),"\n",(0,i.jsxs)(r.p,{children:["Let's say the ordering field is ",(0,i.jsx)(r.code,{children:"ts"})," and record key is ",(0,i.jsx)(r.code,{children:"id"})," and schema is:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:'{\n  [\n    {"name":"id","type":"string"},\n    {"name":"ts","type":"long"},\n    {"name":"name","type":"string"},\n    {"name":"price","type":"string"}\n  ]\n}\n'})}),"\n",(0,i.jsx)(r.p,{children:"Current record in storage:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"    id      ts      name    price\n    1       2       name_1  null\n"})}),"\n",(0,i.jsx)(r.p,{children:"Incoming record:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"    id      ts      name    price\n    1       1       null    price_1\n"})}),"\n",(0,i.jsxs)(r.p,{children:["Result data after merging using ",(0,i.jsx)(r.code,{children:"PartialUpdateAvroPayload"}),":"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"    id      ts      name    price\n    1       2       name_1  price_1\n"})}),"\n",(0,i.jsx)(r.h3,{id:"summary",children:"Summary"}),"\n",(0,i.jsxs)(r.p,{children:["In this document, we highlighted the role of record payload to support fast incremental ETL with updates and deletes. We\nalso talked about some payload implementations readily provided by Hudi. There are quite a few other implementations\nand developers would be interested in looking at the hierarchy of ",(0,i.jsx)(r.code,{children:"HoodieRecordPayload"})," interface. For\nexample, ",(0,i.jsx)(r.a,{href:"https://github.com/apache/hudi/blob/e76dd102bcaf8aec5a932e7277ccdbfd73ce1a32/hudi-common/src/main/java/org/apache/hudi/common/model/debezium/MySqlDebeziumAvroPayload.java",children:(0,i.jsx)(r.code,{children:"MySqlDebeziumAvroPayload"})}),"\nand ",(0,i.jsx)(r.a,{href:"https://github.com/apache/hudi/blob/e76dd102bcaf8aec5a932e7277ccdbfd73ce1a32/hudi-common/src/main/java/org/apache/hudi/common/model/debezium/PostgresDebeziumAvroPayload.java",children:(0,i.jsx)(r.code,{children:"PostgresDebeziumAvroPayload"})}),"\nprovides support for seamlessly applying changes captured via Debezium for MySQL and PostgresDB.\n",(0,i.jsx)(r.a,{href:"https://github.com/apache/hudi/blob/e76dd102bcaf8aec5a932e7277ccdbfd73ce1a32/hudi-common/src/main/java/org/apache/hudi/common/model/AWSDmsAvroPayload.java",children:(0,i.jsx)(r.code,{children:"AWSDmsAvroPayload"})}),"\nprovides support for applying changes captured via Amazon Database Migration Service onto S3."]}),"\n",(0,i.jsxs)(r.p,{children:["Record payloads are tunable to suit many use cases. Please check out the configurations\nlisted ",(0,i.jsx)(r.a,{href:"/docs/configurations#RECORD_PAYLOAD",children:"here"}),". Moreover, if users want to implement their own custom merge logic,\nplease check out ",(0,i.jsx)(r.a,{href:"/docs/faq/#can-i-implement-my-own-logic-for-how-input-records-are-merged-with-record-on-storage",children:"this FAQ"}),". In a\nseparate document, we will talk about a new record merger API for optimized payload handling."]})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},41426:(e,r,a)=>{a.d(r,{A:()=>i});const i=a.p+"assets/images/upsert_path-0935f9caee7f799b5ba273d3b077c87d.png"},28453:(e,r,a)=>{a.d(r,{R:()=>d,x:()=>t});var i=a(96540);const o={},n=i.createContext(o);function d(e){const r=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),i.createElement(n.Provider,{value:r},e.children)}}}]);
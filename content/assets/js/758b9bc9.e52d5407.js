"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[28204],{69800:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>r});var n=a(74848),s=a(28453);const o={title:"DataHub",keywords:["hudi","datahub","sync"]},i=void 0,d={id:"syncing_datahub",title:"DataHub",description:"DataHub is a rich metadata platform that supports features like data discovery, data",source:"@site/versioned_docs/version-0.15.0/syncing_datahub.md",sourceDirName:".",slug:"/syncing_datahub",permalink:"/docs/syncing_datahub",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.15.0/syncing_datahub.md",tags:[],version:"0.15.0",frontMatter:{title:"DataHub",keywords:["hudi","datahub","sync"]},sidebar:"docs",previous:{title:"AWS Glue Data Catalog",permalink:"/docs/syncing_aws_glue_data_catalog"},next:{title:"Hive Metastore",permalink:"/docs/syncing_metastore"}},c={},r=[{value:"Configurations",id:"configurations",level:3},{value:"Example",id:"example",level:3}];function l(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://datahubproject.io/",children:"DataHub"})," is a rich metadata platform that supports features like data discovery, data\nobeservability, federated governance, etc."]}),"\n",(0,n.jsxs)(t.p,{children:["Since Hudi 0.11.0, you can now sync to a DataHub instance by setting ",(0,n.jsx)(t.code,{children:"DataHubSyncTool"})," as one of the sync tool classes\nfor ",(0,n.jsx)(t.code,{children:"HoodieStreamer"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The target Hudi table will be sync'ed to DataHub as a ",(0,n.jsx)(t.code,{children:"Dataset"}),". The Hudi table's avro schema will be sync'ed, along\nwith the commit timestamp when running the sync."]}),"\n",(0,n.jsx)(t.h3,{id:"configurations",children:"Configurations"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"DataHubSyncTool"})," makes use of DataHub's Java Emitter to send the metadata via HTTP REST APIs. It is required to\nset ",(0,n.jsx)(t.code,{children:"hoodie.meta.sync.datahub.emitter.server"})," to the URL of the DataHub instance for sync."]}),"\n",(0,n.jsxs)(t.p,{children:["If needs auth token, set ",(0,n.jsx)(t.code,{children:"hoodie.meta.sync.datahub.emitter.token"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["If needs customized creation of the emitter object,\nimplement ",(0,n.jsx)(t.code,{children:"org.apache.hudi.sync.datahub.config.DataHubEmitterSupplier"})," and supply the implementation's FQCN\nto ",(0,n.jsx)(t.code,{children:"hoodie.meta.sync.datahub.emitter.supplier.class"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["By default, the sync config's database name and table name will be used to make the target ",(0,n.jsx)(t.code,{children:"Dataset"}),"'s URN.\nSubclass ",(0,n.jsx)(t.code,{children:"HoodieDataHubDatasetIdentifier"})," and set it to ",(0,n.jsx)(t.code,{children:"hoodie.meta.sync.datahub.dataset.identifier.class"})," to customize\nthe URN creation."]}),"\n",(0,n.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(t.p,{children:["The following shows an example configuration to run ",(0,n.jsx)(t.code,{children:"HoodieStreamer"})," with ",(0,n.jsx)(t.code,{children:"DataHubSyncTool"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["In addition to ",(0,n.jsx)(t.code,{children:"hudi-utilities-bundle"})," that contains ",(0,n.jsx)(t.code,{children:"HoodieStreamer"}),", you also add ",(0,n.jsx)(t.code,{children:"hudi-datahub-sync-bundle"})," to\nthe classpath."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"spark-submit --master yarn \\\n--jars /opt/hudi-datahub-sync-bundle-0.13.0.jar \\\n--class org.apache.hudi.utilities.streamer.HoodieStreamer \\\n/opt/hudi-utilities-bundle_2.12-0.13.0.jar \\\n--target-table mytable \\\n# ... other HoodieStreamer's configs\n--enable-sync \\\n--sync-tool-classes org.apache.hudi.sync.datahub.DataHubSyncTool \\\n--hoodie-conf hoodie.meta.sync.datahub.emitter.server=http://url-to-datahub-instance:8080 \\\n--hoodie-conf hoodie.datasource.hive_sync.database=mydb \\\n--hoodie-conf hoodie.datasource.hive_sync.table=mytable \\\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>d});var n=a(96540);const s={},o=n.createContext(s);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);
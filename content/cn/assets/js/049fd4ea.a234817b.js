"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[72668],{14023:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=n(74848),s=n(28453);const r={title:"Google Cloud",keywords:["hudi","hive","google cloud","storage","spark","presto"],summary:"In this page, we go over how to configure hudi with Google Cloud Storage.",last_modified_at:new Date("2019-12-30T19:59:57.000Z")},i=void 0,l={id:"gcs_hoodie",title:"Google Cloud",description:"For Hudi storage on GCS, regional buckets provide an DFS API with strong consistency.",source:"@site/versioned_docs/version-0.12.1/gcs_hoodie.md",sourceDirName:".",slug:"/gcs_hoodie",permalink:"/cn/docs/0.12.1/gcs_hoodie",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.1/gcs_hoodie.md",tags:[],version:"0.12.1",frontMatter:{title:"Google Cloud",keywords:["hudi","hive","google cloud","storage","spark","presto"],summary:"In this page, we go over how to configure hudi with Google Cloud Storage.",last_modified_at:"2019-12-30T19:59:57.000Z"},sidebar:"docs",previous:{title:"AWS S3",permalink:"/cn/docs/0.12.1/s3_hoodie"},next:{title:"Alibaba Cloud",permalink:"/cn/docs/0.12.1/oss_hoodie"}},c={},d=[{value:"GCS Configs",id:"gcs-configs",level:2},{value:"GCS Credentials",id:"gcs-credentials",level:3},{value:"GCS Libs",id:"gcs-libs",level:3}];function a(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:["For Hudi storage on GCS, ",(0,t.jsx)(o.strong,{children:"regional"})," buckets provide an DFS API with strong consistency."]}),"\n",(0,t.jsx)(o.h2,{id:"gcs-configs",children:"GCS Configs"}),"\n",(0,t.jsx)(o.p,{children:"There are two configurations required for Hudi GCS compatibility:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"Adding GCS Credentials for Hudi"}),"\n",(0,t.jsx)(o.li,{children:"Adding required jars to classpath"}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"gcs-credentials",children:"GCS Credentials"}),"\n",(0,t.jsxs)(o.p,{children:["Add the required configs in your core-site.xml from where Hudi can fetch them. Replace the ",(0,t.jsx)(o.code,{children:"fs.defaultFS"})," with your GCS bucket name and Hudi should be able to read/write from the bucket."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-xml",children:"  <property>\n    <name>fs.defaultFS</name>\n    <value>gs://hudi-bucket</value>\n  </property>\n\n  <property>\n    <name>fs.gs.impl</name>\n    <value>com.google.cloud.hadoop.fs.gcs.GoogleHadoopFileSystem</value>\n    <description>The FileSystem for gs: (GCS) uris.</description>\n  </property>\n\n  <property>\n    <name>fs.AbstractFileSystem.gs.impl</name>\n    <value>com.google.cloud.hadoop.fs.gcs.GoogleHadoopFS</value>\n    <description>The AbstractFileSystem for gs: (GCS) uris.</description>\n  </property>\n\n  <property>\n    <name>fs.gs.project.id</name>\n    <value>GCS_PROJECT_ID</value>\n  </property>\n  <property>\n    <name>google.cloud.auth.service.account.enable</name>\n    <value>true</value>\n  </property>\n  <property>\n    <name>google.cloud.auth.service.account.email</name>\n    <value>GCS_SERVICE_ACCOUNT_EMAIL</value>\n  </property>\n  <property>\n    <name>google.cloud.auth.service.account.keyfile</name>\n    <value>GCS_SERVICE_ACCOUNT_KEYFILE</value>\n  </property>\n"})}),"\n",(0,t.jsx)(o.h3,{id:"gcs-libs",children:"GCS Libs"}),"\n",(0,t.jsx)(o.p,{children:"GCS hadoop libraries to add to our classpath"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"com.google.cloud.bigdataoss:gcs-connector:1.6.0-hadoop2"}),"\n"]})]})}function u(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>l});var t=n(96540);const s={},r=t.createContext(s);function i(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);
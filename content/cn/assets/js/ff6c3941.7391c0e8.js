"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[33307],{12061:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=n(74848),t=n(28453);const i={version:"0.6.0",title:"GCS Filesystem",keywords:["hudi","hive","google cloud","storage","spark","presto"],summary:"In this page, we go over how to configure hudi with Google Cloud Storage.",last_modified_at:new Date("2019-12-30T19:59:57.000Z"),language:"cn"},r=void 0,c={id:"gcs_hoodie",title:"GCS Filesystem",description:"For Hudi storage on GCS, regional buckets provide an DFS API with strong consistency.",source:"@site/i18n/cn/docusaurus-plugin-content-docs/version-0.6.0/gcs_hoodie.md",sourceDirName:".",slug:"/gcs_hoodie",permalink:"/cn/docs/0.6.0/gcs_hoodie",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.6.0/gcs_hoodie.md",tags:[],version:"0.6.0",frontMatter:{version:"0.6.0",title:"GCS Filesystem",keywords:["hudi","hive","google cloud","storage","spark","presto"],summary:"In this page, we go over how to configure hudi with Google Cloud Storage.",last_modified_at:"2019-12-30T19:59:57.000Z",language:"cn"},sidebar:"docs",previous:{title:"S3 Filesystem",permalink:"/cn/docs/0.6.0/s3_hoodie"},next:{title:"OSS Filesystem",permalink:"/cn/docs/0.6.0/oss_hoodie"}},l={},a=[{value:"GCS Configs",id:"gcs-configs",level:2},{value:"GCS Credentials",id:"gcs-credentials",level:3},{value:"GCS Libs",id:"gcs-libs",level:3}];function d(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:["For Hudi storage on GCS, ",(0,s.jsx)(o.strong,{children:"regional"})," buckets provide an DFS API with strong consistency."]}),"\n",(0,s.jsx)(o.h2,{id:"gcs-configs",children:"GCS Configs"}),"\n",(0,s.jsx)(o.p,{children:"There are two configurations required for Hudi GCS compatibility:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Adding GCS Credentials for Hudi"}),"\n",(0,s.jsx)(o.li,{children:"Adding required jars to classpath"}),"\n"]}),"\n",(0,s.jsx)(o.h3,{id:"gcs-credentials",children:"GCS Credentials"}),"\n",(0,s.jsxs)(o.p,{children:["Add the required configs in your core-site.xml from where Hudi can fetch them. Replace the ",(0,s.jsx)(o.code,{children:"fs.defaultFS"})," with your GCS bucket name and Hudi should be able to read/write from the bucket."]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-xml",children:"  <property>\n    <name>fs.defaultFS</name>\n    <value>gs://hudi-bucket</value>\n  </property>\n\n  <property>\n    <name>fs.gs.impl</name>\n    <value>com.google.cloud.hadoop.fs.gcs.GoogleHadoopFileSystem</value>\n    <description>The FileSystem for gs: (GCS) uris.</description>\n  </property>\n\n  <property>\n    <name>fs.AbstractFileSystem.gs.impl</name>\n    <value>com.google.cloud.hadoop.fs.gcs.GoogleHadoopFS</value>\n    <description>The AbstractFileSystem for gs: (GCS) uris.</description>\n  </property>\n\n  <property>\n    <name>fs.gs.project.id</name>\n    <value>GCS_PROJECT_ID</value>\n  </property>\n  <property>\n    <name>google.cloud.auth.service.account.enable</name>\n    <value>true</value>\n  </property>\n  <property>\n    <name>google.cloud.auth.service.account.email</name>\n    <value>GCS_SERVICE_ACCOUNT_EMAIL</value>\n  </property>\n  <property>\n    <name>google.cloud.auth.service.account.keyfile</name>\n    <value>GCS_SERVICE_ACCOUNT_KEYFILE</value>\n  </property>\n"})}),"\n",(0,s.jsx)(o.h3,{id:"gcs-libs",children:"GCS Libs"}),"\n",(0,s.jsx)(o.p,{children:"GCS hadoop libraries to add to our classpath"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"com.google.cloud.bigdataoss:gcs-connector:1.6.0-hadoop2"}),"\n"]})]})}function u(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>r,x:()=>c});var s=n(96540);const t={},i=s.createContext(t);function r(e){const o=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);
"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[47247],{64752:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var s=o(74848),i=o(28453);const r={title:"Alibaba Cloud",keywords:["hudi","hive","aliyun","oss","spark","presto"],summary:"In this page, we go over how to configure Hudi with OSS filesystem.",last_modified_at:new Date("2020-04-21T21:38:24.000Z")},t=void 0,d={id:"oss_hoodie",title:"Alibaba Cloud",description:"In this page, we explain how to get your Hudi spark job to store into Aliyun OSS.",source:"@site/versioned_docs/version-0.14.0/oss_hoodie.md",sourceDirName:".",slug:"/oss_hoodie",permalink:"/docs/0.14.0/oss_hoodie",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.14.0/oss_hoodie.md",tags:[],version:"0.14.0",frontMatter:{title:"Alibaba Cloud",keywords:["hudi","hive","aliyun","oss","spark","presto"],summary:"In this page, we go over how to configure Hudi with OSS filesystem.",last_modified_at:"2020-04-21T21:38:24.000Z"},sidebar:"docs",previous:{title:"Google Cloud",permalink:"/docs/0.14.0/gcs_hoodie"},next:{title:"Microsoft Azure",permalink:"/docs/0.14.0/azure_hoodie"}},a={},l=[{value:"Aliyun OSS configs",id:"aliyun-oss-configs",level:2},{value:"Aliyun OSS Credentials",id:"aliyun-oss-credentials",level:3},{value:"Aliyun OSS Libs",id:"aliyun-oss-libs",level:3}];function c(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"In this page, we explain how to get your Hudi spark job to store into Aliyun OSS."}),"\n",(0,s.jsx)(n.h2,{id:"aliyun-oss-configs",children:"Aliyun OSS configs"}),"\n",(0,s.jsx)(n.p,{children:"There are two configurations required for Hudi-OSS compatibility:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Adding Aliyun OSS Credentials for Hudi"}),"\n",(0,s.jsx)(n.li,{children:"Adding required Jars to classpath"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"aliyun-oss-credentials",children:"Aliyun OSS Credentials"}),"\n",(0,s.jsxs)(n.p,{children:["Add the required configs in your core-site.xml from where Hudi can fetch them. Replace the ",(0,s.jsx)(n.code,{children:"fs.defaultFS"})," with your OSS bucket name, replace ",(0,s.jsx)(n.code,{children:"fs.oss.endpoint"})," with your OSS endpoint, replace ",(0,s.jsx)(n.code,{children:"fs.oss.accessKeyId"})," with your OSS key, replace ",(0,s.jsx)(n.code,{children:"fs.oss.accessKeySecret"})," with your OSS secret. Hudi should be able to read/write from the bucket."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"<property>\n  <name>fs.defaultFS</name>\n  <value>oss://bucketname/</value>\n</property>\n\n<property>\n  <name>fs.oss.endpoint</name>\n  <value>oss-endpoint-address</value>\n  <description>Aliyun OSS endpoint to connect to.</description>\n</property>\n\n<property>\n  <name>fs.oss.accessKeyId</name>\n  <value>oss_key</value>\n  <description>Aliyun access key ID</description>\n</property>\n\n<property>\n  <name>fs.oss.accessKeySecret</name>\n  <value>oss-secret</value>\n  <description>Aliyun access key secret</description>\n</property>\n\n<property>\n  <name>fs.oss.impl</name>\n  <value>org.apache.hadoop.fs.aliyun.oss.AliyunOSSFileSystem</value>\n</property>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"aliyun-oss-libs",children:"Aliyun OSS Libs"}),"\n",(0,s.jsx)(n.p,{children:"Aliyun hadoop libraries jars to add to our pom.xml. Since hadoop-aliyun depends on the version of hadoop 2.9.1+, you need to use the version of hadoop 2.9.1 or later."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"<dependency>\n  <groupId>org.apache.hadoop</groupId>\n  <artifactId>hadoop-aliyun</artifactId>\n  <version>3.2.1</version>\n</dependency>\n<dependency>\n  <groupId>com.aliyun.oss</groupId>\n  <artifactId>aliyun-sdk-oss</artifactId>\n  <version>3.8.1</version>\n</dependency>\n<dependency>\n  <groupId>org.jdom</groupId>\n  <artifactId>jdom</artifactId>\n  <version>1.1</version>\n</dependency>\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>d});var s=o(96540);const i={},r=s.createContext(i);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);
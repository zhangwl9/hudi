"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[39230],{8155:(e,o,i)=>{i.r(o),i.d(o,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var r=i(74848),n=i(28453);const t={title:"Cloud Storage",keywords:["hudi","aws","gcp","oss","azure","cloud","juicefs"],summary:"In this page, we introduce how Hudi work with different Cloud providers.",toc:!0,last_modified_at:new Date("2021-10-12T02:50:00.000Z")},s=void 0,d={id:"cloud",title:"Cloud Storage",description:"Talking to Cloud Storage",source:"@site/versioned_docs/version-0.14.0/cloud.md",sourceDirName:".",slug:"/cloud",permalink:"/docs/0.14.0/cloud",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.14.0/cloud.md",tags:[],version:"0.14.0",frontMatter:{title:"Cloud Storage",keywords:["hudi","aws","gcp","oss","azure","cloud","juicefs"],summary:"In this page, we introduce how Hudi work with different Cloud providers.",toc:!0,last_modified_at:"2021-10-12T02:50:00.000Z"},sidebar:"docs",previous:{title:"Flink Tuning",permalink:"/docs/0.14.0/flink_tuning"},next:{title:"AWS S3",permalink:"/docs/0.14.0/s3_hoodie"}},a={},c=[{value:"Talking to Cloud Storage",id:"talking-to-cloud-storage",level:2}];function l(e){const o={a:"a",admonition:"admonition",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h2,{id:"talking-to-cloud-storage",children:"Talking to Cloud Storage"}),"\n",(0,r.jsx)(o.p,{children:"Immaterial of whether RDD/WriteClient APIs or Datasource is used, the following information helps configure access\nto cloud stores."}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.a,{href:"/docs/s3_hoodie",children:"AWS S3"})," ",(0,r.jsx)("br",{}),"\nConfigurations required for S3 and Hudi co-operability."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.a,{href:"/docs/gcs_hoodie",children:"Google Cloud Storage"})," ",(0,r.jsx)("br",{}),"\nConfigurations required for GCS and Hudi co-operability."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.a,{href:"/docs/oss_hoodie",children:"Alibaba Cloud OSS"})," ",(0,r.jsx)("br",{}),"\nConfigurations required for OSS and Hudi co-operability."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.a,{href:"/docs/azure_hoodie",children:"Microsoft Azure"})," ",(0,r.jsx)("br",{}),"\nConfigurations required for Azure and Hudi co-operability."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.a,{href:"/docs/cos_hoodie",children:"Tencent Cloud Object Storage"})," ",(0,r.jsx)("br",{}),"\nConfigurations required for COS and Hudi co-operability."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.a,{href:"/docs/ibm_cos_hoodie",children:"IBM Cloud Object Storage"})," ",(0,r.jsx)("br",{}),"\nConfigurations required for IBM Cloud Object Storage and Hudi co-operability."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.a,{href:"bos_hoodie",children:"Baidu Cloud Object Storage"})," ",(0,r.jsx)("br",{}),"\nConfigurations required for BOS and Hudi co-operability."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.a,{href:"jfs_hoodie",children:"JuiceFS"})," ",(0,r.jsx)("br",{}),"\nConfigurations required for JuiceFS and Hudi co-operability."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.a,{href:"oci_hoodie",children:"Oracle Cloud Infrastructure"})," ",(0,r.jsx)("br",{}),"\nConfigurations required for OCI and Hudi co-operability."]}),"\n"]}),"\n",(0,r.jsxs)(o.admonition,{type:"note",children:[(0,r.jsx)(o.mdxAdmonitionTitle,{}),(0,r.jsxs)(o.p,{children:["Many cloud object storage systems like ",(0,r.jsx)(o.a,{href:"https://docs.aws.amazon.com/s3/",children:"Amazon S3"})," allow you to set\nlifecycle policies, such as ",(0,r.jsx)(o.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html",children:"S3 Lifecycle"}),",\nto manage objects. One of the policies is related to object expiration. If your organisation has configured such policies,\nthen please ensure to exclude (or have a longer expiry period) for Hudi tables."]})]})]})}function u(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,o,i)=>{i.d(o,{R:()=>s,x:()=>d});var r=i(96540);const n={},t=r.createContext(n);function s(e){const o=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(t.Provider,{value:o},e.children)}}}]);
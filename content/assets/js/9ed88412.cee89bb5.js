"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[2652],{48701:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>r});var t=a(74848),o=a(28453);const s={title:"AWS Glue Data Catalog",keywords:["hudi","aws","glue","sync"]},l=void 0,i={id:"syncing_aws_glue_data_catalog",title:"AWS Glue Data Catalog",description:"Hudi tables can sync to AWS Glue Data Catalog directly via AWS SDK. Piggyback on HiveSyncTool",source:"@site/versioned_docs/version-0.12.1/syncing_aws_glue_data_catalog.md",sourceDirName:".",slug:"/syncing_aws_glue_data_catalog",permalink:"/docs/0.12.1/syncing_aws_glue_data_catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.1/syncing_aws_glue_data_catalog.md",tags:[],version:"0.12.1",frontMatter:{title:"AWS Glue Data Catalog",keywords:["hudi","aws","glue","sync"]},sidebar:"docs",previous:{title:"Flink Setup",permalink:"/docs/0.12.1/flink_configuration"},next:{title:"DataHub",permalink:"/docs/0.12.1/syncing_datahub"}},c={},r=[{value:"Configurations",id:"configurations",level:3},{value:"Running AWS Glue Catalog Sync for Spark DataSource",id:"running-aws-glue-catalog-sync-for-spark-datasource",level:4},{value:"Running AWS Glue Catalog Sync from EMR",id:"running-aws-glue-catalog-sync-from-emr",level:4}];function u(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Hudi tables can sync to AWS Glue Data Catalog directly via AWS SDK. Piggyback on ",(0,t.jsx)(n.code,{children:"HiveSyncTool"}),"\n, ",(0,t.jsx)(n.code,{children:"org.apache.hudi.aws.sync.AwsGlueCatalogSyncTool"})," makes use of all the configurations that are taken by ",(0,t.jsx)(n.code,{children:"HiveSyncTool"}),"\nand send them to AWS Glue."]}),"\n",(0,t.jsx)(n.h3,{id:"configurations",children:"Configurations"}),"\n",(0,t.jsxs)(n.p,{children:["There is no additional configuration for using ",(0,t.jsx)(n.code,{children:"AwsGlueCatalogSyncTool"}),"; you just need to set it as one of the sync tool\nclasses for ",(0,t.jsx)(n.code,{children:"HoodieDeltaStreamer"})," and everything configured as shown in ",(0,t.jsx)(n.a,{href:"syncing_metastore",children:"Sync to Hive Metastore"})," will\nbe passed along."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"--sync-tool-classes org.apache.hudi.aws.sync.AwsGlueCatalogSyncTool\n"})}),"\n",(0,t.jsx)(n.h4,{id:"running-aws-glue-catalog-sync-for-spark-datasource",children:"Running AWS Glue Catalog Sync for Spark DataSource"}),"\n",(0,t.jsxs)(n.p,{children:["To write a Hudi table to Amazon S3 and catalog it in AWS Glue Data Catalog, you can use the options mentioned in the\n",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-format-hudi.html#aws-glue-programming-etl-format-hudi-write",children:"AWS documentation"})]}),"\n",(0,t.jsx)(n.h4,{id:"running-aws-glue-catalog-sync-from-emr",children:"Running AWS Glue Catalog Sync from EMR"}),"\n",(0,t.jsx)(n.p,{children:"If you're running HiveSyncTool on an EMR cluster backed by Glue Data Catalog as external metastore, you can simply run the sync from command line like below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"cd /usr/lib/hudi/bin\n\n./run_sync_tool.sh --base-path s3://<bucket_name>/<prefix>/<table_name> --database <database_name> --table <table_name> --partitioned-by <column_name>\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>i});var t=a(96540);const o={},s=t.createContext(o);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[86992],{46171:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(74848),i=a(28453);const o={title:"Build Open Lakehouse using Apache Hudi & dbt",excerpt:"How to style blog focused projects on teaching how to build an open Lakehouse using Apache Hudi & dbt",author:"Vinoth Govindarajan",category:"blog",image:"/assets/images/blog/hudi_dbt_lakehouse.png",tags:["how-to","deltastreamer","incremental processing","apache hudi"]},s=void 0,l={permalink:"/blog/2022/07/11/build-open-lakehouse-using-apache-hudi-and-dbt",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2022-07-11-build-open-lakehouse-using-apache-hudi-and-dbt.md",source:"@site/blog/2022-07-11-build-open-lakehouse-using-apache-hudi-and-dbt.md",title:"Build Open Lakehouse using Apache Hudi & dbt",description:"The focus of this blog is to show you how to build an open lakehouse leveraging incremental data processing and performing field-level updates. We are excited to announce that you can now use Apache Hudi + dbt for building open data lakehouses.",date:"2022-07-11T00:00:00.000Z",tags:[{inline:!0,label:"how-to",permalink:"/blog/tags/how-to"},{inline:!0,label:"deltastreamer",permalink:"/blog/tags/deltastreamer"},{inline:!0,label:"incremental processing",permalink:"/blog/tags/incremental-processing"},{inline:!0,label:"apache hudi",permalink:"/blog/tags/apache-hudi"}],readingTime:6.64,hasTruncateMarker:!1,authors:[{name:"Vinoth Govindarajan",key:null,page:null}],frontMatter:{title:"Build Open Lakehouse using Apache Hudi & dbt",excerpt:"How to style blog focused projects on teaching how to build an open Lakehouse using Apache Hudi & dbt",author:"Vinoth Govindarajan",category:"blog",image:"/assets/images/blog/hudi_dbt_lakehouse.png",tags:["how-to","deltastreamer","incremental processing","apache hudi"]},unlisted:!1,prevItem:{title:"How NerdWallet uses AWS and Apache Hudi to build a serverless, real-time analytics platform",permalink:"/blog/2022/08/09/How-NerdWallet-uses-AWS-and-Apache-Hudi-to-build-a-serverless-real-time-analytics-platform"},nextItem:{title:"Apache Hudi vs Delta Lake - Transparent TPC-DS Lakehouse Performance Benchmarks",permalink:"/blog/2022/06/29/Apache-Hudi-vs-Delta-Lake-transparent-tpc-ds-lakehouse-performance-benchmarks"}},r={authorsImageUrls:[void 0]},d=[{value:"What is Apache Hudi?",id:"what-is-apache-hudi",level:2},{value:"What is dbt?",id:"what-is-dbt",level:2},{value:"What is a Lakehouse?",id:"what-is-a-lakehouse",level:2},{value:"How to build an open lakehouse?",id:"how-to-build-an-open-lakehouse",level:2},{value:"Step 1: How to extract &amp; load the raw data datasets?",id:"step-1-how-to-extract--load-the-raw-data-datasets",level:2},{value:"Step 2: How to configure hudi with the dbt project?",id:"step-2-how-to-configure-hudi-with-the-dbt-project",level:2},{value:"Step 3: How to read the raw data incrementally?",id:"step-3-how-to-read-the-raw-data-incrementally",level:2},{value:"How to apply filters on an incremental run?",id:"how-to-apply-filters-on-an-incremental-run",level:3},{value:"How to define the uniqueness constraint?",id:"how-to-define-the-uniqueness-constraint",level:3},{value:"Step 4: How to use the upsert feature while writing datasets?",id:"step-4-how-to-use-the-upsert-feature-while-writing-datasets",level:2},{value:"How to perform field-level updates?",id:"how-to-perform-field-level-updates",level:3},{value:"How to configure additional hoodie custom configs?",id:"how-to-configure-additional-hoodie-custom-configs",level:3}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"The focus of this blog is to show you how to build an open lakehouse leveraging incremental data processing and performing field-level updates. We are excited to announce that you can now use Apache Hudi + dbt for building open data lakehouses."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"/assets/images/blog/hudi_dbt_lakehouse.png",src:a(86738).A+"",width:"1200",height:"600"})}),"\n",(0,n.jsx)(t.p,{children:"Let's first clarify a few terminologies used in this blog before we dive into the details."}),"\n",(0,n.jsx)(t.h2,{id:"what-is-apache-hudi",children:"What is Apache Hudi?"}),"\n",(0,n.jsx)(t.p,{children:"Apache Hudi brings ACID transactions, record-level updates/deletes, and change streams to data lakehouses."}),"\n",(0,n.jsx)(t.p,{children:"Apache Hudi is an open-source data management framework used to simplify incremental data processing and data pipeline development. This framework more efficiently manages business requirements like data lifecycle and improves data quality."}),"\n",(0,n.jsx)(t.h2,{id:"what-is-dbt",children:"What is dbt?"}),"\n",(0,n.jsx)(t.p,{children:"dbt (data build tool) is a data transformation tool that enables data analysts and engineers to transform, test, and document data in the cloud data warehouses."}),"\n",(0,n.jsx)(t.p,{children:"dbt enables analytics engineers to transform data in their warehouses by simply writing select statements. dbt handles turning these select statements into tables and views."}),"\n",(0,n.jsx)(t.p,{children:"dbt does the T in ELT (Extract, Load, Transform) processes \u2013 it doesn\u2019t extract or load data, but it\u2019s extremely good at transforming data that\u2019s already loaded into your warehouse."}),"\n",(0,n.jsx)(t.h2,{id:"what-is-a-lakehouse",children:"What is a Lakehouse?"}),"\n",(0,n.jsx)(t.p,{children:"A lakehouse is a new, open architecture that combines the best elements of data lakes and data warehouses. Lakehouses are enabled by a new system design: implementing transaction management and data management features similar to those in a data warehouse directly on top of low-cost cloud storage in open formats. They are what you would get if you had to redesign data warehouses in the modern world, now that cheap and highly reliable storage (in the form of object stores) are available."}),"\n",(0,n.jsx)(t.p,{children:"In other words, while data lakes historically have been viewed as a bunch of files added to cloud storage folders, lakehouse tables support transactions, updates, deletes, and in the case of Apache Hudi, even database-like functionality like indexing or change capture."}),"\n",(0,n.jsx)(t.h2,{id:"how-to-build-an-open-lakehouse",children:"How to build an open lakehouse?"}),"\n",(0,n.jsx)(t.p,{children:"Now, we know what is a lakehouse, so let's build one, In order to build an open lakehouse, you need a few components:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Open table format which supports ACID transactions","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Apache Hudi (integrated with dbt)"}),"\n",(0,n.jsx)(t.li,{children:"Delta Lake (proprietary features locked to Databricks runtime)"}),"\n",(0,n.jsx)(t.li,{children:"Apache Iceberg (currently not integrated with dbt)"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Data transformation tool","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Open source dbt is the de-facto popular choice for transformation layer"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Distributed data processing engine","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Apache Spark is the de-facto popular choice for compute engine"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Cloud Storage","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"You can choose any of the cost-effective cloud stores or HDFS"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"Bring your favorite query engine"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"To build the lakehouse you need a way to extract and load the data into Hudi table format and then transform in-place using dbt."}),"\n",(0,n.jsxs)(t.p,{children:["DBT supports Hudi out of the box with the ",(0,n.jsx)(t.a,{href:"https://github.com/dbt-labs/dbt-spark",children:"dbt-spark"})," adapter package. When creating modeled datasets using dbt you can choose Hudi as the format for your tables."]}),"\n",(0,n.jsxs)(t.p,{children:["You can follow the instructions on this ",(0,n.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/master/hudi-examples/hudi-examples-dbt/README.md",children:"page"})," to learn how to install and configure dbt+hudi."]}),"\n",(0,n.jsx)(t.h2,{id:"step-1-how-to-extract--load-the-raw-data-datasets",children:"Step 1: How to extract & load the raw data datasets?"}),"\n",(0,n.jsx)(t.p,{children:"This is the first step in building your data lake and there are many choices here to load the data into our open lakehouse. I\u2019m going to go with one of the Hudi\u2019s native tools called Delta Streamer since all the ingestion features are pre-built and battle-tested in production at scale."}),"\n",(0,n.jsxs)(t.p,{children:["Hudi\u2019s ",(0,n.jsx)(t.a,{href:"https://hudi.apache.org/docs/hoodie_streaming_ingestion",children:"DeltaStreamer"})," does the EL in ELT (Extract, Load, Transform) processes \u2013 it\u2019s extremely good at extracting, loading, and optionally ",(0,n.jsx)(t.a,{href:"https://hudi.apache.org/docs/hoodie_streaming_ingestion#transformers",children:"transforming data"})," that\u2019s already loaded into your lakehouse."]}),"\n",(0,n.jsx)(t.h2,{id:"step-2-how-to-configure-hudi-with-the-dbt-project",children:"Step 2: How to configure hudi with the dbt project?"}),"\n",(0,n.jsx)(t.p,{children:"To use the Hudi with your dbt project,  all you need to do is choose the file format as Hudi. The file format config can either be specified in specific models, or for all the models in your dbt_project.yml file:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yml",metastring:'title="dbt_project.yml"',children:"models:\n   +file_format: hudi\n"})}),"\n",(0,n.jsx)(t.p,{children:"or:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",metastring:'title="model/my_model.sql"',children:"{{ config(\n   materialized = 'incremental',\n   incremental_strategy = 'merge',\n   file_format = 'hudi',\n   unique_key = 'id',\n   \u2026\n) }}\n"})}),"\n",(0,n.jsx)(t.p,{children:"After choosing hudi as the file_format you can create materialized datasets using dbt, which offers additional benefits that are unique to the Hudi table format such as field-level upserts/deletes."}),"\n",(0,n.jsx)(t.h2,{id:"step-3-how-to-read-the-raw-data-incrementally",children:"Step 3: How to read the raw data incrementally?"}),"\n",(0,n.jsx)(t.p,{children:"Before we learn how to build incremental materialization, let\u2019s quickly learn, What are materializations in dbt? Materializations are strategies for persisting dbt models in a lakehouse. There are four types of materializations built into dbt. They are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"table"}),"\n",(0,n.jsx)(t.li,{children:"view"}),"\n",(0,n.jsx)(t.li,{children:"incremental"}),"\n",(0,n.jsx)(t.li,{children:"ephemeral"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Among all the materialization types, only incremental models allow dbt to insert or update records into a table since the last time that dbt was run, which unlocks the powers of Hudi, we will dive into the details."}),"\n",(0,n.jsx)(t.p,{children:"To use incremental models, you need to perform these two activities:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Tell dbt how to filter the rows on the incremental executions"}),"\n",(0,n.jsx)(t.li,{children:"Define the uniqueness constraint of the model (required when using >= Hudi 0.10.1 version)"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"how-to-apply-filters-on-an-incremental-run",children:"How to apply filters on an incremental run?"}),"\n",(0,n.jsxs)(t.p,{children:["dbt provides you a macro ",(0,n.jsx)(t.code,{children:"is_incremental()"})," which is very useful to define the filters exclusively for incremental materializations."]}),"\n",(0,n.jsxs)(t.p,{children:['Often, you\'ll want to filter for "new" rows, as in, rows that have been created since the last time dbt ran this model. The best way to find the timestamp of the most recent run of this model is by checking the most recent timestamp in your target table. dbt makes it easy to query your target table by using the "',(0,n.jsxs)(t.a,{href:"https://docs.getdbt.com/reference/dbt-jinja-functions/this",children:["{",this,"}"]}),'" variable.']}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",metastring:'title="models/my_model.sql"',children:"{{\n   config(\n       materialized='incremental',\n       file_format='hudi',\n   )\n}}\n\nselect\n   *\nfrom raw_app_data.events\n{% if is_incremental() %}\n   -- this filter will only be applied on an incremental run\n   where event_time > (select max(event_time) from {{ this }})\n{% endif %}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"how-to-define-the-uniqueness-constraint",children:"How to define the uniqueness constraint?"}),"\n",(0,n.jsx)(t.p,{children:"A unique_key is the primary key of the dataset, which determines whether a record has new values and should be updated/deleted, or inserted."}),"\n",(0,n.jsx)(t.p,{children:"You can define the unique_key in the configuration block at the top of your model. This unique_key will act as the primaryKey (hoodie.datasource.write.recordkey.field) on the hudi table."}),"\n",(0,n.jsx)(t.h2,{id:"step-4-how-to-use-the-upsert-feature-while-writing-datasets",children:"Step 4: How to use the upsert feature while writing datasets?"}),"\n",(0,n.jsx)(t.p,{children:"dbt offers multiple load strategies when loading the transformed datasets, such as:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"append (default)"}),"\n",(0,n.jsx)(t.li,{children:"insert_overwrite (optional)"}),"\n",(0,n.jsx)(t.li,{children:"merge (optional, Only available for Hudi and Delta formats)"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"By default dbt uses the append strategy, which may cause duplicate rows when you execute dbt run command multiple times on the same payload."}),"\n",(0,n.jsx)(t.p,{children:"When you choose the insert_overwrite strategy, dbt will overwrite the entire partition or full table load for every dbt run, which causes unnecessary overheads and is very expensive."}),"\n",(0,n.jsx)(t.p,{children:"In addition to all the existing strategies to load the data, with hudi you can use the exclusive merge strategy when using incremental materialization. Using the merge strategy you can perform field-level updates/deletes on your data lakehouse which is performant and cost-efficient. As a result, you will get access to fresher data and accelerated insights."}),"\n",(0,n.jsx)(t.h3,{id:"how-to-perform-field-level-updates",children:"How to perform field-level updates?"}),"\n",(0,n.jsx)(t.p,{children:"If you are using the merge strategy and have specified a unique_key, by default, dbt will entirely overwrite matched rows with new values."}),"\n",(0,n.jsxs)(t.p,{children:["Since Apache Spark adapter supports the merge strategy, you may optionally pass a list of column names to a ",(0,n.jsx)(t.code,{children:"merge_update_columns"})," config. In that case, dbt will update only the columns specified by the config, and keep the previous values of other columns."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",metastring:'title="models/my_model.sql"',children:"{{ config(\n   materialized = 'incremental',\n   incremental_strategy = 'merge',\n   file_format = 'hudi',\n   unique_key = 'id',\n   merge_update_columns = ['msg', 'updated_ts'],\n) }}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"how-to-configure-additional-hoodie-custom-configs",children:"How to configure additional hoodie custom configs?"}),"\n",(0,n.jsx)(t.p,{children:"When you want to specify additional hudi configs, you can do that with the options config:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",metastring:'title="models/my_model.sql"',children:"{{ config(\n   materialized='incremental',\n   file_format='hudi',\n   incremental_strategy='merge',\n   options={\n       'type': 'mor',\n       'primaryKey': 'id',\n       'precombineKey': 'ts',\n   },\n   unique_key='id',\n   partition_by='datestr',\n   pre_hook=[\"set spark.sql.datetime.java8API.enabled=false;\"],\n  )\n}}\n"})}),"\n",(0,n.jsx)(t.p,{children:"Hope you understood the benefits of using Apache Hudi with dbt to build your next open lakehouse, good luck!"})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},86738:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/hudi_dbt_lakehouse-14b1cb2c180ecb95dc78e3b4c44a6301.png"},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>l});var n=a(96540);const i={},o=n.createContext(i);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);
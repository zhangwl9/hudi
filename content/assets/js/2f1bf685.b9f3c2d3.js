"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[63291],{78845:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=t(74848),n=t(28453);const s={title:"Google BigQuery",keywords:["hudi","gcp","bigquery"],summary:"Introduce BigQuery integration in Hudi."},r=void 0,a={id:"gcp_bigquery",title:"Google BigQuery",description:"Hudi tables can be queried from Google Cloud BigQuery as external tables. As of",source:"@site/versioned_docs/version-0.14.0/gcp_bigquery.md",sourceDirName:".",slug:"/gcp_bigquery",permalink:"/docs/0.14.0/gcp_bigquery",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.14.0/gcp_bigquery.md",tags:[],version:"0.14.0",frontMatter:{title:"Google BigQuery",keywords:["hudi","gcp","bigquery"],summary:"Introduce BigQuery integration in Hudi."},sidebar:"docs",previous:{title:"Hive Metastore",permalink:"/docs/0.14.0/syncing_metastore"},next:{title:"Apache XTable (incubating)",permalink:"/docs/0.14.0/syncing_xtable"}},d={},l=[{value:"Sync Modes",id:"sync-modes",level:2},{value:"Manifest File",id:"manifest-file",level:3},{value:"Benefits of using the new manifest approach:",id:"benefits-of-using-the-new-manifest-approach",level:4},{value:"View Over Files (Legacy)",id:"view-over-files-legacy",level:3},{value:"Configurations",id:"configurations",level:2},{value:"Partition Handling",id:"partition-handling",level:3},{value:"Example",id:"example",level:2}];function c(e){const i={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.p,{children:["Hudi tables can be queried from ",(0,o.jsx)(i.a,{href:"https://cloud.google.com/bigquery",children:"Google Cloud BigQuery"})," as external tables. As of\nnow, the Hudi-BigQuery integration only works for hive-style partitioned Copy-On-Write and Read-Optimized Merge-On-Read tables."]}),"\n",(0,o.jsx)(i.h2,{id:"sync-modes",children:"Sync Modes"}),"\n",(0,o.jsx)(i.h3,{id:"manifest-file",children:"Manifest File"}),"\n",(0,o.jsxs)(i.p,{children:["As of version 0.14.0, the ",(0,o.jsx)(i.code,{children:"BigQuerySyncTool"})," supports syncing table to BigQuery using ",(0,o.jsx)(i.a,{href:"https://cloud.google.com/blog/products/data-analytics/bigquery-manifest-file-support-for-open-table-format-queries",children:"manifests"}),". On the first run, the tool will create a manifest file representing the current base files in the table and a table in BigQuery based on the provided configurations. The tool produces a new manifest file on each subsequent run and will update the schema of the table in BigQuery if the schema changes in your Hudi table."]}),"\n",(0,o.jsx)(i.h4,{id:"benefits-of-using-the-new-manifest-approach",children:"Benefits of using the new manifest approach:"}),"\n",(0,o.jsxs)("ol",{children:[(0,o.jsx)("li",{children:"Only the files in the manifest can be scanned leading to less cost and better performance for your queries"}),(0,o.jsx)("li",{children:"The schema is now synced from the Hudi commit metadata allowing for proper schema evolution"}),(0,o.jsx)("li",{children:"Lists no longer have unnecessary nesting when querying in BigQuery as list inference is enabled by default"}),(0,o.jsx)("li",{children:"Partition column no longer needs to be dropped from the files due to new schema handling improvements"})]}),"\n",(0,o.jsxs)(i.p,{children:["To enable this feature, set ",(0,o.jsx)(i.code,{children:"hoodie.gcp.bigquery.sync.use_bq_manifest_file"})," to true."]}),"\n",(0,o.jsx)(i.h3,{id:"view-over-files-legacy",children:"View Over Files (Legacy)"}),"\n",(0,o.jsxs)(i.p,{children:["This is the current default behavior to preserve compatibility as users upgrade to 0.14.0 and beyond.",(0,o.jsx)(i.br,{}),"\n","After run, the sync tool will create 2 tables and 1 view in the target dataset in BigQuery. The tables and the view\nshare the same name prefix, which is taken from the Hudi table name. Query the view for the same results as querying the\nCopy-on-Write Hudi table.",(0,o.jsx)(i.br,{}),"\n",(0,o.jsx)(i.strong,{children:"NOTE:"})," The view can scan all of the parquet files under your table's base path so it is recommended to upgrade to the manifest based approach for improved cost and performance."]}),"\n",(0,o.jsx)(i.h2,{id:"configurations",children:"Configurations"}),"\n",(0,o.jsxs)(i.p,{children:["Hudi uses ",(0,o.jsx)(i.code,{children:"org.apache.hudi.gcp.bigquery.BigQuerySyncTool"})," to sync tables. It works with ",(0,o.jsx)(i.code,{children:"HoodieStreamer"})," via\nsetting sync tool class. A few BigQuery-specific configurations are required."]}),"\n",(0,o.jsxs)(i.table,{children:[(0,o.jsx)(i.thead,{children:(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.th,{style:{textAlign:"left"},children:"Config"}),(0,o.jsx)(i.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,o.jsxs)(i.tbody,{children:[(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{style:{textAlign:"left"},children:(0,o.jsx)(i.code,{children:"hoodie.gcp.bigquery.sync.project_id"})}),(0,o.jsx)(i.td,{style:{textAlign:"left"},children:"The target Google Cloud project"})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{style:{textAlign:"left"},children:(0,o.jsx)(i.code,{children:"hoodie.gcp.bigquery.sync.dataset_name"})}),(0,o.jsx)(i.td,{style:{textAlign:"left"},children:"BigQuery dataset name; create before running the sync tool"})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{style:{textAlign:"left"},children:(0,o.jsx)(i.code,{children:"hoodie.gcp.bigquery.sync.dataset_location"})}),(0,o.jsx)(i.td,{style:{textAlign:"left"},children:"Region info of the dataset; same as the GCS bucket that stores the Hudi table"})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{style:{textAlign:"left"},children:(0,o.jsx)(i.code,{children:"hoodie.gcp.bigquery.sync.source_uri"})}),(0,o.jsx)(i.td,{style:{textAlign:"left"},children:"A wildcard path pattern pointing to the first level partition; partition key can be specified or auto-inferred. Only required for partitioned tables"})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{style:{textAlign:"left"},children:(0,o.jsx)(i.code,{children:"hoodie.gcp.bigquery.sync.source_uri_prefix"})}),(0,o.jsxs)(i.td,{style:{textAlign:"left"},children:["The common prefix of the ",(0,o.jsx)(i.code,{children:"source_uri"}),", usually it's the path to the Hudi table, trailing slash does not matter."]})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{style:{textAlign:"left"},children:(0,o.jsx)(i.code,{children:"hoodie.gcp.bigquery.sync.base_path"})}),(0,o.jsx)(i.td,{style:{textAlign:"left"},children:"The usual basepath config for Hudi table."})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{style:{textAlign:"left"},children:(0,o.jsx)(i.code,{children:"hoodie.gcp.bigquery.sync.use_bq_manifest_file"})}),(0,o.jsx)(i.td,{style:{textAlign:"left"},children:"Set to true to enable the manifest based sync"})]})]})]}),"\n",(0,o.jsxs)(i.p,{children:["Refer to ",(0,o.jsx)(i.code,{children:"org.apache.hudi.gcp.bigquery.BigQuerySyncConfig"})," for the complete configuration list."]}),"\n",(0,o.jsx)(i.h3,{id:"partition-handling",children:"Partition Handling"}),"\n",(0,o.jsxs)(i.p,{children:["In addition to the BigQuery-specific configs, you will need to use hive style partitioning for partition pruning in BigQuery. On top of that, the value in partition path will be the value returned for that field in your query. For example if you partition on a time-millis field, ",(0,o.jsx)(i.code,{children:"time"}),", with an output format of ",(0,o.jsx)(i.code,{children:"time=yyyy-MM-dd"}),", the query will return ",(0,o.jsx)(i.code,{children:"time"})," values with day level granularity instead of the original milliseconds so keep this in mind while setting up your tables."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{children:"hoodie.datasource.write.hive_style_partitioning = 'true'\n"})}),"\n",(0,o.jsx)(i.p,{children:"For the view based sync you must also specify the following configurations:"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{children:"hoodie.datasource.write.drop.partition.columns  = 'true'\nhoodie.partition.metafile.use.base.format       = 'true'\n"})}),"\n",(0,o.jsx)(i.h2,{id:"example",children:"Example"}),"\n",(0,o.jsxs)(i.p,{children:["Below shows an example for running ",(0,o.jsx)(i.code,{children:"BigQuerySyncTool"})," with ",(0,o.jsx)(i.code,{children:"HoodieStreamer"}),"."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-shell",children:"spark-submit --master yarn \\\n--packages com.google.cloud:google-cloud-bigquery:2.10.4 \\\n--jars /opt/hudi-gcp-bundle-0.13.0.jar \\\n--class org.apache.hudi.utilities.streamer.HoodieStreamer \\\n/opt/hudi-utilities-bundle_2.12-0.13.0.jar \\\n--target-base-path gs://my-hoodie-table/path \\\n--target-table mytable \\\n--table-type COPY_ON_WRITE \\\n--base-file-format PARQUET \\\n# ... other Hudi Streamer options\n--enable-sync \\\n--sync-tool-classes org.apache.hudi.gcp.bigquery.BigQuerySyncTool \\\n--hoodie-conf hoodie.streamer.source.dfs.root=gs://my-source-data/path \\\n--hoodie-conf hoodie.gcp.bigquery.sync.project_id=hudi-bq \\\n--hoodie-conf hoodie.gcp.bigquery.sync.dataset_name=rxusandbox \\\n--hoodie-conf hoodie.gcp.bigquery.sync.dataset_location=asia-southeast1 \\\n--hoodie-conf hoodie.gcp.bigquery.sync.table_name=mytable \\\n--hoodie-conf hoodie.gcp.bigquery.sync.base_path=gs://rxusandbox/testcases/stocks/data/target/${NOW} \\\n--hoodie-conf hoodie.gcp.bigquery.sync.partition_fields=year,month,day \\\n--hoodie-conf hoodie.gcp.bigquery.sync.source_uri=gs://my-hoodie-table/path/year=* \\\n--hoodie-conf hoodie.gcp.bigquery.sync.source_uri_prefix=gs://my-hoodie-table/path/ \\\n--hoodie-conf hoodie.gcp.bigquery.sync.use_file_listing_from_metadata=true \\\n--hoodie-conf hoodie.gcp.bigquery.sync.assume_date_partitioning=false \\\n--hoodie-conf hoodie.datasource.hive_sync.mode=jdbc \\\n--hoodie-conf hoodie.datasource.hive_sync.jdbcurl=jdbc:hive2://localhost:10000 \\\n--hoodie-conf hoodie.datasource.hive_sync.skip_ro_suffix=true \\\n--hoodie-conf hoodie.datasource.hive_sync.ignore_exceptions=false \\\n--hoodie-conf hoodie.datasource.hive_sync.database=mydataset \\\n--hoodie-conf hoodie.datasource.hive_sync.table=mytable \\\n--hoodie-conf hoodie.datasource.write.recordkey.field=mykey \\\n--hoodie-conf hoodie.datasource.write.partitionpath.field=year,month,day \\\n--hoodie-conf hoodie.datasource.write.precombine.field=ts \\\n--hoodie-conf hoodie.datasource.write.keygenerator.type=COMPLEX \\\n--hoodie-conf hoodie.datasource.write.hive_style_partitioning=true \\\n--hoodie-conf hoodie.datasource.write.drop.partition.columns=true \\\n--hoodie-conf hoodie.partition.metafile.use.base.format=true \\\n--hoodie-conf hoodie.metadata.enable=true \\\n"})})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>a});var o=t(96540);const n={},s=o.createContext(n);function r(e){const i=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(s.Provider,{value:i},e.children)}}}]);
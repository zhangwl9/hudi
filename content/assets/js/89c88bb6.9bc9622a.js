"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[68253],{21461:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var a=i(74848),o=i(28453);const n={title:"Bootstrapping",keywords:["hudi","migration","use case"],summary:"In this page, we will discuss some available tools for migrating your existing table into a Hudi table",last_modified_at:new Date("2019-12-30T19:59:57.000Z")},r=void 0,s={id:"migration_guide",title:"Bootstrapping",description:"Hudi maintains metadata such as commit timeline and indexes to manage a table. The commit timelines helps to understand the actions happening on a table as well as the current state of a table. Indexes are used by Hudi to maintain a record key to file id mapping to efficiently locate a record. At the moment, Hudi supports writing only parquet columnar formats.",source:"@site/versioned_docs/version-0.11.1/migration_guide.md",sourceDirName:".",slug:"/migration_guide",permalink:"/docs/0.11.1/migration_guide",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.11.1/migration_guide.md",tags:[],version:"0.11.1",frontMatter:{title:"Bootstrapping",keywords:["hudi","migration","use case"],summary:"In this page, we will discuss some available tools for migrating your existing table into a Hudi table",last_modified_at:"2019-12-30T19:59:57.000Z"},sidebar:"docs",previous:{title:"Google BigQuery",permalink:"/docs/0.11.1/gcp_bigquery"},next:{title:"Compaction",permalink:"/docs/0.11.1/compaction"}},l={},d=[{value:"Approaches",id:"approaches",level:2},{value:"Use Hudi for new partitions alone",id:"use-hudi-for-new-partitions-alone",level:3},{value:"Convert existing table to Hudi",id:"convert-existing-table-to-hudi",level:3}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Hudi maintains metadata such as commit timeline and indexes to manage a table. The commit timelines helps to understand the actions happening on a table as well as the current state of a table. Indexes are used by Hudi to maintain a record key to file id mapping to efficiently locate a record. At the moment, Hudi supports writing only parquet columnar formats.\nTo be able to start using Hudi for your existing table, you will need to migrate your existing table into a Hudi managed table. There are a couple of ways to achieve this."}),"\n",(0,a.jsx)(t.h2,{id:"approaches",children:"Approaches"}),"\n",(0,a.jsx)(t.h3,{id:"use-hudi-for-new-partitions-alone",children:"Use Hudi for new partitions alone"}),"\n",(0,a.jsx)(t.p,{children:"Hudi can be used to manage an existing table without affecting/altering the historical data already present in the\ntable. Hudi has been implemented to be compatible with such a mixed table with a caveat that either the complete\nHive partition is Hudi managed or not. Thus the lowest granularity at which Hudi manages a table is a Hive\npartition. Start using the datasource API or the WriteClient to write to the table and make sure you start writing\nto a new partition or convert your last N partitions into Hudi instead of the entire table. Note, since the historical\npartitions are not managed by HUDI, none of the primitives provided by HUDI work on the data in those partitions. More concretely, one cannot perform upserts or incremental pull on such older partitions not managed by the HUDI table.\nTake this approach if your table is an append only type of table and you do not expect to perform any updates to existing (or non Hudi managed) partitions."}),"\n",(0,a.jsx)(t.h3,{id:"convert-existing-table-to-hudi",children:"Convert existing table to Hudi"}),"\n",(0,a.jsx)(t.p,{children:"Import your existing table into a Hudi managed table. Since all the data is Hudi managed, none of the limitations\nof Approach 1 apply here. Updates spanning any partitions can be applied to this table and Hudi will efficiently\nmake the update available to queries. Note that not only do you get to use all Hudi primitives on this table,\nthere are other additional advantages of doing this. Hudi automatically manages file sizes of a Hudi managed table\n. You can define the desired file size when converting this table and Hudi will ensure it writes out files\nadhering to the config. It will also ensure that smaller files later get corrected by routing some new inserts into\nsmall files rather than writing new small ones thus maintaining the health of your cluster."}),"\n",(0,a.jsx)(t.p,{children:"There are a few options when choosing this approach."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Option 1"}),"\nUse the HoodieDeltaStreamer tool. HoodieDeltaStreamer supports bootstrap with --run-bootstrap command line option. There are two types of bootstrap,\nMETADATA_ONLY and FULL_RECORD. METADATA_ONLY will generate just skeleton base files with keys/footers, avoiding full cost of rewriting the dataset.\nFULL_RECORD will perform a full copy/rewrite of the data as a Hudi table."]}),"\n",(0,a.jsx)(t.p,{children:"Here is an example for running FULL_RECORD bootstrap and keeping hive style partition with HoodieDeltaStreamer."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"spark-submit --master local \\\n--conf 'spark.serializer=org.apache.spark.serializer.KryoSerializer' \\\n--class org.apache.hudi.utilities.deltastreamer.HoodieDeltaStreamer `ls packaging/hudi-utilities-bundle/target/hudi-utilities-bundle-*.jar` \\\n--run-bootstrap \\\n--target-base-path /tmp/hoodie/bootstrap_table \\\n--target-table bootstrap_table \\\n--table-type COPY_ON_WRITE \\\n--hoodie-conf hoodie.bootstrap.base.path=/tmp/source_table \\\n--hoodie-conf hoodie.datasource.write.recordkey.field=${KEY_FIELD} \\\n--hoodie-conf hoodie.datasource.write.partitionpath.field=${PARTITION_FIELD} \\\n--hoodie-conf hoodie.datasource.write.precombine.field=${PRECOMBINE_FILED} \\\n--hoodie-conf hoodie.bootstrap.keygen.class=org.apache.hudi.keygen.SimpleKeyGenerator \\\n--hoodie-conf hoodie.bootstrap.full.input.provider=org.apache.hudi.bootstrap.SparkParquetBootstrapDataProvider \\\n--hoodie-conf hoodie.bootstrap.mode.selector=org.apache.hudi.client.bootstrap.selector.BootstrapRegexModeSelector \\\n--hoodie-conf hoodie.bootstrap.mode.selector.regex.mode=FULL_RECORD \\\n--hoodie-conf hoodie.datasource.write.hive_style_partitioning=true\n"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Option 2"}),"\nFor huge tables, this could be as simple as :"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'for partition in [list of partitions in source table] {\n        val inputDF = spark.read.format("any_input_format").load("partition_path")\n        inputDF.write.format("org.apache.hudi").option()....save("basePath")\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Option 3"}),"\nWrite your own custom logic of how to load an existing table into a Hudi managed one. Please read about the RDD API\n",(0,a.jsx)(t.a,{href:"/docs/quick-start-guide",children:"here"}),". Using the bootstrap run CLI. Once hudi has been built via ",(0,a.jsx)(t.code,{children:"mvn clean install -DskipTests"}),", the shell can be\nfired by via ",(0,a.jsx)(t.code,{children:"cd hudi-cli && ./hudi-cli.sh"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"hudi->bootstrap run --srcPath /tmp/source_table --targetPath /tmp/hoodie/bootstrap_table --tableName bootstrap_table --tableType COPY_ON_WRITE --rowKeyField ${KEY_FIELD} --partitionPathField ${PARTITION_FIELD} --sparkMaster local --hoodieConfigs hoodie.datasource.write.hive_style_partitioning=true --selectorClass org.apache.hudi.client.bootstrap.selector.FullRecordBootstrapModeSelector\n"})}),"\n",(0,a.jsx)(t.p,{children:'Unlike deltaStream, FULL_RECORD or METADATA_ONLY is set with --selectorClass, see detalis with help "bootstrap run".'})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>s});var a=i(96540);const o={},n=a.createContext(o);function r(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[92412],{45924:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var r=t(74848),i=t(28453);t(11470),t(19365);const n={title:"Release 0.9.0",sidebar_position:15,layout:"releases",toc:!0},s=void 0,o={id:"release-0.9.0",title:"Release 0.9.0",description:"Release 0.9.0 (docs)",source:"@site/releases/release-0.9.0.md",sourceDirName:".",slug:"/release-0.9.0",permalink:"/cn/releases/release-0.9.0",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"Release 0.9.0",sidebar_position:15,layout:"releases",toc:!0},sidebar:"releases",previous:{title:"Release 0.10.0",permalink:"/cn/releases/release-0.10.0"},next:{title:"Release 0.8.0",permalink:"/cn/releases/release-0.8.0"}},l={},d=[{value:"Release 0.9.0 (docs)",id:"release-090-docs",level:2},{value:"Migration Guide for this release",id:"migration-guide-for-this-release",level:2},{value:"Release Highlights",id:"release-highlights",level:2},{value:"Spark SQL DML and DDL Support",id:"spark-sql-dml-and-ddl-support",level:3},{value:"Query side improvements",id:"query-side-improvements",level:3},{value:"Writer side improvements",id:"writer-side-improvements",level:3},{value:"Flink Integration Improvements",id:"flink-integration-improvements",level:3},{value:"DeltaStreamer",id:"deltastreamer",level:3},{value:"Raw Release Notes",id:"raw-release-notes",level:2}];function c(e){const a={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.h2,{id:"release-090-docs",children:[(0,r.jsx)(a.a,{href:"https://github.com/apache/hudi/releases/tag/release-0.9.0",children:"Release 0.9.0"})," (",(0,r.jsx)(a.a,{href:"/docs/0.9.0/quick-start-guide",children:"docs"}),")"]}),"\n",(0,r.jsx)(a.h2,{id:"migration-guide-for-this-release",children:"Migration Guide for this release"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"If migrating from an older release, please also check the upgrade instructions for each subsequent release below."}),"\n",(0,r.jsxs)(a.li,{children:["With 0.9.0, Hudi is adding more table properties to aid in using an existing hudi table with spark-sql.\nTo smoothly aid this transition these properties added to ",(0,r.jsx)(a.code,{children:"hoodie.properties"})," file. Whenever Hudi is launched with\nnewer table version i.e 2 (or moving from pre 0.9.0 to 0.9.0), an upgrade step will be executed automatically.\nThis automatic upgrade step will happen just once per Hudi table as the ",(0,r.jsx)(a.code,{children:"hoodie.table.version"})," will be updated in\nproperty file after upgrade is completed."]}),"\n",(0,r.jsxs)(a.li,{children:["Similarly, a command line tool for Downgrading (command - ",(0,r.jsx)(a.code,{children:"downgrade"}),") is added if in case some users want to\ndowngrade Hudi from table version ",(0,r.jsx)(a.code,{children:"2"})," to ",(0,r.jsx)(a.code,{children:"1"})," or move from Hudi 0.9.0 to pre 0.9.0. This needs to be executed from a\n0.9.0 ",(0,r.jsx)(a.code,{children:"hudi-cli"})," binary/script."]}),"\n",(0,r.jsxs)(a.li,{children:["With this release, we added a new framework to track config properties in code, moving away from string variables that\nhold property names and values. This move helps us automate configuration doc generation and much more. While we still\nsupport the older configs string variables, users are encouraged to use the new ",(0,r.jsx)(a.code,{children:"ConfigProperty"})," equivalents, as noted\nin the deprecation notices. In most cases, it is as simple as calling ",(0,r.jsx)(a.code,{children:".key()"})," and ",(0,r.jsx)(a.code,{children:".defaultValue()"})," on the corresponding\nalternative. e.g ",(0,r.jsx)(a.code,{children:"RECORDKEY_FIELD_OPT_KEY"})," can be replaced by ",(0,r.jsx)(a.code,{children:"RECORDKEY_FIELD_NAME.key()"})]}),"\n",(0,r.jsxs)(a.li,{children:["If set ",(0,r.jsx)(a.code,{children:"URL_ENCODE_PARTITIONING_OPT_KEY=true"})," ",(0,r.jsx)(a.em,{children:"and"})," ",(0,r.jsx)(a.code,{children:"<"})," and ",(0,r.jsx)(a.code,{children:">"})," are present in the URL partition paths, users would\nneed to migrate the table due to encoding logic changed: ",(0,r.jsx)(a.code,{children:"<"})," (encoded as ",(0,r.jsx)(a.code,{children:"%3C"}),") and ",(0,r.jsx)(a.code,{children:">"})," (encoded as ",(0,r.jsx)(a.code,{children:"%3E"}),") won't be escaped in 0.9.0."]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"release-highlights",children:"Release Highlights"}),"\n",(0,r.jsx)(a.h3,{id:"spark-sql-dml-and-ddl-support",children:"Spark SQL DML and DDL Support"}),"\n",(0,r.jsxs)(a.p,{children:["0.9.0 adds ",(0,r.jsx)(a.strong,{children:"experimental"})," support for DDL/DMLs using Spark SQL, taking a huge step towards making Hudi more easily accessible and\noperable by all personas (non-engineers, analysts etc). Users can now use ",(0,r.jsx)(a.code,{children:"CREATE TABLE....USING HUDI"})," and ",(0,r.jsx)(a.code,{children:"CREATE TABLE .. AS SELECT"}),"\nstatements to directly create and manage tables in catalogs like Hive. Users can then use ",(0,r.jsx)(a.code,{children:"INSERT"}),", ",(0,r.jsx)(a.code,{children:"UPDATE"}),", ",(0,r.jsx)(a.code,{children:"MERGE INTO"})," and ",(0,r.jsx)(a.code,{children:"DELETE"}),"\nsql statements to manipulate data. In addition, ",(0,r.jsx)(a.code,{children:"INSERT OVERWRITE"})," statement can be used to overwrite existing data in the table or partition\nfor existing batch ETL pipelines. For more information, checkout our docs ",(0,r.jsx)(a.a,{href:"/docs/quick-start-guide",children:"here"})," clicking on ",(0,r.jsx)(a.code,{children:"SparkSQL"})," tab.\nPlease see ",(0,r.jsx)(a.a,{href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+25%3A+Spark+SQL+Extension+For+Hudi",children:"RFC-25"}),"\nfor more implementation details."]}),"\n",(0,r.jsx)(a.h3,{id:"query-side-improvements",children:"Query side improvements"}),"\n",(0,r.jsxs)(a.p,{children:["Hudi tables are now registered with Hive as spark datasource tables, meaning Spark SQL on these tables now uses the datasource as well,\ninstead of relying on the Hive fallbacks within Spark, which are ill-maintained/cumbersome. This unlocks many optimizations such as the\nuse of Hudi's own ",(0,r.jsx)(a.a,{href:"https://github.com/apache/hudi/blob/bf5a52e51bbeaa089995335a0a4c55884792e505/hudi-spark-datasource/hudi-spark/src/main/scala/org/apache/hudi/HoodieFileIndex.scala#L46",children:"FileIndex"}),"\nimplementation for optimized caching and the use of the Hudi metadata table, for faster listing of large tables. We have also added support for\n",(0,r.jsx)(a.a,{href:"/docs/quick-start-guide#time-travel-query",children:"timetravel query"}),", for spark datasource."]}),"\n",(0,r.jsx)(a.h3,{id:"writer-side-improvements",children:"Writer side improvements"}),"\n",(0,r.jsxs)(a.p,{children:["Virtual keys support has been added where users can avoid adding meta fields to hudi table and leverage existing fields to populate record keys and partition paths.\nOne needs to disable ",(0,r.jsx)(a.a,{href:"/docs/configurations#hoodiepopulatemetafields",children:"this"})," config to enable virtual keys."]}),"\n",(0,r.jsxs)(a.p,{children:["Bulk Insert operations using ",(0,r.jsx)(a.a,{href:"/docs/configurations#hoodiedatasourcewriterowwriterenable",children:"row writer enabled"})," now supports pre-combining,\nsort modes and user defined partitioners and now turned on by default for fast inserts."]}),"\n",(0,r.jsxs)(a.p,{children:["Hudi performs automatic cleanup of uncommitted data, which has now been enhanced to be performant over cloud storage, even for\nextremely large tables. Specifically, a new marker mechanism has been implemented leveraging the timeline server to perform\ncentrally co-ordinated batched read/write of file markers to underlying storage. You can turn this using this ",(0,r.jsx)(a.a,{href:"/docs/configurations#hoodiewritemarkerstype",children:"config"})," and learn more\nabout it on this ",(0,r.jsx)(a.a,{href:"/blog/2021/08/18/improving-marker-mechanism",children:"blog"}),"."]}),"\n",(0,r.jsxs)(a.p,{children:["Async Clustering support has been added to both DeltaStreamer and Spark Structured Streaming Sink. More on this can be found in this\n",(0,r.jsx)(a.a,{href:"/blog/2021/08/23/async-clustering",children:"blog post"}),". In addition, we have added a new utility class ",(0,r.jsx)(a.a,{href:"https://github.com/apache/hudi/blob/bf5a52e51bbeaa089995335a0a4c55884792e505/hudi-utilities/src/main/java/org/apache/hudi/utilities/HoodieClusteringJob.java",children:"HoodieClusteringJob"}),"\nto assist in building and executing a clustering plan together as a standalone spark job."]}),"\n",(0,r.jsxs)(a.p,{children:["Users can choose to drop fields used to generate partition paths, using ",(0,r.jsx)(a.code,{children:"hoodie.datasource.write.drop.partition.columns=true"}),", to support\nquerying of Hudi snapshots using systems like BigQuery, which cannot handle this."]}),"\n",(0,r.jsxs)(a.p,{children:["Hudi uses different ",(0,r.jsx)(a.a,{href:"/docs/configurations#hoodiecommonspillablediskmaptype",children:"types of spillable maps"}),", for internally handling merges (compaction, updates or even MOR snapshot queries). In 0.9.0, we have added\nsupport for ",(0,r.jsx)(a.a,{href:"/docs/configurations#hoodiecommondiskmapcompressionenabled",children:"compression"})," for the bitcask style default option and introduced a new spillable map backed by rocksDB, which can be more performant for large\nbulk updates or working with large base file sizes."]}),"\n",(0,r.jsxs)(a.p,{children:["Added a new write operation ",(0,r.jsx)(a.code,{children:"delete_partition"})," operation, with support in spark. Users can leverage this to delete older partitions in bulk, in addition to\nrecord level deletes. Deletion of specific partitions can be done using this ",(0,r.jsx)(a.a,{href:"/docs/configurations#hoodiedatasourcewritepartitionstodelete",children:"config"}),"."]}),"\n",(0,r.jsx)(a.p,{children:"Support for Huawei Cloud Object Storage, BAIDU AFS storage format, Baidu BOS storage in Hudi."}),"\n",(0,r.jsxs)(a.p,{children:["A ",(0,r.jsx)(a.a,{href:"https://github.com/apache/hudi/blob/bf5a52e51bbeaa089995335a0a4c55884792e505/hudi-client/hudi-spark-client/src/main/java/org/apache/hudi/client/validator/SparkPreCommitValidator.java",children:"pre commit validator framework"}),"\nhas been added for spark engine, which can used for DeltaStreamer and Spark Datasource writers. Users can leverage this to add any validations to be executed before committing writes to Hudi.\nThree validators come out-of-box"]}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.a,{href:"https://github.com/apache/hudi/blob/bf5a52e51bbeaa089995335a0a4c55884792e505/hudi-client/hudi-spark-client/src/main/java/org/apache/hudi/client/validator/SqlQueryEqualityPreCommitValidator.java",children:"org.apache.hudi.client.validator.SqlQueryEqualityPreCommitValidator"})," can be used to validate for equality of rows before and after the commit."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.a,{href:"https://github.com/apache/hudi/blob/bf5a52e51bbeaa089995335a0a4c55884792e505/hudi-client/hudi-spark-client/src/main/java/org/apache/hudi/client/validator/SqlQueryInequalityPreCommitValidator.java",children:"org.apache.hudi.client.validator.SqlQueryInequalityPreCommitValidator"})," can be used to validate for inequality of rows before and after the commit."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.a,{href:"https://github.com/apache/hudi/blob/bf5a52e51bbeaa089995335a0a4c55884792e505/hudi-client/hudi-spark-client/src/main/java/org/apache/hudi/client/validator/SqlQuerySingleResultPreCommitValidator.java",children:"org.apache.hudi.client.validator.SqlQuerySingleResultPreCommitValidator"})," can be used to validate that a query on the table results in a specific value."]}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["These can be configured by setting ",(0,r.jsx)(a.code,{children:"hoodie.precommit.validators=<comma separated list of validator class names>"}),". Users can also provide their own implementations by extending the abstract class ",(0,r.jsx)(a.a,{href:"https://github.com/apache/hudi/blob/bf5a52e51bbeaa089995335a0a4c55884792e505/hudi-client/hudi-spark-client/src/main/java/org/apache/hudi/client/validator/SparkPreCommitValidator.java",children:"SparkPreCommitValidator"}),"\nand overriding this method"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-java",children:"void validateRecordsBeforeAndAfter(Dataset<Row> before, \n                                   Dataset<Row> after, \n                                   Set<String> partitionsAffected)\n"})}),"\n",(0,r.jsx)(a.h3,{id:"flink-integration-improvements",children:"Flink Integration Improvements"}),"\n",(0,r.jsxs)(a.p,{children:["The Flink writer now supports propagation of CDC format for MOR table, by turning on the option ",(0,r.jsx)(a.code,{children:"changelog.enabled=true"}),". Hudi would then persist all change flags of each record,\nusing the streaming reader of Flink, user can do stateful computation based on these change logs. Note that when the table is compacted with async compaction service, all the\nintermediate changes are merged into one(last record), to only have UPSERT semantics."]}),"\n",(0,r.jsxs)(a.p,{children:["Flink writing now also has most feature parity with spark writing, with addition of write operations like ",(0,r.jsx)(a.code,{children:"bulk_insert"}),", ",(0,r.jsx)(a.code,{children:"insert_overwrite"}),", support for non-partitioned tables,\nautomatic cleanup of uncommitted data, global indexing support, hive style partitioning and handling of partition path updates. Writing also supports a new log append mode, where\nno records are de-duplicated and base files are directly written for each flush. To use this mode, set ",(0,r.jsx)(a.code,{children:"write.insert.deduplicate=false"}),"."]}),"\n",(0,r.jsx)(a.p,{children:"Flink readers now support streaming reads from COW/MOR tables. Deletions are emitted by default in streaming read mode, the downstream receives the DELETE message as a Hoodie record with empty payload."}),"\n",(0,r.jsx)(a.p,{children:"Hive sync has been greatly improved by support different Hive versions(1.x, 2.x, 3.x). Hive sync can also now be done asynchronously."}),"\n",(0,r.jsx)(a.p,{children:"Flink Streamer tool now supports transformers."}),"\n",(0,r.jsx)(a.h3,{id:"deltastreamer",children:"DeltaStreamer"}),"\n",(0,r.jsx)(a.p,{children:"We have enhanced Deltastreamer utility with 3 new sources."}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"https://github.com/apache/hudi/blob/bf5a52e51bbeaa089995335a0a4c55884792e505/hudi-utilities/src/main/java/org/apache/hudi/utilities/sources/JdbcSource.java",children:"JDBC source"})," can take a extraction SQL statement and\nincrementally fetch data out of sources supporting JDBC. This can be useful for e.g when reading data from RDBMS sources. Note that, this approach may need periodic re-bootstrapping to ensure data consistency, although being much simpler to operate over CDC based approaches."]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"https://github.com/apache/hudi/blob/bf5a52e51bbeaa089995335a0a4c55884792e505/hudi-utilities/src/main/java/org/apache/hudi/utilities/sources/SqlSource.java",children:"SQLSource"})," takes a Spark SQL statement to fetch data out of existing tables and\ncan be very useful for easy SQL based backfills use-cases e.g: backfilling just one column for the past N months."]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"https://github.com/apache/hudi/blob/bf5a52e51bbeaa089995335a0a4c55884792e505/hudi-utilities/src/main/java/org/apache/hudi/utilities/sources/S3EventsHoodieIncrSource.java",children:"S3EventsHoodieIncrSource"})," and ",(0,r.jsx)(a.a,{href:"https://github.com/apache/hudi/blob/bf5a52e51bbeaa089995335a0a4c55884792e505/hudi-utilities/src/main/java/org/apache/hudi/utilities/sources/S3EventsSource.java",children:"S3EventsSource"}),"\nassist in reading data from S3 reliably and efficiently ingesting that to Hudi. Existing approach using ",(0,r.jsx)(a.code,{children:"*DFSSource"})," source classes uses last modification time of files as checkpoint to pull in new files.\nBut, if large number of files have the same modification time, this might miss some files to be read from the source.  These two sources (S3EventsHoodieIncrSource and S3EventsSource) together ensures data\nis reliably ingested from S3 into Hudi by leveraging AWS SNS and SQS services that subscribes to file events from the source bucket. ",(0,r.jsx)(a.a,{href:"/blog/2021/08/23/s3-events-source",children:"This blog post"})," presents a model for\nscalable, reliable incremental ingestion by using these two sources in tandem."]}),"\n",(0,r.jsx)(a.p,{children:"In addition to pulling events from kafka using regular offset format, we also added support for timestamp based fetches, that can\nhelp with initial backfill/bootstrap scenarios. We have also added support for passing in basic auth credentials in schema registry provider url with schema provider."}),"\n",(0,r.jsx)(a.h2,{id:"raw-release-notes",children:"Raw Release Notes"}),"\n",(0,r.jsxs)(a.p,{children:["The raw release notes are available ",(0,r.jsx)(a.a,{href:"https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12322822&version=12350027",children:"here"})]})]})}function u(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},19365:(e,a,t)=>{t.d(a,{A:()=>s});t(96540);var r=t(34164);const i={tabItem:"tabItem_Ymn6"};var n=t(74848);function s(e){let{children:a,hidden:t,className:s}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:t,children:a})}},11470:(e,a,t)=>{t.d(a,{A:()=>y});var r=t(96540),i=t(34164),n=t(23104),s=t(56347),o=t(205),l=t(57485),d=t(31682),c=t(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??function(e){return u(e).map((e=>{let{props:{value:a,label:t,attributes:r,default:i}}=e;return{value:a,label:t,attributes:r,default:i}}))}(t);return function(e){const a=(0,d.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function p(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:t}=e;const i=(0,s.W6)(),n=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,l.aZ)(n),(0,r.useCallback)((e=>{if(!n)return;const a=new URLSearchParams(i.location.search);a.set(n,e),i.replace({...i.location,search:a.toString()})}),[n,i])]}function f(e){const{defaultValue:a,queryString:t=!1,groupId:i}=e,n=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:n}))),[d,u]=m({queryString:t,groupId:i}),[f,b]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[i,n]=(0,c.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:i}),g=(()=>{const e=d??f;return p({value:e,tabValues:n})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,n]),tabValues:n}}var b=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function x(e){let{className:a,block:t,selectedValue:r,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,n.a_)(),c=e=>{const a=e.currentTarget,t=l.indexOf(a),i=o[t].value;i!==r&&(d(a),s(i))},u=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;a=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;a=l[t]??l[l.length-1];break}}a?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},a),children:o.map((e=>{let{value:a,label:t,attributes:n}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===a?0:-1,"aria-selected":r===a,ref:e=>l.push(e),onKeyDown:u,onClick:c,...n,className:(0,i.A)("tabs__item",g.tabItem,n?.className,{"tabs__item--active":r===a}),children:t??a},a)}))})}function j(e){let{lazy:a,children:t,selectedValue:n}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n})))})}function w(e){const a=f(e);return(0,v.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...a,...e}),(0,v.jsx)(j,{...a,...e})]})}function y(e){const a=(0,b.A)();return(0,v.jsx)(w,{...e,children:u(e.children)},String(a))}},28453:(e,a,t)=>{t.d(a,{R:()=>s,x:()=>o});var r=t(96540);const i={},n=r.createContext(i);function s(e){const a=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(n.Provider,{value:a},e.children)}}}]);
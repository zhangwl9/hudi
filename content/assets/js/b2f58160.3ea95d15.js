"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[29523],{39742:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=a(74848),n=a(28453);a(11470),a(19365);const i={title:"Release 0.7.0",sidebar_position:17,layout:"releases",toc:!0},s=void 0,l={id:"release-0.7.0",title:"Release 0.7.0",description:"Release 0.7.0 (docs)",source:"@site/releases/release-0.7.0.md",sourceDirName:".",slug:"/release-0.7.0",permalink:"/releases/release-0.7.0",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:17,frontMatter:{title:"Release 0.7.0",sidebar_position:17,layout:"releases",toc:!0},sidebar:"releases",previous:{title:"Release 0.8.0",permalink:"/releases/release-0.8.0"},next:{title:"Release 0.6.0",permalink:"/releases/release-0.6.0"}},o={},d=[{value:"Release 0.7.0 (docs)",id:"release-070-docs",level:2},{value:"Migration Guide for this release",id:"migration-guide-for-this-release",level:2},{value:"Release Highlights",id:"release-highlights",level:2},{value:"Clustering",id:"clustering",level:3},{value:"Metadata Table",id:"metadata-table",level:3},{value:"Java/Flink Writers",id:"javaflink-writers",level:3},{value:"Writer side improvements",id:"writer-side-improvements",level:3},{value:"Query side improvements",id:"query-side-improvements",level:3},{value:"Raw Release Notes",id:"raw-release-notes",level:3}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h2,{id:"release-070-docs",children:[(0,r.jsx)(t.a,{href:"https://github.com/apache/hudi/releases/tag/release-0.7.0",children:"Release 0.7.0"})," (",(0,r.jsx)(t.a,{href:"/docs/0.7.0/quick-start-guide",children:"docs"}),")"]}),"\n",(0,r.jsx)(t.h2,{id:"migration-guide-for-this-release",children:"Migration Guide for this release"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"If migrating from release older than 0.5.3, please also check the upgrade instructions for each subsequent release below."}),"\n",(0,r.jsx)(t.li,{children:"Specifically check upgrade instructions for 0.6.0. This release does not introduce any new table versions."}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.code,{children:"HoodieRecordPayload"})," interface deprecated existing methods, in favor of new ones that also lets us pass properties at runtime. Users are\nencouraged to migrate out of the deprecated methods, since they will be removed in 0.9.0."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"release-highlights",children:"Release Highlights"}),"\n",(0,r.jsx)(t.h3,{id:"clustering",children:"Clustering"}),"\n",(0,r.jsxs)(t.p,{children:["0.7.0 brings the ability to cluster your Hudi tables, to optimize for file sizes and also storage layout. Hudi will continue to\nenforce file sizes, as it always has been, during the write. Clustering provides more flexibility to increase the file sizes\ndown the line or ability to ingest data at much fresher intervals, and later coalesce them into bigger files. ",(0,r.jsx)(t.a,{href:"https://gist.github.com/vinothchandar/d7fa1338cddfae68390afcdfe310f94e#gistcomment-3383478",children:"Microbenchmarks"}),"\ndemonstrate a 3-4x reduction in query performance, for a 10-20x reduction in file sizes."]}),"\n",(0,r.jsxs)(t.p,{children:["Additionally, clustering data based on fields that are often used in queries, dramatically\n",(0,r.jsx)(t.a,{href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+19+Clustering+data+for+freshness+and+query+performance#RFC19Clusteringdataforfreshnessandqueryperformance-PerformanceEvaluation",children:"improves query performance"})," by allowing many files to be\ncompletely skipped. This is very similar to the benefits of clustering delivered by ",(0,r.jsx)(t.a,{href:"https://docs.snowflake.com/en/user-guide/tables-clustering-micropartitions",children:"cloud data warehouses"}),".\nWe are proud to announce that such capability is freely available in open source, for the first time, through the 0.7.0 release."]}),"\n",(0,r.jsxs)(t.p,{children:["Please see ",(0,r.jsx)(t.a,{href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+19+Clustering+data+for+freshness+and+query+performance",children:"RFC-19"})," for more implementation details\nand checkout configs ",(0,r.jsx)(t.a,{href:"/docs/configurations#clustering-configs",children:"here"})," for how to use it in your pipelines. At the moment, we support both inline and async clustering modes."]}),"\n",(0,r.jsx)(t.h3,{id:"metadata-table",children:"Metadata Table"}),"\n",(0,r.jsx)(t.p,{children:"Since Hudi was born at Uber, on a HDFS backed data lake, we have since been a tad apathetic to the plight of listing performance on cloud storage (partly in hopes that\ncloud providers will fix it over time:)). Nonetheless, 0.7.0 changes this and lays out the foundation for storing more indexes, metadata in an internal metadata table,\nwhich is implemented using a Hudi MOR table - which means it's compacted, cleaned and also incrementally updated like any other Hudi table. Also, unlike similar\nimplementations in other projects, we have chosen to index the file listing information as HFiles, which offers point-lookup performance to fetch listings for a single partition."}),"\n",(0,r.jsxs)(t.p,{children:["In 0.7.0 release, ",(0,r.jsx)(t.code,{children:"hoodie.metadata.enable=true"})," on the writer side, will populate the metadata table with file system listings\nso all operations don't have to explicitly use ",(0,r.jsx)(t.code,{children:"fs.listStatus()"})," anymore on data partitions. We have introduced a sync mechanism that\nkeeps syncing file additions/deletions on the data timeline, to the metadata table, after each write operation."]}),"\n",(0,r.jsxs)(t.p,{children:["In our testing, on a large 250K file table, the metadata table delivers ",(0,r.jsx)(t.a,{href:"https://github.com/apache/hudi/pull/2441#issuecomment-761742963",children:"2-3x speedup"})," over parallelized\nlisting done by the Hudi spark writer. Please check ",(0,r.jsx)(t.a,{href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+15%3A+HUDI+File+Listing+and+Query+Planning+Improvements",children:"RFC-15 (ongoing)"}),"\nand the ",(0,r.jsx)(t.a,{href:"/docs/configurations#metadata-config",children:"configurations"}),", which offer flags to help adopt this feature safely in your production pipelines."]}),"\n",(0,r.jsx)(t.h3,{id:"javaflink-writers",children:"Java/Flink Writers"}),"\n",(0,r.jsx)(t.p,{children:"Hudi was originally designed with a heavy dependency on Spark, given it had simply solve specific problems at Uber. But, as we have evolved as an Apache\nproject, we realized the need for abstracting the internal table format, table services and writing layers of code. In 0.7.0, we have additionally added\nJava and Flink based writers, as initial steps in this direction."}),"\n",(0,r.jsxs)(t.p,{children:["Specifically, the ",(0,r.jsx)(t.code,{children:"HoodieFlinkStreamer"})," allows for Hudi Copy-On-Write table to built by streaming data from a Kafka topic."]}),"\n",(0,r.jsx)(t.h3,{id:"writer-side-improvements",children:"Writer side improvements"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Spark3 Support"}),": We have added support for writing/querying data using Spark 3. please be sure to use the scala 2.12 hudi-spark-bundle."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Parallelized Listing"}),": We have holistically moved all listings under the ",(0,r.jsx)(t.code,{children:"HoodieTableMetadata"})," interface, which does multi-threaded/spark parallelized list operations.\nWe expect this to improve cleaner, compaction scheduling performance, even when the metadata table is not used."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Kafka Commit Callbacks"}),": We have added ",(0,r.jsx)(t.code,{children:"HoodieWriteCommitKafkaCallback"}),", that publishes an event to Apache Kafka, for every commit operation. This can be used to trigger\nderived/ETL pipelines similar to data ",(0,r.jsx)(t.a,{href:"https://airflow.apache.org/docs/apache-airflow/stable/_api/airflow/sensors/index",children:"sensors"})," in Apache Airflow."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Insert Overwrite/Insert Overwrite Table"}),": We have added these two new write operation types, predominantly to help existing batch ETL jobs, which typically overwrite entire\ntables/partitions each run. These operations are much cheaper, than having to issue upserts, given they are bulk replacing the target table.\nCheck ",(0,r.jsx)(t.a,{href:"/docs/quick-start-guide#insert-overwrite-table",children:"here"})," for examples."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Delete Partition"}),": For users of WriteClient/RDD level apis, we have added an API to delete an entire partition, again without issuing deletes at the record level."]}),"\n",(0,r.jsxs)(t.li,{children:["The current default ",(0,r.jsx)(t.code,{children:"OverwriteWithLatestAvroPayload"})," will overwrite the value in storage, even if for e.g the upsert was reissued for an older value of the key.\nAdded a new ",(0,r.jsx)(t.code,{children:"DefaultHoodieRecordPayload"})," and a new payload config ",(0,r.jsx)(t.code,{children:"hoodie.payload.ordering.field"})," helps specify a field, that the incoming upsert record can be compared with\nthe record on storage, to decide whether to overwrite or not. Users are encouraged to adopt this newer, more flexible model."]}),"\n",(0,r.jsxs)(t.li,{children:["Hive sync supports hourly partitions via ",(0,r.jsx)(t.code,{children:"SlashEncodedHourPartitionValueExtractor"})]}),"\n",(0,r.jsx)(t.li,{children:"Support for IBM Cloud storage, Open J9 JVM."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"query-side-improvements",children:"Query side improvements"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Incremental Query on MOR (Spark Datasource)"}),": Spark datasource now has experimental support for incremental queries on MOR table. This feature will be hardened and certified\nin the next release, along with a large overhaul of the spark datasource implementation. (sshh!:))"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Metadata Table For File Listings"}),": Users can also leverage the metadata table on the query side for the following query paths. For Hive, setting the ",(0,r.jsx)(t.code,{children:"hoodie.metadata.enable=true"})," session\nproperty and for SparkSQL on Hive registered tables using ",(0,r.jsx)(t.code,{children:"--conf spark.hadoop.hoodie.metadata.enable=true"}),", allows the file listings for the partition to be fetched out of the metadata\ntable, instead of listing the underlying DFS partition."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"raw-release-notes",children:"Raw Release Notes"}),"\n",(0,r.jsxs)(t.p,{children:["The raw release notes are available ",(0,r.jsx)(t.a,{href:"https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12322822&version=12348721",children:"here"})]})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>s});a(96540);var r=a(34164);const n={tabItem:"tabItem_Ymn6"};var i=a(74848);function s(e){let{children:t,hidden:a,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,s),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>j});var r=a(96540),n=a(34164),i=a(23104),s=a(56347),l=a(205),o=a(57485),d=a(31682),c=a(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}(a);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=h(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[d,u]=f({queryString:a,groupId:n}),[m,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,c.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),b=(()=>{const e=d??m;return p({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var g=a(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(74848);function x(e){let{className:t,block:a,selectedValue:r,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),c=e=>{const t=e.currentTarget,a=o.indexOf(t),n=l[a].value;n!==r&&(d(t),s(n))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;t=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;t=o[a]??o[o.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},t),children:l.map((e=>{let{value:t,label:a,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:u,onClick:c,...i,className:(0,n.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function y(e){let{lazy:t,children:a,selectedValue:i}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function w(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,n.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(y,{...t,...e})]})}function j(e){const t=(0,g.A)();return(0,v.jsx)(w,{...e,children:u(e.children)},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>l});var r=a(96540);const n={},i=r.createContext(n);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[33049],{98977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(74848),a=n(28453);const r={title:"Metadata Table",keywords:["hudi","metadata","S3 file listings"]},o=void 0,l={id:"metadata",title:"Metadata Table",description:"Motivation for a Metadata Table",source:"@site/versioned_docs/version-0.11.1/metadata.md",sourceDirName:".",slug:"/metadata",permalink:"/cn/docs/0.11.1/metadata",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.11.1/metadata.md",tags:[],version:"0.11.1",frontMatter:{title:"Metadata Table",keywords:["hudi","metadata","S3 file listings"]},sidebar:"docs",previous:{title:"File Layouts",permalink:"/cn/docs/0.11.1/file_layouts"},next:{title:"Write Operations",permalink:"/cn/docs/0.11.1/write_operations"}},s={},d=[{value:"Motivation for a Metadata Table",id:"motivation-for-a-metadata-table",level:2},{value:"Some numbers from a study:",id:"some-numbers-from-a-study",level:3},{value:"Supporting Multi-Modal Index",id:"supporting-multi-modal-index",level:3},{value:"Enable Hudi Metadata Table and Multi-Modal Index",id:"enable-hudi-metadata-table-and-multi-modal-index",level:2},{value:"Deployment considerations",id:"deployment-considerations",level:2},{value:"Deployment Model A: Single writer with inline table services",id:"deployment-model-a-single-writer-with-inline-table-services",level:3},{value:"Deployment Model B: Single writer with async table services",id:"deployment-model-b-single-writer-with-async-table-services",level:3},{value:"Deployment Model C: Multi-writer",id:"deployment-model-c-multi-writer",level:3}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"motivation-for-a-metadata-table",children:"Motivation for a Metadata Table"}),"\n",(0,i.jsx)(t.p,{children:'The Apache Hudi Metadata Table can significantly improve read/write performance of your queries. The main purpose of the\nMetadata Table is to eliminate the requirement for the "list files" operation.'}),"\n",(0,i.jsx)(t.p,{children:"When reading and writing data, file listing operations are performed to get the current view of the file system.\nWhen data sets are large, listing all the files may be a performance bottleneck, but more importantly in the case of cloud storage systems\nlike AWS S3, the large number of file listing requests sometimes causes throttling due to certain request limits.\nThe Metadata Table will instead proactively maintain the list of files and remove the need for recursive file listing operations"}),"\n",(0,i.jsx)(t.h3,{id:"some-numbers-from-a-study",children:"Some numbers from a study:"}),"\n",(0,i.jsx)(t.p,{children:"Running a TPCDS benchmark the p50 list latencies for a single folder scales ~linearly with the amount of files/objects:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Number of files/objects"}),(0,i.jsx)(t.th,{children:"100"}),(0,i.jsx)(t.th,{children:"1K"}),(0,i.jsx)(t.th,{children:"10K"}),(0,i.jsx)(t.th,{children:"100K"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"P50 list latency"}),(0,i.jsx)(t.td,{children:"50ms"}),(0,i.jsx)(t.td,{children:"131ms"}),(0,i.jsx)(t.td,{children:"1062ms"}),(0,i.jsx)(t.td,{children:"9932ms"})]})})]}),"\n",(0,i.jsx)(t.p,{children:"Whereas listings from the Metadata Table will not scale linearly with file/object count and instead take about 100-500ms per read even for very large tables.\nEven better, the timeline server caches portions of the metadata (currently only for writers), and provides ~10ms performance for listings."}),"\n",(0,i.jsx)(t.h3,{id:"supporting-multi-modal-index",children:"Supporting Multi-Modal Index"}),"\n",(0,i.jsx)(t.p,{children:"Multi-modal index can drastically improve the lookup performance in file index and query latency with data skipping.\nBloom filter index containing the file-level bloom filter facilitates the key lookup and file pruning.  The column stats\nindex containing the statistics of all columns improves file pruning based on key and column value range in both the\nwriter and the reader, in query planning in Spark for example.  Multi-modal index is implemented as independent partitions\ncontaining the indices in the metadata table."}),"\n",(0,i.jsx)(t.h2,{id:"enable-hudi-metadata-table-and-multi-modal-index",children:"Enable Hudi Metadata Table and Multi-Modal Index"}),"\n",(0,i.jsxs)(t.p,{children:["Since 0.11.0, the metadata table with synchronous updates and metadata-table-based file listing are enabled by default.\nThere are prerequisite configurations and steps in ",(0,i.jsx)(t.a,{href:"#deployment-considerations",children:"Deployment considerations"})," to\nsafely use this feature.  The metadata table and related file listing functionality can still be turned off by setting\n",(0,i.jsx)(t.a,{href:"/docs/configurations#hoodiemetadataenable",children:(0,i.jsx)(t.code,{children:"hoodie.metadata.enable"})})," to ",(0,i.jsx)(t.code,{children:"false"}),".  For 0.10.1 and prior releases, metadata\ntable is disabled by default, and you can turn it on by setting the same config to ",(0,i.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"If you turn off the metadata table after enabling, be sure to wait for a few commits so that the metadata table is fully\ncleaned up, before re-enabling the metadata table again."}),"\n",(0,i.jsxs)(t.p,{children:["The multi-modal index is introduced in 0.11.0 release.  They are disabled by default.  You can choose to enable bloom\nfilter index by setting ",(0,i.jsx)(t.code,{children:"hoodie.metadata.index.bloom.filter.enable"})," to ",(0,i.jsx)(t.code,{children:"true"})," and enable column stats index by setting\n",(0,i.jsx)(t.code,{children:"hoodie.metadata.index.column.stats.enable"})," to ",(0,i.jsx)(t.code,{children:"true"}),", when metadata table is enabled.  In 0.11.0 release, data skipping\nto improve queries in Spark now relies on the column stats index in metadata table.  The enabling of metadata table and\ncolumn stats index is prerequisite to enabling data skipping with ",(0,i.jsx)(t.code,{children:"hoodie.enable.data.skipping"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"deployment-considerations",children:"Deployment considerations"}),"\n",(0,i.jsx)(t.p,{children:"To ensure that Metadata Table stays up to date, all write operations on the same Hudi table need additional configurations\nbesides the above in different deployment models.  Before enabling metadata table, all writers on the same table must\nbe stopped."}),"\n",(0,i.jsx)(t.h3,{id:"deployment-model-a-single-writer-with-inline-table-services",children:"Deployment Model A: Single writer with inline table services"}),"\n",(0,i.jsxs)(t.p,{children:["If your current deployment model is single writer and all table services (cleaning, clustering, compaction) are configured\nto be inline, such as Deltastreamer sync-once mode and Spark Datasource with default configs, there is no additional configuration\nrequired.  After setting ",(0,i.jsx)(t.a,{href:"/docs/configurations#hoodiemetadataenable",children:(0,i.jsx)(t.code,{children:"hoodie.metadata.enable"})})," to ",(0,i.jsx)(t.code,{children:"true"}),", restarting\nthe single writer is sufficient to safely enable metadata table."]}),"\n",(0,i.jsx)(t.h3,{id:"deployment-model-b-single-writer-with-async-table-services",children:"Deployment Model B: Single writer with async table services"}),"\n",(0,i.jsxs)(t.p,{children:["If your current deployment model is single writer along with async table services (such as cleaning, clustering, compaction)\nrunning in the same process, such as Deltastreamer continuous mode writing MOR table, Spark streaming (where compaction is async by default),\nand your own job setup enabling async table services inside the same writer, it is a must to have the optimistic concurrency control,\nthe lock provider, and lazy failed write clean policy configured before enabling metadata table as follows.  This is to guarantee\nthe proper behavior of ",(0,i.jsx)(t.a,{href:"/docs/concurrency_control#enabling-multi-writing",children:"optimistic concurrency control"})," when enabling\nmetadata table. Failing to follow the configuration guide leads to loss of data.  Note that these configurations are\nrequired only if metadata table is enabled in this deployment model."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-properties",children:"hoodie.write.concurrency.mode=optimistic_concurrency_control\nhoodie.cleaner.policy.failed.writes=LAZY\nhoodie.write.lock.provider=org.apache.hudi.client.transaction.lock.InProcessLockProvider\n"})}),"\n",(0,i.jsxs)(t.p,{children:["If multiple writers in different processes are present, including one writer with async table services, please refer to\n",(0,i.jsx)(t.a,{href:"#deployment-model-c-multi-writer",children:"Deployment Model C: Multi-writer"})," for configs, with the difference of using a\ndistributed lock provider.  Note that running a separate compaction (",(0,i.jsx)(t.code,{children:"HoodieCompactor"}),") or clustering (",(0,i.jsx)(t.code,{children:"HoodieClusteringJob"}),")\njob apart from the ingestion writer is considered as multi-writer deployment, as they are not running in the same\nprocess which cannot rely on the in-process lock provider."]}),"\n",(0,i.jsx)(t.h3,{id:"deployment-model-c-multi-writer",children:"Deployment Model C: Multi-writer"}),"\n",(0,i.jsx)(t.p,{children:"If your current deployment model is multi-writer along with a lock provider and other required configs set for every writer\nas follows, there is no additional configuration required.  You can bring up the writers sequentially after stopping the\nwriters for enabling metadata table.  Applying the proper configurations to only partial writers leads to loss of data\nfrom the inconsistent writer. So, ensure you enable metadata table across all writers."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-properties",children:"hoodie.write.concurrency.mode=optimistic_concurrency_control\nhoodie.cleaner.policy.failed.writes=LAZY\nhoodie.write.lock.provider=<distributed-lock-provider-classname>\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Note that there are 3 different distributed ",(0,i.jsx)(t.a,{href:"/docs/concurrency_control#enabling-multi-writing",children:"lock providers available"}),"\nto choose from: ",(0,i.jsx)(t.code,{children:"ZookeeperBasedLockProvider"}),", ",(0,i.jsx)(t.code,{children:"HiveMetastoreBasedLockProvider"}),", and ",(0,i.jsx)(t.code,{children:"DynamoDBBasedLockProvider"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var i=n(96540);const a={},r=i.createContext(a);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);
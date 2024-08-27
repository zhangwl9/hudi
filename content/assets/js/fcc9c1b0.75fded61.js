"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[292],{63718:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=i(74848),n=i(28453);const a={title:"Design & Concepts",keywords:["hudi","writing","reading"]},o="Design & Concepts FAQ",r={id:"faq_design_and_concepts",title:"Design & Concepts",description:"How does Hudi ensure atomicity?",source:"@site/docs/faq_design_and_concepts.md",sourceDirName:".",slug:"/faq_design_and_concepts",permalink:"/docs/next/faq_design_and_concepts",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/docs/faq_design_and_concepts.md",tags:[],version:"current",frontMatter:{title:"Design & Concepts",keywords:["hudi","writing","reading"]},sidebar:"docs",previous:{title:"General",permalink:"/docs/next/faq_general"},next:{title:"Writing Tables",permalink:"/docs/next/faq_writing_tables"}},c={},d=[{value:"How does Hudi ensure atomicity?",id:"how-does-hudi-ensure-atomicity",level:3},{value:"Does Hudi extend the Hive table layout?",id:"does-hudi-extend-the-hive-table-layout",level:3},{value:"What concurrency control approaches does Hudi adopt?",id:"what-concurrency-control-approaches-does-hudi-adopt",level:3},{value:"Hudi\u2019s commits are based on transaction start time instead of completed time. Does this cause data loss or inconsistency in case of incremental and time travel queries?",id:"hudis-commits-are-based-on-transaction-start-time-instead-of-completed-time-does-this-cause-data-loss-or-inconsistency-in-case-of-incremental-and-time-travel-queries",level:3},{value:"How does Hudi plan to address the liveness issue above for incremental queries?",id:"how-does-hudi-plan-to-address-the-liveness-issue-above-for-incremental-queries",level:3},{value:"Does Hudi\u2019s use of wall clock timestamp for instants pose any clock skew issues?",id:"does-hudis-use-of-wall-clock-timestamp-for-instants-pose-any-clock-skew-issues",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"design--concepts-faq",children:"Design & Concepts FAQ"})}),"\n",(0,s.jsx)(t.h3,{id:"how-does-hudi-ensure-atomicity",children:"How does Hudi ensure atomicity?"}),"\n",(0,s.jsxs)(t.p,{children:['Hudi writers atomically move an inflight write operation to a "completed" state by writing an object/file to the ',(0,s.jsx)(t.a,{href:"timeline",children:"timeline"})," folder, identifying the write operation with an instant time that denotes the time the action is deemed to have occurred. This is achieved on the underlying DFS (in the case of S3/Cloud Storage, by an atomic PUT operation) and can be observed by files of the pattern ",(0,s.jsx)(t.code,{children:"<instant>.<action>.<state>"})," in Hudi\u2019s timeline."]}),"\n",(0,s.jsx)(t.h3,{id:"does-hudi-extend-the-hive-table-layout",children:"Does Hudi extend the Hive table layout?"}),"\n",(0,s.jsx)(t.p,{children:"Hudi is very different from Hive in important aspects described below. However, based on practical considerations, it chooses to be compatible with Hive table layout by adopting partitioning, schema evolution and being queryable through Hive query engine. Here are the key aspect where Hudi differs:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Unlike Hive, Hudi does not remove the partition columns from the data files. Hudi in fact adds record level ",(0,s.jsx)(t.a,{href:"/tech-specs#meta-fields",children:"meta fields"})," including instant time, primary record key, and partition path to the data to support efficient upserts and ",(0,s.jsx)(t.a,{href:"/learn/use_cases/#incremental-processing-pipelines",children:"incremental queries/ETL"}),".\xa0 Hudi tables can be non-partitioned and the Hudi metadata table adds rich indexes on Hudi tables which are beyond simple Hive extensions."]}),"\n",(0,s.jsxs)(t.li,{children:["Hive advocates partitioning as the main remedy for most performance-based issues. Features like partition evolution and hidden partitioning are primarily based on this Hive based principle of partitioning and aim to tackle the metadata problem partially.\xa0 Whereas, Hudi biases to coarse-grained partitioning and emphasizes ",(0,s.jsx)(t.a,{href:"/docs/clustering",children:"clustering"})," for more fine-grained partitioning. Further, users can strategize and evolve the clustering asynchronously which \u201cactually\u201d help users experiencing performance issues with too granular partitions."]}),"\n",(0,s.jsx)(t.li,{children:"Hudi considers partition evolution as an anti-pattern and avoids such schemes due to the inconsistent performance of queries that goes to depend on which part of the table is being queried. Hudi\u2019s design favors consistent performance and is aware of the need to redesign to partitioning/tables to achieve the same."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"what-concurrency-control-approaches-does-hudi-adopt",children:"What concurrency control approaches does Hudi adopt?"}),"\n",(0,s.jsxs)(t.p,{children:["Hudi provides snapshot isolation between all three types of processes - writers, readers, and table services, meaning they all operate on a consistent snapshot of the table. Hudi provides optimistic concurrency control (OCC) between writers, while providing lock-free, non-blocking MVCC-based concurrency control between writers and table-services and between different table services. Widely accepted database literature like \u201c",(0,s.jsx)(t.a,{href:"https://dsf.berkeley.edu/papers/fntdb07-architecture.pdf",children:"Architecture of a database system, pg 81"}),"\u201d clearly lays out 2Phase Locking, OCC and MVCC as the different concurrency control approaches. Purely OCC-based approaches assume conflicts rarely occur and suffer from significant retries and penalties for any continuous/incremental workloads which are normal for modern lake based workloads. Hudi has been cognizant about this, and has a less enthusiastic view on ",(0,s.jsx)(t.a,{href:"/blog/2021/12/16/lakehouse-concurrency-control-are-we-too-optimistic/",children:"OCC"}),", built out things like MVCC-based non-blocking async compaction (the commit time decision significantly aids this), that can have writers working non-stop with table services like compactions running in the background."]}),"\n",(0,s.jsx)(t.h3,{id:"hudis-commits-are-based-on-transaction-start-time-instead-of-completed-time-does-this-cause-data-loss-or-inconsistency-in-case-of-incremental-and-time-travel-queries",children:"Hudi\u2019s commits are based on transaction start time instead of completed time. Does this cause data loss or inconsistency in case of incremental and time travel queries?"}),"\n",(0,s.jsx)(t.p,{children:"Let\u2019s take a closer look at the scenario here: two commits C1 and C2 (with C2 starting later than C1) start with a later commit (C2) finishing first leaving the inflight transaction of the earlier commit (C1)\nbefore the completed write of the later transaction (C2) in Hudi\u2019s timeline. This is not an uncommon scenario, especially with various ingestions needs such as backfilling, deleting, bootstrapping, etc\nalongside regular writes. When/Whether the first job would commit will depend on factors such as conflicts between concurrent commits, inflight compactions, other actions on the table\u2019s timeline etc.\nIf the first job fails for some reason, Hudi will abort the earlier commit inflight (c1) and the writer has to retry next time with a new instant time > c2 much similar to other OCC implementations.\nFirstly, for snapshot queries the order of commits should not matter at all, since any incomplete writes on the active timeline is ignored by queries and cause no side-effects."}),"\n",(0,s.jsxs)(t.p,{children:["In these scenarios, it might be tempting to think of data inconsistencies/data loss when using Hudi\u2019s incremental queries. However, Hudi takes special handling\n(examples ",(0,s.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/aea5bb6f0ab824247f5e3498762ad94f643a2cb6/hudi-utilities/src/main/java/org/apache/hudi/utilities/sources/helpers/IncrSourceHelper.java#L76",children:"1"}),",\n",(0,s.jsx)(t.a,{href:"https://github.com/apache/hudi/blame/7a6543958368540d221ddc18e0c12b8d526b6859/hudi-hadoop-mr/src/main/java/org/apache/hudi/hadoop/utils/HoodieInputFormatUtils.java#L173",children:"2"}),") in incremental queries to ensure that no data\nis served beyond the point there is an inflight instant in its timeline, so no data loss or drop happens. This detection is made possible because Hudi writes first request a transaction on the timeline, before planning/executing\nthe write, as explained in the ",(0,s.jsx)(t.a,{href:"/docs/timeline#states",children:"timeline"})," section."]}),"\n",(0,s.jsxs)(t.p,{children:["In this case, on seeing C1\u2019s inflight commit (publish to timeline is atomic), C2 data (which is > C1 in the timeline) is not served until C1 inflight transitions to a terminal state such as completed or marked as failed.\nThis ",(0,s.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/master/hudi-utilities/src/test/java/org/apache/hudi/utilities/sources/TestHoodieIncrSource.java#L137",children:"test"})," demonstrates how Hudi incremental source stops proceeding until C1 completes.\nHudi favors ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Safety_and_liveness_properties",children:"safety and sacrifices liveness"}),", in such a case. For a single writer, the start times of the transactions are the same as the order of completion of transactions, and both incremental and time-travel queries work as expected.\nIn the case of multi-writer, incremental queries still work as expected but time travel queries don't. Since most time travel queries are on historical snapshots with a stable continuous timeline, this has not been implemented upto Hudi 0.13.\nHowever, a similar approach like above can be easily applied to failing time travel queries as well in this window."]}),"\n",(0,s.jsx)(t.h3,{id:"how-does-hudi-plan-to-address-the-liveness-issue-above-for-incremental-queries",children:"How does Hudi plan to address the liveness issue above for incremental queries?"}),"\n",(0,s.jsxs)(t.p,{children:["Hudi 0.14 improves the liveness aspects by enabling change streams, incremental query and time-travel based on the file/object's timestamp (similar to ",(0,s.jsx)(t.a,{href:"https://docs.delta.io/latest/delta-batch.html#query-an-older-snapshot-of-a-table-time-travel",children:"Delta Lake"}),")."]}),"\n",(0,s.jsxs)(t.p,{children:["To expand more on the long term approach, Hudi has had a proposal to streamline/improve this experience by adding a transition-time to our timeline, which will remove the ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Safety_and_liveness_properties",children:"liveness sacrifice"})," and makes it easier to understand.\nThis has been delayed for a few reasons"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Large hosted query engines and users not upgrading fast enough."}),"\n",(0,s.jsxs)(t.li,{children:["The issues brought up - [",(0,s.jsx)(t.a,{href:"faq_design_and_concepts#does-hudis-use-of-wall-clock-timestamp-for-instants-pose-any-clock-skew-issues",children:"1"}),",",(0,s.jsx)(t.a,{href:"faq_design_and_concepts#hudis-commits-are-based-on-transaction-start-time-instead-of-completed-time-does-this-cause-data-loss-or-inconsistency-in-case-of-incremental-and-time-travel-queries",children:"2"}),"],\nrelevant to this are not practically very important to users beyond good pedantic discussions,"]}),"\n",(0,s.jsxs)(t.li,{children:["Wanting to do it alongside ",(0,s.jsx)(t.a,{href:"https://github.com/apache/hudi/pull/7907",children:"non-blocking concurrency control"})," in Hudi version 1.x."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"It's planned to be addressed in the first 1.x release."}),"\n",(0,s.jsx)(t.h3,{id:"does-hudis-use-of-wall-clock-timestamp-for-instants-pose-any-clock-skew-issues",children:"Does Hudi\u2019s use of wall clock timestamp for instants pose any clock skew issues?"}),"\n",(0,s.jsxs)(t.p,{children:["Theoretically speaking, a clock skew between two writers can result in different notions of time, and order the timeline differently. But, the current NTP implementations and regions standardizing on UTC make this very impractical to happen in practice. Even many popular OLTP-based systems such as DynamoDB and Cassandra use timestamps for record level conflict detection, cloud providers/OSS NTP are moving towards atomic/synchronized clocks all the time [",(0,s.jsx)(t.a,{href:"https://aws.amazon.com/about-aws/whats-new/2017/11/introducing-the-amazon-time-sync-service/",children:"1"}),",",(0,s.jsx)(t.a,{href:"https://engineering.fb.com/2020/03/18/production-engineering/ntp-service/",children:"2"}),"]. We haven't had these as practical issues raised over the last several years, across several large scale data lakes."]}),"\n",(0,s.jsxs)(t.p,{children:["Further - Hudi\u2019s commit time can be a logical time and need not strictly be a timestamp. If there are still uniqueness concerns over clock skew, it is easy for Hudi to further extend the timestamp implementation with salts or employ ",(0,s.jsx)(t.a,{href:"https://www.cockroachlabs.com/blog/living-without-atomic-clocks/",children:"TrueTime"})," approaches that have been proven at planet scale. In short, this is not a design issue, but more of a pragmatic implementation choice, that allows us to implement unique features like async compaction in face of updates to the same file group, by scheduling actions on discrete timestamp space."]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>r});var s=i(96540);const n={},a=s.createContext(n);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);
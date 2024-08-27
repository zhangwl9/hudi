"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[13799],{17796:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=a(74848),n=a(28453);const o={title:"Lakehouse Concurrency Control: Are we too optimistic?",excerpt:"Vinoth Chandar, Creator of Apache Hudi, dives into concurrency control mechanisms",author:"vinoth",category:"blog",image:"/assets/images/blog/concurrency/MultiWriter.gif",tags:["blog","concurrency-control","apache hudi"]},r=void 0,s={permalink:"/cn/blog/2021/12/16/lakehouse-concurrency-control-are-we-too-optimistic",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-12-16-lakehouse-concurrency-control-are-we-too-optimistic.md",source:"@site/blog/2021-12-16-lakehouse-concurrency-control-are-we-too-optimistic.md",title:"Lakehouse Concurrency Control: Are we too optimistic?",description:"Transactions on data lakes are now considered a key characteristic of a Lakehouse these days. But what has actually been accomplished so far? What are the current approaches? How do they fare in real-world scenarios? These questions are the focus of this blog.",date:"2021-12-16T00:00:00.000Z",tags:[{inline:!0,label:"blog",permalink:"/cn/blog/tags/blog"},{inline:!0,label:"concurrency-control",permalink:"/cn/blog/tags/concurrency-control"},{inline:!0,label:"apache hudi",permalink:"/cn/blog/tags/apache-hudi"}],readingTime:7.535,hasTruncateMarker:!0,authors:[{name:"vinoth",key:null,page:null}],frontMatter:{title:"Lakehouse Concurrency Control: Are we too optimistic?",excerpt:"Vinoth Chandar, Creator of Apache Hudi, dives into concurrency control mechanisms",author:"vinoth",category:"blog",image:"/assets/images/blog/concurrency/MultiWriter.gif",tags:["blog","concurrency-control","apache hudi"]},unlisted:!1,prevItem:{title:"New features from Apache Hudi 0.7.0 and 0.8.0 available on Amazon EMR",permalink:"/cn/blog/2021/12/20/New-features-from-Apache-Hudi-0.7.0-and-0.8.0-available-on-Amazon-EMR"},nextItem:{title:"Apache Hudi Architecture Tools and Best Practices",permalink:"/cn/blog/2021/11/22/Apache-Hudi-Architecture-Tools-and-Best-Practices"}},c={authorsImageUrls:[void 0]},l=[{value:"Pitfalls in Lake Concurrency Control",id:"pitfalls-in-lake-concurrency-control",level:3},{value:"Model 1 : Single Writer, Inline Table Services",id:"model-1--single-writer-inline-table-services",level:3},{value:"Model 2 : Single Writer, Async Table Services",id:"model-2--single-writer-async-table-services",level:3},{value:"Model 3 : Multiple Writers",id:"model-3--multiple-writers",level:3}];function h(e){const t={a:"a",em:"em",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Transactions on data lakes are now considered a key characteristic of a Lakehouse these days. But what has actually been accomplished so far? What are the current approaches? How do they fare in real-world scenarios? These questions are the focus of this blog."}),"\n",(0,i.jsxs)(t.p,{children:["Having had the good fortune of working on diverse database projects - an RDBMS (",(0,i.jsx)(t.a,{href:"https://www.oracle.com/database/",children:"Oracle"}),"), a NoSQL key-value store (",(0,i.jsx)(t.a,{href:"https://www.slideshare.net/vinothchandar/voldemort-prototype-to-production-nectar-edits",children:"Voldemort"}),"), a streaming database (",(0,i.jsx)(t.a,{href:"https://www.confluent.io/blog/ksqldb-pull-queries-high-availability/",children:"ksqlDB"}),"), a closed-source real-time datastore and of course, Apache Hudi, I can safely say that the nature of workloads deeply influence the concurrency control mechanisms adopted in different databases. This blog will also describe how we rethought concurrency control for the data lake in Apache Hudi."]}),"\n",(0,i.jsxs)(t.p,{children:["First, let's set the record straight. RDBMS databases offer the richest set of transactional capabilities and the widest array of concurrency control ",(0,i.jsx)(t.a,{href:"https://dev.mysql.com/doc/refman/5.7/en/innodb-locking-transaction-model.html",children:"mechanisms"}),". Different isolation levels, fine grained locking, deadlock detection/avoidance, and more are possible because they have to support row-level mutations and reads across many tables while enforcing ",(0,i.jsx)(t.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/create-table-foreign-keys.html",children:"key constraints"})," and maintaining ",(0,i.jsx)(t.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/create-table-secondary-indexes.html",children:"indexes"}),". NoSQL stores offer dramatically weaker guarantees like eventual-consistency and simple row level atomicity in exchange for greater scalability for simpler workloads. Drawing a similar parallel, traditional data warehouses offer more or less the full set of capabilities that you would find in an RDBMS, over columnar data, with locking and key constraints ",(0,i.jsx)(t.a,{href:"https://docs.teradata.com/r/a8IdS6iVHR77Z9RrIkmMGg/wFPZS4jwZgSG21GnOIpEsw",children:"enforced"})," whereas cloud data warehouses seem to have focused a lot more on separating the data and compute in architecture, while offering fewer isolation levels. As a surprising example, ",(0,i.jsx)(t.a,{href:"https://docs.snowflake.com/en/sql-reference/constraints-overview.html#supported-constraint-types",children:"no enforcement"})," of key constraints!"]}),"\n",(0,i.jsx)(t.h3,{id:"pitfalls-in-lake-concurrency-control",children:"Pitfalls in Lake Concurrency Control"}),"\n",(0,i.jsxs)(t.p,{children:["Historically, data lakes have been viewed as batch jobs reading/writing files on cloud storage and it's interesting to see how most new work extends this view and implements glorified file version control using some form of \"",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Optimistic_concurrency_control",children:(0,i.jsx)(t.strong,{children:"Optimistic concurrency control"})}),'" (OCC). With OCC jobs take a table level lock to check if they have impacted overlapping files and if a conflict exists, they abort their operations completely. Without naming names, the lock is sometimes even just a JVM level lock held on a single Apache Spark driver node. Once again, this may be okay for lightweight coordination of old school batch jobs that mostly append files to tables, but cannot be applied broadly to modern data lake workloads. Such approaches are built with immutable/append-only data models in mind, which are inadequate for incremental data processing or keyed updates/deletes. OCC is very optimistic that real contention never happens. Developer evangelism comparing OCC to the full fledged transactional capabilities of an RDBMS or a traditional data warehouse is rather misinformed. Quoting Wikipedia directly - "',(0,i.jsx)(t.em,{children:"if contention for data resources is frequent, the cost of repeatedly restarting transactions hurts performance significantly, in which case other"})," ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Concurrency_control",children:(0,i.jsx)(t.em,{children:"concurrency control"})})," ",(0,i.jsx)(t.em,{children:"methods may be better suited."}),' " When conflicts do occur, they can cause massive resource wastage since you have a batch job that fails after it ran for a few hours, during every attempt!']}),"\n",(0,i.jsx)(t.p,{children:"Imagine a real-life scenario of two writer processes : an ingest writer job producing new data every 30 minutes and a deletion writer job that is enforcing GDPR, taking 2 hours to issue deletes. It's very likely for these to overlap files with random deletes, and the deletion job is almost guaranteed to starve and fail to commit each time. In database speak, mixing long running transactions with optimism leads to disappointment, since the longer the transactions the higher the probability they will overlap."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"concurrency",src:a(84066).A+"",width:"1110",height:"881"})}),"\n",(0,i.jsxs)(t.p,{children:["So, what's the alternative? Locking? Wikipedia also says - \"",(0,i.jsx)(t.em,{children:'However, locking-based ("pessimistic") methods also can deliver poor performance because locking can drastically limit effective concurrency even when deadlocks are avoided.".'})," Here is where Hudi takes a different approach, that we believe is more apt for modern lake transactions which are typically long-running and even continuous. Data lake workloads share more characteristics with high throughput stream processing jobs, than they do to standard reads/writes from a database and this is where we borrow from. In stream processing events are serialized into a single ordered log, avoiding any locks/concurrency bottlenecks and you can continuously process millions of events/sec. Hudi implements a file level, log based concurrency control protocol on the Hudi ",(0,i.jsx)(t.a,{href:"https://hudi.apache.org/docs/timeline",children:"timeline"}),", which in-turn relies on bare minimum atomic puts to cloud storage. By building on an event log as the central piece for inter process coordination, Hudi is able to offer a few flexible deployment models that offer greater concurrency over pure OCC approaches that just track table snapshots."]}),"\n",(0,i.jsx)(t.h3,{id:"model-1--single-writer-inline-table-services",children:"Model 1 : Single Writer, Inline Table Services"}),"\n",(0,i.jsx)(t.p,{children:"The simplest form of concurrency control is just no concurrency at all. A data lake table often has common services operating on it to ensure efficiency. Reclaiming storage space from older versions and logs, coalescing files (clustering in Hudi), merging deltas (compactions in Hudi), and more. Hudi can simply eliminate the need for concurrency control and maximizes throughput by supporting these table services out-of-box and running inline after every write to the table."}),"\n",(0,i.jsx)(t.p,{children:"Execution plans are idempotent, persisted to the timeline and auto-recover from failures. For most simple use-cases, this means just writing is sufficient to get a well-managed table that needs no concurrency control."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"concurrency-single-writer",src:a(76226).A+"",width:"1280",height:"720"})}),"\n",(0,i.jsx)(t.h3,{id:"model-2--single-writer-async-table-services",children:"Model 2 : Single Writer, Async Table Services"}),"\n",(0,i.jsxs)(t.p,{children:["Our delete/ingest example above is n't really that simple. While ingest/writer may just be updating the last N partitions on the table, delete may span across the entire table even. Mixing them in the same job, could slow down ingest latency by a lot. But, Hudi provides the option of running the table services in an async fashion, where most of the heavy lifting (e.g actually rewriting the columnar data by compaction service) is done asynchronously, eliminating any repeated wasteful retries whatsoever, while also optimizing the table using clustering techniques. Thus a single writer could consumes both regular updates and GDPR deletes and serialize them into a log. Given Hudi has record level indexing and avro log writes are much cheaper (as opposed to writing parquet, which can be 10x or more expensive), ingest latency can be sustained while enjoying great replayability. In fact, we were able to scale this model at ",(0,i.jsx)(t.a,{href:"https://eng.uber.com/uber-big-data-platform/",children:"Uber"}),", across 100s of petabytes, by sequencing all deletes & updates into the same source Apache Kafka topic. There's more to concurrency control than locking and Hudi accomplishes all this without needing any external locking."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"concurrency-async",src:a(84003).A+"",width:"1280",height:"720"})}),"\n",(0,i.jsx)(t.h3,{id:"model-3--multiple-writers",children:"Model 3 : Multiple Writers"}),"\n",(0,i.jsx)(t.p,{children:"But it's not always possible to serialize the deletes into the same write stream or sql based deletes are required. With multiple distributed processes, some form of locking is inevitable, but like real databases Hudi's concurrency model is intelligent enough to differentiate actual writing to the table, from table services that manage or optimize the table. Hudi offers similar optimistic concurrency control across multiple writers, but table services can still execute completely lock-free and async. This means the delete job can merely encode deletes and the ingest job can log updates, while the compaction service again applies the updates/deletes to base files. Even though the delete job and ingest job can contend and starve each other like like we mentioned above, their run-times are much lower and the wastage is drastically lower, since the compaction does the heavy-lifting of parquet/columnar data writing."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"concurrency-multi",src:a(13202).A+"",width:"1200",height:"600"})}),"\n",(0,i.jsx)(t.p,{children:"All this said, there are still many ways we can improve upon this foundation."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["For starters, Hudi has already implemented a ",(0,i.jsx)(t.a,{href:"https://hudi.apache.org/blog/2021/08/18/improving-marker-mechanism/",children:"marker mechanism"})," that tracks all the files that are part of an active write transaction and a heartbeat mechanism that can track active writers to a table. This can be directly used by other active transactions/writers to detect what other writers are doing and ",(0,i.jsx)(t.a,{href:"https://issues.apache.org/jira/browse/HUDI-1575",children:"abort early"})," if conflicts are detected, yielding the cluster resources back to other jobs sooner."]}),"\n",(0,i.jsxs)(t.li,{children:["While optimistic concurrency control is attractive when serializable snapshot isolation is desired, it's neither optimal nor the only method for dealing with concurrency between writers. We plan to implement a fully lock-free concurrency control using CRDTs and widely adopted stream processing concepts, over our log ",(0,i.jsx)(t.a,{href:"https://github.com/apache/hudi/blob/bc8bf043d5512f7afbb9d94882c4e43ee61d6f06/hudi-common/src/main/java/org/apache/hudi/common/model/HoodieRecordPayload.java#L38",children:"merge API"}),", that has already been ",(0,i.jsx)(t.a,{href:"https://hudi.apache.org/blog/2021/09/01/building-eb-level-data-lake-using-hudi-at-bytedance/#functionality-support",children:"proven"})," to sustain enormous continuous write volumes for the data lake."]}),"\n",(0,i.jsxs)(t.li,{children:["Touching upon key constraints, Hudi is the only lake transactional layer that ensures unique ",(0,i.jsx)(t.a,{href:"https://hudi.apache.org/docs/key_generation",children:"key"})," constraints today, but limited to the record key of the table. We will be looking to expand this capability in a more general form to non-primary key fields, with the said newer concurrency models."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:['Finally, for data lakes to transform successfully into lakehouses, we must learn from the failing of the "hadoop warehouse" vision, which shared similar goals with the new "lakehouse" vision. Designers did not pay closer attention to the missing technology gaps against warehouses and created unrealistic expectations from the actual software. As transactions and database functionality finally goes mainstream on data lakes, we must apply these lessons and remain candid about the current shortcomings. If you are building a lakehouse, I hope this post encourages you to closely consider various operational and efficiency aspects around concurrency control. Join our fast growing community by trying out ',(0,i.jsx)(t.a,{href:"https://hudi.apache.org/docs/overview",children:"Apache Hudi"})," or join us in conversations on ",(0,i.jsx)(t.a,{href:"https://join.slack.com/t/apache-hudi/shared_invite/zt-2ggm1fub8-_yt4Reu9djwqqVRFC7X49g",children:"Slack"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},84066:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/ConcurrencyControlConflicts-55bed17c500b3b29e4f8cdb42cf0f483.png"},13202:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/MultiWriter-fec6bf4269df78d4fa91e7a353144def.gif"},84003:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/SingleWriterAsync-3d7ddf7312381eab7fdb91a7f2746376.gif"},76226:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/SingleWriterInline-d18346421aa3f1d11a3247164389e1ce.gif"},28453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>s});var i=a(96540);const n={},o=i.createContext(n);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);
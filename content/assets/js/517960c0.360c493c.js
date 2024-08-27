"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[65350],{48923:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"0.9.0","label":"0.9.0","banner":"unmaintained","badge":true,"noIndex":false,"className":"docs-version-0.9.0","isLast":false,"docsSidebars":{"docs":[{"type":"link","label":"Overview","href":"/docs/0.9.0/overview","docId":"overview","unlisted":false},{"collapsed":false,"type":"category","label":"Quick Start","items":[{"type":"link","label":"Spark Guide","href":"/docs/0.9.0/quick-start-guide","docId":"quick-start-guide","unlisted":false},{"type":"link","label":"Flink Guide","href":"/docs/0.9.0/flink-quick-start-guide","docId":"flink-quick-start-guide","unlisted":false}],"collapsible":true},{"type":"link","label":"Use Cases","href":"/docs/0.9.0/use_cases","docId":"use_cases","unlisted":false},{"type":"link","label":"Writing Data","href":"/docs/0.9.0/writing_data","docId":"writing_data","unlisted":false},{"type":"link","label":"Schema Evolution","href":"/docs/0.9.0/schema_evolution","docId":"schema_evolution","unlisted":false},{"type":"link","label":"Concurrency Control","href":"/docs/0.9.0/concurrency_control","docId":"concurrency_control","unlisted":false},{"type":"link","label":"Querying Data","href":"/docs/0.9.0/querying_data","docId":"querying_data","unlisted":false},{"type":"link","label":"Configurations","href":"/docs/0.9.0/configurations","docId":"configurations","unlisted":false},{"type":"link","label":"Performance","href":"/docs/0.9.0/performance","docId":"performance","unlisted":false},{"type":"link","label":"Deployment","href":"/docs/0.9.0/deployment","docId":"deployment","unlisted":false},{"collapsed":true,"type":"category","label":"Storage Configurations","items":[{"type":"link","label":"Cloud Storage","href":"/docs/0.9.0/cloud","docId":"cloud","unlisted":false},{"type":"link","label":"AWS S3","href":"/docs/0.9.0/s3_hoodie","docId":"s3_hoodie","unlisted":false},{"type":"link","label":"Google Cloud","href":"/docs/0.9.0/gcs_hoodie","docId":"gcs_hoodie","unlisted":false},{"type":"link","label":"Alibaba Cloud","href":"/docs/0.9.0/oss_hoodie","docId":"oss_hoodie","unlisted":false},{"type":"link","label":"Microsoft Azure","href":"/docs/0.9.0/azure_hoodie","docId":"azure_hoodie","unlisted":false},{"type":"link","label":"Tencent Cloud","href":"/docs/0.9.0/cos_hoodie","docId":"cos_hoodie","unlisted":false},{"type":"link","label":"IBM Cloud","href":"/docs/0.9.0/ibm_cos_hoodie","docId":"ibm_cos_hoodie","unlisted":false},{"type":"link","label":"Baidu Cloud","href":"/docs/0.9.0/bos_hoodie","docId":"bos_hoodie","unlisted":false}],"collapsible":true},{"collapsed":true,"type":"category","label":"Resources","items":[{"type":"link","label":"Docker Demo","href":"/docs/0.9.0/docker_demo","docId":"docker_demo","unlisted":false},{"type":"link","label":"Metrics","href":"/docs/0.9.0/metrics","docId":"metrics","unlisted":false},{"type":"link","label":"Privacy Policy","href":"/docs/0.9.0/privacy","docId":"privacy","unlisted":false}],"collapsible":true}],"quick_links":[{"type":"link","label":"Powered By","href":"powered-by"},{"type":"link","label":"Chat with us on Slack","href":"https://join.slack.com/t/apache-hudi/shared_invite/zt-2ggm1fub8-_yt4Reu9djwqqVRFC7X49g"}]},"docs":{"azure_hoodie":{"id":"azure_hoodie","title":"Microsoft Azure","description":"In this page, we explain how to use Hudi on Microsoft Azure.","sidebar":"docs"},"bos_hoodie":{"id":"bos_hoodie","title":"Baidu Cloud","description":"In this page, we explain how to get your Hudi job to store into Baidu BOS.","sidebar":"docs"},"cli":{"id":"cli","title":"CLI","description":"Once hudi has been built, the shell can be fired by via  cd hudi-cli && ./hudi-cli.sh. A hudi table resides on DFS, in a location referred to as the basePath and"},"cloud":{"id":"cloud","title":"Cloud Storage","description":"Talking to Cloud Storage","sidebar":"docs"},"comparison":{"id":"comparison","title":"Comparison","description":"Apache Hudi fills a big void for processing data on top of DFS, and thus mostly co-exists nicely with these technologies. However,"},"concepts":{"id":"concepts","title":"Concepts","description":"Apache Hudi (pronounced \u201cHudi\u201d) provides the following streaming primitives over hadoop compatible storages"},"concurrency_control":{"id":"concurrency_control","title":"Concurrency Control","description":"In this section, we will cover Hudi\'s concurrency model and describe ways to ingest data into a Hudi Table from multiple writers; using the DeltaStreamer tool as well as","sidebar":"docs"},"configurations":{"id":"configurations","title":"Configurations","description":"This page covers the different ways of configuring your job to write/read Hudi tables. At a high level, you can control behaviour at few levels.","sidebar":"docs"},"cos_hoodie":{"id":"cos_hoodie","title":"Tencent Cloud","description":"In this page, we explain how to get your Hudi spark job to store into Tencent Cloud COS.","sidebar":"docs"},"deployment":{"id":"deployment","title":"Deployment","description":"This section provides all the help you need to deploy and operate Hudi tables at scale.","sidebar":"docs"},"docker_demo":{"id":"docker_demo","title":"Docker Demo","description":"A Demo using docker containers","sidebar":"docs"},"flink-quick-start-guide":{"id":"flink-quick-start-guide","title":"Flink Guide","description":"This guide provides a document at Hudi\'s capabilities using Flink SQL. We can feel the unique charm of Flink stream computing engine on Hudi.","sidebar":"docs"},"gcs_hoodie":{"id":"gcs_hoodie","title":"Google Cloud","description":"For Hudi storage on GCS, regional buckets provide an DFS API with strong consistency.","sidebar":"docs"},"hoodie_deltastreamer":{"id":"hoodie_deltastreamer","title":"Streaming Ingestion","description":"DeltaStreamer"},"ibm_cos_hoodie":{"id":"ibm_cos_hoodie","title":"IBM Cloud","description":"In this page, we explain how to get your Hudi spark job to store into IBM Cloud Object Storage.","sidebar":"docs"},"metrics":{"id":"metrics","title":"Metrics","description":"In this section, we will introduce the MetricsReporter and HoodieMetrics in Hudi. You can view the metrics-related configurations here.","sidebar":"docs"},"migration_guide":{"id":"migration_guide","title":"Migration","description":"Hudi maintains metadata such as commit timeline and indexes to manage a table. The commit timelines helps to understand the actions happening on a table as well as the current state of a table. Indexes are used by Hudi to maintain a record key to file id mapping to efficiently locate a record. At the moment, Hudi supports writing only parquet columnar formats."},"oss_hoodie":{"id":"oss_hoodie","title":"Alibaba Cloud","description":"In this page, we explain how to get your Hudi spark job to store into Aliyun OSS.","sidebar":"docs"},"overview":{"id":"overview","title":"Overview","description":"Apache Hudi (pronounced \u201choodie\u201d) provides streaming primitives over hadoop compatible storages","sidebar":"docs"},"performance":{"id":"performance","title":"Performance","description":"In this section, we go over some real world performance numbers for Hudi upserts, incremental pull and compare them against","sidebar":"docs"},"privacy":{"id":"privacy","title":"Privacy Policy","description":"Information about your use of this website is collected using server access logs and a tracking cookie.","sidebar":"docs"},"query_engine_setup":{"id":"query_engine_setup","title":"Query Engine Setup","description":"Spark"},"querying_data":{"id":"querying_data","title":"Querying Data","description":"Conceptually, Hudi stores data physically once on DFS, while providing 3 different ways of querying, as explained before.","sidebar":"docs"},"quick-start-guide":{"id":"quick-start-guide","title":"Spark Guide","description":"This guide provides a quick peek at Hudi\'s capabilities using spark-shell. Using Spark datasources, we will walk through","sidebar":"docs"},"s3_hoodie":{"id":"s3_hoodie","title":"AWS S3","description":"In this page, we explain how to get your Hudi spark job to store into AWS S3.","sidebar":"docs"},"schema_evolution":{"id":"schema_evolution","title":"Schema Evolution","description":"Schema evolution is a very important aspect of data management.","sidebar":"docs"},"structure":{"id":"structure","title":"Structure","description":"Hudi (pronounced \u201cHoodie\u201d) ingests & manages storage of large analytical tables over DFS (HDFS or cloud stores) and provides three types of queries."},"table_types":{"id":"table_types","title":"Table Types","description":""},"use_cases":{"id":"use_cases","title":"Use Cases","description":"Near Real-Time Ingestion","sidebar":"docs"},"writing_data":{"id":"writing_data","title":"Writing Data","description":"In this section, we will cover ways to ingest new changes from external sources or even other Hudi tables using the DeltaStreamer tool, as well as","sidebar":"docs"}}}}')}}]);
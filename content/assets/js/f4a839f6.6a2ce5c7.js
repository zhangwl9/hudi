"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[99746],{17198:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>n,toc:()=>d});var i=a(74848),o=a(28453);const s={title:"Ingest multiple tables using Hudi",excerpt:"Ingesting multiple tables using Hudi at a single go is now possible. This blog gives a detailed explanation of how to achieve the same using `HoodieMultiTableDeltaStreamer.java`",author:"pratyakshsharma",category:"blog",tags:["how-to","multi deltastreamer","apache hudi"]},r=void 0,n={permalink:"/blog/2020/08/22/ingest-multiple-tables-using-hudi",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2020-08-22-ingest-multiple-tables-using-hudi.md",source:"@site/blog/2020-08-22-ingest-multiple-tables-using-hudi.md",title:"Ingest multiple tables using Hudi",description:"When building a change data capture pipeline for already existing or newly created relational databases, one of the most common problems that one faces is simplifying the onboarding process for multiple tables. Ingesting multiple tables to Hudi dataset at a single go is now possible using HoodieMultiTableDeltaStreamer class which is a wrapper on top of the more popular HoodieDeltaStreamer class. Currently HoodieMultiTableDeltaStreamer supports COPY_ON_WRITE storage type only and the ingestion is done in a sequential way.",date:"2020-08-22T00:00:00.000Z",tags:[{inline:!0,label:"how-to",permalink:"/blog/tags/how-to"},{inline:!0,label:"multi deltastreamer",permalink:"/blog/tags/multi-deltastreamer"},{inline:!0,label:"apache hudi",permalink:"/blog/tags/apache-hudi"}],readingTime:3.55,hasTruncateMarker:!0,authors:[{name:"pratyakshsharma",key:null,page:null}],frontMatter:{title:"Ingest multiple tables using Hudi",excerpt:"Ingesting multiple tables using Hudi at a single go is now possible. This blog gives a detailed explanation of how to achieve the same using `HoodieMultiTableDeltaStreamer.java`",author:"pratyakshsharma",category:"blog",tags:["how-to","multi deltastreamer","apache hudi"]},unlisted:!1,prevItem:{title:"How nClouds Helps Accelerate Data Delivery with Apache Hudi on Amazon EMR",permalink:"/blog/2020/10/06/cdc-solution-using-hudi-by-nclouds"},nextItem:{title:"Async Compaction Deployment Models",permalink:"/blog/2020/08/21/async-compaction-deployment-model"}},l={authorsImageUrls:[void 0]},d=[{value:"Configuration",id:"configuration",level:3},{value:"Configuring schema providers",id:"configuring-schema-providers",level:3},{value:"Run Command",id:"run-command",level:3},{value:"Example",id:"example",level:3}];function c(e){const t={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["When building a change data capture pipeline for already existing or newly created relational databases, one of the most common problems that one faces is simplifying the onboarding process for multiple tables. Ingesting multiple tables to Hudi dataset at a single go is now possible using ",(0,i.jsx)(t.code,{children:"HoodieMultiTableDeltaStreamer"})," class which is a wrapper on top of the more popular ",(0,i.jsx)(t.code,{children:"HoodieDeltaStreamer"})," class. Currently ",(0,i.jsx)(t.code,{children:"HoodieMultiTableDeltaStreamer"})," supports ",(0,i.jsx)(t.strong,{children:"COPY_ON_WRITE"})," storage type only and the ingestion is done in a ",(0,i.jsx)(t.strong,{children:"sequential"})," way."]}),"\n",(0,i.jsxs)(t.p,{children:["This blog will guide you through configuring and running ",(0,i.jsx)(t.code,{children:"HoodieMultiTableDeltaStreamer"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"HoodieMultiTableDeltaStreamer"})," expects users to maintain table wise overridden properties in separate files in a dedicated config folder. Common properties can be configured via common properties file also."]}),"\n",(0,i.jsxs)(t.li,{children:["By default, hudi datasets are created under the path ",(0,i.jsx)(t.code,{children:"<base-path-prefix>/<database_name>/<name_of_table_to_be_ingested>"}),". You need to provide the names of tables to be ingested via the property ",(0,i.jsx)(t.code,{children:"hoodie.deltastreamer.ingestion.tablesToBeIngested"})," in the format ",(0,i.jsx)(t.code,{children:"<database>.<table>"}),", for example"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"hoodie.deltastreamer.ingestion.tablesToBeIngested=db1.table1,db2.table2\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["If you do not provide database name, then it is assumed the table belongs to default database and the hudi dataset for the concerned table is created under the path ",(0,i.jsx)(t.code,{children:"<base-path-prefix>/default/<name_of_table_to_be_ingested>"}),". Also there is a provision to override the default path for hudi datasets. You can create hudi dataset for a particular table by setting the property ",(0,i.jsx)(t.code,{children:"hoodie.deltastreamer.ingestion.targetBasePath"})," in table level config file"]}),"\n",(0,i.jsx)(t.li,{children:"There are a lot of properties that one might like to override per table, for example"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"hoodie.datasource.write.recordkey.field=_row_key\nhoodie.datasource.write.partitionpath.field=created_at\nhoodie.deltastreamer.source.kafka.topic=topic2\nhoodie.deltastreamer.keygen.timebased.timestamp.type=UNIX_TIMESTAMP\nhoodie.deltastreamer.keygen.timebased.input.dateformat=yyyy-MM-dd HH:mm:ss.S\nhoodie.datasource.hive_sync.table=short_trip_uber_hive_dummy_table\nhoodie.deltastreamer.ingestion.targetBasePath=s3:///temp/hudi/table1\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Properties like above need to be set for every table to be ingested. As already suggested at the beginning, users are expected to maintain separate config files for every table by setting the below property"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"hoodie.deltastreamer.ingestion.<db>.<table>.configFile=s3:///tmp/config/config1.properties\n"})}),"\n",(0,i.jsxs)(t.p,{children:["If you do not want to set the above property for every table, you can simply create config files for every table to be ingested under the config folder with the name - ",(0,i.jsx)(t.code,{children:"<database>_<table>_config.properties"}),". For example if you want to ingest table1 and table2 from dummy database, where config folder is set to ",(0,i.jsx)(t.code,{children:"s3:///tmp/config"}),", then you need to create 2 config files on the given paths - ",(0,i.jsx)(t.code,{children:"s3:///tmp/config/dummy_table1_config.properties"})," and ",(0,i.jsx)(t.code,{children:"s3:///tmp/config/dummy_table2_config.properties"}),"."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Finally you can specify all the common properties in a common properties file. Common properties file does not necessarily have to lie under config folder but it is advised to keep it along with other config files. This file will contain the below properties"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"hoodie.deltastreamer.ingestion.tablesToBeIngested=db1.table1,db2.table2\nhoodie.deltastreamer.ingestion.db1.table1.configFile=s3:///tmp/config_table1.properties\nhoodie.deltastreamer.ingestion.db2.table2.configFile=s3:///tmp/config_table2.properties\n"})}),"\n",(0,i.jsx)(t.h3,{id:"configuring-schema-providers",children:"Configuring schema providers"}),"\n",(0,i.jsxs)(t.p,{children:["It is possible to configure different schema providers for different tables or same schema provider class for all tables. All you need to do is configure the property ",(0,i.jsx)(t.code,{children:"hoodie.deltastreamer.schemaprovider.class"})," accordingly as per your use case as below -"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"hoodie.deltastreamer.schemaprovider.class=org.apache.hudi.utilities.schema.FilebasedSchemaProvider\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Further it is also possible to configure different source and target schema registry urls with ",(0,i.jsx)(t.code,{children:"SchemaRegistryProvider"})," as the schemaprovider class. Originally HoodieMultiTableDeltaStreamer was designed to cater to use cases where subject naming strategy is set to ",(0,i.jsx)(t.a,{href:"https://docs.confluent.io/platform/current/schema-registry/serdes-develop/index.html#subject-name-strategy",children:"TopicNameStrategy"})," which is the default provided by Confluent.\nWith this default strategy in place, the subject name is same as the topic name being used in kafka. Source and target schema registry urls can be configured as below with TopicNameStrategy -"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"hoodie.deltastreamer.schemaprovider.registry.baseUrl=http://localhost:8081/subjects/\nhoodie.deltastreamer.schemaprovider.registry.urlSuffix=-value/versions/latest\n"})}),"\n",(0,i.jsx)(t.p,{children:"If you want to consume different versions of your source and target subjects, you can configure as below -"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"hoodie.deltastreamer.schemaprovider.registry.baseUrl=http://localhost:8081/subjects/\nhoodie.deltastreamer.schemaprovider.registry.sourceUrlSuffix=-value/versions/latest\nhoodie.deltastreamer.schemaprovider.registry.targetUrlSuffix=-value/versions/1\n"})}),"\n",(0,i.jsx)(t.p,{children:"If you are looking to configure the schema registry urls in the most straight forward way, you can do that as below"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"hoodie.deltastreamer.schemaprovider.registry.url=http://localhost:8081/subjects/random-value/versions/latest\nhoodie.deltastreamer.schemaprovider.registry.targetUrl=http://localhost:8081/subjects/random-value/versions/latest\n"})}),"\n",(0,i.jsx)(t.h3,{id:"run-command",children:"Run Command"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"HoodieMultiTableDeltaStreamer"})," can be run similar to how one runs ",(0,i.jsx)(t.code,{children:"HoodieDeltaStreamer"}),". Please refer to the example given below for the command."]}),"\n",(0,i.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(t.p,{children:["Suppose you want to ingest table1 and table2 from db1 and want to ingest the 2 tables under the path ",(0,i.jsx)(t.code,{children:"s3:///temp/hudi"}),". You can ingest them using the below command"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"[hoodie]$ spark-submit --class org.apache.hudi.utilities.deltastreamer.HoodieMultiTableDeltaStreamer `ls packaging/hudi-utilities-bundle/target/hudi-utilities-bundle-*.jar` \\\n  --props s3:///temp/hudi-ingestion-config/kafka-source.properties \\\n  --config-folder s3:///temp/hudi-ingestion-config \\\n  --schemaprovider-class org.apache.hudi.utilities.schema.SchemaRegistryProvider \\\n  --source-class org.apache.hudi.utilities.sources.AvroKafkaSource \\\n  --source-ordering-field impresssiontime \\\n  --base-path-prefix s3:///temp/hudi \\ \n  --target-table dummy_table \\\n  --op UPSERT\n"})}),"\n",(0,i.jsx)(t.p,{children:"s3:///temp/config/kafka-source.properties"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"hoodie.deltastreamer.ingestion.tablesToBeIngested=db1.table1,db1.table2\nhoodie.deltastreamer.ingestion.db1.table1.configFile=s3:///temp/hudi-ingestion-config/config_table1.properties\nhoodie.deltastreamer.ingestion.db21.table2.configFile=s3:///temp/hudi-ingestion-config/config_table2.properties\n\n#Kafka props\nbootstrap.servers=localhost:9092\nauto.offset.reset=earliest\nschema.registry.url=http://localhost:8081\n\nhoodie.datasource.write.keygenerator.class=org.apache.hudi.keygen.CustomKeyGenerator\n"})}),"\n",(0,i.jsx)(t.p,{children:"s3:///temp/hudi-ingestion-config/config_table1.properties"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"hoodie.datasource.write.recordkey.field=_row_key1\nhoodie.datasource.write.partitionpath.field=created_at\nhoodie.deltastreamer.source.kafka.topic=topic1\n"})}),"\n",(0,i.jsx)(t.p,{children:"s3:///temp/hudi-ingestion-config/config_table2.properties"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"hoodie.datasource.write.recordkey.field=_row_key2\nhoodie.datasource.write.partitionpath.field=created_at\nhoodie.deltastreamer.source.kafka.topic=topic2\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Contributions are welcome for extending multiple tables ingestion support to ",(0,i.jsx)(t.strong,{children:"MERGE_ON_READ"})," storage type and enabling ",(0,i.jsx)(t.code,{children:"HoodieMultiTableDeltaStreamer"})," ingest multiple tables parallely."]}),"\n",(0,i.jsx)(t.p,{children:"Happy ingesting!"})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>n});var i=a(96540);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[26352],{32104:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=n(74848),t=n(28453);const i={version:"0.5.3",title:"\u4f7f\u7528\u6848\u4f8b",keywords:["hudi","data ingestion","etl","real time","use cases"],summary:"Following are some sample use-cases for Hudi, which illustrate the benefits in terms of faster processing & increased efficiency",toc:!0,last_modified_at:new Date("2019-12-30T19:59:57.000Z"),language:"cn"},o=void 0,a={id:"use_cases",title:"\u4f7f\u7528\u6848\u4f8b",description:"\u4ee5\u4e0b\u662f\u4e00\u4e9b\u4f7f\u7528Hudi\u7684\u793a\u4f8b\uff0c\u8bf4\u660e\u4e86\u52a0\u5feb\u5904\u7406\u901f\u5ea6\u548c\u63d0\u9ad8\u6548\u7387\u7684\u597d\u5904",source:"@site/i18n/cn/docusaurus-plugin-content-docs/version-0.5.3/use_cases.md",sourceDirName:".",slug:"/use_cases",permalink:"/cn/docs/0.5.3/use_cases",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.5.3/use_cases.md",tags:[],version:"0.5.3",frontMatter:{version:"0.5.3",title:"\u4f7f\u7528\u6848\u4f8b",keywords:["hudi","data ingestion","etl","real time","use cases"],summary:"Following are some sample use-cases for Hudi, which illustrate the benefits in terms of faster processing & increased efficiency",toc:!0,last_modified_at:"2019-12-30T19:59:57.000Z",language:"cn"},sidebar:"docs",previous:{title:"Quick-Start Guide",permalink:"/cn/docs/0.5.3/quick-start-guide"},next:{title:"\u5199\u5165 Hudi \u6570\u636e\u96c6",permalink:"/cn/docs/0.5.3/writing_data"}},c={},d=[{value:"\u8fd1\u5b9e\u65f6\u6444\u53d6",id:"\u8fd1\u5b9e\u65f6\u6444\u53d6",level:2},{value:"\u8fd1\u5b9e\u65f6\u5206\u6790",id:"\u8fd1\u5b9e\u65f6\u5206\u6790",level:2},{value:"\u589e\u91cf\u5904\u7406\u7ba1\u9053",id:"\u589e\u91cf\u5904\u7406\u7ba1\u9053",level:2},{value:"DFS\u7684\u6570\u636e\u5206\u53d1",id:"dfs\u7684\u6570\u636e\u5206\u53d1",level:2}];function l(e){const s={a:"a",code:"code",h2:"h2",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"\u4ee5\u4e0b\u662f\u4e00\u4e9b\u4f7f\u7528Hudi\u7684\u793a\u4f8b\uff0c\u8bf4\u660e\u4e86\u52a0\u5feb\u5904\u7406\u901f\u5ea6\u548c\u63d0\u9ad8\u6548\u7387\u7684\u597d\u5904"}),"\n",(0,r.jsx)(s.h2,{id:"\u8fd1\u5b9e\u65f6\u6444\u53d6",children:"\u8fd1\u5b9e\u65f6\u6444\u53d6"}),"\n",(0,r.jsxs)(s.p,{children:["\u5c06\u5916\u90e8\u6e90(\u5982\u4e8b\u4ef6\u65e5\u5fd7\u3001\u6570\u636e\u5e93\u3001\u5916\u90e8\u6e90)\u7684\u6570\u636e\u6444\u53d6\u5230",(0,r.jsx)(s.a,{href:"http://martinfowler.com/bliki/DataLake",children:"Hadoop\u6570\u636e\u6e56"}),"\u662f\u4e00\u4e2a\u4f17\u6240\u5468\u77e5\u7684\u95ee\u9898\u3002\n\u5c3d\u7ba1\u8fd9\u4e9b\u6570\u636e\u5bf9\u6574\u4e2a\u7ec4\u7ec7\u6765\u8bf4\u662f\u6700\u6709\u4ef7\u503c\u7684\uff0c\u4f46\u4e0d\u5e78\u7684\u662f\uff0c\u5728\u5927\u591a\u6570(\u5982\u679c\u4e0d\u662f\u5168\u90e8)Hadoop\u90e8\u7f72\u4e2d\u90fd\u4f7f\u7528\u96f6\u6563\u7684\u65b9\u5f0f\u89e3\u51b3\uff0c\u5373\u4f7f\u7528\u591a\u4e2a\u4e0d\u540c\u7684\u6444\u53d6\u5de5\u5177\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u5bf9\u4e8eRDBMS\u6444\u53d6\uff0cHudi\u63d0\u4f9b ",(0,r.jsx)(s.strong,{children:"\u901a\u8fc7\u66f4\u65b0\u63d2\u5165\u8fbe\u5230\u66f4\u5feb\u52a0\u8f7d"}),"\uff0c\u800c\u4e0d\u662f\u6602\u8d35\u4e14\u4f4e\u6548\u7684\u6279\u91cf\u52a0\u8f7d\u3002\u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u8bfb\u53d6MySQL BIN\u65e5\u5fd7\u6216",(0,r.jsx)(s.a,{href:"https://sqoop.apache.org/docs/1.4.2/SqoopUserGuide#_incremental_imports",children:"Sqoop\u589e\u91cf\u5bfc\u5165"}),"\u5e76\u5c06\u5176\u5e94\u7528\u4e8e\nDFS\u4e0a\u7684\u7b49\u6548Hudi\u8868\u3002\u8fd9\u6bd4",(0,r.jsx)(s.a,{href:"https://sqoop.apache.org/docs/1.4.0-incubating/SqoopUserGuide#id1770457",children:"\u6279\u91cf\u5408\u5e76\u4efb\u52a1"}),"\u53ca",(0,r.jsx)(s.a,{href:"http://hortonworks.com/blog/four-step-strategy-incremental-updates-hive/",children:"\u590d\u6742\u7684\u624b\u5de5\u5408\u5e76\u5de5\u4f5c\u6d41"}),"\u66f4\u5feb/\u66f4\u6709\u6548\u7387\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u5bf9\u4e8eNoSQL\u6570\u636e\u5b58\u50a8\uff0c\u5982",(0,r.jsx)(s.a,{href:"http://cassandra.apache.org/",children:"Cassandra"})," / ",(0,r.jsx)(s.a,{href:"http://www.project-voldemort.com/voldemort/",children:"Voldemort"})," / ",(0,r.jsx)(s.a,{href:"https://hbase.apache.org/",children:"HBase"}),"\uff0c\u5373\u4f7f\u662f\u4e2d\u7b49\u89c4\u6a21\u5927\u5c0f\u4e5f\u4f1a\u5b58\u50a8\u6570\u5341\u4ebf\u884c\u3002\n\u6beb\u65e0\u7591\u95ee\uff0c ",(0,r.jsx)(s.strong,{children:"\u5168\u91cf\u52a0\u8f7d\u4e0d\u53ef\u884c"}),"\uff0c\u5982\u679c\u6444\u53d6\u9700\u8981\u8ddf\u4e0a\u8f83\u9ad8\u7684\u66f4\u65b0\u91cf\uff0c\u90a3\u4e48\u5219\u9700\u8981\u66f4\u6709\u6548\u7684\u65b9\u6cd5\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u5373\u4f7f\u5bf9\u4e8e\u50cf",(0,r.jsx)(s.a,{href:"http://kafka.apache.org",children:"Kafka"}),"\u8fd9\u6837\u7684\u4e0d\u53ef\u53d8\u6570\u636e\u6e90\uff0cHudi\u4e5f\u53ef\u4ee5 ",(0,r.jsx)(s.strong,{children:"\u5f3a\u5236\u5728HDFS\u4e0a\u4f7f\u7528\u6700\u5c0f\u6587\u4ef6\u5927\u5c0f"}),", \u8fd9\u91c7\u53d6\u4e86\u7efc\u5408\u65b9\u5f0f\u89e3\u51b3",(0,r.jsx)(s.a,{href:"https://blog.cloudera.com/blog/2009/02/the-small-files-problem/",children:"HDFS\u5c0f\u6587\u4ef6\u95ee\u9898"}),"\u6765\u6539\u5584NameNode\u7684\u5065\u5eb7\u72b6\u51b5\u3002\u8fd9\u5bf9\u4e8b\u4ef6\u6d41\u6765\u8bf4\u66f4\u4e3a\u91cd\u8981\uff0c\u56e0\u4e3a\u5b83\u901a\u5e38\u5177\u6709\u8f83\u9ad8\u5bb9\u91cf(\u4f8b\u5982\uff1a\u70b9\u51fb\u6d41)\uff0c\u5982\u679c\u7ba1\u7406\u4e0d\u5f53\uff0c\u53ef\u80fd\u4f1a\u5bf9Hadoop\u96c6\u7fa4\u9020\u6210\u4e25\u91cd\u635f\u5bb3\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u5728\u6240\u6709\u6e90\u4e2d\uff0c\u901a\u8fc7",(0,r.jsx)(s.code,{children:"commits"}),"\u8fd9\u4e00\u6982\u5ff5\uff0cHudi\u589e\u52a0\u4e86\u4ee5\u539f\u5b50\u65b9\u5f0f\u5411\u6d88\u8d39\u8005\u53d1\u5e03\u65b0\u6570\u636e\u7684\u529f\u80fd\uff0c\u8fd9\u79cd\u529f\u80fd\u5341\u5206\u5fc5\u8981\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"\u8fd1\u5b9e\u65f6\u5206\u6790",children:"\u8fd1\u5b9e\u65f6\u5206\u6790"}),"\n",(0,r.jsxs)(s.p,{children:["\u901a\u5e38\uff0c\u5b9e\u65f6",(0,r.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Data_mart",children:"\u6570\u636e\u96c6\u5e02"}),"\u7531\u4e13\u4e1a(\u5b9e\u65f6)\u6570\u636e\u5206\u6790\u5b58\u50a8\u63d0\u4f9b\u652f\u6301\uff0c\u4f8b\u5982",(0,r.jsx)(s.a,{href:"http://druid.io/",children:"Druid"}),"\u6216",(0,r.jsx)(s.a,{href:"http://www.memsql.com/",children:"Memsql"}),"\u6216",(0,r.jsx)(s.a,{href:"http://opentsdb.net/",children:"OpenTSDB"}),"\u3002\n\u8fd9\u5bf9\u4e8e\u8f83\u5c0f\u89c4\u6a21\u7684\u6570\u636e\u91cf\u6765\u8bf4\u7edd\u5bf9\u662f\u5b8c\u7f8e\u7684(",(0,r.jsx)(s.a,{href:"https://blog.twitter.com/2015/hadoop-filesystem-at-twitter",children:"\u76f8\u6bd4\u4e8e\u8fd9\u6837\u5b89\u88c5Hadoop"}),")\uff0c\u8fd9\u79cd\u60c5\u51b5\u9700\u8981\u5728\u4e9a\u79d2\u7ea7\u54cd\u5e94\u67e5\u8be2\uff0c\u4f8b\u5982\u7cfb\u7edf\u76d1\u63a7\u6216\u4ea4\u4e92\u5f0f\u5b9e\u65f6\u5206\u6790\u3002\n\u4f46\u662f\uff0c\u7531\u4e8eHadoop\u4e0a\u7684\u6570\u636e\u592a\u9648\u65e7\u4e86\uff0c\u901a\u5e38\u8fd9\u4e9b\u7cfb\u7edf\u4f1a\u88ab\u6ee5\u7528\u4e8e\u975e\u4ea4\u4e92\u5f0f\u67e5\u8be2\uff0c\u8fd9\u5bfc\u81f4\u5229\u7528\u7387\u4e0d\u8db3\u548c\u786c\u4ef6/\u8bb8\u53ef\u8bc1\u6210\u672c\u7684\u6d6a\u8d39\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u53e6\u4e00\u65b9\u9762\uff0cHadoop\u4e0a\u7684\u4ea4\u4e92\u5f0fSQL\u89e3\u51b3\u65b9\u6848(\u5982Presto\u548cSparkSQL)\u8868\u73b0\u51fa\u8272\uff0c\u5728 ",(0,r.jsx)(s.strong,{children:"\u51e0\u79d2\u949f\u5185\u5b8c\u6210\u67e5\u8be2"}),"\u3002\n\u901a\u8fc7\u5c06 ",(0,r.jsx)(s.strong,{children:"\u6570\u636e\u65b0\u9c9c\u5ea6\u63d0\u9ad8\u5230\u51e0\u5206\u949f"}),"\uff0cHudi\u53ef\u4ee5\u63d0\u4f9b\u4e00\u4e2a\u66f4\u6709\u6548\u7684\u66ff\u4ee3\u65b9\u6848\uff0c\u5e76\u652f\u6301\u5b58\u50a8\u5728DFS\u4e2d\u7684 ",(0,r.jsx)(s.strong,{children:"\u6570\u91cf\u7ea7\u66f4\u5927\u7684\u6570\u636e\u96c6"})," \u7684\u5b9e\u65f6\u5206\u6790\u3002\n\u6b64\u5916\uff0cHudi\u6ca1\u6709\u5916\u90e8\u4f9d\u8d56(\u5982\u4e13\u7528\u4e8e\u5b9e\u65f6\u5206\u6790\u7684HBase\u96c6\u7fa4)\uff0c\u56e0\u6b64\u53ef\u4ee5\u5728\u66f4\u65b0\u7684\u5206\u6790\u4e0a\u5b9e\u73b0\u66f4\u5feb\u7684\u5206\u6790\uff0c\u800c\u4e0d\u4f1a\u589e\u52a0\u64cd\u4f5c\u5f00\u9500\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"\u589e\u91cf\u5904\u7406\u7ba1\u9053",children:"\u589e\u91cf\u5904\u7406\u7ba1\u9053"}),"\n",(0,r.jsxs)(s.p,{children:["Hadoop\u63d0\u4f9b\u7684\u4e00\u4e2a\u57fa\u672c\u80fd\u529b\u662f\u6784\u5efa\u4e00\u7cfb\u5217\u6570\u636e\u96c6\uff0c\u8fd9\u4e9b\u6570\u636e\u96c6\u901a\u8fc7\u8868\u793a\u4e3a\u5de5\u4f5c\u6d41\u7684DAG\u76f8\u4e92\u6d3e\u751f\u3002\n\u5de5\u4f5c\u6d41\u901a\u5e38\u53d6\u51b3\u4e8e\u591a\u4e2a\u4e0a\u6e38\u5de5\u4f5c\u6d41\u8f93\u51fa\u7684\u65b0\u6570\u636e\uff0c\u65b0\u6570\u636e\u7684\u53ef\u7528\u6027\u4f20\u7edf\u4e0a\u7531\u65b0\u7684DFS\u6587\u4ef6\u5939/Hive\u5206\u533a\u6307\u793a\u3002\n\u8ba9\u6211\u4eec\u4e3e\u4e00\u4e2a\u5177\u4f53\u7684\u4f8b\u5b50\u6765\u8bf4\u660e\u8fd9\u70b9\u3002\u4e0a\u6e38\u5de5\u4f5c\u6d41",(0,r.jsx)(s.code,{children:"U"}),"\u53ef\u4ee5\u6bcf\u5c0f\u65f6\u521b\u5efa\u4e00\u4e2aHive\u5206\u533a\uff0c\u5728\u6bcf\u5c0f\u65f6\u7ed3\u675f\u65f6(processing_time)\u4f7f\u7528\u8be5\u5c0f\u65f6\u7684\u6570\u636e(event_time)\uff0c\u63d0\u4f9b1\u5c0f\u65f6\u7684\u6709\u6548\u65b0\u9c9c\u5ea6\u3002\n\u7136\u540e\uff0c\u4e0b\u6e38\u5de5\u4f5c\u6d41",(0,r.jsx)(s.code,{children:"D"}),"\u5728",(0,r.jsx)(s.code,{children:"U"}),"\u7ed3\u675f\u540e\u7acb\u5373\u542f\u52a8\uff0c\u5e76\u5728\u4e0b\u4e00\u4e2a\u5c0f\u65f6\u5185\u81ea\u884c\u5904\u7406\uff0c\u5c06\u6709\u6548\u5ef6\u8fdf\u65f6\u95f4\u589e\u52a0\u52302\u5c0f\u65f6\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u4e0a\u9762\u7684\u793a\u4f8b\u5ffd\u7565\u4e86\u8fdf\u5230\u7684\u6570\u636e\uff0c\u5373",(0,r.jsx)(s.code,{children:"processing_time"}),"\u548c",(0,r.jsx)(s.code,{children:"event_time"}),"\u5206\u5f00\u65f6\u3002\n\u4e0d\u5e78\u7684\u662f\uff0c\u5728\u4eca\u5929\u7684\u540e\u79fb\u52a8\u548c\u524d\u7269\u8054\u7f51\u4e16\u754c\u4e2d\uff0c",(0,r.jsx)(s.strong,{children:"\u6765\u81ea\u95f4\u6b47\u6027\u8fde\u63a5\u7684\u79fb\u52a8\u8bbe\u5907\u548c\u4f20\u611f\u5668\u7684\u5ef6\u8fdf\u6570\u636e\u662f\u5e38\u6001\uff0c\u800c\u4e0d\u662f\u5f02\u5e38"}),"\u3002\n\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4fdd\u8bc1\u6b63\u786e\u6027\u7684\u552f\u4e00\u8865\u6551\u63aa\u65bd\u662f",(0,r.jsx)(s.a,{href:"https://falcon.apache.org/FalconDocumentation#Handling_late_input_data",children:"\u91cd\u65b0\u5904\u7406\u6700\u540e\u51e0\u4e2a\u5c0f\u65f6"}),"\u7684\u6570\u636e\uff0c\n\u6bcf\u5c0f\u65f6\u4e00\u904d\u53c8\u4e00\u904d\uff0c\u8fd9\u53ef\u80fd\u4f1a\u4e25\u91cd\u5f71\u54cd\u6574\u4e2a\u751f\u6001\u7cfb\u7edf\u7684\u6548\u7387\u3002\u4f8b\u5982; \u8bd5\u60f3\u4e00\u4e0b\uff0c\u5728\u6570\u767e\u4e2a\u5de5\u4f5c\u6d41\u4e2d\u6bcf\u5c0f\u65f6\u91cd\u65b0\u5904\u7406TB\u6570\u636e\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["Hudi\u901a\u8fc7\u4ee5\u5355\u4e2a\u8bb0\u5f55\u4e3a\u7c92\u5ea6\u7684\u65b9\u5f0f(\u800c\u4e0d\u662f\u6587\u4ef6\u5939/\u5206\u533a)\u4ece\u4e0a\u6e38 Hudi\u6570\u636e\u96c6",(0,r.jsx)(s.code,{children:"HU"}),"\u6d88\u8d39\u65b0\u6570\u636e(\u5305\u62ec\u8fdf\u5230\u6570\u636e)\uff0c\u6765\u89e3\u51b3\u4e0a\u9762\u7684\u95ee\u9898\u3002\n\u5e94\u7528\u5904\u7406\u903b\u8f91\uff0c\u5e76\u4f7f\u7528\u4e0b\u6e38Hudi\u6570\u636e\u96c6",(0,r.jsx)(s.code,{children:"HD"}),"\u9ad8\u6548\u66f4\u65b0/\u534f\u8c03\u8fdf\u5230\u6570\u636e\u3002\u5728\u8fd9\u91cc\uff0c",(0,r.jsx)(s.code,{children:"HU"}),"\u548c",(0,r.jsx)(s.code,{children:"HD"}),"\u53ef\u4ee5\u4ee5\u66f4\u9891\u7e41\u7684\u65f6\u95f4\u88ab\u8fde\u7eed\u8c03\u5ea6\n\u6bd4\u598215\u5206\u949f\uff0c\u5e76\u4e14",(0,r.jsx)(s.code,{children:"HD"}),"\u63d0\u4f9b\u7aef\u5230\u7aef30\u5206\u949f\u7684\u5ef6\u8fdf\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u4e3a\u5b9e\u73b0\u8fd9\u4e00\u76ee\u6807\uff0cHudi\u91c7\u7528\u4e86\u7c7b\u4f3c\u4e8e",(0,r.jsx)(s.a,{href:"https://spark.apache.org/docs/latest/streaming-programming-guide#join-operations",children:"Spark Streaming"}),"\u3001\u53d1\u5e03/\u8ba2\u9605\u7cfb\u7edf\u7b49\u6d41\u5904\u7406\u6846\u67b6\uff0c\u4ee5\u53ca\u50cf",(0,r.jsx)(s.a,{href:"http://kafka.apache.org/documentation/#theconsumer",children:"Kafka"}),"\n\u6216",(0,r.jsx)(s.a,{href:"https://docs.oracle.com/cd/E11882_01/server.112/e16545/xstrm_cncpt.htm#XSTRM187",children:"Oracle XStream"}),"\u7b49\u6570\u636e\u5e93\u590d\u5236\u6280\u672f\u7684\u7c7b\u4f3c\u6982\u5ff5\u3002\n\u5982\u679c\u611f\u5174\u8da3\uff0c\u53ef\u4ee5\u5728",(0,r.jsx)(s.a,{href:"https://www.oreilly.com/ideas/ubers-case-for-incremental-processing-on-hadoop",children:"\u8fd9\u91cc"}),"\u627e\u5230\u6709\u5173\u589e\u91cf\u5904\u7406(\u76f8\u6bd4\u4e8e\u6d41\u5904\u7406\u548c\u6279\u5904\u7406)\u597d\u5904\u7684\u66f4\u8be6\u7ec6\u89e3\u91ca\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"dfs\u7684\u6570\u636e\u5206\u53d1",children:"DFS\u7684\u6570\u636e\u5206\u53d1"}),"\n",(0,r.jsxs)(s.p,{children:["\u4e00\u4e2a\u5e38\u7528\u573a\u666f\u662f\u5148\u5728Hadoop\u4e0a\u5904\u7406\u6570\u636e\uff0c\u7136\u540e\u5c06\u5176\u5206\u53d1\u56de\u5728\u7ebf\u670d\u52a1\u5b58\u50a8\u5c42\uff0c\u4ee5\u4f9b\u5e94\u7528\u7a0b\u5e8f\u4f7f\u7528\u3002\n\u4f8b\u5982\uff0c\u4e00\u4e2aSpark\u7ba1\u9053\u53ef\u4ee5",(0,r.jsx)(s.a,{href:"https://eng.uber.com/telematics/",children:"\u786e\u5b9aHadoop\u4e0a\u7684\u7d27\u6025\u5236\u52a8\u4e8b\u4ef6"}),"\u5e76\u5c06\u5b83\u4eec\u52a0\u8f7d\u5230\u670d\u52a1\u5b58\u50a8\u5c42(\u5982ElasticSearch)\u4e2d\uff0c\u4f9bUber\u5e94\u7528\u7a0b\u5e8f\u4f7f\u7528\u4ee5\u589e\u52a0\u5b89\u5168\u9a7e\u9a76\u3002\u8fd9\u79cd\u7528\u4f8b\u4e2d\uff0c\u901a\u5e38\u67b6\u6784\u4f1a\u5728Hadoop\u548c\u670d\u52a1\u5b58\u50a8\u4e4b\u95f4\u5f15\u5165",(0,r.jsx)(s.code,{children:"\u961f\u5217"}),"\uff0c\u4ee5\u9632\u6b62\u76ee\u6807\u670d\u52a1\u5b58\u50a8\u88ab\u538b\u57ae\u3002\n\u5bf9\u4e8e\u961f\u5217\u7684\u9009\u62e9\uff0c\u4e00\u79cd\u6d41\u884c\u7684\u9009\u62e9\u662fKafka\uff0c\u8fd9\u4e2a\u6a21\u578b\u7ecf\u5e38\u5bfc\u81f4 ",(0,r.jsx)(s.strong,{children:"\u5728DFS\u4e0a\u5b58\u50a8\u76f8\u540c\u6570\u636e\u7684\u5197\u4f59(\u7528\u4e8e\u8ba1\u7b97\u7ed3\u679c\u7684\u79bb\u7ebf\u5206\u6790)\u548cKafka(\u7528\u4e8e\u5206\u53d1)"})]}),"\n",(0,r.jsx)(s.p,{children:"\u901a\u8fc7\u5c06\u6bcf\u6b21\u8fd0\u884c\u7684Spark\u7ba1\u9053\u66f4\u65b0\u63d2\u5165\u7684\u8f93\u51fa\u8f6c\u6362\u4e3aHudi\u6570\u636e\u96c6\uff0cHudi\u53ef\u4ee5\u518d\u6b21\u6709\u6548\u5730\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u7136\u540e\u53ef\u4ee5\u4ee5\u589e\u91cf\u65b9\u5f0f\u83b7\u53d6\u5c3e\u90e8\u6570\u636e(\u5c31\u50cfKafka topic\u4e00\u6837)\u7136\u540e\u5199\u5165\u670d\u52a1\u5b58\u50a8\u5c42\u3002"})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>a});var r=n(96540);const t={},i=r.createContext(t);function o(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);
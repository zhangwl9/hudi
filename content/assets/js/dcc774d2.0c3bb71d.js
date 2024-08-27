"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[70669],{87010:(_,e,i)=>{i.r(e),i.d(e,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=i(74848),t=i(28453);const o={version:"0.5.0",title:"Administering Hudi Pipelines",keywords:["hudi","administration","operation","devops"],summary:"This section offers an overview of tools available to operate an ecosystem of Hudi datasets",toc:!0,last_modified_at:new Date("2019-12-30T19:59:57.000Z")},a=void 0,s={id:"admin_guide",title:"Administering Hudi Pipelines",description:"Admins/ops can gain visibility into Hudi datasets/pipelines in the following ways",source:"@site/versioned_docs/version-0.5.0/admin_guide.md",sourceDirName:".",slug:"/admin_guide",permalink:"/docs/0.5.0/admin_guide",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.5.0/admin_guide.md",tags:[],version:"0.5.0",frontMatter:{version:"0.5.0",title:"Administering Hudi Pipelines",keywords:["hudi","administration","operation","devops"],summary:"This section offers an overview of tools available to operate an ecosystem of Hudi datasets",toc:!0,last_modified_at:"2019-12-30T19:59:57.000Z"}},r={},l=[{value:"Admin CLI",id:"admin-cli",level:2},{value:"Inspecting Commits",id:"inspecting-commits",level:3},{value:"Drilling Down to a specific Commit",id:"drilling-down-to-a-specific-commit",level:3},{value:"FileSystem View",id:"filesystem-view",level:3},{value:"Statistics",id:"statistics",level:3},{value:"Archived Commits",id:"archived-commits",level:3},{value:"Compactions",id:"compactions",level:3},{value:"Validate Compaction",id:"validate-compaction",level:3},{value:"UnScheduling Compaction",id:"unscheduling-compaction",level:3},{value:"Repair Compaction",id:"repair-compaction",level:3},{value:"Metrics",id:"metrics",level:2},{value:"Troubleshooting Failures",id:"troubleshooting",level:2},{value:"Missing records",id:"missing-records",level:3},{value:"Duplicates",id:"duplicates",level:3},{value:"Spark failures",id:"spark-ui",level:3}];function c(_){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),..._.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:"Admins/ops can gain visibility into Hudi datasets/pipelines in the following ways"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"#admin-cli",children:"Administering via the Admin CLI"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"#metrics",children:"Graphite metrics"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"#spark-ui",children:"Spark UI of the Hudi Application"})}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["This section provides a glimpse into each of these, with some general guidance on ",(0,n.jsx)(e.a,{href:"#troubleshooting",children:"troubleshooting"})]}),"\n",(0,n.jsx)(e.h2,{id:"admin-cli",children:"Admin CLI"}),"\n",(0,n.jsxs)(e.p,{children:["Once hudi has been built, the shell can be fired by via  ",(0,n.jsx)(e.code,{children:"cd hudi-cli && ./hudi-cli.sh"}),".\nA hudi dataset resides on DFS, in a location referred to as the ",(0,n.jsx)(e.strong,{children:"basePath"})," and we would need this location in order to connect to a Hudi dataset.\nHudi library effectively manages this dataset internally, using .hoodie subfolder to track all metadata"]}),"\n",(0,n.jsx)(e.p,{children:"To initialize a hudi table, use the following command."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:"18/09/06 15:56:52 INFO annotation.AutowiredAnnotationBeanPostProcessor: JSR-330 'javax.inject.Inject' annotation found and supported for autowiring\n============================================\n*                                          *\n*     _    _           _   _               *\n*    | |  | |         | | (_)              *\n*    | |__| |       __| |  -               *\n*    |  __  ||   | / _` | ||               *\n*    | |  | ||   || (_| | ||               *\n*    |_|  |_|\\___/ \\____/ ||               *\n*                                          *\n============================================\n\nWelcome to Hoodie CLI. Please type help if you are looking for help.\nhudi->create --path /user/hive/warehouse/table1 --tableName hoodie_table_1 --tableType COPY_ON_WRITE\n.....\n18/09/06 15:57:15 INFO table.HoodieTableMetaClient: Finished Loading Table of type COPY_ON_WRITE from ...\n"})}),"\n",(0,n.jsx)(e.p,{children:"To see the description of hudi table, use the command:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:"hoodie:hoodie_table_1->desc\n18/09/06 15:57:19 INFO timeline.HoodieActiveTimeline: Loaded instants []\n    _________________________________________________________\n    | Property                | Value                        |\n    |========================================================|\n    | basePath                | ...                          |\n    | metaPath                | ...                          |\n    | fileSystem              | hdfs                         |\n    | hoodie.table.name       | hoodie_table_1               |\n    | hoodie.table.type       | COPY_ON_WRITE                |\n    | hoodie.archivelog.folder|                              |\n"})}),"\n",(0,n.jsx)(e.p,{children:"Following is a sample command to connect to a Hudi dataset contains uber trips."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:"hoodie:trips->connect --path /app/uber/trips\n\n16/10/05 23:20:37 INFO model.HoodieTableMetadata: Attempting to load the commits under /app/uber/trips/.hoodie with suffix .commit\n16/10/05 23:20:37 INFO model.HoodieTableMetadata: Attempting to load the commits under /app/uber/trips/.hoodie with suffix .inflight\n16/10/05 23:20:37 INFO model.HoodieTableMetadata: All commits :HoodieCommits{commitList=[20161002045850, 20161002052915, 20161002055918, 20161002065317, 20161002075932, 20161002082904, 20161002085949, 20161002092936, 20161002105903, 20161002112938, 20161002123005, 20161002133002, 20161002155940, 20161002165924, 20161002172907, 20161002175905, 20161002190016, 20161002192954, 20161002195925, 20161002205935, 20161002215928, 20161002222938, 20161002225915, 20161002232906, 20161003003028, 20161003005958, 20161003012936, 20161003022924, 20161003025859, 20161003032854, 20161003042930, 20161003052911, 20161003055907, 20161003062946, 20161003065927, 20161003075924, 20161003082926, 20161003085925, 20161003092909, 20161003100010, 20161003102913, 20161003105850, 20161003112910, 20161003115851, 20161003122929, 20161003132931, 20161003142952, 20161003145856, 20161003152953, 20161003155912, 20161003162922, 20161003165852, 20161003172923, 20161003175923, 20161003195931, 20161003210118, 20161003212919, 20161003215928, 20161003223000, 20161003225858, 20161004003042, 20161004011345, 20161004015235, 20161004022234, 20161004063001, 20161004072402, 20161004074436, 20161004080224, 20161004082928, 20161004085857, 20161004105922, 20161004122927, 20161004142929, 20161004163026, 20161004175925, 20161004194411, 20161004203202, 20161004211210, 20161004214115, 20161004220437, 20161004223020, 20161004225321, 20161004231431, 20161004233643, 20161005010227, 20161005015927, 20161005022911, 20161005032958, 20161005035939, 20161005052904, 20161005070028, 20161005074429, 20161005081318, 20161005083455, 20161005085921, 20161005092901, 20161005095936, 20161005120158, 20161005123418, 20161005125911, 20161005133107, 20161005155908, 20161005163517, 20161005165855, 20161005180127, 20161005184226, 20161005191051, 20161005193234, 20161005203112, 20161005205920, 20161005212949, 20161005223034, 20161005225920]}\nMetadata for table trips loaded\nhoodie:trips->\n"})}),"\n",(0,n.jsx)(e.p,{children:"Once connected to the dataset, a lot of other commands become available. The shell has contextual autocomplete help (press TAB) and below is a list of all commands, few of which are reviewed in this section\nare reviewed"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:"hoodie:trips->help\n* ! - Allows execution of operating system (OS) commands\n* // - Inline comment markers (start of line only)\n* ; - Inline comment markers (start of line only)\n* addpartitionmeta - Add partition metadata to a dataset, if not present\n* clear - Clears the console\n* cls - Clears the console\n* commit rollback - Rollback a commit\n* commits compare - Compare commits with another Hoodie dataset\n* commit showfiles - Show file level details of a commit\n* commit showpartitions - Show partition level details of a commit\n* commits refresh - Refresh the commits\n* commits show - Show the commits\n* commits sync - Compare commits with another Hoodie dataset\n* connect - Connect to a hoodie dataset\n* date - Displays the local date and time\n* exit - Exits the shell\n* help - List all commands usage\n* quit - Exits the shell\n* records deduplicate - De-duplicate a partition path contains duplicates & produce repaired files to replace with\n* script - Parses the specified resource file and executes its commands\n* stats filesizes - File Sizes. Display summary stats on sizes of files\n* stats wa - Write Amplification. Ratio of how many records were upserted to how many records were actually written\n* sync validate - Validate the sync by counting the number of records\n* system properties - Shows the shell's properties\n* utils loadClass - Load a class\n* version - Displays shell version\n\nhoodie:trips->\n"})}),"\n",(0,n.jsx)(e.h3,{id:"inspecting-commits",children:"Inspecting Commits"}),"\n",(0,n.jsxs)(e.p,{children:["The task of upserting or inserting a batch of incoming records is known as a ",(0,n.jsx)(e.strong,{children:"commit"})," in Hudi. A commit provides basic atomicity guarantees such that only commited data is available for querying.\nEach commit has a monotonically increasing string/number called the ",(0,n.jsx)(e.strong,{children:"commit number"}),". Typically, this is the time at which we started the commit."]}),"\n",(0,n.jsx)(e.p,{children:"To view some basic information about the last 10 commits,"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:'hoodie:trips->commits show --sortBy "Total Bytes Written" --desc true --limit 10\n    ________________________________________________________________________________________________________________________________________________________________________\n    | CommitTime    | Total Bytes Written| Total Files Added| Total Files Updated| Total Partitions Written| Total Records Written| Total Update Records Written| Total Errors|\n    |=======================================================================================================================================================================|\n    ....\n    ....\n    ....\nhoodie:trips->\n'})}),"\n",(0,n.jsx)(e.p,{children:"At the start of each write, Hudi also writes a .inflight commit to the .hoodie folder. You can use the timestamp there to estimate how long the commit has been inflight"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:"$ hdfs dfs -ls /app/uber/trips/.hoodie/*.inflight\n-rw-r--r--   3 vinoth supergroup     321984 2016-10-05 23:18 /app/uber/trips/.hoodie/20161005225920.inflight\n"})}),"\n",(0,n.jsx)(e.h3,{id:"drilling-down-to-a-specific-commit",children:"Drilling Down to a specific Commit"}),"\n",(0,n.jsx)(e.p,{children:"To understand how the writes spread across specific partiions,"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:'hoodie:trips->commit showpartitions --commit 20161005165855 --sortBy "Total Bytes Written" --desc true --limit 10\n    __________________________________________________________________________________________________________________________________________\n    | Partition Path| Total Files Added| Total Files Updated| Total Records Inserted| Total Records Updated| Total Bytes Written| Total Errors|\n    |=========================================================================================================================================|\n     ....\n     ....\n'})}),"\n",(0,n.jsx)(e.p,{children:"If you need file level granularity , we can do the following"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:'hoodie:trips->commit showfiles --commit 20161005165855 --sortBy "Partition Path"\n    ________________________________________________________________________________________________________________________________________________________\n    | Partition Path| File ID                             | Previous Commit| Total Records Updated| Total Records Written| Total Bytes Written| Total Errors|\n    |=======================================================================================================================================================|\n    ....\n    ....\n'})}),"\n",(0,n.jsx)(e.h3,{id:"filesystem-view",children:"FileSystem View"}),"\n",(0,n.jsx)(e.p,{children:"Hudi views each partition as a collection of file-groups with each file-group containing a list of file-slices in commit\norder (See Concepts). The below commands allow users to view the file-slices for a data-set."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:' hoodie:stock_ticks_mor->show fsview all\n ....\n  _______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________\n | Partition | FileId | Base-Instant | Data-File | Data-File Size| Num Delta Files| Total Delta File Size| Delta Files |\n |==============================================================================================================================================================================================================================================================================================================================================================================================================|\n | 2018/08/31| 111415c3-f26d-4639-86c8-f9956f245ac3| 20181002180759| hdfs://namenode:8020/user/hive/warehouse/stock_ticks_mor/2018/08/31/111415c3-f26d-4639-86c8-f9956f245ac3_0_20181002180759.parquet| 432.5 KB | 1 | 20.8 KB | [HoodieLogFile {hdfs://namenode:8020/user/hive/warehouse/stock_ticks_mor/2018/08/31/.111415c3-f26d-4639-86c8-f9956f245ac3_20181002180759.log.1}]|\n\n\n\n hoodie:stock_ticks_mor->show fsview latest --partitionPath "2018/08/31"\n ......\n __________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________\n | Partition | FileId | Base-Instant | Data-File | Data-File Size| Num Delta Files| Total Delta Size| Delta Size - compaction scheduled| Delta Size - compaction unscheduled| Delta To Base Ratio - compaction scheduled| Delta To Base Ratio - compaction unscheduled| Delta Files - compaction scheduled | Delta Files - compaction unscheduled|\n |=================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================|\n | 2018/08/31| 111415c3-f26d-4639-86c8-f9956f245ac3| 20181002180759| hdfs://namenode:8020/user/hive/warehouse/stock_ticks_mor/2018/08/31/111415c3-f26d-4639-86c8-f9956f245ac3_0_20181002180759.parquet| 432.5 KB | 1 | 20.8 KB | 20.8 KB | 0.0 B | 0.0 B | 0.0 B | [HoodieLogFile {hdfs://namenode:8020/user/hive/warehouse/stock_ticks_mor/2018/08/31/.111415c3-f26d-4639-86c8-f9956f245ac3_20181002180759.log.1}]| [] |\n\n hoodie:stock_ticks_mor->\n'})}),"\n",(0,n.jsx)(e.h3,{id:"statistics",children:"Statistics"}),"\n",(0,n.jsx)(e.p,{children:"Since Hudi directly manages file sizes for DFS dataset, it might be good to get an overall picture"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:'hoodie:trips->stats filesizes --partitionPath 2016/09/01 --sortBy "95th" --desc true --limit 10\n    ________________________________________________________________________________________________\n    | CommitTime    | Min     | 10th    | 50th    | avg     | 95th    | Max     | NumFiles| StdDev  |\n    |===============================================================================================|\n    | <COMMIT_ID>   | 93.9 MB | 93.9 MB | 93.9 MB | 93.9 MB | 93.9 MB | 93.9 MB | 2       | 2.3 KB  |\n    ....\n    ....\n'})}),"\n",(0,n.jsx)(e.p,{children:"In case of Hudi write taking much longer, it might be good to see the write amplification for any sudden increases"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:"hoodie:trips->stats wa\n    __________________________________________________________________________\n    | CommitTime    | Total Upserted| Total Written| Write Amplifiation Factor|\n    |=========================================================================|\n    ....\n    ....\n"})}),"\n",(0,n.jsx)(e.h3,{id:"archived-commits",children:"Archived Commits"}),"\n",(0,n.jsx)(e.p,{children:"In order to limit the amount of growth of .commit files on DFS, Hudi archives older .commit files (with due respect to the cleaner policy) into a commits.archived file.\nThis is a sequence file that contains a mapping from commitNumber => json with raw information about the commit (same that is nicely rolled up above)."}),"\n",(0,n.jsx)(e.h3,{id:"compactions",children:"Compactions"}),"\n",(0,n.jsx)(e.p,{children:"To get an idea of the lag between compaction and writer applications, use the below command to list down all\npending compactions."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:"hoodie:trips->compactions show all\n     ___________________________________________________________________\n    | Compaction Instant Time| State    | Total FileIds to be Compacted|\n    |==================================================================|\n    | <INSTANT_1>            | REQUESTED| 35                           |\n    | <INSTANT_2>            | INFLIGHT | 27                           |\n"})}),"\n",(0,n.jsx)(e.p,{children:"To inspect a specific compaction plan, use"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:"hoodie:trips->compaction show --instant <INSTANT_1>\n    _________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________\n    | Partition Path| File Id | Base Instant  | Data File Path                                    | Total Delta Files| getMetrics                                                                                                                    |\n    |================================================================================================================================================================================================================================================\n    | 2018/07/17    | <UUID>  | <INSTANT_1>   | viewfs://ns-default/.../../UUID_<INSTANT>.parquet | 1                | {TOTAL_LOG_FILES=1.0, TOTAL_IO_READ_MB=1230.0, TOTAL_LOG_FILES_SIZE=2.51255751E8, TOTAL_IO_WRITE_MB=991.0, TOTAL_IO_MB=2221.0}|\n\n"})}),"\n",(0,n.jsx)(e.p,{children:"To manually schedule or run a compaction, use the below command. This command uses spark launcher to perform compaction\noperations."}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"NOTE:"})," Make sure no other application is scheduling compaction for this dataset concurrently\n{: .notice--info}"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:"hoodie:trips->help compaction schedule\nKeyword:                   compaction schedule\nDescription:               Schedule Compaction\n Keyword:                  sparkMemory\n   Help:                   Spark executor memory\n   Mandatory:              false\n   Default if specified:   '__NULL__'\n   Default if unspecified: '1G'\n\n* compaction schedule - Schedule Compaction\n"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:"hoodie:trips->help compaction run\nKeyword:                   compaction run\nDescription:               Run Compaction for given instant time\n Keyword:                  tableName\n   Help:                   Table name\n   Mandatory:              true\n   Default if specified:   '__NULL__'\n   Default if unspecified: '__NULL__'\n\n Keyword:                  parallelism\n   Help:                   Parallelism for hoodie compaction\n   Mandatory:              true\n   Default if specified:   '__NULL__'\n   Default if unspecified: '__NULL__'\n\n Keyword:                  schemaFilePath\n   Help:                   Path for Avro schema file\n   Mandatory:              true\n   Default if specified:   '__NULL__'\n   Default if unspecified: '__NULL__'\n\n Keyword:                  sparkMemory\n   Help:                   Spark executor memory\n   Mandatory:              true\n   Default if specified:   '__NULL__'\n   Default if unspecified: '__NULL__'\n\n Keyword:                  retry\n   Help:                   Number of retries\n   Mandatory:              true\n   Default if specified:   '__NULL__'\n   Default if unspecified: '__NULL__'\n\n Keyword:                  compactionInstant\n   Help:                   Base path for the target hoodie dataset\n   Mandatory:              true\n   Default if specified:   '__NULL__'\n   Default if unspecified: '__NULL__'\n\n* compaction run - Run Compaction for given instant time\n"})}),"\n",(0,n.jsx)(e.h3,{id:"validate-compaction",children:"Validate Compaction"}),"\n",(0,n.jsx)(e.p,{children:"Validating a compaction plan : Check if all the files necessary for compactions are present and are valid"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:"hoodie:stock_ticks_mor->compaction validate --instant 20181005222611\n...\n\n   COMPACTION PLAN VALID\n\n    ___________________________________________________________________________________________________________________________________________________________________________________________________________________________\n    | File Id                             | Base Instant Time| Base Data File                                                                                                                   | Num Delta Files| Valid| Error|\n    |==========================================================================================================================================================================================================================|\n    | 05320e98-9a57-4c38-b809-a6beaaeb36bd| 20181005222445   | hdfs://namenode:8020/user/hive/warehouse/stock_ticks_mor/2018/08/31/05320e98-9a57-4c38-b809-a6beaaeb36bd_0_20181005222445.parquet| 1              | true |      |\n\n\n\nhoodie:stock_ticks_mor->compaction validate --instant 20181005222601\n\n   COMPACTION PLAN INVALID\n\n    _______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________\n    | File Id                             | Base Instant Time| Base Data File                                                                                                                   | Num Delta Files| Valid| Error                                                                           |\n    |=====================================================================================================================================================================================================================================================================================================|\n    | 05320e98-9a57-4c38-b809-a6beaaeb36bd| 20181005222445   | hdfs://namenode:8020/user/hive/warehouse/stock_ticks_mor/2018/08/31/05320e98-9a57-4c38-b809-a6beaaeb36bd_0_20181005222445.parquet| 1              | false| All log files specified in compaction operation is not present. Missing ....    |\n"})}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"NOTE:"})," The following commands must be executed without any other writer/ingestion application running.\n{: .notice--warning}"]}),"\n",(0,n.jsx)(e.p,{children:"Sometimes, it becomes necessary to remove a fileId from a compaction-plan inorder to speed-up or unblock compaction\noperation. Any new log-files that happened on this file after the compaction got scheduled will be safely renamed\nso that are preserved. Hudi provides the following CLI to support it"}),"\n",(0,n.jsx)(e.h3,{id:"unscheduling-compaction",children:"UnScheduling Compaction"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:"hoodie:trips->compaction unscheduleFileId --fileId <FileUUID>\n....\nNo File renames needed to unschedule file from pending compaction. Operation successful.\n"})}),"\n",(0,n.jsx)(e.p,{children:"In other cases, an entire compaction plan needs to be reverted. This is supported by the following CLI"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:"hoodie:trips->compaction unschedule --instant <compactionInstant>\n.....\nNo File renames needed to unschedule pending compaction. Operation successful.\n"})}),"\n",(0,n.jsx)(e.h3,{id:"repair-compaction",children:"Repair Compaction"}),"\n",(0,n.jsxs)(e.p,{children:["The above compaction unscheduling operations could sometimes fail partially (e",":g"," -> DFS temporarily unavailable). With\npartial failures, the compaction operation could become inconsistent with the state of file-slices. When you run\n",(0,n.jsx)(e.code,{children:"compaction validate"}),", you can notice invalid compaction operations if there is one.  In these cases, the repair\ncommand comes to the rescue, it will rearrange the file-slices so that there is no loss and the file-slices are\nconsistent with the compaction plan"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:"hoodie:stock_ticks_mor->compaction repair --instant 20181005222611\n......\nCompaction successfully repaired\n.....\n"})}),"\n",(0,n.jsx)(e.h2,{id:"metrics",children:"Metrics"}),"\n",(0,n.jsx)(e.p,{children:"Once the Hudi Client is configured with the right datasetname and environment for metrics, it produces the following graphite metrics, that aid in debugging hudi datasets"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Commit Duration"})," - This is amount of time it took to successfully commit a batch of records"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Rollback Duration"})," - Similarly, amount of time taken to undo partial data left over by a failed commit (happens everytime automatically after a failing write)"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"File Level metrics"})," - Shows the amount of new files added, versions, deleted (cleaned) in each commit"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Record Level Metrics"})," - Total records inserted/updated etc per commit"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Partition Level metrics"})," - number of partitions upserted (super useful to understand sudden spikes in commit duration)"]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"These metrics can then be plotted on a standard tool like grafana. Below is a sample commit duration chart."}),"\n",(0,n.jsx)("figure",{children:(0,n.jsx)("img",{className:"docimage",src:"/assets/images/hudi_commit_duration.png",alt:"hudi_commit_duration.png"})}),"\n",(0,n.jsx)(e.h2,{id:"troubleshooting",children:"Troubleshooting Failures"}),"\n",(0,n.jsx)(e.p,{children:"Section below generally aids in debugging Hudi failures. Off the bat, the following metadata is added to every record to help triage  issues easily using standard Hadoop SQL engines (Hive/Presto/Spark)"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"_hoodie_record_key"})," - Treated as a primary key within each DFS partition, basis of all updates/inserts"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"_hoodie_commit_time"})," - Last commit that touched this record"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"_hoodie_file_name"})," - Actual file name containing the record (super useful to triage duplicates)"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"_hoodie_partition_path"})," - Path from basePath that identifies the partition containing this record"]}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"NOTE:"})," As of now, Hudi assumes the application passes in the same deterministic partitionpath for a given recordKey. i.e the uniqueness of record key is only enforced within each partition.\n{: .notice--info}"]}),"\n",(0,n.jsx)(e.h3,{id:"missing-records",children:"Missing records"}),"\n",(0,n.jsx)(e.p,{children:"Please check if there were any write errors using the admin commands above, during the window at which the record could have been written.\nIf you do find errors, then the record was not actually written by Hudi, but handed back to the application to decide what to do with it."}),"\n",(0,n.jsx)(e.h3,{id:"duplicates",children:"Duplicates"}),"\n",(0,n.jsxs)(e.p,{children:["First of all, please confirm if you do indeed have duplicates ",(0,n.jsx)(e.strong,{children:"AFTER"})," ensuring the query is accessing the Hudi datasets ",(0,n.jsx)(e.a,{href:"/docs/querying_data",children:"properly"})," ."]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"If confirmed, please use the metadata fields above, to identify the physical files & partition files containing the records ."}),"\n",(0,n.jsx)(e.li,{children:"If duplicates span files across partitionpath, then this means your application is generating different partitionPaths for same recordKey, Please fix your app"}),"\n",(0,n.jsxs)(e.li,{children:["if duplicates span multiple files within the same partitionpath, please engage with mailing list. This should not happen. You can use the ",(0,n.jsx)(e.code,{children:"records deduplicate"})," command to fix your data."]}),"\n"]}),"\n",(0,n.jsx)(e.h3,{id:"spark-ui",children:"Spark failures"}),"\n",(0,n.jsx)(e.p,{children:"Typical upsert() DAG looks like below. Note that Hudi client also caches intermediate RDDs to intelligently profile workload and size files and spark parallelism.\nAlso Spark UI shows sortByKey twice due to the probe job also being shown, nonetheless its just a single sort."}),"\n",(0,n.jsx)("figure",{children:(0,n.jsx)("img",{className:"docimage",src:"/assets/images/hudi_upsert_dag.png",alt:"hudi_upsert_dag.png"})}),"\n",(0,n.jsx)(e.p,{children:"At a high level, there are two steps"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Index Lookup to identify files to be changed"})}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"Job 1 : Triggers the input data read, converts to HoodieRecord object and then stops at obtaining a spread of input records to target partition paths"}),"\n",(0,n.jsx)(e.li,{children:"Job 2 : Load the set of file names which we need check against"}),"\n",(0,n.jsx)(e.li,{children:"Job 3  & 4 : Actual lookup after smart sizing of spark join parallelism, by joining RDDs in 1 & 2 above"}),"\n",(0,n.jsx)(e.li,{children:"Job 5 : Have a tagged RDD of recordKeys with locations"}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Performing the actual writing of data"})}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"Job 6 : Lazy join of incoming records against recordKey, location to provide a final set of HoodieRecord which now contain the information about which file/partitionpath they are found at (or null if insert). Then also profile the workload again to determine sizing of files"}),"\n",(0,n.jsx)(e.li,{children:"Job 7 : Actual writing of data (update + insert + insert turned to updates to maintain file size)"}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"Depending on the exception source (Hudi/Spark), the above knowledge of the DAG can be used to pinpoint the actual issue. The most often encountered failures result from YARN/DFS temporary failures.\nIn the future, a more sophisticated debug/management UI would be added to the project, that can help automate some of this debugging."})]})}function d(_={}){const{wrapper:e}={...(0,t.R)(),..._.components};return e?(0,n.jsx)(e,{..._,children:(0,n.jsx)(c,{..._})}):c(_)}},28453:(_,e,i)=>{i.d(e,{R:()=>a,x:()=>s});var n=i(96540);const t={},o=n.createContext(t);function a(_){const e=n.useContext(o);return n.useMemo((function(){return"function"==typeof _?_(e):{...e,..._}}),[e,_])}function s(_){let e;return e=_.disableParentContext?"function"==typeof _.components?_.components(t):_.components||t:a(_.components),n.createElement(o.Provider,{value:e},_.children)}}}]);
"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[86121],{40049:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=i(74848),a=i(28453);const s={title:"Cleaning",toc:!0},t=void 0,r={id:"hoodie_cleaner",title:"Cleaning",description:"Hoodie Cleaner is a utility that helps you reclaim space and keep your storage costs in check. Apache Hudi provides",source:"@site/versioned_docs/version-0.12.2/hoodie_cleaner.md",sourceDirName:".",slug:"/hoodie_cleaner",permalink:"/cn/docs/0.12.2/hoodie_cleaner",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.2/hoodie_cleaner.md",tags:[],version:"0.12.2",frontMatter:{title:"Cleaning",toc:!0},sidebar:"docs",previous:{title:"Metadata Indexing",permalink:"/cn/docs/0.12.2/metadata_indexing"},next:{title:"Transformers",permalink:"/cn/docs/0.12.2/transforms"}},l={},c=[{value:"Cleaning Retention Policies",id:"cleaning-retention-policies",level:3},{value:"Configurations",id:"configurations",level:3},{value:"Run Independently",id:"run-independently",level:3},{value:"Run Asynchronously",id:"run-asynchronously",level:3},{value:"CLI",id:"cli",level:3}];function d(e){const n={a:"a",br:"br",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Hoodie Cleaner is a utility that helps you reclaim space and keep your storage costs in check. Apache Hudi provides\nsnapshot isolation between writers and readers by managing multiple files with MVCC concurrency. These file versions\nprovide history and enable time travel and rollbacks, but it is important to manage how much history you keep to balance your costs."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/configurations/#hoodiecleanautomatic",children:"Automatic Hudi cleaning"})," is enabled by default. Cleaning is invoked immediately after\neach commit, to delete older file slices. It's recommended to leave this enabled to ensure metadata and data storage growth is bounded."]}),"\n",(0,o.jsx)(n.h3,{id:"cleaning-retention-policies",children:"Cleaning Retention Policies"}),"\n",(0,o.jsx)(n.p,{children:"When cleaning old files, you should be careful not to remove files that are being actively used by long running queries.\nHudi cleaner currently supports the below cleaning policies to keep a certain number of commits or file versions:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"KEEP_LATEST_COMMITS"}),": This is the default policy. This is a temporal cleaning policy that ensures the effect of\nhaving lookback into all the changes that happened in the last X commits. Suppose a writer is ingesting data\ninto a Hudi dataset every 30 minutes and the longest running query can take 5 hours to finish, then the user should\nretain atleast the last 10 commits. With such a configuration, we ensure that the oldest version of a file is kept on\ndisk for at least 5 hours, thereby preventing the longest running query from failing at any point in time. Incremental cleaning is also possible using this policy.\nNumber of commits to retain can be configured by ",(0,o.jsx)(n.code,{children:"hoodie.cleaner.commits.retained"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"KEEP_LATEST_FILE_VERSIONS"}),": This policy has the effect of keeping N number of file versions irrespective of time.\nThis policy is useful when it is known how many MAX versions of the file does one want to keep at any given time.\nTo achieve the same behaviour as before of preventing long running queries from failing, one should do their calculations\nbased on data patterns. Alternatively, this policy is also useful if a user just wants to maintain 1 latest version of the file.\nNumber of file versions to retain can be configured by ",(0,o.jsx)(n.code,{children:"hoodie.cleaner.fileversions.retained"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"KEEP_LATEST_BY_HOURS"}),": This policy clean up based on hours.It is simple and useful when knowing that you want to keep files at any given time.\nCorresponding to commits with commit times older than the configured number of hours to be retained are cleaned.\nCurrently you can configure by parameter ",(0,o.jsx)(n.code,{children:"hoodie.cleaner.hours.retained"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"configurations",children:"Configurations"}),"\n",(0,o.jsxs)(n.p,{children:["For details about all possible configurations and their default values see the ",(0,o.jsx)(n.a,{href:"https://hudi.apache.org/docs/configurations#Compaction-Configs",children:"configuration docs"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"run-independently",children:"Run Independently"}),"\n",(0,o.jsxs)(n.p,{children:["Hoodie Cleaner can be run as a separate process or along with your data ingestion. In case you want to run it along with\ningesting data, configs are available which enable you to run it ",(0,o.jsx)(n.a,{href:"https://hudi.apache.org/docs/configurations#hoodiecleanasync",children:"synchronously or asynchronously"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"You can use this command for running the cleaner independently:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'spark-submit --master local --class org.apache.hudi.utilities.HoodieCleaner `ls packaging/hudi-utilities-bundle/target/hudi-utilities-bundle-*.jar` --help\n        Usage: <main class> [options]\n        Options:\n        --help, -h\n\n        --hoodie-conf\n        Any configuration that can be set in the properties file (using the CLI\n        parameter "--props") can also be passed command line using this\n        parameter. This can be repeated\n        Default: []\n        --props\n        path to properties file on localfs or dfs, with configurations for\n        hoodie client for cleaning\n        --spark-master\n        spark master to use.\n        Default: local[2]\n        * --target-base-path\n        base path for the hoodie table to be cleaner.\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Some examples to run the cleaner.",(0,o.jsx)(n.br,{}),"\n","Keep the latest 10 commits"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"spark-submit --master local --class org.apache.hudi.utilities.HoodieCleaner `ls packaging/hudi-utilities-bundle/target/hudi-utilities-bundle-*.jar`\\\n  --target-base-path /path/to/hoodie_table \\\n  --hoodie-conf hoodie.cleaner.policy=KEEP_LATEST_COMMITS \\\n  --hoodie-conf hoodie.cleaner.commits.retained=10 \\\n  --hoodie-conf hoodie.cleaner.parallelism=200\n"})}),"\n",(0,o.jsx)(n.p,{children:"Keep the latest 3 file versions"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"spark-submit --master local --class org.apache.hudi.utilities.HoodieCleaner `ls packaging/hudi-utilities-bundle/target/hudi-utilities-bundle-*.jar`\\\n  --target-base-path /path/to/hoodie_table \\\n  --hoodie-conf hoodie.cleaner.policy=KEEP_LATEST_FILE_VERSIONS \\\n  --hoodie-conf hoodie.cleaner.fileversions.retained=3 \\\n  --hoodie-conf hoodie.cleaner.parallelism=200\n"})}),"\n",(0,o.jsx)(n.p,{children:"Clean commits older than 24 hours"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"spark-submit --master local --class org.apache.hudi.utilities.HoodieCleaner `ls packaging/hudi-utilities-bundle/target/hudi-utilities-bundle-*.jar`\\\n  --target-base-path /path/to/hoodie_table \\\n  --hoodie-conf hoodie.cleaner.policy=KEEP_LATEST_BY_HOURS \\\n  --hoodie-conf hoodie.cleaner.hours.retained=24 \\\n  --hoodie-conf hoodie.cleaner.parallelism=200\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Note: The parallelism takes the min value of number of partitions to clean and ",(0,o.jsx)(n.code,{children:"hoodie.cleaner.parallelism"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"run-asynchronously",children:"Run Asynchronously"}),"\n",(0,o.jsx)(n.p,{children:"In case you wish to run the cleaner service asynchronously with writing, please configure the below:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"hoodie.clean.automatic=true\nhoodie.clean.async=true\n"})}),"\n",(0,o.jsx)(n.h3,{id:"cli",children:"CLI"}),"\n",(0,o.jsxs)(n.p,{children:["You can also use ",(0,o.jsx)(n.a,{href:"/docs/cli",children:"Hudi CLI"})," to run Hoodie Cleaner."]}),"\n",(0,o.jsx)(n.p,{children:"CLI provides the below commands for cleaner service:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"cleans show"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"clean showpartitions"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"cleans run"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Example of cleaner keeping the latest 10 commits"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"cleans run --sparkMaster local --hoodieConfigs hoodie.cleaner.policy=KEEP_LATEST_COMMITS hoodie.cleaner.commits.retained=3 hoodie.cleaner.parallelism=200\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can find more details and the relevant code for these commands in ",(0,o.jsx)(n.a,{href:"https://github.com/apache/hudi/blob/master/hudi-cli/src/main/java/org/apache/hudi/cli/commands/CleansCommand.java",children:(0,o.jsx)(n.code,{children:"org.apache.hudi.cli.commands.CleansCommand"})})," class."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>r});var o=i(96540);const a={},s=o.createContext(a);function t(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);
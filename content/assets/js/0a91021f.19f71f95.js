"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[44339],{53931:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=s(74848),t=s(28453);const a={title:"JuiceFS",keywords:["hudi","hive","juicefs","jfs","spark","flink"],summary:"In this page, we go over how to configure Hudi with JuiceFS file system.",last_modified_at:new Date("2021-10-12T02:50:00.000Z")},o=void 0,c={id:"jfs_hoodie",title:"JuiceFS",description:"In this page, we explain how to use Hudi with JuiceFS.",source:"@site/docs/jfs_hoodie.md",sourceDirName:".",slug:"/jfs_hoodie",permalink:"/docs/next/jfs_hoodie",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/docs/jfs_hoodie.md",tags:[],version:"current",frontMatter:{title:"JuiceFS",keywords:["hudi","hive","juicefs","jfs","spark","flink"],summary:"In this page, we go over how to configure Hudi with JuiceFS file system.",last_modified_at:"2021-10-12T02:50:00.000Z"},sidebar:"docs",previous:{title:"Baidu Cloud",permalink:"/docs/next/bos_hoodie"},next:{title:"Oracle Cloud Infrastructure",permalink:"/docs/next/oci_hoodie"}},r={},d=[{value:"JuiceFS configs",id:"juicefs-configs",level:2},{value:"Creating JuiceFS file system",id:"creating-juicefs-file-system",level:3},{value:"Download JuiceFS client",id:"download-juicefs-client",level:4},{value:"Install JuiceFS client",id:"install-juicefs-client",level:4},{value:"Format a JuiceFS file system",id:"format-a-juicefs-file-system",level:4},{value:"Adding JuiceFS configuration for Hudi",id:"adding-juicefs-configuration-for-hudi",level:3},{value:"Adding JuiceFS Hadoop Java SDK",id:"adding-juicefs-hadoop-java-sdk",level:3}];function l(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"In this page, we explain how to use Hudi with JuiceFS."}),"\n",(0,n.jsx)(i.h2,{id:"juicefs-configs",children:"JuiceFS configs"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"https://github.com/juicedata/juicefs",children:"JuiceFS"})," is a high-performance distributed file system. Any data stored into JuiceFS, the data itself will be persisted in object storage (e.g. Amazon S3), and the metadata corresponding to the data can be persisted in various database engines such as Redis, MySQL, and TiKV according to the needs of the scene."]}),"\n",(0,n.jsx)(i.p,{children:"There are three configurations required for Hudi-JuiceFS compatibility:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"Creating JuiceFS file system"}),"\n",(0,n.jsx)(i.li,{children:"Adding JuiceFS configuration for Hudi"}),"\n",(0,n.jsxs)(i.li,{children:["Adding required JAR to ",(0,n.jsx)(i.code,{children:"classpath"})]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"creating-juicefs-file-system",children:"Creating JuiceFS file system"}),"\n",(0,n.jsxs)(i.p,{children:["JuiceFS supports multiple ",(0,n.jsx)(i.a,{href:"https://juicefs.com/docs/community/databases_for_metadata",children:"metadata engines"})," such as Redis, MySQL, SQLite, and TiKV. And supports almost all ",(0,n.jsx)(i.a,{href:"https://juicefs.com/docs/community/how_to_setup_object_storage#supported-object-storage",children:"object storage"})," as data storage, e.g. Amazon S3, Google Cloud Storage, Azure Blob Storage."]}),"\n",(0,n.jsx)(i.p,{children:'The following example uses Redis as "Metadata Engine" and Amazon S3 as "Data Storage" in Linux environment.'}),"\n",(0,n.jsx)(i.h4,{id:"download-juicefs-client",children:"Download JuiceFS client"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell",children:"$ JFS_LATEST_TAG=$(curl -s https://api.github.com/repos/juicedata/juicefs/releases/latest | grep 'tag_name' | cut -d '\"' -f 4 | tr -d 'v')\n$ wget \"https://github.com/juicedata/juicefs/releases/download/v${JFS_LATEST_TAG}/juicefs-${JFS_LATEST_TAG}-linux-amd64.tar.gz\"\n"})}),"\n",(0,n.jsx)(i.h4,{id:"install-juicefs-client",children:"Install JuiceFS client"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell",children:'$ mkdir juice && tar -zxvf "juicefs-${JFS_LATEST_TAG}-linux-amd64.tar.gz" -C juice\n$ sudo install juice/juicefs /usr/local/bin\n'})}),"\n",(0,n.jsx)(i.h4,{id:"format-a-juicefs-file-system",children:"Format a JuiceFS file system"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell",children:"$ juicefs format \\\n    --storage s3 \\\n    --bucket https://<bucket>.s3.<region>.amazonaws.com \\\n    --access-key <your-access-key-id> \\\n    --secret-key <your-access-key-secret> \\\n    redis://:<password>@<redis-host>:6379/1 \\\n    myjfs\n"})}),"\n",(0,n.jsxs)(i.p,{children:["For more information, please refer to ",(0,n.jsx)(i.a,{href:"https://juicefs.com/docs/community/quick_start_guide",children:'"JuiceFS Quick Start Guide"'}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"adding-juicefs-configuration-for-hudi",children:"Adding JuiceFS configuration for Hudi"}),"\n",(0,n.jsxs)(i.p,{children:["Add the required configurations in your ",(0,n.jsx)(i.code,{children:"core-site.xml"})," from where Hudi can fetch them."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-xml",children:'<property>\n    <name>fs.defaultFS</name>\n    <value>jfs://myjfs</value>\n    <description>Optional, you can also specify full path "jfs://myjfs/path-to-dir" with location to use JuiceFS</description>\n</property>\n<property>\n    <name>fs.jfs.impl</name>\n    <value>io.juicefs.JuiceFileSystem</value>\n</property>\n<property>\n    <name>fs.AbstractFileSystem.jfs.impl</name>\n    <value>io.juicefs.JuiceFS</value>\n</property>\n<property>\n    <name>juicefs.meta</name>\n    <value>redis://:<password>@<redis-host>:6379/1</value>\n</property>\n<property>\n    <name>juicefs.cache-dir</name>\n    <value>/path-to-your-disk</value>\n</property>\n<property>\n    <name>juicefs.cache-size</name>\n    <value>1024</value>\n</property>\n<property>\n    <name>juicefs.access-log</name>\n    <value>/tmp/juicefs.access.log</value>\n</property>\n'})}),"\n",(0,n.jsxs)(i.p,{children:["You can visit ",(0,n.jsx)(i.a,{href:"https://juicefs.com/docs/community/hadoop_java_sdk#client-configurations",children:"here"})," for more configuration information."]}),"\n",(0,n.jsx)(i.h3,{id:"adding-juicefs-hadoop-java-sdk",children:"Adding JuiceFS Hadoop Java SDK"}),"\n",(0,n.jsxs)(i.p,{children:["You can download latest JuiceFS Hadoop Java SDK from ",(0,n.jsx)(i.a,{href:"http://github.com/juicedata/juicefs/releases/latest",children:"here"})," (download the file called like ",(0,n.jsx)(i.code,{children:"juicefs-hadoop-X.Y.Z-linux-amd64.jar"}),"), and place it to the ",(0,n.jsx)(i.code,{children:"classpath"}),". You can also ",(0,n.jsx)(i.a,{href:"https://juicefs.com/docs/community/hadoop_java_sdk#client-compilation",children:"compile"})," it by yourself."]}),"\n",(0,n.jsxs)(i.p,{children:["For example, if you use Hudi in Spark, please put the JAR in ",(0,n.jsx)(i.code,{children:"$SPARK_HOME/jars"}),"."]})]})}function u(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,i,s)=>{s.d(i,{R:()=>o,x:()=>c});var n=s(96540);const t={},a=n.createContext(t);function o(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);
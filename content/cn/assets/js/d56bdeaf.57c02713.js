"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[25778],{93147:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var n=s(74848),a=s(28453);const t={title:"Transformers",toc:!0},i=void 0,o={id:"transforms",title:"Transformers",description:"Apache Hudi provides a HoodieTransformer Utility that allows you to perform transformations the source data before writing it to a Hudi table.",source:"@site/versioned_docs/version-0.12.3/transforms.md",sourceDirName:".",slug:"/transforms",permalink:"/cn/docs/0.12.3/transforms",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.3/transforms.md",tags:[],version:"0.12.3",frontMatter:{title:"Transformers",toc:!0},sidebar:"docs",previous:{title:"Cleaning",permalink:"/cn/docs/0.12.3/hoodie_cleaner"},next:{title:"Marker Mechanism",permalink:"/cn/docs/0.12.3/markers"}},l={},c=[{value:"SQL Query Transformer",id:"sql-query-transformer",level:3},{value:"SQL File Transformer",id:"sql-file-transformer",level:3},{value:"Flattening Transformer",id:"flattening-transformer",level:3},{value:"Chained Transformer",id:"chained-transformer",level:3},{value:"AWS DMS Transformer",id:"aws-dms-transformer",level:3},{value:"Custom Transformer Implementation",id:"custom-transformer-implementation",level:3}];function d(e){const r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["Apache Hudi provides a HoodieTransformer Utility that allows you to perform transformations the source data before writing it to a Hudi table.\nThere are several ",(0,n.jsx)(r.a,{href:"https://github.com/apache/hudi/tree/master/hudi-utilities/src/main/java/org/apache/hudi/utilities/transform",children:"out-of-the-box"}),"\ntransformers available and you can build your own custom transformer class as well."]}),"\n",(0,n.jsx)(r.h3,{id:"sql-query-transformer",children:"SQL Query Transformer"}),"\n",(0,n.jsx)(r.p,{children:"You can pass a SQL Query to be executed during write."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-scala",children:"--transformer-class org.apache.hudi.utilities.transform.SqlQueryBasedTransformer\n--hoodie-conf hoodie.deltastreamer.transformer.sql=SELECT a.col1, a.col3, a.col4 FROM <SRC> a\n"})}),"\n",(0,n.jsx)(r.h3,{id:"sql-file-transformer",children:"SQL File Transformer"}),"\n",(0,n.jsx)(r.p,{children:"You can specify a File with a SQL script to be executed during write. The SQL file is configured with this hoodie property:\nhoodie.deltastreamer.transformer.sql.file"}),"\n",(0,n.jsx)(r.p,{children:'The query should reference the source as a table named "<SRC>"'}),"\n",(0,n.jsx)(r.p,{children:"The final sql statement result is used as the write payload."}),"\n",(0,n.jsx)(r.p,{children:"Example Spark SQL Query:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"CACHE TABLE tmp_personal_trips AS\nSELECT * FROM <SRC> WHERE trip_type='personal_trips';\n\nSELECT * FROM tmp_personal_trips;\n"})}),"\n",(0,n.jsx)(r.h3,{id:"flattening-transformer",children:"Flattening Transformer"}),"\n",(0,n.jsx)(r.p,{children:"This transformer can flatten nested objects. It flattens the nested fields in the incoming records by prefixing\ninner-fields with outer-field and _ in a nested fashion. Currently flattening of arrays is not supported."}),"\n",(0,n.jsx)(r.p,{children:"An example schema may look something like the below where name is a nested field of StructType in the original source"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-scala",children:"age as intColumn,address as stringColumn,name.first as name_first,name.last as name_last, name.middle as name_middle\n"})}),"\n",(0,n.jsx)(r.p,{children:"Set the config as:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-scala",children:"--transformer-class org.apache.hudi.utilities.transform.FlatteningTransformer\n"})}),"\n",(0,n.jsx)(r.h3,{id:"chained-transformer",children:"Chained Transformer"}),"\n",(0,n.jsx)(r.p,{children:"If you wish to use multiple transformers together, you can use the Chained transformers to pass multiple to be executed sequentially."}),"\n",(0,n.jsx)(r.p,{children:"Example below first flattens the incoming records and then does sql projection based on the query specified:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-scala",children:"--transformer-class org.apache.hudi.utilities.transform.FlatteningTransformer,org.apache.hudi.utilities.transform.SqlQueryBasedTransformer   \n--hoodie-conf hoodie.deltastreamer.transformer.sql=SELECT a.col1, a.col3, a.col4 FROM <SRC> a\n"})}),"\n",(0,n.jsx)(r.h3,{id:"aws-dms-transformer",children:"AWS DMS Transformer"}),"\n",(0,n.jsxs)(r.p,{children:["This transformer is specific for AWS DMS data. It adds ",(0,n.jsx)(r.code,{children:"Op"})," field with value ",(0,n.jsx)(r.code,{children:"I"})," if the field is not present."]}),"\n",(0,n.jsx)(r.p,{children:"Set the config as:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-scala",children:"--transformer-class org.apache.hudi.utilities.transform.AWSDmsTransformer\n"})}),"\n",(0,n.jsx)(r.h3,{id:"custom-transformer-implementation",children:"Custom Transformer Implementation"}),"\n",(0,n.jsxs)(r.p,{children:["You can write your own custom transformer by extending ",(0,n.jsx)(r.a,{href:"https://github.com/apache/hudi/tree/master/hudi-utilities/src/main/java/org/apache/hudi/utilities/transform",children:"this class"})]})]})}function m(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>o});var n=s(96540);const a={},t=n.createContext(a);function i(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);
"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[21070],{27992:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=t(74848),i=t(28453);t(11470),t(19365);const r={title:"SQL DML",summary:"In this page, we go will cover details on how to use DML statements on Hudi tables.",toc:!0,last_modified_at:null},s=void 0,o={id:"sql_dml",title:"SQL DML",description:"Spark SQL",source:"@site/versioned_docs/version-0.14.0/sql_dml.md",sourceDirName:".",slug:"/sql_dml",permalink:"/docs/0.14.0/sql_dml",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.14.0/sql_dml.md",tags:[],version:"0.14.0",frontMatter:{title:"SQL DML",summary:"In this page, we go will cover details on how to use DML statements on Hudi tables.",toc:!0,last_modified_at:null},sidebar:"docs",previous:{title:"SQL DDL",permalink:"/docs/0.14.0/sql_ddl"},next:{title:"SQL Queries",permalink:"/docs/0.14.0/sql_queries"}},l={},d=[{value:"Spark SQL",id:"spark-sql",level:2},{value:"Insert Into",id:"insert-into",level:3},{value:"Insert Overwrite",id:"insert-overwrite",level:3},{value:"Update",id:"update",level:3},{value:"Merge Into",id:"merge-into",level:3},{value:"Delete Data",id:"delete-data",level:3},{value:"Data Skipping and Indexing",id:"data-skipping-and-indexing",level:3},{value:"Flink",id:"flink",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"spark-sql",children:"Spark SQL"}),"\n",(0,a.jsx)(n.p,{children:"SparkSQL provides several Data Manipulation Language (DML) actions for interacting with Hudi tables. These operations allow you to insert, update, merge and delete data\nfrom your Hudi tables. Let's explore them one by one."}),"\n",(0,a.jsxs)(n.p,{children:["Please refer to ",(0,a.jsx)(n.a,{href:"/docs/sql_ddl",children:"SQL DDL"})," for creating Hudi tables using SQL."]}),"\n",(0,a.jsx)(n.h3,{id:"insert-into",children:"Insert Into"}),"\n",(0,a.jsxs)(n.p,{children:["You can use the ",(0,a.jsx)(n.code,{children:"INSERT INTO"})," statement to add data to a Hudi table using Spark SQL. Here are some examples:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"INSERT INTO <table> \nSELECT <columns> FROM <source>;\n"})}),"\n",(0,a.jsx)(n.admonition,{title:"Deprecations",type:"note",children:(0,a.jsxs)(n.p,{children:["From 0.14.0, ",(0,a.jsx)(n.code,{children:"hoodie.sql.bulk.insert.enable"})," and ",(0,a.jsx)(n.code,{children:"hoodie.sql.insert.mode"})," are deprecated. Users are expected to use ",(0,a.jsx)(n.code,{children:"hoodie.spark.sql.insert.into.operation"})," instead.\nTo manage duplicates with ",(0,a.jsx)(n.code,{children:"INSERT INTO"}),", please check out ",(0,a.jsx)(n.a,{href:"/docs/configurations#hoodiedatasourceinsertduppolicy",children:"insert dup policy config"}),"."]})}),"\n",(0,a.jsx)(n.p,{children:"Examples:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- Insert into a copy-on-write (COW) Hudi table\nINSERT INTO hudi_cow_nonpcf_tbl SELECT 1, 'a1', 20;\n\n-- Insert into a merge-on-read (MOR) Hudi table\nINSERT INTO hudi_mor_tbl SELECT 1, 'a1', 20, 1000;\n\n-- Insert into a COW Hudi table with static partition\nINSERT INTO hudi_cow_pt_tbl PARTITION(dt = '2021-12-09', hh='11') SELECT 2, 'a2', 1000;\n\n-- Insert into a COW Hudi table with dynamic partition\nINSERT INTO hudi_cow_pt_tbl PARTITION(dt, hh) SELECT 1 AS id, 'a1' AS name, 1000 AS ts, '2021-12-09' AS dt, '10' AS hh;\n"})}),"\n",(0,a.jsx)(n.admonition,{title:"Mapping to write operations",type:"note",children:(0,a.jsxs)(n.p,{children:["Hudi offers flexibility in choosing the underlying ",(0,a.jsx)(n.a,{href:"/docs/write_operations",children:"write operation"})," of a ",(0,a.jsx)(n.code,{children:"INSERT INTO"})," statement using\nthe ",(0,a.jsx)(n.code,{children:"hoodie.spark.sql.insert.into.operation"})," configuration. Possible options include ",(0,a.jsx)(n.em,{children:'"bulk_insert"'})," (large inserts), ",(0,a.jsx)(n.em,{children:'"insert"'})," (with small file management),\nand ",(0,a.jsx)(n.em,{children:'"upsert"'})," (with deduplication/merging). If a precombine field is not set, ",(0,a.jsx)(n.em,{children:'"insert"'})," is chosen as the default. For a table with preCombine field set,\n",(0,a.jsx)(n.em,{children:'"upsert"'})," is chosen as the default operation."]})}),"\n",(0,a.jsx)(n.h3,{id:"insert-overwrite",children:"Insert Overwrite"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"INSERT OVERWRITE"})," statement is used to replace existing data in a Hudi table."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"INSERT OVERWRITE <table> \nSELECT <columns> FROM <source>;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["All existing partitions that are affected by the ",(0,a.jsx)(n.code,{children:"INSERT OVERWRITE"})," statement will replaced with the source data.\nHere are some examples:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- Overwrite non-partitioned table\nINSERT OVERWRITE hudi_mor_tbl SELECT 99, 'a99', 20.0, 900;\nINSERT OVERWRITE hudi_cow_nonpcf_tbl SELECT 99, 'a99', 20.0;\n\n-- Overwrite partitioned table with dynamic partition\nINSERT OVERWRITE TABLE hudi_cow_pt_tbl SELECT 10, 'a10', 1100, '2021-12-09', '10';\n\n-- Overwrite partitioned table with static partition\nINSERT OVERWRITE hudi_cow_pt_tbl PARTITION(dt = '2021-12-09', hh='12') SELECT 13, 'a13', 1100;\n"})}),"\n",(0,a.jsx)(n.h3,{id:"update",children:"Update"}),"\n",(0,a.jsxs)(n.p,{children:["You can use the ",(0,a.jsx)(n.code,{children:"UPDATE"})," statement to modify existing data in a Hudi table directly."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"UPDATE tableIdentifier SET column = EXPRESSION(,column = EXPRESSION) [ WHERE boolExpression]\n"})}),"\n",(0,a.jsx)(n.p,{children:"Here's an example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- Update data in a Hudi table\nUPDATE hudi_mor_tbl SET price = price * 2, ts = 1111 WHERE id = 1;\n\n-- Update data in a partitioned Hudi table\nUPDATE hudi_cow_pt_tbl SET name = 'a1_1', ts = 1001 WHERE id = 1;\n\n-- update using non-PK field\nupdate hudi_cow_pt_tbl set ts = 1001 where name = 'a1';\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"UPDATE"})," operation requires the specification of a ",(0,a.jsx)(n.code,{children:"preCombineField"}),"."]})}),"\n",(0,a.jsx)(n.h3,{id:"merge-into",children:"Merge Into"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"MERGE INTO"})," statement allows you to perform more complex updates and merges against source data. The ",(0,a.jsx)(n.code,{children:"MERGE INTO"})," statement\nis similar to the ",(0,a.jsx)(n.code,{children:"UPDATE"})," statement, but it allows you to specify different actions for matched and unmatched records."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"MERGE INTO tableIdentifier AS target_alias\nUSING (sub_query | tableIdentifier) AS source_alias\nON <merge_condition>\n[ WHEN MATCHED [ AND <condition> ] THEN <matched_action> ]\n[ WHEN NOT MATCHED [ AND <condition> ]  THEN <not_matched_action> ]\n\n<merge_condition> =A equal bool condition \n<matched_action>  =\n  DELETE  |\n  UPDATE SET *  |\n  UPDATE SET column1 = expression1 [, column2 = expression2 ...]\n<not_matched_action>  =\n  INSERT *  |\n  INSERT (column1 [, column2 ...]) VALUES (value1 [, value2 ...])\n"})}),"\n",(0,a.jsx)(n.p,{children:"Examples below"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- source table using hudi for testing merging into non-partitioned table\ncreate table merge_source (id int, name string, price double, ts bigint) using hudi\ntblproperties (primaryKey = 'id', preCombineField = 'ts');\ninsert into merge_source values (1, \"old_a1\", 22.22, 900), (2, \"new_a2\", 33.33, 2000), (3, \"new_a3\", 44.44, 2000);\n\nmerge into hudi_mor_tbl as target\nusing merge_source as source\non target.id = source.id\nwhen matched then update set *\nwhen not matched then insert *\n;\n\n-- source table using parquet for testing merging into partitioned table\ncreate table merge_source2 (id int, name string, flag string, dt string, hh string) using parquet;\ninsert into merge_source2 values (1, \"new_a1\", 'update', '2021-12-09', '10'), (2, \"new_a2\", 'delete', '2021-12-09', '11'), (3, \"new_a3\", 'insert', '2021-12-09', '12');\n\nMERGE into hudi_cow_pt_tbl as target\nusing (\n  select id, name, '1000' as ts, flag, dt, hh from merge_source2\n) source\non target.id = source.id\nwhen matched and flag != 'delete' then\n update set id = source.id, name = source.name, ts = source.ts, dt = source.dt, hh = source.hh\nwhen matched and flag = 'delete' then delete\nwhen not matched then\n insert (id, name, ts, dt, hh) values(source.id, source.name, source.ts, source.dt, source.hh)\n;\n\n"})}),"\n",(0,a.jsx)(n.admonition,{title:"Key requirements",type:"note",children:(0,a.jsxs)(n.p,{children:["For a Hudi table with user configured primary keys, the join condition in ",(0,a.jsx)(n.code,{children:"Merge Into"})," is expected to contain the primary keys of the table.\nFor a Table where Hudi auto generates primary keys, the join condition in MIT can be on any arbitrary data columns."]})}),"\n",(0,a.jsx)(n.h3,{id:"delete-data",children:"Delete Data"}),"\n",(0,a.jsxs)(n.p,{children:["You can remove data from a Hudi table using the ",(0,a.jsx)(n.code,{children:"DELETE FROM"})," statement."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"DELETE FROM tableIdentifier [ WHERE boolExpression ]\n"})}),"\n",(0,a.jsx)(n.p,{children:"Examples below"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- Delete data from a Hudi table\nDELETE FROM hudi_cow_nonpcf_tbl WHERE uuid = 1;\n\n-- Delete data from a MOR Hudi table based on a condition\nDELETE FROM hudi_mor_tbl WHERE id % 2 = 0;\n\n-- Delete data using a non-primary key field\nDELETE FROM hudi_cow_pt_tbl WHERE name = 'a1';\n"})}),"\n",(0,a.jsx)(n.h3,{id:"data-skipping-and-indexing",children:"Data Skipping and Indexing"}),"\n",(0,a.jsxs)(n.p,{children:["DML operations can be sped up using column statistics for data skipping and using indexes to reduce the amount of data scanned.\nFor e.g. the following helps speed up the ",(0,a.jsx)(n.code,{children:"DELETE"})," operation on a Hudi table, by using the record level index."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SET hoodie.enable.data.skipping=true;\nSET hoodie.metadata.record.index.enable=true;\nSET hoodie.metadata.enable=true;\n\nDELETE from hudi_table where uuid = 'c8abbe79-8d89-47ea-b4ce-4d224bae5bfa';\n"})}),"\n",(0,a.jsx)(n.p,{children:"These DML operations give you powerful tools for managing your tables using Spark SQL.\nYou can control the behavior of these operations using various configuration options, as explained in the documentation."}),"\n",(0,a.jsx)(n.h2,{id:"flink",children:"Flink"}),"\n",(0,a.jsxs)(n.p,{children:["Flink SQL also provides several Data Manipulation Language (DML) actions for interacting with Hudi tables. All these operations are already\nshowcased in the ",(0,a.jsx)(n.a,{href:"/docs/flink-quick-start-guide",children:"Flink Quickstart"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var a=t(34164);const i={tabItem:"tabItem_Ymn6"};var r=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>_});var a=t(96540),i=t(34164),r=t(23104),s=t(56347),o=t(205),l=t(57485),d=t(31682),c=t(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}(t);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=h(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[d,u]=m({queryString:t,groupId:i}),[b,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,c.Dv)(t);return[i,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),E=(()=>{const e=d??b;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{E&&l(E)}),[E]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var g=t(92303);const E={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function x(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),i=o[t].value;i!==a&&(d(n),s(i))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:u,onClick:c,...r,className:(0,i.A)("tabs__item",E.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function T(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function j(e){const n=b(e);return(0,f.jsxs)("div",{className:(0,i.A)("tabs-container",E.tabList),children:[(0,f.jsx)(x,{...n,...e}),(0,f.jsx)(T,{...n,...e})]})}function _(e){const n=(0,g.A)();return(0,f.jsx)(j,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var a=t(96540);const i={},r=a.createContext(i);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);
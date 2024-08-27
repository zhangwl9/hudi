"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[38035],{44047:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>j,frontMatter:()=>r,metadata:()=>l,toc:()=>t});var i=s(74848),d=s(28453);const r={version:"0.5.0",title:"\u6982\u5ff5",keywords:["hudi","design","storage","views","timeline"],summary:"Here we introduce some basic concepts & give a broad technical overview of Hudi",toc:!0,last_modified_at:new Date("2019-12-30T19:59:57.000Z"),language:"cn"},c=void 0,l={id:"concepts",title:"\u6982\u5ff5",description:"Apache Hudi(\u53d1\u97f3\u4e3a\u201cHudi\u201d)\u5728DFS\u7684\u6570\u636e\u96c6\u4e0a\u63d0\u4f9b\u4ee5\u4e0b\u6d41\u539f\u8bed",source:"@site/i18n/cn/docusaurus-plugin-content-docs/version-0.5.0/concepts.md",sourceDirName:".",slug:"/concepts",permalink:"/cn/docs/0.5.0/concepts",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.5.0/concepts.md",tags:[],version:"0.5.0",frontMatter:{version:"0.5.0",title:"\u6982\u5ff5",keywords:["hudi","design","storage","views","timeline"],summary:"Here we introduce some basic concepts & give a broad technical overview of Hudi",toc:!0,last_modified_at:"2019-12-30T19:59:57.000Z",language:"cn"}},h={},t=[{value:"\u65f6\u95f4\u8f74",id:"\u65f6\u95f4\u8f74",level:2},{value:"\u6587\u4ef6\u7ec4\u7ec7",id:"\u6587\u4ef6\u7ec4\u7ec7",level:2},{value:"\u5b58\u50a8\u7c7b\u578b\u548c\u89c6\u56fe",id:"\u5b58\u50a8\u7c7b\u578b\u548c\u89c6\u56fe",level:2},{value:"\u5b58\u50a8\u7c7b\u578b",id:"\u5b58\u50a8\u7c7b\u578b",level:3},{value:"\u89c6\u56fe",id:"\u89c6\u56fe",level:3},{value:"\u5199\u65f6\u590d\u5236\u5b58\u50a8",id:"copy-on-write-storage",level:2},{value:"\u8bfb\u65f6\u5408\u5e76\u5b58\u50a8",id:"merge-on-read-storage",level:2}];function x(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Apache Hudi(\u53d1\u97f3\u4e3a\u201cHudi\u201d)\u5728DFS\u7684\u6570\u636e\u96c6\u4e0a\u63d0\u4f9b\u4ee5\u4e0b\u6d41\u539f\u8bed"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u63d2\u5165\u66f4\u65b0           (\u5982\u4f55\u6539\u53d8\u6570\u636e\u96c6?)"}),"\n",(0,i.jsx)(n.li,{children:"\u589e\u91cf\u62c9\u53d6           (\u5982\u4f55\u83b7\u53d6\u53d8\u66f4\u7684\u6570\u636e?)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u8ba8\u8bba\u91cd\u8981\u7684\u6982\u5ff5\u548c\u672f\u8bed\uff0c\u8fd9\u4e9b\u6982\u5ff5\u548c\u672f\u8bed\u6709\u52a9\u4e8e\u7406\u89e3\u5e76\u6709\u6548\u4f7f\u7528\u8fd9\u4e9b\u539f\u8bed\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u65f6\u95f4\u8f74",children:"\u65f6\u95f4\u8f74"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u5b83\u7684\u6838\u5fc3\uff0cHudi\u7ef4\u62a4\u4e00\u6761\u5305\u542b\u5728\u4e0d\u540c\u7684",(0,i.jsx)(n.code,{children:"\u5373\u65f6"}),"\u65f6\u95f4\u6240\u6709\u5bf9\u6570\u636e\u96c6\u64cd\u4f5c\u7684",(0,i.jsx)(n.code,{children:"\u65f6\u95f4\u8f74"}),"\uff0c\u4ece\u800c\u63d0\u4f9b\uff0c\u4ece\u4e0d\u540c\u65f6\u95f4\u70b9\u51fa\u53d1\u5f97\u5230\u4e0d\u540c\u7684\u89c6\u56fe\u4e0b\u7684\u6570\u636e\u96c6\u3002Hudi\u5373\u65f6\u5305\u542b\u4ee5\u4e0b\u7ec4\u4ef6"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"\u64cd\u4f5c\u7c7b\u578b"})," : \u5bf9\u6570\u636e\u96c6\u6267\u884c\u7684\u64cd\u4f5c\u7c7b\u578b"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"\u5373\u65f6\u65f6\u95f4"})," : \u5373\u65f6\u65f6\u95f4\u901a\u5e38\u662f\u4e00\u4e2a\u65f6\u95f4\u6233(\u4f8b\u5982\uff1a20190117010349)\uff0c\u8be5\u65f6\u95f4\u6233\u6309\u64cd\u4f5c\u5f00\u59cb\u65f6\u95f4\u7684\u987a\u5e8f\u5355\u8c03\u589e\u52a0\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"\u72b6\u6001"})," : \u5373\u65f6\u7684\u72b6\u6001"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Hudi\u4fdd\u8bc1\u5728\u65f6\u95f4\u8f74\u4e0a\u6267\u884c\u7684\u64cd\u4f5c\u7684\u539f\u5b50\u6027\u548c\u57fa\u4e8e\u5373\u65f6\u65f6\u95f4\u7684\u65f6\u95f4\u8f74\u4e00\u81f4\u6027\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6267\u884c\u7684\u5173\u952e\u64cd\u4f5c\u5305\u62ec"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"COMMITS"})," - \u4e00\u6b21\u63d0\u4ea4\u8868\u793a\u5c06\u4e00\u7ec4\u8bb0\u5f55",(0,i.jsx)(n.strong,{children:"\u539f\u5b50\u5199\u5165"}),"\u5230\u6570\u636e\u96c6\u4e2d\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"CLEANS"})," - \u5220\u9664\u6570\u636e\u96c6\u4e2d\u4e0d\u518d\u9700\u8981\u7684\u65e7\u6587\u4ef6\u7248\u672c\u7684\u540e\u53f0\u6d3b\u52a8\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DELTA_COMMIT"})," - \u589e\u91cf\u63d0\u4ea4\u662f\u6307\u5c06\u4e00\u6279\u8bb0\u5f55",(0,i.jsx)(n.strong,{children:"\u539f\u5b50\u5199\u5165"}),"\u5230MergeOnRead\u5b58\u50a8\u7c7b\u578b\u7684\u6570\u636e\u96c6\u4e2d\uff0c\u5176\u4e2d\u4e00\u4e9b/\u6240\u6709\u6570\u636e\u90fd\u53ef\u4ee5\u53ea\u5199\u5230\u589e\u91cf\u65e5\u5fd7\u4e2d\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"COMPACTION"})," - \u534f\u8c03Hudi\u4e2d\u5dee\u5f02\u6570\u636e\u7ed3\u6784\u7684\u540e\u53f0\u6d3b\u52a8\uff0c\u4f8b\u5982\uff1a\u5c06\u66f4\u65b0\u4ece\u57fa\u4e8e\u884c\u7684\u65e5\u5fd7\u6587\u4ef6\u53d8\u6210\u5217\u683c\u5f0f\u3002\u5728\u5185\u90e8\uff0c\u538b\u7f29\u8868\u73b0\u4e3a\u65f6\u95f4\u8f74\u4e0a\u7684\u7279\u6b8a\u63d0\u4ea4\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ROLLBACK"})," - \u8868\u793a\u63d0\u4ea4/\u589e\u91cf\u63d0\u4ea4\u4e0d\u6210\u529f\u4e14\u5df2\u56de\u6eda\uff0c\u5220\u9664\u5728\u5199\u5165\u8fc7\u7a0b\u4e2d\u4ea7\u751f\u7684\u6240\u6709\u90e8\u5206\u6587\u4ef6\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SAVEPOINT"}),' - \u5c06\u67d0\u4e9b\u6587\u4ef6\u7ec4\u6807\u8bb0\u4e3a"\u5df2\u4fdd\u5b58"\uff0c\u4ee5\u4fbf\u6e05\u7406\u7a0b\u5e8f\u4e0d\u4f1a\u5c06\u5176\u5220\u9664\u3002\u5728\u53d1\u751f\u707e\u96be/\u6570\u636e\u6062\u590d\u7684\u60c5\u51b5\u4e0b\uff0c\u5b83\u6709\u52a9\u4e8e\u5c06\u6570\u636e\u96c6\u8fd8\u539f\u5230\u65f6\u95f4\u8f74\u4e0a\u7684\u67d0\u4e2a\u70b9\u3002']}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u4efb\u4f55\u7ed9\u5b9a\u7684\u5373\u65f6\u90fd\u53ef\u4ee5\u5904\u4e8e\u4ee5\u4e0b\u72b6\u6001\u4e4b\u4e00"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"REQUESTED"})," - \u8868\u793a\u5df2\u8c03\u5ea6\u4f46\u5c1a\u672a\u542f\u52a8\u7684\u64cd\u4f5c\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"INFLIGHT"})," - \u8868\u793a\u5f53\u524d\u6b63\u5728\u6267\u884c\u8be5\u64cd\u4f5c\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"COMPLETED"})," - \u8868\u793a\u5728\u65f6\u95f4\u8f74\u4e0a\u5b8c\u6210\u4e86\u8be5\u64cd\u4f5c\u3002"]}),"\n"]}),"\n",(0,i.jsx)("figure",{children:(0,i.jsx)("img",{className:"docimage",src:"/assets/images/hudi_timeline.png",alt:"hudi_timeline.png"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4e0a\u9762\u7684\u793a\u4f8b\u663e\u793a\u4e86\u5728Hudi\u6570\u636e\u96c6\u4e0a\u5927\u7ea610:00\u523010:20\u4e4b\u95f4\u53d1\u751f\u7684\u66f4\u65b0\u4e8b\u4ef6\uff0c\u5927\u7ea6\u6bcf5\u5206\u949f\u4e00\u6b21\uff0c\u5c06\u63d0\u4ea4\u5143\u6570\u636e\u4ee5\u53ca\u5176\u4ed6\u540e\u53f0\u6e05\u7406/\u538b\u7f29\u4fdd\u7559\u5728Hudi\u65f6\u95f4\u8f74\u4e0a\u3002\n\u89c2\u5bdf\u7684\u5173\u952e\u70b9\u662f\uff1a\u63d0\u4ea4\u65f6\u95f4\u6307\u793a\u6570\u636e\u7684",(0,i.jsx)(n.code,{children:"\u5230\u8fbe\u65f6\u95f4"}),"\uff08\u4e0a\u534810:20\uff09\uff0c\u800c\u5b9e\u9645\u6570\u636e\u7ec4\u7ec7\u5219\u53cd\u6620\u4e86\u5b9e\u9645\u65f6\u95f4\u6216",(0,i.jsx)(n.code,{children:"\u4e8b\u4ef6\u65f6\u95f4"}),"\uff0c\u5373\u6570\u636e\u6240\u53cd\u6620\u7684\uff08\u4ece07:00\u5f00\u59cb\u7684\u6bcf\u5c0f\u65f6\u65f6\u6bb5\uff09\u3002\u5728\u6743\u8861\u6570\u636e\u5ef6\u8fdf\u548c\u5b8c\u6574\u6027\u65f6\uff0c\u8fd9\u662f\u4e24\u4e2a\u5173\u952e\u6982\u5ff5\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u6709\u5ef6\u8fdf\u5230\u8fbe\u7684\u6570\u636e\uff08\u4e8b\u4ef6\u65f6\u95f4\u4e3a9:00\u7684\u6570\u636e\u572810:20\u8fbe\u5230\uff0c\u5ef6\u8fdf >1 \u5c0f\u65f6\uff09\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230upsert\u5c06\u65b0\u6570\u636e\u751f\u6210\u5230\u66f4\u65e7\u7684\u65f6\u95f4\u6bb5/\u6587\u4ef6\u5939\u4e2d\u3002\n\u5728\u65f6\u95f4\u8f74\u7684\u5e2e\u52a9\u4e0b\uff0c\u589e\u91cf\u67e5\u8be2\u53ef\u4ee5\u53ea\u63d0\u53d610:00\u4ee5\u540e\u6210\u529f\u63d0\u4ea4\u7684\u65b0\u6570\u636e\uff0c\u5e76\u975e\u5e38\u9ad8\u6548\u5730\u53ea\u6d88\u8d39\u66f4\u6539\u8fc7\u7684\u6587\u4ef6\uff0c\u4e14\u65e0\u9700\u626b\u63cf\u66f4\u5927\u7684\u6587\u4ef6\u8303\u56f4\uff0c\u4f8b\u598207:00\u540e\u7684\u6240\u6709\u65f6\u95f4\u6bb5\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u6587\u4ef6\u7ec4\u7ec7",children:"\u6587\u4ef6\u7ec4\u7ec7"}),"\n",(0,i.jsxs)(n.p,{children:["Hudi\u5c06DFS\u4e0a\u7684\u6570\u636e\u96c6\u7ec4\u7ec7\u5230",(0,i.jsx)(n.code,{children:"\u57fa\u672c\u8def\u5f84"}),"\u4e0b\u7684\u76ee\u5f55\u7ed3\u6784\u4e2d\u3002\u6570\u636e\u96c6\u5206\u4e3a\u591a\u4e2a\u5206\u533a\uff0c\u8fd9\u4e9b\u5206\u533a\u662f\u5305\u542b\u8be5\u5206\u533a\u7684\u6570\u636e\u6587\u4ef6\u7684\u6587\u4ef6\u5939\uff0c\u8fd9\u4e0eHive\u8868\u975e\u5e38\u76f8\u4f3c\u3002\n\u6bcf\u4e2a\u5206\u533a\u88ab\u76f8\u5bf9\u4e8e\u57fa\u672c\u8def\u5f84\u7684\u7279\u5b9a",(0,i.jsx)(n.code,{children:"\u5206\u533a\u8def\u5f84"}),"\u533a\u5206\u5f00\u6765\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u6bcf\u4e2a\u5206\u533a\u5185\uff0c\u6587\u4ef6\u88ab\u7ec4\u7ec7\u4e3a",(0,i.jsx)(n.code,{children:"\u6587\u4ef6\u7ec4"}),"\uff0c\u7531",(0,i.jsx)(n.code,{children:"\u6587\u4ef6id"}),"\u552f\u4e00\u6807\u8bc6\u3002\n\u6bcf\u4e2a\u6587\u4ef6\u7ec4\u5305\u542b\u591a\u4e2a",(0,i.jsx)(n.code,{children:"\u6587\u4ef6\u5207\u7247"}),"\uff0c\u5176\u4e2d\u6bcf\u4e2a\u5207\u7247\u5305\u542b\u5728\u67d0\u4e2a\u63d0\u4ea4/\u538b\u7f29\u5373\u65f6\u65f6\u95f4\u751f\u6210\u7684\u57fa\u672c\u5217\u6587\u4ef6\uff08",(0,i.jsx)(n.code,{children:"*.parquet"}),"\uff09\u4ee5\u53ca\u4e00\u7ec4\u65e5\u5fd7\u6587\u4ef6\uff08",(0,i.jsx)(n.code,{children:"*.log*"}),"\uff09\uff0c\u8be5\u6587\u4ef6\u5305\u542b\u81ea\u751f\u6210\u57fa\u672c\u6587\u4ef6\u4ee5\u6765\u5bf9\u57fa\u672c\u6587\u4ef6\u7684\u63d2\u5165/\u66f4\u65b0\u3002\nHudi\u91c7\u7528MVCC\u8bbe\u8ba1\uff0c\u5176\u4e2d\u538b\u7f29\u64cd\u4f5c\u5c06\u65e5\u5fd7\u548c\u57fa\u672c\u6587\u4ef6\u5408\u5e76\u4ee5\u4ea7\u751f\u65b0\u7684\u6587\u4ef6\u7247\uff0c\u800c\u6e05\u7406\u64cd\u4f5c\u5219\u5c06\u672a\u4f7f\u7528\u7684/\u8f83\u65e7\u7684\u6587\u4ef6\u7247\u5220\u9664\u4ee5\u56de\u6536DFS\u4e0a\u7684\u7a7a\u95f4\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"Hudi\u901a\u8fc7\u7d22\u5f15\u673a\u5236\u5c06\u7ed9\u5b9a\u7684hoodie\u952e\uff08\u8bb0\u5f55\u952e+\u5206\u533a\u8def\u5f84\uff09\u6620\u5c04\u5230\u6587\u4ef6\u7ec4\uff0c\u4ece\u800c\u63d0\u4f9b\u4e86\u9ad8\u6548\u7684Upsert\u3002\n\u4e00\u65e6\u5c06\u8bb0\u5f55\u7684\u7b2c\u4e00\u4e2a\u7248\u672c\u5199\u5165\u6587\u4ef6\uff0c\u8bb0\u5f55\u952e\u548c\u6587\u4ef6\u7ec4/\u6587\u4ef6id\u4e4b\u95f4\u7684\u6620\u5c04\u5c31\u6c38\u8fdc\u4e0d\u4f1a\u6539\u53d8\u3002 \u7b80\u800c\u8a00\u4e4b\uff0c\u6620\u5c04\u7684\u6587\u4ef6\u7ec4\u5305\u542b\u4e00\u7ec4\u8bb0\u5f55\u7684\u6240\u6709\u7248\u672c\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u5b58\u50a8\u7c7b\u578b\u548c\u89c6\u56fe",children:"\u5b58\u50a8\u7c7b\u578b\u548c\u89c6\u56fe"}),"\n",(0,i.jsxs)(n.p,{children:["Hudi\u5b58\u50a8\u7c7b\u578b\u5b9a\u4e49\u4e86\u5982\u4f55\u5728DFS\u4e0a\u5bf9\u6570\u636e\u8fdb\u884c\u7d22\u5f15\u548c\u5e03\u5c40\u4ee5\u53ca\u5982\u4f55\u5728\u8fd9\u79cd\u7ec4\u7ec7\u4e4b\u4e0a\u5b9e\u73b0\u4e0a\u8ff0\u539f\u8bed\u548c\u65f6\u95f4\u8f74\u6d3b\u52a8\uff08\u5373\u5982\u4f55\u5199\u5165\u6570\u636e\uff09\u3002\n\u53cd\u8fc7\u6765\uff0c",(0,i.jsx)(n.code,{children:"\u89c6\u56fe"}),"\u5b9a\u4e49\u4e86\u57fa\u7840\u6570\u636e\u5982\u4f55\u66b4\u9732\u7ed9\u67e5\u8be2\uff08\u5373\u5982\u4f55\u8bfb\u53d6\u6570\u636e\uff09\u3002"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u5b58\u50a8\u7c7b\u578b"}),(0,i.jsx)(n.th,{children:"\u652f\u6301\u7684\u89c6\u56fe"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u5199\u65f6\u590d\u5236"}),(0,i.jsx)(n.td,{children:"\u8fd1\u5b9e\u65f6 + \u589e\u91cf"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u8bfb\u65f6\u5408\u5e76"}),(0,i.jsx)(n.td,{children:"\u8fd1\u5b9e\u65f6 + \u589e\u91cf + \u8bfb\u4f18\u5316"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"\u5b58\u50a8\u7c7b\u578b",children:"\u5b58\u50a8\u7c7b\u578b"}),"\n",(0,i.jsx)(n.p,{children:"Hudi\u652f\u6301\u4ee5\u4e0b\u5b58\u50a8\u7c7b\u578b\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"#copy-on-write-storage",children:"\u5199\u65f6\u590d\u5236"})," : \u4ec5\u4f7f\u7528\u5217\u6587\u4ef6\u683c\u5f0f\uff08\u4f8b\u5982parquet\uff09\u5b58\u50a8\u6570\u636e\u3002\u901a\u8fc7\u5728\u5199\u5165\u8fc7\u7a0b\u4e2d\u6267\u884c\u540c\u6b65\u5408\u5e76\u4ee5\u66f4\u65b0\u7248\u672c\u5e76\u91cd\u5199\u6587\u4ef6\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"#merge-on-read-storage",children:"\u8bfb\u65f6\u5408\u5e76"})," : \u4f7f\u7528\u5217\u5f0f\uff08\u4f8b\u5982parquet\uff09+ \u57fa\u4e8e\u884c\uff08\u4f8b\u5982avro\uff09\u7684\u6587\u4ef6\u683c\u5f0f\u7ec4\u5408\u6765\u5b58\u50a8\u6570\u636e\u3002 \u66f4\u65b0\u8bb0\u5f55\u5230\u589e\u91cf\u6587\u4ef6\u4e2d\uff0c\u7136\u540e\u8fdb\u884c\u540c\u6b65\u6216\u5f02\u6b65\u538b\u7f29\u4ee5\u751f\u6210\u5217\u6587\u4ef6\u7684\u65b0\u7248\u672c\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u4e0b\u8868\u603b\u7ed3\u4e86\u8fd9\u4e24\u79cd\u5b58\u50a8\u7c7b\u578b\u4e4b\u95f4\u7684\u6743\u8861"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u6743\u8861"}),(0,i.jsx)(n.th,{children:"\u5199\u65f6\u590d\u5236"}),(0,i.jsx)(n.th,{children:"\u8bfb\u65f6\u5408\u5e76"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u6570\u636e\u5ef6\u8fdf"}),(0,i.jsx)(n.td,{children:"\u66f4\u9ad8"}),(0,i.jsx)(n.td,{children:"\u66f4\u4f4e"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u66f4\u65b0\u4ee3\u4ef7(I/O)"}),(0,i.jsx)(n.td,{children:"\u66f4\u9ad8\uff08\u91cd\u5199\u6574\u4e2aparquet\u6587\u4ef6\uff09"}),(0,i.jsx)(n.td,{children:"\u66f4\u4f4e\uff08\u8ffd\u52a0\u5230\u589e\u91cf\u65e5\u5fd7\uff09"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Parquet\u6587\u4ef6\u5927\u5c0f"}),(0,i.jsx)(n.td,{children:"\u66f4\u5c0f\uff08\u9ad8\u66f4\u65b0\u4ee3\u4ef7\uff08I/o\uff09\uff09"}),(0,i.jsx)(n.td,{children:"\u66f4\u5927\uff08\u4f4e\u66f4\u65b0\u4ee3\u4ef7\uff09"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u5199\u653e\u5927"}),(0,i.jsx)(n.td,{children:"\u66f4\u9ad8"}),(0,i.jsx)(n.td,{children:"\u66f4\u4f4e\uff08\u53d6\u51b3\u4e8e\u538b\u7f29\u7b56\u7565\uff09"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"\u89c6\u56fe",children:"\u89c6\u56fe"}),"\n",(0,i.jsx)(n.p,{children:"Hudi\u652f\u6301\u4ee5\u4e0b\u5b58\u50a8\u6570\u636e\u7684\u89c6\u56fe"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u8bfb\u4f18\u5316\u89c6\u56fe"})," : \u5728\u6b64\u89c6\u56fe\u4e0a\u7684\u67e5\u8be2\u5c06\u67e5\u770b\u7ed9\u5b9a\u63d0\u4ea4\u6216\u538b\u7f29\u64cd\u4f5c\u4e2d\u6570\u636e\u96c6\u7684\u6700\u65b0\u5feb\u7167\u3002\n\u8be5\u89c6\u56fe\u4ec5\u5c06\u6700\u65b0\u6587\u4ef6\u5207\u7247\u4e2d\u7684\u57fa\u672c/\u5217\u6587\u4ef6\u66b4\u9732\u7ed9\u67e5\u8be2\uff0c\u5e76\u4fdd\u8bc1\u4e0e\u975eHudi\u5217\u5f0f\u6570\u636e\u96c6\u76f8\u6bd4\uff0c\u5177\u6709\u76f8\u540c\u7684\u5217\u5f0f\u67e5\u8be2\u6027\u80fd\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u589e\u91cf\u89c6\u56fe"})," : \u5bf9\u8be5\u89c6\u56fe\u7684\u67e5\u8be2\u53ea\u80fd\u770b\u5230\u4ece\u67d0\u4e2a\u63d0\u4ea4/\u538b\u7f29\u540e\u5199\u5165\u6570\u636e\u96c6\u7684\u65b0\u6570\u636e\u3002\u8be5\u89c6\u56fe\u6709\u6548\u5730\u63d0\u4f9b\u4e86\u66f4\u6539\u6d41\uff0c\u6765\u652f\u6301\u589e\u91cf\u6570\u636e\u7ba1\u9053\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u5b9e\u65f6\u89c6\u56fe"})," : \u5728\u6b64\u89c6\u56fe\u4e0a\u7684\u67e5\u8be2\u5c06\u67e5\u770b\u67d0\u4e2a\u589e\u91cf\u63d0\u4ea4\u64cd\u4f5c\u4e2d\u6570\u636e\u96c6\u7684\u6700\u65b0\u5feb\u7167\u3002\u8be5\u89c6\u56fe\u901a\u8fc7\u52a8\u6001\u5408\u5e76\u6700\u65b0\u7684\u57fa\u672c\u6587\u4ef6(\u4f8b\u5982parquet)\u548c\u589e\u91cf\u6587\u4ef6(\u4f8b\u5982avro)\u6765\u63d0\u4f9b\u8fd1\u5b9e\u65f6\u6570\u636e\u96c6\uff08\u51e0\u5206\u949f\u7684\u5ef6\u8fdf\uff09\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u4e0b\u8868\u603b\u7ed3\u4e86\u4e0d\u540c\u89c6\u56fe\u4e4b\u95f4\u7684\u6743\u8861\u3002"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u6743\u8861"}),(0,i.jsx)(n.th,{children:"\u8bfb\u4f18\u5316"}),(0,i.jsx)(n.th,{children:"\u5b9e\u65f6"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u6570\u636e\u5ef6\u8fdf"}),(0,i.jsx)(n.td,{children:"\u66f4\u9ad8"}),(0,i.jsx)(n.td,{children:"\u66f4\u4f4e"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u67e5\u8be2\u5ef6\u8fdf"}),(0,i.jsx)(n.td,{children:"\u66f4\u4f4e\uff08\u539f\u59cb\u5217\u5f0f\u6027\u80fd\uff09"}),(0,i.jsx)(n.td,{children:"\u66f4\u9ad8\uff08\u5408\u5e76\u5217\u5f0f + \u57fa\u4e8e\u884c\u7684\u589e\u91cf\uff09"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"copy-on-write-storage",children:"\u5199\u65f6\u590d\u5236\u5b58\u50a8"}),"\n",(0,i.jsx)(n.p,{children:"\u5199\u65f6\u590d\u5236\u5b58\u50a8\u4e2d\u7684\u6587\u4ef6\u7247\u4ec5\u5305\u542b\u57fa\u672c/\u5217\u6587\u4ef6\uff0c\u5e76\u4e14\u6bcf\u6b21\u63d0\u4ea4\u90fd\u4f1a\u751f\u6210\u65b0\u7248\u672c\u7684\u57fa\u672c\u6587\u4ef6\u3002\n\u6362\u53e5\u8bdd\u8bf4\uff0c\u6211\u4eec\u538b\u7f29\u6bcf\u4e2a\u63d0\u4ea4\uff0c\u4ece\u800c\u6240\u6709\u7684\u6570\u636e\u90fd\u662f\u4ee5\u5217\u6570\u636e\u7684\u5f62\u5f0f\u50a8\u5b58\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5199\u5165\u6570\u636e\u975e\u5e38\u6602\u8d35\uff08\u6211\u4eec\u9700\u8981\u91cd\u5199\u6574\u4e2a\u5217\u6570\u636e\u6587\u4ef6\uff0c\u5373\u4f7f\u53ea\u6709\u4e00\u4e2a\u5b57\u8282\u7684\u65b0\u6570\u636e\u88ab\u63d0\u4ea4\uff09\uff0c\u800c\u8bfb\u53d6\u6570\u636e\u7684\u6210\u672c\u5219\u6ca1\u6709\u589e\u52a0\u3002\n\u8fd9\u79cd\u89c6\u56fe\u6709\u5229\u4e8e\u8bfb\u53d6\u7e41\u91cd\u7684\u5206\u6790\u5de5\u4f5c\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5\u4e0b\u5185\u5bb9\u8bf4\u660e\u4e86\u5c06\u6570\u636e\u5199\u5165\u5199\u65f6\u590d\u5236\u5b58\u50a8\u5e76\u5728\u5176\u4e0a\u8fd0\u884c\u4e24\u4e2a\u67e5\u8be2\u65f6\uff0c\u5b83\u662f\u5982\u4f55\u5de5\u4f5c\u7684\u3002"}),"\n",(0,i.jsx)("figure",{children:(0,i.jsx)("img",{className:"docimage",src:"/assets/images/hudi_cow.png",alt:"hudi_cow.png"})}),"\n",(0,i.jsxs)(n.p,{children:["\u968f\u7740\u6570\u636e\u7684\u5199\u5165\uff0c\u5bf9\u73b0\u6709\u6587\u4ef6\u7ec4\u7684\u66f4\u65b0\u5c06\u4e3a\u8be5\u6587\u4ef6\u7ec4\u751f\u6210\u4e00\u4e2a\u5e26\u6709\u63d0\u4ea4\u5373\u65f6\u65f6\u95f4\u6807\u8bb0\u7684\u65b0\u5207\u7247\uff0c\u800c\u63d2\u5165\u5206\u914d\u4e00\u4e2a\u65b0\u6587\u4ef6\u7ec4\u5e76\u5199\u5165\u8be5\u6587\u4ef6\u7ec4\u7684\u7b2c\u4e00\u4e2a\u5207\u7247\u3002\n\u8fd9\u4e9b\u6587\u4ef6\u5207\u7247\u53ca\u5176\u63d0\u4ea4\u5373\u65f6\u65f6\u95f4\u5728\u4e0a\u9762\u7528\u989c\u8272\u7f16\u7801\u3002\n\u9488\u5bf9\u8fd9\u6837\u7684\u6570\u636e\u96c6\u8fd0\u884cSQL\u67e5\u8be2\uff08\u4f8b\u5982\uff1a",(0,i.jsx)(n.code,{children:"select count(*)"}),"\u7edf\u8ba1\u8be5\u5206\u533a\u4e2d\u7684\u8bb0\u5f55\u6570\u76ee\uff09\uff0c\u9996\u5148\u68c0\u67e5\u65f6\u95f4\u8f74\u4e0a\u7684\u6700\u65b0\u63d0\u4ea4\u5e76\u8fc7\u6ee4\u6bcf\u4e2a\u6587\u4ef6\u7ec4\u4e2d\u9664\u6700\u65b0\u6587\u4ef6\u7247\u4ee5\u5916\u7684\u6240\u6709\u6587\u4ef6\u7247\u3002\n\u5982\u60a8\u6240\u89c1\uff0c\u65e7\u67e5\u8be2\u4e0d\u4f1a\u770b\u5230\u4ee5\u7c89\u7ea2\u8272\u6807\u8bb0\u7684\u5f53\u524d\u8fdb\u884c\u4e2d\u7684\u63d0\u4ea4\u7684\u6587\u4ef6\uff0c\u4f46\u662f\u5728\u8be5\u63d0\u4ea4\u540e\u7684\u65b0\u67e5\u8be2\u4f1a\u83b7\u53d6\u65b0\u6570\u636e\u3002\u56e0\u6b64\uff0c\u67e5\u8be2\u4e0d\u53d7\u4efb\u4f55\u5199\u5165\u5931\u8d25/\u90e8\u5206\u5199\u5165\u7684\u5f71\u54cd\uff0c\u4ec5\u8fd0\u884c\u5728\u5df2\u63d0\u4ea4\u6570\u636e\u4e0a\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u5199\u65f6\u590d\u5236\u5b58\u50a8\u7684\u76ee\u7684\u662f\u4ece\u6839\u672c\u4e0a\u6539\u5584\u5f53\u524d\u7ba1\u7406\u6570\u636e\u96c6\u7684\u65b9\u5f0f\uff0c\u901a\u8fc7\u4ee5\u4e0b\u65b9\u6cd5\u6765\u5b9e\u73b0"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4f18\u5148\u652f\u6301\u5728\u6587\u4ef6\u7ea7\u539f\u5b50\u66f4\u65b0\u6570\u636e\uff0c\u800c\u65e0\u9700\u91cd\u5199\u6574\u4e2a\u8868/\u5206\u533a"}),"\n",(0,i.jsx)(n.li,{children:"\u80fd\u591f\u53ea\u8bfb\u53d6\u66f4\u65b0\u7684\u90e8\u5206\uff0c\u800c\u4e0d\u662f\u8fdb\u884c\u4f4e\u6548\u7684\u626b\u63cf\u6216\u641c\u7d22"}),"\n",(0,i.jsx)(n.li,{children:"\u4e25\u683c\u63a7\u5236\u6587\u4ef6\u5927\u5c0f\u6765\u4fdd\u6301\u51fa\u8272\u7684\u67e5\u8be2\u6027\u80fd\uff08\u5c0f\u7684\u6587\u4ef6\u4f1a\u4e25\u91cd\u635f\u5bb3\u67e5\u8be2\u6027\u80fd\uff09\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"merge-on-read-storage",children:"\u8bfb\u65f6\u5408\u5e76\u5b58\u50a8"}),"\n",(0,i.jsx)(n.p,{children:"\u8bfb\u65f6\u5408\u5e76\u5b58\u50a8\u662f\u5199\u65f6\u590d\u5236\u7684\u5347\u7ea7\u7248\uff0c\u4ece\u67d0\u79cd\u610f\u4e49\u4e0a\u8bf4\uff0c\u5b83\u4ecd\u7136\u53ef\u4ee5\u901a\u8fc7\u8bfb\u4f18\u5316\u8868\u63d0\u4f9b\u6570\u636e\u96c6\u7684\u8bfb\u53d6\u4f18\u5316\u89c6\u56fe\uff08\u5199\u65f6\u590d\u5236\u7684\u529f\u80fd\uff09\u3002\n\u6b64\u5916\uff0c\u5b83\u5c06\u6bcf\u4e2a\u6587\u4ef6\u7ec4\u7684\u66f4\u65b0\u63d2\u5165\u5b58\u50a8\u5230\u57fa\u4e8e\u884c\u7684\u589e\u91cf\u65e5\u5fd7\u4e2d\uff0c\u901a\u8fc7\u6587\u4ef6id\uff0c\u5c06\u589e\u91cf\u65e5\u5fd7\u548c\u6700\u65b0\u7248\u672c\u7684\u57fa\u672c\u6587\u4ef6\u8fdb\u884c\u5408\u5e76\uff0c\u4ece\u800c\u63d0\u4f9b\u8fd1\u5b9e\u65f6\u7684\u6570\u636e\u67e5\u8be2\u3002\u56e0\u6b64\uff0c\u6b64\u5b58\u50a8\u7c7b\u578b\u667a\u80fd\u5730\u5e73\u8861\u4e86\u8bfb\u548c\u5199\u7684\u6210\u672c\uff0c\u4ee5\u63d0\u4f9b\u8fd1\u4e4e\u5b9e\u65f6\u7684\u67e5\u8be2\u3002\n\u8fd9\u91cc\u6700\u91cd\u8981\u7684\u4e00\u70b9\u662f\u538b\u7f29\u5668\uff0c\u5b83\u73b0\u5728\u53ef\u4ee5\u4ed4\u7ec6\u6311\u9009\u9700\u8981\u538b\u7f29\u5230\u5176\u5217\u5f0f\u57fa\u7840\u6587\u4ef6\u4e2d\u7684\u589e\u91cf\u65e5\u5fd7\uff08\u6839\u636e\u589e\u91cf\u65e5\u5fd7\u7684\u6587\u4ef6\u5927\u5c0f\uff09\uff0c\u4ee5\u4fdd\u6301\u67e5\u8be2\u6027\u80fd\uff08\u8f83\u5927\u7684\u589e\u91cf\u65e5\u5fd7\u5c06\u4f1a\u63d0\u5347\u8fd1\u5b9e\u65f6\u7684\u67e5\u8be2\u65f6\u95f4\uff0c\u5e76\u540c\u65f6\u9700\u8981\u66f4\u957f\u7684\u5408\u5e76\u65f6\u95f4\uff09\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5\u4e0b\u5185\u5bb9\u8bf4\u660e\u4e86\u5b58\u50a8\u7684\u5de5\u4f5c\u65b9\u5f0f\uff0c\u5e76\u663e\u793a\u4e86\u5bf9\u8fd1\u5b9e\u65f6\u8868\u548c\u8bfb\u4f18\u5316\u8868\u7684\u67e5\u8be2\u3002"}),"\n",(0,i.jsx)("figure",{children:(0,i.jsx)("img",{className:"docimage",src:"/assets/images/hudi_mor.png",alt:"hudi_mor.png"})}),"\n",(0,i.jsx)(n.p,{children:"\u6b64\u793a\u4f8b\u4e2d\u53d1\u751f\u4e86\u5f88\u591a\u6709\u8da3\u7684\u4e8b\u60c5\uff0c\u8fd9\u4e9b\u5e26\u51fa\u4e86\u8be5\u65b9\u6cd5\u7684\u5fae\u5999\u4e4b\u5904\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u73b0\u5728\uff0c\u6211\u4eec\u6bcf1\u5206\u949f\u5de6\u53f3\u5c31\u6709\u4e00\u6b21\u63d0\u4ea4\uff0c\u8fd9\u662f\u5176\u4ed6\u5b58\u50a8\u7c7b\u578b\u65e0\u6cd5\u505a\u5230\u7684\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u73b0\u5728\uff0c\u5728\u6bcf\u4e2a\u6587\u4ef6id\u7ec4\u4e2d\uff0c\u90fd\u6709\u4e00\u4e2a\u589e\u91cf\u65e5\u5fd7\uff0c\u5176\u4e2d\u5305\u542b\u5bf9\u57fa\u7840\u5217\u6587\u4ef6\u4e2d\u8bb0\u5f55\u7684\u66f4\u65b0\u3002\n\u5728\u793a\u4f8b\u4e2d\uff0c\u589e\u91cf\u65e5\u5fd7\u5305\u542b10:05\u81f310:10\u7684\u6240\u6709\u6570\u636e\u3002\u4e0e\u4ee5\u524d\u4e00\u6837\uff0c\u57fa\u672c\u5217\u5f0f\u6587\u4ef6\u4ecd\u4f7f\u7528\u63d0\u4ea4\u8fdb\u884c\u7248\u672c\u63a7\u5236\u3002\n\u56e0\u6b64\uff0c\u5982\u679c\u53ea\u770b\u4e00\u773c\u57fa\u672c\u6587\u4ef6\uff0c\u90a3\u4e48\u5b58\u50a8\u5e03\u5c40\u770b\u8d77\u6765\u5c31\u50cf\u662f\u5199\u65f6\u590d\u5236\u8868\u7684\u526f\u672c\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5b9a\u671f\u538b\u7f29\u8fc7\u7a0b\u4f1a\u4ece\u589e\u91cf\u65e5\u5fd7\u4e2d\u5408\u5e76\u8fd9\u4e9b\u66f4\u6539\uff0c\u5e76\u751f\u6210\u57fa\u7840\u6587\u4ef6\u7684\u65b0\u7248\u672c\uff0c\u5c31\u50cf\u793a\u4f8b\u4e2d10:05\u53d1\u751f\u7684\u60c5\u51b5\u4e00\u6837\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u6709\u4e24\u79cd\u67e5\u8be2\u540c\u4e00\u5b58\u50a8\u7684\u65b9\u5f0f\uff1a\u8bfb\u4f18\u5316\uff08RO\uff09\u8868\u548c\u8fd1\u5b9e\u65f6\uff08RT\uff09\u8868\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u6211\u4eec\u9009\u62e9\u67e5\u8be2\u6027\u80fd\u8fd8\u662f\u6570\u636e\u65b0\u9c9c\u5ea6\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5bf9\u4e8eRO\u8868\u6765\u8bf4\uff0c\u63d0\u4ea4\u6570\u636e\u5728\u4f55\u65f6\u53ef\u7528\u4e8e\u67e5\u8be2\u5c06\u6709\u4e9b\u8bb8\u4e0d\u540c\u3002 \u8bf7\u6ce8\u610f\uff0c\u4ee510:10\u8fd0\u884c\u7684\uff08\u5728RO\u8868\u4e0a\u7684\uff09\u6b64\u7c7b\u67e5\u8be2\u5c06\u4e0d\u4f1a\u770b\u523010:05\u4e4b\u540e\u7684\u6570\u636e\uff0c\u800c\u5728RT\u8868\u4e0a\u7684\u67e5\u8be2\u603b\u4f1a\u770b\u5230\u6700\u65b0\u7684\u6570\u636e\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u4f55\u65f6\u89e6\u53d1\u538b\u7f29\u4ee5\u53ca\u538b\u7f29\u4ec0\u4e48\u662f\u89e3\u51b3\u8fd9\u4e9b\u96be\u9898\u7684\u5173\u952e\u3002\n\u901a\u8fc7\u5b9e\u65bd\u538b\u7f29\u7b56\u7565\uff0c\u5728\u8be5\u7b56\u7565\u4e2d\uff0c\u4e0e\u8f83\u65e7\u7684\u5206\u533a\u76f8\u6bd4\uff0c\u6211\u4eec\u4f1a\u79ef\u6781\u5730\u538b\u7f29\u6700\u65b0\u7684\u5206\u533a\uff0c\u4ece\u800c\u786e\u4fddRO\u8868\u80fd\u591f\u4ee5\u4e00\u81f4\u7684\u65b9\u5f0f\u770b\u5230\u51e0\u5206\u949f\u5185\u53d1\u5e03\u7684\u6570\u636e\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u8bfb\u65f6\u5408\u5e76\u5b58\u50a8\u4e0a\u7684\u76ee\u7684\u662f\u76f4\u63a5\u5728DFS\u4e0a\u542f\u7528\u8fd1\u5b9e\u65f6\u5904\u7406\uff0c\u800c\u4e0d\u662f\u5c06\u6570\u636e\u590d\u5236\u5230\u4e13\u7528\u7cfb\u7edf\uff0c\u540e\u8005\u53ef\u80fd\u65e0\u6cd5\u5904\u7406\u5927\u6570\u636e\u91cf\u3002\n\u8be5\u5b58\u50a8\u8fd8\u6709\u4e00\u4e9b\u5176\u4ed6\u65b9\u9762\u7684\u597d\u5904\uff0c\u4f8b\u5982\u901a\u8fc7\u907f\u514d\u6570\u636e\u7684\u540c\u6b65\u5408\u5e76\u6765\u51cf\u5c11\u5199\u653e\u5927\uff0c\u5373\u6279\u91cf\u6570\u636e\u4e2d\u6bcf1\u5b57\u8282\u6570\u636e\u9700\u8981\u7684\u5199\u5165\u6570\u636e\u91cf\u3002"})]})}function j(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>l});var i=s(96540);const d={},r=i.createContext(d);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[24301],{94552:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var s=i(74848),r=i(28453);const t={version:"0.5.2",title:"\u6027\u80fd",keywords:["hudi","index","storage","compaction","cleaning","implementation"],toc:!1,last_modified_at:new Date("2019-12-30T19:59:57.000Z"),language:"cn"},c=void 0,d={id:"performance",title:"\u6027\u80fd",description:"\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u4e00\u4e9b\u6709\u5173Hudi\u63d2\u5165\u66f4\u65b0\u3001\u589e\u91cf\u63d0\u53d6\u7684\u5b9e\u9645\u6027\u80fd\u6570\u636e\uff0c\u5e76\u5c06\u5176\u4e0e\u5b9e\u73b0\u8fd9\u4e9b\u4efb\u52a1\u7684\u5176\u5b83\u4f20\u7edf\u5de5\u5177\u8fdb\u884c\u6bd4\u8f83\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/version-0.5.2/performance.md",sourceDirName:".",slug:"/performance",permalink:"/cn/docs/0.5.2/performance",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.5.2/performance.md",tags:[],version:"0.5.2",frontMatter:{version:"0.5.2",title:"\u6027\u80fd",keywords:["hudi","index","storage","compaction","cleaning","implementation"],toc:!1,last_modified_at:"2019-12-30T19:59:57.000Z",language:"cn"},sidebar:"docs",previous:{title:"\u914d\u7f6e",permalink:"/cn/docs/0.5.2/configurations"},next:{title:"\u7ba1\u7406 Hudi Pipelines",permalink:"/cn/docs/0.5.2/deployment"}},o={},a=[{value:"\u63d2\u5165\u66f4\u65b0",id:"\u63d2\u5165\u66f4\u65b0",level:2},{value:"\u7d22\u5f15",id:"\u7d22\u5f15",level:2},{value:"\u8bfb\u4f18\u5316\u67e5\u8be2",id:"\u8bfb\u4f18\u5316\u67e5\u8be2",level:2}];function u(e){const n={a:"a",h2:"h2",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u4e00\u4e9b\u6709\u5173Hudi\u63d2\u5165\u66f4\u65b0\u3001\u589e\u91cf\u63d0\u53d6\u7684\u5b9e\u9645\u6027\u80fd\u6570\u636e\uff0c\u5e76\u5c06\u5176\u4e0e\u5b9e\u73b0\u8fd9\u4e9b\u4efb\u52a1\u7684\u5176\u5b83\u4f20\u7edf\u5de5\u5177\u8fdb\u884c\u6bd4\u8f83\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u63d2\u5165\u66f4\u65b0",children:"\u63d2\u5165\u66f4\u65b0"}),"\n",(0,s.jsx)(n.p,{children:"\u4e0b\u9762\u663e\u793a\u4e86\u4eceNoSQL\u6570\u636e\u5e93\u6444\u53d6\u83b7\u5f97\u7684\u901f\u5ea6\u63d0\u5347\uff0c\u8fd9\u4e9b\u901f\u5ea6\u63d0\u5347\u6570\u636e\u662f\u901a\u8fc7\u5728\u5199\u5165\u65f6\u590d\u5236\u5b58\u50a8\u4e0a\u7684Hudi\u6570\u636e\u96c6\u4e0a\u63d2\u5165\u66f4\u65b0\u800c\u83b7\u5f97\u7684\uff0c\n\u6570\u636e\u96c6\u5305\u62ec5\u4e2a\u4ece\u5c0f\u5230\u5927\u7684\u8868\uff08\u76f8\u5bf9\u4e8e\u6279\u91cf\u52a0\u8f7d\u8868\uff09\u3002"}),"\n",(0,s.jsx)("figure",{children:(0,s.jsx)("img",{className:"docimage",src:"/assets/images/hudi_upsert_perf1.png",alt:"hudi_upsert_perf1.png"})}),"\n",(0,s.jsx)(n.p,{children:"\u7531\u4e8eHudi\u53ef\u4ee5\u901a\u8fc7\u589e\u91cf\u6784\u5efa\u6570\u636e\u96c6\uff0c\u5b83\u4e5f\u4e3a\u66f4\u9891\u7e41\u5730\u8c03\u5ea6\u6444\u53d6\u63d0\u4f9b\u4e86\u53ef\u80fd\u6027\uff0c\u4ece\u800c\u51cf\u5c11\u4e86\u5ef6\u8fdf\uff0c\u5e76\u663e\u8457\u8282\u7701\u4e86\u603b\u4f53\u8ba1\u7b97\u6210\u672c\u3002"}),"\n",(0,s.jsx)("figure",{children:(0,s.jsx)("img",{className:"docimage",src:"/assets/images/hudi_upsert_perf2.png",alt:"hudi_upsert_perf2.png"})}),"\n",(0,s.jsxs)(n.p,{children:["Hudi\u63d2\u5165\u66f4\u65b0\u5728t1\u8868\u7684\u4e00\u6b21\u63d0\u4ea4\u4e2d\u5c31\u8fdb\u884c\u4e86\u9ad8\u8fbe4TB\u7684\u538b\u529b\u6d4b\u8bd5\u3002\n\u6709\u5173\u4e00\u4e9b\u8c03\u4f18\u6280\u5de7\uff0c\u8bf7\u53c2\u89c1",(0,s.jsx)(n.a,{href:"https://cwiki.apache.org/confluence/display/HUDI/Tuning+Guide",children:"\u8fd9\u91cc"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u7d22\u5f15",children:"\u7d22\u5f15"}),"\n",(0,s.jsx)(n.p,{children:"\u4e3a\u4e86\u6709\u6548\u5730\u63d2\u5165\u66f4\u65b0\u6570\u636e\uff0cHudi\u9700\u8981\u5c06\u8981\u5199\u5165\u7684\u6279\u91cf\u6570\u636e\u4e2d\u7684\u8bb0\u5f55\u5206\u7c7b\u4e3a\u63d2\u5165\u548c\u66f4\u65b0\uff08\u5e76\u6807\u8bb0\u5b83\u6240\u5c5e\u7684\u6587\u4ef6\u7ec4\uff09\u3002\n\u4e3a\u4e86\u52a0\u5feb\u6b64\u64cd\u4f5c\u7684\u901f\u5ea6\uff0cHudi\u91c7\u7528\u4e86\u53ef\u63d2\u62d4\u7d22\u5f15\u673a\u5236\uff0c\u8be5\u673a\u5236\u5b58\u50a8\u4e86recordKey\u548c\u5b83\u6240\u5c5e\u7684\u6587\u4ef6\u7ec4ID\u4e4b\u95f4\u7684\u6620\u5c04\u3002\n\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cHudi\u4f7f\u7528\u5185\u7f6e\u7d22\u5f15\uff0c\u8be5\u7d22\u5f15\u4f7f\u7528\u6587\u4ef6\u8303\u56f4\u548c\u5e03\u9686\u8fc7\u6ee4\u5668\u6765\u5b8c\u6210\u6b64\u4efb\u52a1\uff0c\u76f8\u6bd4\u4e8eSpark Join\uff0c\u5176\u901f\u5ea6\u6700\u9ad8\u53ef\u63d0\u9ad810\u500d\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u5f53\u60a8\u5c06recordKey\u5efa\u6a21\u4e3a\u5355\u8c03\u9012\u589e\u65f6\uff08\u4f8b\u5982\u65f6\u95f4\u6233\u524d\u7f00\uff09\uff0cHudi\u63d0\u4f9b\u4e86\u6700\u4f73\u7684\u7d22\u5f15\u6027\u80fd\uff0c\u4ece\u800c\u8fdb\u884c\u8303\u56f4\u8fc7\u6ee4\u6765\u907f\u514d\u4e0e\u8bb8\u591a\u6587\u4ef6\u8fdb\u884c\u6bd4\u8f83\u3002\n\u5373\u4f7f\u5bf9\u4e8e\u57fa\u4e8eUUID\u7684\u952e\uff0c\u4e5f\u6709",(0,s.jsx)(n.a,{href:"https://www.percona.com/blog/2014/12/19/store-uuid-optimized-way/",children:"\u5df2\u77e5\u6280\u672f"}),"\u6765\u8fbe\u5230\u540c\u6837\u76ee\u7684\u3002\n\u4f8b\u5982\uff0c\u5728\u5177\u670980B\u952e\u30013\u4e2a\u5206\u533a\u300111416\u4e2a\u6587\u4ef6\u300110TB\u6570\u636e\u7684\u4e8b\u4ef6\u8868\u4e0a\u4f7f\u7528100M\u4e2a\u65f6\u95f4\u6233\u524d\u7f00\u7684\u952e\uff085\uff05\u7684\u66f4\u65b0\uff0c95\uff05\u7684\u63d2\u5165\uff09\u65f6\uff0c\n\u76f8\u6bd4\u4e8e\u539f\u59cbSpark Join\uff0cHudi\u7d22\u5f15\u901f\u5ea6\u7684\u63d0\u5347",(0,s.jsx)(n.strong,{children:"\u7ea6\u4e3a7\u500d\uff08440\u79d2\u76f8\u6bd4\u4e8e2880\u79d2\uff09"}),"\u3002\n\u5373\u4f7f\u5bf9\u4e8e\u5177\u6709\u6311\u6218\u6027\u7684\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u5982\u4f7f\u7528300\u4e2a\u6838\u5bf93.25B UUID\u952e\u300130\u4e2a\u5206\u533a\u30016180\u4e2a\u6587\u4ef6\u7684\u201c100\uff05\u66f4\u65b0\u201d\u7684\u6570\u636e\u5e93\u6444\u53d6\u5de5\u4f5c\u8d1f\u8f7d\uff0cHudi\u7d22\u5f15\u4e5f\u53ef\u4ee5\u63d0\u4f9b",(0,s.jsx)(n.strong,{children:"80-100\uff05\u7684\u52a0\u901f"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8bfb\u4f18\u5316\u67e5\u8be2",children:"\u8bfb\u4f18\u5316\u67e5\u8be2"}),"\n",(0,s.jsx)(n.p,{children:"\u8bfb\u4f18\u5316\u89c6\u56fe\u7684\u4e3b\u8981\u8bbe\u8ba1\u76ee\u6807\u662f\u5728\u4e0d\u5f71\u54cd\u67e5\u8be2\u7684\u60c5\u51b5\u4e0b\u5b9e\u73b0\u4e0a\u4e00\u8282\u4e2d\u63d0\u5230\u7684\u5ef6\u8fdf\u51cf\u5c11\u548c\u6548\u7387\u63d0\u9ad8\u3002\n\u4e0b\u56fe\u6bd4\u8f83\u4e86\u5bf9Hudi\u548c\u975eHudi\u6570\u636e\u96c6\u7684Hive\u3001Presto\u3001Spark\u67e5\u8be2\uff0c\u5e76\u5bf9\u6b64\u8fdb\u884c\u8bf4\u660e\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Hive"})}),"\n",(0,s.jsx)("figure",{children:(0,s.jsx)("img",{className:"docimage",src:"/assets/images/hudi_query_perf_hive.png",alt:"hudi_query_perf_hive.png"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Spark"})}),"\n",(0,s.jsx)("figure",{children:(0,s.jsx)("img",{className:"docimage",src:"/assets/images/hudi_query_perf_spark.png",alt:"hudi_query_perf_spark.png"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Presto"})}),"\n",(0,s.jsx)("figure",{children:(0,s.jsx)("img",{className:"docimage",src:"/assets/images/hudi_query_perf_presto.png",alt:"hudi_query_perf_presto.png"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>d});var s=i(96540);const r={},t=s.createContext(r);function c(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[37643],{35124:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});a(96540);var s=a(34164),r=a(44586),l=a(45500),o=a(17559),i=a(29520),n=a(47713),c=a(41463),g=a(33892),m=a(5260),d=a(44096),h=a(74848);function u(e){const t=(0,d.kJ)(e);return(0,h.jsx)(m.A,{children:(0,h.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function p(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,r.A)(),{blogDescription:s,blogTitle:o,permalink:i}=t,n="/"===i?a:o;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l.be,{title:n,description:s}),(0,h.jsx)(c.A,{tag:"blog_posts_list"})]})}function x(e){const{metadata:t,items:a,sidebar:s}=e;return(0,h.jsxs)(i.A,{sidebar:s,children:[(0,h.jsx)(g.A,{items:a}),(0,h.jsx)(n.A,{metadata:t})]})}function b(e){return(0,h.jsxs)(l.e3,{className:(0,s.A)(o.G.wrapper.blogPages,o.G.page.blogListPage),children:[(0,h.jsx)(p,{...e}),(0,h.jsx)(u,{...e}),(0,h.jsx)(x,{...e})]})}},47713:(e,t,a)=>{a.d(t,{A:()=>o});a(96540);var s=a(21312),r=a(39022),l=a(74848);function o(e){const{metadata:t}=e,{previousPage:a,nextPage:o}=t;return(0,l.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,l.jsx)(r.A,{permalink:a,title:(0,l.jsx)(s.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),o&&(0,l.jsx)(r.A,{permalink:o,title:(0,l.jsx)(s.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},33892:(e,t,a)=>{a.d(t,{A:()=>o});a(96540);var s=a(44096),r=a(73804),l=a(74848);function o(e){let{items:t,component:a=r.A}=e;return(0,l.jsx)(l.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,l.jsx)(s.in,{content:t,children:(0,l.jsx)(a,{children:(0,l.jsx)(t,{})})},t.metadata.permalink)}))})}},68234:(e,t,a)=>{a.d(t,{A:()=>l});a(96540);var s=a(28774),r=a(74848);const l=e=>{let{authors:t=[],className:a,withLink:l=!0}=e;const o=e=>(0,r.jsx)("span",{className:a,itemProp:"name",children:e.name});return(0,r.jsx)(r.Fragment,{children:t.map(((e,a)=>(0,r.jsx)("div",{children:(0,r.jsx)("div",{children:e.name&&(0,r.jsxs)("div",{children:[0!==a?a!==t.length-1?",":"and":"",l?(0,r.jsx)(s.A,{href:e.url,itemProp:"url",children:o(e)}):o(e)]})})},a)))})}},29520:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var s=a(34164),r=a(83474),l=a(39274),o=a(74848);const i=function(e){const{sidebar:t,toc:a,children:i,...n}=e,c=t&&t.items.length>0,g="blog-list-page"===e.pageClassName,m="blog-tags-post-list-page"===e.pageClassName;return(0,o.jsx)(r.A,{...n,children:(0,o.jsx)("div",{className:"container margin-vert--lg",children:(0,o.jsxs)("div",{className:"row",children:[c&&(0,o.jsx)("aside",{className:"col col--3",children:(0,o.jsx)(l.A,{sidebar:t})}),(0,o.jsx)("main",{className:(0,s.A)("col",{"col--7":c,"col--9 col--offset-2":!c,row:g||m,"tags-post-list":m}),itemScope:!0,itemType:"http://schema.org/Blog",children:i}),a&&(0,o.jsx)("div",{className:"col col--2",children:a})]})})})}},73804:(e,t,a)=>{a.d(t,{A:()=>F});a(96540);var s=a(34164),r=a(44096),l=a(74848);function o(e){let{children:t,className:a}=e;return(0,l.jsx)("article",{className:a,children:t})}var i=a(28774);const n={title:"title_xvU1"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:o}=(0,r.e7)(),{permalink:c,title:g}=a,m=o?"h1":"h2";return(0,l.jsx)(m,{className:(0,s.A)(n.title,t),children:o?g:(0,l.jsx)(i.A,{to:c,children:g})})}var g=a(21312),m=a(53465),d=a(36266);a(56913);const h={authorCol:"authorCol_q4o9",imageOnlyAuthorRow:"imageOnlyAuthorRow_lXe7",imageOnlyAuthorCol:"imageOnlyAuthorCol_cxD5",authorWrapper:"authorWrapper_ApDF",avatar__name:"avatar__name_kgbo"};function u(e){let{className:t}=e;const{metadata:{authors:a},assets:o}=(0,r.e7)();if(0===a.length)return null;const i=a.every((e=>{let{name:t}=e;return!t})),n=1===a.length;return(0,l.jsx)("div",{className:(0,s.A)(i?h.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,l.jsx)("div",{className:(0,s.A)(h.authorWrapper,!i&&(n?"col col--12":"col col--6"),i?h.imageOnlyAuthorCol:h.authorCol),children:e.name},t)))})}const p={container:"container_iJTo",spacer:"spacer_N6vp",marker:"marker_H0Am"};function x(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,m.W)();return t=>{const a=Math.ceil(t);return e(a,(0,g.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,l.jsx)("span",{className:p.marker,children:a(t)})}function b(e){let{date:t,formattedDate:a}=e;return(0,l.jsx)("time",{dateTime:t,children:a})}function j(e){let{className:t}=e;const{metadata:a}=(0,r.e7)(),{date:o,readingTime:i}=a,n=(0,d.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,l.jsxs)("div",{className:(0,s.A)(p.container,"margin-vert--sm",t),children:[(0,l.jsx)(b,{date:o,formattedDate:(c=o,n.format(new Date(c)))}),(0,l.jsx)(u,{}),void 0!==i&&(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(x,{readingTime:i})})]});var c}var A=a(62053),P=a(17559);function v(){const{metadata:e,isBlogPostPage:t}=(0,r.e7)(),{tags:a,hasTruncateMarker:o}=e,i=a.length>0;return(0,l.jsxs)("header",{children:[(0,l.jsx)(c,{}),(0,l.jsx)(j,{}),i&&(0,l.jsx)("div",{className:(0,s.A)("row tagsListInline","margin-top--sm",P.G.blog.blogFooterEditMetaRow),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(A.A,{tags:a})})})]})}var f=a(70440),N=a(10890);function T(e){let{children:t,className:a}=e;const{isBlogPostPage:o}=(0,r.e7)();return(0,l.jsx)("div",{id:o?f.LU:void 0,className:(0,s.A)("markdown",a),children:(0,l.jsx)(N.A,{children:t})})}var _=a(4336);function w(){return(0,l.jsx)("b",{children:(0,l.jsx)(g.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function k(e){const{blogPostTitle:t,...a}=e;return(0,l.jsx)(i.A,{"aria-label":(0,g.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,l.jsx)(w,{})})}function y(){const{metadata:e,isBlogPostPage:t}=(0,r.e7)(),{tags:a,title:o,editUrl:i,hasTruncateMarker:n,lastUpdatedBy:c,lastUpdatedAt:g}=e,m=!t&&n,d=a.length>0;if(!(d||m||i))return null;if(t){const e=!!(i||g||c);return(0,l.jsx)("footer",{className:"docusaurus-mt-lg",children:e&&(0,l.jsx)(_.A,{className:(0,s.A)("margin-top--sm",P.G.blog.blogFooterEditMetaRow),editUrl:i,lastUpdatedAt:g,lastUpdatedBy:c})})}return(0,l.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[d&&(0,l.jsx)("div",{className:(0,s.A)("col",{"col--9":m}),children:(0,l.jsx)(A.A,{tags:a})}),m&&(0,l.jsx)("div",{className:(0,s.A)("col text--right",{"col--3":d}),children:(0,l.jsx)(k,{blogPostTitle:o,to:e.permalink})})]})}const L={blogPostTitle:"blogPostTitle_r_xR",videoImage:"videoImage_Uuwr",blogPostPageTitle:"blogPostPageTitle_zPHm",blogPostPageTile:"blogPostPageTile_wwF_",blogPostData:"blogPostData_a_pA",blogpostReadingTime:"blogpostReadingTime_Q1Fd",tagsWrapperPostPage:"tagsWrapperPostPage_t0ar",blogPostDetailsFull:"blogPostDetailsFull_qDGb","blog-list-page":"blog-list-page_zuuK",container:"container_ZfX1",row:"row_FpNs",authorsList:"authorsList_prRP",authorsListLong:"authorsListLong_kJoC",authorTimeTags:"authorTimeTags_ztgj",tag:"tag_WQyT",tagPostPage:"tagPostPage_OpeK",postHeader:"postHeader_xmqb",greyLink:"greyLink_UN13",blogPostText:"blogPostText_KC6u",blogInfo:"blogInfo_x7_1",blogPostAuthorsList:"blogPostAuthorsList_vkSz"};var C=a(68234),U=a(86025),D=a(56133),R=a(56347);function B(e){let{metadata:t={},assets:a,frontMatter:r}=e;const{withBaseUrl:o}=(0,U.hH)(),{date:n,permalink:c,tags:g,title:m,authors:d}=t,h=(0,R.zy)(),u=a.image??r.image??"/assets/images/hudi-logo-medium.png",p=e=>{e&&window.open(e,"_blank","noopener noreferrer")},x=()=>{const e=new Date(n).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return 0===d.length?(0,l.jsx)("div",{className:(0,s.A)(L.authorTimeTags,"row 'margin-vert--md'"),children:e}):(0,l.jsxs)("div",{className:(0,s.A)(L.authorTimeTags,"row 'margin-vert--md'"),children:[e," by",(0,l.jsx)(C.A,{authors:d,className:L.authorsList})]})};return(0,l.jsx)("article",{className:"blog-list-item",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting",children:(()=>{const e="h2";return(0,l.jsxs)("header",{className:L.postHeader,children:[(0,l.jsxs)("div",{children:[u&&(0,l.jsx)("div",{className:"col blogThumbnail",itemProp:"blogThumbnail",children:h.pathname.startsWith("/blog")?(0,l.jsx)(i.A,{itemProp:"url",to:c,children:(0,l.jsx)("img",{src:o(u,{absolute:!0}),className:"blog-image"})}):(0,l.jsx)("img",{onClick:()=>p(r?.navigate),src:o(u,{absolute:!0}),className:(0,s.A)(L.videoImage,"blog-image")})}),(0,l.jsx)(e,{className:L.blogPostTitle,itemProp:"headline",children:h.pathname.startsWith("/blog")?(0,l.jsx)(i.A,{itemProp:"url",to:c,children:(0,l.jsx)(e,{className:L.blogPostTitle,itemProp:"headline",children:m})}):(0,l.jsx)(e,{onClick:()=>p(r?.navigate),className:L.blogPostTitle,itemProp:"headline",children:m})}),(0,l.jsx)("div",{className:(0,s.A)(L.blogInfo,"margin-top--sm margin-bottom--sm"),children:x()})]}),!!g.length&&(0,l.jsx)("ul",{className:(0,s.A)(L.tags,L.authorTimeTags,"padding--none","margin-left--sm"),children:g.map((e=>{let{label:t,permalink:a}=e;return(0,l.jsx)("li",{className:(0,s.A)(L.tag),children:(0,l.jsx)(D.A,{className:(0,s.A)(L.greyLink),label:t,permalink:a})},a)}))})]})})()})}function F(e){let{children:t,className:a}=e;const i=function(){const{isBlogPostPage:e}=(0,r.e7)();return e?void 0:"margin-bottom--xl"}(),{isBlogPostPage:n,metadata:c,assets:g,frontMatter:m,...d}=(0,r.e7)();return n?(0,l.jsxs)(o,{className:(0,s.A)(i,a),children:[(0,l.jsx)(v,{}),(0,l.jsx)(T,{children:t}),(0,l.jsx)(y,{})]}):(0,l.jsx)(B,{metadata:c,assets:g,frontMatter:m})}}}]);
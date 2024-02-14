"use strict";(self.webpackChunkmy_doc_website=self.webpackChunkmy_doc_website||[]).push([[6752],{4556:(e,t,n)=>{n.d(t,{c:()=>p});n(1504);var a=n(5456),s=n(5864),i=n(9940),l=n(3376),c=n(867),o=n(4357),r=n(964),d=n(7624);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,r.c)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(c.c,{"aria-label":(0,o.G)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const v={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function x(e){let{children:t,href:n,isLast:a}=e;const s="breadcrumbs__link";return a?(0,d.jsx)("span",{className:s,itemProp:"name",children:t}):n?(0,d.jsx)(c.c,{className:s,href:n,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:s,children:t})}function b(e){let{children:t,active:n,index:s,addMicrodata:i}=e;return(0,d.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,a.c)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function p(){const e=(0,i.js)(),t=(0,l.Y5)();return e?(0,d.jsx)("nav",{className:(0,a.c)(s.W.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,o.G)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,n)=>{const a=n===e.length-1,s="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(b,{active:a,index:n,addMicrodata:!!s,children:(0,d.jsx)(x,{href:s,isLast:a,children:t.label})},n)}))]})}):null}},104:(e,t,n)=>{n.r(t),n.d(t,{default:()=>q});var a=n(1504),s=n(5756),i=n(1100),l=n(7624);const c=a.createContext(null);function o(e){let{children:t,content:n}=e;const s=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,l.jsx)(c.Provider,{value:s,children:t})}function r(){const e=(0,a.useContext)(c);if(null===e)throw new i.AH("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=r();return(0,l.jsx)(s.U7,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(5456),m=n(1432),h=n(4948);function v(){const{metadata:e}=r();return(0,l.jsx)(h.c,{previous:e.previous,next:e.next})}var x=n(2136),b=n(8092),p=n(5864),g=n(4357);function f(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return(0,l.jsx)(g.c,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:n})})},children:" on {date}"})}function j(e){let{lastUpdatedBy:t}=e;return(0,l.jsx)(g.c,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function L(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:a}=e;return(0,l.jsxs)("span",{className:p.W.common.lastUpdated,children:[(0,l.jsx)(g.c,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?(0,l.jsx)(f,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:a?(0,l.jsx)(j,{lastUpdatedBy:a}):""},children:"Last updated{atDate}{byUser}"}),!1]})}var N=n(7790),C=n(1096);const _={lastUpdated:"lastUpdated_vwxv"};function k(e){return(0,l.jsx)("div",{className:(0,u.c)(p.W.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(C.c,{...e})})})}function T(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a,formattedLastUpdatedAt:s}=e;return(0,l.jsxs)("div",{className:(0,u.c)(p.W.docs.docFooterEditMetaRow,"row"),children:[(0,l.jsx)("div",{className:"col",children:t&&(0,l.jsx)(N.c,{editUrl:t})}),(0,l.jsx)("div",{className:(0,u.c)("col",_.lastUpdated),children:(n||a)&&(0,l.jsx)(L,{lastUpdatedAt:n,formattedLastUpdatedAt:s,lastUpdatedBy:a})})]})}function U(){const{metadata:e}=r(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:a,lastUpdatedBy:s,tags:i}=e,c=i.length>0,o=!!(t||n||s);return c||o?(0,l.jsxs)("footer",{className:(0,u.c)(p.W.docs.docFooter,"docusaurus-mt-lg"),children:[c&&(0,l.jsx)(k,{tags:i}),o&&(0,l.jsx)(T,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,formattedLastUpdatedAt:a})]}):null}var y=n(8448),H=n(3088);const w={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function A(e){let{collapsed:t,...n}=e;return(0,l.jsx)("button",{type:"button",...n,className:(0,u.c)("clean-btn",w.tocCollapsibleButton,!t&&w.tocCollapsibleButtonExpanded,n.className),children:(0,l.jsx)(g.c,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const M={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function E(e){let{toc:t,className:n,minHeadingLevel:a,maxHeadingLevel:s}=e;const{collapsed:i,toggleCollapsed:c}=(0,y.a)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.c)(M.tocCollapsible,!i&&M.tocCollapsibleExpanded,n),children:[(0,l.jsx)(A,{collapsed:i,onClick:c}),(0,l.jsx)(y.U,{lazy:!0,className:M.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(H.c,{toc:t,minHeadingLevel:a,maxHeadingLevel:s})})]})}const B={tocMobile:"tocMobile_ITEo"};function I(){const{toc:e,frontMatter:t}=r();return(0,l.jsx)(E,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.c)(p.W.docs.docTocMobile,B.tocMobile)})}var O=n(5124);function S(){const{toc:e,frontMatter:t}=r();return(0,l.jsx)(O.c,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:p.W.docs.docTocDesktop})}var V=n(6448),W=n(9444);function P(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=r();return t.hide_title||void 0!==n?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.c)(p.W.docs.docMarkdown,"markdown"),children:[n&&(0,l.jsx)("header",{children:(0,l.jsx)(V.c,{as:"h1",children:n})}),(0,l.jsx)(W.c,{children:t})]})}var R=n(4556),D=n(1528);const F={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function z(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=r(),n=(0,m.U)(),a=e.hide_table_of_contents,s=!a&&t.length>0;return{hidden:a,mobile:s?(0,l.jsx)(I,{}):void 0,desktop:!s||"desktop"!==n&&"ssr"!==n?void 0:(0,l.jsx)(S,{})}}(),{metadata:{unlisted:a}}=r();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.c)("col",!n.hidden&&F.docItemCol),children:[a&&(0,l.jsx)(D.c,{}),(0,l.jsx)(x.c,{}),(0,l.jsxs)("div",{className:F.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(R.c,{}),(0,l.jsx)(b.c,{}),n.mobile,(0,l.jsx)(P,{children:t}),(0,l.jsx)(U,{})]}),(0,l.jsx)(v,{})]})]}),n.desktop&&(0,l.jsx)("div",{className:"col col--3",children:n.desktop})]})}function q(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,l.jsx)(o,{content:e.content,children:(0,l.jsxs)(s.cr,{className:t,children:[(0,l.jsx)(d,{}),(0,l.jsx)(z,{children:(0,l.jsx)(n,{})})]})})}},4948:(e,t,n)=>{n.d(t,{c:()=>l});n(1504);var a=n(4357),s=n(308),i=n(7624);function l(e){const{previous:t,next:n}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,a.G)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(s.c,{...t,subLabel:(0,i.jsx)(a.c,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,i.jsx)(s.c,{...n,subLabel:(0,i.jsx)(a.c,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},8092:(e,t,n)=>{n.d(t,{c:()=>o});n(1504);var a=n(5456),s=n(4357),i=n(5864),l=n(9920),c=n(7624);function o(e){let{className:t}=e;const n=(0,l.E)();return n.badge?(0,c.jsx)("span",{className:(0,a.c)(t,i.W.docs.docVersionBadge,"badge badge--secondary"),children:(0,c.jsx)(s.c,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},2136:(e,t,n)=>{n.d(t,{c:()=>b});n(1504);var a=n(5456),s=n(8264),i=n(867),l=n(4357),c=n(2840),o=n(5864),r=n(4592),d=n(9920),u=n(7624);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(l.c,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(l.c,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function v(e){let{versionLabel:t,to:n,onClick:a}=e;return(0,u.jsx)(l.c,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(i.c,{to:n,onClick:a,children:(0,u.jsx)(l.c,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function x(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:i}}=(0,s.c)(),{pluginId:l}=(0,c.UF)({failfast:!0}),{savePreferredVersionName:d}=(0,r.iy)(l),{latestDocSuggestion:m,latestVersionSuggestion:x}=(0,c.i8)(l),b=m??(p=x).docs.find((e=>e.id===p.mainDocId));var p;return(0,u.jsxs)("div",{className:(0,a.c)(t,o.W.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:i,versionMetadata:n})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(v,{versionLabel:x.label,to:b.path,onClick:()=>d(x.name)})})]})}function b(e){let{className:t}=e;const n=(0,d.E)();return n.banner?(0,u.jsx)(x,{className:t,versionMetadata:n}):null}},7790:(e,t,n)=>{n.d(t,{c:()=>d});n(1504);var a=n(4357),s=n(5864),i=n(867),l=n(5456);const c={iconEdit:"iconEdit_Z9Sw"};var o=n(7624);function r(e){let{className:t,...n}=e;return(0,o.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.c)(c.iconEdit,t),"aria-hidden":"true",...n,children:(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function d(e){let{editUrl:t}=e;return(0,o.jsxs)(i.c,{to:t,className:s.W.common.editThisPage,children:[(0,o.jsx)(r,{}),(0,o.jsx)(a.c,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},308:(e,t,n)=>{n.d(t,{c:()=>l});n(1504);var a=n(5456),s=n(867),i=n(7624);function l(e){const{permalink:t,title:n,subLabel:l,isNext:c}=e;return(0,i.jsxs)(s.c,{className:(0,a.c)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}},5124:(e,t,n)=>{n.d(t,{c:()=>r});n(1504);var a=n(5456),s=n(3088);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=n(7624);const c="table-of-contents__link toc-highlight",o="table-of-contents__link--active";function r(e){let{className:t,...n}=e;return(0,l.jsx)("div",{className:(0,a.c)(i.tableOfContents,"thin-scrollbar",t),children:(0,l.jsx)(s.c,{...n,linkClassName:c,linkActiveClassName:o})})}},3088:(e,t,n)=>{n.d(t,{c:()=>x});var a=n(1504),s=n(1824);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...s}=e;n>=0?t[n].children.push(s):a.push(s)})),a}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function o(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>c(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function r(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,s.y)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=r();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:s,minHeadingLevel:i,maxHeadingLevel:l}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let s=t;s<=n;s+=1)a.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),r=o(c,{anchorTopOffset:n.current}),d=e.find((e=>r&&r.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}var u=n(867),m=n(7624);function h(e){let{toc:t,className:n,linkClassName:a,isChild:s}=e;return t.length?(0,m.jsx)("ul",{className:s?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.c,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)))}):null}const v=a.memo(h);function x(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:r,maxHeadingLevel:u,...h}=e;const x=(0,s.y)(),b=r??x.tableOfContents.minHeadingLevel,p=u??x.tableOfContents.maxHeadingLevel,g=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return(0,a.useMemo)((()=>l({toc:i(t),minHeadingLevel:n,maxHeadingLevel:s})),[t,n,s])}({toc:t,minHeadingLevel:b,maxHeadingLevel:p});return d((0,a.useMemo)((()=>{if(c&&o)return{linkClassName:c,linkActiveClassName:o,minHeadingLevel:b,maxHeadingLevel:p}}),[c,o,b,p])),(0,m.jsx)(v,{toc:g,className:n,linkClassName:c,...h})}},3020:(e,t,n)=>{n.d(t,{c:()=>c});n(1504);var a=n(5456),s=n(867);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=n(7624);function c(e){let{permalink:t,label:n,count:c}=e;return(0,l.jsxs)(s.c,{href:t,className:(0,a.c)(i.tag,c?i.tagWithCount:i.tagRegular),children:[n,c&&(0,l.jsx)("span",{children:c})]})}},1096:(e,t,n)=>{n.d(t,{c:()=>o});n(1504);var a=n(5456),s=n(4357),i=n(3020);const l={tags:"tags_jXut",tag:"tag_QGVx"};var c=n(7624);function o(e){let{tags:t}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("b",{children:(0,c.jsx)(s.c,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,c.jsx)("ul",{className:(0,a.c)(l.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,c.jsx)("li",{className:l.tag,children:(0,c.jsx)(i.c,{label:t,permalink:n})},n)}))})]})}},1528:(e,t,n)=>{n.d(t,{c:()=>h});n(1504);var a=n(5456),s=n(4357),i=n(6952),l=n(7624);function c(){return(0,l.jsx)(s.c,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,l.jsx)(s.c,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function r(){return(0,l.jsx)(i.c,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(5864),u=n(304);function m(e){let{className:t}=e;return(0,l.jsx)(u.c,{type:"caution",title:(0,l.jsx)(c,{}),className:(0,a.c)(t,d.W.common.unlistedBanner),children:(0,l.jsx)(o,{})})}function h(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{}),(0,l.jsx)(m,{...e})]})}}}]);
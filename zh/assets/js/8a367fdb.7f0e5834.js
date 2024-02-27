"use strict";(self.webpackChunkmy_doc_website=self.webpackChunkmy_doc_website||[]).push([[3176],{6912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>o});var i=n(7624),s=n(2172);const c={sidebar_label:"Fluid\u6982\u5ff5\u4ecb\u7ecd",sidebar_position:3},a="Fluid\u6982\u5ff5\u4ecb\u7ecd",r={id:"core-concepts/concepts",title:"Fluid\u6982\u5ff5\u4ecb\u7ecd",description:"\u6570\u636e\u96c6 Dataset",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/core-concepts/concepts.md",sourceDirName:"core-concepts",slug:"/core-concepts/concepts",permalink:"/my-doc-website/zh/docs/next/core-concepts/concepts",draft:!1,unlisted:!1,editUrl:"https://github.com/TrafalgarZZZ/my-doc-website/tree/master/docs/core-concepts/concepts.md",tags:[],version:"current",lastUpdatedBy:"trafalgarzzz",lastUpdatedAt:1708002139,formattedLastUpdatedAt:"2024\u5e742\u670815\u65e5",sidebarPosition:3,frontMatter:{sidebar_label:"Fluid\u6982\u5ff5\u4ecb\u7ecd",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u7cfb\u7edf\u67b6\u6784",permalink:"/my-doc-website/zh/docs/next/core-concepts/architecture"},next:{title:"\u8fdc\u7a0bWeb\u6587\u4ef6\u8bbf\u95ee\u52a0\u901f",permalink:"/my-doc-website/zh/docs/next/user-manual/data-accelerate/accelerate_data_accessing"}},l={},o=[{value:"\u6570\u636e\u96c6 Dataset",id:"\u6570\u636e\u96c6-dataset",level:2},{value:"\u8fd0\u884c\u65f6 Runtime",id:"\u8fd0\u884c\u65f6-runtime",level:2},{value:"\u6570\u636e\u64cd\u4f5c Operations",id:"\u6570\u636e\u64cd\u4f5c-operations",level:2},{value:"\u6570\u636e\u9884\u70ed Dataload",id:"\u6570\u636e\u9884\u70ed-dataload",level:3},{value:"\u5f39\u6027\u4f38\u7f29 Scale",id:"\u5f39\u6027\u4f38\u7f29-scale",level:3},{value:"\u6570\u636e\u8fc1\u79fb DataMigrate",id:"\u6570\u636e\u8fc1\u79fb-datamigrate",level:3}];function d(e){const t={h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"fluid\u6982\u5ff5\u4ecb\u7ecd",children:"Fluid\u6982\u5ff5\u4ecb\u7ecd"}),"\n",(0,i.jsx)(t.h2,{id:"\u6570\u636e\u96c6-dataset",children:"\u6570\u636e\u96c6 Dataset"}),"\n",(0,i.jsx)(t.p,{children:"\u6570\u636e\u96c6\u662f\u903b\u8f91\u4e0a\u76f8\u5173\u7684\u4e00\u7ec4\u6570\u636e\u7684\u96c6\u5408\uff0c\u4f1a\u88ab\u8fd0\u7b97\u5f15\u64ce\u4f7f\u7528\uff0c\u6bd4\u5982\u5927\u6570\u636e\u7684Spark\uff0cAI\u573a\u666f\u7684TensorFlow\u3002\u800c\u8fd9\u4e9b\u6570\u636e\u667a\u80fd\u7684\u5e94\u7528\u4f1a\u521b\u9020\u5de5\u4e1a\u754c\u7684\u6838\u5fc3\u4ef7\u503c\u3002Dataset\u7684\u7ba1\u7406\u5b9e\u9645\u4e0a\u4e5f\u6709\u591a\u4e2a\u7ef4\u5ea6\uff0c\u6bd4\u5982\u5b89\u5168\u6027\uff0c\u7248\u672c\u7ba1\u7406\u548c\u6570\u636e\u52a0\u901f\u3002\u6211\u4eec\u5e0c\u671b\u4ece\u6570\u636e\u52a0\u901f\u51fa\u53d1\uff0c\u5bf9\u4e8e\u6570\u636e\u96c6\u7684\u7ba1\u7406\u63d0\u4f9b\u652f\u6301\u3002\u4f8b\u5982\u652f\u6301\u4e0d\u540c\u7684\u5b58\u50a8\u6e90\u7684\u6570\u636e\u6765\u6e90\u805a\u5408, \u53ef\u8fc1\u79fb\u6027\u548c\u6570\u636e\u7279\u5f81\uff1a"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"\u6570\u636e\u6765\u6e90"}),": \u53ef\u4ee5\u652f\u6301\u4e0d\u540c\u534f\u8bae\u7684\u591a\u4e2a\u6570\u636e\u6e90\uff0c\u5305\u62ecHDFS\uff0cS3\uff0cOSS\u7b49\uff0c\u8fd8\u6709Kubernetes\u539f\u751f\u7684Persistent Volume Claim\u534f\u8bae\uff1b\u5e76\u4e14\u4e5f\u53ef\u4ee5\u5c06\u591a\u4e2a\u6570\u636e\u6e90\u6302\u8f7d\u5230\u4e00\u4e2a\u7edf\u4e00\u7684\u547d\u540d\u7a7a\u95f4\u4e0b\u4e0d\u540c\u7684\u5b50\u76ee\u5f55\u3002"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"\u653e\u7f6e\u7b56\u7565"}),": \u53ef\u4ee5\u4f7f\u7528Kubernetes\u8bed\u4e49\u4e2d\u7684nodeAffinity\u4e2d\u5f3a\u4eb2\u548c\u6027\u548c\u5f31\u4eb2\u548c\u6027\u4ee5\u53catoleration\uff0c\u5c06\u6570\u636e\u96c6\u53ef\u4ee5\u7075\u6d3b\u7684\u6392\u5e03\u5728\u4e0d\u540c\u7c7b\u578b\u7684\u8282\u70b9\u3002\u5e76\u4e14\u901a\u8fc7\u4fee\u6539\u653e\u7f6e\u7b56\u7565\u5b9e\u73b0\u6570\u636e\u7684\u53ef\u8fc1\u79fb\u6027(Portability)\u3002"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"\u53ef\u63cf\u8ff0\u7684\u6570\u636e\u7279\u5f81"}),": \u4e3a\u5e95\u5c42Runtime\u4f18\u5316\u6570\u636e\u8bbf\u95ee\u7b56\u7565\u63d0\u4f9b\u4e00\u4e9b\u5e94\u7528\u5c42\u7684\u4fe1\u606f\uff0c\u6bd4\u5982\u67d0\u4e9b\u8fd0\u884c\u65f6(Runtime)\u5c31\u4f1a\u6839\u636e\u6587\u4ef6\u7279\u5f81\u662f\u5c0f\u6587\u4ef6\uff0c\u8fdb\u884c\u4e13\u95e8\u7684\u4f18\u5316\uff0c\u800c\u65e0\u9700\u7528\u6237\u8fdb\u884c\u4e13\u95e8\u7684\u914d\u7f6e\u3002"]}),"\n",(0,i.jsx)("div",{align:"center",children:(0,i.jsx)("img",{src:"/my-doc-website/concepts/dataset.png",title:"perspective",height:"60%",width:"60%",alt:""})}),"\n",(0,i.jsx)(t.p,{children:"\u540c\u65f6Dataset\u63d0\u4f9b\u4e86\u53ef\u89c2\u6d4b\u6027\uff0c\u6bd4\u5982\u8be5\u6570\u636e\u96c6\u7684\u6570\u636e\u603b\u91cf\u591a\u5c11\uff0c\u76ee\u524d\u63d0\u4f9b\u7684\u7f13\u5b58\u7a7a\u95f4\u662f\u591a\u5927\uff0c\u7f13\u5b58\u547d\u4e2d\u7387\u662f\u591a\u5c11,\u7528\u6237\u53ef\u4ee5\u6839\u636e\u8fd9\u4e9b\u4fe1\u606f\u51b3\u5b9a\u662f\u5426\u9700\u8981\u6269\u7f29\u5bb9\u3002"}),"\n",(0,i.jsx)("div",{align:"center",children:(0,i.jsx)("img",{src:"/my-doc-website/concepts/dataset-status.png",title:"perspective",height:"60%",width:"60%",alt:""})}),"\n",(0,i.jsx)(t.h2,{id:"\u8fd0\u884c\u65f6-runtime",children:"\u8fd0\u884c\u65f6 Runtime"}),"\n",(0,i.jsx)(t.p,{children:"Dataset\u662f\u4e2a\u7edf\u4e00\u7684\u62bd\u8c61\u6982\u5ff5;\u5bf9\u4e8e\u6570\u636e\u771f\u6b63\u7684\u64cd\u4f5c\uff0c\u5b9e\u9645\u4e0a\u7531\u5177\u4f53\u7684Runtime\u5b9e\u73b0\uff1b\u7531\u4e8e\u4e0d\u540c\u5b58\u50a8\u7684\u5dee\u5f02\uff0c\u5c31\u4f1a\u6709\u4e0d\u540c\u7684Runtime\u63a5\u53e3\u3002\u5982\u4f55\u771f\u6b63\u8bbf\u95ee\u6570\u636e\u5c31\u9700\u8981\u5f15\u5165Runtime\uff0c\u8fd9\u91cc\u7684API Spec\u662f\u53ef\u4ee5\u76f8\u5bf9\u7075\u6d3b\u7684\u5b9a\u4e49\uff0c\u4f46\u662fRuntime\u7684\u751f\u547d\u5468\u671f\u7531Fluid\u7edf\u4e00\u5b9a\u4e49\uff0cRuntime\u7684\u5177\u4f53\u5b9e\u73b0\u8005\u9700\u8981\u4f9d\u7167\u901a\u7528\u63a5\u53e3\u5b9a\u4e49\u5b8c\u6210\u5177\u4f53\u5b9e\u73b0\u3002"}),"\n",(0,i.jsx)(t.p,{children:"Fluid\u4e2d\u7684Runtime\u5206\u4e3a\u4e24\u5927\u7c7b:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"CacheRuntime\u5b9e\u73b0\u7f13\u5b58\u52a0\u901f,\u5305\u62ec\u5f00\u6e90\u7684\u5206\u5e03\u5f0f\u7f13\u5b58AlluxioRuntime\u4e3b\u8981\u52a0\u901fS3\uff0cHDFS\uff0cJuiceFSRuntime\u52a0\u901fJuiceFS, \u963f\u91cc\u4e91JindoFSRuntime\u52a0\u901fOSS\u548cOSS+HDFS\uff0c\u817e\u8baf\u4e91GooseFSRuntime\u652f\u6301COS\u3002"}),"\n",(0,i.jsx)(t.li,{children:"ThinRuntime\u7edf\u4e00\u8bbf\u95ee\u63a5\u53e3\uff0c\u6bd4\u5982\u652f\u6301s3fs, nfs-fuse\u7b49\u5206\u5e03\u5f0f\u5b58\u50a8\u7cfb\u7edf\u3002"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"\u6570\u636e\u64cd\u4f5c-operations",children:"\u6570\u636e\u64cd\u4f5c Operations"}),"\n",(0,i.jsx)(t.p,{children:"Fluid\u7684\u901a\u7528\u6570\u636e\u64cd\u4f5c(data operation)\u63cf\u8ff0\u6570\u636e\u9884\u70ed\uff0c\u6570\u636e\u8fc1\u79fb\uff0c\u5f39\u6027\u4f38\u7f29\uff0c\u7f13\u5b58\u6e05\u7406\uff0c\u5143\u6570\u636e\u5907\u4efd\uff0c\u6062\u590d\u7b49\u64cd\u4f5c\u3002"}),"\n",(0,i.jsx)(t.h3,{id:"\u6570\u636e\u9884\u70ed-dataload",children:"\u6570\u636e\u9884\u70ed Dataload"}),"\n",(0,i.jsx)(t.p,{children:"\u53ef\u4ee5\u6307\u5b9a\u9884\u70ed\u7684\u76ee\u5f55\uff0c\u9884\u70ed\u7b56\u7565\uff1a\u4e00\u6b21\u6027\uff0c\u5b9a\u65f6\uff0c\u4e8b\u4ef6\u89e6\u53d1\u3002"}),"\n",(0,i.jsx)(t.h3,{id:"\u5f39\u6027\u4f38\u7f29-scale",children:"\u5f39\u6027\u4f38\u7f29 Scale"}),"\n",(0,i.jsx)(t.p,{children:"\u652f\u6301\u624b\u52a8\u6269\u7f29\u5bb9\uff0c\u5f39\u6027\u6269\u7f29\u5bb9\uff0c\u5b9a\u65f6\u6269\u7f29\u5bb9\u7b49\u591a\u79cd\u7b56\u7565"}),"\n",(0,i.jsx)(t.h3,{id:"\u6570\u636e\u8fc1\u79fb-datamigrate",children:"\u6570\u636e\u8fc1\u79fb DataMigrate"}),"\n",(0,i.jsx)(t.p,{children:"\u652f\u6301\u5c06\u5916\u90e8\u5b58\u50a8\u4e2d\u7684\u5bfc\u5165\u6570\u636e\u96c6\u540e\u5f00\u59cb\u4f7f\u7528\u548c\u8fb9\u5012\u5165\u8fb9\u4f7f\u7528\u7b56\u7565\u3002"}),"\n",(0,i.jsx)(t.p,{children:"\u5b8c\u6574\u6982\u5ff5\uff1a"}),"\n",(0,i.jsx)("div",{align:"center",children:(0,i.jsx)("img",{src:"/my-doc-website/concepts/concept.png",title:"perspective",height:"60%",width:"60%",alt:""})})]})}function u(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},2172:(e,t,n)=>{n.d(t,{I:()=>r,M:()=>a});var i=n(1504);const s={},c=i.createContext(s);function a(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);
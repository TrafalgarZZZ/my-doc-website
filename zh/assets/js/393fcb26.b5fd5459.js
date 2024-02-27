"use strict";(self.webpackChunkmy_doc_website=self.webpackChunkmy_doc_website||[]).push([[4398],{7224:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=l(7624),i=l(2172);const r={sidebar_label:"\u4f7f\u7528 pprof \u5bf9 Fluid \u7ec4\u4ef6\u8fdb\u884c\u6027\u80fd\u5206\u6790",sidebar_position:2},t="\u4f7f\u7528 pprof \u5bf9 Fluid \u7ec4\u4ef6\u8fdb\u884c\u6027\u80fd\u5206\u6790",s={id:"developer-manual/pprof",title:"\u4f7f\u7528 pprof \u5bf9 Fluid \u7ec4\u4ef6\u8fdb\u884c\u6027\u80fd\u5206\u6790",description:"\u80cc\u666f\u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.9/developer-manual/pprof.md",sourceDirName:"developer-manual",slug:"/developer-manual/pprof",permalink:"/my-doc-website/zh/docs/developer-manual/pprof",draft:!1,unlisted:!1,editUrl:"https://github.com/TrafalgarZZZ/my-doc-website/tree/master/versioned_docs/version-0.9/developer-manual/pprof.md",tags:[],version:"0.9",lastUpdatedBy:"trafalgarzzz",lastUpdatedAt:1709005286,formattedLastUpdatedAt:"2024\u5e742\u670827\u65e5",sidebarPosition:2,frontMatter:{sidebar_label:"\u4f7f\u7528 pprof \u5bf9 Fluid \u7ec4\u4ef6\u8fdb\u884c\u6027\u80fd\u5206\u6790",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Setting up Fluid Development Environment with Kind on MacOS",permalink:"/my-doc-website/zh/docs/developer-manual/dev_with_kind"}},d={},c=[{value:"\u80cc\u666f\u4ecb\u7ecd",id:"\u80cc\u666f\u4ecb\u7ecd",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u8fdb\u5165\u9700\u8981\u8fdb\u884c\u6027\u80fd\u5206\u6790\u7684\u7ec4\u4ef6 Pod \u5185\u90e8",id:"\u8fdb\u5165\u9700\u8981\u8fdb\u884c\u6027\u80fd\u5206\u6790\u7684\u7ec4\u4ef6-pod-\u5185\u90e8",level:2},{value:"\u8fdb\u884c\u6027\u80fd\u5206\u6790",id:"\u8fdb\u884c\u6027\u80fd\u5206\u6790",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"\u4f7f\u7528-pprof-\u5bf9-fluid-\u7ec4\u4ef6\u8fdb\u884c\u6027\u80fd\u5206\u6790",children:"\u4f7f\u7528 pprof \u5bf9 Fluid \u7ec4\u4ef6\u8fdb\u884c\u6027\u80fd\u5206\u6790"}),"\n",(0,o.jsx)(n.h2,{id:"\u80cc\u666f\u4ecb\u7ecd",children:"\u80cc\u666f\u4ecb\u7ecd"}),"\n",(0,o.jsx)(n.p,{children:"pprof \u662f\u4e00\u4e2a\u7528\u4e8e\u53ef\u89c6\u5316\u548c\u5206\u6790\u6027\u80fd\u6570\u636e\u7684\u5de5\u5177\uff0c\u5b83\u53ef\u4ee5\u6536\u96c6\u7a0b\u5e8f\u7684 CPU\u3001\u5185\u5b58\u3001\u5806\u6808\u7b49\u4fe1\u606f\uff0c\u5e76\u5bf9\u5176\u751f\u6210\u6587\u672c\u548c\u56fe\u5f62\u62a5\u544a\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["Fluid \u793e\u533a\u5df2\u7ecf\u5728\u5404\u4e2a\u7ec4\u4ef6\u5185\u5f00\u542f\u4e86 pprof \u670d\u52a1\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u8fdb\u5165\u7ec4\u4ef6 Pod \u5185\u90e8\u540e\u8bbf\u95ee ",(0,o.jsx)(n.em,{children:(0,o.jsx)(n.a,{href:"http://127.0.0.1:6060/debug/pprof/",children:"http://127.0.0.1:6060/debug/pprof/"})})," \u5373\u53ef\u770b\u5230\u76f8\u5173\u4fe1\u606f\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u8fd0\u884c\u8be5\u793a\u4f8b\u4e4b\u524d\uff0c\u8bf7\u53c2\u8003",(0,o.jsx)(n.a,{href:"../userguide/install.md",children:"\u5b89\u88c5\u6587\u6863"}),"\u5b8c\u6210\u5b89\u88c5\uff0c\u5e76\u68c0\u67e5Fluid\u5404\u7ec4\u4ef6\u6b63\u5e38\u8fd0\u884c\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pod -n fluid-system\nalluxioruntime-controller-5b64fdbbb-84pc6   1/1     Running   0          8h\ncsi-nodeplugin-fluid-fwgjh                  2/2     Running   0          8h\ncsi-nodeplugin-fluid-ll8bq                  2/2     Running   0          8h\ndataset-controller-5b7848dbbb-n44dj         1/1     Running   0          8h\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u901a\u5e38\u6765\u8bf4\uff0c\u4f60\u4f1a\u770b\u5230\u4e00\u4e2a\u540d\u4e3a",(0,o.jsx)(n.code,{children:"dataset-controller"}),"\u7684Pod\u3001\u4e00\u4e2a\u540d\u4e3a",(0,o.jsx)(n.code,{children:"alluxioruntime-controller"}),"\u7684Pod\u548c\u591a\u4e2a\u540d\u4e3a",(0,o.jsx)(n.code,{children:"csi-nodeplugin"}),"\u7684Pod\u6b63\u5728\u8fd0\u884c\u3002\u5176\u4e2d\uff0c",(0,o.jsx)(n.code,{children:"csi-nodeplugin"}),"\u8fd9\u4e9bPod\u7684\u6570\u91cf\u53d6\u51b3\u4e8e\u4f60\u7684Kubernetes\u96c6\u7fa4\u4e2d\u7ed3\u70b9\u7684\u6570\u91cf\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"\u8fdb\u5165\u9700\u8981\u8fdb\u884c\u6027\u80fd\u5206\u6790\u7684\u7ec4\u4ef6-pod-\u5185\u90e8",children:"\u8fdb\u5165\u9700\u8981\u8fdb\u884c\u6027\u80fd\u5206\u6790\u7684\u7ec4\u4ef6 Pod \u5185\u90e8"}),"\n",(0,o.jsx)(n.p,{children:"\u67e5\u770b Fluid \u5404\u4e2a\u7ec4\u4ef6 Pod \u7684\u540d\u79f0\uff08\u672c\u6587\u4ee5 Fluid \u7684 dataset-controller \u4e3a\u4f8b\u8fdb\u884c\u6027\u80fd\u5206\u6790\uff09\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pods -n fluid-system\nNAME                                  READY   STATUS    RESTARTS         AGE\ncsi-nodeplugin-fluid-kg9bc            2/2     Running   0                22h\ncsi-nodeplugin-fluid-nbbjk            2/2     Running   0                22h\ncsi-nodeplugin-fluid-vjdfz            2/2     Running   0                22h\ndataset-controller-77cfc8f9bf-m488j   1/1     Running   0                22h\nfluid-webhook-5f76bb6567-jwpbk        1/1     Running   0                22h\nfluidapp-controller-b7c4d5579-ztvlw   1/1     Running   0                22h\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u8fdb\u5165 dataset-controller Pod \u5185\u90e8\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"$ kubectl exec -it dataset-controller-77cfc8f9bf-m488j -n fluid-system bash\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u8fdb\u884c\u6027\u80fd\u5206\u6790",children:"\u8fdb\u884c\u6027\u80fd\u5206\u6790"}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u5b89\u88c5\u5b8c Go \u73af\u5883\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,o.jsx)(n.strong,{children:"go tool pprof"})," \u547d\u4ee4\u8fdb\u884c\u6027\u80fd\u5206\u6790\u3002\u6b64\u5916\u7528\u6237\u4e5f\u53ef\u4ee5\u8bbf\u95ee ",(0,o.jsx)(n.em,{children:(0,o.jsx)(n.a,{href:"http://127.0.0.1:6060/debug/pprof/",children:"http://127.0.0.1:6060/debug/pprof/"})})," \u67e5\u770b\u90e8\u5206\u6570\u636e\u4fe1\u606f\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"pprof \u53ef\u4ee5\u5206\u6790\u7a0b\u5e8f\u7684\u4ee5\u4e0b\u6570\u636e\uff1a"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"allocs\uff1a\u67e5\u770b\u8fc7\u53bb\u6240\u6709\u5185\u5b58\u5206\u914d\u7684\u6837\u672c"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"block\uff1a\u67e5\u770b\u5bfc\u81f4\u963b\u585e\u540c\u6b65\u7684\u5806\u6808\u8ddf\u8e2a"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"cmdline\uff1a \u5f53\u524d\u7a0b\u5e8f\u7684\u547d\u4ee4\u884c\u7684\u5b8c\u6574\u8c03\u7528\u8def\u5f84"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"goroutine\uff1a\u67e5\u770b\u5f53\u524d\u6240\u6709\u8fd0\u884c\u7684 goroutines \u5806\u6808\u8ddf\u8e2a"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"heap\uff1a\u67e5\u770b\u6d3b\u52a8\u5bf9\u8c61\u7684\u5185\u5b58\u5206\u914d\u60c5\u51b5"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"mutex\uff1a\u67e5\u770b\u5bfc\u81f4\u4e92\u65a5\u9501\u7684\u7ade\u4e89\u6301\u6709\u8005\u7684\u5806\u6808\u8ddf\u8e2a"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"profile\uff1aCPU \u6982\u8981\u6587\u6587\u4ef6"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"threadcreate\uff1a\u67e5\u770b\u521b\u5efa\u65b0 OS \u7ebf\u7a0b\u7684\u5806\u6808\u8ddf\u8e2a"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"trace\uff1a\u5f53\u524d\u7a0b\u5e8f\u6267\u884c\u7684\u8ddf\u8e2a"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"allocs\uff1aA sampling of all past memory allocations"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"block\uff1aStack traces that led to blocking on synchronization primitives"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"cmdline\uff1a The command line invocation of the current program\u3002"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"goroutine\uff1aStack traces of all current goroutines"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"heap\uff1aA sampling of memory allocations of live objects. You can specify the gc GET parameter to run GC before taking the heap sample."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"mutex\uff1aStack traces of holders of contended mutexes"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"profile\uff1a CPU profile. You can specify the duration in the seconds GET parameter. After you get the profile file, use the go tool pprof command to investigate the profile."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"threadcreate\uff1aStack traces that led to the creation of new OS threads"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"trace\uff1aA trace of execution of the current program. You can specify the duration in the seconds GET parameter. After you get the trace file, use the go tool trace command to investigate the trace."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["\u6536\u96c6\u60a8\u5173\u6ce8\u7684\u7c7b\u578b\u7684\u6570\u636e\uff0c\u672c\u6587\u4ee5 30 \u79d2 CPU \u6570\u636e\u4e3a\u4f8b\uff0c\u5c06\u6570\u636e\u4fdd\u5b58\u4e3a profile.out\u3002\u60a8\u53ef\u4ee5\u5728 Pod \u5185\u6216\u5c06 profile.out \u590d\u5236\u5230\u672c\u5730\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"go tool pprof"})," \u547d\u4ee4\u8fdb\u884c\u5206\u6790\uff08\u9700\u8981 Go \u73af\u5883\uff09\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'$ curl -o profile.out http://localhost:6060/debug/pprof/profile?seconds=30\n$ go tool pprof test.out \nFile: dataset-controller\nType: cpu\nTime: Nov 2, 2022 at 6:48pm (CST)\nDuration: 29.91s, Total samples = 50ms ( 0.17%)\nEntering interactive mode (type "help" for commands, "o" for options)\n(pprof) \n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u4ea4\u4e92\u7ec8\u7aef\u5185\u8f93\u5165 ",(0,o.jsx)(n.code,{children:"top5"})," \u547d\u4ee4\u6253\u5370\u6d88\u8017 CPU \u8d44\u6e90\u524d5\u7684\u51fd\u6570\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"(pprof) top5   \nShowing nodes accounting for 50ms, 100% of 50ms total\nShowing top 5 nodes out of 64\n      flat  flat%   sum%        cum   cum%\n      10ms 20.00% 20.00%       10ms 20.00%  github.com/fluid-cloudnative/fluid/vendor/golang.org/x/net/http2.(*Transport).expectContinueTimeout\n      10ms 20.00% 40.00%       10ms 20.00%  net/http.cloneURL\n      10ms 20.00% 60.00%       10ms 20.00%  path.(*lazybuf).append\n      10ms 20.00% 80.00%       10ms 20.00%  runtime.memclrNoHeapPointers\n      10ms 20.00%   100%       10ms 20.00%  runtime.newarray\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.strong,{children:["\u66f4\u591a\u4f7f\u7528\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b",(0,o.jsx)(n.a,{href:"https://github.com/google/pprof",children:"\u6587\u6863"})]})})]})}function p(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},2172:(e,n,l)=>{l.d(n,{I:()=>s,M:()=>t});var o=l(1504);const i={},r=o.createContext(i);function t(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkmy_doc_website=self.webpackChunkmy_doc_website||[]).push([[892],{1500:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=a(7624),t=a(2172);const i={},l="Dataset\u7f13\u5b58\u8de8Namespace\u8bbf\u95ee(CSI\u673a\u5236)",r={id:"user-manual/data-sharing/dataset_across_namespace_with_csi",title:"Dataset\u7f13\u5b58\u8de8Namespace\u8bbf\u95ee(CSI\u673a\u5236)",description:"\u672c\u793a\u4f8b\u7528\u6765\u6f14\u793a\u5982\u4f55\u4e00\u4efdDataset\u7f13\u5b58\u6570\u636e\uff0c\u5982\u4f55\u8de8Namespace\u4f7f\u7528\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/user-manual/data-sharing/dataset_across_namespace_with_csi.md",sourceDirName:"user-manual/data-sharing",slug:"/user-manual/data-sharing/dataset_across_namespace_with_csi",permalink:"/my-doc-website/zh/docs/user-manual/data-sharing/dataset_across_namespace_with_csi",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user-manual/data-sharing/dataset_across_namespace_with_csi.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cache Runtime\u624b\u52a8\u6269\u7f29\u5bb9",permalink:"/my-doc-website/zh/docs/user-manual/data-operation/dataset_scaling"},next:{title:"Dataset\u7f13\u5b58\u8de8Namespace\u8bbf\u95ee(Sidecar\u673a\u5236)",permalink:"/my-doc-website/zh/docs/user-manual/data-sharing/dataset_across_namespace_with_sidecar"}},d={},c=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"CSI\u673a\u5236\u8de8Namespace\u5171\u4eab\u6570\u636e\u96c6\u7f13\u5b58",id:"csi\u673a\u5236\u8de8namespace\u5171\u4eab\u6570\u636e\u96c6\u7f13\u5b58",level:2},{value:"1. \u521b\u5efaDataset\u548c\u7f13\u5b58Runtime",id:"1-\u521b\u5efadataset\u548c\u7f13\u5b58runtime",level:3},{value:"2. \u521b\u5efa\u5f15\u7528\u7684Dataset\u548cRuntime",id:"2-\u521b\u5efa\u5f15\u7528\u7684dataset\u548cruntime",level:3}];function o(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.M)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"dataset\u7f13\u5b58\u8de8namespace\u8bbf\u95eecsi\u673a\u5236",children:"Dataset\u7f13\u5b58\u8de8Namespace\u8bbf\u95ee(CSI\u673a\u5236)"}),"\n",(0,s.jsx)(e.p,{children:"\u672c\u793a\u4f8b\u7528\u6765\u6f14\u793a\u5982\u4f55\u4e00\u4efdDataset\u7f13\u5b58\u6570\u636e\uff0c\u5982\u4f55\u8de8Namespace\u4f7f\u7528\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Namespace ns-a \u521b\u5efa Dataset demo \u548c AlluxioRuntime demo"}),"\n",(0,s.jsxs)(e.li,{children:["Namespace ns-b \u521b\u5efa Dataset demo-ref \u548c ThinRuntime demo-ref\uff0c\u5176\u4e2ddemo-ref  mount\u7684\u8def\u5f84\u4e3a",(0,s.jsx)(e.code,{children:"dataset://ns-a/demo"})]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,s.jsxs)(e.p,{children:["\u5728\u8fd0\u884c\u8be5\u793a\u4f8b\u4e4b\u524d\uff0c\u8bf7\u53c2\u8003",(0,s.jsx)(e.a,{href:"../userguide/install.md",children:"\u5b89\u88c5\u6587\u6863"}),"\u5b8c\u6210\u5b89\u88c5\uff0c\u5e76\u68c0\u67e5Fluid\u5404\u7ec4\u4ef6\u6b63\u5e38\u8fd0\u884c\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"$ kubectl get pod -n fluid-system\nalluxioruntime-controller-5b64fdbbb-84pc6   1/1     Running   0          8h\ncsi-nodeplugin-fluid-fwgjh                  2/2     Running   0          8h\ncsi-nodeplugin-fluid-ll8bq                  2/2     Running   0          8h\ndataset-controller-5b7848dbbb-n44dj         1/1     Running   0          8h\nthinruntime-controller-7dcbf5f45-xsf4p          1/1     Running   0          8h\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5176\u4e2d\uff0c",(0,s.jsx)(e.code,{children:"thinruntime-controller"}),"\u662f\u7528\u6765\u652f\u6301Dataset\u8de8Namespace\u5171\u4eab\uff0c",(0,s.jsx)(e.code,{children:"alluxioruntime-controller"}),"\u662f\u5b9e\u9645\u7684\u7f13\u5b58\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"csi\u673a\u5236\u8de8namespace\u5171\u4eab\u6570\u636e\u96c6\u7f13\u5b58",children:"CSI\u673a\u5236\u8de8Namespace\u5171\u4eab\u6570\u636e\u96c6\u7f13\u5b58"}),"\n",(0,s.jsx)(e.h3,{id:"1-\u521b\u5efadataset\u548c\u7f13\u5b58runtime",children:"1. \u521b\u5efaDataset\u548c\u7f13\u5b58Runtime"}),"\n",(0,s.jsxs)(e.p,{children:["\u5728 default \u547d\u540d\u7a7a\u95f4\u4e0b\uff0c\u521b\u5efa",(0,s.jsx)(e.code,{children:"phy"})," Dataset\u548cAlluxioRuntime"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:'$ cat<<EOF >ds.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: phy\nspec:\n  mounts:\n    - mountPoint: https://mirrors.bit.edu.cn/apache/spark/\n      name: spark\n---\napiVersion: data.fluid.io/v1alpha1\nkind: AlluxioRuntime\nmetadata:\n  name: phy\nspec:\n  replicas: 1\n  tieredstore:\n    levels:\n      - mediumtype: MEM\n        path: /dev/shm\n        quota: 1Gi\n        high: "0.95"\n        low: "0.7"\nEOF\n\n$ kubectl create -f ds.yaml\n'})}),"\n",(0,s.jsx)(e.h3,{id:"2-\u521b\u5efa\u5f15\u7528\u7684dataset\u548cruntime",children:"2. \u521b\u5efa\u5f15\u7528\u7684Dataset\u548cRuntime"}),"\n",(0,s.jsx)(e.p,{children:"\u5728 ref \u547d\u540d\u7a7a\u95f4\u4e0b\uff0c\u521b\u5efa\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u5f15\u7528\u7684\u6570\u636e\u96c6",(0,s.jsx)(e.code,{children:"refdemo"}),"\uff0c\u5176mountPoint\u683c\u5f0f\u4e3a",(0,s.jsx)(e.code,{children:"dataset://${origin-dataset-namespace}/${origin-dataset-name}"}),"\uff1b"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u6ce8\uff1a"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\u5f53\u524d\u5f15\u7528\u7684\u6570\u636e\u96c6\uff0c\u53ea\u652f\u6301\u4e00\u4e2amount\uff0c\u4e14\u5f62\u5f0f\u5fc5\u987b\u4e3a",(0,s.jsx)(e.code,{children:"dataset://"}),"\uff08\u5373\u51fa\u73b0",(0,s.jsx)(e.code,{children:"dataset://"}),"\u548c\u5176\u5b83\u5f62\u5f0f\u65f6\uff0cdataset\u521b\u5efa\u5931\u8d25\uff09\uff0cSpec\u4e2d\u5176\u5b83\u5b57\u6bb5\u65e0\u6548\uff1b"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"$ kubectl create ns ref\n\n$ cat<<EOF >ds-ref.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: refdemo\nspec:\n  mounts:\n    - mountPoint: dataset://default/phy\nEOF\n\n$ kubectl create -f ds-ref.yaml -n ref\n\n### \u521b\u5efaPod\u5e76\u67e5\u770b\u6570\u636e\n\n\u5728 default \u547d\u540d\u7a7a\u95f4\u4e0b\uff0c\u521b\u5efaPod\n\n```shell\n$ cat<<EOF >app.yaml\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\nspec:\n  containers:\n    - name: nginx\n      image: nginx\n      volumeMounts:\n        - mountPath: /data_spark\n          name: spark-vol\n  volumes:\n    - name: spark-vol\n      persistentVolumeClaim:\n        claimName: phy\nEOF\n\n$ kubectl create -f app.yaml\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5728 ref \u547d\u540d\u7a7a\u95f4\u4e0b\uff0c\u521b\u5efaPod\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"$ cat<<EOF >app-ref.yaml\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\nspec:\n  containers:\n    - name: nginx\n      image: nginx\n      volumeMounts:\n        - mountPath: /data_spark\n          name: spark-vol\n  volumes:\n    - name: spark-vol\n      persistentVolumeClaim:\n        claimName: refdemo\nEOF\n\n$ kubectl create -f app-ref.yaml -n ref\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u67e5\u770b ref \u7a7a\u95f4\u4e0b app nginx pod \u72b6\u6001\u6b63\u5e38\u8fd0\u884c\uff0c\u5e76\u67e5\u770b\u6302\u8f7d\u7684\u6570\u636e\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"$ kubectl get pods -n ref -o wide\nNAME         READY   STATUS    RESTARTS   AGE   IP              NODE      NOMINATED NODE   READINESS GATES\nnginx        1/1     Running   0          11m   10.233.109.66   work02    <none>           <none>\n\n# \u67e5\u770bpod\u5185\u7684\u6570\u636e\u8def\u5f84\uff0cspark \u662f default\u547d\u540d\u7a7a\u95f4\u4e0b\u540d\u4e3a `phy` \u7684 Dataset \u7684\u8def\u5f84\n$ kubectl exec nginx -n ref -it -- ls /data_spark\nspark\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u67e5\u770b default \u7a7a\u95f4\u4e0b\u7684pod\u4fe1\u606f\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u53ea\u5b58\u5728\u4e00\u4e2aAlluxioRuntime\u96c6\u7fa4\uff0c\u5373\u7f13\u5b58\u53ea\u6709\u4e00\u4efd\uff1b"}),"\n",(0,s.jsxs)(e.li,{children:["\u56e0\u4e3a ref \u547d\u540d\u7a7a\u95f4\u4e0b\u7684 nginx pod \u8c03\u5ea6\u5728node133\u4e0a\uff0c\u56e0\u6b64\u591a\u4e86\u4e00\u4e2a",(0,s.jsx)(e.code,{children:"phy-fuse-nmf88"}),"\uff1b"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"$ kubectl get pods -o wide\nNAME             READY   STATUS    RESTARTS   AGE     IP              NODE      NOMINATED NODE   READINESS GATES\nnginx            1/1     Running   0          5m9s    10.233.109.65   work02    <none>           <none>\nphy-fuse-59tw2   1/1     Running   0          10s     172.16.2.133    node133   <none>           <none>\nphy-fuse-nmf88   1/1     Running   0          5m9s    172.16.1.10     work02    <none>           <none>\nphy-master-0     2/2     Running   0          7m2s    172.16.1.10     work02    <none>           <none>\nphy-worker-0     2/2     Running   0          6m29s   172.16.1.10     work02    <none>           <none>\n"})})]})}function u(n={}){const{wrapper:e}={...(0,t.M)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},2172:(n,e,a)=>{a.d(e,{I:()=>r,M:()=>l});var s=a(1504);const t={},i=s.createContext(t);function l(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);
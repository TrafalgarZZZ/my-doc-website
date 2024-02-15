"use strict";(self.webpackChunkmy_doc_website=self.webpackChunkmy_doc_website||[]).push([[9244],{460:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>t});var l=s(7624),a=s(2172);const i={},d="Pod \u8c03\u5ea6\u4f18\u5316",o={id:"user-manual/scheduling/pod_schedule_optimization",title:"Pod \u8c03\u5ea6\u4f18\u5316",description:"\u4e3a\u4e86\u5e2e\u52a9\u7528\u6237\u66f4\u597d\u7684\u4f7f\u7528Fluid\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u8c03\u5ea6\u63d2\u4ef6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/user-manual/scheduling/pod_schedule_optimization.md",sourceDirName:"user-manual/scheduling",slug:"/user-manual/scheduling/pod_schedule_optimization",permalink:"/my-doc-website/zh/docs/user-manual/scheduling/pod_schedule_optimization",draft:!1,unlisted:!1,editUrl:"https://github.com/TrafalgarZZZ/my-doc-website/tree/master/docs/user-manual/scheduling/pod_schedule_optimization.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u7f13\u5b58\u4eb2\u548c\u6027\u8c03\u5ea6",permalink:"/my-doc-website/zh/docs/user-manual/scheduling/data_co_locality"},next:{title:"\u57fa\u4e8eRuntime\u5206\u5c42\u4f4d\u7f6e\u4fe1\u606f\u7684\u5e94\u7528Pod\u8c03\u5ea6",permalink:"/my-doc-website/zh/docs/user-manual/scheduling/tiered_locality_schedule"}},r={},t=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u8fd0\u884c\u793a\u4f8b1: \u521b\u5efa\u6ca1\u6709\u6302\u8f7d\u6570\u636e\u96c6\u7684Pod\uff0c\u5b83\u5c06\u5c3d\u91cf\u88ab\u8c03\u5ea6\u5230\u8fdc\u79bb\u6570\u636e\u96c6\u7684\u8282\u70b9",id:"\u8fd0\u884c\u793a\u4f8b1-\u521b\u5efa\u6ca1\u6709\u6302\u8f7d\u6570\u636e\u96c6\u7684pod\u5b83\u5c06\u5c3d\u91cf\u88ab\u8c03\u5ea6\u5230\u8fdc\u79bb\u6570\u636e\u96c6\u7684\u8282\u70b9",level:2},{value:"\u8fd0\u884c\u793a\u4f8b2: \u521b\u5efa\u6302\u8f7d\u6570\u636e\u96c6\u7684Pod\uff0c\u5b83\u5c06\u5c3d\u91cf\u5f80\u5b58\u5728\u6240\u6302\u8f7d\u6570\u636e\u96c6\u7684\u8282\u70b9\u8c03\u5ea6",id:"\u8fd0\u884c\u793a\u4f8b2-\u521b\u5efa\u6302\u8f7d\u6570\u636e\u96c6\u7684pod\u5b83\u5c06\u5c3d\u91cf\u5f80\u5b58\u5728\u6240\u6302\u8f7d\u6570\u636e\u96c6\u7684\u8282\u70b9\u8c03\u5ea6",level:2},{value:"\u8fd0\u884c\u793a\u4f8b3: \u521b\u5efa\u6302\u8f7d\u6570\u636e\u96c6\u7684Pod\uff0c\u901a\u8fc7\u6307\u5b9aLabel\u5c06Pod\u8c03\u5ea6\u5230\u6302\u8f7d\u6570\u636e\u96c6\u7684\u8282\u70b9",id:"\u8fd0\u884c\u793a\u4f8b3-\u521b\u5efa\u6302\u8f7d\u6570\u636e\u96c6\u7684pod\u901a\u8fc7\u6307\u5b9alabel\u5c06pod\u8c03\u5ea6\u5230\u6302\u8f7d\u6570\u636e\u96c6\u7684\u8282\u70b9",level:2}];function c(e){const n={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"pod-\u8c03\u5ea6\u4f18\u5316",children:"Pod \u8c03\u5ea6\u4f18\u5316"}),"\n",(0,l.jsx)(n.p,{children:"\u4e3a\u4e86\u5e2e\u52a9\u7528\u6237\u66f4\u597d\u7684\u4f7f\u7528Fluid\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u8c03\u5ea6\u63d2\u4ef6\u3002\n\u901a\u8fc7\u4e3aPod\u81ea\u52a8\u6ce8\u5165\u4eb2\u548c\u6027\u76f8\u5173\u4fe1\u606f\uff0c\u4f18\u5316Pod\u7684\u8c03\u5ea6\u7ed3\u679c\uff0c\u63d0\u9ad8\u96c6\u7fa4\u7684\u6574\u4f53\u4f7f\u7528\u6548\u7387\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u5177\u4f53\u6765\u8bf4\uff0cFluid\u7ed3\u5408\u6839\u636e\u6570\u636e\u96c6\u6392\u5e03\u7684Pod\u8c03\u5ea6\u7b56\u7565\uff0c\u901a\u8fc7webhook\u673a\u5236\u5c06\u8c03\u5ea6\u4fe1\u606f\u6ce8\u5165\u5230Pod\u53ef\u4ee5\u5b9e\u73b0\u4ee5\u4e0b\u529f\u80fd\uff1a"}),"\n",(0,l.jsxs)(n.p,{children:["1.\u652f\u6301K8s\u539f\u751f\u8c03\u5ea6\u5668,\u4ee5\u53caVolcano, Yunikorn\u7b49\u5b9e\u73b0Pod\u6570\u636e\u4eb2\u548c\u6027\u8c03\u5ea6",(0,l.jsx)(n.br,{}),"\n","2.\u5c06Pod\u4f18\u5148\u8c03\u5ea6\u5230\u6709\u6570\u636e\u7f13\u5b58\u80fd\u529b\u7684\u8282\u70b9",(0,l.jsx)(n.br,{}),"\n","3.\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9aPod Label\u7684\u5f62\u5f0f\uff0c\u5c06Pod\u5f3a\u5236\u8c03\u5ea6\u5230\u6709\u6570\u636e\u7f13\u5b58\u7684\u8282\u70b9\n4.\u5f53Pod\u4e0d\u4f7f\u7528\u6570\u636e\u96c6\u65f6\uff0c\u53ef\u4ee5\u5c3d\u91cf\u907f\u514d\u8c03\u5ea6\u5230\u6709\u7f13\u5b58\u7684\u8282\u70b9"]}),"\n",(0,l.jsx)(n.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,l.jsx)(n.p,{children:"\u60a8\u4f7f\u7528\u7684k8s\u7248\u672c\u9700\u8981\u652f\u6301 admissionregistration.k8s.io/v1\uff08 Kubernetes version > 1.16 )\n\u542f\u7528\u5141\u8bb8\u63a7\u5236\u5668\u96c6\u9700\u8981\u901a\u8fc7\u5411 Kubernetes API \u670d\u52a1\u5668\u4f20\u9012\u4e00\u4e2a\u6807\u5fd7\u6765\u914d\u7f6e\uff0c\u786e\u4fdd\u4f60\u7684\u96c6\u7fa4\u8fdb\u884c\u4e86\u6b63\u5e38\u7684\u914d\u7f6e"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"--enable-admission-plugins=MutatingAdmissionWebhook\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u6ce8\u610f\u5982\u679c\u60a8\u7684\u96c6\u7fa4\u4e4b\u524d\u5df2\u7ecf\u914d\u7f6e\u4e86\u5176\u4ed6\u7684\u51c6\u5165\u63a7\u5236\u5668\uff0c\u53ea\u9700\u8981\u589e\u52a0 MutatingAdmissionWebhook \u8fd9\u4e2a\u53c2\u6570"}),"\n",(0,l.jsx)(n.h2,{id:"\u4f7f\u7528\u65b9\u6cd5",children:"\u4f7f\u7528\u65b9\u6cd5"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u67e5\u770b\u5168\u90e8\u7ed3\u70b9"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl get nodes\nNAME                      STATUS   ROLES    AGE   VERSION\nnode.172.16.0.16   Ready    <none>   16d   v1.20.4-aliyun.1\nnode.172.16.1.84   Ready    <none>   16d   v1.20.4-aliyun.1\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u68c0\u67e5\u5f85\u521b\u5efa\u7684Dataset\u8d44\u6e90\u5bf9\u8c61"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'$ cat<<EOF >dataset.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: hbase\nspec:\n  mounts:\n    - mountPoint: https://mirrors.tuna.tsinghua.edu.cn/apache/hbase/stable/\n      name: hbase\n---\napiVersion: data.fluid.io/v1alpha1\nkind: AlluxioRuntime\nmetadata:\n  name: hbase\nspec:\n  replicas: 1\n  tieredstore:\n    levels:\n      - mediumtype: MEM\n        path: /dev/shm\n        quota: 2Gi\n        high: "0.95"\n        low: "0.7"\nEOF\n'})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u8fd9\u91cc\u901a\u8fc7nodeselector\u6307\u5b9a\u4e86"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u521b\u5efaDataset\u8d44\u6e90\u5bf9\u8c61"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl create -f dataset-global.yaml\ndataset.data.fluid.io/hbase created\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u8be5\u914d\u7f6e\u6587\u4ef6\u7247\u6bb5\u4e2d\uff0c\u5305\u542b\u4e86\u8bb8\u591a\u4e0eAlluxio\u76f8\u5173\u7684\u914d\u7f6e\u4fe1\u606f\uff0c\u8fd9\u4e9b\u4fe1\u606f\u5c06\u88abFluid\u7528\u6765\u542f\u52a8\u4e00\u4e2aAlluxio\u5b9e\u4f8b\u3002\n\u4e0a\u8ff0\u914d\u7f6e\u7247\u6bb5\u4e2d\u7684",(0,l.jsx)(n.code,{children:"spec.replicas"}),"\u5c5e\u6027\u88ab\u8bbe\u7f6e\u4e3a1,\u8fd9\u8868\u660eFluid\u5c06\u4f1a\u542f\u52a8\u4e00\u4e2a\u5305\u542b1\u4e2aAlluxio Master\u548c1\u4e2aAlluxio Worker\u7684Alluxio\u5b9e\u4f8b\u3002"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u521b\u5efaAlluxioRuntime\u8d44\u6e90\u5e76\u67e5\u770b\u72b6\u6001"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl create -f runtime.yaml\nalluxioruntime.data.fluid.io/hbase created\n\n$  kubectl get po -owide\nNAME                 READY   STATUS    RESTARTS   AGE   IP             NODE                      NOMINATED NODE   READINESS GATES\nhbase-master-0       2/2     Running   0          11m   172.16.0.16    node.172.16.0.16   <none>           <none>\nhbase-worker-0       2/2     Running   0          10m   172.16.1.84    node.172.16.1.84   <none>           <none>\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u6b64\u5904\u53ef\u4ee5\u770b\u5230\uff0c\u6709\u4e00\u4e2aAlluxio Worker\u6210\u529f\u542f\u52a8\uff0c\u5e76\u4e14\u8fd0\u884c\u5728\u7ed3\u70b9172.16.1.84\u4e0a\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u8fd0\u884c\u793a\u4f8b1-\u521b\u5efa\u6ca1\u6709\u6302\u8f7d\u6570\u636e\u96c6\u7684pod\u5b83\u5c06\u5c3d\u91cf\u88ab\u8c03\u5ea6\u5230\u8fdc\u79bb\u6570\u636e\u96c6\u7684\u8282\u70b9",children:"\u8fd0\u884c\u793a\u4f8b1: \u521b\u5efa\u6ca1\u6709\u6302\u8f7d\u6570\u636e\u96c6\u7684Pod\uff0c\u5b83\u5c06\u5c3d\u91cf\u88ab\u8c03\u5ea6\u5230\u8fdc\u79bb\u6570\u636e\u96c6\u7684\u8282\u70b9"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u521b\u5efaPod"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'$ cat<<EOF >nginx-1.yaml\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-1\n  labels:\n    fuse.serverful.fluid.io/inject: "true"\nspec:\n  containers:\n    - name: nginx-1\n      image: nginx\n      volumeMounts:\n        - mountPath: /data\n          name: hbase-vol\n  volumes:\n    - name: hbase-vol\n      persistentVolumeClaim:\n        claimName: hbase\nEOF\n$ kubectl create -f nginx-1.yaml\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u793a\u4f8b\u4e2d",(0,l.jsx)(n.code,{children:"metadata.labels"}),"\u4e2d\u65b0\u589e",(0,l.jsx)(n.code,{children:"fuse.serverful.fluid.io/inject=true"}),"\u4ee5\u5bf9\u8be5Pod\u5f00\u542fFluid\u7684\u8c03\u5ea6\u4f18\u5316\u529f\u80fd\u3002"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u67e5\u770bPod"})}),"\n",(0,l.jsx)(n.p,{children:"\u67e5\u770bPod\u7684yaml\u6587\u4ef6\uff0c\u53d1\u73b0\u88ab\u6ce8\u5165\u4e86\u5982\u4e0b\u4eb2\u548c\u6027\u7ea6\u675f\u4fe1\u606f\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"spec:\n  affinity:\n    nodeAffinity:\n      preferredDuringSchedulingIgnoredDuringExecution:\n        - preference:\n            matchExpressions:\n              - key: fluid.io/dataset-num\n                operator: DoesNotExist\n          weight: 100\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u6b63\u5982\u4eb2\u548c\u6027\u6240\u5f71\u54cd\u7684\uff0cPod\u8c03\u5ea6\u5230\u4e86\u6ca1\u6709\u7f13\u5b58(\u5373\u65e0Alluxio Worker Pod\u8fd0\u884c)\u7684node.172.16.0.16\u8282\u70b9\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pods nginx-1 -o  custom-columns=NAME:metadata.name,NODE:.spec.nodeName\nNAME    NODE\nnginx-1   node.172.16.0.16\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u8fd0\u884c\u793a\u4f8b2-\u521b\u5efa\u6302\u8f7d\u6570\u636e\u96c6\u7684pod\u5b83\u5c06\u5c3d\u91cf\u5f80\u5b58\u5728\u6240\u6302\u8f7d\u6570\u636e\u96c6\u7684\u8282\u70b9\u8c03\u5ea6",children:"\u8fd0\u884c\u793a\u4f8b2: \u521b\u5efa\u6302\u8f7d\u6570\u636e\u96c6\u7684Pod\uff0c\u5b83\u5c06\u5c3d\u91cf\u5f80\u5b58\u5728\u6240\u6302\u8f7d\u6570\u636e\u96c6\u7684\u8282\u70b9\u8c03\u5ea6"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u521b\u5efaPod"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'$ cat<<EOF >nginx-2.yaml\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-2\n  labels:\n    fuse.serverful.fluid.io/inject: "true"\nspec:\n  containers:\n    - name: nginx-2\n      image: nginx\n      volumeMounts:\n        - mountPath: /data\n          name: hbase-vol\n  volumes:\n    - name: hbase-vol\n      persistentVolumeClaim:\n        claimName: hbase\nEOF\n$ kubectl create -f nginx-2.yaml\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u793a\u4f8b\u4e2d",(0,l.jsx)(n.code,{children:"metadata.labels"}),"\u4e2d\u65b0\u589e",(0,l.jsx)(n.code,{children:"fuse.serverful.fluid.io/inject=true"}),"\u4ee5\u5bf9\u8be5Pod\u5f00\u542fFluid\u7684\u8c03\u5ea6\u4f18\u5316\u529f\u80fd\u3002"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u67e5\u770bPod"})}),"\n",(0,l.jsx)(n.p,{children:"\u67e5\u770bPod\u7684yaml\u6587\u4ef6\uff0c\u53d1\u73b0\u88ab\u6ce8\u5165\u4e86\u5982\u4e0b\u4fe1\u606f\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:'spec:\n  affinity:\n    nodeAffinity:\n      preferredDuringSchedulingIgnoredDuringExecution:\n      - preference:\n          matchExpressions:\n          - key: fluid.io/s-default-hbase\n            operator: In\n            values:\n            - "true"\n        weight: 100\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u901a\u8fc7Webhook\u673a\u5236\uff0c\u5e94\u7528Pod\u88ab\u6ce8\u5165\u548c\u7f13\u5b58worker\u7684\u5f31\u4eb2\u548c\u6027\u914d\u7f6e\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pods nginx-2 -o  custom-columns=NAME:metadata.name,NODE:.spec.nodeName\nNAME    NODE\nnginx-1   node.172.16.1.84\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u4ece\u7ed3\u679c\u4e0a\u770b, \u53ef\u4ee5\u770b\u5230pod\u88ab\u8c03\u5ea6\u5230\u4e86\u6709\u6570\u636e\u7f13\u5b58\uff08\u5373\u8fd0\u884cAlluxio Worker Pod\uff09\u7684\u8282\u70b9\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u8fd0\u884c\u793a\u4f8b3-\u521b\u5efa\u6302\u8f7d\u6570\u636e\u96c6\u7684pod\u901a\u8fc7\u6307\u5b9alabel\u5c06pod\u8c03\u5ea6\u5230\u6302\u8f7d\u6570\u636e\u96c6\u7684\u8282\u70b9",children:"\u8fd0\u884c\u793a\u4f8b3: \u521b\u5efa\u6302\u8f7d\u6570\u636e\u96c6\u7684Pod\uff0c\u901a\u8fc7\u6307\u5b9aLabel\u5c06Pod\u8c03\u5ea6\u5230\u6302\u8f7d\u6570\u636e\u96c6\u7684\u8282\u70b9"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u521b\u5efaPod"}),"\nmetadata\u4e2d\u6307\u5b9alabel\uff08\u683c\u5f0f",(0,l.jsx)(n.code,{children:"fluid.io/dataset.{dataset_name}.sched: required"}),"\uff09\uff0c\u5982",(0,l.jsx)(n.code,{children:"fluid.io/dataset.hbase.sched: required"}),"\u8868\u660e\u8be5Pod\u9700\u8981\u88ab\u8c03\u5ea6\u5230\u6570\u636e\u96c6 hbase \u7684\u7f13\u5b58\u8282\u70b9\u4e0a\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'$ cat<<EOF >nginx-3.yaml\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-3\n  labels:\n    fuse.serverful.fluid.io/inject: "true"\n    fluid.io/dataset.hbase.sched: required\nspec:\n  containers:\n    - name: nginx-3\n      image: nginx\n      volumeMounts:\n        - mountPath: /data\n          name: hbase-vol\n  volumes:\n    - name: hbase-vol\n      persistentVolumeClaim:\n        claimName: hbase\nEOF\n$ kubectl create -f nginx-3.yaml\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u67e5\u770bPod"})}),"\n",(0,l.jsx)(n.p,{children:"\u67e5\u770bPod\u7684yaml\u6587\u4ef6\uff0c\u53d1\u73b0\u88ab\u6ce8\u5165\u4e86\u5982\u4e0b\u4fe1\u606f\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:'spec:\n  affinity:\n    nodeAffinity:\n      requiredDuringSchedulingIgnoredDuringExecution:\n        nodeSelectorTerms:\n        - matchExpressions:\n          - key: fluid.io/s-default-hbase\n            operator: In\n            values:\n            - "true"\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u901a\u8fc7Webhook\u673a\u5236\uff0c\u5e94\u7528Pod\u88ab\u6ce8\u5165\u548c\u7f13\u5b58worker\u7684\u5f3a\u4eb2\u548c\u6027\u914d\u7f6e\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pods nginx-3 -o  custom-columns=NAME:metadata.name,NODE:.spec.nodeName\nNAME    NODE\nnginx-3   node.172.16.1.84\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u4ece\u7ed3\u679c\u4e0a\u770b, \u53ef\u4ee5\u770b\u5230pod\u88ab\u8c03\u5ea6\u5230\u4e86\u6709\u6570\u636e\u7f13\u5b58\uff08\u5373\u8fd0\u884cAlluxio Worker Pod\uff09\u7684\u8282\u70b9\u3002"})]})}function u(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},2172:(e,n,s)=>{s.d(n,{I:()=>o,M:()=>d});var l=s(1504);const a={},i=l.createContext(a);function d(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);
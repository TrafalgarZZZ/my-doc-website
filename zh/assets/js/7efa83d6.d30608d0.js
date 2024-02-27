"use strict";(self.webpackChunkmy_doc_website=self.webpackChunkmy_doc_website||[]).push([[8366],{8724:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>a});var s=i(7624),o=i(2172);const l={},d="\u57fa\u4e8eRuntime\u5206\u5c42\u4f4d\u7f6e\u4fe1\u606f\u7684\u5e94\u7528Pod\u8c03\u5ea6",r={id:"user-manual/scheduling/tiered_locality_schedule",title:"\u57fa\u4e8eRuntime\u5206\u5c42\u4f4d\u7f6e\u4fe1\u606f\u7684\u5e94\u7528Pod\u8c03\u5ea6",description:"\u5728Pod \u8c03\u5ea6\u4f18\u5316\u4e2d\u4ecb\u7ecd\u5982\u4f55\u5c06\u5e94\u7528Pod\u8c03\u5ea6\u5230\u5177\u6709\u6570\u636e\u7f13\u5b58\u80fd\u529b\u7684\u8282\u70b9\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/user-manual/scheduling/tiered_locality_schedule.md",sourceDirName:"user-manual/scheduling",slug:"/user-manual/scheduling/tiered_locality_schedule",permalink:"/my-doc-website/zh/docs/next/user-manual/scheduling/tiered_locality_schedule",draft:!1,unlisted:!1,editUrl:"https://github.com/TrafalgarZZZ/my-doc-website/tree/master/docs/user-manual/scheduling/tiered_locality_schedule.md",tags:[],version:"current",lastUpdatedBy:"trafalgarzzz",lastUpdatedAt:1708002139,formattedLastUpdatedAt:"2024\u5e742\u670815\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pod \u8c03\u5ea6\u4f18\u5316",permalink:"/my-doc-website/zh/docs/next/user-manual/scheduling/pod_schedule_optimization"},next:{title:"Fluid\u5f00\u53d1\u6587\u6863",permalink:"/my-doc-website/zh/docs/next/developer-manual/how_to_develop"}},t={},a=[{value:"0. \u524d\u63d0\u6761\u4ef6",id:"0-\u524d\u63d0\u6761\u4ef6",level:2},{value:"1. Fluid \u914d\u7f6e\u5206\u5c42\u4f4d\u7f6e\u4fe1\u606f",id:"1-fluid-\u914d\u7f6e\u5206\u5c42\u4f4d\u7f6e\u4fe1\u606f",level:2},{value:"2. Runtime \u914d\u7f6e\u76f8\u5e94\u7684\u5206\u5c42\u4fe1\u606f",id:"2-runtime-\u914d\u7f6e\u76f8\u5e94\u7684\u5206\u5c42\u4fe1\u606f",level:2},{value:"3. \u5e94\u7528 Pod \u7684\u8c03\u5ea6",id:"3-\u5e94\u7528-pod-\u7684\u8c03\u5ea6",level:2},{value:"3.1 \u4f18\u5148\u4eb2\u548c\u6027\u8c03\u5ea6",id:"31-\u4f18\u5148\u4eb2\u548c\u6027\u8c03\u5ea6",level:3},{value:"3.2 \u5f3a\u5236\u4eb2\u548c\u6027\u8c03\u5ea6",id:"32-\u5f3a\u5236\u4eb2\u548c\u6027\u8c03\u5ea6",level:3},{value:"3.3 \u6ce8\u610f\u4e8b\u9879",id:"33-\u6ce8\u610f\u4e8b\u9879",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u57fa\u4e8eruntime\u5206\u5c42\u4f4d\u7f6e\u4fe1\u606f\u7684\u5e94\u7528pod\u8c03\u5ea6",children:"\u57fa\u4e8eRuntime\u5206\u5c42\u4f4d\u7f6e\u4fe1\u606f\u7684\u5e94\u7528Pod\u8c03\u5ea6"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728",(0,s.jsx)(n.a,{href:"/my-doc-website/zh/docs/next/user-manual/scheduling/pod_schedule_optimization",children:"Pod \u8c03\u5ea6\u4f18\u5316"}),"\u4e2d\u4ecb\u7ecd\u5982\u4f55\u5c06\u5e94\u7528Pod\u8c03\u5ea6\u5230\u5177\u6709\u6570\u636e\u7f13\u5b58\u80fd\u529b\u7684\u8282\u70b9\u3002\n\u4f46\u662f\u5728\u6709\u4e9b\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u6570\u636e\u7f13\u5b58\u7684\u8282\u70b9\u65e0\u6cd5\u8c03\u5ea6\u5e94\u7528Pod\uff0c\u90a3\u4e48\u5c06Pod\u8c03\u5ea6\u5230\u79bb\u6570\u636e\u7f13\u5b58\u8282\u70b9\u6bd4\u8f83\u8fd1\u7684\u8282\u70b9\uff0c\u4f8b\u5982\u5728\u540c\u4e00\u4e2a\nzone\u4e2d\uff0c\u5176\u8bfb\u5199\u6027\u80fd\u4f1a\u6bd4\u5728\u4e0d\u540c\u7684zone\u4e2d\u8981\u597d\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["Fluid \u652f\u6301\u914d\u7f6e K8s \u96c6\u7fa4\u4e2d\u7684\u5206\u5c42\u4f4d\u7f6e\u4fe1\u606f\uff0c\u5b58\u50a8\u5728Fluid \u7cfb\u7edf\u547d\u540d\u7a7a\u95f4\u7684 ",(0,s.jsx)(n.code,{children:"webhook-plugins"})," \u7684configmap \u4e2d\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u5177\u4f53\u7684\u793a\u4f8b\uff0c\u5047\u8bbe K8s \u96c6\u7fa4\u5177\u6709 zone \u548c region \u7684\u4f4d\u7f6e\u4fe1\u606f\uff0c\u8fbe\u5230\u4ee5\u4e0b\u76ee\u6807\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5e94\u7528 Pod \u672a\u914d\u7f6e\u5f3a\u5236\u4eb2\u548c\u8c03\u5ea6\u65f6\uff0c\u4f18\u5148\u8c03\u5ea6\u5230\u6570\u636e\u7f13\u5b58\u7684\u8282\u70b9\uff0c\u5982\u679c\u4e0d\u6ee1\u8db3\u5176\u6b21\u4f18\u5148\u8c03\u5ea6\u5230\u540c\u4e00\u4e2a zone\uff0c\u518d\u5176\u6b21\u8c03\u5ea6\u5230\u540c\u4e00\u4e2a region\uff1b"}),"\n",(0,s.jsx)(n.li,{children:"\u5e94\u7528 Pod \u914d\u7f6e\u5f3a\u5236\u4eb2\u548c\u8c03\u5ea6\u65f6\uff0c\u53ea\u5f3a\u5236\u8c03\u5ea6\u5230\u540c\u4e00\u4e2a zone \u4e0b\uff0c\u4e0d\u9700\u8981\u5f3a\u5236\u8c03\u5ea6\u5230\u6570\u636e\u7f13\u5b58\u7684\u8282\u70b9\uff1b"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"0-\u524d\u63d0\u6761\u4ef6",children:"0. \u524d\u63d0\u6761\u4ef6"}),"\n",(0,s.jsx)(n.p,{children:"\u60a8\u4f7f\u7528\u7684k8s\u7248\u672c\u9700\u8981\u652f\u6301 admissionregistration.k8s.io/v1\uff08 Kubernetes version > 1.16 )\n\u542f\u7528\u5141\u8bb8\u63a7\u5236\u5668\u96c6\u9700\u8981\u901a\u8fc7\u5411 Kubernetes API \u670d\u52a1\u5668\u4f20\u9012\u4e00\u4e2a\u6807\u5fd7\u6765\u914d\u7f6e\uff0c\u786e\u4fdd\u4f60\u7684\u96c6\u7fa4\u8fdb\u884c\u4e86\u6b63\u5e38\u7684\u914d\u7f6e"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"--enable-admission-plugins=MutatingAdmissionWebhook\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6ce8\u610f\u5982\u679c\u60a8\u7684\u96c6\u7fa4\u4e4b\u524d\u5df2\u7ecf\u914d\u7f6e\u4e86\u5176\u4ed6\u7684\u51c6\u5165\u63a7\u5236\u5668\uff0c\u53ea\u9700\u8981\u589e\u52a0 MutatingAdmissionWebhook \u8fd9\u4e2a\u53c2\u6570\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"1-fluid-\u914d\u7f6e\u5206\u5c42\u4f4d\u7f6e\u4fe1\u606f",children:"1. Fluid \u914d\u7f6e\u5206\u5c42\u4f4d\u7f6e\u4fe1\u606f"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u5728\u5b89\u88c5 Fluid \u524d\u914d\u7f6e"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 Helm Charts values \u7684 pluginsProfile \u5b9a\u4e49\u4e2d\uff0c\u914d\u7f6e",(0,s.jsx)(n.code,{children:"NodeAffinityWithCache"})," \u63d2\u4ef6\u7684\u53c2\u6570\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"fluid.io/node \u662f fluid \u5185\u7f6e\u7684\u4eb2\u548c\u6027\uff0c\u7528\u4e8e\u8c03\u5ea6\u5230\u6570\u636e\u7f13\u5b58\u7684\u8282\u70b9"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"pluginConfig:\n  - name: NodeAffinityWithCache\n    args: |\n      preferred:\n        # fluid \u5185\u7f6e\u7684\u4eb2\u548c\u6027\uff0c\u7528\u4e8e\u8c03\u5ea6\u5230\u6570\u636e\u7f13\u5b58\u7684\u8282\u70b9\uff0c\u540d\u79f0\u4e0d\u53ef\u4fee\u6539\n        - name: fluid.io/node\n          weight: 100\n        # zone \u7684 label \u540d\u79f0\n        - name: topology.kubernetes.io/zone\n          weight: 50\n        # region \u7684 label \u540d\u79f0\n        - name: topology.kubernetes.io/region\n          weight: 10\n      required:\n        # \u5982\u679cPod \u914d\u7f6e \u5f3a\u5236\u4eb2\u548c\u6027\uff0c\u5219\u5f3a\u5236\u4eb2\u548c\u6027\u5339\u914d zone\n        # \u914d\u7f6e\u591a\u4e2a\uff0c\u91c7\u7528 And \u8bed\u4e49\n        - topology.kubernetes.io/zone\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u7136\u540e\u6309\u7167",(0,s.jsx)(n.a,{href:"../userguide/install.md",children:"Fluid \u5b89\u88c5"})," \u5b89\u88c5 Fluid\uff0c\u5b89\u88c5\u597d\u4e4b\u540e\uff0c\u5728 Fluid namespace\uff08\u9ed8\u8ba4fluid-system\uff09 \u4e2d\u5b58\u5728\n",(0,s.jsx)(n.code,{children:"webhook-plugins"})," \u7684 ConfigMap\uff0c\u4fdd\u5b58\u5206\u5c42\u7684\u4f4d\u7f6e\u4fe1\u606f\u914d\u7f6e\u3002"]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["\u5df2\u7ecf\u5b58\u5728\u7684 Fluid \u96c6\u7fa4\uff0c\u4fee\u6539\u5206\u5c42\u4f4d\u7f6e\u4fe1\u606f\n\u5bf9 Fluid namespace\uff08\u9ed8\u8ba4fluid-system\uff09 \u4e2d\u5b58\u5728",(0,s.jsx)(n.code,{children:"webhook-plugins"})," \u7684 ConfigMap \u8fdb\u884c\u4fee\u6539\uff0c\n\u6dfb\u52a0\u76f8\u5173\u7684\u5206\u5c42\u4f4d\u7f6e\u4fe1\u606f\u914d\u7f6e\uff08\u89c1\u7b2c\u4e00\u70b9\uff09\uff0c\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u9700\u8981\u91cd\u65b0\u542f\u52a8fluid-webhook pod\u624d\u80fd\u751f\u6548\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"2-runtime-\u914d\u7f6e\u76f8\u5e94\u7684\u5206\u5c42\u4fe1\u606f",children:"2. Runtime \u914d\u7f6e\u76f8\u5e94\u7684\u5206\u5c42\u4fe1\u606f"}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u4ee5\u901a\u8fc7 Dataset \u7684 nodeAffinity \u6216\u8005 Runtime \u7684 NodeSelector \u5b57\u6bb5\u914d\u7f6e\u5206\u5c42\u4f4d\u7f6e\u4fe1\u606f\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4e0b\u9762\u662f\u901a\u8fc7 Dataset \u7684 nodeAffinity \u914d\u7f6e\u5206\u5c42\u4f4d\u7f6e\u4fe1\u606f\uff0c\u6b64\u65f6 Runtime \u7684 Worker \u4f1a\u90e8\u7f72\u5728\u7b26\u5408\u6761\u4ef6\u7684\u8282\u70b9\u4e0a\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: hbase\nspec:\n  mounts:\n    - mountPoint: https://mirrors.tuna.tsinghua.edu.cn/apache/hbase/stable/\n      name: hbase\n  nodeAffinity:\n    required:\n      nodeSelectorTerms:\n      \t- matchExpressions:\n          - key: topology.kubernetes.io/zone\n            operator: In\n            values: \n              - zone-a\n          - key: topology.kubernetes.io/region\n            operator: In\n            values:\n              - region-a\n"})}),"\n",(0,s.jsx)(n.h2,{id:"3-\u5e94\u7528-pod-\u7684\u8c03\u5ea6",children:"3. \u5e94\u7528 Pod \u7684\u8c03\u5ea6"}),"\n",(0,s.jsx)(n.h3,{id:"31-\u4f18\u5148\u4eb2\u548c\u6027\u8c03\u5ea6",children:"3.1 \u4f18\u5148\u4eb2\u548c\u6027\u8c03\u5ea6"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u521b\u5efaPod"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'$ cat<<EOF >nginx-1.yaml\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-1\n  labels:\n    # enable Fluid\'s scheduling optimization for the pod\n    fuse.serverful.fluid.io/inject: "true"\nspec:\n  containers:\n    - name: nginx-1\n      image: nginx\n      volumeMounts:\n        - mountPath: /data\n          name: hbase-vol\n  volumes:\n    - name: hbase-vol\n      persistentVolumeClaim:\n        claimName: hbase\nEOF\n$ kubectl create -f nginx-1.yaml\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u67e5\u770bPod"})}),"\n",(0,s.jsx)(n.p,{children:"\u67e5\u770bPod\u7684yaml\u6587\u4ef6\uff0c\u53d1\u73b0\u88ab\u6ce8\u5165\u4e86\u5982\u4e0b\u4eb2\u548c\u6027\u7ea6\u675f\u4fe1\u606f\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'spec:\n  affinity:\n    nodeAffinity:\n      preferredDuringSchedulingIgnoredDuringExecution:\n        - preference:\n          matchExpressions:\n            - key: fluid.io/s-default-hbase\n              operator: In\n              values:\n                - "true"\n          weight: 100\n        - preference:\n            matchExpressions:\n              - key: topology.kubernetes.io/zone\n                operator: In\n                values:\n                  - "zone-a"\n          weight: 50\n        - preference:\n            matchExpressions:\n              - key: topology.kubernetes.io/region\n                operator: In\n                values:\n                  - "region-a"\n          weight: 10         \n'})}),"\n",(0,s.jsx)(n.p,{children:"\u8be5\u4eb2\u548c\u6027\u4f1a\u8fbe\u5230\u4ee5\u4e0b\u6548\u679c\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5982\u679c\u6570\u636e\u7f13\u5b58\u8282\u70b9\uff08\u5177\u6709",(0,s.jsx)(n.code,{children:"fluid.io/s-default-hbase"}),"\u6807\u7b7e\u7684\u8282\u70b9\uff09\u53ef\u8c03\u5ea6\uff0c\u5219\u5c06 Pod \u8c03\u5ea6\u5230\u8be5\u8282\u70b9\uff1b"]}),"\n",(0,s.jsx)(n.li,{children:'\u5982\u679c\u6570\u636e\u7f13\u5b58\u8282\u70b9\u4e0d\u53ef\u8c03\u5ea6\uff0c\u5219\u4f18\u5148\u8c03\u5ea6\u5230\u540c\u4e00\u4e2azone\uff08\u201czone-a"\uff09\u7684\u8282\u70b9\uff1b'}),"\n",(0,s.jsx)(n.li,{children:'\u5982\u679c\u540c\u4e00\u4e2azone\u7684\u8282\u70b9\u4e5f\u4e0d\u53ef\u8c03\u5ea6\uff0c\u5219\u4f18\u5148\u8c03\u5ea6\u5230\u5230\u540c\u4e00\u4e2aregion\uff08\u201dregion-a")\u7684\u8282\u70b9\u3002'}),"\n",(0,s.jsx)(n.li,{children:"\u4e0a\u8ff0\u90fd\u4e0d\u6ee1\u8db3\uff0c\u8c03\u5ea6\u5230\u96c6\u7fa4\u4e2d\u5176\u5b83\u53ef\u8c03\u5ea6\u7684\u8282\u70b9\uff1b"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"32-\u5f3a\u5236\u4eb2\u548c\u6027\u8c03\u5ea6",children:"3.2 \u5f3a\u5236\u4eb2\u548c\u6027\u8c03\u5ea6"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u5e94\u7528pod \u6307\u5b9a\u5f3a\u5236\u6307\u5b9a\u6570\u636e\u96c6\u8c03\u5ea6\u65f6"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-1\n  labels:\n    # \u5f3a\u5236\u8c03\u5ea6\u5230 hbase dataset\n    fluid.io/dataset.hbase.sched: required\n    fuse.serverful.fluid.io/inject: "true"\nspec:\n  containers:\n    - name: nginx-1\n      image: nginx\n      volumeMounts:\n        - mountPath: /data\n          name: hbase-vol\n  volumes:\n    - name: hbase-vol\n      persistentVolumeClaim:\n        claimName: hbase\n'})}),"\n",(0,s.jsx)(n.p,{children:'pod \u4f1a\u88ab\u6ce8\u5165 required \u8282\u70b9\u4eb2\u548c\u6027\uff0c\u5982\u4e0b\u6240\u793a\uff0c\u5f3a\u5236\u8c03\u5ea6\u5230 "topology.kubernetes.io/zone" \u4e3a "zone-a" \u7684\u8282\u70b9'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'spec:\n  affinity:\n    nodeAffinity:\n      requiredDuringSchedulingIgnoredDuringExecution:\n        nodeSelectorTerms:\n          - matchExpressions:\n            - key: topology.kubernetes.io/zone\n              operator: In\n              values:\n                - "zone-a"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"33-\u6ce8\u610f\u4e8b\u9879",children:"3.3 \u6ce8\u610f\u4e8b\u9879"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5982\u679c\u5e94\u7528 Pod \u6307\u5b9a\u5206\u5c42\u4f4d\u7f6e\u4fe1\u606f\u7684\u4eb2\u548c\u6027\uff08\u5305\u62ec",(0,s.jsx)(n.code,{children:"spec.affinity"})," \u548c ",(0,s.jsx)(n.code,{children:"spec.nodeselector"}),"\uff09\uff0c\u5219 webhook \u4e0d\u4f1a\u6ce8\u5165\u76f8\u5173\u7684\u4f4d\u7f6e\u4eb2\u548c\u6027\uff0c\u4ee5\u7528\u6237\u7684\u914d\u7f6e\u4e3a\u51c6:"]}),"\n",(0,s.jsx)(n.li,{children:"\u5206\u5c42\u4f4d\u7f6e\u4fe1\u606f\u7684\u4eb2\u548c\u6027\u8c03\u5ea6\u662f\u5168\u5c40\u6027\u7684\u914d\u7f6e\uff0c\u9488\u5bf9\u6240\u6709\u7684Dataset \u751f\u6548\uff0c\u4e0d\u652f\u6301\u4e0d\u540c\u7684Dataset\u7684\u4e0d\u540c\u7684\u4eb2\u548c\u6027\u914d\u7f6e\uff1b"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},2172:(e,n,i)=>{i.d(n,{I:()=>r,M:()=>d});var s=i(1504);const o={},l=s.createContext(o);function d(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);
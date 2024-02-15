"use strict";(self.webpackChunkmy_doc_website=self.webpackChunkmy_doc_website||[]).push([[2e3],{2988:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>o,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var l=s(7624),i=s(2172);const t={sidebar_label:"Fluid\u5feb\u901f\u4e0a\u624b",sidebar_position:3},d="Fluid \u5feb\u901f\u4e0a\u624b",a={id:"getting-started/get_started",title:"Fluid \u5feb\u901f\u4e0a\u624b",description:"\u672c\u6587\u6863\u4ecb\u7ecd\u4e86\u5982\u4f55\u521b\u5efa\u6216\u4f7f\u7528 Kubernetes \u96c6\u7fa4\u73af\u5883\uff0c\u901a\u8fc7 Helm \u5b8c\u6210 Fluid \u5b89\u88c5\u90e8\u7f72\uff0c\u5e76\u4f7f\u7528 Fluid \u521b\u5efa\u6570\u636e\u96c6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/get_started.md",sourceDirName:"getting-started",slug:"/getting-started/get_started",permalink:"/my-doc-website/zh/docs/getting-started/get_started",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/get_started.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Fluid\u5feb\u901f\u4e0a\u624b",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5Fluid",permalink:"/my-doc-website/zh/docs/getting-started/install"},next:{title:"Fluid\u7b80\u4ecb",permalink:"/my-doc-website/zh/docs/core-concepts/introduction"}},r={},c=[{value:"\u524d\u7f6e\u9700\u6c42",id:"\u524d\u7f6e\u9700\u6c42",level:2},{value:"\u5b89\u88c5Fluid",id:"\u5b89\u88c5fluid",level:2},{value:"\u521b\u5efadataset",id:"\u521b\u5efadataset",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"fluid-\u5feb\u901f\u4e0a\u624b",children:"Fluid \u5feb\u901f\u4e0a\u624b"}),"\n",(0,l.jsx)(n.p,{children:"\u672c\u6587\u6863\u4ecb\u7ecd\u4e86\u5982\u4f55\u521b\u5efa\u6216\u4f7f\u7528 Kubernetes \u96c6\u7fa4\u73af\u5883\uff0c\u901a\u8fc7 Helm \u5b8c\u6210 Fluid \u5b89\u88c5\u90e8\u7f72\uff0c\u5e76\u4f7f\u7528 Fluid \u521b\u5efa\u6570\u636e\u96c6\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u524d\u7f6e\u9700\u6c42",children:"\u524d\u7f6e\u9700\u6c42"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Kubernetes cluster >= v1.14"}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u4f60\u76ee\u524d\u6ca1\u6709\u6ee1\u8db3\u6761\u4ef6\u7684 Kubernetes \u73af\u5883, \u90a3\u4e48\u6211\u4eec\u63a8\u8350\u4f60\u9009\u62e9\u5b98\u65b9\u8ba4\u8bc1\u7684 Kubernetes \u4e91\u670d\u52a1, \u901a\u5e38\u60c5\u51b5\u4e0b, \u4f60\u4ec5\u9700\u5be5\u5be5\u51e0\u6b65\u5373\u53ef\u5feb\u901f\u83b7\u5f97\u4e00\u4e2a\u4e13\u5c5e\u7684 Kubernetes \u73af\u5883, \u4ee5\u4e0b\u5217\u51fa\u4e86\u90e8\u5206\u7ecf\u8fc7\u8ba4\u8bc1\u7684 Kubernetes \u4e91\u670d\u52a1:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://www.aliyun.com/product/kubernetes",children:"\u963f\u91cc\u4e91\u5bb9\u5668\u670d\u52a1"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://aws.amazon.com/eks/",children:"Amazon Elastic Kubernetes Service"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/aks/tutorial-kubernetes-deploy-cluster",children:"Azure Kubernetes Service"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://cloud.google.com/kubernetes-engine/",children:"Google Kubernetes Engine"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u6ce8\u610f: \u8003\u8651\u5230 Minikube \u529f\u80fd\u7684\u5c40\u9650\u6027,\u6211\u4eec\u4e0d\u63a8\u8350\u4f7f\u7528 Minikube \u8fdb\u884c\u63a5\u4e0b\u6765\u7684\u6b65\u9aa4"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Kubectl 1.14+"}),"\n",(0,l.jsx)(n.p,{children:"\u8bf7\u786e\u4fddKubectl\u5df2\u7ecf\u6b63\u786e\u914d\u7f6e\u4f7f\u5176\u80fd\u591f\u4e0e\u4f60\u7684Kubernetes\u73af\u5883\u8fdb\u884c\u4ea4\u4e92"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://helm.sh/docs/intro/install/",children:"Helm 3"})}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u63a5\u4e0b\u6765\u7684\u6b65\u9aa4\u4e2d, \u5c06\u4f7f\u7528Helm 3\u8fdb\u884c Fluid \u7684\u5feb\u901f\u5b89\u88c5"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5b89\u88c5fluid",children:"\u5b89\u88c5Fluid"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u521b\u5efa\u547d\u540d\u7a7a\u95f4"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl create ns fluid-system\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4e3a\u60a8\u672c\u5730Helm\u4ed3\u5e93\u6dfb\u52a0\u5e76\u4e14\u66f4\u65b0\u201cfluid\u201d\u6e90\u5230\u6700\u65b0\u7248\u672c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ helm repo add fluid https://fluid-cloudnative.github.io/charts\n$ helm repo update\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4f7f\u7528 Helm \u5b89\u88c5 Fluid"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ helm install fluid fluid/fluid\nNAME: fluid\nLAST DEPLOYED: Tue Jul  7 11:22:07 2020\nNAMESPACE: default\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u67e5\u770bFluid\u7684\u8fd0\u884c\u72b6\u6001"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl get po -n fluid-system\nNAME                                         READY   STATUS    RESTARTS   AGE\nalluxioruntime-controller-64948b68c9-zzsx2   1/1     Running   0          108s\ncsi-nodeplugin-fluid-2mfcr                   2/2     Running   0          108s\ncsi-nodeplugin-fluid-l7lv6                   2/2     Running   0          108s\ndataset-controller-5465c4bbf9-5ds5p          1/1     Running   0          108s\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u521b\u5efadataset",children:"\u521b\u5efadataset"}),"\n",(0,l.jsxs)(n.p,{children:["Fluid\u63d0\u4f9b\u4e86\u4e91\u539f\u751f\u7684\u6570\u636e\u52a0\u901f\u548c\u7ba1\u7406\u80fd\u529b\uff0c\u5e76\u62bd\u8c61\u51fa\u4e86",(0,l.jsx)(n.code,{children:"\u6570\u636e\u96c6(Dataset)"}),"\u6982\u5ff5\u65b9\u4fbf\u7528\u6237\u7ba1\u7406\uff0c\u63a5\u4e0b\u6765\u5c06\u6f14\u793a\u5982\u4f55\u7528 Fluid \u521b\u5efa\u4e00\u4e2a\u6570\u636e\u96c6\u3002"]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u521b\u5efa\u4e00\u4e2aDataset CRD\u5bf9\u8c61\uff0c\u5176\u4e2d\u63cf\u8ff0\u4e86\u6570\u636e\u96c6\u7684\u6765\u6e90\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ cat<<EOF >dataset.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: demo\nspec:\n  mounts:\n    - mountPoint: https://mirrors.bit.edu.cn/apache/spark/\n      name: spark\nEOF\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u6267\u884c\u5b89\u88c5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"$ kubectl create -f dataset.yaml\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u521b\u5efa ",(0,l.jsx)(n.code,{children:"AlluxioRuntime"})," CRD\u5bf9\u8c61\uff0c\u7528\u6765\u63cf\u8ff0\u652f\u6301\u8fd9\u4e2a\u6570\u636e\u96c6\u7684 Runtime, \u5728\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528",(0,l.jsx)(n.a,{href:"https://www.alluxio.io/",children:"Alluxio"}),"\u4f5c\u4e3a\u5176Runtime"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:'$ cat<<EOF >runtime.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: AlluxioRuntime\nmetadata:\n  name: demo\nspec:\n  replicas: 1\n  tieredstore:\n    levels:\n      - mediumtype: MEM\n        path: /dev/shm\n        quota: 2Gi\n        high: "0.95"\n        low: "0.7"\nEOF\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u4f7f\u7528",(0,l.jsx)(n.code,{children:"kubectl"}),"\u5b8c\u6210\u521b\u5efa"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl create -f runtime.yaml  \n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u5e94\u7528\u5bb9\u5668\u6765\u4f7f\u7528\u8be5\u6570\u636e\u96c6\uff0c\u6211\u4eec\u5c06\u591a\u6b21\u8bbf\u95ee\u540c\u4e00\u6570\u636e\uff0c\u5e76\u6bd4\u8f83\u8bbf\u95ee\u65f6\u95f4\u6765\u5c55\u793a Fluid \u7684\u52a0\u901f\u6548\u679c\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ cat<<EOF >app.yaml\napiVersion: v1\nkind: Pod\nmetadata:\n  name: demo-app\nspec:\n  containers:\n    - name: demo\n      image: nginx\n      volumeMounts:\n        - mountPath: /data\n          name: demo\n  volumes:\n    - name: demo\n      persistentVolumeClaim:\n        claimName: demo\nEOF\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u4f7f\u7528",(0,l.jsx)(n.code,{children:"kubectl"}),"\u5b8c\u6210\u521b\u5efa"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl create -f app.yaml  \n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u767b\u5f55\u5230\u5e94\u7528\u5bb9\u5668\u4e2d\u8bbf\u95ee\u6570\u636e\uff0c\u521d\u6b21\u8bbf\u95ee\u4f1a\u82b1\u8d39\u66f4\u957f\u65f6\u95f4\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl exec -it demo-app -- bash\n$ du -sh /data/spark/spark-3.0.1/spark-3.0.1-bin-without-hadoop.tgz\n150M\t/data/spark/spark-3.0.1/spark-3.0.1-bin-without-hadoop.tgz\n$ time cp /data/spark/spark-3.0.1/spark-3.0.1-bin-without-hadoop.tgz /dev/null\nreal\t0m13.171s\nuser\t0m0.002s\nsys\t0m0.028s\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u4e3a\u4e86\u907f\u514d\u5176\u4ed6\u56e0\u7d20(\u6bd4\u5982 page cache )\u5bf9\u7ed3\u679c\u9020\u6210\u5f71\u54cd\uff0c\u6211\u4eec\u5c06\u5220\u9664\u4e4b\u524d\u7684\u5bb9\u5668\uff0c\u65b0\u5efa\u76f8\u540c\u7684\u5e94\u7528\uff0c\u5c1d\u8bd5\u8bbf\u95ee\u540c\u6837\u7684\u6587\u4ef6\u3002\u7531\u4e8e\u6b64\u65f6\u6587\u4ef6\u5df2\u7ecf\u88ab ",(0,l.jsx)(n.code,{children:"Alluxio"})," \u7f13\u5b58\uff0c\u53ef\u4ee5\u770b\u5230\u7b2c\u4e8c\u6b21\u8bbf\u95ee\u6240\u9700\u65f6\u95f4\u8fdc\u5c0f\u4e8e\u7b2c\u4e00\u6b21\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl delete -f app.yaml && kubectl create -f app.yaml\n$ kubectl exec -it demo-app -- bash\n$ time cp /data/spark/spark-3.0.1/spark-3.0.1-bin-without-hadoop.tgz /dev/null\nreal\t0m0.034s\nuser\t0m0.001s\nsys\t0m0.032s\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u5230\u8fd9\u91cc\uff0c\u6211\u4eec\u7b80\u5355\u5730\u521b\u5efa\u4e86\u4e00\u4e2a\u6570\u636e\u96c6\u5e76\u5b9e\u73b0\u4e86\u6570\u636e\u96c6\u7684\u62bd\u8c61\u7ba1\u7406\u4e0e\u52a0\u901f, \u66f4\u591a\u6709\u5173 Fluid \u7684\u66f4\u8be6\u7ec6\u7684\u4fe1\u606f, \u8bf7\u53c2\u8003\u4ee5\u4e0b\u793a\u4f8b\u6587\u6863:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"../samples/accelerate_data_accessing.md",children:"\u8fdc\u7a0b\u6587\u4ef6\u8bbf\u95ee\u52a0\u901f"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"../samples/data_co_locality.md",children:"\u6570\u636e\u7f13\u5b58\u4eb2\u548c\u6027\u8c03\u5ea6"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"../samples/machinelearning.md",children:"\u7528Fluid\u52a0\u901f\u673a\u5668\u5b66\u4e60\u8bad\u7ec3"})}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},2172:(e,n,s)=>{s.d(n,{I:()=>a,M:()=>d});var l=s(1504);const i={},t=l.createContext(i);function d(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);
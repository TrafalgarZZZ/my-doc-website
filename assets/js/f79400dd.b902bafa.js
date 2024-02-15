"use strict";(self.webpackChunkmy_doc_website=self.webpackChunkmy_doc_website||[]).push([[3936],{1784:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>o});var s=a(7624),t=a(2172);const c={},r="Demo - Access Dataset cache across Namespace (Sidecar mechanism)",i={id:"user-manual/data-sharing/dataset_across_namespace_with_sidecar",title:"Demo - Access Dataset cache across Namespace (Sidecar mechanism)",description:"This demo is used to show how to use a Dataset cache across Namespace.",source:"@site/docs/user-manual/data-sharing/dataset_across_namespace_with_sidecar.md",sourceDirName:"user-manual/data-sharing",slug:"/user-manual/data-sharing/dataset_across_namespace_with_sidecar",permalink:"/my-doc-website/docs/user-manual/data-sharing/dataset_across_namespace_with_sidecar",draft:!1,unlisted:!1,editUrl:"https://github.com/TrafalgarZZZ/my-doc-website/tree/master/docs/user-manual/data-sharing/dataset_across_namespace_with_sidecar.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Demo - Access Dataset cache across Namespace (CSI mechanism)",permalink:"/my-doc-website/docs/user-manual/data-sharing/dataset_across_namespace_with_csi"},next:{title:"Cache Co-locality for Workload Scheduling",permalink:"/my-doc-website/docs/user-manual/scheduling/data_co_locality"}},d={},o=[{value:"Prerequests",id:"prerequests",level:2},{value:"Share Dataset cache across Namespace through CSI mechanism",id:"share-dataset-cache-across-namespace-through-csi-mechanism",level:2},{value:"1. Create Dataset and Cache Runtime",id:"1-create-dataset-and-cache-runtime",level:3},{value:"2. Create referenced Dataset and Runtime",id:"2-create-referenced-dataset-and-runtime",level:3},{value:"Create Pod and Check the data",id:"create-pod-and-check-the-data",level:3},{value:"Known Issues",id:"known-issues",level:3}];function l(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"demo---access-dataset-cache-across-namespace-sidecar-mechanism",children:"Demo - Access Dataset cache across Namespace (Sidecar mechanism)"}),"\n",(0,s.jsx)(n.p,{children:"This demo is used to show how to use a Dataset cache across Namespace."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In Namespace ",(0,s.jsx)(n.code,{children:"ns-a"}),", create Dataset ",(0,s.jsx)(n.code,{children:"demo"})," and AlluxioRuntime ",(0,s.jsx)(n.code,{children:"demo"})]}),"\n",(0,s.jsxs)(n.li,{children:["In Namespace ",(0,s.jsx)(n.code,{children:"ns-b"})," create Dataset ",(0,s.jsx)(n.code,{children:"demo-ref"}),". The mountPoint of ",(0,s.jsx)(n.code,{children:"demo-ref"})," is ",(0,s.jsx)(n.code,{children:"dataset://ns-a/demo"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"prerequests",children:"Prerequests"}),"\n",(0,s.jsxs)(n.p,{children:["Before running this demo, please refer to the ",(0,s.jsx)(n.a,{href:"../userguide/install.md",children:"installation documentation"})," to complete the installation and check that the components of Fluid are working properly:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pod -n fluid-system\nalluxioruntime-controller-5b64fdbbb-84pc6   1/1     Running   0          8h\ncsi-nodeplugin-fluid-fwgjh                  2/2     Running   0          8h\ncsi-nodeplugin-fluid-ll8bq                  2/2     Running   0          8h\ndataset-controller-5b7848dbbb-n44dj         1/1     Running   0          8h\nthinruntime-controller-7dcbf5f45-xsf4p          1/1     Running   0          8h\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Where ",(0,s.jsx)(n.code,{children:"thinruntime-controller"})," is used to support Dataset sharing across Namespace and ",(0,s.jsx)(n.code,{children:"alluxioruntime-controller"})," is the actual cache."]}),"\n",(0,s.jsx)(n.h2,{id:"share-dataset-cache-across-namespace-through-csi-mechanism",children:"Share Dataset cache across Namespace through CSI mechanism"}),"\n",(0,s.jsx)(n.h3,{id:"1-create-dataset-and-cache-runtime",children:"1. Create Dataset and Cache Runtime"}),"\n",(0,s.jsxs)(n.p,{children:["In default Namespace\uff0ccreate ",(0,s.jsx)(n.code,{children:"phy"})," Dataset and AlluxioRuntime."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'$ cat<<EOF >ds.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: phy\nspec:\n  mounts:\n    - mountPoint: https://mirrors.bit.edu.cn/apache/spark/\n      name: spark\n---\napiVersion: data.fluid.io/v1alpha1\nkind: AlluxioRuntime\nmetadata:\n  name: phy\nspec:\n  replicas: 1\n  tieredstore:\n    levels:\n      - mediumtype: MEM\n        path: /dev/shm\n        quota: 1Gi\n        high: "0.95"\n        low: "0.7"\nEOF\n\n$ kubectl create -f ds.yaml\n'})}),"\n",(0,s.jsx)(n.h3,{id:"2-create-referenced-dataset-and-runtime",children:"2. Create referenced Dataset and Runtime"}),"\n",(0,s.jsxs)(n.p,{children:["In Namespace ",(0,s.jsx)(n.code,{children:"ref"}),", create:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["the referenced dataset ",(0,s.jsx)(n.code,{children:"refdemo"}),", whose mountPoint format is ",(0,s.jsx)(n.code,{children:"dataset://${origin-dataset-namespace}/${origin-dataset-name}"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["ThinRuntime ",(0,s.jsx)(n.code,{children:"refdemo"}),", and its Spec fields don't need to be filled."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Note:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Currently, the referenced Dataset only supports single mount and its form must be ",(0,s.jsx)(n.code,{children:"dataset://"})," (i.e. the creation of a dataset fails when ",(0,s.jsx)(n.code,{children:"dataset://"})," and other forms both appear), and other fields in the Spec are invalid."]}),"\n",(0,s.jsx)(n.li,{children:"The fields in Spec of the referenced Runtime corresponding to the Dataset are invalid."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'$ kubectl create ns ref\n\n$ cat<<EOF >ds-ref.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: refdemo\nspec:\n  mounts:\n    - mountPoint: dataset://default/phy\n      name: fusedemo\n      path: "/"\nEOF\n\n$ kubectl create -f ds-ref.yaml -n ref\n'})}),"\n",(0,s.jsx)(n.h3,{id:"create-pod-and-check-the-data",children:"Create Pod and Check the data"}),"\n",(0,s.jsxs)(n.p,{children:["In Namespace ",(0,s.jsx)(n.code,{children:"ref"}),", create a Pod\uff1a",(0,s.jsx)(n.br,{}),"\n","Need to enable serverless injection, set pod tag ",(0,s.jsx)(n.code,{children:"serverless.fluid.io/inject=true"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'$ cat<<EOF >app-ref.yaml\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\n  labels:\n    serverless.fluid.io/inject: "true"\nspec:\n  containers:\n    - name: nginx\n      image: nginx\n      volumeMounts:\n        - mountPath: /data_spark\n          name: spark-vol\n  volumes:\n    - name: spark-vol\n      persistentVolumeClaim:\n        claimName: refdemo\nEOF\n\n$ kubectl create -f app-ref.yaml -n ref\n'})}),"\n",(0,s.jsx)(n.p,{children:"In default Namespace, check the Pod information."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Only one AlluxioRuntime cluster exists, i.e. there is only one cache."}),"\n",(0,s.jsx)(n.li,{children:"The sidecar mechanism is used, so there is no fuse pod."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pods -o wide\nNAME             READY   STATUS    RESTARTS   AGE     IP              NODE      NOMINATED NODE   READINESS GATES\nphy-master-0     2/2     Running   0          7m2s    172.16.1.10     work02    <none>           <none>\nphy-worker-0     2/2     Running   0          6m29s   172.16.1.10     work02    <none>           <none>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In Namespace ",(0,s.jsx)(n.code,{children:"ref"}),", check the status of the app nginx pod."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pods -n ref -o wide\nNAME         READY   STATUS    RESTARTS   AGE   IP              NODE      NOMINATED NODE   READINESS GATES\nnginx        1/1     Running   0          11m   10.233.109.66   work02    <none>           <none>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Check the yaml of the app nginx pod under the ",(0,s.jsx)(n.code,{children:"ref"})," namespace and you can see that the ",(0,s.jsx)(n.code,{children:"fuse"})," container is injected."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pods nginx -n ref -o yaml\n...\nspec:\n  containers:\n    - image: fluidcloudnative/alluxio-fuse:release-2.8.1-SNAPSHOT-0433ade\n      ...\n    - image: nginx\n...\n"})}),"\n",(0,s.jsx)(n.h3,{id:"known-issues",children:"Known Issues"}),"\n",(0,s.jsxs)(n.p,{children:["For the Fuse Sidecar scenario, some ConfigMap is created under the referenced namespace (",(0,s.jsx)(n.code,{children:"ref"}),")."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"NAME                                    DATA   AGE\ncheck-fluid-mount-ready                 1      6d14h\nphy-config                              7      6d15h\nrefdemo-fuse.alluxio-fuse-check-mount   1      6d14h\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"check-fluid-mount-ready"})," is shared by all Datasets under that namespace."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"refdemo-fuse.alluxio-fuse-check-mount"})," is generated based on the Dataset name and Runtime type."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"phy-config"})," is the ConfigMap required by AlluxioRuntime's Fuse Container and is therefore copied from the ",(0,s.jsx)(n.code,{children:"default"})," namespace to the ",(0,s.jsx)(n.code,{children:"ref"})," namespace.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.strong,{children:["If a Dataset named ",(0,s.jsx)(n.code,{children:"phy"})," using AlluxioRuntime previously existed under the ",(0,s.jsx)(n.code,{children:"ref"})," namespace, then the use of the ",(0,s.jsx)(n.code,{children:"refdemo"})," Dataset will be wrong."]})}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},2172:(e,n,a)=>{a.d(n,{I:()=>i,M:()=>r});var s=a(1504);const t={},c=s.createContext(t);function r(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);
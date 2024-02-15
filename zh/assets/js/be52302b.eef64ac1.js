"use strict";(self.webpackChunkmy_doc_website=self.webpackChunkmy_doc_website||[]).push([[1816],{5496:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>o,frontMatter:()=>c,metadata:()=>d,toc:()=>r});var l=s(7624),a=s(2172);const c={},i="\u8fdc\u7a0bWeb\u6587\u4ef6\u8bbf\u95ee\u52a0\u901f",d={id:"user-manual/data-accelerate/accelerate_data_accessing",title:"\u8fdc\u7a0bWeb\u6587\u4ef6\u8bbf\u95ee\u52a0\u901f",description:"\u901a\u8fc7Alluxio\u548cFuse\uff0cFluid\u4e3a\u7528\u6237\u63d0\u4f9b\u4e86\u4e00\u79cd\u66f4\u4e3a\u7b80\u5355\u7684\u6587\u4ef6\u8bbf\u95ee\u63a5\u53e3\uff0c\u4f7f\u5f97\u4efb\u610f\u8fd0\u884c\u5728Kubernetes\u96c6\u7fa4\u4e0a\u7684\u7a0b\u5e8f\u80fd\u591f\u50cf\u8bbf\u95ee\u672c\u5730\u6587\u4ef6\u4e00\u6837\u8f7b\u677e\u8bbf\u95ee\u5b58\u50a8\u5728\u8fdc\u7a0b\u6587\u4ef6\u7cfb\u7edf\u4e2d\u7684\u6587\u4ef6\u3002\u66f4\u4e3a\u91cd\u8981\u7684\u662f\uff0cFluid\u501f\u52a9Alluxio\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u6587\u4ef6\u7f13\u5b58\u80fd\u529b\uff0c\u8fd9\u610f\u5473\u7740\u7528\u6237\u5728\u8bbf\u95ee\u8fdc\u7a0b\u6587\u4ef6\u65f6\uff0c\u5c24\u5176\u662f\u90a3\u4e9b\u5177\u6709\u8f83\u9ad8\u8bbf\u95ee\u9891\u7387\u7684\u8fdc\u7a0b\u6587\u4ef6\u65f6\uff0c\u7528\u6237\u53ef\u4ee5\u4eab\u53d7\u5230\u5927\u5e45\u5ea6\u7684\u6587\u4ef6\u8bbf\u95ee\u901f\u5ea6\u7684\u63d0\u5347\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/user-manual/data-accelerate/accelerate_data_accessing.md",sourceDirName:"user-manual/data-accelerate",slug:"/user-manual/data-accelerate/accelerate_data_accessing",permalink:"/my-doc-website/zh/docs/user-manual/data-accelerate/accelerate_data_accessing",draft:!1,unlisted:!1,editUrl:"https://github.com/TrafalgarZZZ/my-doc-website/tree/master/docs/user-manual/data-accelerate/accelerate_data_accessing.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Fluid\u6982\u5ff5\u4ecb\u7ecd",permalink:"/my-doc-website/zh/docs/core-concepts/concepts"},next:{title:"HDFS Client\u6587\u4ef6\u8bbf\u95ee\u52a0\u901f",permalink:"/my-doc-website/zh/docs/user-manual/data-accelerate/accelerate_data_accessing_by_hdfs"}},t={},r=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u65b0\u5efa\u5de5\u4f5c\u73af\u5883",id:"\u65b0\u5efa\u5de5\u4f5c\u73af\u5883",level:2},{value:"\u8fd0\u884c\u793a\u4f8b",id:"\u8fd0\u884c\u793a\u4f8b",level:2},{value:"\u8fdc\u7a0b\u6587\u4ef6\u8bbf\u95ee",id:"\u8fdc\u7a0b\u6587\u4ef6\u8bbf\u95ee",level:2},{value:"\u8fdc\u7a0b\u6587\u4ef6\u8bbf\u95ee\u52a0\u901f",id:"\u8fdc\u7a0b\u6587\u4ef6\u8bbf\u95ee\u52a0\u901f",level:2},{value:"\u73af\u5883\u6e05\u7406",id:"\u73af\u5883\u6e05\u7406",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"\u8fdc\u7a0bweb\u6587\u4ef6\u8bbf\u95ee\u52a0\u901f",children:"\u8fdc\u7a0bWeb\u6587\u4ef6\u8bbf\u95ee\u52a0\u901f"}),"\n",(0,l.jsxs)(n.p,{children:["\u901a\u8fc7",(0,l.jsx)(n.a,{href:"https://www.alluxio.io",children:"Alluxio"}),"\u548c",(0,l.jsx)(n.a,{href:"https://github.com/libfuse/libfuse",children:"Fuse"}),"\uff0cFluid\u4e3a\u7528\u6237\u63d0\u4f9b\u4e86\u4e00\u79cd\u66f4\u4e3a\u7b80\u5355\u7684\u6587\u4ef6\u8bbf\u95ee\u63a5\u53e3\uff0c\u4f7f\u5f97\u4efb\u610f\u8fd0\u884c\u5728Kubernetes\u96c6\u7fa4\u4e0a\u7684\u7a0b\u5e8f\u80fd\u591f\u50cf\u8bbf\u95ee\u672c\u5730\u6587\u4ef6\u4e00\u6837\u8f7b\u677e\u8bbf\u95ee\u5b58\u50a8\u5728\u8fdc\u7a0b\u6587\u4ef6\u7cfb\u7edf\u4e2d\u7684\u6587\u4ef6\u3002\u66f4\u4e3a\u91cd\u8981\u7684\u662f\uff0cFluid\u501f\u52a9Alluxio\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u6587\u4ef6\u7f13\u5b58\u80fd\u529b\uff0c\u8fd9\u610f\u5473\u7740\u7528\u6237\u5728\u8bbf\u95ee\u8fdc\u7a0b\u6587\u4ef6\u65f6\uff0c\u5c24\u5176\u662f\u90a3\u4e9b\u5177\u6709\u8f83\u9ad8\u8bbf\u95ee\u9891\u7387\u7684\u8fdc\u7a0b\u6587\u4ef6\u65f6\uff0c\u7528\u6237\u53ef\u4ee5\u4eab\u53d7\u5230\u5927\u5e45\u5ea6\u7684\u6587\u4ef6\u8bbf\u95ee\u901f\u5ea6\u7684\u63d0\u5347\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u672c\u6587\u6863\u901a\u8fc7\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\u6f14\u793a\u4e86\u4e0a\u8ff0\u529f\u80fd\u7279\u6027"}),"\n",(0,l.jsx)(n.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u8fd0\u884c\u8be5\u793a\u4f8b\u4e4b\u524d\uff0c\u8bf7\u53c2\u8003",(0,l.jsx)(n.a,{href:"../userguide/install.md",children:"\u5b89\u88c5\u6587\u6863"}),"\u5b8c\u6210\u5b89\u88c5\uff0c\u5e76\u68c0\u67e5Fluid\u5404\u7ec4\u4ef6\u6b63\u5e38\u8fd0\u884c\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pod -n fluid-system\nNAME                                  READY   STATUS    RESTARTS   AGE\nalluxioruntime-controller-5b64fdbbb-84pc6   1/1     Running   0          8h\ncsi-nodeplugin-fluid-fwgjh                  2/2     Running   0          8h\ncsi-nodeplugin-fluid-ll8bq                  2/2     Running   0          8h\ndataset-controller-5b7848dbbb-n44dj         1/1     Running   0          8h\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u901a\u5e38\u6765\u8bf4\uff0c\u4f60\u4f1a\u770b\u5230\u4e00\u4e2a\u540d\u4e3a",(0,l.jsx)(n.code,{children:"controller-manager"}),"\u7684Pod\u548c\u591a\u4e2a\u540d\u4e3a",(0,l.jsx)(n.code,{children:"csi-nodeplugin"}),"\u7684Pod\u6b63\u5728\u8fd0\u884c\u3002\u5176\u4e2d\uff0c",(0,l.jsx)(n.code,{children:"csi-nodeplugin"}),"\u8fd9\u4e9bPod\u7684\u6570\u91cf\u53d6\u51b3\u4e8e\u4f60\u7684Kubernetes\u96c6\u7fa4\u4e2d\u7ed3\u70b9\u7684\u6570\u91cf\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u65b0\u5efa\u5de5\u4f5c\u73af\u5883",children:"\u65b0\u5efa\u5de5\u4f5c\u73af\u5883"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ mkdir <any-path>/accelerate\n$ cd <any-path>/accelerate\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u8fd0\u884c\u793a\u4f8b",children:"\u8fd0\u884c\u793a\u4f8b"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u67e5\u770b\u5f85\u521b\u5efa\u7684Dataset\u8d44\u6e90\u5bf9\u8c61"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ cat<<EOF >dataset.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: hbase\nspec:\n  mounts:\n    - mountPoint: https://mirrors.tuna.tsinghua.edu.cn/apache/hbase/stable/\n      name: hbase\nEOF\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u4e0a\u8ff0",(0,l.jsx)(n.code,{children:"mountPoint"}),"\u7684\u94fe\u63a5\u4e3aHbase\u955c\u50cf\u6e90\uff0c\u70b9\u5f00\u8be5\u94fe\u63a5\u540e\uff0c\u4f60\u5e94\u8be5\u53ef\u4ee5\u770b\u5230Hbase\u76f8\u5173\u7684\u90e8\u5206\u6570\u636e\u6587\u4ef6\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CHANGES.md                           2022-10-14 03:12  136K  \nRELEASENOTES.md                      2022-10-14 03:12  1.0M  \napi_compare_2.4.14_to_2.4.15RC0.html 2022-10-14 03:12   20K  \nhbase-2.4.15-bin.tar.gz              2022-10-14 03:12  271M  \nhbase-2.4.15-client-bin.tar.gz       2022-10-14 03:12  260M  \nhbase-2.4.15-src.tar.gz              2022-10-14 03:12   35M  \n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u672c\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u4f1a\u4f7f\u7528Alluxio\u7684WebUFS\u529f\u80fd\u8bbf\u95ee\u4e0a\u8ff0\u6587\u4ef6\u3002"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u6ce8\u610f: \u4e0a\u8ff0",(0,l.jsx)(n.code,{children:"mountPoint"}),"\u4e2d\u4f7f\u7528\u4e86Apache\u6e05\u534e\u955c\u50cf\u6e90\u8fdb\u884c\u6f14\u793a\uff0c\u5982\u679c\u5f53\u524d\u7684\u955c\u50cf\u6e90\u5931\u6548\u4e86\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u8be5\u955c\u50cf\u6e90\u7ad9\u70b9\u4e0bHbase\u7684",(0,l.jsx)(n.a,{href:"https://mirrors.tuna.tsinghua.edu.cn/apache/hbase/",children:"\u5176\u4ed6\u7248\u672c"}),"\u8fdb\u884c\u5c1d\u8bd5\uff0c\u6216\u8005\u4f60\u53ef\u4ee5\u5c1d\u8bd5\u5176\u4ed6\u7684\u955c\u50cf\u6e90(e.g. ",(0,l.jsx)(n.a,{href:"http://mirrors.ustc.edu.cn/apache/hbase/stable/",children:"\u4e2d\u79d1\u5927\u955c\u50cf\u6e90"}),")\u3002\u5982\u679c\u4f60\u7684\u73af\u5883\u4f4d\u4e8e\u6d77\u5916\uff0c\u8bf7\u66f4\u6362\u4e3a",(0,l.jsx)(n.code,{children:"https://downloads.apache.org/hbase/stable/"}),"\u8fdb\u884c\u5c1d\u8bd5"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u5c06\u8981\u521b\u5efa\u4e00\u4e2akind\u4e3a",(0,l.jsx)(n.code,{children:"Dataset"}),"\u7684\u8d44\u6e90\u5bf9\u8c61(Resource object)\u3002",(0,l.jsx)(n.code,{children:"Dataset"}),"\u662fFluid\u6240\u5b9a\u4e49\u7684\u4e00\u4e2aCustom Resource Definition(CRD)\uff0c\u8be5CRD\u88ab\u7528\u6765\u544a\u77e5Fluid\u5728\u54ea\u91cc\u53ef\u4ee5\u627e\u5230\u4f60\u6240\u9700\u8981\u7684\u6570\u636e\u3002Fluid\u5c06\u8be5CRD\u5bf9\u8c61\u4e2d\u5b9a\u4e49\u7684",(0,l.jsx)(n.code,{children:"mountPoint"}),"\u5c5e\u6027\u6302\u8f7d\u5230Alluxio\u4e4b\u4e0a\uff0c\u56e0\u6b64\u8be5\u5c5e\u6027\u53ef\u4ee5\u662f\u4efb\u4f55\u5408\u6cd5\u7684\u80fd\u591f\u88abAlluxio\u8bc6\u522b\u7684UFS\u5730\u5740\u3002\u5728\u672c\u793a\u4f8b\u4e2d\uff0c\u4e3a\u4e86\u7b80\u5355\uff0c\u6211\u4eec\u4f7f\u7528",(0,l.jsx)(n.a,{href:"https://docs.alluxio.io/os/user/stable/cn/ufs/WEB.html",children:"WebUFS"}),"\u8fdb\u884c\u6f14\u793a\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u66f4\u591a\u6709\u5173UFS\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003",(0,l.jsx)(n.a,{href:"https://docs.alluxio.io/os/user/stable/cn/ufs/OSS.html",children:"Alluxio\u6587\u6863-\u5e95\u5c42\u5b58\u50a8\u7cfb\u7edf"}),"\u90e8\u5206\u3002"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u672c\u793a\u4f8b\u5c06\u4ee5Apache\u955c\u50cf\u7ad9\u70b9\u4e0a\u7684Hbase v2.25\u76f8\u5173\u8d44\u6e90\u4f5c\u4e3a\u6f14\u793a\u4e2d\u4f7f\u7528\u7684\u8fdc\u7a0b\u6587\u4ef6\uff0c\u4e3b\u8981\u5305\u62ec\u4e00\u4e9bHbase\u7684\u4e00\u4e9b\u4e8c\u8fdb\u5236\u6587\u4ef6\u548c\u6587\u6863\u3002\u8fd9\u4e2a\u9009\u62e9\u5e76\u6ca1\u6709\u4efb\u4f55\u7279\u6b8a\u4e4b\u5904\uff0c\u4f60\u53ef\u4ee5\u5c06\u8fd9\u4e2a\u8fdc\u7a0b\u6587\u4ef6\u4fee\u6539\u4e3a\u4efb\u610f\u4f60\u559c\u6b22\u7684\u8fdc\u7a0b\u6587\u4ef6\u3002\u4f46\u662f\uff0c\u5982\u679c\u4f60\u60f3\u8981\u548c\u6211\u4eec\u4e00\u6837\u4f7f\u7528WebUFS\u8fdb\u884c\u64cd\u4f5c\u7684\u8bdd\uff0c\u6700\u597d\u8fd8\u662f\u9009\u62e9\u4e00\u4e2aApache\u955c\u50cf\u6e90\u7ad9\u70b9( e.g. ",(0,l.jsx)(n.a,{href:"https://mirrors.tuna.tsinghua.edu.cn/apache",children:"\u6e05\u534e\u955c\u50cf\u6e90"})," )\uff0c\u56e0\u4e3a\u6839\u636e\u76ee\u524dWebUFS\u7684\u5b9e\u73b0\uff0c\u5982\u679c\u4f60\u9009\u62e9\u5176\u4ed6\u66f4\u52a0\u590d\u6742\u7684\u7f51\u9875\u4f5c\u4e3aWebUFS\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u8fdb\u884c\u66f4\u591a",(0,l.jsx)(n.a,{href:"https://docs.alluxio.io/os/user/stable/cn/ufs/WEB.html#%E9%85%8D%E7%BD%AEalluxio",children:"\u66f4\u590d\u6742\u7684\u914d\u7f6e"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u521b\u5efaDataset\u8d44\u6e90\u5bf9\u8c61"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl create -f dataset.yaml\ndataset.data.fluid.io/hbase created\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u67e5\u770bDataset\u8d44\u6e90\u5bf9\u8c61\u72b6\u6001"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl get dataset hbase\nNAME    UFS TOTAL SIZE   CACHED   CACHE CAPACITY   CACHED PERCENTAGE   PHASE      AGE\nhbase                                                                  NotBound   13s\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u4e0a\u6240\u793a\uff0c",(0,l.jsx)(n.code,{children:"status"}),"\u4e2d\u7684",(0,l.jsx)(n.code,{children:"phase"}),"\u5c5e\u6027\u503c\u4e3a",(0,l.jsx)(n.code,{children:"NotBound"}),"\uff0c\u8fd9\u610f\u5473\u7740\u8be5",(0,l.jsx)(n.code,{children:"Dataset"}),"\u8d44\u6e90\u5bf9\u8c61\u76ee\u524d\u8fd8\u672a\u4e0e\u4efb\u4f55",(0,l.jsx)(n.code,{children:"AlluxioRuntime"}),"\u8d44\u6e90\u5bf9\u8c61\u7ed1\u5b9a\uff0c\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u521b\u5efa\u4e00\u4e2a",(0,l.jsx)(n.code,{children:"AlluxioRuntime"}),"\u8d44\u6e90\u5bf9\u8c61\u3002"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u67e5\u770b\u5f85\u521b\u5efa\u7684AlluxioRuntime\u8d44\u6e90\u5bf9\u8c61"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'$ cat<<EOF >runtime.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: AlluxioRuntime\nmetadata:\n  name: hbase\nspec:\n  replicas: 2\n  tieredstore:\n    levels:\n      - mediumtype: MEM\n        path: /dev/shm\n        quota: 2Gi\n        high: "0.95"\n        low: "0.7"\nEOF\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u521b\u5efaAlluxioRuntime\u8d44\u6e90\u5bf9\u8c61"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl create -f runtime.yaml\nalluxioruntime.data.fluid.io/hbase created\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u68c0\u67e5AlluxioRuntime\u8d44\u6e90\u5bf9\u8c61\u662f\u5426\u5df2\u7ecf\u521b\u5efa"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl get alluxioruntime\nNAME    AGE\nhbase   55s\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"AlluxioRuntime"}),"\u662f\u53e6\u4e00\u4e2aFluid\u5b9a\u4e49\u7684CRD\u3002\u4e00\u4e2a",(0,l.jsx)(n.code,{children:"AlluxioRuntime"}),"\u8d44\u6e90\u5bf9\u8c61\u63cf\u8ff0\u4e86\u5728Kubernetes\u96c6\u7fa4\u4e2d\u8fd0\u884c\u4e00\u4e2aAlluxio\u5b9e\u4f8b\u6240\u9700\u8981\u7684\u914d\u7f6e\u4fe1\u606f\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u7b49\u5f85\u4e00\u6bb5\u65f6\u95f4\uff0c\u8ba9AlluxioRuntime\u8d44\u6e90\u5bf9\u8c61\u4e2d\u7684\u5404\u4e2a\u7ec4\u4ef6\u5f97\u4ee5\u987a\u5229\u542f\u52a8\uff0c\u4f60\u4f1a\u770b\u5230\u7c7b\u4f3c\u4ee5\u4e0b\u72b6\u6001\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pod\nNAME                 READY   STATUS    RESTARTS   AGE\nhbase-master-0       2/2     Running   0          62s\nhbase-worker-0       2/2     Running   0          27s\nhbase-worker-1       2/2     Running   0          27s\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u518d\u6b21\u67e5\u770bDataset\u8d44\u6e90\u5bf9\u8c61\u72b6\u6001"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl get dataset hbase\nNAME    UFS TOTAL SIZE   CACHED   CACHE CAPACITY   CACHED PERCENTAGE   PHASE   AGE\nhbase   443.5MiB         0B       4GiB             0%                  Bound   2m39s\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u56e0\u4e3a\u5df2\u7ecf\u4e0e\u4e00\u4e2a\u6210\u529f\u542f\u52a8\u7684AlluxioRuntime\u7ed1\u5b9a\uff0c\u8be5Dataset\u8d44\u6e90\u5bf9\u8c61\u7684\u72b6\u6001\u5f97\u5230\u4e86\u66f4\u65b0\uff0c\u6b64\u65f6",(0,l.jsx)(n.code,{children:"PHASE"}),"\u5c5e\u6027\u503c\u5df2\u7ecf\u53d8\u4e3a",(0,l.jsx)(n.code,{children:"Bound"}),"\u72b6\u6001\u3002\u901a\u8fc7\u4e0a\u8ff0\u547d\u4ee4\u53ef\u4ee5\u83b7\u77e5\u6709\u5173\u8d44\u6e90\u5bf9\u8c61\u7684\u57fa\u672c\u4fe1\u606f"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u67e5\u770bAlluxioRuntime\u72b6\u6001"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl get alluxioruntime hbase -o wide\nNAME    READY MASTERS   DESIRED MASTERS   MASTER PHASE   READY WORKERS   DESIRED WORKERS   WORKER PHASE   READY FUSES   DESIRED FUSES   FUSE PHASE   AGE\nhbase   1               1                 Ready          2               2                 Ready          0             0               Ready        2m50s\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"AlluxioRuntime"}),"\u8d44\u6e90\u5bf9\u8c61\u7684",(0,l.jsx)(n.code,{children:"status"}),"\u4e2d\u5305\u542b\u4e86\u66f4\u591a\u66f4\u8be6\u7ec6\u7684\u4fe1\u606f"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u67e5\u770b\u4e0e\u8fdc\u7a0b\u6587\u4ef6\u5173\u8054\u7684PersistentVolume\u4ee5\u53caPersistentVolumeClaim"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pv\nNAME    CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM           STORAGECLASS   REASON   AGE\nhbase   100Gi      RWX            Retain           Bound    default/hbase                           18m\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pvc\nNAME    STATUS   VOLUME   CAPACITY   ACCESS MODES   STORAGECLASS   AGE\nhbase   Bound    hbase    100Gi      RWX                           18m\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Dataset"}),"\u8d44\u6e90\u5bf9\u8c61\u51c6\u5907\u5b8c\u6210\u540e\uff08\u5373\u4e0eAlluxio\u5b9e\u4f8b\u7ed1\u5b9a\u540e\uff09\uff0c\u4e0e\u8be5\u8d44\u6e90\u5bf9\u8c61\u5173\u8054\u7684PV, PVC\u5df2\u7ecf\u7531Fluid\u751f\u6210\uff0c\u5e94\u7528\u53ef\u4ee5\u901a\u8fc7\u8be5PVC\u5b8c\u6210\u8fdc\u7a0b\u6587\u4ef6\u5728Pod\u4e2d\u7684\u6302\u8f7d\uff0c\u5e76\u901a\u8fc7\u6302\u8f7d\u76ee\u5f55\u5b9e\u73b0\u8fdc\u7a0b\u6587\u4ef6\u8bbf\u95ee"]}),"\n",(0,l.jsx)(n.h2,{id:"\u8fdc\u7a0b\u6587\u4ef6\u8bbf\u95ee",children:"\u8fdc\u7a0b\u6587\u4ef6\u8bbf\u95ee"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u67e5\u770b\u5f85\u521b\u5efa\u7684\u5e94\u7528"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ cat<<EOF >nginx.yaml\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\nspec:\n  containers:\n    - name: nginx\n      image: nginx\n      volumeMounts:\n        - mountPath: /data\n          name: hbase-vol\n  volumes:\n    - name: hbase-vol\n      persistentVolumeClaim:\n        claimName: hbase\nEOF\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u542f\u52a8\u5e94\u7528\u8fdb\u884c\u8fdc\u7a0b\u6587\u4ef6\u8bbf\u95ee"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl create -f nginx.yaml\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u767b\u5f55Nginx Pod:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl exec -it nginx -- bash\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u67e5\u770b\u8fdc\u7a0b\u6587\u4ef6\u6302\u8f7d\u60c5\u51b5\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ ls -1 /data/hbase\nCHANGES.md\nRELEASENOTES.md\napi_compare_2.2.5RC0_to_2.2.4.html\nhbase-2.2.5-bin.tar.gz\nhbase-2.2.5-client-bin.tar.gz\nhbase-2.2.5-src.tar.gz\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ du -h /data/hbase/*\n174K    /data/hbase/CHANGES.md\n106K    /data/hbase/RELEASENOTES.md\n115K    /data/hbase/api_compare_2.2.5RC0_to_2.2.4.html\n211M    /data/hbase/hbase-2.2.5-bin.tar.gz\n200M    /data/hbase/hbase-2.2.5-client-bin.tar.gz\n34M     /data/hbase/hbase-2.2.5-src.tar.gz\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u767b\u51faNginx Pod:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ exit\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u6b63\u5982\u4f60\u6240\u89c1\uff0cWebUFS\u4e0a\u6240\u5b58\u50a8\u7684\u5168\u90e8\u6587\u4ef6(\u4e5f\u5c31\u662fhbase v2.2.5\u7684\u76f8\u5173\u6587\u4ef6)\u53ef\u4ee5\u548c\u672c\u5730\u6587\u4ef6\u5b8c\u5168\u6ca1\u6709\u533a\u522b\u7684\u65b9\u5f0f\u5b58\u5728\u4e8e\u67d0\u4e2aPod\u4e2d\uff0c\u5e76\u4e14\u53ef\u4ee5\u88ab\u8be5Pod\u5341\u5206\u65b9\u4fbf\u5730\u8bbf\u95ee"}),"\n",(0,l.jsx)(n.h2,{id:"\u8fdc\u7a0b\u6587\u4ef6\u8bbf\u95ee\u52a0\u901f",children:"\u8fdc\u7a0b\u6587\u4ef6\u8bbf\u95ee\u52a0\u901f"}),"\n",(0,l.jsx)(n.p,{children:"\u4e3a\u4e86\u6f14\u793a\u5728\u8bbf\u95ee\u8fdc\u7a0b\u6587\u4ef6\u65f6\uff0c\u4f60\u80fd\u83b7\u5f97\u591a\u5927\u7684\u52a0\u901f\u6548\u679c\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u6d4b\u8bd5\u4f5c\u4e1a\u7684\u6837\u4f8b:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u67e5\u770b\u5f85\u521b\u5efa\u7684\u6d4b\u8bd5\u4f5c\u4e1a"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'$ cat<<EOF >app.yaml\napiVersion: batch/v1\nkind: Job\nmetadata:\n  name: fluid-copy-test\nspec:\n  template:\n    spec:\n      restartPolicy: OnFailure\n      containers:\n        - name: busybox\n          image: busybox\n          command: ["/bin/sh"]\n          args: ["-c", "set -x; time cp -r /data/hbase ./"]\n          volumeMounts:\n            - mountPath: /data\n              name: hbase-vol\n      volumes:\n        - name: hbase-vol\n          persistentVolumeClaim:\n            claimName: hbase\nEOF\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u542f\u52a8\u6d4b\u8bd5\u4f5c\u4e1a"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl create -f app.yaml\njob.batch/fluid-test created\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u8be5\u6d4b\u8bd5\u7a0b\u5e8f\u4f1a\u6267\u884c",(0,l.jsx)(n.code,{children:"time cp -r /data/hbase ./"}),"\u7684shell\u547d\u4ee4\uff0c\u5176\u4e2d",(0,l.jsx)(n.code,{children:"/data/hbase"}),"\u662f\u8fdc\u7a0b\u6587\u4ef6\u5728Pod\u4e2d\u6302\u8f7d\u7684\u4f4d\u7f6e\uff0c\u8be5\u547d\u4ee4\u5b8c\u6210\u540e\u4f1a\u5728\u7ec8\u7aef\u663e\u793a\u547d\u4ee4\u6267\u884c\u7684\u65f6\u957f\uff1a"]}),"\n",(0,l.jsx)(n.p,{children:"\u7b49\u5f85\u4e00\u6bb5\u65f6\u95f4,\u5f85\u8be5\u4f5c\u4e1a\u8fd0\u884c\u5b8c\u6210,\u4f5c\u4e1a\u7684\u8fd0\u884c\u72b6\u6001\u53ef\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pod\nNAME                    READY   STATUS      RESTARTS   AGE\nfluid-copy-test-h59w9   0/1     Completed   0          1m25s\n...\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u770b\u5230\u5982\u4e0a\u7ed3\u679c,\u5219\u8bf4\u660e\u8be5\u4f5c\u4e1a\u5df2\u7ecf\u8fd0\u884c\u5b8c\u6210"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u6ce8\u610f: ",(0,l.jsx)(n.code,{children:"fluid-copy-test-h59w9"}),"\u4e2d\u7684",(0,l.jsx)(n.code,{children:"h59w9"}),"\u4e3a\u4f5c\u4e1a\u751f\u6210\u7684\u6807\u8bc6,\u5728\u4f60\u7684\u73af\u5883\u4e2d,\u8fd9\u4e2a\u6807\u8bc6\u53ef\u80fd\u4e0d\u540c,\u63a5\u4e0b\u6765\u7684\u547d\u4ee4\u4e2d\u6d89\u53ca\u8be5\u6807\u8bc6\u7684\u5730\u65b9\u8bf7\u4ee5\u4f60\u7684\u73af\u5883\u4e3a\u51c6"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u67e5\u770b\u6d4b\u8bd5\u4f5c\u4e1a\u5b8c\u6210\u65f6\u95f4"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl logs fluid-copy-test-h59w9\n+ time cp -r /data/hbase ./\nreal  0m 41.21s\nuser  0m 0.00s\nsys   0m 1.35s\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u53ef\u89c1\uff0c\u7b2c\u4e00\u6b21\u8fdc\u7a0b\u6587\u4ef6\u7684\u8bfb\u53d6\u8017\u8d39\u4e86\u63a5\u8fd141s\u7684\u65f6\u95f4\u3002\u5f53\u7136\uff0c\u4f60\u53ef\u80fd\u4f1a\u89c9\u5f97\u8fd9\u5e76\u6ca1\u6709\u4f60\u9884\u671f\u7684\u90a3\u4e48\u5feb\uff0c\u4f46\u662f\uff1a"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u67e5\u770bDataset\u8d44\u6e90\u5bf9\u8c61\u72b6\u6001"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl get dataset hbase\nNAME    UFS TOTAL SIZE   CACHED     CACHE CAPACITY   CACHED PERCENTAGE   PHASE   AGE\nhbase   443.5MiB         443.5MiB   4GiB             100%                Bound   9m27s\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u73b0\u5728\uff0c\u6240\u6709\u8fdc\u7a0b\u6587\u4ef6\u90fd\u5df2\u7ecf\u88ab\u7f13\u5b58\u5728\u4e86Alluxio\u4e2d"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u518d\u6b21\u542f\u52a8\u6d4b\u8bd5\u4f5c\u4e1a"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl delete -f app.yaml\n$ kubectl create -f app.yaml\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u7531\u4e8e\u8fdc\u7a0b\u6587\u4ef6\u5df2\u7ecf\u88ab\u7f13\u5b58\uff0c\u6b64\u6b21\u6d4b\u8bd5\u4f5c\u4e1a\u80fd\u591f\u8fc5\u901f\u5b8c\u6210\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pod\nNAME                    READY   STATUS      RESTARTS   AGE\nfluid-copy-test-d9h2x   0/1     Completed   0          24s\n...\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl logs fluid-copy-test-d9h2x\n+ time cp -r /data/hbase ./\nreal  0m 0.40s\nuser  0m 0.00s\nsys   0m 1.27s\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u540c\u6837\u7684\u6587\u4ef6\u8bbf\u95ee\u64cd\u4f5c\u4ec5\u8017\u8d39\u4e860.4s"}),"\n",(0,l.jsx)(n.p,{children:"\u8fd9\u79cd\u5927\u5e45\u5ea6\u7684\u52a0\u901f\u6548\u679c\u5f52\u56e0\u4e8eAlluxio\u6240\u63d0\u4f9b\u7684\u5f3a\u5927\u7684\u7f13\u5b58\u80fd\u529b\uff0c\u8fd9\u79cd\u7f13\u5b58\u80fd\u529b\u610f\u5473\u7740\uff0c\u53ea\u8981\u4f60\u8bbf\u95ee\u67d0\u4e2a\u8fdc\u7a0b\u6587\u4ef6\u4e00\u6b21\uff0c\u8be5\u6587\u4ef6\u5c31\u4f1a\u88ab\u7f13\u5b58\u5728Alluxio\u4e2d\uff0c\u4f60\u7684\u6240\u6709\u63a5\u4e0b\u6765\u7684\u91cd\u590d\u8bbf\u95ee\u90fd\u4e0d\u518d\u9700\u8981\u8fdb\u884c\u8fdc\u7a0b\u6587\u4ef6\u8bfb\u53d6\uff0c\u800c\u662f\u4eceAlluxio\u4e2d\u76f4\u63a5\u83b7\u53d6\u6570\u636e\uff0c\u56e0\u6b64\u5bf9\u4e8e\u6570\u636e\u7684\u8bbf\u95ee\u52a0\u901f\u4e5f\u5c31\u4e0d\u96be\u89e3\u91ca\u4e86\u3002"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u6ce8\u610f\uff1a \u4e0a\u8ff0\u6587\u4ef6\u7684\u8bbf\u95ee\u901f\u5ea6\u4e0e\u793a\u4f8b\u8fd0\u884c\u73af\u5883\u7684\u7f51\u7edc\u6761\u4ef6\u6709\u5173\uff0c\u5982\u679c\u6587\u4ef6\u8bbf\u95ee\u901f\u5ea6\u8fc7\u6162\uff0c\u8bf7\u66f4\u6362\u66f4\u5c0f\u7684\u8fdc\u7a0b\u6587\u4ef6\u5c1d\u8bd5"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u73af\u5883\u6e05\u7406",children:"\u73af\u5883\u6e05\u7406"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl delete -f .\n"})})]})}function o(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},2172:(e,n,s)=>{s.d(n,{I:()=>d,M:()=>i});var l=s(1504);const a={},c=l.createContext(a);function i(e){const n=l.useContext(c);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),l.createElement(c.Provider,{value:n},e.children)}}}]);
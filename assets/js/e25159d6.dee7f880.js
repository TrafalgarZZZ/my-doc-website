"use strict";(self.webpackChunkmy_doc_website=self.webpackChunkmy_doc_website||[]).push([[8032],{6580:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=n(7624),i=n(2172);const s={sidebar_label:"Fluid Overview",sidebar_position:1,slug:"/"},o="Fluid Overview",r={id:"getting-started/overview",title:"Fluid Overview",description:"Target Functions and Scenarios",source:"@site/versioned_docs/version-0.9/getting-started/overview.md",sourceDirName:"getting-started",slug:"/",permalink:"/my-doc-website/docs/",draft:!1,unlisted:!1,editUrl:"https://github.com/TrafalgarZZZ/my-doc-website/tree/master/versioned_docs/version-0.9/getting-started/overview.md",tags:[],version:"0.9",lastUpdatedBy:"trafalgarzzz",lastUpdatedAt:1709006972,formattedLastUpdatedAt:"Feb 27, 2024",sidebarPosition:1,frontMatter:{sidebar_label:"Fluid Overview",sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/my-doc-website/docs/getting-started/install"}},d={},c=[{value:"Target Functions and Scenarios",id:"target-functions-and-scenarios",level:2},{value:"Why Cloud Native Needs Fluid",id:"why-cloud-native-needs-fluid",level:2},{value:"Concept",id:"concept",level:2},{value:"Demo",id:"demo",level:2},{value:"Demo 1: Accelerate Remote File Accessing with Fluid",id:"demo-1-accelerate-remote-file-accessing-with-fluid",level:3},{value:"Demo 2: Machine Learning with Fluid",id:"demo-2-machine-learning-with-fluid",level:3},{value:"Quick Start",id:"quick-start",level:2}];function l(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"fluid-overview",children:"Fluid Overview"}),"\n",(0,a.jsx)(t.h2,{id:"target-functions-and-scenarios",children:"Target Functions and Scenarios"}),"\n",(0,a.jsx)(t.p,{children:"Fluid is an open source cloud native infrastructure component. In the treand of computation and stroage separation, the goal of Fluid is to build an efficient data abstraction layer for AI and Big Data cloud native applications. It provides the following functions:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Through data affinity scheduling and distributed cache acceleration, realizing the fusion of data and computation, to speed up the data access from computation."}),"\n",(0,a.jsx)(t.li,{children:"Storing and managing data independently, and isolating the resource by Kubernetes namespace, to realize data isolation safely."}),"\n",(0,a.jsx)(t.li,{children:"Unifying the data from different storage, to avoid the islanding effect of data."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Through the data abstraction layer served on Kubernetes, the data will just be like the fluid, waving across the storage sources(such as HDFS, OSS, Ceph) and the cloud native applications on Kubernetes. It can be moved, copied, evicted, transformed and managed flexibly. Besides, All the data operations are transparent to users. Users do not need to worry about the efficiency of remote data access nor the convenience of data source management. User just need to access the data abstracted from the Kubernetes native data volume, and all the left tasks and details are handled by Fluid."}),"\n",(0,a.jsx)(t.p,{children:"Fluid currently mainly focuses on the dataset orchestration and application orchestration these two important scenarios. The dataset orchestration can arrange the cached dataset to the specific Kubernetes node, while the application orchestration can arrange the the applications to nodes with the pre-loaded datasets. These two can work together to form the co-orchestration scenario, which take both the dataset specifications and application characteristics into consideration during resouce scheduling."}),"\n",(0,a.jsx)(t.h2,{id:"why-cloud-native-needs-fluid",children:"Why Cloud Native Needs Fluid"}),"\n",(0,a.jsx)(t.p,{children:"There exist a nature divergence between the cloud native environment and the earlier big data processing framework. Deeply affected by Google's GFS, MapReduce, BigTable influential papers, the open souce big data ecosystem keeps the concept of 'moving data but not moving computation' during system design. Therefore, data-intensive computing frameworks, such as Spark, Hive, MapReduce, aim to reduce data transmission, and consider more data locality architecture during the design. However, as time changes, for both consider the flexibility of the resource scalability and usage cost, compution and storage separation architecture has been widely used in the cloud native environment. sThus, the cloud native ecosystem need an component like Fluid to make up the lost data locality when the big data architecture embraces cloud native architecture."}),"\n",(0,a.jsx)(t.p,{children:"Besides, in the cloud native environment, applications are usually deployed in the stateless micro-service style, but focus on data processing. However, the data-intensive frameworks and applications always focus on data abstraction, and schedules and executes the computing jobs and tasks. When data-intensive frameworks are deployed in cluod native environment, it needs component like Fluid to handle the data scheduling in cloud."}),"\n",(0,a.jsx)(t.p,{children:"To resolve the issue that Kubernetes lacks the awareness and optimization for application data, Fluid put forward a series of innovative methods suach as co-orchestration, intelligent awareness, join-optimization, to form an efficient supporting platform for data-intensive applications in cloud native environment."}),"\n",(0,a.jsx)(t.p,{children:"The architecture of Fluid in Kubernetes is as following:"}),"\n",(0,a.jsx)("div",{align:"center",children:(0,a.jsx)("img",{src:"/my-doc-website/architecture.png",title:"architecture",width:"60%",height:"60%",alt:""})}),"\n",(0,a.jsx)(t.h2,{id:"concept",children:"Concept"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Dataset"}),":  A set of logically related data that will be used by a computing engine, such as Spark for big data and TensorFlow for AI scenarios. The management of dataset has many metrics, has multiple dimensions, such as security, version management and data acceleration. And we hope to start with data acceleration and provide support for the management of data sets."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Runtime"}),":  Security, version management and data acceleration, and defines a series of life cycle interfaces. You can implement them."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"AlluxioRuntime"}),": From ",(0,a.jsx)(t.a,{href:"https://www.alluxio.org/",children:"Alluixo"}),",\nFluid manages and schedules Alluxio Runtime to achieve dataset visibility, elastic scaling, and data migration. It is an engine which supports data management and caching of datasets."]}),"\n",(0,a.jsx)(t.h2,{id:"demo",children:"Demo"}),"\n",(0,a.jsx)(t.p,{children:"We provide demo to show how to improve the AI model traning speed in Cloud by using Fluid."}),"\n",(0,a.jsx)(t.h3,{id:"demo-1-accelerate-remote-file-accessing-with-fluid",children:"Demo 1: Accelerate Remote File Accessing with Fluid"}),"\n",(0,a.jsx)(t.h3,{id:"demo-2-machine-learning-with-fluid",children:"Demo 2: Machine Learning with Fluid"}),"\n",(0,a.jsx)(t.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,a.jsx)(t.p,{children:"Fluid needs to run on Kubernetes v1.14 or above version, also needs to support CSI storage. The deployment and management of Fluid Operator is through Helm v3 which is the package mangement tool on Kubernetes platform. Please make sure the Helm is correctly installed in the Kubernetes cluster before running Fluid."}),"\n",(0,a.jsx)(t.p,{children:"You can refer to the following documents to insall and use Fluid."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"docs/en/TOC.md",children:"English"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"docs/zh/TOC.md",children:"\u7b80\u4f53\u4e2d\u6587"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},2172:(e,t,n)=>{n.d(t,{I:()=>r,M:()=>o});var a=n(1504);const i={},s=a.createContext(i);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);
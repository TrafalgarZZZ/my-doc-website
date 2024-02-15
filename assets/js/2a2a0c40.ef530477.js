"use strict";(self.webpackChunkmy_doc_website=self.webpackChunkmy_doc_website||[]).push([[9684],{8060:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var i=l(7624),t=l(2172);const s={sidebar_label:"Installation",sidebar_position:2},d="Installation",o={id:"getting-started/install",title:"Installation",description:"Prerequisites",source:"@site/docs/getting-started/install.md",sourceDirName:"getting-started",slug:"/getting-started/install",permalink:"/my-doc-website/docs/getting-started/install",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/install.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Installation",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Fluid Overview",permalink:"/my-doc-website/docs/"},next:{title:"Quick Start",permalink:"/my-doc-website/docs/getting-started/get_started"}},r={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"How to Deploy",id:"how-to-deploy",level:2},{value:"Download Fluid Chart",id:"download-fluid-chart",level:3},{value:"Install Fluid with Helm",id:"install-fluid-with-helm",level:3},{value:"Upgrade Fluid to the latest version with Helm",id:"upgrade-fluid-to-the-latest-version-with-helm",level:3},{value:"Check Status of Component",id:"check-status-of-component",level:3},{value:"Check version info of Component",id:"check-version-info-of-component",level:3},{value:"Fluid use cases",id:"fluid-use-cases",level:3},{value:"Uninstall Fluid",id:"uninstall-fluid",level:3},{value:"Advanced Configuration",id:"advanced-configuration",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Git"}),"\n",(0,i.jsx)(n.li,{children:"Kubernetes cluster\uff08version >= 1.16\uff09, and support CSI"}),"\n",(0,i.jsx)(n.li,{children:"kubectl\uff08version >= 1.16\uff09"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://helm.sh/",children:"Helm"}),"\uff08version >= 3.5\uff09"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The following documents assume that you have installed all the above requirements."}),"\n",(0,i.jsxs)(n.p,{children:["For the installation and configuration of kubectl, please refer to ",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/",children:"here"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["For the installation and configuration of Helm 3, please refer to ",(0,i.jsx)(n.a,{href:"https://v3.helm.sh/docs/intro/install/",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"how-to-deploy",children:"How to Deploy"}),"\n",(0,i.jsx)(n.h3,{id:"download-fluid-chart",children:"Download Fluid Chart"}),"\n",(0,i.jsxs)(n.p,{children:["You can download the latest Fluid installation package from ",(0,i.jsx)(n.a,{href:"https://github.com/fluid-cloudnative/fluid/releases",children:"Fluid Releases"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"install-fluid-with-helm",children:"Install Fluid with Helm"}),"\n",(0,i.jsx)(n.p,{children:"Create namespace:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ kubectl create ns fluid-system\n"})}),"\n",(0,i.jsx)(n.p,{children:"Add Fluid repository to Helm repos and keep it up-to-date"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ helm repo add fluid https://fluid-cloudnative.github.io/charts\n$ helm repo update\n"})}),"\n",(0,i.jsx)(n.p,{children:"Install Fluid with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ helm install fluid fluid/fluid\nNAME: fluid\nLAST DEPLOYED: Wed May 24 18:17:16 2023\nNAMESPACE: default\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["For Kubernetes version lower than v1.17(included), please use ",(0,i.jsx)(n.code,{children:"helm install --set runtime.criticalFusePod=false fluid fluid.tgz"})]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["The general format of the ",(0,i.jsx)(n.code,{children:"helm install"})," command is like: ",(0,i.jsx)(n.code,{children:"helm install <RELEASE_NAME> <SOURCE>"}),". In the above command,  the first ",(0,i.jsx)(n.code,{children:"fluid"})," means the release name, and the second  ",(0,i.jsx)(n.code,{children:"fluid"})," specified the path to the helm chart, i.e. the directory just unpacked."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"upgrade-fluid-to-the-latest-version-with-helm",children:"Upgrade Fluid to the latest version with Helm"}),"\n",(0,i.jsx)(n.p,{children:"If you have installed an older version of Fluid before, you can use Helm to upgrade it.\nBefore upgrading, it is recommended to ensure that all components in the AlluxioRuntime resource object have been started completely, which is similar to the following state:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pod\nNAME                 READY   STATUS    RESTARTS   AGE\nhbase-fuse-chscz     1/1     Running   0          9h\nhbase-fuse-fmhr5     1/1     Running   0          9h\nhbase-master-0       2/2     Running   0          9h\nhbase-worker-bdbjg   2/2     Running   0          9h\nhbase-worker-rznd5   2/2     Running   0          9h\n"})}),"\n",(0,i.jsx)(n.p,{children:"upgrade fluid\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'$ helm upgrade fluid fluid/fluid\nRelease "fluid" has been upgraded. Happy Helming!\nNAME: fluid\nLAST DEPLOYED: Fri Sep  2 18:54:18 2022\nNAMESPACE: default\nSTATUS: deployed\nREVISION: 2\nTEST SUITE: None\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["For Kubernetes version lower than v1.17(included), please use ",(0,i.jsx)(n.code,{children:"helm install --set runtime.criticalFusePod=false fluid fluid.tgz"})]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"We recommend you to update Fluid latest version from v0.7. If you have an older version, our suggestion is to reinstall it to ensure everything works fine."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"check-status-of-component",children:"Check Status of Component"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Check CRD used by Fluid:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ kubectl get crd | grep data.fluid.io\nalluxioruntimes.data.fluid.io                          2023-05-24T10:14:47Z\ndatabackups.data.fluid.io                              2023-05-24T10:14:47Z\ndataloads.data.fluid.io                                2023-05-24T10:14:47Z\ndatamigrates.data.fluid.io                             2023-05-24T10:28:11Z\ndatasets.data.fluid.io                                 2023-05-24T10:14:47Z\nefcruntimes.data.fluid.io                              2023-05-24T10:28:12Z\ngoosefsruntimes.data.fluid.io                          2023-05-24T10:14:47Z\njindoruntimes.data.fluid.io                            2023-05-24T10:14:48Z\njuicefsruntimes.data.fluid.io                          2023-05-24T10:14:48Z\nthinruntimeprofiles.data.fluid.io                      2023-05-24T10:28:16Z\nthinruntimes.data.fluid.io                             2023-05-24T10:28:16Z\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Check the status of pods:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pod -n fluid-system\nNAME                                     READY   STATUS      RESTARTS   AGE\ncsi-nodeplugin-fluid-2scs9               2/2     Running     0          50s\ncsi-nodeplugin-fluid-7vflb               2/2     Running     0          20s\ncsi-nodeplugin-fluid-f9xfv               2/2     Running     0          33s\ndataset-controller-686d9d9cd6-gk6m6      1/1     Running     0          50s\nfluid-crds-upgrade-0.9.0-37e17c6-fp4mm   0/1     Completed   0          74s\nfluid-webhook-5bc9dfb9d8-hdvhk           1/1     Running     0          50s\nfluidapp-controller-6d4cbdcd88-z7l4c     1/1     Running     0          50s\n"})}),"\n",(0,i.jsx)(n.p,{children:"If the Pod status is as shown above, then Fluid is installed on your Kubernetes cluster successfully!"}),"\n",(0,i.jsx)(n.h3,{id:"check-version-info-of-component",children:"Check version info of Component"}),"\n",(0,i.jsxs)(n.p,{children:["When csi-nodeplugin, alluxioruntime-controller and dataset-controller start\uff0cthey will print their own version info into logs.",(0,i.jsx)(n.br,{}),"\n","If you installed with the charts provided by us\uff0ctheir version info will be fully consistent.",(0,i.jsx)(n.br,{}),"\n","If you installed manually, their version info may be not consistent. You can check it with the following command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ kubectl exec csi-nodeplugin-fluid-pq2zd -n fluid-system -c plugins fluid-csi version\n$ kubectl exec alluxioruntime-controller-66bf8cbdf4-k6cxt -n fluid-system -- alluxioruntime-controller version\n$ kubectl exec dataset-controller-558c5c7785-mtgfh -n fluid-system -- dataset-controller version\n"})}),"\n",(0,i.jsx)(n.p,{children:"The output should be like:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  BuildDate: 2022-09-01_13:07:33\n  GitCommit: aa7fdca4c4306762280570b7dc0c2a7c649ff785\n  GitTreeState: clean\n  GoVersion: go1.17.8\n  Compiler: gc\n  Platform: linux/amd64\n"})}),"\n",(0,i.jsx)(n.h3,{id:"fluid-use-cases",children:"Fluid use cases"}),"\n",(0,i.jsx)(n.p,{children:"For more use cases about Fluid, please refer to our demos:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../samples/accelerate_data_accessing.md",children:"Speed Up Accessing Remote Files"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../samples/data_co_locality.md",children:"Cache Co-locality for Workload Scheduling"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../samples/machinelearning.md",children:"Accelerate Machine Learning Training with Fluid"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"uninstall-fluid",children:"Uninstall Fluid"}),"\n",(0,i.jsx)(n.p,{children:"To uninstall fluid safely, we should check weather Custom Resource Objects about fluid have been deleted completely first:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"kubectl get crds -o custom-columns=NAME:.metadata.name | grep data.fluid.io  | sed ':t;N;s/\\n/,/;b t' | xargs kubectl get --all-namespaces\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you confirm that all Custom resource objects about fluid have been deleted, you can safely uninstall fluid:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ helm delete fluid\n$ kubectl delete -f fluid/crds\n$ kubectl delete ns fluid-system\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"fluid"})," in command ",(0,i.jsx)(n.code,{children:"helm delete"})," means the ",(0,i.jsx)(n.code,{children:"<RELEASE_NAME>"})," during installation."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"advanced-configuration",children:"Advanced Configuration"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["In some cloud vendors, the default mount root directory ",(0,i.jsx)(n.code,{children:"/runtime-mnt"})," is not writable, so you have to modify the directory location"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"helm install fluid --set runtime.mountRoot=/var/lib/docker/runtime-mnt fluid\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["The feature ",(0,i.jsx)(n.code,{children:"Fuse Recovery"})," is not enable by default, to enable this:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"helm install fluid --set csi.featureGates='FuseRecovery=true' fluid\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"If your Kubernetes cluster has a custom configured kubelet root directory, please configure the KUBELET_ROOTDIR when installing Fluid with the following command:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"helm install --set csi.kubelet.rootDir=<kubelet-root-dir> \\\n  --set csi.kubelet.certDir=<kubelet-root-dir>/pki fluid fluid.tgz\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"You can execute the following command on the Kubernetes node to view the --root-dir parameter configuration:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"ps -ef | grep $(which kubelet) | grep root-dir\n"})}),"\n",(0,i.jsx)(n.p,{children:"If the above command has no output, the kubelet root path is the default value (/var/lib/kubelet), which is the default value set by Fluid."}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["When you install a Kubernetes cluster using ",(0,i.jsx)(n.a,{href:"http://sealer.cool",children:"Sealer"}),", it by default uses ",(0,i.jsx)(n.code,{children:"apiserver.cluster.local"})," as the address of the API Server. At the same time, it writes this address to the ",(0,i.jsx)(n.code,{children:"kubelet.conf"})," file and the corresponding IP address to the ",(0,i.jsx)(n.code,{children:"hosts"})," file. This will cause the Fluid CSI Plugin fail to find the IP address of the API Server. You can set the Fluid CSI Plugin to use hostNetwork via the following command:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"# install\nhelm install fluid --set csi.config.hostNetwork=true fluid/fluid\n# upgrade\nhelm upgrade fluid --set csi.config.hostNetwork=true fluid/fluid\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},2172:(e,n,l)=>{l.d(n,{I:()=>o,M:()=>d});var i=l(1504);const t={},s=i.createContext(t);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
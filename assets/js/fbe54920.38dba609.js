"use strict";(self.webpackChunk_funki_docs_frontend=self.webpackChunk_funki_docs_frontend||[]).push([[7466],{2461:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tools/toolchains/thirdweb-cli","title":"thirdweb CLI","description":"Documentation for using the thirdweb CLI for creating, deploying, and publishing smart contracts and web3 applications on the Funki network, including detailed instructions and options for project creation and deployment.","source":"@site/docs/tools/toolchains/thirdweb-cli.md","sourceDirName":"tools/toolchains","slug":"/tools/toolchains/thirdweb-cli","permalink":"/docs/tools/toolchains/thirdweb-cli","draft":false,"unlisted":false,"editUrl":"https://github.com/funkichain/docs/edit/main/packages/frontend/docs/tools/toolchains/thirdweb-cli.md","tags":[],"version":"current","lastUpdatedAt":1734445511000,"frontMatter":{"title":"thirdweb CLI","slug":"/tools/toolchains/thirdweb-cli","order":"6.8.3","description":"Documentation for using the thirdweb CLI for creating, deploying, and publishing smart contracts and web3 applications on the Funki network, including detailed instructions and options for project creation and deployment.","keywords":["thirdweb CLI","thirdweb","CLI","Funki","Funki mainnet","Funki testnet","Funki network","smart contracts","deploy smart contract","test smart contract","debug smart contract","web3 applications"]},"sidebar":"docSidebar","previous":{"title":"Foundry","permalink":"/docs/tools/toolchains/foundry"},"next":{"title":"ethers.js","permalink":"/docs/tools/clients/ethers"}}');var o=e(1085),i=e(1184);const s={title:"thirdweb CLI",slug:"/tools/toolchains/thirdweb-cli",order:"6.8.3",description:"Documentation for using the thirdweb CLI for creating, deploying, and publishing smart contracts and web3 applications on the Funki network, including detailed instructions and options for project creation and deployment.",keywords:["thirdweb CLI","thirdweb","CLI","Funki","Funki mainnet","Funki testnet","Funki network","smart contracts","deploy smart contract","test smart contract","debug smart contract","web3 applications"]},a="thirdweb CLI",c={},d=[{value:"Creating a project",id:"creating-a-project",level:2},{value:"Deploying a smart contract",id:"deploying-a-smart-contract",level:2},{value:"Publishing a smart contract",id:"publishing-a-smart-contract",level:2}];function l(t){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"thirdweb-cli",children:"thirdweb CLI"})}),"\n",(0,o.jsx)(n.p,{children:"thirdweb provides an interactive command line interface, allowing you to create, build and deploy your smart contracts and apps."}),"\n",(0,o.jsx)(n.p,{children:"You can use the thirdweb CLI to create and deploy smart contracts to the Funki network."}),"\n",(0,o.jsxs)(n.p,{children:["Visit the ",(0,o.jsx)(n.a,{href:"https://portal.thirdweb.com/cli",children:"thirdweb documentation"})," for more instructions on using the thirdweb CLI."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"creating-a-project",children:"Creating a project"}),"\n",(0,o.jsx)(n.p,{children:"Create a new project with thirdweb installed and configured:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx thirdweb create\n"})}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.p,{children:"When you create a project for smart contracts or web3 apps there are various configurable options."}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"For contracts, some options are:"})}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Create a new contract project using ",(0,o.jsx)(n.a,{href:"https://hardhat.org/",children:"Hardhat"})," or ",(0,o.jsx)(n.a,{href:"https://book.getfoundry.sh/",children:"Forge"})]}),"\n",(0,o.jsx)(n.li,{children:"Add a new contract to an existing project"}),"\n",(0,o.jsxs)(n.li,{children:["Start from an audited contract base, and add optional ",(0,o.jsx)(n.a,{href:"https://portal.thirdweb.com/contractkit/extensions",children:"extensions"})]}),"\n"]}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"For contracts, some options are:"})}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Front end applications using Next, CRA or Vite"}),"\n",(0,o.jsx)(n.li,{children:"Backend applications using Node.js or Express.js"}),"\n",(0,o.jsx)(n.li,{children:"Choice of TypeScript or JavaScript variants"}),"\n"]})]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"deploying-a-smart-contract",children:"Deploying a smart contract"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://portal.thirdweb.com/deploy",children:"Deploy"})," your smart contracts to the Funki network:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx thirdweb deploy\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["To deploy to the Funki network, after running ",(0,o.jsx)(n.code,{children:"npx thirdweb deploy"}),", visit the provided dashboard URL and select Funki from the Network dropdown."]})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"publishing-a-smart-contract",children:"Publishing a smart contract"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://portal.thirdweb.com/publish",children:"Publish"})," and share a versioned release of your contract onto thirdweb\u2019s registry:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx thirdweb publish\n"})}),"\n",(0,o.jsx)(n.hr,{})]})}function h(t={}){const{wrapper:n}={...(0,i.R)(),...t.components};return n?(0,o.jsx)(n,{...t,children:(0,o.jsx)(l,{...t})}):l(t)}},1184:(t,n,e)=>{e.d(n,{R:()=>s,x:()=>a});var r=e(4041);const o={},i=r.createContext(o);function s(t){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function a(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:s(t.components),r.createElement(i.Provider,{value:n},t.children)}}}]);
"use strict";(self.webpackChunk_funki_docs_frontend=self.webpackChunk_funki_docs_frontend||[]).push([[4143],{1151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"tools/clients/ethers","title":"ethers.js","description":"Documentation for using ethers.js, a JavaScript library for EVM-compatible blockchain interactions. This page covers installation, setup, connecting to the Funki network, reading and writing blockchain data, and interacting with smart contracts.","source":"@site/docs/tools/clients/ethers.md","sourceDirName":"tools/clients","slug":"/tools/clients/ethers","permalink":"/docs/tools/clients/ethers","draft":false,"unlisted":false,"editUrl":"https://github.com/funkichain/docs/edit/main/packages/frontend/docs/tools/clients/ethers.md","tags":[],"version":"current","lastUpdatedAt":1734445511000,"frontMatter":{"title":"ethers.js","slug":"/tools/clients/ethers","order":"6.9.1","description":"Documentation for using ethers.js, a JavaScript library for EVM-compatible blockchain interactions. This page covers installation, setup, connecting to the Funki network, reading and writing blockchain data, and interacting with smart contracts.","keywords":["ethers.js","JavaScript library","Funki network","Funki mainnet","Funki testnet","smart contracts","EVM-compatible","blockchain","JsonRpcProvider","Signer","ABI","interacting with smart contract"]},"sidebar":"docSidebar","previous":{"title":"thirdweb CLI","permalink":"/docs/tools/toolchains/thirdweb-cli"},"next":{"title":"thirdweb SDK","permalink":"/docs/tools/clients/thirdweb-sdk"}}');var r=n(1085),o=n(1184);const c={title:"ethers.js",slug:"/tools/clients/ethers",order:"6.9.1",description:"Documentation for using ethers.js, a JavaScript library for EVM-compatible blockchain interactions. This page covers installation, setup, connecting to the Funki network, reading and writing blockchain data, and interacting with smart contracts.",keywords:["ethers.js","JavaScript library","Funki network","Funki mainnet","Funki testnet","smart contracts","EVM-compatible","blockchain","JsonRpcProvider","Signer","ABI","interacting with smart contract"]},s="ethers.js",a={},l=[{value:"Install",id:"install",level:2},{value:"Setup",id:"setup",level:2},{value:"Connecting to Funki",id:"connecting-to-funki",level:2},{value:"Reading data from the blockchain",id:"reading-data-from-the-blockchain",level:2},{value:"Writing data to the blockchain",id:"writing-data-to-the-blockchain",level:2},{value:"Interacting with smart contracts",id:"interacting-with-smart-contracts",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"ethersjs",children:"ethers.js"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://docs.ethers.org/v5/",children:"ethers.js"})," is a JavaScript library that allows developers to interact with EVM-compatible blockchain networks."]}),"\n",(0,r.jsx)(t.p,{children:"You can use ethers.js to interact with smart contracts deployed on the Funki network."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,r.jsx)(t.p,{children:"To install ethers.js run the following command:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install --save ethers\n"})}),"\n",(0,r.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsx)(t.p,{children:"Before you can start using ethers.js, you need to import it into your project."}),"\n",(0,r.jsx)(t.p,{children:"Add the following line of code to the top of your file to import ethers.js:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const ethers = require('ethers');\n"})}),"\n",(0,r.jsx)(t.h2,{id:"connecting-to-funki",children:"Connecting to Funki"}),"\n",(0,r.jsxs)(t.p,{children:["You can connect to Funki by instantiating a new ethers.js ",(0,r.jsx)(t.code,{children:"JsonRpcProvider"})," object with a RPC URL of the Funki network:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const ethers = require('ethers');\n\nconst url = 'https://rpc-mainnet.funkichain.com';\nconst provider = new ethers.providers.JsonRpcProvider(url);\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["To alternatively connect to Funki Sepolia (testnet), change the above URL from ",(0,r.jsx)(t.code,{children:"https://rpc-mainnet.funkichain.com"})," to ",(0,r.jsx)(t.code,{children:"https://funki-testnet.alt.technology"}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"reading-data-from-the-blockchain",children:"Reading data from the blockchain"}),"\n",(0,r.jsx)(t.p,{children:"Once you have created a provider, you can use it to read data from the Funki network."}),"\n",(0,r.jsxs)(t.p,{children:["For example, you can use the ",(0,r.jsx)(t.code,{children:"getBlockNumber"})," method to get the latest block:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"async function getLatestBlock() {\n  const latestBlock = await provider.getBlockNumber();\n  console.log(latestBlock);\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"writing-data-to-the-blockchain",children:"Writing data to the blockchain"}),"\n",(0,r.jsxs)(t.p,{children:["In order to write data to the Funki network, you need to create a ",(0,r.jsx)(t.code,{children:"Signer"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["You can create a ",(0,r.jsx)(t.code,{children:"Signer"})," by instantiating a new ethers.js ",(0,r.jsx)(t.code,{children:"Wallet"})," object, providing it with a private key and ",(0,r.jsx)(t.code,{children:"Provider"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const privateKey = 'PRIVATE_KEY';\nconst signer = new ethers.Wallet(privateKey, provider);\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"PRIVATE_KEY"})," is the private key of the wallet to use when creating the signer."]})}),"\n",(0,r.jsx)(t.h2,{id:"interacting-with-smart-contracts",children:"Interacting with smart contracts"}),"\n",(0,r.jsxs)(t.p,{children:["You can use ethers.js to interact with a smart contract on Funki by instantiating a ",(0,r.jsx)(t.code,{children:"Contract"})," object using the ABI and address of a deployed contract:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'const abi = [\n\u2026 // ABI of deployed contract\n];\n\nconst contractAddress = "CONTRACT_ADDRESS"\n\n// read only\nconst contract = new ethers.Contract(contractAddress, abi, provider);\n'})}),"\n",(0,r.jsxs)(t.p,{children:["For write-only contracts, provide a ",(0,r.jsx)(t.code,{children:"Signer"})," object instead of a ",(0,r.jsx)(t.code,{children:"Provider"})," object:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"// write only\nconst contract = new ethers.Contract(contractAddress, abi, signer);\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"CONTRACT_ADDRESS"})," is the address of the deployed contract."]})}),"\n",(0,r.jsxs)(t.p,{children:["Once you have created a ",(0,r.jsx)(t.code,{children:"Contract"})," object, you can use it to call desired methods on the smart contract:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"async function setValue(value) {\n  const tx = await contract.set(value);\n  console.log(tx.hash);\n}\n\nasync function getValue() {\n  const value = await contract.get();\n  console.log(value.toString());\n}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1184:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>s});var i=n(4041);const r={},o=i.createContext(r);function c(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);
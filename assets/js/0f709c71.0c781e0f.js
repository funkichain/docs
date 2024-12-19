"use strict";(self.webpackChunk_funki_docs_frontend=self.webpackChunk_funki_docs_frontend||[]).push([[6312],{8914:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"tutorials/verify-sm-on-funkichain","title":"Verify a Smart Contract on FunkiScan","description":"","source":"@site/docs/tutorials/verify-sm-on-funkichain.md","sourceDirName":"tutorials","slug":"/tutorials/verify-sm-on-funkichain","permalink":"/docs/tutorials/verify-sm-on-funkichain","draft":false,"unlisted":false,"editUrl":"https://github.com/funkichain/docs/edit/main/packages/frontend/docs/tutorials/verify-sm-on-funkichain.md","tags":[],"version":"current","lastUpdatedAt":1734445511000,"frontMatter":{"title":"Verify a Smart Contract on FunkiScan","slug":"/tutorials/verify-sm-on-funkichain","order":5.6,"description":""},"sidebar":"docSidebar","previous":{"title":"Deploying a smart contract using thirdweb","permalink":"/docs/tutorials/deploy-sm-using-thirdweb"},"next":{"title":"Simple NFTs","permalink":"/docs/tutorials/simple-nfts"}}');var r=t(1085),o=t(1184);const a={title:"Verify a Smart Contract on FunkiScan",slug:"/tutorials/verify-sm-on-funkichain",order:5.6,description:""},s=void 0,c={},l=[{value:"Objectives",id:"objectives",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Hardhat verification",id:"hardhat-verification",level:2},{value:"Foundry verification",id:"foundry-verification",level:2},{value:"<strong>FunkiScan verify contract with files</strong>",id:"funkiscan-verify-contract-with-files",level:2},{value:"Interact with the Contract on FunkiScan",id:"interact-with-the-contract-on-funkiscan",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(n){const e={a:"a",code:"code",em:"em",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"https://funkiscan.io/",children:"FunkiScan"})," is a block explorer tailored for Funki Mainnet, offering developers a platform to interact with and verify smart contracts deployed on the network. Smart contract verification is essential for ensuring the transparency and security of on-chain applications, allowing others to review and validate the source code of deployed contracts. This tutorial will guide you through popular methods to verify a contract, as several approaches are available."]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"https://funkiscan.io/",children:"FunkiScan"})," uses the ",(0,r.jsx)(e.a,{href:"https://routescan.io/documentation/api-swagger",children:"RouterScan API"})," for contract verification. Currently, no API key is required, and your requests fall under their free plan."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["As of writing these docs, the RouteScan API free tier allows you to use the API without an API key, offering up to ",(0,r.jsx)(e.strong,{children:"2 requests per second (rps)"})," and ",(0,r.jsx)(e.strong,{children:"a daily limit of 10,000 calls"}),". Read more at ",(0,r.jsx)(e.a,{href:"https://routescan.io/documentation#api-plans",children:"RouterScan API Plans"})]}),"\n",(0,r.jsxs)(e.li,{children:["To verify a contract on Funki Testnet, simply switch the chain information to ",(0,r.jsx)(e.a,{href:"https://docs.funkichain.com/docs/network-information",children:"Funki Testnet"}),". Currently, Funki Testnet is an L2 of Sepolia Testnet, and its explorer is publicly available at ",(0,r.jsx)(e.a,{href:"http://testnet.funkiscan.io/",children:"Funki Testnet Explorer"})]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"objectives",children:"Objectives"}),"\n",(0,r.jsx)(e.p,{children:"By the end of this tutorial, you should be able to:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Verify your deployed contract with popular Frameworks and toolkits."}),"\n",(0,r.jsxs)(e.li,{children:["Verify contract directly on ",(0,r.jsx)(e.a,{href:"https://funkiscan.io/",children:"FunkiScan"}),"."]}),"\n"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Familiarity with smart contract development and the Solidity programming language"}),"\nSolidity is the primary language for writing smart contracts on Ethereum and Ethereum-compatible blockchains like Funki. You should be comfortable writing, compiling, and deploying basic smart contracts using Solidity.\n",(0,r.jsx)(e.strong,{children:"Basic understanding of popular frameworks and toolkits for Ethereum development"}),"\nFrameworks and toolkits streamline the process of deploying, testing, and interacting with smart contracts. You should be familiar with popular smart contract development tools like Hardhat, Foundry"]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"hardhat-verification",children:"Hardhat verification"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-verify",children:(0,r.jsx)(e.strong,{children:"hardhat-verify"})})," is a Hardhat plugin that simplifies the smart contract verification process on Etherscan. Thanks to the Etherscan Compatible Verify Contract API, you can also use this tool to verify your smart contract on ",(0,r.jsx)(e.a,{href:"https://funkiscan.io/",children:"FunkiScan"}),"."]}),"\n",(0,r.jsx)(e.p,{children:"Here's an example of a hardhat.config.ts file:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-jsx",children:'import { HardhatUserConfig } from "hardhat/config";\nimport "@nomicfoundation/hardhat-toolbox";\nimport "@nomiclabs/hardhat-verify";\n\nconst config: HardhatUserConfig = {\n  etherscan: {\n    apiKey: {\n      funkiscan: "funkiscan", // apiKey is not required, just set a placeholder\n    },\n    customChains: [\n      {\n        network: "funki",\n        chainId: 33979,\n        urls: {\n          apiURL: "https://api.routescan.io/v2/network/mainnet/evm/33979_2/etherscan/api",\n          browserURL: "https://funkiscan.io"\n        }\n      }\n    ]\n  },\n  networks: {\n    funki: {\n      url: \'https://rpc-mainnet.funkichain.com\',\n      accounts: [process.env.PRIVATE_KEY]\n    },\n  },\n};\n\nexport default config;\n'})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Deploy"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-jsx",children:"npx hardhat run scripts/deploy.ts --network funki\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Verify"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-jsx",children:"export PRIVATE_KEY=...\nnpx hardhat verify --network funki 0x...\n"})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"foundry-verification",children:"Foundry verification"}),"\n",(0,r.jsxs)(e.p,{children:["Foundry allows you to verify contracts either during deployment or as a separate step. Be sure to include the ",(0,r.jsx)(e.code,{children:"--verifier-url"})," option in your deploy or verify script."]}),"\n",(0,r.jsx)(e.p,{children:"To verify at deployment time:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-jsx",children:"forge script scripts/Deploy.s.sol\n--broadcast --rpc-url [NETWORK_RPC_URL]\n--verifier-url 'https://api.routescan.io/v2/network/mainnet/evm/33979_2/etherscan/api'\n--etherscan-api-key \"verifyContract\"\n"})}),"\n",(0,r.jsx)(e.p,{children:"To verify a contract that has already been deployed:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-jsx",children:'forge verify-contract [contract-address] [src/path/ContractPath.sol:ContractName]\n--verifier-url \'https://api.routescan.io/v2/network/mainnet/evm/33979_2/etherscan/api\'\n--etherscan-api-key "verifyContract"\n--num-of-optimizations 200\n--compiler-version [solc compiler version]\n--constructor-args $(cast abi-encode "constructor(address param1, uint256 param2,...)" param1 param2 ...)\n\n'})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"funkiscan-verify-contract-with-files",children:(0,r.jsx)(e.strong,{children:"FunkiScan verify contract with files"})}),"\n",(0,r.jsxs)(e.p,{children:["You can verify contracts using the ",(0,r.jsx)(e.a,{href:"https://funkiscan.io/verifycontract",children:"FunkiScan verification tool"}),". This method is particularly useful if you've deployed your contract with Remix IDE and need to verify it."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Step 1: Enter your deployed contract's address."}),"\n",(0,r.jsx)(e.li,{children:"Step 2: Choose your programming language."}),"\n",(0,r.jsx)(e.li,{children:"Step 3: Provide the compiler information and upload your file(s). Make sure this information exactly matches what you used when compiling your contract for deployment. You can upload either multiple files or a single flattened file."}),"\n",(0,r.jsx)(e.li,{children:'Step 4: Click "Verify Contract" and wait for the result.'}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"image.png",src:t(8389).A+"",width:"2000",height:"1025"})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsxs)(e.h2,{id:"interact-with-the-contract-on-funkiscan",children:["Interact with the Contract on FunkiScan",(0,r.jsx)(e.a,{href:"#interact-with-the-contract"})]}),"\n",(0,r.jsxs)(e.p,{children:["You can now interact with your contract using ",(0,r.jsx)(e.a,{href:"https://docs.funkichain.com/docs/network-information",children:"FunkiChain"}),". Click the ",(0,r.jsx)(e.em,{children:"Contract"})," tab. If your contract is verified, you'll see the contract's source code and all its functions under the ",(0,r.jsx)(e.code,{children:"Read Contract"})," and ",(0,r.jsx)(e.code,{children:"Write Contract"})," buttons. Note that only write functions require an on-chain transaction."]}),"\n",(0,r.jsxs)(e.p,{children:["To interact with write functions, you need to sign in to ",(0,r.jsx)(e.a,{href:"https://docs.funkichain.com/docs/network-information",children:"FunkiChain"})," with your wallet. Currently, you can choose from any of the supported wallet providers that appear."]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"image.png",src:t(6435).A+"",width:"699",height:"470"})}),"\n",(0,r.jsx)(e.p,{children:"Once connected, you're all set to interact with any write function of the contract. Make sure your input is correct and double-check the transaction details before confirming any transaction."}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsx)(e.p,{children:"Congratulations! You've now mastered the art of deploying smart contracts to the blockchain. While you've only deployed to a test network so far, the process for real networks is identical\u2014just remember, it comes with a heftier price tag!"})]})}function d(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},6435:(n,e,t)=>{t.d(e,{A:()=>i});const i=t.p+"assets/images/connect-wallet-3f6cd0a9668c620b7a2cd773c3d00f22.png"},8389:(n,e,t)=>{t.d(e,{A:()=>i});const i=t.p+"assets/images/verify-contract-with-file-7f5acc1adfe433ecdacf59c98ef288f2.png"},1184:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>s});var i=t(4041);const r={},o=i.createContext(r);function a(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);
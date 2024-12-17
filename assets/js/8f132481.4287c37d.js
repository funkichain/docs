"use strict";(self.webpackChunk_funki_docs_frontend=self.webpackChunk_funki_docs_frontend||[]).push([[3506],{8664:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"tutorials/deploy-sm-using-remix","title":"Deploying a smart contract using Remix","description":"Remix is a web-based Integrated Development Environment (IDE) designed for efficient smart contract development and deployment. It serves as an excellent starting point for those new to smart contracts, eliminating the need for complex local environment configurations.","source":"@site/docs/tutorials/deploy-sm-using-remix.md","sourceDirName":"tutorials","slug":"/tutorials/deploy-sm-using-remix","permalink":"/docs/tutorials/deploy-sm-using-remix","draft":false,"unlisted":false,"editUrl":"https://github.com/funkichain/docs/edit/main/packages/frontend/docs/tutorials/deploy-sm-using-remix.md","tags":[],"version":"current","lastUpdatedAt":1734445511000,"frontMatter":{"title":"Deploying a smart contract using Remix","slug":"/tutorials/deploy-sm-using-remix","order":5.3,"descriptions":""},"sidebar":"docSidebar","previous":{"title":"Deploying a smart contract using Foundry","permalink":"/docs/tutorials/deploy-sm-using-foundry"},"next":{"title":"Deploying a smart contract using thirdweb","permalink":"/docs/tutorials/deploy-sm-using-thirdweb"}}');var o=n(1085),s=n(1184);const r={title:"Deploying a smart contract using Remix",slug:"/tutorials/deploy-sm-using-remix",order:5.3,descriptions:""},a=void 0,l={},c=[{value:"Objectives",id:"objectives",level:2},{value:"Remix Window Overview",id:"remix-window-overview",level:2},{value:"Editor Pane",id:"editor-pane",level:3},{value:"Terminal/Output",id:"terminaloutput",level:3},{value:"Left Panel",id:"left-panel",level:3},{value:"Plugins",id:"plugins",level:2},{value:"Solidity Compiler",id:"solidity-compiler",level:3},{value:"Deploy &amp; Run Transactions",id:"deploy--run-transactions",level:3},{value:"Prepare for Deployment",id:"prepare-for-deployment",level:2},{value:"Set Up a Wallet",id:"set-up-a-wallet",level:3},{value:"Add the FunkiSepolia to your Wallet",id:"add-the-funkisepolia-to-your-wallet",level:3},{value:"Get Testnet Ether",id:"get-testnet-ether",level:3},{value:"Deploying to Testnet",id:"deploying-to-testnet",level:2},{value:"Selecting the Environment",id:"selecting-the-environment",level:3},{value:"Deploy the Contract",id:"deploy-the-contract",level:3},{value:"Verify the Contract",id:"verify-the-contract",level:3},{value:"Interact with the Contract on FunkiScan",id:"interact-with-the-contract-on-funkiscan",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://remix.ethereum.org/",children:"Remix"})," is a web-based Integrated Development Environment (IDE) designed for efficient smart contract development and deployment. It serves as an excellent starting point for those new to smart contracts, eliminating the need for complex local environment configurations."]}),"\n",(0,o.jsx)(t.p,{children:"Remix features an in-browser blockchain simulator, enabling swift contract deployment and testing. While this simulation is limited to your browser environment, Remix also facilitates deployment to various testnets. This functionality allows for public sharing of your contract, albeit with the consideration that your code becomes visible to others."}),"\n",(0,o.jsxs)(t.p,{children:["This article will provide a comprehensive overview of Remix and guide you through the process of deploying a contract to the ",(0,o.jsx)(t.strong,{children:"FunkiSepolia"}),"."]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["For production or mainnet deployments, the steps in this tutorial are nearly identical. However, you'll need to ensure you've selected ",(0,o.jsx)(t.code,{children:"FunkiMainet"})," as the network instead of ",(0,o.jsx)(t.code,{children:"FunkiSepolia"}),"."]})}),"\n",(0,o.jsxs)(t.p,{children:["If you're already familiar with Remix, you probably want to jump down to\xa0",(0,o.jsx)(t.a,{href:"https://docs-funki.sipher.gg/docs/tools/web3#deploying-contracts",children:"here"}),"."]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsxs)(t.h2,{id:"objectives",children:["Objectives",(0,o.jsx)(t.a,{href:"#objectives"})]}),"\n",(0,o.jsx)(t.p,{children:"By the end of this tutorial, you'll be able to:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Understand Remix's features, advantages, and limitations as an IDE"}),"\n",(0,o.jsx)(t.li,{children:"Deploy and test the Storage.sol demo contract using Remix"}),"\n",(0,o.jsx)(t.li,{children:"Deploy a contract to the FunkiSepolia using Remix and interact with it"}),"\n"]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"remix-window-overview",children:"Remix Window Overview"}),"\n",(0,o.jsxs)(t.p,{children:["To begin, open a browser window and navigate to ",(0,o.jsx)(t.a,{href:"https://remix.ethereum.org",children:"https://remix.ethereum.org"}),". After navigating through the introductory tips, you'll encounter the editor, which is neatly divided into three familiar sections."]}),"\n",(0,o.jsx)(t.h3,{id:"editor-pane",children:"Editor Pane"}),"\n",(0,o.jsxs)(t.p,{children:["The editor pane initially showcases the Remix home screen, complete with news, useful links, and cautionary notes about prevalent scams. Feel free to dismiss the home tab and open ",(0,o.jsx)(t.code,{children:"1_Storage.sol"}),", which resides in the ",(0,o.jsx)(t.code,{children:"contracts"})," folder within the ",(0,o.jsx)(t.code,{children:"default_workspace"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-solidity",children:"// SPDX-License-Identifier: GPL-3.0\n\npragma solidity >=0.7.0 <0.9.0;\n\n/**\n * @title Storage\n * @dev Store & retrieve value in a variable\n * @custom:dev-run-script ./scripts/deploy_with_ethers.ts\n */\ncontract Storage {\n\n    uint256 number;\n\n    /**\n     * @dev Store value in variable\n     * @param num value to store\n     */\n    function store(uint256 num) public {\n        number = num;\n    }\n\n    /**\n     * @dev Return value\n     * @return value of 'number'\n     */\n    function retrieve() public view returns (uint256){\n        return number;\n    }\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"You'll edit your code in the editor pane. It offers most of the features you'd expect, including syntax highlighting and error detection. However, in Remix, errors aren't underlined. Instead, you'll see an \u2757 icon to the left of the line number where an error occurs."}),"\n",(0,o.jsxs)(t.p,{children:["At the top, you'll notice a large green arrow, similar to the ",(0,o.jsx)(t.em,{children:"Run"})," button in other editors. In Solidity, this button compiles your code but doesn't run it. That's because you must first deploy your code to the simulated blockchain before execution."]}),"\n",(0,o.jsxs)(t.h3,{id:"terminaloutput",children:["Terminal/Output",(0,o.jsx)(t.a,{href:"#terminaloutput"})]}),"\n",(0,o.jsx)(t.p,{children:"Below the editor pane, you'll find the terminal."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"image.png",src:n(4490).A+"",width:"828",height:"83"})}),"\n",(0,o.jsx)(t.p,{children:"This panel primarily displays transaction logs from your smart contracts and provides access to Remix's powerful debugging tools."}),"\n",(0,o.jsx)(t.h3,{id:"left-panel",children:"Left Panel"}),"\n",(0,o.jsx)(t.p,{children:"Similar to many other editors, Remix's left panel contains several vertical tabs for navigating between tools and functions. This panel allows you to browse files in your current workspace, manage workspaces, search your code, and access a variety of plugins."}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"plugins",children:"Plugins"}),"\n",(0,o.jsx)(t.p,{children:'Remix\'s functionality relies heavily on plugins, with the most common ones activated by default. To manage plugins, click the plug icon in the lower-left corner, just above the settings gear. You can easily toggle plugins on or off by clicking "activate" or "deactivate." Some plugins, such as the Debug tool, automatically activate when needed through other parts of the editor.'}),"\n",(0,o.jsxs)(t.h3,{id:"solidity-compiler",children:["Solidity Compiler",(0,o.jsx)(t.a,{href:"#solidity-compiler"})]}),"\n",(0,o.jsxs)(t.p,{children:["The first default plugin (after the search function) is the ",(0,o.jsx)(t.em,{children:"Solidity Compiler"}),". Be sure to enable the ",(0,o.jsx)(t.code,{children:"Auto compile"})," option. Smart contracts are typically very small files, so this shouldn't cause any performance issues while editing code."]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"Compile and Run script"})," button in this plugin can be misleading. It's important to note that this is ",(0,o.jsx)(t.strong,{children:"not"})," the usual method for testing your contract. For more information on this feature, click the ",(0,o.jsx)(t.code,{children:"I"})," button."]}),"\n",(0,o.jsxs)(t.p,{children:["If your contracts contain errors, you'll find the complete error messages at the bottom of the page. To see this in action, try introducing some typos into ",(0,o.jsx)(t.code,{children:"1_Storage.sol"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"deploy--run-transactions",children:"Deploy & Run Transactions"}),"\n",(0,o.jsx)(t.p,{children:'The "Deploy & Run Transactions" plugin is your primary tool for deploying and interacting with contracts. At the top, you\'ll see options to select your virtual machine, create mock user wallets with test Ether, and a dropdown menu for choosing the contract you want to deploy and test.'}),"\n",(0,o.jsxs)(t.p,{children:["After fixing any errors in ",(0,o.jsx)(t.code,{children:"1_Storage.sol"}),", click the orange ",(0,o.jsx)(t.code,{children:"Deploy"})," button. Your contract will appear below as ",(0,o.jsx)(t.em,{children:"STORAGE AT <address>"})]}),"\n",(0,o.jsxs)(t.admonition,{type:"caution",children:[(0,o.jsx)(t.p,{children:"Deploying contracts in Remix can be tricky due to two potential pitfalls:"}),(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Each time you click the Deploy button, Remix creates a new instance of your contract while retaining previous deployments. Unless you're comparing versions or deploying multiple contracts, it's best to click the ",(0,o.jsx)(t.code,{children:"Trash"})," button to remove old deployments before deploying again."]}),"\n",(0,o.jsxs)(t.li,{children:["If your code fails to compile, ",(0,o.jsx)(t.strong,{children:"clicking Deploy won't trigger an error message!"})," Instead, Remix will deploy the last successfully compiled version. Always check for errors\u2014indicated by a red circle with a number on the Compiler plugin\u2014before deploying."]}),"\n"]})]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsxs)(t.h2,{id:"prepare-for-deployment",children:["Prepare for Deployment",(0,o.jsx)(t.a,{href:"#prepare-for-deployment"})]}),"\n",(0,o.jsx)(t.p,{children:"Testnets closely mirror their corresponding main networks, but with a few key distinctions. To interact with a testnet\u2014whether you're deploying a new contract or calling functions in an existing one\u2014you'll need a wallet loaded with the appropriate testnet tokens."}),"\n",(0,o.jsx)(t.h3,{id:"set-up-a-wallet",children:"Set Up a Wallet"}),"\n",(0,o.jsxs)(t.p,{children:["If you've already set up a wallet ",(0,o.jsx)(t.strong,{children:"exclusively for development"}),", feel free to skip ahead. If not, now's the perfect time to take the plunge!"]}),"\n",(0,o.jsx)(t.admonition,{type:"danger",children:(0,o.jsx)(t.p,{children:"Using a wallet with valuable assets for development is extremely risky. You might inadvertently write code with a bug that transfers incorrect amounts or tokens to the wrong addresses. Remember, blockchain transactions are irreversible once sent! Stay safe by using separate wallets for different purposes."})}),"\n",(0,o.jsxs)(t.p,{children:["First, add the ",(0,o.jsx)(t.a,{href:"https://www.coinbase.com/wallet",children:"Coinbase"})," or ",(0,o.jsx)(t.a,{href:"https://metamask.io/",children:"MetaMask"})," wallet to your browser and ",(0,o.jsx)(t.a,{href:"https://www.youtube.com/watch?v=CZDgLG6jpgw",children:"set up"})," a new wallet. As a developer, you must be extra vigilant about your wallet's security! Many apps grant special privileges to the contract owner's wallet address\u2014allowing the withdrawal of all Ether paid by customers or altering crucial settings."]}),"\n",(0,o.jsxs)(t.p,{children:["After setting up your wallet, enable developer settings and activate testnets (",(0,o.jsx)(t.a,{href:"https://docs.cloud.coinbase.com/wallet-sdk/docs/developer-settings",children:"Coinbase Settings"}),", ",(0,o.jsx)(t.a,{href:"https://support.metamask.io/managing-my-wallet/using-metamask/how-to-view-testnets-in-metamask/",children:"MetaMask Settings"}),")."]}),"\n",(0,o.jsx)(t.h3,{id:"add-the-funkisepolia-to-your-wallet",children:"Add the FunkiSepolia to your Wallet"}),"\n",(0,o.jsx)(t.p,{children:"Most wallets include the FunkiSepolia as one of the default testnet networks. You may need to enable developer mode to view them."}),"\n",(0,o.jsxs)(t.p,{children:["For this tutorial, you'll deploy a contract to the FunkiSepolia. To fund your wallet with Funki Sepolia ETH, use one of the faucets listed on the Funki ",(0,o.jsx)(t.a,{href:"https://funkichain.com/portfolio/tokens?modal=claim-faucet",children:"Network Faucets"})," page."]}),"\n",(0,o.jsx)(t.h3,{id:"get-testnet-ether",children:"Get Testnet Ether"}),"\n",(0,o.jsx)(t.p,{children:"Testnet tokens have no real monetary value, but their supply is limited. Use a faucet to obtain a small amount of Sepolia Ether for paying gas fees during testing. Most faucets allow you to request a modest sum daily, and some will refuse to send more if your balance is already high."}),"\n",(0,o.jsx)(t.p,{children:"It's wise to bookmark multiple faucets, which you can easily find through a simple search. This precaution helps because faucets occasionally go offline. Faucet providers often battle against malicious actors and may need to temporarily disable their services."}),"\n",(0,o.jsxs)(t.p,{children:["You can access ",(0,o.jsx)(t.a,{href:"https://funkichain.sipher.gg/portfolio/tokens?modal=claim-faucet",children:"the FunkiSepolia faucet"})," for some test tokens."]}),"\n",(0,o.jsxs)(t.p,{children:["After obtaining testnet Funki Sepolia Ether, you can view your balance under the ",(0,o.jsx)(t.em,{children:"Testnets"})," tab in the Coinbase wallet, or by selecting the testnet from the network dropdown in MetaMask. Don't get too excited, though\u2014despite the impressive numbers you might see, it's not actually worth real money!"]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsxs)(t.h2,{id:"deploying-to-testnet",children:["Deploying to Testnet",(0,o.jsx)(t.a,{href:"#deploying-to-testnet"})]}),"\n",(0,o.jsxs)(t.p,{children:["With testnet Ether in hand, you're ready to deploy the ",(0,o.jsx)(t.code,{children:"Storage"})," contract!"]}),"\n",(0,o.jsx)(t.h3,{id:"selecting-the-environment",children:"Selecting the Environment"}),"\n",(0,o.jsxs)(t.p,{children:["Navigate to the ",(0,o.jsx)(t.em,{children:"Deploy & Run Transactions"})," tab. In the ",(0,o.jsx)(t.em,{children:"Environment"})," dropdown, choose ",(0,o.jsx)(t.em,{children:"Injected Provider"}),". This will display ",(0,o.jsx)(t.em,{children:"Coinbase"}),", ",(0,o.jsx)(t.em,{children:"MetaMask"}),", or any other wallet you've activated."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"image.png",src:n(399).A+"",width:"2000",height:"1872"})}),"\n",(0,o.jsxs)(t.p,{children:["Can't find the option? No worries\u2014just select ",(0,o.jsx)(t.code,{children:"Customize this list..."})," to add it."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"image.png",src:n(8754).A+"",width:"2000",height:"1082"})}),"\n",(0,o.jsx)(t.p,{children:"Your first connection will trigger a wallet prompt, asking you to confirm linking Remix to your wallet."}),"\n",(0,o.jsxs)(t.p,{children:["Once connected, you'll spot the network name right below the ",(0,o.jsx)(t.em,{children:"Environment"})," dropdown."]}),"\n",(0,o.jsxs)(t.p,{children:["For the FunkiSepolia, look for ",(0,o.jsx)(t.code,{children:"Custom (3397901) network"}),". (",(0,o.jsx)(t.strong,{children:"Note:"})," Deploying to mainnet? You'll see ",(0,o.jsx)(t.code,{children:"Custom (33979) network"})," instead.)"]}),"\n",(0,o.jsx)(t.p,{children:"If the network doesn't match, simply switch to the correct one in your wallet."}),"\n",(0,o.jsxs)(t.h3,{id:"deploy-the-contract",children:["Deploy the Contract",(0,o.jsx)(t.a,{href:"#deploy-the-contract"})]}),"\n",(0,o.jsxs)(t.p,{children:["Click the orange\xa0",(0,o.jsx)(t.em,{children:"Deploy"}),"\xa0button. Because it costs gas to deploy a contract, you'll be asked to review and confirm a transaction."]}),"\n",(0,o.jsxs)(t.admonition,{type:"danger",children:[(0,o.jsxs)(t.p,{children:["Always carefully review all transactions, confirming the transaction cost, assets transferred, and network. As a developer, you'll become accustomed to approving transactions frequently. Make a conscious effort to avoid falling into the habit of clicking ",(0,o.jsx)(t.em,{children:"Confirm"})," without thoroughly examining the transaction details. If you feel rushed to ",(0,o.jsx)(t.em,{children:"Confirm"})," before time runs out, it's likely a scam."]}),(0,o.jsxs)(t.p,{children:["After clicking the ",(0,o.jsx)(t.em,{children:"Confirm"})," button, return to Remix and wait for the transaction to deploy. Copy its address and navigate to ",(0,o.jsx)(t.a,{href:"https://funkiscan.io/",children:"https://funkiscan.io/"}),". ",(0,o.jsx)(t.strong,{children:"Note:"})," If you deployed to mainnet, you'll navigate to ",(0,o.jsx)(t.a,{href:"https://funkiscan.io/",children:"https://funkiscan.io/"})," instead."]})]}),"\n",(0,o.jsxs)(t.h3,{id:"verify-the-contract",children:["Verify the Contract",(0,o.jsx)(t.a,{href:"#verify-the-contract"})]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:"Verifying the contract is unnecessary if you've deployed one that's identical to a previously verified contract."})}),"\n",(0,o.jsxs)(t.p,{children:["You can interact with your deployed contract using Remix as before, but it's also possible to interact through ",(0,o.jsx)(t.a,{href:"https://funkiscan.io/",children:"FunkiScan"}),". Simply paste your contract's address in the search field to locate it."]}),"\n",(0,o.jsxs)(t.p,{children:["To verify your contract, use the ",(0,o.jsx)(t.a,{href:"https://funkiscan.io/verifycontract",children:"FunkiScan verification tool"}),". Follow these steps:"]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Enter your deployed contract's address."}),"\n",(0,o.jsx)(t.li,{children:"Select your programming language."}),"\n",(0,o.jsx)(t.li,{children:"Provide the compiler information and upload your file(s). Ensure this information matches exactly what you used when compiling your contract for deployment. You can upload multiple files or a single flattened file."}),"\n",(0,o.jsx)(t.li,{children:'Click "Verify Contract" and await the result.'}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"image.png",src:n(2749).A+"",width:"2094",height:"1073"})}),"\n",(0,o.jsx)(t.p,{children:"After successfully verify, you will be able to see your contract\u2019s source code on FunkiScan just like this."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"image.png",src:n(4107).A+"",width:"1386",height:"1170"})}),"\n",(0,o.jsxs)(t.h2,{id:"interact-with-the-contract-on-funkiscan",children:["Interact with the Contract on FunkiScan",(0,o.jsx)(t.a,{href:"#interact-with-the-contract"})]}),"\n",(0,o.jsxs)(t.p,{children:["You can now interact with your contract using ",(0,o.jsx)(t.a,{href:"https://docs.funkichain.com/docs/network-information",children:"FunkiChain"}),". Click the ",(0,o.jsx)(t.em,{children:"Contract"})," tab. If your contract is verified, you'll see the contract's source code and all its functions under the ",(0,o.jsx)(t.code,{children:"Read Contract"})," and ",(0,o.jsx)(t.code,{children:"Write Contract"})," buttons. Note that only write functions require an on-chain transaction."]}),"\n",(0,o.jsxs)(t.p,{children:["To interact with write functions, you need to sign in to ",(0,o.jsx)(t.a,{href:"https://docs.funkichain.com/docs/network-information",children:"FunkiChain"})," with your wallet. Currently, you can choose from any of the supported wallet providers that appear."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"image.png",src:n(6435).A+"",width:"699",height:"470"})}),"\n",(0,o.jsx)(t.p,{children:"Once connected, you're all set to interact with any write function of the contract. Make sure your input is correct and double-check the transaction details before confirming any transaction."}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsxs)(t.h2,{id:"conclusion",children:["Conclusion",(0,o.jsx)(t.a,{href:"#conclusion"})]}),"\n",(0,o.jsx)(t.p,{children:"Congratulations! You've now acquired the ability to deploy smart contracts on the blockchain. While you've only deployed to a test network so far, the process for real networks is identical\u2014just with higher costs!"})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},6435:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/connect-wallet-3f6cd0a9668c620b7a2cd773c3d00f22.png"},8754:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/remix-enviroment-custom-a15eb368fb8ef0d4433cdfd5fe0f9318.png"},399:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/remix-enviroment-dropdown-d0a35b4ca480aa23f57e4f8b1dec4d80.png"},4107:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/remix-success-contract-121c21f2a34256e680be755c77d5995b.png"},4490:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/remix-tx-log-6e2a2cfa50ef4c24b1c729bd8afdd97e.png"},2749:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/remix-verify-contract-90235ec07b5650324577c62bdfeb6d1c.png"},1184:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(4041);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunk_funki_docs_frontend=self.webpackChunk_funki_docs_frontend||[]).push([[4227],{4595:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"tutorials/deploy-sm-using-foundry","title":"Deploying a smart contract using Foundry","description":"","source":"@site/docs/tutorials/deploy-sm-using-foundry.md","sourceDirName":"tutorials","slug":"/tutorials/deploy-sm-using-foundry","permalink":"/docs/tutorials/deploy-sm-using-foundry","draft":false,"unlisted":false,"editUrl":"https://github.com/funkichain/docs/edit/main/packages/frontend/docs/tutorials/deploy-sm-using-foundry.md","tags":[],"version":"current","lastUpdatedAt":1734445511000,"frontMatter":{"title":"Deploying a smart contract using Foundry","slug":"/tutorials/deploy-sm-using-foundry","order":5.2,"description":""},"sidebar":"docSidebar","previous":{"title":"Deploying a smart contract using Hardhat","permalink":"/docs/tutorials/deploy-sm-using-hardhat"},"next":{"title":"Deploying a smart contract using Remix","permalink":"/docs/tutorials/deploy-sm-using-remix"}}');var i=t(1085),o=t(1184);const s={title:"Deploying a smart contract using Foundry",slug:"/tutorials/deploy-sm-using-foundry",order:5.2,description:""},a=void 0,c={},l=[{value:"Objectives",id:"objectives",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Foundry",id:"foundry",level:3},{value:"Web3 Wallet",id:"web3-wallet",level:3},{value:"Wallet Funds",id:"wallet-funds",level:3},{value:"Creating a Project",id:"creating-a-project",level:2},{value:"Compiling the Smart Contract",id:"compiling-the-smart-contract",level:2},{value:"Configuring Foundry with Funki",id:"configuring-foundry-with-funki",level:2},{value:"Storing your private key",id:"storing-your-private-key",level:3},{value:"Adding Funki as a network",id:"adding-funki-as-a-network",level:3},{value:"Loading environment variables",id:"loading-environment-variables",level:3},{value:"Deploying the Smart Contract",id:"deploying-the-smart-contract",level:2},{value:"Verifying the Smart Contract",id:"verifying-the-smart-contract",level:2},{value:"Interacting with the Smart Contract",id:"interacting-with-the-smart-contract",level:2},{value:"Performing a call",id:"performing-a-call",level:3},{value:"Signing and publishing a transaction",id:"signing-and-publishing-a-transaction",level:3},{value:"Interact with the Contract on FunkiScan",id:"interact-with-the-contract-on-funkiscan",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["This article provides an overview of the Funki development toolchain and demonstrates how to deploy a contract to the ",(0,i.jsx)(n.strong,{children:"FUNKI"})," network."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://book.getfoundry.sh/",children:"Foundry"})," is a powerful suite of tools for developing, testing, and debugging smart contracts. It consists of four key components:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"forge"}),": Foundry's main workhorse\u2014used for developing, testing, compiling, and deploying smart contracts"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cast"}),": A command-line tool for performing Ethereum RPC calls (e.g., interacting with contracts, sending transactions, and retrieving on-chain data)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"anvil"}),": A local testnet node for testing contract behavior from a frontend or over RPC"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"chisel"}),": A Solidity ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop",children:"REPL"})," for experimenting with Solidity snippets on a local or forked network"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Funki offers lightning-fast feedback loops (thanks to its Rust-based implementation) and minimizes context switching\u2014you'll write your contracts, tests, and deployment scripts all in Solidity!"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["For production or mainnet deployments, the process remains largely the same. The key difference is configuring ",(0,i.jsx)(n.code,{children:"FunkiMainnet"})," as your network instead of ",(0,i.jsx)(n.code,{children:"FunkiSepolia"}),". For network details, refer to the ",(0,i.jsx)(n.a,{href:"https://docs.funkichain.com/docs/network-information",children:"Funki chain info"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"objectives",children:"Objectives"}),"\n",(0,i.jsx)(n.p,{children:"By the end of this tutorial, you'll be able to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Set up Foundry for Funki development"}),"\n",(0,i.jsx)(n.li,{children:"Create an NFT smart contract compatible with Funki"}),"\n",(0,i.jsxs)(n.li,{children:["Compile a smart contract for Funki using ",(0,i.jsx)(n.code,{children:"forge"})]}),"\n",(0,i.jsxs)(n.li,{children:["Deploy a smart contract to Funki using ",(0,i.jsx)(n.code,{children:"forge"})]}),"\n",(0,i.jsxs)(n.li,{children:["Interact with a deployed smart contract on Funki using ",(0,i.jsx)(n.code,{children:"cast"})]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.h3,{id:"foundry",children:"Foundry"}),"\n",(0,i.jsx)(n.p,{children:"This tutorial requires Foundry. To install it:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Run this command in your terminal: ",(0,i.jsx)(n.code,{children:"curl -L https://foundry.paradigm.xyz | bash"})]}),"\n",(0,i.jsxs)(n.li,{children:["Then run ",(0,i.jsx)(n.code,{children:"foundryup"})," to install the latest (nightly) build of Foundry"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For more details, consult the Foundry Book's ",(0,i.jsx)(n.a,{href:"https://book.getfoundry.sh/getting-started/installation",children:"installation guide"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"web3-wallet",children:"Web3 Wallet"}),"\n",(0,i.jsx)(n.p,{children:"To deploy a smart contract, you'll need a web3 wallet. Create one by installing a wallet browser extension:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Install ",(0,i.jsx)(n.a,{href:"https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?utm_source=metamask.io&pli=1",children:"MetaMask Wallet"})]}),"\n",(0,i.jsxs)(n.li,{children:["Install ",(0,i.jsx)(n.a,{href:"https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad?hl=en",children:"Coinbase Wallet"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"wallet-funds",children:"Wallet Funds"}),"\n",(0,i.jsxs)(n.p,{children:["Deploying contracts requires ETH for gas fees. For this tutorial, you'll deploy to the Funnki testnet. Fund your wallet with Funki Sepolia ETH using a faucet listed on the Funki ",(0,i.jsx)(n.a,{href:"https://funkichain.com/portfolio/tokens?modal=claim-faucet",children:"Network Faucets"})," page."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"creating-a-project",children:"Creating a Project"}),"\n",(0,i.jsx)(n.p,{children:"Before deploying smart contracts to Funki, set up your development environment by creating a Foundry project."}),"\n",(0,i.jsx)(n.p,{children:"To create a new Foundry project, first create a directory:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mkdir myproject\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd myproject\nforge init\n"})}),"\n",(0,i.jsx)(n.p,{children:"This creates a Foundry project with the following basic layout:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:".\n\u251c\u2500\u2500 foundry.toml\n\u251c\u2500\u2500 script\n\u2502   \u2514\u2500\u2500 Counter.s.sol\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 Counter.sol\n\u2514\u2500\u2500 test\n    \u2514\u2500\u2500 Counter.t.sol\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"compiling-the-smart-contract",children:"Compiling the Smart Contract"}),"\n",(0,i.jsxs)(n.p,{children:["Here's a simple NFT (non-fungible token) smart contract that conforms to the ",(0,i.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-721",children:"ERC-721"})," standard, written in Solidity:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-solidity",children:'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.23;\n\nimport "openzeppelin-contracts/contracts/token/ERC721/ERC721.sol";\n\ncontract NFT is ERC721 {\n    uint256 public currentTokenId;\n\n    constructor() ERC721("NFT Name", "NFT") {}\n\n    function mint(address recipient) public payable returns (uint256) {\n        uint256 newItemId = ++currentTokenId;\n        _safeMint(recipient, newItemId);\n        return newItemId;\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This Solidity code defines an ",(0,i.jsx)(n.code,{children:"NFT"})," smart contract using the ",(0,i.jsx)(n.code,{children:"ERC721"})," interface from the ",(0,i.jsx)(n.a,{href:"https://docs.openzeppelin.com/contracts/5.x/",children:"OpenZeppelin Contracts library"}),". OpenZeppelin offers battle-tested smart contract implementations that comply with official ERC standards."]}),"\n",(0,i.jsx)(n.p,{children:"To incorporate the OpenZeppelin Contracts library into your project, execute:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"forge install openzeppelin/openzeppelin-contracts\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In your project, replace the generated ",(0,i.jsx)(n.code,{children:"src/Counter.sol"})," contract with the above code in a new file called ",(0,i.jsx)(n.code,{children:"contracts/NFT.sol"}),". (You can also remove ",(0,i.jsx)(n.code,{children:"test/Counter.t.sol"})," and ",(0,i.jsx)(n.code,{children:"script/Counter.s.sol"}),", but be sure to add your own tests soon!)"]}),"\n",(0,i.jsx)(n.p,{children:"To compile our basic NFT contract using Foundry, run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"forge build\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"configuring-foundry-with-funki",children:"Configuring Foundry with Funki"}),"\n",(0,i.jsx)(n.p,{children:"Next, you'll configure your Foundry project for deploying smart contracts to the Funki network. This two-step process involves storing your private key in an encrypted keystore and adding Funki as a network."}),"\n",(0,i.jsx)(n.h3,{id:"storing-your-private-key",children:"Storing your private key"}),"\n",(0,i.jsx)(n.p,{children:"To import your private key into Foundry's secure keystore, use the following command. You'll be prompted to enter your private key and create a password for transaction signing:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cast wallet import deployer --interactive\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["To retrieve your private key from Wallet, refer to the ",(0,i.jsx)(n.a,{href:"https://docs.cloud.coinbase.com/wallet-sdk/docs/developer-settings#show-private-key",children:"Coinbase Wallet documentation"})," or ",(0,i.jsx)(n.a,{href:"https://docs.metamask.io/",children:"Metamask Wallet documentation"}),". ",(0,i.jsx)(n.strong,{children:"Never commit your private key to a public repository"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Verify that the 'deployer' account is set up in Foundry by running:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cast wallet list\n"})}),"\n",(0,i.jsx)(n.h3,{id:"adding-funki-as-a-network",children:"Adding Funki as a network"}),"\n",(0,i.jsxs)(n.p,{children:["To verify a contract with FunkiScan, you'll need an API key. Obtain your FunkiScan API key ",(0,i.jsx)(n.a,{href:"https://funki.superscan.network/",children:"here"})," after creating an account."]}),"\n",(0,i.jsxs)(n.p,{children:["Create a ",(0,i.jsx)(n.code,{children:".env"})," file in your project's home directory to add the Funki network and your FunkiScan API key:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'FUNKI_MAINNET_RPC="https://rpc-mainnet.funkichain.com"\nFUNKI_TESTNET_RPC="https://funki-testnet.alt.technology"\nETHERSCAN_API_KEY="<YOUR API KEY>"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Although you're using FunkiScan as your block explorer, Foundry requires the API key to be defined as ",(0,i.jsx)(n.code,{children:"ETHERSCAN_API_KEY"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"loading-environment-variables",children:"Loading environment variables"}),"\n",(0,i.jsxs)(n.p,{children:["After creating the ",(0,i.jsx)(n.code,{children:".env"})," file, load the environment variables in your current command line session with:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"source .env\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"deploying-the-smart-contract",children:"Deploying the Smart Contract"}),"\n",(0,i.jsx)(n.p,{children:"With your contract compiled and environment configured, you're ready to deploy to the Funki testnet!"}),"\n",(0,i.jsxs)(n.p,{children:["You'll use the ",(0,i.jsx)(n.code,{children:"forge create"})," command\u2014a straightforward way to deploy a single contract. For more complex projects, consider exploring ",(0,i.jsx)(n.a,{href:"https://book.getfoundry.sh/tutorials/solidity-scripting",children:(0,i.jsx)(n.code,{children:"forge script"})}),", which enables scripting on-chain transactions and deploying intricate smart contract systems."]}),"\n",(0,i.jsxs)(n.p,{children:["Before proceeding, ensure you have testnet ETH in your wallet. If not, revisit the ",(0,i.jsx)(n.a,{href:"#prerequisites",children:"prerequisites"})," to avoid deployment hiccups."]}),"\n",(0,i.jsx)(n.p,{children:"To deploy the contract to Funki Sepolia Testnet, execute the following command and enter the password you set when importing your private key:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"forge create ./src/NFT.sol:NFT --rpc-url $FUNKI_TESTNET_RPC --account deployer\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Once deployed, view the contract's status using a ",(0,i.jsx)(n.a,{href:"https://docs-funki.sipher.gg/docs/tools/block-explorers/",children:"block explorer"}),". Search for the address returned by your deploy script. If you've deployed an exact copy of the NFT contract above, it will be pre-verified, allowing you to interact with it via the web interface."]}),"\n",(0,i.jsx)(n.p,{children:"For mainnet deployment, modify the command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"forge create ./src/NFT.sol:NFT --rpc-url $FUNKI_MAINNET_RPC --account deployer\n"})}),"\n",(0,i.jsx)(n.p,{children:"Remember, new or modified contracts require verification, regardless of the network."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"verifying-the-smart-contract",children:"Verifying the Smart Contract"}),"\n",(0,i.jsx)(n.p,{children:"In web3, contract verification is crucial. It allows users and developers to inspect the source code and confirm it matches the deployed bytecode on the blockchain."}),"\n",(0,i.jsx)(n.p,{children:"Verification is also necessary for others to interact with your contract via the block explorer. While the above contract is pre-verified, let's walk through the verification process on Funki testnet."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["As of this writing, FunkiScan utilizes the RouteScan API. Their free tier doesn't require an API key and offers ",(0,i.jsx)(n.strong,{children:"2 requests per second (rps)"})," with ",(0,i.jsx)(n.strong,{children:"a daily limit of 10,000 calls"}),". For more details, visit the ",(0,i.jsx)(n.a,{href:"https://routescan.io/documentation#api-plans",children:"RouterScan API Plans"})," page."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To verify, grab the deployed address and run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"forge verify-contract &lt;DEPLOYED_ADDRESS&gt; ./src/NFT.sol:NFT --chain 33979 --watch\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Confirm verification by searching for your contract on ",(0,i.jsx)(n.a,{href:"https://funkiscan.io/",children:"FunkiScan"}),"."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Note: You cannot re-verify a contract that has already been verified with identical code. Attempting to do so will result in an error."}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"interacting-with-the-smart-contract",children:"Interacting with the Smart Contract"}),"\n",(0,i.jsxs)(n.p,{children:["After verifying your contract on ",(0,i.jsx)(n.a,{href:"https://funkiscan.io/",children:"FunkiScan"}),', you can interact with it through the "Read Contract" and "Write Contract" sections under the "Contract" tab. To use the "Write Contract" feature, connect your wallet by clicking the "Connect to Web3" button. Be aware that you might need to click "Connect" twice to establish a successful connection.']}),"\n",(0,i.jsxs)(n.p,{children:["To practice using Foundry's ",(0,i.jsx)(n.code,{children:"cast"})," command-line tool, you'll perform a read operation without publishing a transaction, then sign and publish a write transaction."]}),"\n",(0,i.jsx)(n.h3,{id:"performing-a-call",children:"Performing a call"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"cast"}),", a core component of the Foundry toolkit, enables interaction with contracts, transaction sending, and on-chain data retrieval via Ethereum RPC calls. Let's begin by executing a read-only call from your account."]}),"\n",(0,i.jsx)(n.p,{children:"Enter this command in your terminal:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'cast call &lt;DEPLOYED_ADDRESS&gt; --rpc-url $FUNKI_TESTNET_RPC "balanceOf(address)" &lt;YOUR_ADDRESS_HERE&gt;\n'})}),"\n",(0,i.jsxs)(n.p,{children:["You should receive ",(0,i.jsx)(n.code,{children:"0x0000000000000000000000000000000000000000000000000000000000000000"})," in response, which equals ",(0,i.jsx)(n.code,{children:"0"})," in hexadecimal. This makes sense\u2014you've deployed the NFT contract, but no NFTs have been minted yet, so your account balance is zero."]}),"\n",(0,i.jsx)(n.h3,{id:"signing-and-publishing-a-transaction",children:"Signing and publishing a transaction"}),"\n",(0,i.jsxs)(n.p,{children:["Now, let's sign and publish a transaction by calling the ",(0,i.jsx)(n.code,{children:"mint(address)"})," function on your newly deployed NFT contract."]}),"\n",(0,i.jsx)(n.p,{children:"Enter the following command in your terminal:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'cast send &lt;DEPLOYED_ADDRESS&gt; --rpc-url=$FUNKI_TESTNET_RPC "mint(address)" &lt;YOUR_ADDRESS_HERE&gt; --account deployer\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Note that this ",(0,i.jsx)(n.code,{children:"cast send"})," command requires your private key, unlike ",(0,i.jsx)(n.code,{children:"cast call"}),". The latter is for view-only functions and doesn't need signing."]}),"\n",(0,i.jsxs)(n.p,{children:["Upon success, Foundry will display transaction details, including the ",(0,i.jsx)(n.code,{children:"blockNumber"}),", ",(0,i.jsx)(n.code,{children:"gasUsed"}),", and ",(0,i.jsx)(n.code,{children:"transactionHash"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["To verify that you've minted an NFT, run the initial ",(0,i.jsx)(n.code,{children:"cast call"})," command again. Your balance should now show an increase from 0 to 1:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'cast call &lt;DEPLOYED_ADDRESS&gt; --rpc-url $FUNKI_TESTNET_RPC "balanceOf(address)" &lt;YOUR_ADDRESS_HERE&gt;\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The response should be ",(0,i.jsx)(n.code,{children:"0x0000000000000000000000000000000000000000000000000000000000000001"})," (",(0,i.jsx)(n.code,{children:"1"})," in hex). Congratulations! You've successfully deployed a contract and minted an NFT using Foundry."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h2,{id:"interact-with-the-contract-on-funkiscan",children:["Interact with the Contract on FunkiScan",(0,i.jsx)(n.a,{href:"#interact-with-the-contract"})]}),"\n",(0,i.jsxs)(n.p,{children:["You can now interact with your contract using ",(0,i.jsx)(n.a,{href:"https://docs.funkichain.com/docs/network-information",children:"FunkiChain"}),". Click the ",(0,i.jsx)(n.em,{children:"Contract"})," tab. If your contract is verified, you'll see the contract's source code and all its functions under the ",(0,i.jsx)(n.code,{children:"Read Contract"})," and ",(0,i.jsx)(n.code,{children:"Write Contract"})," buttons. Note that only write functions require an on-chain transaction."]}),"\n",(0,i.jsxs)(n.p,{children:["To interact with write functions, you need to sign in to ",(0,i.jsx)(n.a,{href:"https://docs.funkichain.com/docs/network-information",children:"FunkiChain"})," with your wallet. Currently, you can choose from any of the supported wallet providers that appear."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image.png",src:t(6435).A+"",width:"699",height:"470"})}),"\n",(0,i.jsx)(n.p,{children:"Once connected, you're all set to interact with any write function of the contract. Make sure your input is correct and double-check the transaction details before confirming any transaction."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"Congratulations! You've accomplished a great deal. You've mastered project setup, deployment to Funki, and smart contract interaction using Foundry. This process applies to real networks too, albeit at a higher cost. Remember, thorough testing of your contracts is crucial to minimize the risk of bugs that could affect users before deployment."}),"\n",(0,i.jsxs)(n.p,{children:["For comprehensive Foundry resources, dive into the ",(0,i.jsx)(n.a,{href:"https://book.getfoundry.sh/",children:"Foundry book"}),". Need community support? Join the official Telegram ",(0,i.jsx)(n.a,{href:"https://t.me/foundry_rs",children:"dev chat"})," or ",(0,i.jsx)(n.a,{href:"https://t.me/foundry_support",children:"support chat"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},6435:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/connect-wallet-3f6cd0a9668c620b7a2cd773c3d00f22.png"},1184:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(4041);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);
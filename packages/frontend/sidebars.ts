import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // docSidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually
  docSidebar: [
    "overview",
    "the-dokodemo-protocol",
    "using-funki",
    {
      type: "category",
      collapsed: false,
      collapsible: false,
      label: "Building on Funki",
      items: [
        "building-on-funki/network-information",
        "building-on-funki/funki-contracts",
        "building-on-funki/fees",
        "building-on-funki/differences",
      ],
    },
    {
      type: "category",
      collapsed: false,
      collapsible: false,
      label: "Tutorials",
      items: [
        "tutorials/deploy-sm-using-hardhat",
        "tutorials/deploy-sm-using-foundry",
        "tutorials/deploy-sm-using-remix",
        "tutorials/verify-sm-on-funkichain",
        "tutorials/simple-nfts",
        "tutorials/simple-fungible-tokens",
      ],
    },
    {
      type: "category",
      collapsed: false,
      collapsible: false,
      label: "Tools",
      items: [
        "tools/node-providers",
        "tools/block-explorers",
        "tools/network-faucets",
        "tools/cross-chain",
        "tools/onramps",
        {
          type: "category",
          label: "Bridges",
          collapsible: true,
          collapsed: true,
          items: [
            "tools/bridges/bridges-mainnet",
            "tools/bridges/bridges-testnet",
            "tools/bridges/bridges-faq",
          ],
        },
        {
          type: "category",
          label: "Toolchains",
          collapsible: true,
          collapsed: true,
          items: [
            "tools/toolchains/foundry",
            "tools/toolchains/hardhat",
            "tools/toolchains/thirdweb-cli",
          ],
        },
        {
          type: "category",
          label: "Clients",
          collapsible: true,
          collapsed: true,
          items: [
            "tools/clients/ethers",
            "tools/clients/thirdweb-sdk",
            "tools/clients/viem",
            "tools/clients/web3",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Tokens",
      collapsed: false,
      collapsible: false,
      items: ["tokens/token-list", "tokens/wallet"],
    },
    "security",
    {
      type: "link",
      label: "Brand Kit",
      href: "https://github.com/funkichain/brand-kit",
    },
    "terms-of-use",
    "privacy-policy",
  ],
};

export default sidebars;

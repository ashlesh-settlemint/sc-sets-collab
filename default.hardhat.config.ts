
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import '@settlemint/graph-middleware/hardhat/dist/graph-config';
import '@settlemint/graph-middleware/hardhat/dist/save-deploy';
import '@typechain/hardhat';
import 'hardhat-abi-exporter';
import 'hardhat-deploy';
import 'hardhat-log-remover';
import { HardhatUserConfig } from 'hardhat/config';
import 'solidity-coverage';

// Workaround for older smart contract sets
const abiExporter: any = {
  path: './abi',
  runOnCompile: true,
  clear: true,
  flat: true,
  spacing: 2,
};

const config: HardhatUserConfig = {
  abiExporter,
  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: 'istanbul',
    },
  },
  namedAccounts: {
  "kashifdemopvtkey-82c9": {
    "default": "0xF1f8A50882A044e26751792F2Cd2E76C960aa47c"
  },
  "deployer": {
    "default": "0xF1f8A50882A044e26751792F2Cd2E76C960aa47c"
  }
},
  networks: {
  "hardhat": {
    "chainId": 1337
  },
  "kashifnode-b759": {
    "url": "https://kashifnode-b759.settlemint.com",
    "gas": "2100000",
    "gasPrice": "0",
    "httpHeaders": {
      "Authorization": `Bearer ${process.env.JWT}`
    }
  }
},
};

export default config;

export const ipfsNodes: Record<
  string,
  {
    headers: Record<string, string>;
    url: string;
    gateway: string;
  }
  > = {
  "kashifnftdemo-55f9": {
    "url": "https://kashifnftdemo-55f9.settlemint.com",
    "gateway": "https://staging-kashifnftdemo-55f9.settlemint.com",
    "headers": {
      "Authorization": `Bearer ${process.env.JWT}`
    }
  }
};

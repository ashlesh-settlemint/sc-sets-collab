import { HardhatUserConfig } from 'hardhat/config';
import bpaasConfig from './.secrets/default.hardhat.config';

const config: HardhatUserConfig = {
  ...bpaasConfig,
  networks:
    // add allowUnlimitedContractSize to the each value inside bpaasConfig.networks

    bpaasConfig.networks
      ? Object.keys(bpaasConfig.networks).reduce((acc: any, networkName: string) => {
          if (bpaasConfig.networks && bpaasConfig.networks[networkName]) {
            acc[networkName] = {
              ...bpaasConfig.networks[networkName],
              allowUnlimitedContractSize: true,
            };
            return acc;
          }
        }, {})
      : {},
};

export default config;

// https://eth-ropsten.alchemyapi.io/v2/BZ1hAE4U4quA79qSUs5BIZZVY5OL7aH6

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks:{
    ropsten:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/BZ1hAE4U4quA79qSUs5BIZZVY5OL7aH6',
      accounts: [ '5fb45ab533fa6ee5a22bbe629c1f1f34a14982fd121a4de8e48fb86bf5af3bdc' ]
    }
  }
}
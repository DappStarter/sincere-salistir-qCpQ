require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note snow collect harvest option bottom tortoise'; 
let testAccounts = [
"0xb7158b31f30aab6bb276ec8afdcdf45c3ce9943c57fa686f7e06dc4954fab82e",
"0x548501046b7b6370053c3c43495fd5b3a1e67cb5dff664befd7c366fefd20454",
"0xa8a0ac8b8992bd9a05680a0db78a19c2f11b9245656e2d49ebda59d9f95ca84e",
"0xb81485298e211feff9a7cea9b8081795cb9725d84df190923049b5dd6076154a",
"0x41c27f99776acf42a49f04bf2eb613b4c33090efd7b25e2b6f328b6ae0b40a5d",
"0x20adc0ca91beed98889b48b36513e9727b75afb6243b56fedf31d35989c42e63",
"0xa525df78d0dea3781a35e2ff6f7e4f706e4346354d16fbdbeba3ee9c4eacd09f",
"0x5df5313a1f245950a248d43af85c28cf5f6804ef015800b5711125d347eedb4b",
"0xcebdfdf833c3a0ad7018c379afb91f586189743277318a0d61887da67f649c3b",
"0xa984dd4bc6e3526afa83ecebd357e5482f28ebe3deb394e9d7819e2c1edd2c3d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


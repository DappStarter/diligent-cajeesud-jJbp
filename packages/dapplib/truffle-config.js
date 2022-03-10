require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remain history heavy clinic fresh twenty'; 
let testAccounts = [
"0xdd361e6a6246a16dfb6c94a551b9825af49180c8a5b057952251952b61af710a",
"0x3563e21bae525402180adf83cf17cca5bc437d2a2e173607fa657b8f109cac19",
"0x29a99f3e78ecdfa7e7a6ff952ae770e8ff21f4491a69c808b532870fb72a8a6e",
"0x8dce7bcdcd04610fb6ed517b39e7f728b4b9ef940b0a439412b0947e927b7e6d",
"0x172efa6511c2313dcd4f7ff004ff2a33b89322c2cbfdecc55f0d038d323e7418",
"0x4bbcb9a3133766bcf3d2f0a2447343f42fbf57478b5a66086eb8224b7d1c6c5d",
"0x2aba0835046d0072d2df80a2f1bf98a17028c3badcfe885bc4025e858fa2c41f",
"0xffb0fe060a7822158e376d2cbf1a19a985b99e1973e4b1cafd87961c4ef74975",
"0xe9d2573e3a588e4f47c0c9ee997feb79f8f200a3714d511a73dfb3efb6e1fccf",
"0x4bf0bfaf4c683db591723fc2cb7d172dd4e875232ae72e96ce47f3113d230d55"
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


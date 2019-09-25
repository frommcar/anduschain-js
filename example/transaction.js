const { Transaction } = require('../src/transaction');


const txData = {
    type: '0x00',
    nonce: '0x00',
    gasPrice: '0x09184e72a000',
    gasLimit: '0x2710',
    to: '0x0000000000000000000000000000000000000000',
    value: '0x00',
    data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057',
    v: '0x1c',
    r: '0x5e1d3a76fbf824220eafc8c79ad578ad2b67d01b0c2425eb1f1347e8f50882ab',
    s: '0x5bd428537f05f9830e93792f90ea6a3e2d1ee84952dd96edbae9f658f831ab13',
};

// const rawTx = [
//     '0x00',
//     '0x00',
//     '0x09184e72a000',
//     '0x2710',
//     '0x0000000000000000000000000000000000000000',
//     '0x00',
//     '0x7f7465737432000000000000000000000000000000000000000000000000000000600057',
//     '0x1c',
//     '0x5e1d3a76fbf824220eafc8c79ad578ad2b67d01b0c2425eb1f1347e8f50882ab',
//     '0x5bd428537f05f9830e93792f90ea6a3e2d1ee84952dd96edbae9f658f831ab13',
// ]

try {
    const tx = new Transaction(txData, 'testnet');
}catch (e) {
    console.log(e)
};

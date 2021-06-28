// Step 1: Set up the appropriate configuration
var Web3 = require('web3')
var EthereumTransaction = require('ethereumjs-tx').Transaction
var web3 = new Web3('HTTP://127.0.0.1:7545')

// Step 2: Set the sending and receiving addresses for the addresses
var sendingAddress = '0xba98a532ecEE612C065f061AFb50E251ff01779D'
var receivingAddress = '0xE533FCf4154fbe198C72D8d427442E11B942B678'
var privateKey = 'd74a45db5f2e67148310b5d9ffecdebbcb289a019e8609710362595e1b888935'

// Step 3: Check the balances of each address
web3.eth.getBalance(sendingAddress).then(console.log)
web3.eth.getBalance(receivingAddress).then(console.log)

// Step 4: Sign the transaction with the Hex value of the private key of the sender
const transaction = new EthereumTransaction({
    nonce: 15,
    to: receivingAddress,
    gasPrice: 20000000,
    gasLimit: 30000,
    value: 1,
    data: "0x"
})
transaction.sign(Buffer.from(privateKey, 'hex'))

// Step 6: Send the serialized signed transaction to the Ethereum network
web3.eth.sendSignedTransaction(transaction.serialize());

// getGasPrice
web3.eth.getGasPrice(console.log)

// getUncle
blockhash = '0x2c48a03d932206f9ca87f5845dfb2264b2d8de80278eabd960eb6ec8d3485719'
web3.eth.getBlock(blockhash).then(console.log)
web3.eth.getUncle(blockhash).then(console.log);

// getBlockTransactionCount
web3.eth.getBlockTransactionCount(blockhash).then(console.log)
web3.eth.getTransactionCount(sendingAddress).then(console.log)
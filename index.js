// Step 1: Set up the appropriate configuration
var Web3 = require('web3')
var EthereumTransaction = require('ethereumjs-tx').Transaction
var web3 = new Web3('INFURA_ENDPOINT_ADDRESS')

// Step 2: Set the sending and receiving addresses for the addresses
var sendingAddress = '0x0132F60cbd2561bbAE2792d665477C9C0EF0daD0'
var receivingAddress = '0x896576F51335004e55490bacCA10F9ADAE6C15c1'
var privateKey = 'SENDER_PRIVATE_KEY'

// Step 3: Check the balances of each address
web3.eth.getBalance(sendingAddress).then(console.log)
web3.eth.getBalance(receivingAddress).then(console.log)

// Step 4: Sign the transaction with the Hex value of the private key of the sender
const transaction = new EthereumTransaction({
    nonce: 0,
    to: receivingAddress,
    gasPrice: 200,
    gasLimit: 3,
    value: 1,
    data: "0x"
})
transaction.sign(Buffer.from(privateKey, 'hex'))

// Step 6: Send the serialized signed transaction to the Ethereum network
web3.eth.sendSignedTransaction(transaction.serialize());
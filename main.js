const Web3 = require("web3");
const provider = "https://rinkeby.infura.io/v3/207f9313845e42f2ab2469a252ba1d10"
const Web3Client = new Web3(new Web3.providers.HttpProvider(provider));
 

var address = "0xc18D9dd5AE9DEa357fA771FafB5Aa390Fd94b759"; // адрес контракта
let walletAddress = "0x62D1980Ff4f02caA249A9413201E4a9e9cDD1A8B"; // адрес кошелька

let minABI = [
    // balanceOf
    {
        "constant": true,
        "inputs": [{
            "name": "_owner",
            "type": "address"
        }],
        "name": "balanceOf",
        "outputs": [{
            "name": "balance",
            "type": "uint256"
        }],
        "type": "function"
    },
    // decimals
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [{
            "name": "",
            "type": "uint8"
        }],
        "type": "function"
    }
];

const contract = new Web3Client.eth.Contract(minABI, address);
async function getBalance() {

     result = await contract.methods.balanceOf(walletAddress).call();
     format = Web3Client.utils.fromWei(result, 'ether');
     
    console.log(format);
    alert(format);
}
getBalance();
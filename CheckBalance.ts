import Web3 from "web3";
import * as dotenv from 'dotenv';
//const walletAddress ="0xda67DE242bE3582EfE6b5713068BD9bA2f621A0E";
//const rpcURL = "https://rinkeby.infura.io/v3/0f198830abf541cc940d522d1ccb8876";
dotenv.config();
//console.log(process.env);
export const chkBalance = async():Promise<any>=>{

    try {

        const web3 = new Web3(new Web3.providers.HttpProvider(process.env.rpcRinkebyURL));
        const balance =  await web3.eth.getBalance(process.env.walletAddress);
        console.log('Your balance is:', web3.utils.fromWei(balance,'ether'));
        
    } catch (error) {
        
        console.log("Error: ", error);
    }
   
}
chkBalance().catch((error) => {
console.log("Error:", error);
process.exitCode=1;
})



// void async function() {
//   try {
//     const web3 = new Web3(new Web3.providers.HttpProvider(testnet));
//     const balance = await web3.eth.getBalance(walletAddress);
//     console.log('the balance is', web3.utils.fromWei(balance, 'ether'))
//   } catch (error) {
//     console.error(error)
//   }
// }();

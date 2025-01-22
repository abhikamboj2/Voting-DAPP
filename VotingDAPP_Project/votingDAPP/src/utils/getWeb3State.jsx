import {ethers} from "ethers";
import abi from "../constants/abi.json"
export const getWeb3State=async()=>{
    try{
         // metamask installed check 
        if(!window.ethereum){
            throw new Error("Meta Mask Not Installed")
        }
        const account=await window.ethereum.request({
            method:'eth_requestAccounts'
        })
        const selectedAccount=account[0];
        const chainIdHex=await window.ethereum.request({
            method:'eth_chainId'
        })
        const chainId=parseInt(chainIdHex,16);
        const provider= new ethers.BrowserProvider(window.ethereum);
        const signer=await provider.getSigner();
        const contractAddress="0xCCC15B5CCAF92d34f3A99c2270920D3Fcf42c290";
        const contractInstance=new ethers.Contract(contractAddress,abi,signer);
        return{ selectedAccount,contractInstance,chainId}
   }
   catch(error ){
    console.error(error);
    throw new Error;
   }
}
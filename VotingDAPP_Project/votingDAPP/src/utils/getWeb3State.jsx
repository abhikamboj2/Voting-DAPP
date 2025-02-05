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
        const contractAddress="0x410470831f788333DF0adc3D881f5850bF0Dc5c2";
        const contractInstance=new ethers.Contract(contractAddress,abi,signer);
        // console.log(contractInstance);
        return{ selectedAccount,contractInstance,chainId}
   }
   catch(error ){
    console.error(error);
    throw new Error;
   }
}
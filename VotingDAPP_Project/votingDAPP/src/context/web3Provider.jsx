import { getWeb3State } from "../utils/getWeb3State";
import { Web3context } from "./web3context";
import { useState } from "react";
const Web3Provider=(children)=> {
    const [webState,setWebState]= useState({
          contractInstance:null,
          selectedAccount:null,
          chainId:null
    })
    const handleWallet=async ()=>{
      try{

        const {contractInstance,selectedAccount,chainId}=await getWeb3State();
        // console.log(contractInstance,selectedAccount,chainId);
        setWebState({contractInstance,selectedAccount,chainId});
      }
      catch(err){
        console.error(err);
      }
    }
  return (
    <>
    <Web3context.Provider value={webState}>
           {children}
           <button onClick={handleWallet}>Connect Wallet</button>
    </Web3context.Provider>
    </>
  )
}

export default Web3Provider;
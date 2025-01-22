import { web3context } from "./web3context";
import  { useState } from 'react'
const web3Provider=({children})=> {
    const [webState,setWebState]=useState({
          contractInstance:null,
          selectedAccount:null,
          chainId:null
    })
    const handleWallet=async ()=>{
        const {contractInstance,selectedAccount,chainId}=await getWeb3Context();
        setWebState({contractInstance,selectedAccount,chainId});
    }
  return (
    <>
    <web3context.Provider value={webState}>
{children}
    </web3context.Provider>
    <button onClick={handleWallet}></button>
    </>
  )
}

export default web3Provider;
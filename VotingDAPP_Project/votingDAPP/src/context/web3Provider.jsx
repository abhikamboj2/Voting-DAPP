import { useEffect, useState } from "react";
import { web3context } from "./web3context";
import { getWeb3State } from "../utils/getWeb3State";
import { handleAccountChange } from "../utils/handleAccountChange";
import { handleChainChange } from "../utils/handleChainChange";

const Web3Provider = ({children})=>{
  const [web3State,setWeb3State]=useState({
    contractInstance:null,
    selectedAccount:null,
    chainId:null
  })
  const handleWallet = async()=>{
    try{

        const {contractInstance,selectedAccount,chainId} = await getWeb3State();
        setWeb3State({contractInstance,selectedAccount,chainId})
    }catch(error){
        console.error(error)
    }
  }
  useEffect(()=>{
    window.ethereum.on('accountsChanged',()=>handleAccountChange(setWeb3State))
    window.ethereum.on('chainChanged',()=>handleChainChange(setWeb3State))

    return()=>{
        window.ethereum.removeListener('accountsChanged',()=>handleAccountChange(setWeb3State))
        window.ethereum.removeListener('chainChanged',()=>handleChainChange(setWeb3State))
    }
  },[])
  
  return (
    <> 
      <web3context.Provider value={{web3State,handleWallet}}>
        {children}
      </web3context.Provider>
     
    </>
  )
}
export default Web3Provider;
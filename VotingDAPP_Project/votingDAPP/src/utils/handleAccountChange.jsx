// import React from 'react'
export const handleAccountChange=async(setWeb3State)=> {
    const account=await window.ethereum.request({
        method:'eth_requestAccounts'
    })
    const selectedAccount=account[0];
    setWeb3State((prev)=>({...prev, selectedAccount}));
  
}

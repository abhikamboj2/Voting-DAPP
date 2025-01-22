import { createContext } from "react";
import { Web3context } from "./context/web3context";



export default function Dummy() {
    const {contractInstance,selectedAccount,chainId}=createContext(Web3context);
    console.log(contractInstance,selectedAccount,chainId);
  return (
    <div>Dummy</div>
  )
}

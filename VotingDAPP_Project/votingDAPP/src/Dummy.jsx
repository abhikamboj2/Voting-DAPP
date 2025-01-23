import {   useContext } from "react";
import { Web3context } from "./context/web3context";



export default function Dummy() {
    const {contractInstance,selectedAccount,chainId}=useContext(Web3context);
    console.log(contractInstance,selectedAccount,chainId);
  return (
    <div>Dummy</div>
  )
}

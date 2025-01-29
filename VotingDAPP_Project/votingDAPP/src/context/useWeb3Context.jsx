import { useContext } from "react";
import { Web3context } from "./web3context";


export const useWeb3Context=()=>{
    return useContext(Web3context);
} 

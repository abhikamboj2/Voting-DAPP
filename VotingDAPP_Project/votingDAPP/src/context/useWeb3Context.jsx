import { useContext } from "react";
import { web3context } from "../context/web3context.jsx";


export const useWeb3Context=()=>{
    return useContext(web3context);
} 

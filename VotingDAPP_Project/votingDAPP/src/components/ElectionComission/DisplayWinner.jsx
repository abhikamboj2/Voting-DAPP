import { useEffect, useState } from "react";
import { useWeb3Context } from "../../context/useWeb3Context"


export default function DisplayWinner() {
  const {web3State}=useWeb3Context();
      const {contractInstance}=web3State;
  const [Winner,setWinner]=useState('');
  useEffect(()=>{
    const getWinner=async()=>{
      try{

        const WinningCandidate= await contractInstance.winner();
        setWinner(WinningCandidate)
      }catch(err){
        console.error(err)
      }

    }
    contractInstance&&getWinner();
  },[])
  return (
    <div><h1>Winner =: </h1> {Winner}</div>
  )
}

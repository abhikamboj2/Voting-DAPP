import { useEffect, useState } from "react";
import { useWeb3Context } from "../../context/useWeb3Context"


export default function DisplayWinner() {
  const {contractInstance}=useWeb3Context();
  const [Winner,setWinner]=useState('');
  useEffect(()=>{
    const getWinner=async()=>{
      try{

        const WinningCandidate= await contractInstance.winner();
        setWinner(WinningCandidate)
      }catch(err){
        console.error(
          err
        )
      }

    }
    contractInstance&&getWinner();
  },[])
  return (
    <div><h1>Winner =: </h1> {Winner}</div>
  )
}

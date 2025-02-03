// import {useEffect}from 'react'
import { useWeb3Context } from "../../context/useWeb3Context"
// import DisplayWinner from "./DisplayWinner";
    const AnnounceWinner = () => {
        const {contractInstance}=useWeb3Context();
                const getWinner =async()=>{
                    const Winner =await contractInstance.AnnounceWinner();
                    console.log(Winner)
                    
                }
     


  return (
    <div>
      <button onClick={getWinner}>Announce Winner</button>
    </div>
  )
}

export default AnnounceWinner

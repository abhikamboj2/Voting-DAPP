// import {useEffect}from 'react'
import { useWeb3Context } from "../../context/useWeb3Context"

        


export const EmergencyDeclare = () => {
  const {web3State}=useWeb3Context();
      const {contractInstance}=web3State;
      
       

                const emergencyDec =async()=>{
                    await contractInstance.emergencyStopVoting();
                   
                }
               
           
      
  return (
    <div>
        <button onClick={emergencyDec}>Emergency Declared</button>
    </div>
  )
}


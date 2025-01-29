// import {useEffect}from 'react'
import { useWeb3Context } from "../../context/useWeb3Context"

        


export const EmergencyDeclare = () => {
    const {contractInstance}=useWeb3Context();
      
       

                const emergencyDec =async()=>{
                    await contractInstance.emergencyStopVoting();
                   
                }
               
           
      
  return (
    <div>
        <button onClick={emergencyDec}>Emergency Declared</button>
    </div>
  )
}


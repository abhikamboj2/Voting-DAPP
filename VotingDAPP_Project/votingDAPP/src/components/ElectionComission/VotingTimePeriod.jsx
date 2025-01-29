import {useRef} from 'react'
import { useWeb3Context } from '../../context/useWeb3Context'
export const VotingTimePeriod = () => {
    const {contractInstance}=useWeb3Context();
    const Duration=useRef(null);
    const End_Time=useRef(null);
    const handleVotingPeriod=async(e)=>{
        try{

            e.preventDefault();
            const RefDuration=Duration.current.value;
            const RefEnd_Time=End_Time.current.value;
            await contractInstance.setVotingPeriod(RefDuration,RefEnd_Time)
        }catch(er){
            console.error(er)

        }
    }

  return (
    <div>VotingTimePeriod

        <form onSubmit={handleVotingPeriod}> 
            <label>Duration: </label>
            <input type='number' ref={Duration}></input>
            <label> End Time:</label>
            <input type='number' ref={End_Time}></input>
           <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

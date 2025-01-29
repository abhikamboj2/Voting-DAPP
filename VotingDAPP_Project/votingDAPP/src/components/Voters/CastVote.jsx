import {useRef} from 'react'
import { useWeb3Context } from "../../context/useWeb3Context"

export const CastVote = () => {
    const {contractInstance}=useWeb3Context();
    const RefVoterID=useRef(null);
    const RefCandidateID=useRef(null);
    const handleCastVote=async(e)=>{
        e.preventDefault();
        try{

            const voterId=RefVoterID.current.value;
            const candidateID=RefCandidateID.current.value;
            await contractInstance.castVote(voterId,candidateID);
        }catch(err){
            console.error(err)
        }
    }

  return (
    <div>CastVote
     <form>
        <label onSubmit={handleCastVote} >VoterID</label>
        <input type='number' ref={RefVoterID}></input>
        <label >RefCandidateID</label>
        <input type='number' ref={RefCandidateID}></input>
        <button type='submit'>Submit</button>
     </form>

    </div>
  )
}

import {useWeb3Context} from '../../context/useWeb3Context'
export const VotingStatus = () => {
  const {contractInstance}=useWeb3Context();
 const handleVotingStatus=async()=>{
    try{

        const votingStatus=await contractInstance.getVotingStatus();
        console.log(votingStatus);
    }catch(err){
        console.error(err)
    }
 }
  return (
    <button onClick={handleVotingStatus}>VotingStatus</button>
  )
}

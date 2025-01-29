import {useEffect} from 'react'
// import { Web3context } from '../../context/web3context'
import { useWeb3Context } from '../../context/useWeb3Context';

const GetVoterList = () => {
  const {contractInstance}=useWeb3Context();
  useEffect(()=>{
    const fetchVoterList=async()=>{
      try{
        const voterList=await contractInstance.GetVoterList();
        console.log(voterList);


      }
      catch(err){
        console.log(err);
      }
    } 
    contractInstance&& fetchVoterList();
  },[contractInstance])

  return (
    <div>
      
    </div>
  )
}

export default GetVoterList

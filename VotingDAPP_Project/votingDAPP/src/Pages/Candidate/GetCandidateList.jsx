import {useEffect} from 'react'

import { useWeb3Context } from '../../context/useWeb3Context'
const GetCandidateList = () => {
  const {web3State}=useWeb3Context();
      const {contractInstance}=web3State;
    useEffect(()=>{
        const fetchCandidateList=async()=>{
           try{
            //   e. preventDefault();
              const candidateList=await contractInstance.GetCandidateList();
              console.log(candidateList)
           }catch(e){
            console.error(e)
           }   
        }
        contractInstance&&fetchCandidateList;
    },[contractInstance]);
  return (
    <div>
      
    </div>
  )
}

export default GetCandidateList

import {useEffect} from 'react'

import { useWeb3Context } from '../../context/useWeb3Context'
const GetCandidateList = () => {
    const {contractInstance}=useWeb3Context();
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

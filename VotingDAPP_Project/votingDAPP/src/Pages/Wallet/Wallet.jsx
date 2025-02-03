
import { useEffect } from 'react';
import {useWeb3Context} from '../../context/useWeb3Context'
import { useNavigate } from 'react-router-dom';
import { getWeb3State } from '../../utils/getWeb3State';
export const Wallet = () => {
  const {handleWallet}=useWeb3Context();
  const {selectedAccount}=getWeb3State;
  const NavigateTO=useNavigate();
  useEffect(()=>{
      if(selectedAccount){
        NavigateTO('/')
      }
  })
  return (
   <button onClick={handleWallet}>Connect Wallet</button>
  )
}

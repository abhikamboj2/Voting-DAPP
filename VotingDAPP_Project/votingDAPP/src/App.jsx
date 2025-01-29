
import './App.css'
import Web3Provider from './context/web3Provider'
import Dummy from './Dummy'
import RegisterCandidate from './Pages/Candidate/RegisterCandidate'
import RegisterVoter from './Pages/Voter/RegisterVoter'
// import {Web3Provider} from './context/web3Provider'
function App() {


  return (
    <>
    <Web3Provider >
      
     <RegisterVoter></RegisterVoter>
    </Web3Provider>
    </>
  )
}

export default App

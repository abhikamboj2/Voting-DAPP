
import './App.css'
import Web3Provider from './context/web3Provider'
import Dummy from './Dummy'
// import {Web3Provider} from './context/web3Provider'
function App() {


  return (
    <>
    <Web3Provider >
      
      <Dummy></Dummy>
    </Web3Provider>
    </>
  )
}

export default App

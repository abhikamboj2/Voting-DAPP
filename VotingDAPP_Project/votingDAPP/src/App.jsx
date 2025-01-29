
import './App.css'
import Web3Provider from './context/web3Provider'
import { routes } from './Routes/routes'
import {RouterProvider} from "react-router-dom"
function App() {


  return (
    <>
    <Web3Provider >
      <RouterProvider router={routes}></RouterProvider>
    </Web3Provider>
    </>
  )
}

export default App

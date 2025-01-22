import ethers from "ethers";
export const getWeb3State=async()=>{
    try{

        if(!window.ethereum){
            throw new Error("Meta Mask Not Installed")
        }
        const account=window.ethereum.request({
            "method":"eth_requestAccounts"
        })
        const selectedAccount=account[0];
        const chainIdHex=window.ethereum.request({
            "method":"eth_chainId"
        })
        const chainId=parseInt(chainIdHex,16);
        const provider= new ethers.BrowserProvider(window.ethereum);
        const signer=await provider.signer();
        const contractAddress="";
        const contractInstance=new ethers.Contract(contractAddress,abi,signer);
   }
   catch(error ){
    console.error(error);
   }
}
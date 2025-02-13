import  { useRef } from "react";
import { useWeb3Context } from "../../context/useWeb3Context";
import axios from "axios";


const RegisterCandidate = () => {
    const {web3State}=useWeb3Context();
    const {contractInstance}=web3State;
    console.log(contractInstance)
    const nameRef = useRef(null);
    const partyRef = useRef(null);
    const ageRef = useRef(null);
    const genderRef = useRef(null);
    // const candidateIdRef = useRef();
    // const candidateAddressRef = useRef();
    
    const handleCandidateRegistration =async (e) => {
        try{
            e.preventDefault();
            const token=localStorage.getItem('token');
            const config={
              headers:{
                 "x-access-token":token
              }
            }
                const res=await axios.post('http://localhost:3000/api/postCandidateImage',config)
                console.log(res.data)
            
                // const name= nameRef.current.value
                // const party=partyRef.current.value
                // const age=ageRef.current.value
                // const gender= genderRef.current.value
                // const candidateId= candidateIdRef.current.value
                // const candidateAddress= candidateAddressRef.current.value
                    
                
                // console.log("Candidate Registered ", name ,party,age,gender);
                // await contractInstance.registerCandidate(name,party,age,gender);
                // console.log("successfull registration")
            }
                catch(err){
                    console.error(err);
                }
                    
    };
    
    // Logic to send data to smart contract

  return (
    <div className="form-container">
      <h2>Candidate Registration</h2>
      <form onSubmit={handleCandidateRegistration}>
        <label>Name:</label>
        <input type="text" ref={nameRef} required />

        <label>Party:</label>
        <input type="text" ref={partyRef} required />

        <label>Age:</label>
        <input type="number" ref={ageRef} required />

        <label>Gender:</label>
       <input type="number" ref={genderRef}></input>

        {/* <label>Candidate ID:</label>
        <input type="number" ref={candidateIdRef} required />

        <label>Candidate Address:</label>
        <input type="text" ref={candidateAddressRef} required /> */}

        <button type="submit">Register Candidate</button>
      </form>
    </div>
  );
};

export default RegisterCandidate;

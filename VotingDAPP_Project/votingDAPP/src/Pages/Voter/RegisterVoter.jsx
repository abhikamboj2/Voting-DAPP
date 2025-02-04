import { useRef } from "react";

import { useWeb3Context } from "../../context/useWeb3Context";
const RegisterVoter = () => {
   
  const {web3State}=useWeb3Context();
      const {contractInstance}=web3State;
    const name=useRef(null);
    const age=useRef(null);
    const gender=useRef(null);
    

  
 
    const handleVoterRegistration=async(e)=>{
        try{

            e.preventDefault();
            const nameRef=name.current.value;
            const genderRef=gender.current.value;
            const ageRef=age.current.value;
            console.log(nameRef,genderRef,ageRef)
            await contractInstance.RegisterVoter(nameRef,ageRef,genderRef);
        }catch(err){
            console.error(err);
        }
    }


  
    return (
      <div className="form-container">
        <h2>Voter Registration</h2>
        <form onSubmit={handleVoterRegistration}>
          <label>Name:</label>
          <input type="text" name="name" ref={name}  required />
  
          <label>Age:</label>
          <input type="number" name="age" ref={age} required />
  
          {/* <label>Voter ID:</label>
          <input type="text" name="voterId" value={formData.voterId} onChange={handleChange} required /> */}
  
          <label>Gender:</label>
          <select name="gender" ref={gender}  required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
  
  
          <button type="submit">Register</button>
        </form>
      </div>
    );
  };
  
  export default RegisterVoter;


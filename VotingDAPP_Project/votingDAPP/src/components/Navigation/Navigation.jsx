import { Link } from "react-router-dom";
export  const Navigation=()=>{
  return(
    
    <ul>
    <li>
      <Link to='/'>Home</Link>
    </li>
    <li>
      <Link to='/Register-Voter'>Register-Voter</Link>
    </li>
    <li>
      <Link to='/Register-Candidate'>Register-Candidate</Link>
    </li>
    <li>
      <Link to='/Voter-List'>Voter-List</Link>
    </li>
    <li>
      <Link to='/Candidate-List'>Candidate-List</Link>
    </li>
    <li>
      <Link to='/Election-Commision'>Election-Commision</Link>
    </li>
    </ul>
    
  )
}

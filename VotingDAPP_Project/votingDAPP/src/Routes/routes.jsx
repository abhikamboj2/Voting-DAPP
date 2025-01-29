import {createBrowserRouter} from "react-router-dom";
import RegisterVoter from "../Pages/Voter/RegisterVoter";
import  GetVoterList from "../Pages/Voter/GetVoterList";
import RegisterCandidate from "../Pages/Candidate/RegisterCandidate";
import GetCandidateList from "../Pages/Candidate/GetCandidateList";
import ElectionCommision from "../Pages/Election_Comission/ElectionCommision"
import { Wallet } from "../Pages/Wallet/Wallet";



export const routes =createBrowserRouter([
    {'path':'/',element: <Wallet/>},
    {'path':'Register-Voter',element: <RegisterVoter></RegisterVoter>},
    {'path':'Register-Candidate',element: <RegisterCandidate></RegisterCandidate>},
    {'path':'Voter-List',element: <GetVoterList></GetVoterList>},
    {'path':'Candidate-List',element: <GetCandidateList></GetCandidateList>},
    {'path':'Election-Commision',element: <ElectionCommision></ElectionCommision>}
    
])
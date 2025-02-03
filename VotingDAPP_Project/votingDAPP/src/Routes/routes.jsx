import {createBrowserRouter} from "react-router-dom";
import RegisterVoter from "../Pages/Voter/RegisterVoter";
import  GetVoterList from "../Pages/Voter/GetVoterList";
import RegisterCandidate from "../Pages/Candidate/RegisterCandidate";
import GetCandidateList from "../Pages/Candidate/GetCandidateList";
import ElectionCommision from "../Pages/Election_Comission/ElectionCommision"
import { Wallet } from "../Pages/Wallet/Wallet";
import {Navigation} from '../components/Navigation/Navigation'


export const routes =createBrowserRouter([
    {'path':'/',element: (<>
    <Navigation></Navigation>
    <Wallet/>
    
    </>
)},
    {'path':'Register-Voter',element: (<>
        <Navigation></Navigation>
        <RegisterVoter></RegisterVoter>
        </>
    )},
    {'path':'Register-Candidate',element:(<>
        <Navigation></Navigation>
        <RegisterCandidate></RegisterCandidate>
        </>
    )},
    {'path':'Voter-List',element: (<>
        <Navigation></Navigation>
        <GetVoterList></GetVoterList>
        </>
    )},
    {'path':'Candidate-List',element: (<>
        <Navigation></Navigation>
        <GetCandidateList></GetCandidateList>
        </>
    )},
    {'path':'Election-Commision',element: (<>
        <Navigation></Navigation>
        <ElectionCommision></ElectionCommision>
        </>
    )}
    
])
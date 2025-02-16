import axios from "axios";

export const uploadCandidateImage = async(file) => {
    const form=new FormData();
    form.append("file",file)
    const res =await axios.post('http://localhost:3000/api/postCandidateImage',form)
  return (
    <div>uploadCandidateImage</div>
  )
}

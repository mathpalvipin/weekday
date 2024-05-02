import { blue } from "@mui/material/colors";
import Filter from "../component/Filter.js";
import {Container} from '@mui/material'
import JobList from "../component/JobList.js";
const Home =()=>{
  return ( 

    <Container maxWidth="xl" sx={{p:0}}  >  
    
    <Filter ></Filter>
    <JobList ></JobList>
    </Container>
  )

}

export default Home;
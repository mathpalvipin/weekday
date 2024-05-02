import { Container } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import Typography from '@mui/material/Typography';
import Paper from "@mui/material/Paper";
const jobs = [1, 2, 3, 4, 5, 6, 7];
const JobList = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: "white",
        borderTop: "1px solid grey",
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {jobs.map((job) => (
        <Paper
          elevation={4}
          square={false}
          sx={{
            width: { xs: "100%", sm: "40%", md: "30%", lg: "20%" },
            minWidth: "200px",
            height: "400px",
            my: 2,
            mx: 1,
            // backgroundColor: "lightblue",
            position: 'relative',
            borderRadius:"5%"
          }}
        >
           <Typography variant="caption"  sx={{border:"0.5px solid grey" ,borderRadius:"70px", position:'absolute', top:"10px", width:"35%" ,left:"1px"  , fontSize:"8px" ,mx:1}}>
           <span class="material-icons-outlined">
</span>  Posted 2 days ago
      </Typography> 
        </Paper>
      ))}
    </Container>
  );
};

export default JobList;

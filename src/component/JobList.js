import { Container } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const JobList = ({ totallist, joblist, loadjob, isloading }) => {
  const { ref, inView } = useInView();
  const [stoploading, setstoploading] = useState(false);
  useEffect(() => {
    if (totallist > 900) {
      setstoploading(true);
      return;
    }
    if (inView && !isloading) {
      loadjob(totallist);
    }
  }, [inView, loadjob]);
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
      {joblist.map((job) => (
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
            position: "relative",
            borderRadius: "5%",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              border: "0.5px solid grey",
              borderRadius: "70px",
              position: "absolute",
              top: "1%",
              width: "45%",
              left: "1px",
              fontSize: "8px",
              mx: 1,
            }}
          >
            <span class="material-icons-outlined"></span> ⏳ Posted 2 days ago
          </Typography>
          <Box
            component="div"
            sx={{
              // backgroundColor: 'blue',
              padding: "0px",
              fontSize: "11px",
              position: "absolute",
              top: "6%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              style={{ width: "30px", height: "40px", borderRadius: "50%" }}
              alt="logo"
              src={job.logoUrl}
            ></img>
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                width: "80%",
              }}
            >
              {" "}
              <Box
                component="div"
                sx={{
                  margin: "1px 0px",
                  padding: "1px 3px",
                  fontSize: "15px",
                  color: "grey",
                  fontWeight: "800",
                }}
              >
                {job.companyName}
              </Box>
              <Box
                component="div"
                sx={{
                  margin: "1px 0px",
                  padding: "1px 3px",
                }}
              >
                {job.jobRole}
              </Box>
              <Box
                component="div"
                sx={{
                  margin: "1px 0px",
                  padding: "1px 3px",
                }}
              >
                {job.location}
              </Box>
            </Box>
          </Box>
          <Box
            component="div"
            sx={{
              padding: "2px 10px",
              fontSize: "12px",
              color: "grey",
              position: "absolute",
              top: "20% ",
              width: "100%",
              display: "flex",
              justifyContent: "left",
            }}
          >
            Estimated Salary: {job.minJdSalary ? job.minJdSalary : 0}-
            {job.maxJdSalary}
            {job.salaryCurrencyCode}
          </Box>
          <Box
            sx={{
              padding: "2px 10px",
              fontSize: "13px",
              fontWeight: "600",
              color: "black",
              position: "absolute",
              top: "23% ",
              width: "90%",
              display: "flex",
              justifyContent: "space-between",
              margin: "5px 0px",
              flexDirection: "column",
              alignItems: "flex-start",
              height: "50%",
              overflow: "hidden",
            }}
          >
            <Box component="div">About Company</Box>
            <Box
              component="div"
              sx={{
                padding: "5px 0px",
                fontSize: "13px",
                fontWeight: "200",
                color: "",
                alignItems: "left",
                display: "flex",
                textAlign: "left",
                position: "relative",
              }}
            >
              {job.jobDetailsFromCompany}
            </Box>
            <Box
              component="div"
              sx={{
                // padding: "5px 0px",
                fontSize: "13px",
                fontWeight: "400",
                color: "blue",
                position: "absolute",
                bottom: "0px",
                zIndex: "10",
                width: "100%",
                height: "20%",
                background: "rgba(249, 249, 249, 0.7)",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              View Job
            </Box>
          </Box>
          <Box
            component="div"
            sx={{
              padding: "5px 10px",
              fontSize: "14px",
              fontWeight: "400",
              color: "grey",
              position: "absolute",
              bottom: "10%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            Minimum Experience
            <Box
              component="div"
              sx={{
                // padding: "5px 10px",
                fontSize: "13px",
                fontWeight: "400",
                color: "grey",
                height: "auto",
              }}
            >
              {job.minExp ? job.minExp : 0}-{job.maxExp ? job.maxExp : 0} year
            </Box>
          </Box>
          <Button
            variant="contained"
            sx={{
              width: "95%",
              backgroundColor: "rgb(85, 239, 196)",
              color: "rgb(0, 0, 0)",
              fontWeight: "500",
              height: "6%",
              padding: "8px 18px",
              mx: "5px",
              position: "absolute",
              bottom: "3%",
              left: "3px",
            }}
          >
            ⚡ Easy Apply
          </Button>
        </Paper>
      ))}

      {!stoploading && (
        <div ref={ref}>
          <Box sx={{width:"100vw",alignContent:'center'}}>Loading more...</Box>
        </div>
      )}
      {joblist.length === 0 && stoploading && <Box sx={{width:"100vw",alignContent:'center'}}>NO such Job available </Box>}
    </Container>
  );
};

export default JobList;

import { Container } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button'
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
              width: "35%",
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
            <img style={{ width: "30px", height: "40px" }} alt="logo"></img>
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                width:"80%"
              }}
            >
              {" "}
              <Box
                component="div"
                sx={{
                  margin: "1px 0px",
                  padding: "1px 3px",
                }}
              >
                CompanyName
              </Box>
              <Box
                component="div"
                sx={{
                  margin: "1px 0px",
                  padding: "1px 3px",
                  
                }}
              >
                This is a div styled 
              </Box>
              <Box
                component="div"
                sx={{
                  margin: "1px 0px",
                  padding: "1px 3px",
                }}
              >
                Location
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
            Estimated Salary: 100USD
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
              Zuma makes an automated sales agent that converses with 100% of
              inbound leads, ultimately improving the way consumers interact
              with businesses and organizations. We’ve built this from the
              ground up using AI, ML, and human support which helps increase
              sales conversion and support capacity for businesses of all kinds.
              Zuma is one of the fastest-growing startups in San Francisco, and
              is well-funded and backed by world-class investors such as
              Y-Combinator, Joe Montana’s fund (Liquid 2 Ventures), Day One
              Ventures, Soma Capital, and other notable angel investors
              including Austen Allred (from Lambda School), YC’s ex-COO Qasar
              Younis, among others. Company
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
              1year
            </Box>
          </Box>
          <Button
            variant="contained"

            sx={{
              width: "95%",
              backgroundColor: "rgb(85, 239, 196)",
              color: "rgb(0, 0, 0)",
              fontWeight: "500",
              height:'6%',
              padding: "8px 18px",
             mx:"5px",
              position:'absolute',
              bottom:"3%",
              left:'3px'
            }}
          >
           ⚡ Easy Apply
          </Button>
        </Paper>
      ))}
    </Container>
  );
};

export default JobList;

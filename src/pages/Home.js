import { blue } from "@mui/material/colors";
import Filter from "../component/Filter.js";
import { Container } from "@mui/material";
import axios from "axios";
import { useState, useEffect, useSyncExternalStore, act } from "react";
import JobList from "../component/JobList.js";
const Home = () => {
  const [filter, setFilter] = useState({
    MinExperience: [],
    CompanyName: [],
    Location: [],
    Stack: [],
    mode: [],
    Role: [],
    Minpay: [],
  });
  const [isloading, setisloading] = useState(filter);
  // const [totaljob, setTotalJob] = useState(1000);
  //  const [Stopfetching, setStopfetching] = useState(false);
  const [joblist, setJobList] = useState([]);
  const [filteredjoblist, setFilteredJobList] = useState([]);
  const loadjob = async (skip) => {
    setisloading(true);
    console.log(skip);
    const jsonData = {
      limit: 5,
      offset: skip,
    };
    if(skip>1000){ setisloading(false); return ;}
    await axios
      .post("https://api.weekday.technology/adhoc/getSampleJdJSON", jsonData)
      .then((response) => {
        console.log(response.data.jdList[0]);
        const jobs = [];
        response.data.jdList.forEach((element) => {
          jobs.push(element);
        });
        console.log(jobs);
        setJobList((prev) => [...prev, ...jobs]);
      });
   
    setisloading(false);
   filterjob(joblist,filter);
  };
const  filterjob=(joblist,filter)=>{
    const {CompanyName,Stack,mode,...actualfilter}=filter
    console.log(filter);
    actualfilter.Location=[...actualfilter.Location];
     
    const filteredjoblist=joblist.filter((job)=>{
      // console.log(job);
     const { Location ,MinExperience,Minpay,Role}=actualfilter;
     var l=true,m=true,min=true,r=true;
      if(Location.length>0){
      l= Location.includes(job.location);
      }
      if(MinExperience.length>0){
       m= MinExperience.includes(job.minExp);
      }
      if(Minpay.length>0){
       min= Minpay.includes(job.minJdSalary);
      }
      if(Role.length>0){
       r= Role.includes(job.jobRole);
      }
      if(l&&m&&min&&r)console.log(job);
      return l&&m&&min&&r;
    })
    console.log(filteredjoblist);
 setFilteredJobList(filteredjoblist);
}
  useEffect(() => {
      loadjob(0);
      // setFilteredJobList(joblist);
  }, []);
  useEffect(() => {
     filterjob(joblist,filter);

  }, [filter]);
  return (
    <Container maxWidth="xl" sx={{ p: 0 }}>
      <Filter filter={filter} setFilter={setFilter}></Filter>
      {/* {isloading && <div>loading</div>} */}
      <JobList
        joblist={filteredjoblist}
        loadjob={loadjob}
        isloading={isloading}
        totallist={joblist.length}
      ></JobList>
    </Container>
  );
};

export default Home;

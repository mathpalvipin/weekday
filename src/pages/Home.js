import { blue } from "@mui/material/colors";
import Filter from "../component/Filter.js";
import { Container } from "@mui/material";
import axios from "axios";
import { useState, useEffect, useSyncExternalStore, act } from "react";
import JobList from "../component/JobList.js";
import { CompanyName } from "../data/data.js";
const Home = () => {
  const [filter, setFilter] = useState({
    MaxExperience: [],
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
      limit: 10,
      offset: skip,
    };
    if (skip > 1000) {
      setisloading(false);
      return;
    }
    await axios
      .post("https://api.weekday.technology/adhoc/getSampleJdJSON", jsonData)
      .then((response) => {
        console.log(response.data.jdList[0]);
        const jobs = [];
        // let set = new Set();
        response.data.jdList.forEach((element) => {
          // set.add(element.companyName)
          jobs.push(element);
        });
        //   var ans=""
        //   for (const value of set) {
        //    ans+="'"+value+"',";
        // }
        // console.log(ans)
        setJobList((prev) => [...prev, ...jobs]);
      });

    setisloading(false);
    filterjob(joblist, filter);
  };
  const filterjob = (joblist, filter) => {
    const { Stack, mode, ...actualfilter } = filter;
    console.log(filter);
    actualfilter.Location = [...actualfilter.Location];

    const filteredjoblist = joblist.filter((job) => {
       
      const { CompanyName,Location, MaxExperience, Minpay, Role } = actualfilter;
      var l = true,
        m = true,
        min = true,
        r = true,
        c = true;

      if (Location.length > 0) {
        l = Location.includes(job.location);
      }
      if (CompanyName.length > 0) {
      
        c = CompanyName.includes(job.companyName);
      }
      if (MaxExperience.length > 0) {
       
        var ans = false;
        for (const i in MaxExperience) {
          const Experience = MaxExperience[i].split("-");
            
          if (Experience[1] >= job.minExp) {
            ans = true;
          }
        }
        m = ans;
      }
      if (Minpay.length > 0) {
        var ans = false;
        for (const i in Minpay) {
          const pay = Minpay[i].split("-");
          // console.log(Experience);
          if (pay[0] <= job.minJdSalary) {
            ans = true;
          }
        }
        min = ans;
        
      }
      if (Role.length > 0) {
        r = Role.includes(job.jobRole);
      }
      // if(l&&m&&min&&r&&c)console.log(job.companyName);
      return l && m && min && r && c;
    });
    // console.log(filteredjoblist);
    setFilteredJobList(filteredjoblist);
  };
  useEffect(() => {
    loadjob(0);
    // setFilteredJobList(joblist);
  }, []);
  useEffect(() => {
    filterjob(joblist, filter);
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

import Filter from "../component/Filter.js";
import { Container } from "@mui/material";
import axios from "axios";
import { useState, useEffect,useMemo } from "react";
import JobList from "../component/JobList.js";

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
  const [isloading, setisloading] = useState(true);
  const [joblist, setJobList] = useState([]);
  // const [filteredjoblist, setFilteredJobList] = useState([]);
  
  const loadjob = async (skip) => {
    setisloading(true);
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
 
  };
  const filterjob = (joblist, filter) => {
    const { Stack, mode, ...actualfilter } = filter;
    actualfilter.Location = [...actualfilter.Location];
    const filteredjoblist = joblist.filter((job) => {
      const { CompanyName, Location, MaxExperience, Minpay, Role } =
        actualfilter;
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
        let ans = false;
        for (const i in MaxExperience) {
          const Experience = MaxExperience[i].split("-");

          if (Experience[1] >= job.minExp) {
            ans = true;
          }
        }
        m = ans;
      }
      if (Minpay.length > 0) {
         let ans = false;
        for (const i in Minpay) {
          const pay = Minpay[i].split("-");
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
  return filteredjoblist;
  };
  useEffect(() => {
    loadjob(0);
  }, []);
  const filteredjoblist=useMemo(() =>  filterjob(joblist, filter), [joblist, filter]);

  return (
    <Container maxWidth="xl" sx={{ p: 0 }}>
      <Filter filter={filter} setFilter={setFilter}></Filter>
     
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

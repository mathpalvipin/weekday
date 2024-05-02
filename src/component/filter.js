import { Container } from "@mui/material";
import { Input } from "@mui/material";
import axios from "axios";
import {location, stack ,MinExperience ,CompanyName,mode,minpay,role} from '../data/data.js'
import MultipleSelect from "./MultipleSelect";
import { useEffect, useState } from "react";
const Filter = () => {
  const [filter, setFilter] = useState({
    MinExperience: "",
    CompanyName: "",
    Location: "",
    Stack: "",
    mode:"",
    Role: "",
    Minpay: "",
  });
  useEffect(() => {
    const jsonData = {
      limit: 1000,

      offset: 0,
    };
    axios
      .post("https://api.weekday.technology/adhoc/getSampleJdJSON", jsonData)
      .then((response) => {
    //  console.log(response.data.jdList[0]);
    //     let set1 = new Set();
    //     response.data.jdList.forEach((element) => {
    //         set1.add(element.minExp);
    //     });
    //     console.log(set1);
      });
      console.log(filter);
    
  }, [filter]);
  return (
    <Container
      maxWidth="xl"
      sx={{
        px: 2,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      <MultipleSelect
        setFilter={setFilter}
        filter={filter}
        filterName="MinExperience"
        options={MinExperience}
      ></MultipleSelect>
      <MultipleSelect
        setFilter={setFilter}
        filter={filter}
        filterName="CompanyName"
        options ={CompanyName}
      ></MultipleSelect>
      <MultipleSelect
        setFilter={setFilter}
        filter={filter}
        filterName="Location"
        options={location}
      ></MultipleSelect>
       <MultipleSelect
        setFilter={setFilter}
        filter={filter}
        filterName="mode"
        options={mode}
      ></MultipleSelect>
      <MultipleSelect
        setFilter={setFilter}
        filter={filter}
        filterName="Stack"
        options={stack}
      ></MultipleSelect>
      <MultipleSelect
        setFilter={setFilter}
        filter={filter}
        filterName="Role"
        options={role}
      ></MultipleSelect>
      <MultipleSelect
        setFilter={setFilter}
        filter={filter}
        filterName="Minpay"
        options={minpay}
      ></MultipleSelect>

      {/* <Input name="MinExperience" placeholder="MinExperience"  sx={{Width:"auto" ,border:"1px  solid grey" , px:"2px", boxShadow:"2px grey"}}></Input>
      <Input name="CompanyName" placeholder="CompanyName" sx={{minWidth:"200px"}}></Input>
      <Input name="Location" placeholder="Location"></Input>
      <Input name="mode" placeholder="Mode"></Input>
      <Input name="Stack" placeholder="Stack"></Input>
      <Input name="Role" placeholder="Role"></Input>
      <Input name="Minpay" placeholder="Minpay"></Input> */}
    </Container>
  );
};

export default Filter;

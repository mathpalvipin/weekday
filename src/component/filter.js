import { Container } from "@mui/material";

import {
  location,
  stack,
  MaxExperience,
  CompanyName,
  mode,
  minpay,
  role,
} from "../data/data.js";
import MultipleSelect from "./MultipleSelect";

const Filter = ({ filter, setFilter }) => {
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
        filterName="MaxExperience"
        options={MaxExperience}
      ></MultipleSelect>
      <MultipleSelect
        setFilter={setFilter}
        filter={filter}
        filterName="CompanyName"
        options={CompanyName}
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
    </Container>
  );
};

export default Filter;

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 3;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect({filterName,setFilter,filter,options}) {
  const theme = useTheme();
  const [value, setValue] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value  },
    } = event;
    setValue(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );

    setFilter({...filter,[filterName]: typeof value === "string" ? value.split(",") : value})
    //  console.log(filter );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: {xs:100 ,md:250 ,lg:300} }}>
        <InputLabel id={filterName}>{filterName}</InputLabel>
        <Select
          labelId={filterName}
          id={filterName}
          multiple
          value={value}
          name={filterName}
          onChange={handleChange}
          input={<OutlinedInput label={filterName} />}
          MenuProps={MenuProps}
        >
          {options.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, value, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        
      </FormControl>
    </div>
  );
}

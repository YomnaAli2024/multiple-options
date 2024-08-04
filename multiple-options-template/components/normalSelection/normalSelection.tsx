'use client'
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";
import styles from "./normalSelection.module.scss"

const days = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

const daysWithColors:any = {
    "sunday":"red",
    "monday":"green",
    "tuesday":"blue",
    "wednesday":"orange",
    "thursday":"purple",
    "friday":"brown",
    "saturday":"peru"
}
const NormalSelection = ()=>{
  const [day, setDay] = useState('sunday');

  const handleChange = (event: SelectChangeEvent) => {
    setDay(event.target.value as string);
  };

  function getStyles(day: string) {
    return {
      color: daysWithColors[day],
      border: `1px solid ${daysWithColors[day]}`
    };
  }

  return(
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Days</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={day}
          label="Days"
          onChange={handleChange}
          style={{color: daysWithColors[day]}}
        >
          {days.map((day)=>(
          <MenuItem key={day} value={day} style={getStyles(day)}>{day}</MenuItem>
          
          ))}
        </Select>
    </FormControl>
  )
}
export default NormalSelection;
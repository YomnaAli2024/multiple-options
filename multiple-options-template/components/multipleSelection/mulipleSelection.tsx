'use client'
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Chip } from '@mui/material';

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

const MultipleSelection = ()=> {

  const [selectedDays, setselectedDays] = React.useState<string[]>(['sunday']);
  const handleChange = (event: SelectChangeEvent<typeof days>) => {
    const {
      target: { value },
    } = event;
    setselectedDays(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  function getStyles(day: string) {
    return {
      color: daysWithColors[day],
      border: `1px solid ${daysWithColors[day]}`
    };
  }

  return (
      <FormControl fullWidth>
        <InputLabel id="demo-multiple-name-label">Days</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={selectedDays}
          onChange={handleChange}
          input={<OutlinedInput label="days" />}
          renderValue={(selected) => (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {(selected as string[]).map((day) => (
                <Chip
                  key={day}
                  label={day}
                  style={{
                    backgroundColor: daysWithColors[day],
                    color: 'white',
                    margin: 2,
                  }}
                />
              ))}
            </div>
          )}
        >
          {days.map((day) => (
            <MenuItem
              key={day}
              value={day}
              style={getStyles(day)}
            >
              {day}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
  );
}
export default MultipleSelection;

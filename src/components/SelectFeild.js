import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import { handleCategoryChange,handleDifficultyChange,handleTypeChange } from '../redux/actions';

const SelectFeild = (props) => {
    const {label,options} = props;
    const dispatch=useDispatch();
    const [Value,setValue]=useState("");
    const handleChange=(e)=>{
        setValue(e.target.value);
        switch(label){
            case "Category":
                dispatch(handleCategoryChange(e.target.value));
                break;
            case "Difficulty":
                dispatch(handleDifficultyChange(e.target.value));
                break;
            case "Type":
                dispatch(handleTypeChange(e.target.value));
                break;
            default:
                return;
        }
    }

  return (
    <Box mt={3} width="100%">
        <FormControl fullWidth size="large"  color="success"  >
            <InputLabel>{label}</InputLabel>
            <Select value={Value} label={label} onChange={handleChange}>
                {options.map(({id,name})=>(
                <MenuItem value={id} key={id}>
                {name}
                </MenuItem>
                ))}
            </Select>
        </FormControl>
    </Box>
  )
}

export default SelectFeild
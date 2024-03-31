import React from 'react'
import SelectFeild from '../components/SelectFeild'
import { Box, Button, CircularProgress, Typography } from '@mui/material'
import TextFieldComp from '../components/TextFieldComp';
import useAxios from '../hooks/useAxios';
import {useNavigate} from 'react-router-dom';

const Settings = () => {
    const {response,error,loading}=useAxios({url:"api_category.php"})
    const navigate = useNavigate()

    if(loading){
        return (
            <Box mt={20}>
                <CircularProgress/>
            </Box>
        )
    }

    if(error){
        return(
            <Typography variant="h6" mt={20} color="red">something went wrong!</Typography>
        )
    }
    const difficultyOptions=[
        {id:"easy",name:"Easy"},
        {id:"medium",name:"Medium"},
        {id:"hard",name:"Hard"},
    ];
    const typeOptions = [
        { id: "multiple", name: "Multiple Choise" },
        { id: "boolean", name: "True/False" },
    ];

    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate("/questions");
    };

  return (  
    <div> 
        <h1 className=''>QUIZ APP</h1>
        <form onSubmit={handleSubmit}>
        <SelectFeild label="Category" options={response.trivia_categories}/>
        <SelectFeild label="Difficulty" options={difficultyOptions}/>
        <SelectFeild label="Type" options={typeOptions}/>
        <TextFieldComp/>
        <Box mt={3} width="100%" >
            <Button fullWidth variant="contained" type="submit">
                GET STARTED
            </Button>
        </Box>
        </form>
       
    </div>
  )
}

export default Settings
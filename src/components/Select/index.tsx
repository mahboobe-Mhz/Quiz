import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import { FormDataType } from '../interface';
import { Controller } from 'react-hook-form';

interface Props{
    label:string
    data:any,
    register:any
    showError:string
    select1:string
    errors1:any,
   control:any 
}
function SelectOP({label,data, register,showError,select1,errors1,control}:Props) {


  
  return (
    <Box sx={{width:1  }}>
        <Typography sx={{ paddingBottom:"10px"}} variant="body1"> {label}</Typography>
        <Controller
        name={label}
        control={control}
        render={({ field }) =>   <TextField
        {...field}
        id="outlined-select-currency"
        select
  
        sx={{width:1,padding:"0px",backgroundColor: 'secondary.light'}}
        {...register(label)}
        helperText={errors1[label]?.message}
        error={errors1[select1] ? true : false}
   
      >
        {data.map((option:any) => (
          <MenuItem sx={{paddingY:"2px"}} key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField> }
  
         />
    </Box>
  )
}

export default SelectOP
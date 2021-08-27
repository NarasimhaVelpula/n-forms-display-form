import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useState } from 'react';

function CheckBox(props) {
    const {options}=props
    const arr=[]
    const handleChange=(e)=>{
        let val=e.target.value
        console.log(val)
        let ind=arr.indexOf(val)
        
        if(ind>-1){
            arr.splice(ind,1)
        }
        else{
            arr.push(val)
            arr.push("  ")
        }
        console.log(arr)
        props.updateResponse(props.id,arr)
    }

    return (
        <FormControl component="fieldset">
    
      <FormGroup aria-label="gender" name="gender1" onChange={handleChange}>
          {options.map(opt=>{
              return(
               <FormControlLabel value={opt}   control={<Checkbox  name={opt} />} label={opt} />)
          })}
        
      </FormGroup>
    </FormControl>
    )
}

export default CheckBox
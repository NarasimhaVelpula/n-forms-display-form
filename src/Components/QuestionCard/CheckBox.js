import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function CheckBox(props) {
    const {options}=props
    const handleChange=(e)=>{
        console.log(e.target.value)
    }
    
    console.log(options)
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
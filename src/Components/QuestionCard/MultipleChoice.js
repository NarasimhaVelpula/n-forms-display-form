import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function MultipleChoice(props) {
    const {options}=props
    const handleChange=(e)=>{
        let val=e.target.value
        props.updateResponse(props.id,val)
    }
    
    console.log(options)
    return (
        <FormControl component="fieldset">
    
      <RadioGroup aria-label="gender" name="gender1" onChange={handleChange}>
          {options.map(opt=>{
              return(
               <FormControlLabel value={opt} control={<Radio />} label={opt} />)
          })}
        
      </RadioGroup>
    </FormControl>
    )
}

export default MultipleChoice
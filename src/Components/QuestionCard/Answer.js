import { TextField } from '@material-ui/core'
import React, { useState } from 'react'

function Answer(props) {

    const [ans,setAns]=useState("")
    
    const handleChange=(e)=>{
        const val=e.target.value
        setAns(val)
        props.updateResponse(props.id,val)

    }
    return (
        <TextField  fullWidth onChange={handleChange}/>
    )
}

export default Answer

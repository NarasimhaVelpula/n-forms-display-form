import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import Loader from './Loader/Loader'
import { Container } from '@material-ui/core'
import Body from './Body/Body'
import ServerUrl from '../ServerUrl'

function Form(props) {
    const {formId}=props.match.params
   
    const [form,setForm]=useState()
    useEffect(()=>{
        
        const url=ServerUrl+"getForm";
        axios.post(url,{formId:formId}).then((response)=>{
            setForm(response)
            props.setFormId(formId)
        })
    },[])
    
    if(form===undefined){
        return(
            <Loader />
        )
    }
    else{
        return(
            <div style={{ height: "90%", paddingTop:"10px"}}>
            <Container maxWidth="md">
                <Body form={form.data} updateResponse={props.updateResponse}/>
            </Container>
            </div>
        )
    }

    }

export default Form

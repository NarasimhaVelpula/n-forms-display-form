import React, { useEffect } from 'react'
import axios from 'axios'
import ServerUrl from './ServerUrl'

function SendResponse(props) {
    console.log(props)
    useEffect(()=>{
        const url=ServerUrl+"saveResponse"
        axios.post(url,{
            response:props.response,
            formId:props.formId
        }).then((response)=>{
                console.log(response.data)
        })
    })
    return (
        <div>
            Response Saved
        </div>
    )
}

export default SendResponse

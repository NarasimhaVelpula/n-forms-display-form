import { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Form from "./Components/Form";
import Header from './Components/header/Header'
import SendResponse from "./SendResponse";
function App() {
  let response=[]
  const [formid,setFormid]=useState("")
  let history=useHistory()

  const recreateResponse=(len)=>{
    response=new Array(len)
  }

  const sendResponse=()=>{
    history.push('/sendresponse')
  }
 
  const updateResponse=(id,value)=>{
    response[id]=value
  }
  const setFormId=(id)=>{
    console.log("setFormid")
    setFormid(id)
  }

  return (
    <>
     <BrowserRouter>
    <Header sendResponse={sendResponse} />
    <Switch>
    <Route exact path="/sendresponse">
    
      <SendResponse response={response} formId={formid} />
    </Route>
    <Route exact path='/:formId' render={(props) => <Form {...props} updateResponse={updateResponse} setFormId={setFormId} />} />
    </Switch>
  </BrowserRouter>
  </>
  );
}

export default App;

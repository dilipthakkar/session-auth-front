import React, { useEffect, useState } from "react";
import "./signin.css";
import TextField from "@material-ui/core/TextField";
import { IsSignned, signin } from "../../api/auth/auth";
import { Redirect } from "react-router";
import Button from "@material-ui/core/Button";

function Signin() {

  const [auth , setAuth] = useState(false);
  const [redirect,setRedirect] = useState(false); 
  useEffect(() => {
    IsSignned().then(resData=>{
      console.log(resData);
      if(resData.data.user){
        console.log(resData.data.user);
        setRedirect(true);
        
      }
    })  
  }, [])

  const ReDashboard = ()=>{
    if(redirect)
    return(<Redirect to="/dashboard"/>);
    else return(<div></div>);
  }


    const [user , setUser] = useState({
        name : "",
        email : "",
        password : " "
    });

    const onHandleChange =(name)=>(event)=>{
        setUser({...user , [name] : event.target.value});
    }

    const submit = (event)=>{
        event.preventDefault();
        signin(user).then(resData=>{
            if(resData.error){
                console.log(resData.error);
            }else{
                console.log("user found scuccessfuly");
                setRedirect(true);
            }
        })
    }


  return (
    <div className="signin__main__container">
      {ReDashboard()}
        <form noValidate autoComplete="off" className="signin__form__container">
          <TextField id="name-input" label="name" onChange={onHandleChange('name')}/>
          <TextField id="email-input" label="email" onChange={onHandleChange('email')}/>
          <TextField id="password-input" label="password" onChange={onHandleChange('password')}/>
          <div className="signin__btn">
          <Button  variant="contained" color="primary" onClick={submit}>
          LOG IN
        </Button>
          </div>
          
        </form>
    </div>
  );
}

export default Signin;

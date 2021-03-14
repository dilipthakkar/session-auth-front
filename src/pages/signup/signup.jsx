import React, { useState, useEffect } from "react";
import "./signup.css";
import TextField from "@material-ui/core/TextField";
import { IsSignned, signup } from "../../api/auth/auth";
import Select from "@material-ui/core/Select";
import { Redirect } from "react-router";
import { InputLabel, MenuItem } from "@material-ui/core";
import Button from "@material-ui/core/Button";
function Signup() {
  const [auth, setAuth] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    IsSignned().then((resData) => {
      console.log(resData);
      if (resData.data.user) {
        console.log(resData.data.user);
        setRedirect(true);
      }
    });
  }, []);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    contact_no: "",
    gender: "",
  });

  const onHandleChange = (name) => (event) => {
    setUser({ ...user, [name]: event.target.value });
  };

  const ReSignin = () => {
    if (redirect) return <Redirect to="/signin" />;
    else return <div></div>;
  };

  const submit = (event) => {
    event.preventDefault();
    signup(user).then((resData) => {
      if (resData.error) {
        console.log("error occured");
      } else {
        setRedirect(true);
      }
    });
  };

  return (
    <div className="signup__main__container">
      {ReSignin()}
      <form noValidate autoComplete="off" className="signup__form__container">
        <TextField
          id="name-input"
          label="name"
          onChange={onHandleChange("name")}
        />
        <TextField
          id="email-input"
          label="email"
          onChange={onHandleChange("email")}
        />
        <TextField
          id="password-input"
          label="password"
          onChange={onHandleChange("password")}
        />
        <TextField
          id="address-input"
          label="Address"
          onChange={onHandleChange("address")}
        />
        <TextField
          id="contact-input"
          label="Contact number"
          onChange={onHandleChange("contact_no")}
        />
          <InputLabel className="signup__main__genderlable" id="gender-input">Gender</InputLabel>

        <Select
          labelId="gender-input"
          id="gender-input"
          value={user.gender}
          onChange={onHandleChange("gender")}
        >
          <MenuItem value={"m"}>Male</MenuItem>
          <MenuItem value={"f"}>Female</MenuItem>
        </Select>
        <div className="signup__form__register__btn">
        <Button  variant="contained" color="primary" onClick={submit}>
          Register
        </Button>

        </div>
        
      </form>
    </div>
  );
}

export default Signup;

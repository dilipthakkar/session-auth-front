import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { IsSignned, signout, userprofile } from "../../api/auth/auth";
import Userprofile from "../../components/userprofile/userprofile";
import Button from "@material-ui/core/Button";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import "./dashboard.css";
function Dashboard() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({});
  const [redirect, setRedirect] = useState(false);
  const checksession = () => {
    IsSignned().then((resData) => {
      if (resData.data.user) {
        setAuth(true);
      }
    });
  };

  const getuser = () => {
    userprofile().then((resData) => {
      if (resData.data.error) {
        console.log(resData.data.error);
      } else {
        console.log(resData.data);
        setUser(resData.data.user);
      }
    });
  };

  const logout = () => {
    signout().then((resData) => {
      if (!resData.data.auth) {
        console.log("logout");
        setRedirect(true);
      }
    });
  };

  const Redirectsignin = () => {
    if (redirect) {
      return <Redirect to="/signin" />;
    } else {
      return <div></div>;
    }
  };

  useEffect(() => {
    checksession();
    getuser();
  }, []);
  if (auth) {
    return (
      <div className="dashboard__main_container">
        {Redirectsignin()}
        <Userprofile user={user} />
        <div className="dashboard__logout__btn">
          <Button style={{width:"200px" , height : "70px"}} variant="contained" color="primary" onClick={logout}>
            <PowerSettingsNewIcon />
            <div style={{fontSize:"25px"}}>log out</div>
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="dashboard__main_container">
        <div className="dashboard__not_login_text">
          You are are not logged in
        </div>
        <Link className="signin__link" to="/signin">sign in</Link>
      </div>
    );
  }
}

export default Dashboard;

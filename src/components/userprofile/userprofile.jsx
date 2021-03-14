import React from 'react'
import "./userprofile.css";
function Userprofile({user}) {
    console.log(user);
    return (
        <div className="userprofile__main__container">
            <div className="userprofile__lable">Name</div>
            <div className="userprofile__username">{user.name?user.name.toUpperCase():user.name}</div>
            <hr />
            <div className="userprofile__lable">Email</div>
            <div className="userprofile__useremail">{user.email}</div>
            <hr />
            <div className="userprofile__lable">Address</div>
            <div className="userprofile__useraddress">{user.address?user.address.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))):user.address}</div>
            <hr />
            <div className="userprofile__lable">Contact Number</div>
            <div className="userprofile__usercontact">{user.contact_no}</div>
            <hr />
            <div className="userprofile__lable">Gender</div>
            <div className="userprofile__useregender">{user.gender=='m'?"MALE":"FEMALE"}</div>
            
        </div>
    )
}

export default Userprofile

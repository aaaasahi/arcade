import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

export const Header = () => {
  const currentUser = localStorage.getItem("user");
  const handleSignOut = function (e) {
    e.preventDefault();
    axios({
      method: "DELETE",
      url: "http://localhost:3000/auth/sign_out",
      data: JSON.parse(localStorage.user),
    }).then(() => {
      localStorage.removeItem("user");
      window.location = "/";
    });
  };
  return (
    <div>
      {currentUser ?
        <>
          {JSON.parse(currentUser).uid}
          <a href="#" onClick={handleSignOut} >Sign out</a>
        </> :
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login" style={{padding: '10px'}}>Login</Link>
        </>
      }
    </div>
      
  );
};

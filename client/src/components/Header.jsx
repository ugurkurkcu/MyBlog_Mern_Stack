import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";


const Header = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    })
      .then((res) =>
        res.json().then((userInfo) => {
          setUserInfo(userInfo.username);
        })
      )
      .catch((err) => alert(err.message));
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      method: "POST",
      credentials: "include",
    });
    setUserInfo(null);
  }

  return (
    <header>
      <Link to="/" className="logo">
        My Blog
      </Link>
      <nav>
        {userInfo ? (
          <>
          <span>Hello, {userInfo}</span>
            <Link to={"/create"}>Create New Post</Link>
            <Link onClick={logout} to={"/"}>
              Log Out
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;

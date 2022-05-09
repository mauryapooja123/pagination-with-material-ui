import axios from "axios";
import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import UserForm from "../component/UserForm";

function User() {
  const Navigate = useNavigate();
  const [user, setUser] = useState({});
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const res =await axios.post()
    Navigate("/table");
    setUser(user);
    console.log(user, "oooooooooo");
  };
  return (
    <div>
      <UserForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        user={user}
      />
    </div>
  );
}

export default User;

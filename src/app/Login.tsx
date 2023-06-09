"use client";
import { setUser } from "@/redux/features/userSlice";
import { AppDispatch } from "@/redux/store";
import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";

const Form = () => {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (name && email) {
      dispatch(setUser({ name, email }));
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;

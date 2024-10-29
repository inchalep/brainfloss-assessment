import React, { useState } from "react";
import Input from "../input";
import { Link } from "react-router-dom";
const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    password: "",
    cPassword: "",
  });
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className='w-full lg:w-11/12'>
      <h2 className='text-3xl font-semibold text-yellow-400 mb-8 text-center'>
        Sign up
      </h2>
      <form className='shadow-md p-5 md:p-10 border border-white rounded-md flex flex-col gap-y-6'>
        <div>
          <Input
            type='text'
            name='email'
            value={formData.email}
            placeholder='Email'
            onChange={inputHandler}
          />
        </div>
        <div>
          <Input
            type='text'
            name='name'
            value={formData.name}
            placeholder='Name'
            onChange={inputHandler}
          />
        </div>
        <div>
          <Input
            type='text'
            name='phone'
            value={formData.phone}
            placeholder='Phone Number'
            onChange={inputHandler}
          />
        </div>
        <div>
          <Input
            type='password'
            name='email'
            value={formData.password}
            placeholder='Password'
            onChange={inputHandler}
          />
        </div>
        <div>
          <Input
            type='password'
            name='cPassword'
            value={formData.cPassword}
            placeholder='Confirm Password'
            onChange={inputHandler}
          />
        </div>
        <button className='btn'>Sign up</button>
      </form>
      <p className='text-right text-white'>
        You have an account?{" "}
        <Link to={"/login"} className='text-yellow-600 underline'>
          click here
        </Link>
      </p>
    </div>
  );
};

export default Register;

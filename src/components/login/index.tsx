import React, { useEffect, useState } from "react";
import Input from "../input";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DispatchAction, RootState } from "../../store";
import { fetchUserData } from "../../store/slices/userSlice";
import { toast } from "react-toastify";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const state = useSelector((state: RootState) => state.user);
  const { data, isLoading, error } = state;
  const navigate = useNavigate();
  const dispatch = useDispatch<DispatchAction>();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (data) {
      navigate("/");
    }
    if (error !== null) {
      toast.error(error);
    }
  }, [state]);

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      dispatch(fetchUserData());
    } else {
      toast.error("Please enter username and password");
    }
  };

  return (
    <div className='w-full lg:w-11/12'>
      <h2 className='text-3xl font-semibold text-textPrimary mb-8 text-center'>
        Welcome Again
      </h2>
      <form
        className='shadow-md p-5 md:p-10 border border-white rounded-md flex flex-col gap-y-5'
        onSubmit={formHandler}
      >
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
            type='password'
            name='password'
            value={formData.password}
            placeholder='Password'
            onChange={inputHandler}
          />
        </div>
        <button
          className={`w-full bg-yellow-700 py-1 text-white ${
            isLoading ? "opacity-70 cursor-not-allowed" : null
          }`}
          disabled={isLoading ? true : false}
          type='submit'
        >
          Login
        </button>
      </form>
      <p className='text-right text-white'>
        New user?{" "}
        <Link to={"/register"} className='text-yellow-600 underline'>
          Register here
        </Link>
      </p>
    </div>
  );
};

export default Login;

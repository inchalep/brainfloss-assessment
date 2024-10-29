import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <h3 className='text-white text-5xl'>Page Not Found.</h3>
      <button
        className='p-1 px-5 m-2 bg-darkYelow rounded-md'
        onClick={handleBack}
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;

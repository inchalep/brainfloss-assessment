import { useLocation } from "react-router-dom";
import coverImg from "../../assets/images/cover.jpg";
import Login from "../../components/login";
import { useEffect, useState } from "react";
import Register from "../../components/register";
const LoginRegister = () => {
  const [isloginComponent, setIsloginComponent] = useState<boolean>(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname?.includes("login")) {
      setIsloginComponent(true);
    } else {
      setIsloginComponent(false);
    }
  }, [location]);
  return (
    <div className='h-[100vh] flex justify-between items-center'>
      <div className='sm:w-5/12 lg:w-6/12 h-full hidden sm:flex justify-center items-center'>
        <img
          alt='CoverImage'
          src={coverImg}
          className='h-full w-full object-fill rounded-md'
        />
      </div>
      <div className='w-full sm:w-7/12 lg:w-6/12 flex flex-col justify-center items-center p-8 md:p-20'>
        {isloginComponent ? <Login /> : <Register />}
      </div>
    </div>
  );
};

export default LoginRegister;

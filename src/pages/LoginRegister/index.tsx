import { useLocation } from "react-router-dom";
import coverImg from "../../assets/images/coader.png";
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
    <div className='min-h-screen flex justify-between items-center'>
      <div className='sm:w-5/12 p-5 lg:w-6/12 hidden sm:flex justify-center items-center'>
        <img
          title='CoverImage'
          src={coverImg}
          className='h-full w-full object-fill'
        />
      </div>
      <div className='w-full sm:w-7/12 lg:w-6/12 flex flex-col justify-center items-center p-8 md:p-20'>
        {isloginComponent ? <Login /> : <Register />}
      </div>
    </div>
  );
};

export default LoginRegister;

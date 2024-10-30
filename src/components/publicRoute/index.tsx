import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";

interface props {
  children: React.ReactNode;
}

const PublicdRoute = ({ children }: props): any => {
  const state = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (state.data?.username) {
      navigate("/");
    }
  }, [state, navigate]);

  return <>{children}</>;
};

export default PublicdRoute;

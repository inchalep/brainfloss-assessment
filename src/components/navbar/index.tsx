import React from "react";
import { adminMenu } from "../../constants";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/slices/userSlice";
import { RootState } from "../../store";

const Navbar = () => {
  const state = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(logoutUser());
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className='shadow-md py-4'>
      <div className='wrapper flex justify-between items-center'>
        <h1 className='text-2xl uppercase text-white bg-darkYelow px-2'>
          Product
        </h1>
        <ul className='text-textPrimary sm:flex gap-x-4'>
          {adminMenu.map((menu, index: number) => {
            if (
              state.data?.role.toLowerCase() === "admin" &&
              menu.path.includes("invoices")
            )
              return null;
            if (
              state.data?.role.toLowerCase() === "user" &&
              menu.path.includes("user-management")
            )
              return null;
            return (
              <li key={index}>
                <NavLink
                  to={menu.path}
                  className={({ isActive }) => (isActive ? "underline" : "")}
                >
                  {menu.title}
                </NavLink>
              </li>
            );
          })}
          <li>
            <span role='button' onClick={logout}>
              Logout
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import authService from "../../Appwrite/auth";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logOutHandler = () => {
    authService.Logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button 
    onClick={logOutHandler}
    className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">
      Logout
    </button>
  );
}

export default LogoutBtn;

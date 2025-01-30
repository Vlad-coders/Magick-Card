import React from "react";
import NavBar from "./ui/NavBar";
import { Outlet } from "react-router-dom";
export default function Layout({
  logoutHandler,
  user,
  handleItemClick,
  activeItem,
}) {
  return (
    <div>
      <NavBar
        logoutHandler={logoutHandler}
        user={user}
        handleItemClick={handleItemClick}
        activeItem={activeItem}
      />
      <Outlet />
    </div>
  );
}

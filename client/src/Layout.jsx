import React from 'react';
import NavBar from './ui/NavBar';
import { Outlet } from 'react-router-dom';
import Lauder from './components/pages/Louder/Lauder';
export default function Layout({ logoutHandler, user, handleItemClick, activeItem }) {
  return (
    <div>
      <Lauder>
        <NavBar
          logoutHandler={logoutHandler}
          user={user}
          handleItemClick={handleItemClick}
          activeItem={activeItem}
        />
        <Outlet />
      </Lauder>
    </div>
  );
}

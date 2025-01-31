import React from 'react';
import NavBar from './ui/NavBar';
import { Outlet } from 'react-router-dom';
import Lauder from './components/pages/Login/Louder/Lauder';
export default function Layout({ logoutHandler, user, handleItemClick, activeItem }) {
  return (
    <div>
      <Lauder isLoading={user.status === 'logging'}>
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

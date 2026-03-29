import React, { useState } from 'react';
import Login from '../Auth/Login';

const Header = ({data , changeUser}) => {
  const handleLogOut=()=>{
    const confirmLogout = window.confirm("Do you want to Log Out?");
      if(confirmLogout){
        localStorage.setItem('loggedInUser','') 
        changeUser('')
      }
  }
  return (
    <div className='flex item-center justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>username</span> 👋</h1>
      <button onClick={handleLogOut} className=' text-white  bg-blue-700 rounded-full  px-5 mt-3 text-bold'>Log out</button>
    </div>
  );
}

export default Header;

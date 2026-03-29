import React from 'react';

const Header = ({data}) => {
  console.log(data.firstName);
  
  return (
    <div className='flex item-center justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{data.firstName}</span> 👋</h1>
      <button className=' text-white  bg-blue-700 rounded-full  px-5 mt-3 text-bold'>Log out</button>
    </div>
  );
}

export default Header;

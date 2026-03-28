import React from 'react';

const TasksList = () => {
  return (
    <div id='taskList' className='flex overflow-x-auto items-center flex-nowrap justify-start gap-5  h-[55%] py-5 w-full -10'>
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-300 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-blue-600 text-white px-3 py-1 rounded'>High</h3>
            <h4 className=''>28-mar-26</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold '>Make a Youtube Video </h2>
        <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ipsum? Optio maxime voluptates ad error.
        </p>
      </div>
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-300 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-blue-600 text-white px-3 py-1 rounded'>High</h3>
            <h4 className=''>28-mar-26</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold '>Make a Youtube Video </h2>
        <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ipsum? Optio maxime voluptates ad error.
        </p>
      </div>
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-300 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-blue-600 text-white px-3 py-1 rounded'>High</h3>
            <h4 className=''>28-mar-26</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold '>Make a Youtube Video </h2>
        <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ipsum? Optio maxime voluptates ad error.
        </p>
      </div>
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-300 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-blue-600 text-white px-3 py-1 rounded'>High</h3>
            <h4 className=''>28-mar-26</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold '>Make a Youtube Video </h2>
        <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ipsum? Optio maxime voluptates ad error.
        </p>
      </div>
       
      
    </div>
  );
}

export default TasksList;

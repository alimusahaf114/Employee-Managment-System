import React from 'react';

const NewTasks = () => {
  return (
    <div>
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-300 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-blue-600 text-white px-3 py-1 rounded'>High</h3>
            <h4 className=''>28-mar-26</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold '>Make a Youtube Video </h2>
        <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ipsum? Optio maxime voluptates ad error.
        </p>
        <div className='mt-4'>
                <button className='bg-green-600 text-white py-1 px-2 text-sm rounded'>Accept Task</button>
        </div>
      </div>
    </div>
  );
}

export default NewTasks;

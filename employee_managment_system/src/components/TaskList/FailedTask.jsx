import React from 'react';

const FailedTask = () => {
  return (
    <div>
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-300 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-blue-600 text-white px-3 py-1 rounded'>High</h3>
            <h4 className=''>28-mar-26</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold '>Make a Youtube Video </h2>
        <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ipsum? Optio maxime voluptates ad error.
        </p>
        <div className='mt-2'>
            <button>
                Failed
            </button>
        </div>
      </div>
    </div>
  );
}

export default FailedTask;

import React from 'react';

const CompleteTask = ({data}) => {
  return (
    <div>
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-300 rounded-xl'>
       <div className='flex justify-between items-center'>
            <h3 className='bg-blue-600 text-white px-3 py-1 rounded'>{data.category}</h3>
            <h4 className=''>{data.date}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold '>{data.title}</h2>
        <p className='text-sm mt-2'>
          {data.description}
        </p>
        <div className='mt-2'>
            <button className='bg-green-600 w-full text-white py-1 px-2 text-sm rounded'>Completed</button>
        </div>
      </div>
    </div>
  );
}

export default CompleteTask;

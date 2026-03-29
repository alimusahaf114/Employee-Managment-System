import React from 'react';

const AcceptTask = ({data}) => {
  console.log(data);  
  return (
    <div>
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-300 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-blue-600 text-white px-3 py-1 rounded'>{data.category}</h3>
            {console.log(data.category)
            }
            <h4 className=''>{data.date}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold '>{data.title}</h2>
        <p className='text-sm mt-2'>
          {data.description}
        </p>
        <div className='flex justify-between mt-4'>
            <button className='bg-blue-600 text-white py-1 px-2 text-sm rounded'>Mark as Completed</button>
            <button className='bg-red-800 text-white py-1 px-2 text-sm rounded'>Mark as Failed</button>
        </div>
      </div>
    </div>
  );
}

export default AcceptTask;

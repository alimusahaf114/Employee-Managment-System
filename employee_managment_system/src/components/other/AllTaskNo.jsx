import React from 'react';

const AllTaskNo = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className=' rounded-xl p-10 w-[45%] py-6 px-10 bg-red-400'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
            <h2 className='text-xl font-medium'>Active</h2>
        </div>
        <div className=' rounded-xl p-10 w-[45%] py-6 px-10 bg-blue-400'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
            <h2 className='text-xl font-medium'>Completed</h2>
        </div>
        <div className=' rounded-xl p-10 w-[45%] py-6 px-10 bg-green-400'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
            <h2 className='text-xl font-medium'>New Task</h2>
        </div>
        <div className=' rounded-xl p-10 w-[45%] py-6 px-10 bg-emerald-400'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
            <h2 className='text-xl font-medium'>Failed</h2>
        </div>
      
    </div>
  );
}

export default AllTaskNo;

import React, { useContext } from 'react'
import {AuthContext} from "../../context/AuthProvider"

const AllTask = () => {
    
    const authData = useContext(AuthContext)
    
  return (
    <div className=' p-5 rounded mt-5 h-50 '>
        <div className='bg-red-400 font-medium mb-2 py-2 px-2 flex justify-between rounded' >
            <h2 className='w-1/5  '>Employee Name</h2>
            <h5 className='w-1/5  '>Active Tasks</h5>
            <h3 className='w-1/5  '>New Tasks </h3>
            <h5 className='w-1/5  '>Completed</h5>
            <h5 className='w-1/5  '>Failed</h5>
        </div>
    <div className='h-[80%] overflow-auto '>

        {authData.employees.map((data, keeee)=>{
            return <div className='bg-blue-500  mb-2 py-2 px-2 flex justify-between rounded' key={keeee}>
            <h2 className='w-1/5 text-white '>{data.firstName}</h2>
            <h3 className='w-1/5 text-white '>{data.taskCount.active} </h3>
            <h5 className='w-1/5 text-white '>{data.taskCount.newTask}</h5>
            <h5 className='w-1/5 text-white '>{data.taskCount.completed}</h5>
            <h5 className='w-1/5 text-white '>{data.taskCount.failed}</h5>
        </div>
        })}
        </div>
        
         
        

    </div>
  )
}

export default AllTask

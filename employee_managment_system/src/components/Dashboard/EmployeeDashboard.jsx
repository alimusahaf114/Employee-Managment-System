import React from 'react';
import Header from '../other/Header';
import AllTaskNo from '../other/AllTaskNo';
import TasksList from '../TaskList/TasksList';

const EmployeeDashboard = ({data , setUser}) => {
  
  return (
    <div className='p-10 bg-[#effbfc] h-screen'>
      <Header data={data } setUser={setUser}/>
      <AllTaskNo data={data} />
      <TasksList data={data} />
    </div>
  );
}

export default EmployeeDashboard;

import React from 'react';
import Header from '../other/Header';
import AllTaskNo from '../other/AllTaskNo';
import TasksList from '../TaskList/TasksList';

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#effbfc] h-screen'>
      <Header/>
      <AllTaskNo/>
      <TasksList/>
    </div>
  );
}

export default EmployeeDashboard;

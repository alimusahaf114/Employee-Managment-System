import React from 'react';
import Header from '../other/Header';
import AllTaskNo from '../other/AllTaskNo';
import TasksList from '../TaskList/TasksList';

const EmployeeDashboard = ({data}) => {
  console.log(data.id);
  
  return (
    <div className='p-10 bg-[#effbfc] h-screen'>
      <Header data={data}/>
      <AllTaskNo data={data} />
      <TasksList data={data} />
    </div>
  );
}

export default EmployeeDashboard;

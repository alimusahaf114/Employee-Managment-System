import AcceptTask from './AcceptTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';
import NewTasks from './NewTasks';

const TasksList = ({data}) => { 
 
  
  
  return (
    <div id='taskList' className='flex overflow-x-auto items-center flex-nowrap justify-start gap-5  h-[55%] py-5 w-full -10'>
       {
        data.tasks.map((elem)=>{
          if(elem.active){
            return <AcceptTask data={data}/>
          }
          if(elem.newTask){
            return <NewTasks />
          } 
          if(elem.completed){
            return <CompleteTask />
          }
          if(elem.failed){
            return <FailedTask /> 
          }
        })
       }
       
      
    </div>
  );
}

export default TasksList;

import AcceptTask from './AcceptTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';
import NewTasks from './NewTasks';

const TasksList = ({data}) => {   
  
  return (
    <div id='taskList' className='flex overflow-x-auto items-center flex-nowrap justify-start gap-5  h-[55%] py-5 w-full -10'>
       {
        data.tasks.map((elem , keeee)=>{
          
          if(elem.active){
            return <AcceptTask data={elem} key={keeee}/>
          }
          if(elem.newTask){
            return <NewTasks data={elem} key={keeee} />
          } 
          if(elem.completed){
            return <CompleteTask data={elem} key={keeee} />
          }
          if(elem.failed){
            console.log(elem);
            return <FailedTask data={elem}key={keeee} /> 
          }
        })
       }
       
      
    </div>
  );
}

export default TasksList;

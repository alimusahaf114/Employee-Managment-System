import AllTask from "../other/AllTask";
import Header from "../other/Header";
import CreateTask from "../TaskList/CreateTask";
const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-10">
      <Header/>
      <CreateTask/>
      <AllTask/>
    </div>
  );
}

export default AdminDashboard;

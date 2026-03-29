// import React from 'react'
import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
// import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";
import { setLocalStorage } from "./utils/LocalStorage";
const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [myUserData , setMyUserData] = useContext(AuthContext);
  
  const employees = myUserData?.employees;
  useEffect(() => {

      const loggedInUser = localStorage.getItem("loggedInUser");
      if(loggedInUser){
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role)
        setLoggedInUser(userData.data)
      }
      
    
  }, [myUserData]);
  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (employees) {
      const employee = employees.find(
        (e) => e.email == email && e.password == password,
      );
      if (employee) {
        setUser("employee");
        setLoggedInUser(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" , data:employee}),
        );
      }
    }
  };
  return (
    <div>
      <>
        {!user ? <Login handleLogin={handleLogin} /> : ""}
        {user == "admin" ? (
          <AdminDashboard  changeUser={setUser}/>
        ) : user == "employee" ? (
          <EmployeeDashboard data={loggedInUser} changeUser={setUser} />
        ) : (
          ""
        )}
      </>
    </div>
  );
};

export default App;

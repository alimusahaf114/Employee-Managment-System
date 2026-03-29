// import React from 'react'
import { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage"
import { AuthContext } from "./context/AuthProvider"
const App = () => {
  const [user , setUser ]= useState(null)
  const [loggedInUser , setLoggedInUser ]= useState(null)
  const authData = useContext(AuthContext)
  const employees = authData?.employees
  const admin = authData?.admin
  useEffect(()=>{
    if(authData){
      const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser){
        setUser(loggedInUser.role)
      }
    }
  },[authData])
  const handleLogin = (email , password)=>{
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(employees){
      const employee = employees.find((e) => e.email == email && e.password == password)
      if(employee){
        setUser('employee')
        setLoggedInUser(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))      
      }
    }
  }
  return (
    <div>
      <>
      
      {!user ? <Login handleLogin={handleLogin}/> : ""}
      {user == 'admin' ? <AdminDashboard/> : (user == 'employee' ? <EmployeeDashboard data={loggedInUser}/>:'')}
      </>
    </div>
  )
}

export default App

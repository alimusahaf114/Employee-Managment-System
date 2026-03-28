// import React from 'react'
import { useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage"

const App = () => {
  const [user , setUser ]= useState(null)

  const handleLogin = (email , password)=>{
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
    }else if(email== 'user@me.com' && password == '123'){
      setUser('employee')
      
    }
  }
  return (
    <div>
      <>
      {!user ? <Login handleLogin={handleLogin}/> : ""}
      {user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>}
      </>
    </div>
  )
}

export default App

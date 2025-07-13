import React from "react"
import { Login } from "./components/Auth/Login"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import Header from "./components/others/Header"
import TaskList from "./components/Tasklist/TaskList"

const App = () => {
  return (
    <>
    {/*Login/>*/}
    <EmployeeDashboard/>
        <Header/>
       

    </>
  )
}

export default App
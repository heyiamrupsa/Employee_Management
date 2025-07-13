import React from 'react'
import Header from '../others/Header'
import TaskNumber from '../others/TaskNumber'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-12 bg-[#412323] h-screen'>
        <Header/>
        <TaskNumber/>
         <TaskList/>

    </div>
  )
}

export default EmployeeDashboard
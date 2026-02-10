

import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
    <div>
        <h1>This is the dashboard page</h1>


       <a href="/dashboard/settings">Settings</a>


         <a href="/dashboard/tag">Tag</a>
        <Outlet />
    </div>

    
    )
}

export default Dashboard
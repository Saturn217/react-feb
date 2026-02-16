

import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
    <div>
        <h1>This is the dashboard page</h1>


     
        <Link to="/dashboard/tag">Tag</Link>
        <Link to="/dashboard/settings">Settings</Link>

        <Outlet />
    </div>

    
    )
}

export default Dashboard
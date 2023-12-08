import React from 'react';
import "../css/dashboard.css";
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Home from './Home';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Navbar/>
      <div className="bodysections">
        <div className="sidecont">
          <Sidebar/>
        </div>
        <div className="dashboardbody">
          <Home/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
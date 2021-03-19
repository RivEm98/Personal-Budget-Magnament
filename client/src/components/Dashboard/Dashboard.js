import React from 'react'
import './Dashboard.css'

const Dashboard = (props)=>
(
    <div className="col-md-8 col-lg-9 col-xl-10 mt-3 dashboard-content">
        <h4 className="dashboard-title">{props.name}</h4>
        <div className="row">
            {props.children}
        </div>
    </div>
)

export default Dashboard;
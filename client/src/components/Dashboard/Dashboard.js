import React from 'react'

const Dashboard = (props)=>
(
    <div className="col-md-8 col-lg-9 col-xl-10 mt-3">
        <h4 className="m-2">{props.name}</h4>
        <div className="row">
            {props.children}
        </div>
    </div>
)

export default Dashboard;
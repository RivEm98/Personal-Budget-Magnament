import React from "react";
import "./CardDashboard.css";
import Axios from 'axios'


const TotalExpenses = (props) => {
    const userId = window.localStorage.getItem('id')



  return (
    <div className="col-12 col-md-6 col-lg-3 mt-3">
      <div className="row card-dashboard-container">
        <div
          className="col-2 col-md-3 col-lg-4 col-xl-3 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: props.color }}
        >
          <i
            className={props.icon}
            style={{ color: "#ffff", fontSize: "35px" }}
          ></i>
        </div>
        <div className="col-9 col-lg-8 col-xl-9">
          <p className="card-text-dashboard">{props.name}</p>
          <p className="price-card-dashboard fw-bold">{props.operations.totalExpenses}</p>
        </div>
      </div>
    </div>
  );
};

export default TotalExpenses;

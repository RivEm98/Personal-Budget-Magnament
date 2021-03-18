import React, { useState, useEffect } from "react";
import Axios from "axios";
import './table.css'
import swal from 'sweetalert';
const Table = () => {
  const [operations, setOperations] = useState([]);
  const userId = window.localStorage.getItem("id");

  const delet = (id)=>{
    swal({
        title: "Are you sure?",
        text: "An operation is about to be deleted",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          Axios.delete(`http://localhost:3005/operations/${id}`)
          swal("Operation has been deleted!", {
            icon: "success",
          })
          .then(()=>{
              window.location.reload()
          })
        } else {
          swal("Operation is safe!");
        }
      });
  }
  useEffect(() => {
    Axios.get(`http://localhost:3005/users/operations/${userId}/10`).then(
      (response) => {
        setOperations(response.data);
      }
    );
  }, []);
  return (
    <div className="mt-4">
      <table className="table table-bordered table-bg" style={{width:'100%'}}>
        <thead>
          <tr>
            <th className="d-none d-md-block" style={{border:'none'}} scope="col">Date</th>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {operations.map((op, i) => {
            return (
              <tr key={i}>
                <td className="d-none d-md-block" style={{border:'none'}}>{op.date}</td>
                <td>{op.description}</td>
                <td>{op.amount}</td>
                <td>{op.Categories.name}</td>
                <td style={{width:'110px'}}>
                    <button className="btn btn-info" style={{color:"white",marginRight:"5px"}}><i class="bi bi-pencil"></i></button>
                    <button onClick={(e)=>delet(op.id,e)} className="btn btn-danger"><i class="bi bi-trash"></i></button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

import React, { useEffect, useState } from "react";
import "./TableIncExp.css";
import swal from 'sweetalert';
import Axios from "axios";

const TableIncExp = (props) => {
  const [categories, setCategories] = useState([]);
  /* const [user, setUser] = useState('') */
  const userId = window.localStorage.getItem('id');
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [categorySelect, setCategorySelect] = useState("");
  const [date, setDate] = useState("");
  const [operationSelect, setOperationSelect] = useState("");
  const [operations, setOperations] = useState([]);

  const submitTab = ()=>{
    Axios.post('http://localhost:3005/operations/add/income',{description:description, amount:amount, categorySelect:categorySelect, date:date, operationSelect:operationSelect,user:userId})
    .then(response=>{
      if (response.data === "successfull") {
        swal('Success', 'The operation was added successfully', 'success')
        .then(value=>{
            window.location.reload()
        })
      }else{
          swal('Error', "Verify that the data entered is correct.", 'error')
      }
    })
  }

  useEffect(() => {
    Axios.get(`http://localhost:3005/operations/category/${userId}`)
    .then((response) => {
      console.log('////////// categorias /////////');
      console.log(response.data);
        setCategories(response.data);
      });
      
      Axios.get(`http://localhost:3005/users/get/operations/${userId}`)
      .then((response)=>{
        console.log('////////// operaciones /////////');
        console.log(response.data);
        setOperations(response.data);
      })}, []);

  return (
    <div className="">
      <div className="d-flex justify-content-between">
        <div className="mt-2">
          <select
            className="form-select mb-3"
            aria-label="Default select example"
          >
            <option selected disabled>
              Search by category
            </option>
            {categories.map((cat, i) => {
              if (cat.user_id == userId) {
                return <option key={i}>{cat.name}</option>;
              }
            })}
          </select>
        </div>
        <div className="mt-2">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            + New
          </button>
          <div className="modal" tabIndex="-1" id="exampleModal">
            <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">{props.modalname}</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="mb-3">
                      <label className="form-label">Description</label>
                      <textarea
                        className="form-control"
                        rows="3"
                        name="description"
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Amount</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="0"
                        name="amount"
                        onChange={(e) => {
                          setAmount(e.target.value);
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Category</label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        onChange={(e) => {
                          setCategorySelect(e.target.value);
                        }}
                      >
                        <option selected>-Category-</option>
                        {categories.map((cat, i) => {
                            return  <option key={i} value={cat.id}>{cat.name}</option>;
                        
                        })}
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Date</label>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="0"
                        name="date"
                        onChange={(e)=>{setDate(e.target.value)}}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Operation</label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        onChange={(e) => {
                          setOperationSelect(e.target.value);
                        }}
                      >
                        <option selected disabled>Select an operation</option>
                        <option value="income">Income</option>
                        <option value="expenses">Expenses</option>
                      </select>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button onClick={submitTab} type="button" className="btn btn-primary">
                      Add
                    </button>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <table className="table table-bordered table-bg">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
        {operations.map((op, i) => {
          if (props.category == "INCOME") {
            if(op.operation == "income"){
              return (
                <tr key={i}>
                  <td>{op.date}</td>
                  <td>{op.description}</td>
                  <td>{op.amount}</td>
                  <td>{op.Categories.name}</td>
                  <td></td>
                </tr>
              );
            }
          }else{
            if(op.operation == "expenses"){
              return (
                <tr key={i}>
                  <td>{op.date}</td>
                  <td>{op.description}</td>
                  <td>{op.amount}</td>
                  <td>{op.Categories.name}</td>
                  <td></td>
                </tr>
              );
            }
          }

          })}
        </tbody>
      </table>
    </div>
  );
};
export default TableIncExp;

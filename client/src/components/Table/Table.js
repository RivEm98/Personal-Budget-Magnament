import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./table.css";
import swal from "sweetalert";
const Table = () => {
  const [operations, setOperations] = useState([]);
  const userId = window.localStorage.getItem("id");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState([]);
  const [categorySelect, setCategorySelect] = useState('')
  const [amount, setAmount] = useState("");
  const [operation, setOperation] = useState("");
  const [categories, setCategories] = useState([]);
  const [id, setId] = useState('');

  const edit = (id) => {
    Axios.get(`http://localhost:3005/operations/${id}`).then((data) => {
      setId(id)
      setAmount(data.data.amount);
      setDate(data.data.date);
      setDescription(data.data.description);
      setOperation(data.data.operation);
      setCategory(data.data.Categories);
      setCategorySelect(data.data.Categories.id)
    });
  };
  const update = ()=>{
      swal({
        title: "Are you sure?",
        text: "An operation is about to be updated",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willUpdate) => {
        if (willUpdate) {
          Axios.put(`http://localhost:3005/operations/${id}`,{description:description, amount:amount, categorySelect:categorySelect, date:date, operation:operation,user:userId})
          swal("Operation has been updated!", {
            icon: "success",
          }).then(() => {
            window.location.reload();
          });
        } else {
          swal("Operation is safe!");
        }
      });
  }
  const delet = (id) => {
    swal({
      title: "Are you sure?",
      text: "An operation is about to be deleted",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        Axios.delete(`http://localhost:3005/operations/${id}`);
        swal("Operation has been deleted!", {
          icon: "success",
        }).then(() => {
          window.location.reload();
        });
      } else {
        swal("Operation is safe!");
      }
    });
  };
  useEffect(() => {
    Axios.get(`http://localhost:3005/operations/category/${userId}`).then(
      (response) => {
        setCategories(response.data);
      }
    );

    Axios.get(`http://localhost:3005/users/operations/${userId}/10`).then(
      (response) => {
        setOperations(response.data);
      }
    );
  }, []);
  return (
    <div className="mt-4">
      <table
        className="table table-bordered table-bg"
        style={{ width: "100%" }}
      >
        <thead>
          <tr>
            <th
              className="d-none d-md-block"
              style={{ border: "none" }}
              scope="col"
            >
              Date
            </th>
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
                <td className="d-none d-md-block" style={{ border: "none" }}>
                  {op.date}
                </td>
                <td>{op.description}</td>
                <td>{op.amount}</td>
                <td>{op.Categories.name}</td>
                <td style={{ width: "110px" }}>
                  <button
                    onClick={(e) => edit(op.id, e)}
                    className="btn btn-info"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    style={{ color: "white", marginRight: "5px" }}
                  >
                    <i className="bi bi-pencil"></i>
                  </button>
                  <button
                    onClick={(e) => delet(op.id, e)}
                    className="btn btn-danger"
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit operation
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    name="description"
                    value={description}
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
                    value={amount}
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
                    <option selected value={category.id}>{category.name}</option>
                    {categories.map((cat, i) => {
                      return (
                        <option key={i} value={cat.id}>
                          {cat.name}
                        </option>
                      );
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
                    value={date}
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Operation</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected disabled>
                      {operation}
                    </option>
                  </select>
                </div>
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
              <button 
              onClick={update}
              type="button" 
              className="btn btn-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;

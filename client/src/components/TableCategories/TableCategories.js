import React, { useState, useEffect } from "react";
import Axios from "axios";
import swal from "sweetalert";

const TableCategories = (props) => {
  const [name, setName] = useState("");
  const userId = window.localStorage.getItem('id')
  const [categories, setCategories] = useState([]);
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    Axios.post("http://localhost:3005/operations/category/incexp", {
      name: name,date:date,user:userId
    }).then((response) => {
      if (response.data === "successful") {
        swal("Success", "The category was added successfully", "success").then(
          (value) => {
            window.location.reload();
          }
        );
      } else {
        swal("Error", "You must enter a name for the category", "error");
      }
    });
  };

  useEffect(() => {
    Axios.get(`http://localhost:3005/operations/category/${userId}`)
    .then((response) => {
        setCategories(response.data);
      }
    );
  }, []);

  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <div className="mt-2">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#modalll"
          >
            + New
          </button>
          <div className="modal" tabIndex="-1" id="modalll">
            <div className="modal-dialog">
              <form action="" method="POST">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">New Category</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Date</label>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="0"
                        name="date"
                        onChange={(e) => {
                          setDate(e.target.value);
                        }}
                      />
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
                      onClick={handleSubmit}
                      type="button"
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <table className="table table-bordered table-bg mt-3">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Date</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat, i) => {
              return (
                <tr key={i}>
                  <td>{cat.name}</td>
                  <td>{cat.date}</td>
                  <td></td>
                </tr>
              );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableCategories;

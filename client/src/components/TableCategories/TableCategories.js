import React,{useState} from 'react'
import Axios from 'axios'
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

const TableCategories = (props) => {

    const history = useHistory()
    const [name, setName]= useState('')

    const handleSubmit = ()=>{
        Axios.post('http://localhost:3005/operations/category/incexp',{name: name})
        .then((response)=>{
            console.log(response.data)
            if (response.data === "successful") {
                swal('Success', 'The category was added successfully', 'success')
            }else{
                swal('Error', "You must enter a name for the category", 'error')
            }
        })
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-between">
            <div className="mt-2">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalll">
                   + New
                </button>
            <div className="modal" tabindex="-1" id="modalll">
                <div className="modal-dialog">
                    <form action="" method="POST">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">New Category</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Name</label>
                                <input 
                                type="text" 
                                name="name"
                                className="form-control"
                                onChange={
                                    (e)=>{setName(e.target.value)}
                                }  
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={handleSubmit} type="button" className="btn btn-primary" data-bs-dismiss="modal">Add</button>
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
                <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Otto</td>
                </tr>
                <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>Thornton</td>
                </tr>
                <tr>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}

export default TableCategories

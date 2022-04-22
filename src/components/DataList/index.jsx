import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { DeleteData } from '../Redux/Action/DataAction'


export default function DataList() {
    
    let dispatch = useDispatch();
    const dataSelector = useSelector((state) => state.list.list)
    return (
        <div className="container">
            <h2 className='container col-md-2 my-4'>Data List</h2>
            <div className="row d-flex flex-column">

                <div className="col-md-9 mx-auto my-4">
                    <table className="table table-hover">
                        <thead className="table-header bg-dark text-white mx-auto" >
                            <tr style={{ backgroundColor: 'blueviolet' }}>
                                <th scope='col'>Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Number</th>
                                <th scope="col">Gender</th>

                            </tr>
                        </thead>
                        <tbody>
                            {dataSelector.map(list => (

                                <tr>
                                    <td>{list.id}</td>
                                    <td>{list.Name}</td>
                                    <td>{list.Number}</td>
                                    <td>{list.Gender}</td>
                                    <td>
                                        <button className='btn btn-danger' type='submit' onClick={() => dispatch(DeleteData(list.id))}>Delete</button>
                                        <Link to={`/edit/${list.id}`}>
                                            <span>edit</span>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>


                </div>
            </div>
        </div>
    )
}

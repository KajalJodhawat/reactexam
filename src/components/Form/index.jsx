import React from 'react'
import { useState , useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import shortid from 'shortid';
import { AddData, GetData,  UpdateData } from '../Redux/Action/DataAction';

export default function Form() {
    let history = useHistory();
    let { id } = useParams();
    let dispatch = useDispatch();
    const [Name, setName] = useState();
    const [Number, setNumber] = useState();
    const [Gender, setGender] = useState();

    const getdataSelector = useSelector((state) => state.list.details)

    const submitHandler = (e) => {
        e.preventDefault()

        const formdata = {
            id: shortid.generate(),
            Name: Name,
            Number: Number,
            Gender: Gender

        }
        if (id) {
            const formdata = {
                id: id,
                Name: Name,
                Number: Number,
                Gender: Gender
            }
            dispatch(UpdateData(formdata));
            history.push("/DataList");
        }

        else {
            dispatch(GetData(""));
            dispatch(AddData(formdata));
            console.log("formdata" + JSON.stringify(formdata));
            history.push("/DataList");
        }
    }
    useEffect(() => {
        if (id) {

            dispatch(GetData(id));

        }
    }, [id]);
    useEffect(() => {

        if (getdataSelector != null) {
            setName(getdataSelector.Name)
            setNumber(getdataSelector.Number)
            setGender(getdataSelector.Gender)
           

        }
    }, [getdataSelector]);
    return (
        <>
            <h1 className='container col-md-6'>Add Data</h1>
            <form className="col-md-offset-3 col-md-6  container-fluid shadow">

                <div className="form-group mx-3 my-3">
                    <label htmlFor="fname" className="control-label" style={{ fontWeight: 'bold' }}>Name</label>
                    <input type="text" className="form-control" value={Name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="form-group mx-3 my-3">
                    <label htmlFor="number" className="control-label" style={{ fontWeight: 'bold' }}>Number</label>
                    <input type="text" className="form-control" value={Number} onChange={(e) => setNumber(e.target.value)} />
                </div>
                <div className="form-group mx-3 my-3">
                    <label htmlFor="gender" className="control-label" style={{ fontWeight: 'bold' }}>Gender</label>
                    <input type="text" className="form-control" value={Gender} onChange={(e) => setGender(e.target.value)} />
                </div>
                <button type="submit" className="btn  my-3 mx-3" onClick={submitHandler} style={{ backgroundColor: 'blueviolet', fontWeight: 'bold' }}> {id ? "Update Data" : "Submit"}</button>
            </form>
        </>
    )
}

export const AddData = (data) => (
    
    {
        type: "ADD_DATA",
        payload: data,
    }
);

export const DeleteData = (deletedata) => (
    
    {
        type: "DELETE_DATA",
        payload: deletedata,
    }
);

export const GetData = (getid)=> (
    {
        type: "GET_DATA",
        payload: getid, 
    }
);

export const UpdateData =(updatedata)=>(
    {
        type: "UPDATE_DATA",
        payload:updatedata, 
    }
);

   

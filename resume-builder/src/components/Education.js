import React,{useEffect, useState} from "react";


function Education ({educationId,onRemove,onSubmit}){

    const [values,setValues] = useState([])

const handleRemove = ()=>{
    onRemove(educationId)
    
}
const handleChange = (event) =>{
    const {name, value} = event.target
    setValues((prevValues)=>({
        ...prevValues,
        [name]:value
    }))
}

useEffect(()=>{
    onSubmit(educationId,values)
},[values])

    return(
        <div>
        <div className='row  mb-3'>
        <div className="col-sm-6">
            <input
                type="text"
                name="institutionName"
                className="form-control"
                placeholder="Name of Institution"
                onChange={handleChange}
            />
        </div>

        <div className="col-sm-6">
            <input
                type="text"
                name="location"
                className="form-control"
                placeholder="Location"
                onChange={handleChange}
            />
        </div>
    </div>
    <div className='row  mb-3'>
        <div className="col-sm-6">
            <label>Degree</label>
            <select className="form-control" name="degree"  onChange={handleChange}>
            <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
            </select>
        </div>

       
    </div>
    <div className='row  mb-3'>
        <div className="col-sm-6">
            <input
                type="date"
                name="startdate"
                className="form-control"
                placeholder="MM-DD-YY"
                onChange={handleChange}
            />
        </div>

        <div className="col-sm-6">
            <input
                type="date"
                name="enddate"
                className="form-control"
                placeholder="MM-DD-YY"
                onChange={handleChange}
            />
        </div>
       
    </div>
    <center>
        <button type='button' className="btn btn-outline-danger center mb-3" onClick={handleRemove}>
            
        Remove Education
      </button>
      </center>
    
    </div>
    )
}
export default Education
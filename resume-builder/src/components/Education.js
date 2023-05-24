import React from "react";


function Education (){
    return(
        <>
        <div className='row  mb-3'>
        <div className="col-sm-6">
            <input
                type="text"
                name="institutionname"
                className="form-control"
                placeholder="Name of Institution"
            />
        </div>

        <div className="col-sm-6">
            <input
                type="text"
                name="Location"
                className="form-control"
                placeholder="Location"
            />
        </div>
    </div>
    <div className='row  mb-3'>
        <div className="col-sm-6">
            <label>Degree</label>
            <select className="form-control">
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
            />
        </div>

        <div className="col-sm-6">
            <input
                type="date"
                name="enddate"
                className="form-control"
                placeholder="MM-DD-YY"
            />
        </div>
    </div>
   
    </>
    )
}
export default Education
import React from "react";


function Experience (){
    return(
        <>
        <div className='row  mb-3'>
        <div className="col-sm-6">
            <input
                type="text"
                name="JobTitle"
                className="form-control"
                placeholder="Job Title"
            />
        </div>

        <div className="col-sm-6">
            <input
                type="text"
                name="employer"
                className="form-control"
                placeholder="Employer"
            />
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
    <div className='row  mb-3'>
        <div className='col-sm-6'>
        </div>
        <div className='col-sm-6'>
            <input
                type='Checkbox'
            />
            <label> I currently work here</label>
        </div>
    </div>
    </>
    )
}
export default Experience
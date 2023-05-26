import React, { useEffect, useState } from "react";


const Education = ({ educationId, onRemove, onSubmit }) => {


    const [values, setValues] = useState([])  //value of education form fields

    const handleRemove = () => {  //to remove Education item
        onRemove(educationId)
    }
    const handleChange = (event) => {
        const { name, value } = event.target
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }))
    }

    useEffect(() => {
        onSubmit(educationId, values)
    }, [values])

    return (
        <div>
            <div className='row  mb-3'>
                <div className="col-sm-6">
                    <input
                        type="text"
                        name="institutionName"
                        className="form-control"
                        placeholder="Name of Institution"
                        required
                        onChange={handleChange}
                    />
                </div>

                <div className="col-sm-6">
                    <input
                        type="text"
                        name="location"
                        className="form-control"
                        placeholder="Location"
                        required
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className='row  mb-3'>
                <div className="col-sm-6">
                    <label>Degree</label>
                    <select className="form-control" name="degree" required onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="HighSchool">Highschool</option>
                        <option value="Higher Secondary">HigherSecondary</option>
                        <option value="BTech">BTech</option>
                        <option value="BCA">BCA</option>
                        <option>MTech</option>
                    </select>
                </div>
            </div>
            <div className='row  mb-3'>
                <div className="col-sm-6">
                    <input
                        type="date"
                        name="startDate"
                        required
                        className="form-control"
                        placeholder="MM-DD-YY"
                        onChange={handleChange}
                    />
                </div>
                <div className="col-sm-6">
                    <input
                        type="date"
                        name="endDate"
                        required
                        className="form-control"
                        placeholder="MM-DD-YY"
                        onChange={handleChange}
                    />
                </div>
            </div>
            {educationId !== 'additional' &&
                <center>
                    <button type='button' className="btn btn-outline-danger center mb-3" onClick={handleRemove}>
                        Remove Education
                    </button>
                </center>
            }
        </div>
    )
}
export default Education
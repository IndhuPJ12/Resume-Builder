
import React, { useState, useEffect } from 'react';

const Experience = ({ experienceId, onRemove, onSubmit }) => {

    //value of experience form fields   
    const [values, setValues] = useState({});
    //const [experience, setExperience] = useState({});

    const [checked, setChecked] = useState(false)

    const handleChange = (event) => {

        const { name, value } = event.target;
        if (checked) {
            if (name == 'endDate') {
                event.target.value = ''
            }
        }
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleCheckbox = () => {
        setChecked(!checked)
    }
    //to remove experience item
    const handleRemove = () => {
        onRemove(experienceId);
    };


    const handleExperienceSubmit = () => {
        onSubmit(experienceId, values);
    };

    useEffect(() => {
        handleExperienceSubmit();
    }, [values]);

    return (
        <>
            <div>
                <div className='row  mb-3'>
                    <div className="col-sm-6">
                        <input
                            type="text"
                            name="jobTitle"
                            className="form-control"
                            placeholder="Job Title"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-sm-6">
                        <input
                            type="text"
                            name="employer"
                            className="form-control"
                            placeholder="Employer"
                            required
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='row  mb-3'>
                    <div className="col-sm-6">
                        <input
                            type="date"
                            name="startDate"
                            className="form-control"
                            placeholder="MM-DD-YY"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-sm-6">
                        <input
                            type="date"
                            name="endDate"
                            className="form-control"
                            placeholder="MM-DD-YY"
                            disabled={checked ? true : false}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='row  mb-3'>
                    <div className='col-sm-6'>
                    </div>
                    {experienceId == 'additional' &&
                        <div className='col-sm-6'>
                            <input
                                type='Checkbox'
                                checked={checked}
                                onChange={handleCheckbox}
                            />
                            <label> I currently work here</label>
                        </div>
                    }
                </div>
                {experienceId !== 'additional' &&
                    <center>
                        <button type='button' className="btn btn-outline-danger center mb-3" onClick={handleRemove}>

                            Remove Experience
                        </button>
                    </center>
                }
            </div>

        </>
    );
};

export default Experience;

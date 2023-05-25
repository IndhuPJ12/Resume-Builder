
import React, { useState,useEffect } from 'react';

const Experience = ({ experienceId, onRemove,onSubmit }) => {
    const [values, setValues] = useState({});
  const [experience, setExperience] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
  };

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
                name="JobTitle"
                className="form-control"
                placeholder="Job Title"
                onChange={handleChange}
            />
        </div>

        <div className="col-sm-6">
            <input
                type="text"
                name="employer"
                className="form-control"
                placeholder="Employer"
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
                onChange={handleChange}
            />
        </div>

        <div className="col-sm-6">
            <input
                type="date"
                name="endDate"
                className="form-control"
                placeholder="MM-DD-YY"
                onChange={handleChange}
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
    <center>
        <button type='button' className="btn btn-outline-danger center mb-3" onClick={handleRemove}>
            
        Remove Experience
      </button>
      </center>
    </div>
    
    </>
  );
};

export default Experience;

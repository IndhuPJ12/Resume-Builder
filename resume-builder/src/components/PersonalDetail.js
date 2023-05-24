import { useState } from "react";

function PersonalDetail ({ onSubmit }){

    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        address1: '',
        address2: '',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
       
        setFormValues((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formValues); // Pass the form values to the parent component
      };
    return (
        <>
           <div className='row  mb-4'>
                <div className="col-sm-6">
                    <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        placeholder="First Name"
                        value={formValues.firstName}
                       onChange={handleChange}
                    />
                </div>

                <div className="col-sm-6">
                    <input
                        type="text"
                        name="lasttName"
                        className="form-control"
                        placeholder="Last Name"
                    />

                </div>

            </div>
            <div className='row  mb-4'>
                <div className="col-sm-6">
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                    />
                </div>

                <div className="col-sm-6">
                    <input
                        type="text"
                        name="mobile"
                        className="form-control"
                        placeholder="Mobile Number"
                    />

                </div>

            </div>
            <div className='row  mb-3'>
                <div className="col-sm-6">
                    <input
                        type="text"
                        name="address1"
                        className="form-control"
                        placeholder="AddressLine 1"
                    />
                </div>

                <div className="col-sm-6">
                    <input
                        type="text"
                        name="adress2"
                        className="form-control"
                        placeholder="Address Line 2"
                    />

                </div>

            </div>
        </>
    )
}
export default PersonalDetail
import { useState,useRef } from "react";

function PersonalDetail ({onSubmit}){

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
    
      
        onSubmit(formValues); // Pass the form values to the parent component
     const formRef=useRef() 
    return (
        <form>
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
                        name="lastName"
                        className="form-control"
                        placeholder="Last Name"
                        value={formValues.lasstName}
                        onChange={handleChange}
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
                        value={formValues.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="col-sm-6">
                    <input
                        type="text"
                        name="mobile"
                        className="form-control"
                        placeholder="Mobile Number"
                        value={formValues.mobile}
                        onChange={handleChange}
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
                        value={formValues.address1}
                        onChange={handleChange}
                    />
                </div>

                <div className="col-sm-6">
                    <input
                        type="text"
                        name="address2"
                        className="form-control"
                        placeholder="Address Line 2"
                        value={formValues.address2}
                        onChange={handleChange}
                    />

                </div>

            </div>
        </form>
    )
}
export default PersonalDetail
import { useState, useRef } from "react";

function PersonalDetail({ onSubmit }) {

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

    onSubmit(formValues); // pass personal details to resume 

    return (
        <>
            <div className='row  mb-4'>
                <div className="col-sm-6">
                    <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        placeholder="First Name"
                        required
                        onChange={handleChange}
                    />
                </div>

                <div className="col-sm-6">
                    <input
                        type="text"
                        name="lastName"
                        required
                        className="form-control"
                        placeholder="Last Name"
                        onChange={handleChange}
                    />

                </div>

            </div>
            <div className='row  mb-4'>
                <div className="col-sm-6">
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                    />
                </div>

                <div className="col-sm-6">
                    <input
                        type="number"
                        name="mobile"
                        required
                        className="form-control"
                        placeholder="Mobile Number"
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
                        placeholder="Address Line 1"
                        required
                        onChange={handleChange}
                    />
                </div>

                <div className="col-sm-6">
                    <input
                        type="text"
                        name="address2"
                        className="form-control"
                        placeholder="Address Line 2"
                        required
                        onChange={handleChange}
                    />

                </div>

            </div>
        </>
    )
}
export default PersonalDetail
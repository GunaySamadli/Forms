import React, { useState } from 'react'
import Validation from './Validation';

const Form = ({ setCurrentData }) => {
    const [values, setValues] = useState({
        select: "",
        firstName: "",
        lastName: "",
        email: "",
        number: "",
        message: ""
    });

    const [errors, setErrors] = useState({});

    const [succes, setSucces] = useState(null);

    if (succes) {
        succes.doBack = () => {
            setSucces(null)
            setValues({})
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })

    }
    const onSubmit = (e) => {
        e.preventDefault();
        let newErrors = Validation(values)
        
        setErrors(newErrors);
        if (!newErrors || !Object.keys(newErrors).length) {
            setSucces(values)
        }

    }
    return (
        <div className='form-app'>
            <h1>Contact Form</h1>
            {succes ? (
                <div className='form-app succes-section'>
                    <div className='succes-icon'>
                        <img src="data:image/png;base64,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" alt="" />
                    </div>
                    <h2>Thank you!</h2>
                    <p>You feedback has been sent successfully !</p>
                    <div onClick={succes.doBack} className="back-class">Back</div>
                </div>

            ) : (
                <form action="/"  >
                    <div className="select-section">
                        <label htmlFor="select">Application Type</label>
                        <select value={values.select} onChange={handleChange} className={errors.select ? 'error-input' : ''} placeholder='Select application type' name="select" id="select">
                            <option value=""></option>
                            <option value="Information">Information</option>
                            <option value="Suggestion">Suggestion or comment</option>
                        </select>
                        {errors.select && <p className='error'>{errors.select}</p>}
                    </div>
                    <div className="form-inputs">
                        <div className="form-input">
                            <label htmlFor="firstName">First Name</label>
                            <input value={values.firstName} onChange={handleChange} className={errors.firstName ? 'error-input' : ''} name='firstName' id='firstName' type="text" placeholder='First Name' />
                            {errors.firstName && <p className='error'>{errors.firstName}</p>}
                        </div>

                        <div className="form-input">
                            <label htmlFor="lastName">Last Name</label>
                            <input value={values.lastName} onChange={handleChange} className={errors.lastName ? 'error-input' : ''} name='lastName' id='lastName' type="text" placeholder='Last Name' />
                            {errors.lastName && <p className='error'>{errors.lastName}</p>}
                        </div>
                    </div>

                    <div className="form-inputs">
                        <div className="form-input">
                            <label htmlFor="email">Email</label>
                            <input value={values.email} onChange={handleChange} className={errors.email ? 'error-input' : ''} name='email' id='email' type="email" placeholder='Email' />
                            {errors.email && <p className='error'>{errors.email}</p>}
                        </div>

                        <div className="form-input">
                            <label htmlFor="number">Mobile number</label>
                            <input value={values.number} onChange={handleChange} className={errors.number ? 'error-input' : ''} name='number' id='number' type="number" placeholder='Mobile number' />
                            {errors.number && <p className='error'>{errors.number}</p>}
                        </div>
                    </div>

                    <div className="form-textarea">
                        <label htmlFor="message">Message</label>
                        <textarea value={values.message} onChange={handleChange} className={errors.message ? 'error-input' : ''} placeholder='Message' name="message" id="message" cols="46" rows="3"></textarea>
                        {errors.message && <p className='error'>{errors.message}</p>}
                    </div>

                    <div className="form-btn">
                        <button type='submit' onClick={onSubmit}>Send</button>
                    </div>
                </form>
            )
            }
        </div>
    )
}

export default Form
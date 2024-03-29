import React, { useState } from 'react'
import Navbar from '../Navbar'
import '../Deactivate/Deactivate.css'
const Deactivate = ({ Toggle }) => {
    // State variables for form inputs
    const [email, setEmail] = useState('');
    const [checked, setChecked] = useState(false);
    const [name, setName] = useState('');
    const [submitted, setSubmitted] = useState(false);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted!');
        // Add your form submission logic here
        if (email.trim() !== '') {
            setSubmitted(true);
        }
    }

    return (
        <>
            <Navbar Toggle={Toggle} />
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Roles
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                    <li><a className="dropdown-item" href="#">Doctors</a></li>
                    <li><a className="dropdown-item" href="#">Nurses</a></li>
                    <li><a className="dropdown-item" href="#">Receptionist</a></li>
                    <li><a className="dropdown-item" href="#">Pharmacist</a></li>
                </ul>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="email-form">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                        checked={checked}
                        onChange={(e) => setChecked(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Check</button>
            </form>
            {submitted && (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Information</h5>
                        <p className="card-text">Name: {name}</p>
                        <p className="card-text">Email: {email}</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Deactivate

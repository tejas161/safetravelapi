import React from 'react';
import Navbar from './Navbar.js';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();

    const errorp = () => {
        navigate('/');
    }

    return(
        <>
        <Navbar/>
        
        
        <h1 className="text-white mt-4 text-center">Error Page !! <button onClick={errorp} className="btn btn-primary">Click here</button> to go to Home Page</h1>

        </>
    );
};



export default Error;
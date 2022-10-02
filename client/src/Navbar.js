import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

    const gohome = () => {
        window.location.href="/";
    }

    const cui = () => {
        const a = document.getElementById('navbarSupportedContent');
        if (a.className === "collapse navbar-collapse") {
            a.className = "collapse navbar-collapse show";
        }
        else {
            a.className = "collapse navbar-collapse";
        }



    }
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid ">
                    <img onClick={gohome} className="p-home" src="./images/title.jpeg" atl="homepage img" style={{ height: "3rem", width: "3rem" }} />
                    <h3 onClick={gohome} className="p-home navbar-brand text-white text-center ps-2" href="#">SAFE <br /> TRAVEL</h3>
                  
                    <button onClick={cui} className="navbar-toggler  bg-white " id="btn-nav" type="button">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li>
                                <NavLink className="nav-link navu-link text-white" to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link navu-link  text-white" to="/contactjs">Contact Us</NavLink>
                            </li>



                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    );
};


export default Navbar;
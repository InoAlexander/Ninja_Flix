import React from 'react'
import {useState, useEffect} from 'react';
import "./Navbar.css";

function Navbar() {
    const [show, handleShow] = useState(false);

    const navbarTransition = () =>{
        if (window.scrollY > 100){
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", navbarTransition)
        return () => window.addEventListener("scroll", navbarTransition)
    }, [])

    return (
        <div className={`navbar ${show && 'navBlack'}`}>
            <div className="navContents">
                <img className='navLogo' src="" alt="ninjaflix image goes here"></img>
                <img className='navatar' src="" alt="Avatar image goes here"></img>

            </div>
            
        </div>
    )
}

export default Navbar

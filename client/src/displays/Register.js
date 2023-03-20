import React from 'react'
import "./Register.css"

function Register() {
    return (
        <div className="register">
            <form>
                <h1>Register</h1>
                <input placeholder="Email" type="email" />
                <input placeholder="Password" type="password" />
                <button type='submit'>Sign In</button>
                <h4></h4>
            </form>


        </div>
       
    )
}

export default Register;

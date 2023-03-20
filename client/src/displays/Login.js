import React, {useState} from 'react'
import "./Login.css"
import Register from './Register';

function Login() {
    const [login, setLogin] = useState(false);

    return (
        <div className="loginPage ">
            <div className="loginBackground">
                <img className="loginLogo " src="" alt="" />
                <button onClick={ () => setLogin(true)} className="loginButton">Log In</button>

                <div className="gradient" />

                <div className="body">
                    {login ? (
                        <Register />
                    ): (
                        <>
                        <h1>A "SLICE" of your favorite movies!</h1>
                    <h3>CANCEL AND DIE BY THE BLADE!</h3>
                    <h4> Register or battle the shinobi! (you really dont have a choice!)  </h4>

                    <div className="input">
                        <form>
                            <input type='email' placeholder="Enter your Email"/> 
                            <button onClick={ () => setLogin(true)} className="join ">Join Our Clan</button>
                        </form>
                    </div>
                </>
                    )}

            </div>
        </div>
        </div>
    )
}

export default Login;

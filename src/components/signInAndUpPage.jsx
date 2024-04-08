import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../componentMenu";

export default function SignIn_Up_Page() {
    const [isActive, setIsActive] = useState(false);
    // const history = useHistory();

    const handleRegisterClick = () => {
        setIsActive(true);
        // history.push("/signinpage/signup");
    };

    const handleLoginClick = () => {
        setIsActive(false);
        // history.push("/signinpage/signin");
    };

    return (
        <>
            <Menu />
            <div id="login-form container" className={`login-form container  ${isActive ? "active" : ""}`} >
                <div className={`form-container ${isActive ? "sign-up" : "sign-in"}`}>
                    <form>
                        <h1>{isActive ? 'Create Account' : 'Sign In'}</h1>
                        <div className="social-icons">
                            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                            <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                        <span>{isActive ? 'or use your email for registration' : 'or use your email password'}</span>
                        {isActive && <input type="text" placeholder="Name" />}
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>{isActive ? 'Sign Up' : 'Sign In'}</button>
                    </form>
                </div>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>{isActive ? 'Welcome Back!' : 'Hello, friend!'}</h1>
                            <p>{isActive ? 'Enter your personal details to use all of site features' : 'Register with your personal details to use all of site features'}</p>
                            {isActive ?
                                <Link to='/signin'><button className="hidden" id="login" onClick={handleLoginClick}>Sign In</button></Link> :
                                <Link to='/signup'><button className="hidden" id="register" onClick={handleRegisterClick}>Sign Up</button></Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

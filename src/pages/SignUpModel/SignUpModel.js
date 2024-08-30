// SignUpModal.js
import React from "react";
import './SignUpModel.css';
import SignInModal from "../SignInModal/SignInModal";

const SignUpModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // Don't render if modal is closed

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" // IMDb logo for demonstration, replace with your own if needed
                    alt="IMDb Logo"
                    className="modal-logo"
                />
                <h2 className="modal-title">Create account</h2>
                <form className="signup-form">
                    <div className="form-group">
                        <label>Your name</label>
                        <input type="text" placeholder="First and last name" required />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="at least 8 characters" required />
                        <small className="password-info">
                            <i>Passwords must be at least 8 characters.</i>
                        </small>
                    </div>
                    <div className="form-group">
                        <label>Re-enter password</label>
                        <input type="password" placeholder="Retype your password" required />
                    </div>
                    <button type="submit" className="submit-btn">
                        Create your IMDb account
                    </button>
                    {/* Fade Effect Div */}
                    <div className="fade-effect"></div>

                </form>
                <p className="signin-link">
                    Already have an account? <a href="#" >Sign In</a>
                </p>
                <button className="close-btn" onClick={onClose}>
                    x</button>
            </div>
        </div >
    );
};

export default SignUpModal;
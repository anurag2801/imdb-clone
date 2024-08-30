// // SignInModal.js
// import React from "react";
// import "./SignInModal.css";

// const SignInModal = ({ isOpen, onClose }) => {
//     if (!isOpen) return null; // Don't render if modal is closed

//     return (
//         <div className="modal-overlay">
//             <div className="modal-content">
//                 <img
//                     src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" // IMDb logo for demonstration, replace with your own if needed
//                     alt="IMDb Logo"
//                     className="modal-logo"
//                 />
//                 <h2 className="modal-title">Sign in</h2>
//                 <form className="signin-form">
//                     <div className="form-group">
//                         <label>Email or mobile phone number</label>
//                         <input type="text" placeholder="" required />
//                     </div>
//                     <div className="form-group">
//                         <label>Password <a href="#" className="forgot-password">Forgot password?</a></label>
//                         <input type="password" placeholder="" required />
//                     </div>
//                     <button type="submit" className="submit-btn">
//                         Sign in
//                     </button>
//                     <div className="keep-signed-in">
//                         <input type="checkbox" id="keep-signed-in" />
//                         <label htmlFor="keep-signed-in">Keep me signed in. <a href="#" className="details-link">Details</a></label>
//                     </div>
//                 </form>

//                 <hr className="divider" />

//                 <div className="new-account">
//                     <p>New to IMDb?</p>
//                     <button className="create-account-btn">
//                         Create your IMDb account
//                     </button>
//                 </div>

//                 <button className="close-btn" onClick={onClose}>
//                     Close
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default SignInModal;
// src/components/AuthButtons.jsx
import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { signInWithGoogle, logOut } from "../Firebase";
import './AuthButtons.css';

function AuthButtons() {
  const { user } = useAuth();

  // Log the user data to see if photoURL exists
  console.log("User:", user);

  return (
    <div className="auth-buttons">
      {user ? (
        <>
          {user.photoURL && (
            <img src={user.photoURL} alt="Profile" className="profile-pic" />
          )}
          <button onClick={logOut} className="logout-button">Log Out</button>
        </>
      ) : (
        <button onClick={signInWithGoogle} className="signin-button">Sign In</button>
      )}
    </div>
  );
}

export default AuthButtons;

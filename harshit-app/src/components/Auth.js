import React, { useState } from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import User from "./User";

const Auth = () => {
  const clientId =
    "1067868443489-g6k01qofe86cf7pqooj2epvlkpm45ng1.apps.googleusercontent.com";

  const [userData, setUserData] = useState("");

  if (userData) {
    window.localStorage.setItem("name", userData.name);
    window.localStorage.setItem("email", userData.email);
    window.localStorage.setItem("picture", userData.picture);
  }

  let name = window.localStorage.getItem("name");
  let email = window.localStorage.getItem("email");
  let picture = window.localStorage.getItem("email");

  if (name && email) {
    console.log("iff");
    console.log(userData);
    if (userData) {
      return <User info={userData} />;
    } else {
      setUserData({ name: name, email: email, picture: picture });
      return <User info={userData} />;
    }
  }

  return (
    <div>
      <h2>Google OAuth Example</h2>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            var token = credentialResponse.credential;
            var decoded = jwt_decode(token);
            setUserData(decoded);
          }}
          onFailure={() => console.log("Login Failed")}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default Auth;

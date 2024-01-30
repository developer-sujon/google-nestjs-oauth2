import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";
import { useState } from "react";
import "./App.css";
import Profile from "./components/profile";

function App() {
  const [authData, setAuthData] = useState({});

  return (
    <div className="App" style={{ width: "200px" }}>
      <GoogleOAuthProvider clientId="49027018973-tj2c5q844k67gnr2msoir1548qrkqsaf.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={async (credentialResponse) => {
            const response = await axios.post("http://localhost:5000/login", {
              token: credentialResponse.credential,
            });
            const data = response.data;

            setAuthData(data);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
          // useOneTap
          auto_select
        />
        <Profile authData={authData} setAuthData={setAuthData} />
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;

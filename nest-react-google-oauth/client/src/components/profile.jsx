import { googleLogout } from "@react-oauth/google";
import React from "react";

const Profile = ({ authData, setAuthData }) => {
  return (
    <div>
      {authData && authData?.name && (
        <>
          <h1>Profile</h1>
          <h3>{authData.name}</h3>
          <h3>{authData.email}</h3>
          <img src={authData.image} />

          <button
            onClick={() => {
              googleLogout();
              localStorage.removeItem("authData");
              setAuthData({});
            }}
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default Profile;

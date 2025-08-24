import React from "react";
import { Outlet, Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="p-4">
      <h1>👤 Profile Page</h1>
      <nav className="space-x-4">
        <Link to="details">Profile Details</Link>
        <Link to="settings">Profile Settings</Link>
      </nav>
      <div className="mt-4 border p-4">
        {/* Nested routes render here */}
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;

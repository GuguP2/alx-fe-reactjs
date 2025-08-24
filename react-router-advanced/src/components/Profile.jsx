import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const Profile = () => {
  return (
    <div className="p-4">
      <h1>👤 Profile Page</h1>

      {/* Local navigation for nested routes */}
      <nav className="space-x-4">
        <Link to="details">Profile Details</Link>
        <Link to="settings">Profile Settings</Link>
      </nav>

      <div className="mt-4 border p-4">
        {/* Nested routing handled here */}
        <Routes>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;

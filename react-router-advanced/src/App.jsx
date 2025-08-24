import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

// Import pages/components
import Home from "./components/Home";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div>
        {/* Simple Navbar */}
        <nav className="p-4 bg-gray-800 text-white flex space-x-4">
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/post/1">Blog Post #1</Link>
          <button
            onClick={() => setIsAuthenticated(!isAuthenticated)}
            className="ml-auto bg-blue-500 px-3 py-1 rounded"
          >
            {isAuthenticated ? "Logout" : "Login"}
          </button>
        </nav>

        <Routes>
          {/* Public Route */}
          <Route path="/" element={<Home />} />

          {/* Protected Route */}
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            }
          >
            {/* Nested Routes inside Profile */}
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>

          {/* Dynamic Route for Blog Posts */}
          <Route path="/post/:postId" element={<BlogPost />} />

          {/* Fallback Route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

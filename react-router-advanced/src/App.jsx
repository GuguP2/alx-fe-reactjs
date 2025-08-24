import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost"; // dynamic page
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const isAuthenticated = true; // mock authentication

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Protected routes */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

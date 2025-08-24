import { useState } from 'react'
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent";

const queryClient = new QueryClient();
function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-6">React Query Demo</h1>
      <PostsComponent />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
  
);


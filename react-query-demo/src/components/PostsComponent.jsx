// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "@tanstack/react-query";

// Fetch posts function
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PostsComponent = () => {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60, // Data considered fresh for 1 min
    cacheTime: 1000 * 60 * 5, // Cache lasts 5 min
    refetchOnWindowFocus: false, // prevent auto refetch when window regains focus
    keepPreviousData: true, // useful for smoother updates
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">📌 Posts</h2>

      {/* Refetch Button */}
      <button
        onClick={() => refetch()}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        disabled={isFetching}
      >
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      {/* Posts List */}
      <ul className="space-y-3">
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className="p-3 border rounded bg-gray-50">
            <h3 className="font-semibold">{post.title}</h3>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;

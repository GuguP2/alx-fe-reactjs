import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUser(null);

    try {
      const data = await fetchUserData(username);

      // Optional filters (basic client-side)
      if (
        (location && !data.location?.toLowerCase().includes(location.toLowerCase())) ||
        (minRepos && data.public_repos < parseInt(minRepos))
      ) {
        setError("Looks like we cant find the user");
      } else {
        setUser(data);
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">🔍 GitHub User Search</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block font-medium">Username *</label>
          <input
            id="username"
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            placeholder="e.g., octocat"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="location" className="block font-medium">Location (optional)</label>
          <input
            id="location"
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            placeholder="e.g., San Francisco"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="repos" className="block font-medium">Minimum Repos (optional)</label>
          <input
            id="repos"
            type="number"
            min="0"
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            placeholder="e.g., 10"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-gray-600">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {user && (
        <div className="mt-6 bg-white shadow-md p-4 rounded">
          <img
            src={user.avatar_url}
            alt="avatar"
            className="w-20 h-20 rounded-full mx-auto"
          />
          <h3 className="text-xl font-bold text-center mt-2">{user.name || user.login}</h3>
          <p className="text-center text-gray-600">{user.location}</p>
          <p className="text-center mt-2">
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View GitHub Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default Search;

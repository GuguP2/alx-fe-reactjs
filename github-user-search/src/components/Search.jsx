import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
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
      setUser(data);
    } catch (err) {
      setError('Looks like we can’t find the user.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: '0.5rem', width: '250px', marginRight: '10px' }}
        />
        <button type="submit" style={{ padding: '0.5rem' }}>Search</button>
      </form>

      {loading && <p>Loading...</p>}
      setError("Looks like we can’t find the user.")


      {user && (
        <div style={{ border: '1px solid #ddd', padding: '1rem', maxWidth: '400px' }}>
          <img src={user.avatar_url} alt="avatar" style={{ width: '100px', borderRadius: '50%' }} />
          <h2>{user.name || user.login}</h2>
          <p><a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a></p>
        </div>
      )}
    </div>
  );
}

export default Search;

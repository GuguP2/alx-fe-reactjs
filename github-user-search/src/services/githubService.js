// src/services/githubService.js
import axios from 'axios';

const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export async function fetchUserData(username) {
  try {
  const data = await fetchUserData(username);
  setUser(data);
} catch (err) {
  setError("Looks like we can’t find the user.");  // ← this line is essential
}

  const response = await axios.get(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `Bearer ${GITHUB_API_KEY}`,
    },
  });

  return response.data;
}

// src/services/githubService.js
import axios from 'axios';

const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export async function fetchUserData(username) {
  setError("Looks like we can’t find the user.");

  const response = await axios.get(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `Bearer ${GITHUB_API_KEY}`,
    },
  });

  return response.data;
}

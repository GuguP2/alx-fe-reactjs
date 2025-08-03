import axios from 'axios';

const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export async function searchUsers(query) {
  const response = await axios.get(`https://api.github.com/search/users?q=${query}`, {
    headers: {
      Authorization: `Bearer ${GITHUB_API_KEY}`,
    },
  });

  return response.data.items; // array of users
}

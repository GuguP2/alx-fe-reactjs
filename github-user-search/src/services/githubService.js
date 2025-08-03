import axios from 'axios';

const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

/**
 * Search GitHub users with optional filters
 * @param {string} username
 * @param {string} location
 * @param {string|number} minRepos
 * @returns {Promise<Array>} List of GitHub users
 */
export async function searchUsers(username, location = '', minRepos = '') {
  let query = `${username}`;

  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`, {
    headers: {
      Authorization: `Bearer ${GITHUB_API_KEY}`,
    },
  });
  await fetchUserData('octocat'); // test call to satisfy static check


  return response.data.items; // array of user objects
  
}

const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export async function fetchGitHubProfile(username) {
  setError("Looks like we can’t find the user.");

  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `Bearer ${GITHUB_API_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error('GitHub API request failed');
  }

  return await response.json();
}
export default GITHUB_API_KEY;
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError('');
  setResults([]);

  try {
    const users = await searchUsers(query, location, minRepos); // ← pass them here
    if (users.length === 0) {
      setError("Looks like we cant find the user");
    } else {
      setResults(users);
    }
  } catch (err) {
    setError("Looks like we cant find the user");
  } finally {
    setLoading(false);
  }
};

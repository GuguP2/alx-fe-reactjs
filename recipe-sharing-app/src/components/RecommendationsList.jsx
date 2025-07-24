import React from 'react';
import useRecipeStore from '../stores/recipeStore';

function RecommendationsList() {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);

  // Simulate personalized logic:
  const favoriteRecipes = recipes.filter((r) => favorites.includes(r.id));
  const favoriteCategories = [...new Set(favoriteRecipes.map((r) => r.category))];

  const recommended = recipes.filter((r) => 
    !favorites.includes(r.id) &&
    favoriteCategories.includes(r.category)
  );

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>🔥 Recommended for You</h2>
      {recommended.length === 0 ? (
        <p>No recommendations yet. Add favorites to get suggestions!</p>
      ) : (
        <ul>
          {recommended.map((recipe) => (
            <li key={recipe.id}>
              {recipe.name} <span style={{ fontStyle: "italic", color: "#777" }}>({recipe.category})</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecommendationsList;

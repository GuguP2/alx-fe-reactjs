import React from 'react';
import useRecipeStore from '../stores/recipeStore';
import { Link } from 'react-router-dom';

function RecipeList() {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes());

  return (
    <div style={{ marginTop: '20px' }}>
      <input
        type="text"
        placeholder="Search recipes by name..."
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '10px',
          width: '100%',
          maxWidth: '400px',
          marginBottom: '20px',
          fontSize: '16px',
        }}
      />

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <li key={recipe.id} style={{ marginBottom: '10px' }}>
              <strong>{recipe.name}</strong> &nbsp;
              <Link to={`/recipe/${recipe.id}`}>View</Link> &nbsp;
              <Link to={`/edit/${recipe.id}`}>Edit</Link>
            </li>
          ))
        ) : (
          <li>No recipes found.</li>
        )}
      </ul>
    </div>
  );
}

export default RecipeList;

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from '../stores/recipeStore';

function EditRecipeForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [name, setName] = useState(recipe?.name || '');

  if (!recipe) return <p>Recipe not found.</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({ ...recipe, name });
    navigate(`/recipe/${recipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: '8px', width: '250px', marginRight: '10px' }}
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default EditRecipeForm;

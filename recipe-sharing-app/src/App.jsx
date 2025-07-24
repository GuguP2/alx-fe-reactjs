import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import useRecipeStore from './stores/recipeStore';

function App() {
  const initializeRecipes = useRecipeStore((state) => state.initializeRecipes);

  useEffect(() => {
    // Optional: preload with some sample recipes
    initializeRecipes([
      { id: 1, name: "Pasta Carbonara" },
      { id: 2, name: "Beef Stew" }
    ]);
  }, [initializeRecipes]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>My Recipes</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App

import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState("");

  // Separate validation function
  const validate = () => {
    const ingredientList = ingredients.split("\n").filter((item) => item.trim() !== "");
    if (!title.trim()) {
      return "Please enter a recipe title.";
    }
    if (ingredientList.length < 2) {
      return "Please enter at least two ingredients (one per line).";
    }
    if (!steps.trim()) {
      return "Please enter preparation steps.";
    }
    return ""; // no errors
    validate
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errorMsg = validate();
    if (errorMsg) {
      setErrors(errorMsg);
      return;
    }

    setErrors(""); // clear errors

    const newRecipe = {
      title,
      ingredients: ingredients.split("\n").filter((item) => item.trim() !== ""),
      instructions: steps.split("\n").filter((step) => step.trim() !== ""),
    };

    console.log("Recipe submitted:", newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Add New Recipe</h1>

      {errors && <p className="bg-red-100 text-red-600 p-3 rounded mb-4">{errors}</p>}

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        {/* Title */}
        <div>
          <label className="block mb-1 font-semibold">Recipe Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block mb-1 font-semibold">Ingredients (one per line)</label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
        </div>

        {/* Steps */}
        <div>
          <label className="block mb-1 font-semibold">Preparation Steps</label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;

import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],

  initializeRecipes: (initial) => set({ recipes: initial }),

  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
      favorites: state.favorites.filter((favId) => favId !== id),
    })),

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])],
    })),

  getRecommendations: () => {
    const { recipes, favorites } = get();
    return recipes.filter((r) => !favorites.includes(r.id));
  },
}));

export default useRecipeStore;

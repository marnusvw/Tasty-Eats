

    const initialFavoriteRecipes = [];

const addFavoriteRecipe = (recipe) => {
  return {
    type: "favoriteRecipes/addRecipe",
    payload: recipe,
  };
};
const removeFavoriteRecipe = (recipe) => {
  return {
    type: "favoriteRecipes/removeRecipe",
    payload: recipe,
  };
};

const favoriteRecipesReducer = (
  favoriteRecipes = initialFavoriteRecipes,
  action
) => {
  switch (action.payload) {
    case "favoriteRecipes/addRecipe": {
      return [...favoriteRecipes, action.payload];
    }
    case 'favoriteRecipes/removeRecipe':{
        return favoriteRecipes.filter(recipe => recipe.id !== action.payload.id)
    }
    default:
      return favoriteRecipes;
  }
};

export default favoriteRecipesReducer;



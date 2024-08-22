import react from "react";

// const baseUrl =
//   "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes";
// const number = "number=10";
// const options = {
//   method: "GET",
//   headers: {
//     "x-rapidapi-key": "3211bc02e4mshf743a039b36fbe3p1a85a8jsn55877437b5de",
//     "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
//   },
// };
const baseUrl = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?`;
const number = "number=10";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "3211bc02e4mshf743a039b36fbe3p1a85a8jsn55877437b5de",
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};
const Recipes = {
  async getRecipes(type) {
    let fullUrl = "";
    if (!type) {
      fullUrl = baseUrl + number;
    } else {
      const endpoint = `tags=${type.toLowerCase()}&`;
      fullUrl = baseUrl + endpoint + number;
    }
    try {
      const response = await fetch(fullUrl, options);
      const result = await response.json();
      return result.recipes;
    } catch (error) {
      console.error(error);
    }
  },
};

export default Recipes;

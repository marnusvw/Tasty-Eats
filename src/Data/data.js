import react from 'react'

const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=2';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3211bc02e4mshf743a039b36fbe3p1a85a8jsn55877437b5de',
		'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

const Recipes = {

   async getRecipes() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result)
        return result;
    } catch (error) {
        console.error(error);
    }
}
}

export default Recipes;
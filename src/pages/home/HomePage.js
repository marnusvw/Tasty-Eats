import React from "react";
import styles from "./HomePage.module.css";
import NavBar from "../../components/NavBar/NavBar";
import { useState, useEffect } from "react";
import Recipes from "../../features/Data/data";
import logo from "../../assets/logo.png";
import RecipeCard from "../../components/Recipe/RecipeCard";

const recipesMock = 
  {
    vegetarian: true,
    vegan: false,
    glutenFree: true,
    dairyFree: false,
    veryHealthy: false,
    cheap: false,
    veryPopular: false,
    sustainable: false,
    lowFodmap: false,
    weightWatcherSmartPoints: 10,
    gaps: "no",
    preparationMinutes: null,
    cookingMinutes: null,
    aggregateLikes: 6,
    healthScore: 17,
    creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    license: "CC BY 3.0",
    sourceName: "Foodista",
    pricePerServing: 123.98,
    extendedIngredients: [
      {
        id: 9042,
        aisle: "Produce",
        image: "blackberries.jpg",
        consistency: "SOLID",
        name: "blackberries",
        nameClean: "blackberries",
        original: "1/2 cup frozen blackberries",
        originalName: "frozen blackberries",
        amount: 0.5,
        unit: "cup",
        meta: ["frozen"],
        measures: {
          us: { amount: 0.5, unitShort: "cups", unitLong: "cups" },
          metric: { amount: 72.0, unitShort: "g", unitLong: "grams" },
        },
      },
      {
        id: 9050,
        aisle: "Produce",
        image: "blueberries.jpg",
        consistency: "SOLID",
        name: "blueberries",
        nameClean: "blueberries",
        original: "1/2 cup frozen blueberries",
        originalName: "frozen blueberries",
        amount: 0.5,
        unit: "cup",
        meta: ["frozen"],
        measures: {
          us: { amount: 0.5, unitShort: "cups", unitLong: "cups" },
          metric: { amount: 74.0, unitShort: "g", unitLong: "grams" },
        },
      },
      {
        id: 14292,
        aisle: "Frozen",
        image: "lemonade.jpg",
        consistency: "SOLID",
        name: "lemonade concentrate",
        nameClean: "lemonade concentrate",
        original: "2 tablespoons lemonade concentrate",
        originalName: "lemonade concentrate",
        amount: 2.0,
        unit: "tablespoons",
        meta: [],
        measures: {
          us: { amount: 2.0, unitShort: "Tbsps", unitLong: "Tbsps" },
          metric: { amount: 2.0, unitShort: "Tbsps", unitLong: "Tbsps" },
        },
      },
      {
        id: 9302,
        aisle: "Produce",
        image: "raspberries.jpg",
        consistency: "SOLID",
        name: "raspberries",
        nameClean: "raspberries",
        original: "1/2 cup frozen unsweetened raspberries",
        originalName: "frozen unsweetened raspberries",
        amount: 0.5,
        unit: "cup",
        meta: ["unsweetened", "frozen"],
        measures: {
          us: { amount: 0.5, unitShort: "cups", unitLong: "cups" },
          metric: { amount: 60.0, unitShort: "g", unitLong: "grams" },
        },
      },
      {
        id: 9316,
        aisle: "Produce",
        image: "strawberries.png",
        consistency: "SOLID",
        name: "strawberries",
        nameClean: "strawberries",
        original: "1/2 cup frozen unsweetened strawberries",
        originalName: "frozen unsweetened strawberries",
        amount: 0.5,
        unit: "cup",
        meta: ["unsweetened", "frozen"],
        measures: {
          us: { amount: 0.5, unitShort: "cups", unitLong: "cups" },
          metric: { amount: 72.0, unitShort: "g", unitLong: "grams" },
        },
      },
      {
        id: 19335,
        aisle: "Baking",
        image: "sugar-in-bowl.png",
        consistency: "SOLID",
        name: "sugar",
        nameClean: "sugar",
        original: "1 tablespoon sugar",
        originalName: "sugar",
        amount: 1.0,
        unit: "tablespoon",
        meta: [],
        measures: {
          us: { amount: 1.0, unitShort: "Tbsp", unitLong: "Tbsp" },
          metric: { amount: 1.0, unitShort: "Tbsp", unitLong: "Tbsp" },
        },
      },
      {
        id: 2050,
        aisle: "Baking",
        image: "vanilla-extract.jpg",
        consistency: "LIQUID",
        name: "vanilla extract",
        nameClean: "vanilla extract",
        original: "1/2 teaspoon vanilla extract",
        originalName: "vanilla extract",
        amount: 0.5,
        unit: "teaspoon",
        meta: [],
        measures: {
          us: { amount: 0.5, unitShort: "tsps", unitLong: "teaspoons" },
          metric: { amount: 0.5, unitShort: "tsps", unitLong: "teaspoons" },
        },
      },
      {
        id: 1011077,
        aisle: "Milk, Eggs, Other Dairy",
        image: "milk.png",
        consistency: "LIQUID",
        name: "milk",
        nameClean: "whole milk",
        original: "5 1/2 cups whole milk (do not use skim)",
        originalName: "whole milk (do not use skim)",
        amount: 5.5,
        unit: "cups",
        meta: ["whole", "(do not use skim)"],
        measures: {
          us: { amount: 5.5, unitShort: "cups", unitLong: "cups" },
          metric: { amount: 1.342, unitShort: "l", unitLong: "liters" },
        },
      },
    ],
    id: 643241,
    title: "Four-Berry Blast Fruit Smoothie",
    readyInMinutes: 10,
    servings: 4,
    sourceUrl:
      "https://www.foodista.com/recipe/445N2G3Y/four-berry-blast-fruit-smoothie",
    image: "https://img.spoonacular.com/recipes/643241-556x370.jpg",
    imageType: "jpg",
    summary:
      'If you want to add more <b>gluten free and lacto ovo vegetarian</b> recipes to your recipe box, Four-Berry Blast Fruit Smoothie might be a recipe you should try. This recipe serves 4. This breakfast has <b>261 calories</b>, <b>12g of protein</b>, and <b>11g of fat</b> per serving. For <b>$1.24 per serving</b>, this recipe <b>covers 15%</b> of your daily requirements of vitamins and minerals. 6 people were impressed by this recipe. Head to the store and pick up milk, blueberries, vanillan extract, and a few other things to make it today. From preparation to the plate, this recipe takes about <b>10 minutes</b>. It is brought to you by Foodista. Overall, this recipe earns a <b>solid spoonacular score of 74%</b>. Try <a href="https://spoonacular.com/recipes/four-berry-blast-fruit-smoothie-1364149">Four-Berry Blast Fruit Smoothie</a>, <a href="https://spoonacular.com/recipes/ginger-berry-fruit-smoothie-1434023">Ginger Berry Fruit Smoothie</a>, and <a href="https://spoonacular.com/recipes/ginger-berry-fruit-smoothie-1253437">Ginger Berry Fruit Smoothie</a> for similar recipes.',
    cuisines: [],
    dishTypes: ["morning meal", "brunch", "beverage", "breakfast", "drink"],
    diets: ["gluten free", "lacto ovo vegetarian"],
    occasions: [],
    instructions:
      "<ol><li>Place first five items into a blender and pulse a few times. Add the next berry and pulse 2-3 times. Repeat until all berries have been added, then blend on high until smooth.</li></ol>",
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Place first five items into a blender and pulse a few times.",
            ingredients: [],
            equipment: [
              {
                id: 404726,
                name: "blender",
                localizedName: "blender",
                image:
                  "https://spoonacular.com/cdn/equipment_100x100/blender.png",
              },
            ],
          },
          {
            number: 2,
            step: "Add the next berry and pulse 2-3 times. Repeat until all berries have been added, then blend on high until smooth.",
            ingredients: [
              {
                id: 1009054,
                name: "berries",
                localizedName: "berries",
                image: "berries-mixed.jpg",
              },
            ],
            equipment: [],
          },
        ],
      },
    ],
    originalId: null,
    spoonacularScore: 75.57759857177734,
    spoonacularSourceUrl:
      "https://spoonacular.com/four-berry-blast-fruit-smoothie-643241",
  };

const HomePage = () => {

  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);




  // const fetchRandomRecipes = async () => {
  //   const recipesFetched = await Recipes.getRecipes('breakfast');
  //   setRecipes(recipesFetched);
  //   setIsLoading(!isLoading);
  // };

  // useEffect(() => {
  //   fetchRandomRecipes();
  //   }, []);
  return (
    <div className={styles.HomePage}>
      
      <RecipeCard  summary={recipesMock.summary} imageSrc={recipesMock.image}  name={recipesMock.title} cookTime={recipesMock.readyInMinutes} servings={recipesMock.servings}/>

      
      {/* <ul>
        {recipes.map((recipe) => (
          <li>{recipe.title}</li>
        ))}
      </ul> */}

      {/* <img src='https://spoonacular.com/recipeImages/Ramen-Noodle-Coleslaw-556177.jpg'/>
          <h1>Wonderfully tasty meals</h1>
        <RecipeCard /> */}
    </div>
  );
};

export default HomePage;

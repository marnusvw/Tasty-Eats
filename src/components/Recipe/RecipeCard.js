import React from "react";
import styles from "./RecipeCard.module.css";
import DOMPurify from 'dompurify';
import { NavLink } from "react-router-dom";

const recipeMock = {
  recipes: [
    {
      vegetarian: true,
      vegan: false,
      glutenFree: false,
      dairyFree: true,
      veryHealthy: false,
      cheap: false,
      veryPopular: false,
      sustainable: false,
      lowFodmap: false,
      weightWatcherSmartPoints: 3,
      gaps: "no",
      preparationMinutes: null,
      cookingMinutes: null,
      aggregateLikes: 13,
      healthScore: 2,
      creditsText: "foodista.com",
      sourceName: "foodista.com",
      pricePerServing: 19.16,
      extendedIngredients: [
        {
          id: 18369,
          aisle: "Baking",
          image: "white-powder.jpg",
          consistency: "SOLID",
          name: "baking powder",
          nameClean: "baking powder",
          original: "1 teaspoon Baking Powder",
          originalName: "Baking Powder",
          amount: 1.0,
          unit: "teaspoon",
          meta: [],
          measures: {
            us: { amount: 1.0, unitShort: "tsp", unitLong: "teaspoon" },
            metric: { amount: 1.0, unitShort: "tsp", unitLong: "teaspoon" },
          },
        },
        {
          id: 9040,
          aisle: "Produce",
          image: "bananas.jpg",
          consistency: "SOLID",
          name: "bananas",
          nameClean: "banana",
          original: "3 mashed very ripe bananas (approximately 1 cup)",
          originalName: "mashed very ripe bananas (approximately 1 cup)",
          amount: 3.0,
          unit: "",
          meta: ["very ripe", "mashed", "(approximately 1 cup)"],
          measures: {
            us: { amount: 3.0, unitShort: "", unitLong: "" },
            metric: { amount: 3.0, unitShort: "", unitLong: "" },
          },
        },
        {
          id: 9078,
          aisle: "Produce",
          image: "cranberries.jpg",
          consistency: "SOLID",
          name: "cranberries",
          nameClean: "cranberries",
          original: "1 cup fresh or frozen cranberries, cut in half",
          originalName: "fresh or frozen cranberries, cut in half",
          amount: 1.0,
          unit: "cup",
          meta: ["fresh", "cut in half"],
          measures: {
            us: { amount: 1.0, unitShort: "cup", unitLong: "cup" },
            metric: { amount: 100.0, unitShort: "g", unitLong: "grams" },
          },
        },
        {
          id: 1123,
          aisle: "Milk, Eggs, Other Dairy",
          image: "egg.png",
          consistency: "SOLID",
          name: "eggs",
          nameClean: "egg",
          original: "2 eggs",
          originalName: "eggs",
          amount: 2.0,
          unit: "",
          meta: [],
          measures: {
            us: { amount: 2.0, unitShort: "", unitLong: "" },
            metric: { amount: 2.0, unitShort: "", unitLong: "" },
          },
        },
        {
          id: 20081,
          aisle: "Baking",
          image: "flour.png",
          consistency: "SOLID",
          name: "flour",
          nameClean: "wheat flour",
          original: "1 1/2 cups Flour",
          originalName: "Flour",
          amount: 1.5,
          unit: "cups",
          meta: [],
          measures: {
            us: { amount: 1.5, unitShort: "cups", unitLong: "cups" },
            metric: { amount: 187.5, unitShort: "g", unitLong: "grams" },
          },
        },
        {
          id: 12511111,
          aisle: "Baking",
          image: "extract.png",
          consistency: "LIQUID",
          name: "orange extract",
          nameClean: "orange extract",
          original: "1 tsp pure orange extract",
          originalName: "pure orange extract",
          amount: 1.0,
          unit: "tsp",
          meta: ["pure"],
          measures: {
            us: { amount: 1.0, unitShort: "tsp", unitLong: "teaspoon" },
            metric: { amount: 1.0, unitShort: "tsp", unitLong: "teaspoon" },
          },
        },
        {
          id: 9216,
          aisle: "Produce",
          image: "orange-zest.png",
          consistency: "SOLID",
          name: "orange zest",
          nameClean: "orange zest",
          original: "1 Tbsp. Orange Zest",
          originalName: "Orange Zest",
          amount: 1.0,
          unit: "Tbsp",
          meta: [],
          measures: {
            us: { amount: 1.0, unitShort: "Tbsp", unitLong: "Tbsp" },
            metric: { amount: 1.0, unitShort: "Tbsp", unitLong: "Tbsp" },
          },
        },
        {
          id: 2047,
          aisle: "Spices and Seasonings",
          image: "salt.jpg",
          consistency: "SOLID",
          name: "salt",
          nameClean: "table salt",
          original: "1/2 teaspoon Salt",
          originalName: "Salt",
          amount: 0.5,
          unit: "teaspoon",
          meta: [],
          measures: {
            us: { amount: 0.5, unitShort: "tsps", unitLong: "teaspoons" },
            metric: { amount: 0.5, unitShort: "tsps", unitLong: "teaspoons" },
          },
        },
        {
          id: 19335,
          aisle: "Baking",
          image: "sugar-in-bowl.png",
          consistency: "SOLID",
          name: "sugar",
          nameClean: "sugar",
          original: "1/2 cup Sugar",
          originalName: "Sugar",
          amount: 0.5,
          unit: "cup",
          meta: [],
          measures: {
            us: { amount: 0.5, unitShort: "cups", unitLong: "cups" },
            metric: { amount: 100.0, unitShort: "g", unitLong: "grams" },
          },
        },
        {
          id: 9019,
          aisle: "Canned and Jarred",
          image: "applesauce.png",
          consistency: "SOLID",
          name: "applesauce",
          nameClean: "applesauce",
          original: "1/2 cup unsweetened applesauce",
          originalName: "unsweetened applesauce",
          amount: 0.5,
          unit: "cup",
          meta: ["unsweetened"],
          measures: {
            us: { amount: 0.5, unitShort: "cups", unitLong: "cups" },
            metric: { amount: 122.0, unitShort: "ml", unitLong: "milliliters" },
          },
        },
        {
          id: 2050,
          aisle: "Baking",
          image: "vanilla-extract.jpg",
          consistency: "LIQUID",
          name: "vanilla extract",
          nameClean: "vanilla extract",
          original: "1 teaspoon Vanilla Extract",
          originalName: "Vanilla Extract",
          amount: 1.0,
          unit: "teaspoon",
          meta: [],
          measures: {
            us: { amount: 1.0, unitShort: "tsp", unitLong: "teaspoon" },
            metric: { amount: 1.0, unitShort: "tsp", unitLong: "teaspoon" },
          },
        },
        {
          id: 20080,
          aisle: "Baking",
          image: "flour.png",
          consistency: "SOLID",
          name: "flour",
          nameClean: "whole wheat flour",
          original: "1/2 cup whole wheat flour",
          originalName: "whole wheat flour",
          amount: 0.5,
          unit: "cup",
          meta: ["whole wheat"],
          measures: {
            us: { amount: 0.5, unitShort: "cups", unitLong: "cups" },
            metric: { amount: 60.0, unitShort: "g", unitLong: "grams" },
          },
        },
      ],
      id: 640389,
      title: "Cranberry Orange Banana Bread",
      readyInMinutes: 75,
      servings: 18,
      sourceUrl:
        "https://www.foodista.com/recipe/NF8TZYG4/cranberry-orange-banana-bread",
      image: "https://img.spoonacular.com/recipes/640389-556x370.jpg",
      imageType: "jpg",
      summary:
        'Cranberry Orange Banana Bread might be just the breakfast you are searching for. One serving contains <b>102 calories</b>, <b>2g of protein</b>, and <b>1g of fat</b>. This recipe serves 18. For <b>19 cents per serving</b>, this recipe <b>covers 4%</b> of your daily requirements of vitamins and minerals. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately <b>1 hour and 15 minutes</b>. It is a good option if you\'re following a <b>dairy free and lacto ovo vegetarian</b> diet. 13 people found this recipe to be yummy and satisfying. A mixture of flour, vanillan extract, sugar, and a handful of other ingredients are all it takes to make this recipe so flavorful. All things considered, we decided this recipe <b>deserves a spoonacular score of 32%</b>. This score is not so super. Similar recipes include <a href="https://spoonacular.com/recipes/cranberry-orange-banana-bread-1789943">Cranberry Orange Banana Bread</a>, <a href="https://spoonacular.com/recipes/cranberry-banana-tea-bread-with-orange-glaze-588394">Cranberry banana tea bread with orange glaze</a>, and <a href="https://spoonacular.com/recipes/cranberry-orange-bread-with-a-light-orange-glaze-620089">Cranberry Orange Bread with a Light Orange Glaze</a>.',
      cuisines: [],
      dishTypes: ["morning meal", "dessert", "brunch", "breakfast"],
      diets: ["dairy free", "lacto ovo vegetarian"],
      occasions: [],
      instructions:
        "<ol><li>Mix together dry ingredients until well combined.</li><li>In a separate bowl, mix eggs, applesauce, vanilla extract, orange extract, orange zest and mashed bananas.</li><li>Stir banana mixture into flour mixture, and then add cranberries.</li><li>Stir carefully</li><li>Bake in a greased loaf pan or (3 mini pans for 30 minutes) for approximately one hour at 350F.</li><li>Bread is done when a toothpick comes out clean.</li></ol>",
      analyzedInstructions: [
        {
          name: "",
          steps: [
            {
              number: 1,
              step: "Mix together dry ingredients until well combined.In a separate bowl, mix eggs, applesauce, vanilla extract, orange extract, orange zest and mashed bananas.Stir banana mixture into flour mixture, and then add cranberries.Stir carefully",
              ingredients: [
                {
                  id: 2050,
                  name: "vanilla extract",
                  localizedName: "vanilla extract",
                  image: "vanilla-extract.jpg",
                },
                {
                  id: 1009040,
                  name: "mashed banana",
                  localizedName: "mashed banana",
                  image: "bananas.jpg",
                },
                {
                  id: 12511111,
                  name: "orange extract",
                  localizedName: "orange extract",
                  image: "extract.png",
                },
                {
                  id: 9078,
                  name: "cranberries",
                  localizedName: "cranberries",
                  image: "cranberries.jpg",
                },
                {
                  id: 9216,
                  name: "orange zest",
                  localizedName: "orange zest",
                  image: "orange-zest.png",
                },
                {
                  id: 9019,
                  name: "applesauce",
                  localizedName: "applesauce",
                  image: "applesauce.png",
                },
                {
                  id: 9040,
                  name: "banana",
                  localizedName: "banana",
                  image: "bananas.jpg",
                },
                {
                  id: 20081,
                  name: "all purpose flour",
                  localizedName: "all purpose flour",
                  image: "flour.png",
                },
                {
                  id: 1123,
                  name: "egg",
                  localizedName: "egg",
                  image: "egg.png",
                },
              ],
              equipment: [
                {
                  id: 404783,
                  name: "bowl",
                  localizedName: "bowl",
                  image:
                    "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg",
                },
              ],
            },
            {
              number: 2,
              step: "Bake in a greased loaf pan or (3 mini pans for 30 minutes) for approximately one hour at 350F.Bread is done when a toothpick comes out clean.",
              ingredients: [
                {
                  id: 18064,
                  name: "bread",
                  localizedName: "bread",
                  image: "white-bread.jpg",
                },
              ],
              equipment: [
                {
                  id: 404644,
                  name: "toothpicks",
                  localizedName: "toothpicks",
                  image:
                    "https://spoonacular.com/cdn/equipment_100x100/toothpicks.jpg",
                },
                {
                  id: 404784,
                  name: "oven",
                  localizedName: "oven",
                  image:
                    "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                  temperature: { number: 350.0, unit: "Fahrenheit" },
                },
                {
                  id: 404715,
                  name: "loaf pan",
                  localizedName: "loaf pan",
                  image:
                    "https://spoonacular.com/cdn/equipment_100x100/loaf-pan.png",
                },
              ],
              length: { number: 90, unit: "minutes" },
            },
          ],
        },
      ],
      originalId: null,
      spoonacularScore: 37.3918342590332,
      spoonacularSourceUrl:
        "https://spoonacular.com/cranberry-orange-banana-bread-640389",
    },
  ],
};

const RecipeCard = ({ imageSrc, name, cookTime, servings, summary }) => {
  
  const sanitizedHTML = DOMPurify.sanitize(summary);

  
  return (
   <div className={styles.recipeCard}>
     <NavLink to={`:${name}`} className={styles.cardLink}>
    <img className={styles.recipeImage} src={imageSrc}/>
    <span style={{display: "flex", justifyContent: "space-between"}}>
    <h3>Servings: {servings}</h3>
    <h3>Cook Time: {cookTime} min</h3>
    </span>
    <h3>Summary:</h3>
    <p  className={styles.cardLink} dangerouslySetInnerHTML={{__html: sanitizedHTML}}></p>
  </NavLink>
   </div>
  )
  
};

export default RecipeCard;

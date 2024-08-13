import Recipes from "../features/Data/data";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "../components/root/Root";
import HomePage from "../pages/home/HomePage";
import QuickRecipesPage from "../pages/quickRecipes/QuickRecipesPage";
import SundayMealsPage from "../pages/sundayMeals/SundayMealsPage";
import DietMealsPage from "../pages/dietMeals/DietMealsPage";
import {getFilteredRecipes} from '../features/allRecipes/allRecipesSlice'
import RecipePage from "../pages/recipePage/RecipePage";

function App({ state, dispatch }) {
  
  const [selectedRecipe, setSelectedRecipe] = useState("");

  const visibleAllRecipes = getFilteredRecipes(state.allRecipes, state.searchTerm);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" element={<HomePage visibleRecipes={visibleAllRecipes} dispatch={dispatch}/>} />
        {/*Base Routes*/}
        <Route path="/RecipesPage" element={<HomePage visibleRecipes={visibleAllRecipes} dispatch={dispatch}/>} />
        <Route path="Quick and Easy" element={<QuickRecipesPage visibleRecipes={visibleAllRecipes} dispatch={dispatch}/>} />
        <Route path="Sunday Meals" element={<SundayMealsPage visibleRecipes={visibleAllRecipes} dispatch={dispatch}/>} />
        <Route path="Diet Meals" element={<DietMealsPage visibleRecipes={visibleAllRecipes} dispatch={dispatch}/>} />

        {/* Dynamic Routes */}
        <Route path="/RecipesPage/:type" element={<RecipePage visibleRecipes={visibleAllRecipes} dispatch={dispatch}/>} />
        <Route path="Quick and Easy/:type" element={<QuickRecipesPage visibleRecipes={visibleAllRecipes} dispatch={dispatch}/>} />
        <Route path="Sunday Meals/:type" element={<SundayMealsPage visibleRecipes={visibleAllRecipes} dispatch={dispatch}/>} />
        <Route path="Diet Meals/:type" element={<DietMealsPage visibleRecipes={visibleAllRecipes} dispatch={dispatch}/>} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

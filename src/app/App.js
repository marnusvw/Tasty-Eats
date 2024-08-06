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
import RecipesFilterPage from "../pages/recipes/RecipesFilterPage";
import QuickRecipesPage from "../pages/quickRecipes/QuickRecipesPage";
import SundayMealsPage from "../pages/sundayMeals/SundayMealsPage";
import DietMealsPage from "../pages/dietMeals/DietMealsPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/RecipesPage" element={<HomePage />} />
        <Route path="RecipesPage/:type" element={<RecipesFilterPage />} />
        <Route path="Quick and Easy" element={<QuickRecipesPage />}/>
        <Route path="Sunday Meals" element={<SundayMealsPage />}/>
        <Route path="Diet Meals" element={<DietMealsPage />}/>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

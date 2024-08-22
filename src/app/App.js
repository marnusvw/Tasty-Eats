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
import QuickRecipesPage from "../pages/quickRecipes/QuickRecipesPage";
import SundayMealsPage from "../pages/sundayMeals/SundayMealsPage";
import DietMealsPage from "../pages/dietMeals/DietMealsPage";
import { loadRecipes } from "../features/allRecipes/allRecipesSlice";
import RecipePage from "../pages/recipePage/RecipePage";
import AllRecipes from "../features/allRecipes/AllRecipes";
import { useDispatch, useSelector } from "react-redux";
import { selectMealType } from "../features/MealType/mealTypeSlice";

function App() {
  const dispatch = useDispatch();
  const type = useSelector(selectMealType)

  useEffect(() => {
    dispatch(loadRecipes(type));
  }, [dispatch, type]);

 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route
          path="/"
          element={<AllRecipes />}
        />
        {/*Base Routes*/}
        <Route path="/RecipesPage" element={<AllRecipes />} />
        <Route
          path="Quick and Easy"
          element={<QuickRecipesPage />}
        />
        <Route path="Sunday Meals" element={<SundayMealsPage />} />
        <Route path="Diet Meals" element={<DietMealsPage />} />

        {/* Dynamic Routes */}
        <Route
          path="/RecipesPage/:type"
          element={
            <AllRecipes />
          }
        />
        <Route path="/RecipesPage/:type/:recipeTitle" element={<RecipePage />}/>
        <Route path="Quick and Easy/:type" element={<QuickRecipesPage />} />
        <Route path="Sunday Meals/:type" element={<SundayMealsPage />} />
        <Route path="Diet Meals/:type" element={<DietMealsPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

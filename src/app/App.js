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
import { loadRecipes } from "../features/allRecipes/allRecipesSlice";
import RecipePage from "../pages/recipePage/RecipePage";
import AllRecipes from "../features/allRecipes/AllRecipes";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const [type, setType] = useState('breakfast')
  useEffect(() => {
    dispatch(loadRecipes(type));
  }, [dispatch]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" element={<AllRecipes />} />
        {/*Base Routes*/}
        <Route path="/RecipesPage" element={<AllRecipes />} />
        <Route
          path="Quick and Easy"
          element={<QuickRecipesPage dispatch={dispatch} />}
        />
        <Route
          path="Sunday Meals"
          element={<SundayMealsPage dispatch={dispatch} />}
        />
        <Route
          path="Diet Meals"
          element={<DietMealsPage dispatch={dispatch} />}
        />

        {/* Dynamic Routes */}
        <Route
          path="/RecipesPage/:type"
          element={<RecipePage dispatch={dispatch} />}
        />
        <Route
          path="Quick and Easy/:type"
          element={<QuickRecipesPage dispatch={dispatch} />}
        />
        <Route
          path="Sunday Meals/:type"
          element={<SundayMealsPage dispatch={dispatch} />}
        />
        <Route
          path="Diet Meals/:type"
          element={<DietMealsPage dispatch={dispatch} />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

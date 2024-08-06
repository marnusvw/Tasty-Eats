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
import RecipesPage from "../pages/recipesPage/RecipesPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/RecipesPage" element={<HomePage />} />
        <Route path="RecipesPage/:type" element={<RecipesPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

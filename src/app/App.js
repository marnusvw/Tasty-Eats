import styles from '../styles/App.module.css'
import Recipes from "../Data/data";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";

function App() {
  const [recipes, setRecipes] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchRandomRecipes = async () => {
    console.log(isLoading);
    const recipesFetched = await Recipes.getRecipes();
    console.log(recipesFetched);
    setRecipes(recipesFetched);
    console.log(isLoading);
  };
  useEffect(() => {    
    fetchRandomRecipes();
    }, []);


  
  return (
    <div className={styles.App}>
      <div className="NavBar">
        <NavBar />
      </div>
      <ul>
        {recipes.recipes?.map((recipe) => (
          <li>
            <img src={recipe.image} />
            {recipe.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

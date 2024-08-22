import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selectAllRecipes } from '../../features/allRecipes/allRecipesSlice';
import styles from './recipePage.module.css'
import DOMPurify from 'dompurify';
import Spinner from '../../components/spinner';

const RecipePage = () => {
  const {recipeTitle} = useParams();
  const allRecipes = useSelector(selectAllRecipes)
  const currentRecipe = allRecipes.find(recipe => recipe.title === recipeTitle.slice(3,))

  const sanitizedHTML = DOMPurify.sanitize(currentRecipe.summary);


  if (!currentRecipe) {
    return <Spinner />;
  }
  return (
    <div>
      <h1>{currentRecipe.title}</h1>
      <h2 dangerouslySetInnerHTML={{ __html: sanitizedHTML }}></h2>
      <ul>
        {currentRecipe.extendedIngredients.map(ingredient => (
           <li>{ingredient.original}</li>
        ))}
      </ul>
      <br/>
      <ul>
        {currentRecipe.analyzedInstructions[0].steps.map(instruction => (
          <li>{instruction.step}</li>
        ))}
      </ul>
    </div>
  )
}

export default RecipePage
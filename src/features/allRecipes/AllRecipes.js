import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getFilteredRecipes, selectAllRecipes } from './allRecipesSlice';
import Spinner from '../../components/spinner';
import RecipeCard from '../../components/Recipe/RecipeCard';
import styles from './allRecipes.module.css'

const AllRecipes = () => {
    const dispatch = useDispatch();
    const allRecipes = useSelector(selectAllRecipes);
    const {isLoading} = useSelector(state => state.allRecipes)

    if (isLoading) {
        return <Spinner />
    }
  return (
    <div className={styles.recipes_container}>
        {allRecipes.map(recipe => (
       <div>
        <RecipeCard recipe={recipe}/>
       </div>
    )
    )}
      </div>
  )
}

export default AllRecipes
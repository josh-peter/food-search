import React, {useState} from 'react'
import style from "./Recipes.module.css"
import { RecipeDetails } from './RecipeDetails';

const Recipes = ({recipe}) => {
    const [state, setstate] = useState(false);

    const {label, image, url, ingredients} = recipe.recipe;
  return (
    <div className={style.Recipe}>
        <h2>{label}</h2>
        <img src = {image} alt={image}/>
        <a href={url}  rel="noopener noreferrer" target="_blank">URL</a>
        <button onClick= {()=> setstate(!state)}>ingredients</button>
        {state && <RecipeDetails ingredients= {ingredients}/>}
    </div>
  )
}

export default Recipes;
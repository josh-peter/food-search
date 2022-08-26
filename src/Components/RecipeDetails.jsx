import React from "react";
import style from "../Components/RecipeDetails.module.css"
import {v4 as uuidv4} from "uuid"

export const RecipeDetails = ({ ingredients }) => {

  return ingredients.map(ingredient => {
    return <ul key = {uuidv4} className={style.ingredient_list}>
        <li className={style.ingredient_text}>{ingredient.text}</li>
        <li className={style.ingredient_weight}>{ingredient.weight}</li>
    </ul>;
  });
};

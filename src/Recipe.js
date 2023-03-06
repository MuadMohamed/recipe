import React from 'react';
import style from './recipe.module.css';


function Recipe(props) {
    const { title, calories, image, ingredients } = props;
  
    return (
      <div className={style.recipe}>
        <h1>{title}</h1>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.text}</li>
          ))}
        </ul>

        
        <p>{calories}</p>
        <img className={style.image} src={image} alt="" />
      </div>
    );
  }

export default Recipe;
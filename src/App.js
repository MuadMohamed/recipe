import React, {useEffect, useState} from "react";
import Recipe from './Recipe';
import './App.css';


const App = () => {
  const APP_ID = "a0d37b32";
  const APP_KEY = "f9f60e2c85102ae58dc2a9c95767891d";

  const [searchTerm, setSearchTerm] = useState('chicken');
  const [recipes, setRecipes] = useState([]);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setRecipes([]);
    fetchRecipes(searchTerm);
  };

  const fetchRecipes = async (query) => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  useEffect(() => {
    fetchRecipes(searchTerm);
  }, [searchTerm]);

  return (
    
    <div className="App">
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          className="search-bar"
          type="text"
          placeholder="Search for recipes"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.length === 0 ? (
        <p>Search For A Recipe </p>
      ) : (
        <ul className="recipes">
          {recipes.map((recipe) => (
            <li key={recipe.recipe.label}>
              <h2>{recipe.recipe.label}</h2>
              <img src={recipe.recipe.image} alt={recipe.recipe.label} />
              <p>{recipe.recipe.calories.toFixed(0)} calories</p>
              <ul>
                {recipe.recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient.text}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};



export default App;

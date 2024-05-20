import React from "react";
import { Link } from "react-router-dom";

export default function Card({ recipe }) {
  return (
    <Link to={`/RecipePage/` + recipe.uri.split("_").pop()}>
      {/* split cree un nouveau tableau et cree des sous chaine de caractere separer par un _ 
      pop recupere le dernier elemet du tableau */}
      <div className="recipe-card">
        <img src={recipe.image} />
        <h3>{recipe.label}</h3>
        <p>{recipe.cuisineType}</p>
      </div>
    </Link>
  );
}

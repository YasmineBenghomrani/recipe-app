import React from "react";
import { useEffect, useState } from "react";
import Card from "../components/card";
import axios from "axios";
import { CircularProgress } from "@mui/material";

export default function Meals() {
  const [loading, setLoading] = useState(true);
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const app_key = "2876a60d8ab8224308b53063dc06ef14";
    const app_id = "6093d670";
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&app_id=${app_id}&app_key=${app_key}&q=meals`
      )
      .then((res) => {
        console.log(res.data);
        setRecipe(res.data.hits);
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <section className="recipes">
        <div className="header">
          <div className="line"></div>
          <h2>Our recipes </h2>
          <div className="line"></div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <div className="content">
          {loading ? (
            <CircularProgress />
          ) : (
            <>
              {recipe.map((e) => {
                return (
                  <Card
                    key={e.uri}
                    recipe={e.recipe}
                    // recipe={{
                    //   title: e.recipe.label,
                    //   description: e.recipe.cuisineType,
                    //   image: e.recipe.image,
                    // }}
                  />
                );
              })}
            </>
          )}
        </div>
      </section>
    </div>
  );
}

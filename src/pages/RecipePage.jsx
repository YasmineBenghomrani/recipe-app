import React from "react";
import { CircularProgress, Rating } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RecipePage() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [displayImage, setDisplayImage] = useState("");
  useEffect(() => {
    const app_key = "2876a60d8ab8224308b53063dc06ef14";
    const app_id = "6093d670";
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${app_id}&app_key=${app_key}`
      )
      .then((res) => {
        console.log(res.data.recipe);
        setProduct(res.data.recipe);
        setDisplayImage(res.data.thumbnail);
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <section className="p">
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <div className="product-content">
            <div className="left">
              <div className="images">
                <img src={product.image} alt="" />
              </div>
              <div className="image">
                <img src={product.image} alt="" />
              </div>
            </div>
            <div className="line"></div>
            <div className="right">
              <h2>{product.label}</h2>
              <div className="description">
                <h4>ingredient</h4>
                <p className="title">
                  {product.ingredientLines.map((e) => {
                    return <p>{e}</p>;
                  })}
                </p>
              </div>
              <div className="mealType">
                <h4>mealType</h4>
                <p className="price">{product.mealType}</p>
              </div>
              <div className="cuisineType">
                <h4>cuisineType</h4>
                <p className="rating">{product.cuisineType}</p>
              </div>
              <div className="rating">
                <h4>rating</h4>
                <Rating name="read-only" value={product.rating} readOnly />
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

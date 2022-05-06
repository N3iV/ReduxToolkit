import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchCocktailDetail } from "../redux/features/cocktailSlice";

const SingleCocktail = () => {
  const { cocktail, loading } = useSelector((state) => state.app);
  const [modifiedCocktail, setModifiedCocktail] = useState([]);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(cocktail);
  useEffect(() => {
    dispatch(fetchCocktailDetail({ id }));
  }, [dispatch, id]);
  useEffect(() => {
    if (cocktail.length > 0) {
      const {
        strDrink: name,
        strDrinkThumb: img,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strInstructions: instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = cocktail[0];
      const ingredient = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];
      const newCocktail = {
        name,
        img,
        info,
        category,
        glass,
        instructions,
        ingredient,
      };
      setModifiedCocktail(newCocktail);
    } else {
      setModifiedCocktail(null);
    }
  }, [cocktail]);
  if (!modifiedCocktail) {
    return <h2 className="section-tile">No cocktail to display</h2>;
  } else {
    const { name, img, info, category, glass, instructions, ingredient } =
      modifiedCocktail;
    return (
      <>
        {loading ? (
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading</span>
          </div>
        ) : (
          <section className="section cocktail-section">
            <Link to="/">
              <button className="btn btn-success">Back Home</button>
            </Link>
            <h2 className="section-title">{name}</h2>
            <div className="drink">
              <img src={img} alt={name} />
              <div className="drink-info">
                <p>
                  <span className="drink-data">Name:</span> {name}
                </p>
                <p>
                  <span className="drink-data">Category:</span> {category}
                </p>
                <p>
                  <span className="drink-data">Info:</span> {info}
                </p>
                <p>
                  <span className="drink-data">Glass:</span> {glass}
                </p>
                <p>
                  <span className="drink-data">Instructions:</span>{" "}
                  {instructions}
                </p>
                <p>
                  <span className="drink-data">Ingredient:</span>
                  {ingredient?.map((item, idx) =>
                    item ? <span key={idx}>{item}</span> : null
                  )}
                </p>
              </div>
            </div>
          </section>
        )}
      </>
    );
  }
};

export default SingleCocktail;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCocktail } from "../redux/features/cocktailSlice";
const CocktailList = () => {
  const { cocktails, loading } = useSelector((state) => ({ ...state.app }));
  const [modifiedCocktail, setModifiedCocktail] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCocktail());
  }, [dispatch]);
  useEffect(() => {
    console.log(cocktails);
    if (cocktails) {
      const newCocktails = cocktails.map((cocktail) => {
        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
          cocktail;
        return {
          id: idDrink,
          name: strDrink,
          img: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
      setModifiedCocktail(newCocktails);
    } else {
      setModifiedCocktail([]);
    }
  }, [cocktails]);
  if (loading) {
    return (
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading ...</span>
      </div>
    );
  }
  if (!cocktails) {
    return <h2>No Cocktails matched your search</h2>;
  }
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {modifiedCocktail.map(({ id, name, img, info, glass }) => (
          <div className="col" key={id}>
            <div className="card h-2">
              <img src={img} className="card-img-top" alt={name} />
              <div className="card-body" style={{ textAlign: "left" }}>
                <h5 className="card-title">{name}</h5>
                <h3 className="card-title">{glass}</h3>
                <p className="card-text">{info}</p>
                <Link to={`/cocktail/${id}`}>
                  <div className="btn btn-info">Details</div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CocktailList;

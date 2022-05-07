import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ strDrink, strGlass, strAlcoholic, idDrink, strDrinkThumb }) => {
   return (
      <article className="cocktail">
         <div className="img-container">
            <img src={strDrinkThumb} alt={strDrink} />
         </div>
         <div className="cocktail-footer">
            <h3>{strDrink}</h3>
            <h4>{strGlass}</h4>
            <p>{strAlcoholic}</p>
            <Link className="btn btn-primary btn-details" to={`/cocktail/${idDrink}`} >
               details
            </Link>
         </div>
      </article>
   );
};

export default Cocktail;

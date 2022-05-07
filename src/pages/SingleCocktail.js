import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
   const { cocktailId } = useParams();
   const [cocktail, setCocktail] = useState(null);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      window.scrollTo(0,0);
      fetch(url + cocktailId)
         .then((response) => response.json())
         .then((data) => setCocktail(data.drinks && data.drinks[0]))
         .catch(console.error)
         .finally(() => setIsLoading(false));
   }, []);

   if (isLoading) return <Loading />;
   if (!cocktail) return <h2 className="section-title">no cocktail to display</h2>;

   return (
      <section className="section cocktail-section">
         <Link className="btn btn-primary" to="/">
            back home
         </Link>
         <h2 className="section-title">{cocktail.strDrink}</h2>
         <div className="drink">
            <img src={cocktail.strDrinkThumb} alt="GG" />
            <div className="drink-info">
               <p>
                  <span className="drink-data">name :</span> {cocktail.strDrink}
               </p>
               <p>
                  <span className="drink-data">category :</span> {cocktail.strCategory}
               </p>
               <p>
                  <span className="drink-data">info :</span> {cocktail.strAlcoholic}
               </p>
               <p>
                  <span className="drink-data">glass :</span> {cocktail.strGlass}
               </p>
               <p>
                  <span className="drink-data">instructons :</span> {cocktail.strInstructions}
               </p>
               <p>
                  <span className="drink-data">ingredients :</span>
                  {Object.keys(cocktail).reduce((ingredients, key, index) => {
                     if (key.slice(0, 13) === "strIngredient") {
                        ingredients.push(<span key={index}>{cocktail[key]}</span>);
                     }
                     return ingredients;
                  }, [])}
               </p>
            </div>
         </div>
      </section>
   );
};

export default SingleCocktail;

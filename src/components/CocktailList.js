import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
   const { cocktails, isLoading } = useGlobalContext();

   if (isLoading) return <Loading />;
   if (!cocktails) return <h2 className="section-title">no cocktails matched your search criteria</h2>;

   return (
      <section className="section">
         <h2 className="section-title">cocktails</h2>
         <div className="cocktails-center">
            {cocktails.map((cocktail) => {
               const { strDrink, strGlass, strAlcoholic, idDrink, strDrinkThumb } = cocktail;
               return (
                  <Cocktail
                     key={cocktail.idDrink}
                     {...{ strDrink, strGlass, strAlcoholic, idDrink, strDrinkThumb }}
                  />
               );
            })}
         </div>
      </section>
   );
};

export default React.memo(CocktailList);

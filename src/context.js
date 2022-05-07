import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
   const [cocktails, setCocktails] = useState([]);
   const [searchTerm, setSearchTerm] = useState('s')
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      setIsLoading(true);
      fetch(url + searchTerm)
         .then((response) => response.json())
         .then((data) => setCocktails(data.drinks))
         .catch(console.error)
         .finally(() => setIsLoading(false));
   }, [searchTerm]);



   return <AppContext.Provider value={{ cocktails, isLoading, setSearchTerm }}>{children}</AppContext.Provider>;
};
// make sure use
export const useGlobalContext = () => {
   return useContext(AppContext);
};

export { AppContext, AppProvider };

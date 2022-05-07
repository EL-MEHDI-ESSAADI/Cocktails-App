import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
   const { setSearchTerm } = useGlobalContext();
   const [name, setName] = useState("");
   const inputRef = useRef();

   function handelChange(e) {
      const inputValue = e.target.value;
      setName(inputValue);
      setSearchTerm(inputValue);
   }

   useEffect(() => {
      inputRef.current.focus();
   }, []);

   return (
      <section className="section search">
         <form className="search-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-control">
               <label htmlFor="name">search your favorite cocktail</label>
               <input ref={inputRef} type="text" name="name" id="name" value={name} onChange={handelChange} />
            </div>
         </form>
      </section>
   );
};

export default SearchForm;

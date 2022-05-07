import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";

// import css
import "./index.css";
import SharedLayout from "./pages/SharedLayout";
function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<SharedLayout />}>
               <Route index element={<Home />} />
               <Route path="about" element={<About />} />
               <Route path="cocktail/:cocktailId" element={<SingleCocktail />}/>
               <Route path="*" element={<Error />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;

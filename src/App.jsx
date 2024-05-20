import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import SearchAppBar from "./components/appBar";

import Home from "./pages/Home";
import Drinks from "./pages/Drinks";
import Meals from "./pages/Meals";
import RecipePage from "./pages/RecipePage";
import SearchRecipe from "./pages/SearchRecipe";

function App() {
  return (
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/Meals" element={<Meals />} />
          <Route path="/RecipePage/:id" element={<RecipePage />} />
          <Route path="/SearchRecipe/:query" element={<SearchRecipe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

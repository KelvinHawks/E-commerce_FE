import { useState } from "react";
import "./App.css";
import Products from "./products/Products";
import Recommended from "./recommended/pages/Recommended";
import MainNavigation from "./shared/navigation/MainNavigation";
import Sidebar from "./sidebar/Sidebar";

function App() {
  const [query, setQuery] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const recommendedHandler = (e) => {
    setSelectedCategory(e.target.value);
  };
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  console.log(query);
  console.log(selectedCategory);
  return (
    <div className="App">
      <main>
        <MainNavigation handleInputChange={handleInputChange} />
        <Recommended recommendedHandler={recommendedHandler} />
      </main>
      <div className="flex" style={{ display: "flex" }}>
        <Sidebar />
        <Products />
      </div>
    </div>
  );
}

export default App;

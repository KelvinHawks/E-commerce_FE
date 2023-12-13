import { useState } from "react";
import "../App.css";
import Products from "../products/Products";
import Recommended from "../recommended/pages/Recommended";
import MainNavigation from "../shared/navigation/MainNavigation";
import Sidebar from "../sidebar/Sidebar";
import Card from "../shared/UIelements/Card";
import { Data } from "../data/Data";

function Home() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState();

  const recommendedHandler = (e) => {
    setSelectedCategory(e.target.value);
    console.log(e.target.value);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = Data.filter(
    (product) => product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  function filteredData(Data) {
    let filteredProducts = Data;

    if (query) {
      filteredProducts = filteredItems;
    }
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        ({ category }) =>
          category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    return filteredProducts.map((item) => (
      <Card
        key={Math.random()}
        image={item.image}
        description={item.description}
        small={item.small}
        price={item.price}
        rating={item.rating}
      />
    ));
  }
  const result = filteredData(Data, selectedCategory, query);
  //console.log(query);
  //console.log(selectedCategory);
  return (
    <div className="App">
      <main>
        <MainNavigation handleInputChange={handleInputChange} />
        <Recommended recommendedHandler={recommendedHandler} />
      </main>
      <div className="flex" style={{ display: "flex" }}>
        <Sidebar recommendedHandler={recommendedHandler} />
        <Products result={result} />
      </div>
    </div>
  );
}

export default Home;

//mport { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./properties/components/Category";
import ItemDisplay from "./properties/components/ItemDisplay";
import SharedLayout from "./properties/components/SharedLayout";
import UploadHouse from "./properties/components/UploadHouse";
import jsonData from "./properties/sampleData/houses.json";

import "./App.css";
import SingleItem from "./products/components/SingleItem";
import Cart from "./cart/pages/Cart";
import MainNavigation from "./shared/navigation/MainNavigation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<MainNavigation />}>
          <Route path="/home/item/:Pid" element={<SingleItem />} />
          <Route path="/home/cart" element={<Cart />} />
          <Route path="/home/auth" element={<Auth />} />
        </Route>

        <Route path="/property" element={<SharedLayout />}>
          <Route path="/property/:category" element={<Category />} />
          <Route
            path="/property/i/:ItemId"
            element={<ItemDisplay data={jsonData} />}
          />
          <Route path="/property/upload" element={<UploadHouse />} />
        </Route>
        <Route path="/inventory" element={<InventorySharedLayout />}>
          <Route path="/inventory/dashboard" element={<Dashboard />} />
          <Route path="/inventory/products" element={<InventoryList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

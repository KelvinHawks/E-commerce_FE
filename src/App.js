import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./properties/components/Category";
import ItemDisplay from "./properties/components/ItemDisplay";
import SharedLayout from "./properties/components/SharedLayout";
import UploadHouse from "./properties/components/UploadHouse";
import jsonData from './properties/sampleData/houses.json';
import Dashboard from "./inventory_manager/components/Dashboard";
import InventorySharedLayout from "./inventory_manager/components/InventorySharedLayout";
import InventoryList from "./inventory_manager/components/InventoryList";
import './App.css';


function App() {
  console.log(jsonData);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<SharedLayout />}>
          <Route path="/property/:category" element={<Category />} />
          <Route
            path="/property/i/:ItemId"
            element={<ItemDisplay data={jsonData} />}
          />
          <Route path="/property/upload" element={<UploadHouse />} />
        </Route>
        <Route path="/inventory"  element = { <InventorySharedLayout /> } >
          <Route path="/inventory/dashboard" element = { <Dashboard /> } />
          <Route path="/inventory/products"  element = { < InventoryList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

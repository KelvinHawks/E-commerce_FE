//mport { useState } from "react";
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
import PropertyManager from "./pages/PropertyPage";
import Favourite from './pages/Favourite'
import Profile from "./pages/Profile";
import ConversationList from "./properties/components/ConversationList";
import MessageSharedComponent from "./properties/components/MessageSharedComponent";
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/messages" element={<MessageSharedComponent />}>
          <Route path="/messages/chats" element={<ConversationList />} />
        </Route>
        <Route path="/profiles" element={<Profile />} />
        <Route path="/property/" element={<SharedLayout />}>
          <Route path="/property/favourites" element={<Favourite />} />
          <Route path="/property/p/:category" element={<PropertyManager />} />
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

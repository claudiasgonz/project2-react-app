import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import PlantList from "./pages/PlantList"
import PlantDetails from "./pages/PlantDetails";
import NotFound from "./pages/NotFound";
import EditPlantPage from "./pages/EditPlantForm";
import AddPlantPage from "./pages/AddPlantPage";
import AddCommentPage from "./pages/AddCommentPage";
import FavoritePlants from "./pages/FavoritePlants";

function App() {
  return (
    <div className="app">
      <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/plants" element={<PlantList />} />
          <Route path="/plants/:plantId" element={<PlantDetails />} />
          <Route path="/plants/add" element={<AddPlantPage />} />
          <Route path="/plants/edit/:plantId" element={<EditPlantPage />} />
          <Route path="/plants/:plantId/addcomment" element={<AddCommentPage />} />
          <Route path="/favoriteplants" element={<FavoritePlants />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      <Footer />
    </div>
  );
}

export default App

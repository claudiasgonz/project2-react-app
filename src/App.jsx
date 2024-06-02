import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import PlantList from "./pages/PlantList"
import PlantDetails from "./pages/PlantDetails";
import EditPlantForm from "./components/EditPlantForm";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="app">
      <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/plants" element={<PlantList />} />
          <Route path="/plants/:plantId" element={<PlantDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App

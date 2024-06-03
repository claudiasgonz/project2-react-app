import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";


function PlantDetails() {
  // DEFINE STATE VARIABLE TO MANAGE PLANT DETAILS
  const [plant, setPlant] = useState();

  // EXTRACT PLANTID FROM URL USING USEPARAMS HOOK
  const { plantId } = useParams (); 

  // USE NAVIGATE HOOK TO NAVIGATE PROGRAMATICALLY
  const navigate = useNavigate();
  
  // GET A PLANT , FETCH SINGLE PLANT DETAILS WHEN PLANTID CHANGES, GET REQUEST FETCHES PLANT DETAILS
  useEffect(() =>{
    const getSinglePlant = async () => {
      try {
        const response = await axios.get(`https://project2-react-app-server.adaptable.app/plants/${plantId}`);
      
        setPlant(response.data); // UPDATE STATE WITH FETCHED DATA
      } catch (error) {
        console.log(error)
      }
    };
      getSinglePlant(); 
  }, [plantId]);

// DELETE A PLANT
const handleDelete = async () => {
  try {
    const confirmDelete = confirm ("Delete this plant?")

    if (confirmDelete) {
      // MAKE DELETE REQUEST
      const response = await axios.delete(`https://project2-react-app-server.adaptable.app/plants/${plantId}`);
      console.log(response);

      // NAVIGATE TO PLANTS PAGE AFTER DELETION
      navigate("/plants");
    }
  } catch (error) {
    console.log(error)
  }
};

  return (
    <div className="plant-details-card">
      <h1>Plant Details</h1>

      {/* RENDER PLANT DETAILS IF PLANT DATA IS AVAILABLE */}
      {plant && (
        <>
          <img className="plant-details-card-img" src={plant.imageUrl}></img>
          <h1>{plant.plantName}</h1>
          <h2>{plant.scientificName}</h2>
          <p>{plant.description}</p>
          <p>
            <li>☀️ Sun Requirements: {plant.sunlightRequirements}</li>
            <li>🌡️ Temperature / Climate: {plant.temperatureClimate}</li>
            <li>Watering Needs: {plant.wateringNeeds}</li>
            <li>Soil Type: {plant.soilType}</li>
            <li>Bloom Time: {plant.bloomTime}</li>
            <li>Plant Height: {plant.plantHeight}</li>
            <li>Plant Spread:{plant.plantSpread}</li>
            <li>Growth Rate: {plant.growthRate}</li>
            <li>USDA Hardiness Zone: {plant.hardinessZone}</li>
            <li>Maintenance Level: {plant.maintenanceLevel}</li>
            <li>Companion Plants: {plant.companionPlants}</li>
            <li>Pests / Diseases: {plant.pestsDiseases}</li>
            <li>Edible Parts: {plant.edibleParts}</li>
            <li>Propagation Methods: {plant.propagationMethods}</li>
            <li>Fertilizer Needs: {plant.fertilizerNeeds}</li>
            <li>Special Features: {plant.specialFeatures}</li>
          </p>

          {/* BACK BUTTON, NAVIGATES TO HOME */}
           <Link to="/">
            <button>Back</button>
            </Link>

          {/* EDIT BUTTON, NAVIGATES TO EDIT PLANT PAGE */}
          <Link to={`/plants/edit/${plantId}`}>
            <button>Edit</button>
          </Link>

          {/* DELETE BUTTON */}
          <button onClick={handleDelete}>
            Delete
          </button>
        </>
      )}
    </div>
  )
}

export default PlantDetails
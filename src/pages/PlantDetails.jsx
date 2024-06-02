import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";


function PlantDetails() {
  const [plant, setPlant] = useState();
  const { plantId } = useParams (); //useParams hook allows us to get plantId from the URL
  const navigate = useNavigate();
  
// GET SINGLE PLANT
  useEffect(() =>{
    const getSinglePlant = async () => {
      try {
        const response = await axios.get(`https://project2-react-app-server.adaptable.app/plants/${plantId}`);
      
        setPlant(response.data); //response data from API updates the state
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
      const response = await axios.delete(`https://project2-react-app-server.adaptable.app/plants/${plantId}`);
      console.log(response);
      navigate("/plants");
    }
  } catch (error) {
    console.log(error)
  }
};

  return (
    <div>
      <h1>PlantDetails</h1>
      {plant && (
        <>
          <img src={plant.imageUrl}></img>
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

          {/* BACK BUTTON */}
           <Link to="/">
            <button>Back</button>
            </Link>

          {/* EDIT BUTTON */}
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
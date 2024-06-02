import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddPlantForm(props) {
 const [newPlant, setNewPlant] = useState({
  plantName: "",
  scientificName: "",
  imageUrl: "",
  description: "",
  sunlightRequirements: "",
  temperatureClimate: "",
  wateringNeeds: "",
  soilType: "",
  bloomTime: "",
  plantHeight: "",
  plantHeight: "",
  plantHeight: "",
  plantSpread: "",
  growthRate: "",
  hardinessZone: "",
  maintenanceLevel: "",
  companionPlants: "",
  pestsDiseases: "",
  edibleParts: "",
  propagationMethods: "",
  fertilizerNeeds: "",
  specialFeatures: "",
})

const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(`https://project2-react-app-server.adaptable.app/plants`,{
      plantName,
      scientificName,
      imageUrl,
      description,
      sunlightRequirements,
      temperatureClimate,
      wateringNeeds,
      soilType,
      bloomTime,
      plantHeight,
      plantHeight,
      plantHeight,
      plantSpread,
      growthRate,
      hardinessZone,
      maintenanceLevel,
      companionPlants,
      pestsDiseases,
      edibleParts,
      propagationMethods,
      fertilizerNeeds,
      specialFeatures,
    });
    console.log(response);
    navigate("/plants");
  } catch (error) {
    console.log(error)
  }
};

return (
    <div className="add-plant-form">
      <h1> Add Plant Form!</h1>

      <form>
        <label></label>
      </form>
    </div>
  )
}

export default AddPlantForm

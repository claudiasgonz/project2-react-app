import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddPlantPage(props) {
    // DEFINE STATE VARIABLES TO MANAGE FORM INPUT VALUES
    const [plantName, setPlantName] = useState("");
    const [scientificName, setScientificName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");
    const [sunlightRequirements, setSunlightRequirements] = useState("");
    const [temperatureClimate, setTemperatureClimate] = useState("");
    const [wateringNeeds, setWateringNeeds] = useState("");
    const [soilType, setSoilType] = useState("");
    const [bloomTime, setBloomTime] = useState("");
    const [plantHeight, setPlantHeight] = useState("");
    const [plantSpread, setPlantSpread] = useState("");
    const [growthRate, setGrowthRate] = useState("");
    const [hardinessZone, setHardinessZone] = useState("");
    const [maintenanceLevel, setMaintenanceLevel] = useState("");
    const [companionPlants, setCompanionPlants] = useState("");
    const [pestsDiseases, setPestsDiseases] = useState("");
    const [edibleParts, setEdibleParts] = useState("");
    const [propagationMethods, setPropagationMethods] = useState("");
    const [fertilizerNeeds, setFertilizerNeeds] = useState("");
    const [specialFeatures, setSpecialFeatures] = useState("");

    const navigate = useNavigate();

    // HANDLE FORM SUBMISSION
    const handleSubmit = async (e) => {
        e.preventDefault();

    // SEND POST REQUEST TO SERVER TO ADD A NEW PLANT
        try {
            const response = await axios.post("https://project2-react-app-server.adaptable.app/plants", 
            {
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
            // LOG THE SERVER RESPONSE TO CONSOLE
            console.log(response);

            // NAVIGATE TO "/PLANTS" PAGE AFTER SUCCESSFUL SUBMISSION
            navigate("/plants");
        } catch (error) {
            console.log(error)
        }
    };

// RENDER THE FORM
  return (
    <div className="add-plant-page">
        <h1> Add plant page!!!</h1>

        <form onSubmit={handleSubmit}>
            <label>Plant Name:</label>
            <input 
                type="text"
                name="plantName"
                value={plantName}
                onChange={(e) => setPlantName(e.target.value)}
            />

            <label>Scientific Name:</label>
            <input 
                type="text"
                name="scientificName"
                value={scientificName}
                onChange={(e) => setScientificName(e.target.value)}
            />

            <label>Image URL:</label>
            <input 
                type="text"
                name="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
            />

            <label>Description:</label>
            <textarea 
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <label>Sunlight Requirements:</label>
            <input 
                type="text"
                name="sunlightRequirements"
                value={sunlightRequirements}
                onChange={(e) => setSunlightRequirements(e.target.value)}
            />

            <label>Temperature Climate:</label>
            <input 
                type="text"
                name="temperatureClimate"
                value={temperatureClimate}
                onChange={(e) => setTemperatureClimate(e.target.value)}
            />

            <label>Watering Needs:</label>
            <input 
                type="text"
                name="wateringNeeds"
                value={wateringNeeds}
                onChange={(e) => setWateringNeeds(e.target.value)}
            />

        <label>Soil Type:</label>
        <input 
          type="text"
          name="soilType"
          value={soilType}
          onChange={(e) => setSoilType(e.target.value)}
        />

        <label>Bloom Time:</label>
        <input 
          type="text"
          name="bloomTime"
          value={bloomTime}
          onChange={(e) => setBloomTime(e.target.value)}
        />

        <label>Plant Height:</label>
        <input 
          type="text"
          name="plantHeight"
          value={plantHeight}
          onChange={(e) => setPlantHeight(e.target.value)}
        />

        <label>Plant Spread:</label>
        <input 
          type="text"
          name="plantSpread"
          value={plantSpread}
          onChange={(e) => setPlantSpread(e.target.value)}
        />

        <label>Growth Rate:</label>
        <input 
          type="text"
          name="growthRate"
          value={growthRate}
          onChange={(e) => setGrowthRate(e.target.value)}
        />

        <label>Hardiness Zone:</label>
        <input 
          type="text"
          name="hardinessZone"
          value={hardinessZone}
          onChange={(e) => setHardinessZone(e.target.value)}
        />

        <label>Maintenance Level:</label>
        <input 
          type="text"
          name="maintenanceLevel"
          value={maintenanceLevel}
          onChange={(e) => setMaintenanceLevel(e.target.value)}
        />

        <label>Companion Plants:</label>
        <input 
          type="text"
          name="companionPlants"
          value={companionPlants}
          onChange={(e) => setCompanionPlants(e.target.value)}
        />

        <label>Pests and Diseases:</label>
        <input 
          type="text"
          name="pestsDiseases"
          value={pestsDiseases}
          onChange={(e) => setPestsDiseases(e.target.value)}
        />

        <label>Edible Parts:</label>
        <input 
          type="text"
          name="edibleParts"
          value={edibleParts}
          onChange={(e) => setEdibleParts(e.target.value)}
        />

        <label>Propagation Methods:</label>
        <input 
          type="text"
          name="propagationMethods"
          value={propagationMethods}
          onChange={(e) => setPropagationMethods(e.target.value)}
        />

        <label>Fertilizer Needs:</label>
        <input 
          type="text"
          name="fertilizerNeeds"
          value={fertilizerNeeds}
          onChange={(e) => setFertilizerNeeds(e.target.value)}
        />

        <label>Special Features:</label>
        <input 
          type="text"
          name="specialFeatures"
          value={specialFeatures}
          onChange={(e) => setSpecialFeatures(e.target.value)}
        />
        {/* SUBMIT BUTTON */}
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default AddPlantPage
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AddCommentForm from "../components/AddCommentForm";
import CommentCard from "../components/CommentCard";


function PlantDetails(props) {
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
        const response = await axios.get(`https://project2-react-app-server.adaptable.app/plants/${plantId}?_embed=comments`);
        console.log(response.data)
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
      const response = await axios.delete(`https://project2-react-app-server.adaptable.app/plants/${plantId}?_embed=comments`);
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

      {/* RENDER PLANT DETAILS IF PLANT DATA IS AVAILABLE */}
      {plant && (
        <>
          <img className="plant-details-card-img" src={plant.imageUrl}></img>
          
          <div className="plant-details-card-header-text">
            <h1>{plant.plantName}</h1>
            <h2>{plant.scientificName}</h2>
            <p>{plant.description}</p>
          </div>

          <p className="plant-details-list">
            <li>
              <img src=""></img>
              <strong>Sun Requirements:</strong> 
              {plant.sunlightRequirements}
            </li>

            <li>
              <strong>🌡️ Temperature / Climate:</strong> 
              {plant.temperatureClimate}
            </li>

            <li>
              <strong>Watering Needs:</strong> 
              {plant.wateringNeeds}
            </li>

            <li>
              <strong>Soil Type:</strong> 
              {plant.soilType}
            </li>

            <li>
              <strong>Bloom Time:</strong> 
              {plant.bloomTime}
            </li>

            <li>
              <strong>Plant Height:</strong> 
              {plant.plantHeight}
            </li>

            <li>
              <strong>Plant Spread:</strong> 
              {plant.plantSpread}
            </li>

            <li>
              <strong>Growth Rate:</strong> 
              {plant.growthRate}
            </li>

            <li>
              <strong>USDA Hardiness Zone:</strong> 
              {plant.hardinessZone}
            </li>

            <li>
              <strong>Maintenance Level:</strong> 
              {plant.maintenanceLevel}
            </li>

            <li>
              <strong>Companion Plants:</strong> 
              {plant.companionPlants}
            </li>

            <li>
              <strong>Pests / Diseases:</strong> 
              {plant.pestsDiseases}
            </li>

            <li>
              <strong>Edible Parts:</strong> 
              {plant.edibleParts}
            </li>

            <li>
              <strong>Propagation Methods:</strong> 
              {plant.propagationMethods}
            </li>

            <li>
              <strong>Fertilizer Needs:</strong> 
              {plant.fertilizerNeeds}
            </li>

            <li>
              <strong>Special Features:</strong> 
              {plant.specialFeatures}
            </li>
          </p>

          <div className="plant-details-card-buttons">
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
          </div>
          
          {/* <AddCommentForm refreshPlant={getSinglePlant} plantId={plantId} /> */}

            {plant && plant.comments.length &&
              plant.comments.map((comment) => (
                <CommentCard comment={comment}/>
              ))
            }

          {/* COMMENTS SECTION */}
          <AddCommentForm plantId={plant.id}/>
        </>
      )}
    </div>
  )
}

export default PlantDetails
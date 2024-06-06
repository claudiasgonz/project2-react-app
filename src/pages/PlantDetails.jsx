import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AddCommentForm from "../components/AddCommentForm";
import CommentCard from "../components/CommentCard";

function PlantDetails(props) {
  // DEFINE STATE VARIABLE TO MANAGE PLANT DETAILS
  const [plant, setPlant] = useState();

  // EXTRACT PLANTID FROM URL USING USEPARAMS HOOK
  const { plantId } = useParams();

  const getSinglePlant = async () => {
    try {
      const response = await axios.get(
        `https://project2-react-app-server.adaptable.app/plants/${plantId}?_embed=comments`
      );
      console.log(response.data);
      setPlant(response.data); // UPDATE STATE WITH FETCHED DATA
    } catch (error) {
      console.log(error);
    }
  };

  // GET A PLANT , FETCH SINGLE PLANT DETAILS WHEN PLANTID CHANGES, GET REQUEST FETCHES PLANT DETAILS
  useEffect(() => {
    getSinglePlant();
  }, [plantId]);

  // DELETE A PLANT
  const handleDelete = async () => {
    try {
      const confirmDelete = confirm("Delete this plant?");

      if (confirmDelete) {
        // MAKE DELETE REQUEST
        const response = await axios.delete(
          `https://project2-react-app-server.adaptable.app/plants/${plantId}?_embed=comments`
        );
        console.log(response);

        // NAVIGATE TO PLANTS PAGE AFTER DELETION
        navigate("/plants");
      }
    } catch (error) {
      console.log(error);
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
              <img src="https://res.cloudinary.com/daitiz1zj/image/upload/v1717634251/sunlught_Req-Sun_72x_w9i94a.png"></img>
              <strong> Sun Requirements: </strong>
              {plant.sunlightRequirements}
            </li>

            <li>
              <img src="https://res.cloudinary.com/daitiz1zj/image/upload/v1717634251/temperatureClimate_72x_rvwkz9.png"></img>
              <strong> Temperature / Climate: </strong>
              {plant.temperatureClimate}
            </li>

            <li>
              <img src="https://res.cloudinary.com/daitiz1zj/image/upload/v1717634252/wateringNeeds_72x_w3nfgn.png"></img>
              <strong> Watering Needs: </strong>
              {plant.wateringNeeds}
            </li>

            <li>
              <img src="https://res.cloudinary.com/daitiz1zj/image/upload/v1717634247/fertilizerNeeds_72x_etse13.png"></img>
              <strong> Soil Type: </strong>
              {plant.soilType}
            </li>

            <li>
            <img src="https://res.cloudinary.com/daitiz1zj/image/upload/v1717634247/bloomTime_72x_za7dm4.png"></img>
              <strong> Bloom Time: </strong>
              {plant.bloomTime}
            </li>

            <li>
              <img src="https://res.cloudinary.com/daitiz1zj/image/upload/v1717634249/plantHeight_72x_bnxkyi.png"></img>
              <strong> Plant Height: </strong>
              {plant.plantHeight}
            </li>

            <li>
            <img src="https://res.cloudinary.com/daitiz1zj/image/upload/v1717634249/plantSpreads_72x_piupwf.png"></img>
              <strong> Plant Spread: </strong>
              {plant.plantSpread}
            </li>

            <li>
              <img src="https://res.cloudinary.com/daitiz1zj/image/upload/v1717634247/growthRate_72x_nyku3z.png"></img>
              <strong> Growth Rate: </strong>
              {plant.growthRate}
            </li>

            <li>
              <img src="https://res.cloudinary.com/daitiz1zj/image/upload/v1717634248/hardinessZone_72x_lqef1d.png"></img>
              <strong> USDA Hardiness Zone: </strong>
              {plant.hardinessZone}
            </li>

            <li>
              <img src="https://res.cloudinary.com/daitiz1zj/image/upload/v1717634248/maintenanceLevel_72x_yfs1jz.png"></img>
              <strong> Maintenance Level: </strong>
              {plant.maintenanceLevel}
            </li>

            <li>
              <img src="https://res.cloudinary.com/daitiz1zj/image/upload/v1717634247/companionPlants_72x_b4wf1r.png"></img>
              <strong> Companion Plants: </strong>
              {plant.companionPlants}
            </li>

            <li>
              <img src="https://res.cloudinary.com/daitiz1zj/image/upload/v1717634248/pestDiseases_72x_fm9oft.png"></img>
              <strong> Pests / Diseases: </strong>
              {plant.pestsDiseases}
            </li>

            <li>
              <img src="https://res.cloudinary.com/daitiz1zj/image/upload/v1717634247/edibleParts_72x_p1xveg.png"></img>
              <strong> Edible Parts: </strong>
              {plant.edibleParts}
            </li>

            <li>
              <img src="https://res.cloudinary.com/daitiz1zj/image/upload/v1717634249/propagationMethods_72x_ylsvtf.png"></img>
              <strong> Propagation Methods: </strong>
              {plant.propagationMethods}
            </li>

            <li>
              <img src="https://res.cloudinary.com/daitiz1zj/image/upload/v1717634247/applehighPotassiumFertilizer_72x_v9pgpr.png"></img>
              <strong> Fertilizer Needs: </strong>
              {plant.fertilizerNeeds}
            </li>

            <li>
              <img src="https://res.cloudinary.com/daitiz1zj/image/upload/v1717634250/specialFeatures_72x_los1wj.png"></img>
              <strong> Special Features: </strong>
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
            <button onClick={handleDelete}>Delete</button>
          </div>
          <div>
            {/* COMMENTS LIST */}
            <h2>Comments</h2>
            {plant &&
              plant.comments.map((comment) => (
                <CommentCard
                  key={comment.id}
                  comment={comment}
                  getSinglePlant={getSinglePlant}
                />
              ))}

            {/* ADD COMMENT SECTION */}
            <AddCommentForm
              plantId={plant.id}
              getSinglePlant={getSinglePlant}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default PlantDetails;

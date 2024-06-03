import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import PlantCard from "../components/PlantCard";
import AddPlantPage from "./AddPlantPage";

function PlantList() {
  //Initial state, to be replaced by data from the API, once data is retrieved, it will be stored in this variable.
  const [plants, setPlants] = useState([]);

  // useEffect hook makes request to the API and gets list with all plants
  useEffect(() =>{
    const getAllPlants = async () => {
      try {
        const response = await axios.get(`https://project2-react-app-server.adaptable.app/plants`) //axios makes http request
      
        setPlants(response.data) //update the state with response data from Plants API
      } catch (error) {
        console.log(error)
      }

    }
    getAllPlants();
  }, [])

  return (
    <div className="PlantListPage">

      <h1>Plants</h1>
        <div>
          {/* ADD NEW PLANT BUTTON */}
          <Link to="/plants/add">
            <button>Add a New Plant</button>
          </Link>
        </div>

        <div>
          {/* RENDER PLANT CARD FOR EACH PLANT IN PLANT LIST */}
          {plants.map((plant) => {
            return (
              <PlantCard key={plant.id} plant={plant} />
            );
          })}
        </div>
    </div>
  );
}

export default PlantList

// THIS COMPONENT RENDERS EACH PLANT CARD IN THE PLANTS LIST AND DISPLAYS THEM ON THE PLANTLIST PAGE. 
// OJO: NEEDS TO BE ADDED: ADD PLANT FORM 
// IT WILL ALSO RENDER THE ADD PLANT FORM. 
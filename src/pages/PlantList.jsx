import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import PlantCard from "../components/PlantCard";
import AddPlantPage from "./AddPlantPage";
import SearchBarPlantList from "../components/SearchBarPlantList";

function PlantList() {
  // INITIALIZE STATE TO STORE LIST OF PLANTS, ONCE DATA IS RETREIVED IT WILL BE STORED IN THIS VARIABLE
  const [plants, setPlants] = useState([]);

  // FETCH LIST OF ALL PLANTS WHEN COMPONENT INITIALIZES, MAKE GET REQUEST TO FETCH ALL PLANTS
  useEffect(() =>{
    const getAllPlants = async () => {
      try {
        const response = await axios.get(`https://project2-react-app-server.adaptable.app/plants?_embed=comments`) //axios makes http request
      
        // UPDATE STATE WITH FETCHED DATA
        setPlants(response.data)
      } catch (error) {
        // LOG ANY ERRORS
        console.log(error)
      }

    }
    getAllPlants();
  }, [])

  return (
    
    <div className="PlantListPage">
    
    {/* SEARCH BAR */}
    <SearchBarPlantList />

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

// THIS PAGE RENDERS EACH PLANT CARD COMPONENT IN THE PLANTS LIST AND DISPLAYS THEM ON THE PLANTLIST PAGE. 
// ALSO RENDERS ADD A NEW PLANT BUTTON WHICH LINKS TO ADD PLANT PAGE
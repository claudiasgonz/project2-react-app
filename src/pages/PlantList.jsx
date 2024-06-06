import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PlantCard from "../components/PlantCard";
import AddPlantPage from "./AddPlantPage";
import SearchBarPlantList from "../components/SearchBarPlantList";
import FavoriteCard from "../components/FavoriteCard";

function PlantList() {
  // INITIALIZE STATE TO STORE LIST OF PLANTS, ONCE DATA IS RETREIVED IT WILL BE STORED IN THIS VARIABLE
  const [plants, setPlants] = useState([]);

  // INITIALIZE FAVORITE PLANT STATE TO STORE FAVORITED PLANTS
  const [favorites, setFavorites] = useState([]);

  // FETCH LIST OF ALL PLANTS WHEN COMPONENT INITIALIZES, MAKE GET REQUEST TO FETCH ALL PLANTS
  useEffect(() => {
    const getAllPlants = async () => {
      try {
        const response = await axios.get(
          `https://project2-react-app-server.adaptable.app/plants?_embed=comments`
        ); //axios makes http request

        // UPDATE STATE WITH FETCHED DATA
        setPlants(response.data);
      } catch (error) {
        // LOG ANY ERRORS
        console.log(error);
      }
    };
    getAllPlants();
  }, []);

  // CORRE DESPUES DE QUE EL COMPONENT RENDERS
  useEffect(() => {
    console.log("These are the favorite plants", favorites);
  }, [favorites]); // USE EFFECT CORRE CUANDO 'FAVORITES' CAMBIE

// FUNCTION TO ADD PLANT TO LIST OF FAVORITES
  const addToFavorites = (id) => {
    console.log("this is the id argument", id);

    // FIND PLANT ID WITH GIVEN ID FROM PLANTS ARR
    let thisFavorite = plants.find((plant) => plant.id === id);

    // CHECK IF PLANT IS ALREADY IN FAV ARR
    let foundFavorite = favorites.find((favorite) => favorite.id === id);

    // IF PLANT IS NOT IN FAV, ADD IT TO FAV ARR
    if (!foundFavorite) {
      
      // ADD THE NEW FAV AL PRINCIPIO DEL ARR
      setFavorites([thisFavorite, ...favorites]);
    }
  };

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
            <PlantCard
              key={plant.id}
              plant={plant}
              addToFavorites={addToFavorites} 
              id={plant.id}
            />
          );
        })}
      </div>
      <h1> My Garden </h1>
      <div> 
        {/* RENDER PLANT CARD FOR EACH PLANT IN FAVORITE PLANT LIST */}
        {favorites.map((favorite) => {
          return (
            <FavoriteCard
              key={favorite.id}
              favorite={favorite}
              id={favorite.id}
            />
          );
        })}
      </div> 
    </div>
  );
}

export default PlantList;

// THIS PAGE RENDERS EACH PLANT CARD COMPONENT IN THE PLANTS LIST AND DISPLAYS THEM ON THE PLANTLIST PAGE.
// ALSO RENDERS ADD A NEW PLANT BUTTON WHICH LINKS TO ADD PLANT PAGE

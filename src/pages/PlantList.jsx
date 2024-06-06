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

  // ADD PLANT TO FAVORITES
  useEffect(() => {
    console.log("These are the favorite plants", favorites);
  }, [favorites]);

// FUNCION ANADE PLANTAS A LISTA DE FAVORITOS
  const addToFavorites = (id) => {
    console.log("this is the id argument", id);

    // 
    let thisFavorite = plants.find((plant) => plant.id === id);
    // COMPARAR PARA NO REPETIR LA PLANTA FAVORITA EN LA LISTA NUEVA
    let foundFavorite = favorites.find((favorite) => favorite.id === id);
    if (!foundFavorite) {
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
      <h1> Favorite plants </h1>
      <div> 
        {/* RENDER PLANT CARD FOR EACH PLANT IN PLANT LIST */}
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

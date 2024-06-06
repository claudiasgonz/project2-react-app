import PlantCard from "../components/PlantCard"
import { useState } from "react";

function FavoritePlants() {
  const [plants, setPlants] = useState();
  const [favorites, setFavorites] = useState();

  const handleFavorites = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://project2-react-app-server.adaptable.app/favoriteplants",
      {
        
      })

    } catch (error) {
      
    }
  }
  

  return (
    <div>
      <h1>My Garden</h1>
      
    </div>
  )
}

export default FavoritePlants
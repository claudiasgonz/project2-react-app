import { Link } from "react-router-dom";

function PlantCard({ plant }) {
  return (
    <div className="plant-card">
      <Link key={plant.id} to={`/plants/${plant.id}`}>
        <img className="plant-card-img" src={plant.imageUrl}></img>
        <h1 className="plant-card-plantname">{plant.plantName}</h1>
        <h2 className="plant-card-sci-name">{plant.scientificName}</h2>
        <p className="plant-card-description">{plant.description}</p>
      </Link>

      <button>
        <p>💚</p>
      </button>
    </div>
  )
}

export default PlantCard;

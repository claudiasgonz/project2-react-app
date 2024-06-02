import { Link } from "react-router-dom";

function PlantCard({ plant }) {
  return (
    <div>
      <Link key={plant.id} to={`/plants/${plant.id}`}>
        <h1>{plant.plantName}</h1>
        <h2>{plant.scientificName}</h2>
        <p>{plant.description}</p>

      </Link>
    </div>
  )
}

export default PlantCard;

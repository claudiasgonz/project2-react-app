import React from 'react'
import { Link } from "react-router-dom";

function FavoriteCard({ favorite, addToFavorites }) {
  return (
    <div className="favorite-plant-card">
    <Link key={favorite.id} to={`/plants/${favorite.id}`}>
      <img className="favorite-plant-card-img" src={favorite.imageUrl}></img>
      <h1 className="plant-card-plantname">{favorite.plantName}</h1>
      <h2 className="plant-card-sci-name">{favorite.scientificName}</h2>
      <p className="plant-card-description">{favorite.description}</p>
    </Link>

  </div>

  )
}

export default FavoriteCard


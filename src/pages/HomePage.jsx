import SearchBarHome from "../components/SearchBarHome";

function Homepage() {
  return (
  <div>
      {/* SEARCH BAR */}
      <div className="search-bar-home">
        <SearchBarHome />
      </div>

      <div className="about-home-page">

        <div className="about-home-column-1">
          <img src="https://res.cloudinary.com/daitiz1zj/image/upload/v1717706929/plantDataBase_xzudej.png">

          </img>
          <h3>Explore Plant Database</h3>
          <p>Learn about various plants that can be grown in Puerto Rico.</p>
        </div>

        <div className="about-home-column-2">
          <img src="https://res.cloudinary.com/daitiz1zj/image/upload/v1717706929/plantDirectory_to1bnu.png">
            
          </img>
          <h3>Save Favorites</h3>
          <p>Bookmark your favorite plants for quick reference.</p>
        </div>

        <div className="about-home-column-3">
          <img src="https://res.cloudinary.com/daitiz1zj/image/upload/v1717634248/maintenanceLevel_72x_yfs1jz.png">

          </img>
          <h3>Collaborate and Contribute</h3>
          <p>Share your experiences and contribute to our database.</p>
        </div>
      </div>
    </div>
  )
}

export default Homepage

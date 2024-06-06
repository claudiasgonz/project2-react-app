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
          <img src="https://res.cloudinary.com/daitiz1zj/image/upload/v1717634249/plantSpreads_72x_piupwf.png">

          </img>
          <p>Learn about various plants that can be grown in Puerto Rico.</p>
        </div>

        <div className="about-home-column-2">
          <img src="https://res.cloudinary.com/daitiz1zj/image/upload/v1717634247/bloomTime_72x_za7dm4.png">
            
          </img>
          <p>Detailed information on the specific needs for each plant.</p>
        </div>

        <div className="about-home-column-3">
          <img src="https://res.cloudinary.com/daitiz1zj/image/upload/v1717634248/maintenanceLevel_72x_yfs1jz.png">

          </img>
          <p>Share your experiences and contribute to our growing database.</p>
        </div>
      </div>
    </div>
  )
}

export default Homepage

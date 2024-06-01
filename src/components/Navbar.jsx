import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <img className="nav-img" src="src\assets\nav-logo.png" alt="logo" />

          <Link to="/">
            <button>Home</button>
          </Link>

          <Link to="/about">
            <button>About</button>
          </Link> 

          <Link to="/plants">
            <button>Browse Plants</button>
          </Link> 
    </nav>
  )
}

export default Navbar
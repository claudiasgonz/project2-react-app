import { Link } from "react-router-dom";
import SearchBarNav from "./SearchBarNav";

function Navbar() {
  return (
    <nav className="navbar">
      <img className="nav-img" src="https://res.cloudinary.com/daitiz1zj/image/upload/v1717627367/nav-logo_rq1mak.png" alt="logo" />

          <Link to="/">
            <button>Home</button>
          </Link>

          <Link to="/about">
            <button>About</button>
          </Link> 

          <Link to="/plants">
            <button>Browse Plants</button>
          </Link> 

          <SearchBarNav />

    </nav>
  )
}

export default Navbar
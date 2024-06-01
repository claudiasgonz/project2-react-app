import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
       <Link to="/">Home</Link>
       <Link to="/about">About</Link> 
       <Link to="/plants">Browse Plants</Link> 
    </nav>
  )
}

export default Navbar
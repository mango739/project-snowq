import { Link } from "react-router-dom";

function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h1>Dreamschools</h1>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/school" className="nav-link">Schools</Link>
                </li>
                <li className="nav-item">
                    <Link to="/create-school" className="btn btn-dark">Add your school</Link>
                </li>
            </ul>
          </div>
      </nav>
  );
}

export default Navbar;
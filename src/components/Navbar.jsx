import { useContext,  useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { RecipeContext } from "../context/RecipeContext";

// eslint-disable-next-line
function Navbar() {
  const context = useContext(RecipeContext);
  const { categories } = context;

  const navigate = useNavigate();

  

  const [search, setSearch] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate(`/Search/${search}`);
    setSearch("");
    e.target.reset();
  };
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand mx-3" to="/">
            <img src={logo} alt="FlavorFinder" width={180} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav d-flex align-items-center">
              <li className="nav-item">
                <Link className={`nav-link`} to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link`} to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                  <i className="fa-solid fa-angle-down dropdown-icon ms-1"></i>
                </a>
                <ul className="dropdown-menu">
                  {categories.map((category) => (
                    <li key={category.idCategory}>
                      <Link
                        className="dropdown-item"
                        to={`/Category/${category.strCategory}`}
                      >
                        {category.strCategory}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
            <form
              className="d-md-flex d-none"
              onSubmit={handleSubmit}
              role="search"
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                required
                onChange={onChange}
              />
              <button className="search-btn btn" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

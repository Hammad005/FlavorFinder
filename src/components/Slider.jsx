/* eslint-disable react/prop-types */
import logo from "../assets/logo.png";
import img_1 from "../assets/1.jpg";
import img_2 from "../assets/2.jpg";
import img_3 from "../assets/3.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Slider = ({ about }) => {
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
      <div className="slider">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel-slide carousel-dark"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <img src={img_1} className="d-block w-100" alt="..." />
              <div className="overlay"></div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={img_2} className="d-block w-100" alt="..." />
              <div className="overlay"></div>
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={img_3} className="d-block w-100" alt="..." />
              <div className="overlay"></div>
            </div>
          </div>
        </div>
          {!about ? (
            <>
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <img
                  src={logo}
                  alt="FlavorFinder"
                  className="responsive-logo pt-5 pt-md-4"
                />
                <form className="d-flex search-form pb-5 pb-md-3" role="search" onSubmit={handleSubmit}>
                  <input
                    className="form-control  "
                    type="search"
                    placeholder="Search Recipe"
                    aria-label="Search"
                    onChange={onChange}
                    required
                  />
                  <button className="search-btn btn" type="submit">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center about-section">
              <div className="d-md-flex d-none align-items-center justify-content-center">
                <h1 className="about-heading heading text-center">{about.title} -</h1>
                <img
                  src={about.image}
                  className="ms-3 mt-3 "
                  alt="FlavorFinder"
                  style={{ width: "300px" }}
                />
              </div>
              <div className="d-md-none d-flex align-items-center justify-content-center">
              <h1 className="about-heading heading text-center">{about.title} - FlavorFinder</h1>
              </div>
              <div className="container mt-3">
                <p className="about-description">{about.description}</p>
              </div>
            </div>
          )}
      </div>
    </>
  );
};

export default Slider;

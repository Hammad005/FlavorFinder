import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { Link } from "react-router-dom";
import { Loader } from "lucide-react";

const Category = () => {
  const context = useContext(RecipeContext);
  const { changeToUpper, categories, loading } = context;
  return (
    <>
      <div className="container-fluid text-center mb-3">
        <h1 className="category-heading my-4 heading">Categories</h1>
        <div className="row justify-content-center">
          {loading ? (
            <div className="d-flex justify-content-center align-items-center mt-3">
              <Loader className="loader" aria-hidden="true" />
              Loading...
            </div>
          ) : (
            categories.map((category) => (
              <div
                key={category.idCategory}
                className="col-md-3 mt-3 d-flex justify-content-center"
              >
                <Link to={`/Category/${category.strCategory}`}>
                  <div className="card text-dark category-card">
                    <img
                      src={category.strCategoryThumb}
                      className="card-img"
                      alt="img"
                    />
                    <div className="card-img-overlay card-overlay">
                      <div className="container overlay-content">
                        <h5 className="card-title">
                          {changeToUpper(category.strCategory)}
                        </h5>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Category;

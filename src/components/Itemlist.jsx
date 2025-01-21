import { useContext, useEffect } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { Link, useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { Loader } from "lucide-react";

// eslint-disable-next-line
const Itemlist = () => {
  const context = useContext(RecipeContext);
  const { filterByCategories, filterCategories, loading } = context;
  const { cat } = useParams();
  useEffect(() => {
      window.scrollTo({ top: 0 });
      filterByCategories(cat);
    /* eslint-disable */
  }, [cat]);

  return (
    <>
      <div className="itemlist-container text-center container mt-3">
        <h1 className="itemlist-heading my-4 heading">{cat}</h1>
      {
        loading ? (
          <div className="d-flex justify-content-center align-items-center mt-3">
            <Loader className="loader" aria-hidden="true" />
            Loading...
          </div>
        ):
      filterCategories === null  ? <NotFound setLoading={setLoading} /> : (
        filterCategories.map((item, key) => (
          <Link
            style={{ textDecoration: "none" }}
            to={`/Item/${item.idMeal}`}
            key={item.idMeal}
          >
            <div className="itemlist-card card mb-3">
              <div className="row g-0">
                <div className="col-md-4 d-flex justify-content-start">
                  <img
                    src={item.strMealThumb}
                    className="img-fluid itemlist-img rounded-start"
                    alt="item"
                  />
                </div>
                <div className="col-md-8 d-flex text-md-start align-items-center">
                  <div className="itemlist-card-body">
                    <p className="itemlist-card-text heading">
                      Recipe: {key + 1}
                    </p>
                    <h6 className="itemlist-card-title">{item.strMeal}</h6>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))
      )}
      </div>
    </>
  );
};

export default Itemlist;

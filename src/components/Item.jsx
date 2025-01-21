import { useContext, useEffect } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { useParams } from "react-router-dom";
import logo from "../assets/logo.png";
import { Loader } from "lucide-react";

//eslint-disable-next-line
const Item = () => {
  const context = useContext(RecipeContext);
  const { filterByid, filterId, loading } = context;
  const { id } = useParams();
  useEffect(() => {
    filterByid(id);
    window.scrollTo({ top: 0 });
    /* eslint-disable */
  }, [id]);
  const renderIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = filterId[`strIngredient${i}`];
      const measure = filterId[`strMeasure${i}`];
      if (ingredient && measure) {
        ingredients.push(`${measure.trim()} ${ingredient.trim()}`);
      } else if (ingredient) {
        ingredients.push(ingredient.trim());
      }
    }
    return ingredients.filter(Boolean).join(", ");
  };
  const renderInstructions = () => {
    const instructions = filterId.strInstructions;
    if (instructions) {
      return instructions.split("STEP").map((step, index) => (
        <p key={index} className="item-card-text">
          {step.trim()}
        </p>
      ));
    }
    return null;
  };
  return (
    <>
      <div className="item-container text-center container-fluid d-flex flex-column align-items-center">
        <img src={logo} alt="FlavorFinder" width={200} className="mb-3 mt-3" />
        {loading ? (
          <div className="d-flex justify-content-center align-items-center mt-3">
            <Loader className="loader" aria-hidden="true" />
            Loading...
          </div>
        ) : (
          <div key={filterId.idMeal} className="item-card  mb-3">
            <div className="row g-0">
              <div className="col-md-4 d-flex align-items-center justify-content-center">
                <img
                  src={filterId.strMealThumb}
                  className="img-fluid item-img rounded-start"
                  alt="item"
                />
              </div>
              <div className="col-md-8 d-flex  align-items-center">
                <div className="item-card-body">
                  <h5 className="item-card-title">{filterId.strMeal}</h5>
                  <p
                    className="item-card-text mb-0"
                    style={{ fontSize: "20px" }}
                  >
                    <strong>Ingredients: </strong>
                  </p>
                  <small className="text-body-secondary">
                    {renderIngredients()}
                  </small>
                  <p className="item-card-text mt-3">
                    <strong style={{ fontSize: "20px" }}>Instructions: </strong>
                  </p>
                  {renderInstructions()}
                  <p className="item-card-text" style={{ fontSize: "18px" }}>
                    Category:{" "}
                    <small className="text-body-secondary me-2">
                      {filterId.strCategory}
                    </small>
                    Area:{" "}
                    <small className="text-body-secondary">
                      {filterId.strArea}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Item;

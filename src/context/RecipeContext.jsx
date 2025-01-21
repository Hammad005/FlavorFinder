/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
const RecipeContext = createContext();

const RecipeContextProvider = ({ children }) => {
  const host = import.meta.env.VITE_CATEGORIES_URL;

  const [categories, setCategories] = useState([]);
  const [filterCategories, setFilterCategories] = useState([]);
  const [filterId, setFilterId] = useState([]);
  const [searchMeal, setSearchMeal] = useState([]);
  const [gettingData, setGettingData] = useState(true);
  const [loading, setLoading] = useState(false);

  const changeToUpper = (txt) => {
    return txt.toUpperCase();
  };

  const allCategories = async () => {
    setGettingData(true);
    setLoading(true);
    try {
      const response = await fetch(`${host}/categories.php`, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      setCategories(json.categories);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching categories:", error);
    } finally {
      setTimeout(() => {
        setGettingData(false);
      }, 2000);
    }
  };
  const filterByCategories = async (cat) => {
    setLoading(true);
    try {
      const response = await fetch(`${host}/filter.php?c=${cat}`, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      setFilterCategories(json.meals);
      setLoading(false);

    } catch (error) {
      setLoading(false);
      console.error("Error fetching filtered categories:", error);
    } 
  };
  const filterByid = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`${host}/lookup.php?i=${id}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      setFilterId(json.meals[0]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching meal wiht id:", error);
    } 
  };
  const searchM = async (i) => {
    setLoading(true);
    try {
      const responseByName = await fetch(`${host}/search.php?s=${i}`, {
        method: "GET",
      });

      if (!responseByName.ok) {
        throw new Error(`HTTP error! status: ${responseByName.status}`);
      }

      const jsonResponseByName = await responseByName.json();
      if (jsonResponseByName.meals) {
         setSearchMeal(jsonResponseByName.meals);
      }

      const responseByIngredient = await fetch(`${host}/filter.php?i=${i}`, {
        method: "GET",
      });

      if (!responseByIngredient.ok) {
        throw new Error(`HTTP error! status: ${responseByIngredient.status}`);
      }

      const jsonResponseByIngredient = await responseByIngredient.json();
      if (jsonResponseByIngredient.meals) {
         setSearchMeal(jsonResponseByIngredient.meals);
      }

      const responseByCategory = await fetch(`${host}/filter.php?c=${i}`, {
        method: "GET",
      });

      if (!responseByCategory.ok) {
        throw new Error(`HTTP error! status: ${responseByCategory.status}`);
      }

      const jsonResponseByCategory = await responseByCategory.json();
      if (jsonResponseByCategory.meals) {
         setSearchMeal(jsonResponseByCategory.meals);
      }

      const responseByArea = await fetch(`${host}/filter.php?a=${i}`, {
        method: "GET",
      });

      if (!responseByArea.ok) {
        throw new Error(`HTTP error! status: ${responseByArea.status}`);
      }

      const jsonResponseByArea = await responseByArea.json();
      if (jsonResponseByArea.meals) {
         setSearchMeal(jsonResponseByArea.meals);
      }

      if (jsonResponseByName.meals && jsonResponseByIngredient.meals && jsonResponseByCategory.meals && jsonResponseByArea.meals) {
         return setSearchMeal([]);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error fetching search resault:", error);
    } finally{
      setLoading(false);
    }
  };
  return (
    <>
      <RecipeContext.Provider
        value={{
          gettingData,
          loading,
          changeToUpper,
          allCategories,
          categories,
          filterByCategories,
          filterCategories,
          filterByid,
          filterId,
          searchM,
          searchMeal,
          setSearchMeal,
        }}
      >
        {children}
      </RecipeContext.Provider>
    </>
  );
};

export { RecipeContextProvider, RecipeContext };

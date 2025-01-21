import { useEffect } from "react";
import Category from "./Category";
import Slider from "./Slider";

//eslint-disable-next-line
const Home = () => {
  

  useEffect(() => {
    window.scrollTo({ top: 0 });
    /* eslint-disable */
  }, []);
  return (
    <>
      <Slider />
      <Category />
    </>
  );
};

export default Home;

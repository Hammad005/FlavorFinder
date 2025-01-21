import { useEffect } from "react";
import img from "../assets/404.png";
//eslint-disable-next-line
const NotFound = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    // eslint-disable-next-line
  }, [])
  
  return (
    <>
      <div
        className="container d-flex flex-column justify-content-center align-items-center text-center"
        style={{ height: "100vh", padding: "0 15px" }}
      >
        <img
          src={img}
          alt="page-not-found"
          style={{ maxWidth: "100%", height: "400px" }}
        />
      </div>
    </>
  );
};

export default NotFound;

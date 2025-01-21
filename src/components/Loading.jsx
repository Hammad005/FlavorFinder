import logo from "../assets/logo.png";


const Loading = () => {
  return (
    <>
      <div className="spinner-page container">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <img src={logo} alt="FlavorFinder" className="mt-4" width={200} />
      </div>
    </>
  );
};

export default Loading;

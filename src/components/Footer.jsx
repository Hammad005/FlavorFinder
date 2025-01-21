import logo from "../assets/logo.png";
const Footer = () => {  
  return (
    <>
        <div
          className="card text-center"
          style={{
            backgroundColor: "#ffff",
            color: "#335235",
            borderRadius: "0",
            padding: "10px",
            border:"none",
            boxShadow: "0px 2px 16px #335235",
          }}
        >
          <div className="card-body">
            <p className="card-text" >
              © Copyright
              <img src={logo} alt="FlavorFinder-logo" className="mx-2" width={120} />All
              Rights Reserved
            </p>
          </div>
        </div>
    </>
  );
};

export default Footer;

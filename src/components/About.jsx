import Slider from "./Slider";
import logo from "../assets/logo.png";
//eslint-disable-next-line
const About = () => {
  
  const about = {
    title: "About",
    description: `Welcome to FlavorFinder, your go-to destination for
                    discovering delicious recipes tailored to your preferences!
                    Whether you’re looking to whip up a meal with the
                    ingredients you have on hand or exploring new culinary
                    adventures, FlavorFinder makes it easy and fun. With our
                    intuitive search bar, you can quickly find recipes by
                    entering ingredients or keywords. Each recipe is presented
                    with a captivating title, image, and a brief description to
                    inspire your cooking journey. Dive deeper into detailed
                    instructions and ingredient lists to bring your favorite
                    dishes to life. Powered by public APIs like Edamam or
                    TheMealDB, FlavorFinder ensures you have access to a vast
                    collection of recipes from around the world. Our platform
                    also emphasizes seamless navigation, leveraging modern
                    technologies like React for dynamic routing and secure API
                    integrations. Join us in transforming everyday cooking into
                    an exciting and flavorful experience!`,
    image: logo,
  };
  return (
    <>
      <Slider about={about} />
    </>
  );
};

export default About;

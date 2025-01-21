import "./App.css";
import { RecipeContext, RecipeContextProvider } from "./context/RecipeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import About from "./components/About";
import Itemlist from "./components/Itemlist";
import Item from "./components/Item";
import Search from "./components/Search";
import Footer from "./components/Footer";
import { useContext, useEffect } from "react";
import Loading from "./components/Loading";

function AppContent() {
  const context = useContext(RecipeContext);
  const { gettingData, allCategories } = context;

  useEffect(() => {
    allCategories();
    /* eslint-disable */
  }, []);

  if (gettingData) {
    return <Loading />;
  } else {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About   />} />
          <Route path="/Category/:cat" element={<Itemlist />} />
          <Route path="/Item/:id" element={<Item />} />
          <Route path="/Search/:meal" element={<Search />} />
        </Routes>
        <Footer />
      </>
    );
  }
}

function App() {
  return (
    <>
      <RecipeContextProvider>
        <Router>
          <AppContent />
        </Router>
      </RecipeContextProvider>
    </>
  );
}

export default App;
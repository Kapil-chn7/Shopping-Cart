import "./App.css";
import HeaderComp from "./components/HeaderComp";
import Shop from "./components/Shop";
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

//importing context
// import Productstate from "./context/Productstate";
import Productstate from "./context/Productstate";
// import UserContext from "./context/Usercontext";
function App() {
  return (
    <Productstate>
      <div className="App">
        {/* <Productstate> */}

        <HeaderComp />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />

          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />

        {/* </Productstate> */}
      </div>
    </Productstate>
  );
}

export default App;

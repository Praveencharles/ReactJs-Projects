import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Products from "./Pages/Products"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="Home">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Service" element={<Service/>} />
        <Route path="/Products" element={<Products/>} />
      </Routes>
    </div>
  );
}

export default App;

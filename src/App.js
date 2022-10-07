import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Order from "./components/Order";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* It accept 2 props -> 1st path: which reflects the path in the url. 2nd element: assign the component. */}
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<Order />} />
      </Routes>
    </>
  );
}

export default App;

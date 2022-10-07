import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* It accept 2 props -> 1st path: which reflects the path in the url. 2nd element: assign the component. */}
      <Route path="about" element={<About />} />
    </Routes>
  );
}

export default App;

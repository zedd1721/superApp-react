import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Select from "./Pages/Select";
import Home from "./Pages/Home";
import Browse from "./Pages/Browse";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/select" element={<Select />} />
        <Route path="/home" element={<Home />} />
        <Route path="/browser" element={<Browse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

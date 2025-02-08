import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Navbar from "./Component/Navbar";
import "./App.css";
import Home from "./Component/Home";

function App() {
  return (
    <Router>
      <Navbar className="z-50 fixed"/>
      <div className="mt-16 py-4">
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

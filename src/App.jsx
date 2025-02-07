import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Navbar from "./Component/Navbar";
import Banner from "./Component/Banner";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="mt-16 p-4">
        <Routes>
          <Route path="/" element={<Banner />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DeliciousPage from "./Pages/DeliciousPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route index path="/Delicious" element={<DeliciousPage />} />
      </Routes>
    </Router>
  );
}

export default App;

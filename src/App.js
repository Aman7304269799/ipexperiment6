import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./Screens/Profile";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

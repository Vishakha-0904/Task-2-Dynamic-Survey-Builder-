



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SurveyBuilder from "./components/SurveyBuilder";
import Results from "./components/Results";

import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SurveyBuilder />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}

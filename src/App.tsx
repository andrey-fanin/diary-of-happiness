import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Card from "./components/Card";
import Home from "./components/Home";
import DayPage from "./pages/DayPage";
import "./App.css";
import CalendarPage from "./pages/CalendarPage";

export default function App() {
  return (
    <div id="root">
      <Routes>
        <Route path="/card:id" element={<Card />} />
        <Route path="/" element={<Home />} />
        <Route path="/moment" element={<DayPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </div>
  );
}

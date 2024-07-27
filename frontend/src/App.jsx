import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./Pages/DashBoardPage";
import Navbar from "./components/Atoms/Navbar";
import { ROUTES } from "./constants/routes.constants";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={ROUTES.HOME} element={<DashboardPage />} />
        <Route path={ROUTES.GOALS} element={<></>} />
        <Route path={ROUTES.HABITS} element={<></>} />
        <Route path={ROUTES.JOURNAL} element={<></>} />
        <Route path={ROUTES.MOOD} element={<></>} />
        <Route path={ROUTES.POMODORO} element={<></>} />
      </Routes>
    </Router>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter, Route, Routes } from "react-router";
import SignUp from "./Components/SignUp";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";

import Dashboard from "./Pages/Dashboard";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/footer" element={<Footer />} />
          <Route exact path="/header" element={<Header />} />
          <Route exact path="/dashboard" element={<Dashboard />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

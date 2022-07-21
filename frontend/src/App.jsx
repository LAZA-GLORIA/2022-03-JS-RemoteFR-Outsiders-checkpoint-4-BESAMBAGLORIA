import React from "react";
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./components/Logout";
import Signup from "./pages/Signup";
import Page404 from "./pages/Page404";
import UserDashboard from "./pages/UserDashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscription" element={<Signup />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/mon-compte" element={<UserDashboard />} />
        <Route path="/" element={<Logout />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

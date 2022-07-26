import React from "react";
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./components/Logout";
import Signup from "./pages/Signup";
import PageInconnue from "./pages/PageInconnue";
import Blog from "./pages/Blog/Blog";
import WriteArticle from "./pages/Blog/WriteArticle";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Inscrits from "./pages/Inscrits";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscription" element={<Signup />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/mon-compte" element={<UserDashboard />} />
        <Route path="/mon-compte/admin" element={<AdminDashboard />} />
        <Route path="/mon-compte/admin/inscrits" element={<Inscrits />} />
        <Route path="/mon-compte/admin/write" element={<WriteArticle />} />
        <Route path="/" element={<Logout />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<PageInconnue />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

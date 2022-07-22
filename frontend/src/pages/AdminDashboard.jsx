import React from "react";
import UserNavbar from "../components/UserNavbar";
import Footer from "../pages/Footer";
import Banner from "../components/Banner";
import "../assets/common.css";
import "../assets/AdminDashboard.css";

export default function AdminDashboard() {
  return (
    <>
    <UserNavbar />
    <Banner />
    <div className="container-page-admin">
      <h1> Dashboard Admin </h1>
      <p> Tâches à faire </p>
      <p> Statistiques </p>
    </div>
    <Footer />
    </>
  )
}

import React from 'react';
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import HomeContainer from '../components/HomeContainer';
import Footer from './Footer';
import "../assets/common.css";
import "../assets/Home.css";


export default function Home() {
  return (
    <div>
        <Navbar />
        <Banner />
        <HomeContainer />
        <Footer />
    </div>
  )
}

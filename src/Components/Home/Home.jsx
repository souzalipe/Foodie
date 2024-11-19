import React, { useEffect } from "react";
import { scrollRevealConfig } from "../../library/reveal/ScrollReveal.js"
import { scrollRevealConfigFlip } from "../../library/flip/ScrollReveal.js";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import About from "../About/About"
import BannerBackground from "../../assets/home-banner-background.png";
import BannerImage from "../../assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {

  useEffect(()=>{
    scrollRevealConfigFlip(),
    scrollRevealConfig
  })

  return (
    <>
      <div className="home-container">
        <Navbar />
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
          </div>
          <div className="home-text-section">
            <h1 className="primary-heading">
              Sua comida favorita entregue quente e fresca.
            </h1>
            <p className="primary-text">
              Chefs especializados fazem todo o trabalho de preparação, como
              cortar e marinar, para que você possa saborear um alimento
              saudável de fresco.
            </p>
            <button className="secondary-button">
              Peça Agora <FiArrowRight />{" "}
            </button>
          </div>
          <div className="home-image-section flip">
            <img src={BannerImage} alt="" />
          </div>
        </div>
      </div>
      <About />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;

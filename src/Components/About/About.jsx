import React from "react";
import AboutBackground from "../../assets/about-background.png";
import AboutBackgroundImage from "../../assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
          A alimentação é uma parte importante de uma dieta balanceada
        </h1>
        <p className="primary-text">
          A alimentação é fundamental para manter a saúde e o bem-estar. Uma
          dieta balanceada, composta por uma variedade de alimentos, fornece os
          nutrientes essenciais que o corpo precisa para funcionar corretamente.
        </p>
        <p className="primary-text">
          E nos da Foodie acreditamos em praticidade, saude e sabor para a sua
          alimentação.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button"><a className="link-video" href="https://www.youtube.com/channel/UCy5nRP880qA_R4xa1e72xDQ">Saiba Mais</a></button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill></BsFillPlayCircleFill> Assista o vídeo 
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

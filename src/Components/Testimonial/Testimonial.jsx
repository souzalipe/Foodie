import React from "react";
import ProfilePic from "../../assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">Oque dizem sobre nos?</h1>
        <p className="primary-text">
          Avaliações de clientes que atendidos por nos por todo o mundo.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Antes da Foodie tinha dificuldades com minha dieta por conta do meu
          trabalho, mas hoje tenho a certeza de que vou cunprir com minhas
          refeições.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>José Brito</h2>
      </div>
    </div>
  );
};

export default Testimonial;

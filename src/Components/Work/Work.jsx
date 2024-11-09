import React from "react"
import PickMeals from "../../assets/pick-meals-image.png"
import ChooseMeals from "../../assets/choose-image.png"
import DeliveryMeals from "../../assets/delivery-image.png"
import Navbar from "../Navbar/Navbar"

const Work = () => {
    const workInfoData = [
      {
        image: PickMeals,
        title: "Escolha de refeições",
        text: "Cada refeição é unica, por isso ter um alimento agradavel para a sua escolha é tão importante.",
      },
      {
        image: ChooseMeals,
        title: "Escolha com frequência",
        text: "É sempre bom fazer a escolha certa, assim oferecemos as melhores opções para a escolha.",
      },
      {
        image: DeliveryMeals,
        title: "Entregas rápidas",
        text: "De forma rápida e eficiênte levamos sua comida até você.",
      },
    ];
    return (
      <>
      <Navbar/>
      <div className="work-section-wrapper">
        <div className="work-section-top">
          <h1 className="primary-heading">Como funciona?</h1>
          <p className="primary-text">
            Nos aqui da Foodie desfrutamos dos três e. 
          </p>
        </div>
        <div className="work-section-bottom">
          {workInfoData.map((data) => (
            <div className="work-section-info" key={data.title}>
              <div className="info-boxes-img-container">
                <img src={data.image} alt="" />
              </div>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
    );
  };
  
  export default Work;
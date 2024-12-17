import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-page-wrapper">
        <h1 className="primary-heading">Perguntas em Mente?</h1>
        <h1 className="primary-heading">Deixe-nos te ajudar</h1>
        <div className="contact-form-container">
          <input type="text" placeholder="SeuEmail@gmail.com" />
          <button className="secondary-button">Enviar</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

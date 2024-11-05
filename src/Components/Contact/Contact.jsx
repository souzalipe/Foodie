import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Perguntas em Mente?</h1>
      <h1 className="primary-heading">Deixe-nos te ajudar</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="SeuEmail@gmail.com" />
        <button className="secondary-button">Enviar</button>
      </div>
    </div>
  );
};

export default Contact;
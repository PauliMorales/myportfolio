import React, { useState } from "react";
import "./contact.css";
import { TITLES } from "../../constants/arrays";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [disableButton, setDisableButton] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisableButton(true);

    fetch(`${import.meta.env.VITE_API_URL}/emails/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
        setDisableButton(false);
      })
      .catch((error) => {
        console.error(error);
        setDisableButton(false);
      });
  };

  return (
    <div>
      <section className="contact section" id="contact">
        <h2 className="section-title">{TITLES.CONTACT}</h2>

        <div className="contact__container">
          <div className="contact__info">
            <h3 className="contact__subtitle">
              <i className="bx bx-envelope"></i> CORREO ELECTRONICO
            </h3>
            <a href="mailto:paumor271@gmail.com" className="contact__text">
              paumor271@gmail.com
            </a>

            <h3 className="contact__subtitle">
              <i className="bx bxs-phone-call"></i> CELULAR
            </h3>
            <a href="tel:+573164623534" className="contact__text">
              +57 316 462 35 34
            </a>

            <h3 className="contact__subtitle">
              <i className="bx bx-home-heart"></i> RESIDENCIA
            </h3>
            <span className="contact__text">Colombia</span>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <label className="contact__label">
              Nombre:
              <input
                className="contact__inputs"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label className="contact__label">
              Celular:
              <input
                className="contact__inputs"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label className="contact__label">
              Correo Electrónico:
              <input
                className="contact__inputs"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label className="contact__label">
              Mensaje:
              <textarea
                className="contact__inputs"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <button
              className="contact__button"
              type="submit"
              disabled={disableButton}
            >
              <span className="contact__button-shadow"></span>
              <span className="contact__button-edge"></span>
              <span className="contact__button-front">Enviar</span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;

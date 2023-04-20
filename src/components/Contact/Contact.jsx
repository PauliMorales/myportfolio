import React, { useState } from "react";
import "./contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("/api/contact", {
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
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <section className="contact section" id="contact">
        <h2 className="section-title">Contact</h2>

        <div className="contact__container">
          <div className="contact__info">
            <h3 className="contact__subtitle">
              EMAIL <i className="bx bx-envelope"></i>
            </h3>
            <span className="contact__text">paumor271@gmail.com</span>

            <h3 className="contact__subtitle">
              PHONE <i className="bx bxs-phone-call"></i>
            </h3>
            <span className="contact__text">+57 316 462 35 34</span>

            <h3 className="contact__subtitle">
              ADRESS <i className="bx bx-home-heart"></i>
            </h3>
            <span className="contact__text">Colombia</span>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <label>
              Name:
              <input className="contact__inputs"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Email:
              <input className="contact__inputs"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Message:
              <textarea className="contact__inputs"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </label>
            <br />
            <button type="submit">Send</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;

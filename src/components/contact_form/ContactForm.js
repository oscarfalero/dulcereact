import React from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <form action="/" name="contact" method="POST">
      <div classNameName="form-group">
        <input
          type="text"
          className={styles.form_cont}
          id="contact-name"
          name="name"
          placeholder="Nombre"
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          className={styles.form_cont}
          id="contact-email"
          name="email"
          placeholder="Email"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className={styles.form_cont}
          id="contact-website"
          name="phone"
          placeholder="Celular / Teléfono"
        />
      </div>
      <div className="form-group">
        <textarea
          className={styles.form_cont}
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Mensaje"
        ></textarea>
      </div>
      <button type="submit" className={styles.btn}>
        Enviar mensaje
      </button>
    </form>
  );
};

export default ContactForm;

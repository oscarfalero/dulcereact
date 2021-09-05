import React from "react";
import ContactForm from "../../components/contact_form/ContactForm";
import TopHeader from "../../components/topheader/TopHeader";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div>
      <TopHeader />
      <h2>Contacto</h2>
      <p className={styles.text_box}>
        Puedes contactarme por mis redes o llenando el formulario
      </p>
      <ContactForm />
    </div>
  );
};

export default Contact;

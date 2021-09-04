import React from "react";
import ContactForm from "../../components/contact_form/ContactForm";
import TopHeader from "../../components/topheader/TopHeader";

const Contact = () => {
  return (
    <div>
      <TopHeader />
      <h2>Contacto</h2>
      <p>Puedes contactarme por mis redes o llenando el formulario</p>
      <ContactForm />
    </div>
  );
};

export default Contact;

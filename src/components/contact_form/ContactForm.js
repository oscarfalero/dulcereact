import React from "react";

const ContactForm = () => {
  return (
    <form>
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <textarea id="message" name="message" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;

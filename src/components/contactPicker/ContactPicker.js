import React from "react";

export const ContactPicker = (props) => {
  const { contacts, onChange } = props;

  return (
    <div>
      <label>Contact:</label>
      <select id="contact-select" onChange={onChange}>
        <option value="">--Please choose a contact --</option>
        {contacts.map((contact, index) => (
        <option key={index} value={contact}>{contact}</option>
        ))}
    </select>
    </div>
    
  );
};

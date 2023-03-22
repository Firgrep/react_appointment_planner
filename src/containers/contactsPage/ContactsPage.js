import React, {useState, useEffect} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm.js";
import { TileList } from "../../components/tileList/TileList.js";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const { contacts, addContact } = props;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicateName, setDuplicateName] = useState(false);
  const [duplicatePhone, setDuplicatePhone] = useState(false);
  const [duplicateEmail, setDuplicateEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!duplicateName && !duplicatePhone && !duplicateEmail) {
      addContact({
        name: name,
        phone: phone,
        email: email
      });
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    function checkForDuplicateName() {
      if (contacts.length > 0) {
        const duplicate = contacts.filter(contact => contact.name === name)
        if (duplicate.length > 0) {
          setDuplicateName(true);
        } else {
          setDuplicateName(false);
        }
      }
    };
    checkForDuplicateName();    
  }, [contacts, name]);

  useEffect(() => {
    function checkForDuplicatePhone() {
      if (contacts.length > 0) {
        const duplicate = contacts.filter(contact => contact.phone === phone)
        if (duplicate.length > 0) {
          setDuplicatePhone(true);
        } else {
          setDuplicatePhone(false);
        }
      }
    };
    checkForDuplicatePhone();
  }, [contacts, phone]);

  useEffect(() => {
    function checkForDuplicateEmail() {
      if (contacts.length > 0) {
        const duplicate = contacts.filter(contact => contact.email === email)
        if (duplicate.length > 0) {
          setDuplicateEmail(true);
        } else {
          setDuplicateEmail(false);
        }
      }
    };
    checkForDuplicateEmail();
  }, [contacts, email]);

  return (
    <main>
      <section>
        <h2>
          Add Contact
          {duplicateName ? " - Name Already Exists!" : ""}
          {duplicatePhone ? " - Phone Already Exists!" : ""}
          {duplicateEmail ? " - E-mail Already Exists!" : ""}
        </h2>
        <ContactForm 
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList
          tiles={contacts}
        />
      </section>
    </main>
  );
};

import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Name"
        />
      </label>
      <br />
      <label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          // pattern="^[2-9]\d{2}-\d{3}-\d{4}$"
          placeholder="Phone number: e.g. 333-444-5555"
        />
      </label>
      <br />
      <label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          placeholder="E-mail"
        />
      </label>
      <br />
      <input type="submit" />
    </form>
  );
};

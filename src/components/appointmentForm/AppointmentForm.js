import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker.js";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContactsNames = () => {
    return contacts.map((contact) => contact.name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="enter a title"
        /> 
      </label>
      <br />
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          min={getTodayString()}
        />
      </label>
      <br />
      <label>
        Time:
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </label>
      <br />
      <ContactPicker
        contacts={getContactsNames()}
        onChange={(e) => setContact(e.target.value)}
      />
      <input type="submit"/>
    </form>
  );
};

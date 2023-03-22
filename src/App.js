import React, {useState} from "react";
import { RouterProvider, createBrowserRouter, 
         createRoutesFromElements, Route } from "react-router-dom";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import Root from './components/root';

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([
    {
      name: "Tom",
      phone: "4445556666",
      email: "tom@company.net" 
    },
    {
      name: "Markus",
      phone: "51515151",
      email: "spirits@finlandia.fi"
    }
  ]);
  const [appointments, setAppointments] = useState([]);

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContact = ({name, phone, email}) => {
    const newContact = {
      name: name,
      phone: phone,
      email: email
    };
    setContacts(prev => [newContact, ...prev]);
  }

  const addAppointment = ({title, contact, date, time}) => {
    const newAppointment = {
      title: title,
      contact: contact,
      date: date,
      time: time
    };
    setAppointments(prev => [newAppointment, ...prev]);
  }

  const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Root /> }>
    <Route 
      index 
      path="/" 
      element={ 
        <ContactsPage 
          contacts={contacts}
          addContact={addContact}
        />
      }>
    </Route>
    <Route 
      path="/appointments" 
      element={ 
        <AppointmentsPage 
          appointments={appointments}
          addAppointment={addAppointment}
        />
      }>
    </Route>
  </Route>
  ));

  return (
    <RouterProvider router={appRouter}></RouterProvider>
  );
}

export default App;

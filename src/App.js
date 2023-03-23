import React, {useState} from "react";
import { RouterProvider, createHashRouter,
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
      name: "Tommy",
      phone: "4445556666",
      email: "tommy@company.net" 
    },
    {
      name: "Markus",
      phone: "51515151",
      email: "spirits@finlandia.fi"
    }
  ]);
  const [appointments, setAppointments] = useState([
    {
      title: "Code review with Markus",
      contact: "Markus",
      date: "2024-03-15",
      time: "17:40"
    }
  ]);

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

  // Best to use createBrowserRouter but since it does not work with gh-pages
  // createHashRouter is used instead here specifically.
  const appRouter = createHashRouter(createRoutesFromElements(
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
            contacts={contacts}
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

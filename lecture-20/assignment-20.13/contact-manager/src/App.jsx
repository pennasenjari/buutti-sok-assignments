import './App.css';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Header from './Header';
import ContactList from './ContactList';
import ViewContact from './ViewContact';
import ContactForm from './ContactForm';

function App() {

  const [contacts, setContacts] = useState([]);
  const [myContact, setMyContact] = useState();
  const [view, setView] = useState("frontPage"); // frontPage, viewContact, editContact, addContact
  const [filter, setFilter] = useState(""); 
  const emptyFields = { 
    id: "", name: "", email: "", phone: "", address: "", website: "", notes: "" 
  }
  const formFields = [
    {label: "Name", name: "name"},
    {label: "Email Address", name: "email"},
    {label: "Phone", name: "phone"},
    {label: "Address", name: "address"},
    {label: "Website", name: "website"},
    {label: "Notes", name: "notes"}
  ];
  const [formData, setFormData] = useState(emptyFields);

  const handleFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const addContact = () => {
    setMyContact();
    if (formData.name) {
      const newId = uuid();
      const newContact = {...formData, id: newId};
      setContacts([...contacts, newContact]);
      setFormData(emptyFields);
    } else {
      console.log("Name missing");
    }
  }

  const deleteContact = (contactToDelete) => {
    const ok = window.confirm(`Delete ${contactToDelete.name}?`);
    if (ok) {
      const newContacts = contacts.filter(contact => contact.id !== contactToDelete.id);
      setContacts(newContacts);
      setView("frontPage");
    }
  }

  const viewContact = (contact) => {
    setMyContact(contact);
    setView("viewContact")
  }

  const newContact = () => {
    setFormData(emptyFields);
    setView("addContact");
  }
  const editContact = (contact) => {
    setFormData(contact);
    setView("editContact");
  }

  const cancelEdit = () => {
    setFormData(emptyFields);
    setView("frontPage");
  }

  const updateContact = () => {
    const newContacts = contacts.map(contact => {
      if (contact.id === formData.id) {
        return formData;
      } else {
        return contact;
      }
    });
    setContacts(newContacts);
    setMyContact(formData);
    setView("viewContact");
  }

  const filteredContacts = contacts.filter((contact) => {
    return (
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
  });

  return (
    <div className="container">
      <Header />
      <div className="content">
        <div className="leftColumn">
          <ContactList
            contacts={filteredContacts} viewContact={viewContact} editContact={editContact}
            deleteContact={deleteContact} newContact={newContact} filter={filter} 
            setFilter={setFilter}
          />
        </div>
        <div className="rightColumn">
          {(view === "addContact" || view === "editContact") &&
            <ContactForm
              formFields={formFields} formData={formData} view={view}
              handleFormChange={handleFormChange} addContact={addContact} 
              updateContact={updateContact} cancelEdit={cancelEdit}
            />
          }
          {view === "viewContact" &&
            <ViewContact
              formFields={formFields} contact={myContact} 
              editContact={editContact} deleteContact={deleteContact}
            />
          }  
        </div>
      </div>
    </div>
  )
}

export default App;
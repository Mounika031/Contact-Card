import React, { useState, useEffect } from 'react';
import './App.css'
import Header from './Header'
import Contactlist from './ContactList'
import AddContact from './AddContact'
import ContactCard from './ConatctCard';
function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([])
  const addContactHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts, contact])

  }
  const deleteContactHandler = (id) => {
    const ConstListDetails = contacts.filter((contact) => {
      return contact.id !== id
    }
    );
    setContacts(ConstListDetails)
  }
  useEffect(() => {
    const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrievedContacts) setContacts(retrievedContacts);
  }, []);
    
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  
  
  return (
    <div className='ui container'>
      <Header />

      <AddContact addContactHandler={addContactHandler} />


      <Contactlist contacts={contacts} />
    </div>
  );
}

export default App;

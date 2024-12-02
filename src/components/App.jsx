import React, { useState } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import './App.css'

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const handleAddContact = newContact => {
    const contactExists = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (contactExists) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleDeleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className='formStyle'>
      <h1 className='phoneTitle'>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />

      <h2 className='contactsTitle'>Contacts</h2>
      <Filter value={filter} onFilterChange={handleFilterChange} />
      <ContactList contacts={getFilteredContacts()}
      onDeleteContact={handleDeleteContact} />
    </div>
  );
};

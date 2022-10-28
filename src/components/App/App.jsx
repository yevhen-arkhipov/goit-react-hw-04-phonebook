import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { PhonebookTitle, ContactsTitle } from './App.styled';

import Box from 'components/Box';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contactsValue = JSON.parse(localStorage.getItem('contacts'));
    return (
      contactsValue ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'filter':
        setFilter(value);
        break;
      case 'number':
        setNumber(value);
        break;
      case 'name':
        setName(value);
        break;
      default:
        new Error('The type not found');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const findContact = contacts.find(contact => contact.name === name);

    if (findContact) {
      Notify.failure(`${name} is already in contacts.`, {
        position: 'center-top',
        width: '300px',
        fontSize: '14px',
        failure: {
          background: '#883f2d',
        },
      });
    } else {
      setContacts(prevContacts => {
        const newContact = { id: nanoid(), name, number };

        return [...prevContacts, newContact];
      });
    }
  };

  const searchingFilter = e => {
    const value = e.currentTarget.value;
    setFilter(value);
  };

  const contactFiltering = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const removeContact = contactId => {
    setContacts(prevContacts => {
      const newContacts = prevContacts.filter(
        contact => contact.id !== contactId
      );
      return newContacts;
    });
  };

  const filteredContacts = contactFiltering();

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        width="1280px"
        height="970px"
        bg="bodyColor"
        boxShadow="outline"
        as="main"
      >
        <Box
          pt={1}
          pb={1}
          bg="btnColor"
          boxShadow="outline"
          borderRadius="5px"
          as="section"
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mb={1}
            width="400px"
            as="div"
          >
            <PhonebookTitle>Phonebook</PhonebookTitle>
            <ContactForm
              onSubmit={handleSubmit}
              onChange={handleInputChange}
              nameValue={name}
              numberValue={number}
            />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            width="400px"
            as="div"
          >
            <ContactsTitle>Contacts</ContactsTitle>
            <Filter filterValue={filter} onChange={searchingFilter} />
            <ContactList contacts={filteredContacts} onClick={removeContact} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

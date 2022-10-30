import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  Section,
  FormBox,
  ContactBox,
  PhonebookTitle,
  ContactTitle,
} from './App.styled';

import Box from 'components/Box';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { useLocalStorage } from 'utils/useLocalStorage';

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts');
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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

  const resetForm = () => {
    setName('');
    setNumber('');
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
    } else if (name.length > 20 || number.length > 20) {
      Notify.failure(`Name or number is too long. Maximum 20 characters!`, {
        position: 'center-top',
        width: '300px',
        fontSize: '14px',
        failure: {
          background: '#883f2d',
        },
      });
    } else {
      resetForm();

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

    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizeFilter);
    });
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
        <Section>
          <FormBox>
            <PhonebookTitle>Phonebook</PhonebookTitle>
            <ContactForm
              onSubmit={handleSubmit}
              onChange={handleInputChange}
              nameValue={name}
              numberValue={number}
            />
          </FormBox>
          <ContactBox>
            <ContactTitle>Contacts</ContactTitle>
            <Filter filterValue={filter} onChange={searchingFilter} />
            <ContactList contacts={filteredContacts} onClick={removeContact} />
          </ContactBox>
        </Section>
      </Box>
    </>
  );
};

export default App;

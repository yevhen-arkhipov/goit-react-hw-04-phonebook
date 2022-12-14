import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Box from 'components/Box';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { useContacts } from 'utils/useContacts';

import { GlobalStyle } from './GlobalStyle';
import {
  Section,
  PhonebookWrapper,
  PhonebookTitle,
  ContactsWrapper,
  ContactsTitle,
} from './App.styled';

const App = () => {
  const [contacts, setContacts] = useContacts([]);
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

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
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
          <PhonebookWrapper>
            <PhonebookTitle>Phonebook</PhonebookTitle>
            <ContactForm
              onSubmit={handleSubmit}
              onChange={handleInputChange}
              nameValue={name}
              numberValue={number}
            />
          </PhonebookWrapper>
          <ContactsWrapper>
            <ContactsTitle>Contacts</ContactsTitle>
            <Filter filterValue={filter} onChange={searchingFilter} />
            {contacts.length !== 0 && (
              <>
                <ContactList
                  contacts={filteredContacts()}
                  onClick={removeContact}
                />
              </>
            )}
          </ContactsWrapper>
        </Section>
      </Box>
      <GlobalStyle />
    </>
  );
};

export default App;

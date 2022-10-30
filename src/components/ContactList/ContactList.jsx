import PropTypes from 'prop-types';

import ContactItem from 'components/ContactItem';

import { List } from './ContactList.styled';

const Contacts = ({ contacts, onClick }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onClick={onClick}
        />
      ))}
    </List>
  );
};

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};

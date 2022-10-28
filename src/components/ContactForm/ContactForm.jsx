import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { DataForm, Label, Input, Button } from './ContactForm.styled';

const nameInputId = nanoid(5);
const numberInputId = nanoid(8);

const ContactForm = ({ onSubmit, onChange, nameValue, numberValue }) => {
  return (
    <DataForm onSubmit={onSubmit} autoComplete="off">
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChange}
          value={nameValue}
          id={nameInputId}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChange}
          value={numberValue}
          id={numberInputId}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </DataForm>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  nameValue: PropTypes.string.isRequired,
  numberValue: PropTypes.string.isRequired,
};

export default ContactForm;

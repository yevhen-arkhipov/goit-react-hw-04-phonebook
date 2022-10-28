import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

import Box from 'components/Box';

const Filter = ({ filterValue, onChange }) => {
  return (
    <Box>
      <Label>
        Find contacts by name
        <Input
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          type="text"
          name="filter"
          value={filterValue}
          onChange={onChange}
        />
      </Label>
    </Box>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

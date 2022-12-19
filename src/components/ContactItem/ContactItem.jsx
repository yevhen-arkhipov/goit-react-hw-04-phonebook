import PropTypes from 'prop-types';

import { Item, Text, Button } from './ContactItem.styled';

const ContactItem = ({ id, name, number, onClick }) => {
  return (
    <Item>
      <Text>
        {name}: {number}
      </Text>
      <Button type="button" onClick={() => onClick(id)}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactItem;

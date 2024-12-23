import React from 'react';

import PropTypes from 'prop-types';
import './ContactList.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className="contactStyle">
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button className="btnDelete" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;

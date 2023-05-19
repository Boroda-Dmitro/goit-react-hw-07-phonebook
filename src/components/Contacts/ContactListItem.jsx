import PropTypes from 'prop-types';
import css from './Contacts.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../Redux/Contacts/Slice';

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <li className="contacts__item">
      {name}: {number}
      <button
        type="button"
        onClick={() => dispatch(deleteContact(id))}
        className={css.button}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

import { ContactsList } from './Contacts/ContactsList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { allContacts, isLoading } from './Redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from './Redux/operation/operation';
import { Loader } from './Loader/Loader';

export const App = () => {
  const contacts = useSelector(allContacts);
  const loading = useSelector(isLoading);
  const dsspatch = useDispatch();
  useEffect(() => {
    dsspatch(fetchContacts());
  }, [dsspatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      {loading ? (
        <Loader />
      ) : contacts.length !== 0 ? (
        <>
          <Filter />
          <ContactsList />
        </>
      ) : (
        <p>We don't have contact</p>
      )}

      <ToastContainer position="top-center" autoClose={2000} theme="dark" />
    </div>
  );
};

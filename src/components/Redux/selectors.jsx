export const allContacts = ({ contacts: { data }}) => data

export const filteredContacts = ({ contacts: { data }, filter }) => {
  if (!filter) {
    return data;
  }
  return data.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

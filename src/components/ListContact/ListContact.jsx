import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import ElementContact from '../ElementContact';

const ListContact = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  console.log(contacts)

  const makeFiltredContacts = () => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const makeList = array => {
    return array.map(({ id, name, number }) => {
      return (
        <ElementContact
          key={id}
          contactName={name}
          contactNumber={number}
          contactId={id}
        />
      );
    });
  };
  return <ul>{makeList(makeFiltredContacts())}</ul>;
};

export default ListContact;

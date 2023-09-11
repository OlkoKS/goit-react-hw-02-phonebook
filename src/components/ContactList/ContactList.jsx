import { ContactItem } from 'components/ContactItem/ContactItem';
import { ListContainer } from './ContactList.styled';

export const ContactList = ({ contacts, filter, handleDelete }) => {
  let contactList = filter
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;
  return (
    <div>
      <h2>ContactList</h2>
      <ListContainer>
        {contactList.map(contact => {
          const { id, name, number } = contact;
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              handleDelete={handleDelete}
            />
          );
        })}
      </ListContainer>
    </div>
  );
};

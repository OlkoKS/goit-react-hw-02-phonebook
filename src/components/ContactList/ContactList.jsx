import { ContactItem } from 'components/ContactItem/ContactItem';
import { ListContainer } from './ContactList.styled';

export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <div>
      <h2>ContactList</h2>
      <ListContainer>
        {contacts.map(contact => {
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

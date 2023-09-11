import { ListItemContainer, DeleteBtn } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, handleDelete }) => {
  return (
    <ListItemContainer>
      <h3>{name}: </h3>
      <p>{number}</p>
      <DeleteBtn type="button" onClick={() => handleDelete(id)}>
        Delete
      </DeleteBtn>
    </ListItemContainer>
  );
};

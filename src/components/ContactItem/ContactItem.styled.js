import { styled } from 'styled-components';

const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin-right: 10px;
  }
`;

const DeleteBtn = styled.button`
  width: 100px;
  height: 30px;
  margin-left: 10px;
  padding: 5px;
  font-weight: 500;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #c1c3cf;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  &:hover {
    cursor: pointer;
  }
`;

export { ListItemContainer, DeleteBtn };

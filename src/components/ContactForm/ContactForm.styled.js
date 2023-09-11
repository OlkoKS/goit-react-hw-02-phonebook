import { styled } from 'styled-components';

const ContactFormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.input`
  width: 300px;
  height: 40px;
  margin: 5px 0;
`;

const BtnElement = styled.button`
  width: 160px;
  height: 40px;
  margin-top: 20px;
  padding: 5px;
  font-weight: 500;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  background-color: #fff;
  border: 1px solid #c1c3cf;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  &:hover {
    cursor: pointer;
  }
`;

export { ContactFormContainer, InputContainer, BtnElement };

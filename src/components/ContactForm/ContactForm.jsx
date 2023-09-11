import { Component } from 'react';
import {
  ContactFormContainer,
  InputContainer,
  BtnElement,
} from './ContactForm.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};
export class ContactForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.createContactData(this.state);
    this.setState(INITIAL_STATE);
  };

  render() {
    return (
      <ContactFormContainer onSubmit={this.handleSubmit}>
        <h2>ContactForm</h2>
        <label>Name</label>
        <InputContainer
          type="text"
          onChange={this.handleChange}
          value={this.state.name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label>Number</label>
        <InputContainer
          type="tel"
          onChange={this.handleChange}
          value={this.state.number}
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <BtnElement type="submit">Add contact</BtnElement>
      </ContactFormContainer>
    );
  }
}

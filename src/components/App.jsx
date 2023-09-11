import { Component } from 'react';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
}
export class App extends Component {
  state = INITIAL_STATE;

  createContactData = (contactData) => {
    let sameContact = this.state.contacts.find((contact) => (contact.name.toLowerCase() === contactData.name.toLowerCase()));
    if (sameContact) {
      return alert(`${sameContact.name} is already in contacts`)
    }

    const newContact = {
          ...contactData,
          id: nanoid(),
    }

    this.setState((prev) => (
      {
        contacts: [
            ...prev.contacts,
            newContact
            ]
      }))
  }
  
  handleFilter = (userQuery) => {
    this.setState((prev) => ({ filter: prev.contacts.filter((contact) => (contact.name.toLowerCase().includes(userQuery.toLowerCase()))) }));
  }
  
  handleDelete = (id) => {
    this.setState((prev) => ({contacts: prev.contacts.filter((contact) => (contact.id !== id))}))
    
  }

    render() {
        return (
            <div>
              <h1>Phonebook</h1>
              <ContactForm createContactData={this.createContactData} />

              <h2>Contacts</h2>
              <Filter handleFilter={this.handleFilter} />
              <ContactList contacts={this.state.contacts} filter={this.state.filter} handleDelete={this.handleDelete} />
            </div>
        )
    }
}

// import React, { Component } from 'react'

const INITIAL_STATE_FORM = {
    name: '',
    number: ''
  }
export class ContactForm extends Component {
  state = INITIAL_STATE_FORM;
  
  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.createContactData(this.state);
    this.setState(INITIAL_STATE_FORM);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>ContactForm</h2>
        <label>Name</label>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label>Number</label>
        <input
          type="tel"
          onChange={this.handleChange}
          value={this.state.number}
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    )
  }
}

export const ContactList = ({ contacts, filter, handleDelete }) => {
        return (
            <div>
                <h2>ContactList</h2>
                <ul>
              {(filter ? filter : contacts).map((contact) => {
                return <ContactItem key={contact.id} name={contact.name} number={contact.number} handleDelete={handleDelete} />
              })}
                </ul>
            </div>
        )
}

export const ContactItem = ({ id, name, number, handleDelete}) => {
    return (
      <li>
        <h3>{name}: <p>{number}</p></h3>
        <button type="button" onClick={() => (handleDelete(id))}>DELETE</button>
      </li>
    )
}

export const Filter = ({ handleFilter }) => {
  const handleChange = ({ target: { value } }) => (handleFilter(value));
  return (
      <div>
      <label>Find contacts by name</label>
      <input
        type="text"
        onChange={handleChange}
        name="filter"
      />
      </div>
    )
}

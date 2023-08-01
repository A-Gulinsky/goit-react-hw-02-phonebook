import { Component } from "react"
import shortid from "shortid"

import Container from "./App/App.styled"
import Section from "./Section"

import Phonebook from "./Phonebook"
import Contacts from "./Contacts"
import Filter from "./Filter"

class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  addNewContact = (name,number) => {

    const newId = shortid.generate()

    const newContact = {
      id: newId,
      name,
      number
    }

    if (this.state.contacts.some(contact => name === contact.name)) {
      return alert(`${name} is already in contacts`)
    }

    this.setState(({ contacts }) => ({
      contacts: [newContact,...contacts]
    }))
  }

  filterContacts = e => {
    this.setState({filter: e.currentTarget.value})
  }

  getFilterContacts = () => {
    const { filter, contacts } = this.state
    
    const normalizedFilter = filter.toLowerCase()

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
  }

  deleteContact = contactId => {

    this.setState(({contacts}) => ({
      contacts: contacts.filter(contact => contact.id !== contactId)
    }))
  }

  render() {
    const visibleContacts = this.getFilterContacts()
    return (
      <Container>
        <Section title="Phonebook">
          <Phonebook onSubmit={this.addNewContact}></Phonebook>
        </Section>
        <Section title="Contacts">
          <Filter onChange={this.filterContacts}></Filter>
          <Contacts contacts={visibleContacts} onDeleteContact={this.deleteContact}></Contacts>
        </Section>
      </Container>
    )
  }
}

export default App
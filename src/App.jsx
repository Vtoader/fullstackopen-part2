import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phoneNumber: '+40761580087' }
  ])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [personSearch, setPersonSearch] = useState('')
  const [filteredPersons, setFilteredPersons] = useState(persons)

  const handleSearchPerson = (event) => {
    setPersonSearch(event.target.value);
    const filterItems = persons.filter((person) => person.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setFilteredPersons(filterItems)
  }

  const addPerson = (event) => {
    const nameExists = persons.find(person => person.name === newName);
    if (nameExists) {
      event.preventDefault()
      alert(`${newName} already exists`)
    } else {
      event.preventDefault()
      const newObject = {
        name: newName,
        phoneNumber: newPhoneNumber,
        id: persons.length + 1
      }
      setPersons(persons.concat(newObject));
      setFilteredPersons(filteredPersons.concat(newObject));
      setNewName('')
      setNewPhoneNumber('')
    }
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  }

  const handlePhoneNumberChange = (event) => {
    setNewPhoneNumber(event.target.value)
  }

  return (
    <div>
      <button onClick={() => console.log(newName)}></button>
      <h2>Phonebook</h2>

      <Filter personSearch={personSearch} handleSearchPerson={handleSearchPerson} />

      <h3>Add a new</h3>

      <PersonForm
        newName={newName}
        newPhoneNumber={newPhoneNumber}
        handlePersonChange={handlePersonChange}
        handlePhoneNumberChange={handlePhoneNumberChange}
        addPerson={addPerson} />

      <h3>Numbers</h3>

      <Persons filteredPersons={filteredPersons} />
    </div>
  )
}

export default App;
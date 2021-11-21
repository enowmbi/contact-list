import React,{ useState, useEffect } from 'react'
import Header from './components/Header'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'

function App(props) {

    const LOCAL_STORAGE_KEY = "contacts"
    const [contacts, setContacts] = useState([])

    const addContactHandler =(contact) =>{
        setContacts([...contacts, contact])
    }

    useEffect(() =>{
const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if(retrievedContacts)
        setContacts(retrievedContacts)
    },[])

    useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
    },[contacts])

    const handleDeleteContact =(id) =>{
        const filteredContacts = contacts.filter((contact) =>{
          return contact.id !== id
        })

        setContacts(filteredContacts)
    }

  return (
      <React.Fragment>
      <Header />
      <ContactForm addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} handleDeleteContact ={handleDeleteContact}/>
      </React.Fragment>
  );
}

export default App;

import React,{ useState, useEffect } from 'react'
import {Route, Routes, Link } from 'react-router-dom'
import Header from './components/Header'
import AddContactForm from './components/AddContactForm'
import EditContactForm from './components/EditContactForm'
import ContactList from './components/ContactList'

function App(props) {

    const LOCAL_STORAGE_KEY = "contacts"
    const [contacts, setContacts] = useState([])

    const addContactHandler =(contact) =>{
        setContacts([...contacts, contact])
    }

    const updateContactHandler =(contact) =>{
        console.log("in the main app update function", contact)
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

    const handleUpdateContact =(id) =>{
        console.log("Contact to update:", id)
    }

    return (
        <React.Fragment>
        <Header />
        <Routes>
        <Route path="/add" 
        element ={
            <AddContactForm 
            addContactHandler = {addContactHandler}
            />
        }
        />

        <Route path='/edit' 
        element ={
            <EditContactForm
            updateContactHandler = {updateContactHandler}
            />
        }
        />

        <Route path="/" 
        element={
            <ContactList
            contacts={contacts}
            handleDeleteContact = {handleDeleteContact}
            handleUpdateContact = {handleUpdateContact}
            />
        }
        />
        </Routes>
        </React.Fragment>
    );
}

export default App;

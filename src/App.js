import React,{ useState, useEffect } from 'react'
import {Route, Routes, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Header from './components/Header'
import AddContactForm from './components/AddContactForm'
import EditContactForm from './components/EditContactForm'
import ContactList from './components/ContactList'

function App(props) {

    const LOCAL_STORAGE_KEY = "contacts"
    const [contacts, setContacts] = useState([])
    const navigate = useNavigate()

    const addContactHandler =(contact) =>{
        setContacts([...contacts, contact])
    }

    useEffect(() =>{
        // const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        axios.get("http://localhost:3006/api/v1/contacts").then((response) => {
            setContacts(response.data)})

        // if(retrievedContacts)
            // setContacts(retrievedContacts)
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
        navigate("/edit")
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
            updateContactHandler = {handleUpdateContact}
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

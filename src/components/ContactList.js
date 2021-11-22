import React from 'react'
import { Link } from 'react-router-dom'
import ContactEntry from './ContactEntry'
import SearchForm from './SearchForm'

const ContactList =(props) =>{

    const contacts = props.contacts

    const RenderContactEntries = contacts.map((contact) =>{
       return(
         <ContactEntry 
           key = {contact.id} 
           id = {contact.id} 
           name = {contact.name} 
           email = {contact.email} 
           handleDeleteContact = {props.handleDeleteContact}
           handleUpdateContact = {props.handleUpdateContact}
           />
       )
    })

    const handleSearch =(props) =>{
     console.log("This is the search text", props)
    }

    return(
        <div className="container">
        <div style={{marginTop: "10px"}} >
        <div style={{display: "flex", justifyContent: "space-evenly"}}>
        <h3>Contact List</h3>
        <Link to="/add">
        <button className="btn btn-primary pull-right">Add Contact</button>
        </Link>
        </div>
        <ul className="list-group list-group-flush">
        <SearchForm handleSearch={handleSearch}/>
        { RenderContactEntries }
        </ul>
        </div>
        </div>
    )
}
export default ContactList

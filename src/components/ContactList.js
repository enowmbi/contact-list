import React from 'react'
import ContactEntry from './ContactEntry'

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

    return(
        <div className="container">
        <div style={{marginTop: "10px"}} >
        <h3>Contact List</h3>
        <ul className="list-group list-group-flush">
        { RenderContactEntries }
        </ul>
        </div>
        </div>
    )
}
export default ContactList

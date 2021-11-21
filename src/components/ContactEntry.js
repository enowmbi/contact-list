import React from 'react'
import 'font-awesome/css/font-awesome.min.css';

const ContactEntry =(props) =>{

    const { id, name, email } = props
    return(
        <li className="list-group-item">
        <div style={{display: "flex", justifyContent: "space-between"}}>
        <div><i className="fa fa-user fa-lg"></i></div>
        <div style={{fontWeight: "bold"}}>{name}</div>
        <div>{email}</div>
        <div className="pull-right"><i className ="fa fa-trash fa-lg" style={{color: "red"}} onClick ={() =>props.handleDeleteContact(id)}></i></div>
        </div>
        </li>
    )
}

export default ContactEntry

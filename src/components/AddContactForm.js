import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import { v4 as uuid_v4} from 'uuid'

const AddContactForm = (props) =>{
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const navigate = useNavigate()

    const handleSubmit =(event) =>{
        // props.addContactHandler({id: uuid_v4(), name: name, email: email})
        props.addContactHandler({ name: name, email: email })
        event.preventDefault()
        navigate("/")
    }

    useEffect(() =>{
       setName("")
    },[])

    useEffect(() =>{
       setEmail("")
    },[])

    return(
        <form onSubmit ={handleSubmit}>
        <div className ="container">
        <h2>Add Contact</h2>
        <div className ="form-group">
        <label style={{fontWeight: "bold"}}>Name</label>
        <input 
        type="text"
        className="form-control"
        placeholder ="Name"
        required
        value = {name}
        onChange={(event) =>setName(event.target.value)}
        />
        </div>
        <div className="form-group">
        <label style={{fontWeight: "bold"}}>Email</label>
        <input
        type="email"
        className="form-control"
        placeholder ="Email"
        required
        value = {email}
        onChange ={(event) =>setEmail(event.target.value)}/>
        </div>
        <div style={{marginTop: "10px"}}>
        <button className="btn btn-primary">Add</button>
        </div>
        </div>
        </form>
    )
}
export default AddContactForm

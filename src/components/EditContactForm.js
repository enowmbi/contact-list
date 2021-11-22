import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const EditContactForm = (props) =>{
    const location = useLocation()
    const navigate = useNavigate()
    const [name, setName] = useState(location.state.name)
    const [email, setEmail] = useState(location.state.email)

    const handleUpdateSubmit =(event) =>{
        console.log("handling submit",location.state)
        event.preventDefault()
        navigate("/")
    }

    return(
        <form onSubmit ={handleUpdateSubmit}>
        <div className ="container">
        <h2>Edit Contact</h2>
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
        <button className="btn btn-primary">Update</button>
        </div>
        </div>
        </form>
    )
}
export default EditContactForm

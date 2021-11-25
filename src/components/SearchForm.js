import React, { useState } from 'react'
import 'font-awesome/css/font-awesome.min.css';


const SearchForm =(props)=>{
    const [ searchText, setSearchText ] = useState("")
 return(
     <React.Fragment>
     <div className="input-group m-2">
     <input type="text" value={searchText} onChange ={(event) => {setSearchText(event.target.value)}} className="form-control" placeholder="Search contact" aria-label="Search contact" aria-describedby="button-addon2" />
     <div className="input-group-append">
     <button className="btn btn-outline-primary" type="button" id="button-addon2" onClick={()=>props.handleSearch(searchText)}><i className="fa fa-search"></i></button>
     </div>
     </div>
     </React.Fragment>
 )

}

export default SearchForm



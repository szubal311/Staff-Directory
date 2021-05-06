import React from 'react';

function SearchBar(props){
    return(
        <form>
                <div className="form-group">                
                    <label htmlFor="search">Search:</label>
                    <input 
                        onChange={props.handleInputChange}
                        value={props.value}
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="Search Directory for Employee by Name"
                        id="search" 
                    />  
                    <br />                  
                </div>
                
            </form>
    )  
           
}

export default SearchBar

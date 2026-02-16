import React from 'react'

const Search = ({ setSearchTerm }) => {
    
  return (
    <div>
         <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onKeyUp={(e) => setSearchTerm(e.target.value)} />
          
          </form>
    </div>
  )
}

export default Search
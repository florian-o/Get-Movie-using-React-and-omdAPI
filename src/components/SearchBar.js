import React from 'react';

function Search({handleInput, search}) {
    return (
        <div className="card card-body border border-secondary mb-4 p-4 ">
            <p className="lead text-center">Get the Movies</p>
            <input 
                type="text" 
                placeholder="Search movies...." 
                className="form-control form-control-lg"
                onChange={handleInput}
                onKeyPress = {search}
             />
            
        </div>
    )
}

export default Search

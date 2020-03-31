import React from 'react';
import Result from './Result';


function Results({results}) {
    return (
       
        <div className="results">
            {results.map(item => {
                return (
                   <Result key={item.imdbID} item={item} />
            )})}
          </div>  
        
    )
}

export default Results

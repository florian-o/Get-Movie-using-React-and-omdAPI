import React from 'react';
import Result from './Result';


function Results({results}) {
   
    
  if (results === undefined || results.length === 0) {
    return <p className="loading"> .... Loading</p>
  } else {

    return (
            <div className="results">
            {results.map(item => {
                return (
                   <Result key={item.imdbID} item={item} />
            )})}
          </div>  
        
    )
}
}

export default Results

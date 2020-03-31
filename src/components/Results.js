import React from 'react';
//import Result from './Result';


function Results({results}) {
    return (
        <>
        <div>
       
            {results.map(item => {
                return (
                    <p>{item.Title}</p> 
            )})}
            
        </div>
        </>
    )
}

export default Results

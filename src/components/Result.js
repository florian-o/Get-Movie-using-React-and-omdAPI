import React from 'react';

function Result ({item}){

  return(

      <div className="result">
   
    <img src={item.Poster} alt={item.Title}/>
    
      <h2 >{item.Title}</h2>    
  </div>
  
  
  
 
  
  );
}


export default Result;

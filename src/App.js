import React,{useState} from 'react';
import axios from "axios";

// Import Components
import Navbar from './components/layout/Navbar';
import SearchBar from './components/SearchBar';





function App() {




  const [state, setState] = useState({
    search:"",
    results:[],
  });

  
  const apiKey = "http://www.omdbapi.com/?apikey=4e8007ba";


  const search = evt => {

    if (evt.key === 'Enter') {
      
      // Send the request
      axios(apiKey + "&s=" + state.search)
        .then(({data})=>{
          let results = data;
          setState({
            results:results
          });
          console.log(results);          
        });  
    };
     
  };

  const handleInput = evt => {

    let search = evt.target.value;
    
    setState({
      search:search
    });
   
  };

  return (

    <div>
      <Navbar />
      <div className="container">        
        <SearchBar handleInput={handleInput} search={search} />      
      </div>
    </div>
  );
}

export default App;

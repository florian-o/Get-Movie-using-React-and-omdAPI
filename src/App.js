import React,{useState} from 'react';

// Import Components
import Navbar from './components/layout/Navbar';
import SearchBar from './components/SearchBar';





function App() {

  const [state, setState] = useState({
    search:"",
    results:[],
    selected:{}
  });

  const search = evt => {
    if (evt.key === 'Enter') {
      console.log('yes');      
    };
  };

  const handleInput = evt => {

    let search = evt.target.value;
    console.log(search);

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

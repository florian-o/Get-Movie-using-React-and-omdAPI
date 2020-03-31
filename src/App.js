import React from 'react';

// Import Components
import Navbar from './components/layout/Navbar';
import SearchBar from './components/SearchBar';


function App() {
  return (

    <div>
      <Navbar />
      <div className="container">        
        <SearchBar />      
      </div>
    </div>
  );
}

export default App;

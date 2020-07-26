import React from 'react';
import Navbar from "./components/Header/Navbar";
import Welcome from './components/Pages/Welcome';
import useSticky from './hooks/useSticky';

import "./App.css"

function App() {
  const { isSticky, element } = useSticky()


 
  return (   
      <React.Fragment>
        <Navbar sticky={isSticky} />
        <Welcome element={element}/>        
      </React.Fragment>
    
  );
}

export default App;



import React from 'react';
import Navbar from "./components/Header/Navbar";
import Welcome from './components/Pages/Welcome';
import useSticky from './hooks/useSticky';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import About from '.././src/components/Pages/About';
import Services from './components/Pages/Services';
 
 
function App() {
  const { isSticky, element } = useSticky()

 
  
  return (   
      <main>
        <Navbar sticky={isSticky} />
        <Welcome element={element}/>
        <About/>
        <Services/>         
     
     </main>
  );
}

export default App;



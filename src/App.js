import React,{useState} from 'react';
import Navbar from "./components/Header/Navbar";

import GlobalStyle from './styles/Global';

function App() {
   const [navbarOpen ,setNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setNavbarOpen( {navbarOpen: !navbarOpen});
  }
   
  return (
    <>
        <Navbar 
          navbarState={navbarOpen} 
          handleNavbar={handleNavbar}
        />
        <GlobalStyle />
      </>
  );
}

export default App;

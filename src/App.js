import React from 'react';
import Navbar from "./components/Header/Navbar";
import Welcome from './components/Pages/Welcome';
import useSticky from './hooks/useSticky';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import About from '.././src/components/Pages/About';
import Services from './components/Pages/Services';
import Pricing from './components/Pages/Pricing';
import Footer from './components/Pages/Footer';


function App() {
  const { isSticky, element } = useSticky()



  return (
    <main>
      <Navbar sticky={isSticky} />
      <Welcome element={element} />
      <About />
      <Services />
      <Pricing />
      <Footer/>
    </main>
  );
}

export default App;



import React from 'react';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Photography from './pages/Photography';

const App = () => {
  return (
    <> 
      <Header/>
      <Home />
      <About />
      <Experience />
      <Projects />
      <Photography />
    </>
  );
}

export default App;

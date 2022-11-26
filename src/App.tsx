import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigateHeader from './conponents/nav/Nav';
import Skills from './conponents/skils/Skills';
import AppRouter from './conponents/router/AppRouter';

function App() {
  return (
    <>
          <NavigateHeader/>
          <AppRouter />
          <Skills />
    </>


  );
}

export default App;

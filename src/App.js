import React from 'react';
import Navbar from './components/layout/Navbar/Navbar';
import Routes from './routes/routes';
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes />
      </main>
      <footer>
        <h3>Developed by @</h3>
      </footer>
    </>
  );
}

export default App;

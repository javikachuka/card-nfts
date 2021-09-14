import React from 'react';
import Navbar from './components/layout/Navbar/Navbar';
import Routes from './routes/routes';

function App() {
  return (
    <>
      <Navbar />
      <div style={{padding: '50px 80px'}} >
        <Routes />
      </div>
    </>
  );
}

export default App;

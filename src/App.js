import './App.css';
import React from 'react';
import IndexPage from './views/index';
import CreateWalletPage from './views/create-wallet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<IndexPage />} />
        <Route exact path='/create' element={<CreateWalletPage />} />
      </Routes>
    </Router>
  );
}

export default App;

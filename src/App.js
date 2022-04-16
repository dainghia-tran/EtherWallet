import './App.css';
import React from 'react';
import IndexPage from './views/index';
import CreateWalletPage from './views/create-wallet';
import HomePage from './views/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<IndexPage />} />
        <Route exact path='/create' element={<CreateWalletPage />} />
        <Route exact path='/home' element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;

import './App.css';
import React from 'react';
import IndexPage from './views/index';
import CreateWalletPage from './views/create-wallet';
import HomePage from './views/home';
import ImportWalletPage from './views/import-wallet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<IndexPage />} />
        <Route exact path='/create' element={<CreateWalletPage />} />
        <Route exact path='/home' element={<HomePage />} />
        <Route exact path='/import' element={<ImportWalletPage />} />
      </Routes>
    </Router>
  );
}

export default App;

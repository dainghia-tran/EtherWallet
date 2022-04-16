import './App.css';
import React from 'react';
import IndexPage from './views/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<IndexPage />} />
      </Routes>
    </Router>
  );
}

export default App;

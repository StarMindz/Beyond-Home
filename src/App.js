import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import APOD from './components/pages/Apod';
import HomePage from './components/pages/HomePage';
import './App.css';
import { fetchNASA } from './redux/library/librarySlice';
import { fetchAPOD } from './redux/apod/apodSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(fetchNASA()), 1000);
    dispatch(fetchAPOD());
  }, [dispatch]);

  return (
    <Router className="App">
      <NavBar />
      <Routes className="appContainer">
        <Route path="/" element={<HomePage />} />
        <Route path="/apod" element={<APOD />} />
      </Routes>
    </Router>
  );
}

export default App;

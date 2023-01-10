import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import APOD from './components/pages/Apod';
import Library from './components/pages/Library';
import HomePage from './components/pages/Hompage';
import './App.css';
import { fetchAPOD } from './redux/apod/apodSlice';
import { fetchHome } from './redux/home/homeSlice';
import { fetchNASA } from './redux/library/librarySlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const year = Math.floor(Math.random() * (2024 - 2015)) + 2015;
    dispatch(fetchAPOD());
    dispatch(fetchNASA());
    dispatch(fetchHome(year));
  }, [dispatch]);

  return (
    <Router className="App">
      <NavBar />
      <Routes className="appContainer">
        <Route path="/" element={<HomePage />} />
        <Route path="/library" element={<Library />} />
        <Route path="/apod" element={<APOD />} />
      </Routes>
    </Router>
  );
}

export default App;

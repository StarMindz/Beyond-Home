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
import { fetchNASA } from './redux/library/librarySlice';
import { fetchAPOD } from './redux/apod/apodSlice';
import { fetchRover } from './redux/rover/roverSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNASA());
    fetchRover(['2015-05-30', 'mast']);
    dispatch(fetchAPOD());
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

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Exercises from './pages/Exercises';
import Home from './pages/Home';
import TheGym from './pages/TheGym';
import Groups from './pages/Groups';
import SingleGroup from './pages/SingleGroup';
import News from './pages/News';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
    return (
        <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
            <Navbar />
            <Routes>
                <Route path="Home" element={<Home />} />
                <Route path="The Gym" element={<TheGym />} />
                <Route path="Groups" element={<Groups />} />
                <Route path="Single Group" element={<SingleGroup />} />
                <Route path="News" element={<News />} />
                <Route path="Contact" element={<Contact />} />
                <Route path="Exercises" element={<Exercises />} />
                <Route path="/exercise/:id" element={<ExerciseDetail />} />
            </Routes>
            <Footer />
        </Box>
    );
    };

export default App;
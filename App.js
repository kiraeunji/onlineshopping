import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './component/Register';
import SignIn from './component/SignIn';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/signin" element={<SignIn />} />  
            </Routes>
        </Router>
    );
};

export default App;

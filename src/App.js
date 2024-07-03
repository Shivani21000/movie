import React from 'react';
import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import Footer from './components/footer/footer'
import Movie from './components/movie/movie';
import Login from './components/login/login';
import Booking from './components/booking/booking';
import Ticket from './components/ticket/ticket';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/movie/:movie_id" element={<Movie />} />
          <Route path="/booking/:movie_id" element={<Booking />} />
          <Route path="/ticket/:booking_id" element={<Ticket />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
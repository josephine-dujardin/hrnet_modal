import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css';
import Home from './pages/home'
import Liste from './pages/liste';
import NotFound from './pages/NotFound';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route exact path="" element={<Home />} />
      <Route exact path="/liste" element={<Liste />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

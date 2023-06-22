import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css';
import Modal from './component/modal';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route exact path="" element={<Modal />} />
    </Routes>
  </Router>
);

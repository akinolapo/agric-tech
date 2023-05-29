import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import AboutPage from './components/about-page/AboutPage';
import ImpactPage from './components/impact-page/ImpactPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/impact" element={<ImpactPage />} />
            </Routes>
            {/* <App /> */}
        </BrowserRouter>
  </React.StrictMode>
);

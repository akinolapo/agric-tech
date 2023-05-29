import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './index.css';
import App from './App';
import AboutPage from './components/about-page/AboutPage';
import ImpactPage from './components/impact-page/ImpactPage';
import ContactPage from './components/contact-page/Contactpage';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
            <Routes>
                 <ScrollToTop />
                <Route path="/" element={<App />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/impact" element={<ImpactPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
            {/* <App /> */}
        </BrowserRouter>
  </React.StrictMode>
);

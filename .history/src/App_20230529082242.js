import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Value from './components/Value'
import TwoColumnMasonry from './components/TwoColumnMasonry'
import TwoColumnComponent from './components/TwoColumnComponent'
import Footer from './components/Footer'

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};


const App = () => {
  return (
    
    <div>
      <ScrollToTop />
      <Header/>
      <Hero/>
      <Value/>
      <TwoColumnMasonry/>
      <TwoColumnComponent/>
      <Footer/>
    </div>
  )
}

export default App
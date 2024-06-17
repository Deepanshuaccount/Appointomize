import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Page/Home';
import './Responsive/responsive.css';
import FeatureSalon from './Page/FeatureSalon/FeatureSalon';
import Pricing from './Page/Pricing';

function App() {
 

  return (
    <>
      <div>
      
    <Header />
    <Routes>
   <Route exact path="/" element={<Home />} />
      <Route path="/features" element={<FeatureSalon />} />
     <Route path="/pricing" element={<Pricing />} />
        </Routes>
    <Footer />
       </div>
    </>
  )
}

export default App

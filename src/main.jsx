import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from 'react-router-dom';
import initializeGTM from './gtm.js';
import './index.css'

const GTM_ID="GTM-P3DMF4QG";
initializeGTM(GTM_ID);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)

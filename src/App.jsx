import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageLightrrom from './ImageLightrrom';
import ImageUpload from './ImageUpload';
import HomePageFirst from './HomePageFirst';
import Footer from './Footer';

function App() {
  return (
   <div>
    <body className='bgchange'>
    <HomePageFirst/>
     <ImageUpload/>
     <Footer/>
     </body>
   </div>
  );
}

export default App;

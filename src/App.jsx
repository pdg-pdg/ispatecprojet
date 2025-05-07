import React from 'react';
import { Routes, Route, useNavigate, BrowserRouter } from 'react-router-dom';
import Acceuil from './page/accueil';
import Tse from './page/tse';
import Tll from './page/tll';
import Tseco from './page/tseco';
import Tsexp from './page/tsexp';
import Tss from './page/tss';
// import './app.css'


const App = () => {

  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/tse" element={<Tse />} />
          <Route path="/tss" element={<Tss />} />
          <Route path="/tsexp" element={<Tsexp />} />
          <Route path="/tseco" element={<Tseco />} />
          <Route path="/tll" element={<Tll />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
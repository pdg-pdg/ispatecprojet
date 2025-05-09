import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Acceuil from './page/accueil';
import Tse from './page/tse';
import Tll from './page/tll';
import Tseco from './page/tseco';
import Tsexp from './page/tsexp';
import Tss from './page/tss';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Acceuil />} />
      <Route path="/tse" element={<Tse />} />
      <Route path="/tss" element={<Tss />} />
      <Route path="/tsexp" element={<Tsexp />} />
      <Route path="/tseco" element={<Tseco />} />
      <Route path="/tll" element={<Tll />} />
      {/* Route par défaut pour rediriger vers l'accueil */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
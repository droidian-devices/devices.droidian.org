import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import * as Components from './components';

const Routers: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Components.Home />} />
        <Route path="*" element={<Components.FourOhFour />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Routers;

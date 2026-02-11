import { ThemeProvider } from './hooks/MyTheme';

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { DashBoard } from './pages/DashBoard';

function AnimatedRoutes() {
  const location = useLocation();

    return (
      <AnimatePresence mode='wait'>
         <Routes location={location} key={location.pathname}>
          <Route path='/' element={<DashBoard />}></Route>
        </Routes>
      </AnimatePresence>
    );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
          <AnimatedRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App

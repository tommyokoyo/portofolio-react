import HomePage from './pages/HomePage';
import { ThemeProvider } from './hooks/MyTheme';

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AboutMe from './pages/AboutMe';
import BlogGrid from './pages/BlogGrid';
import ProjectsGrid from './pages/ProjectsGrid';

function AnimatedRoutes() {
    const location = useLocation();

    return (
      <AnimatePresence mode='wait'>
         <Routes location={location} key={location.pathname}>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/about' element={<AboutMe />}></Route>
          <Route path='/blog' element={<BlogGrid />}></Route>
          <Route path='/projects' element={<ProjectsGrid />}></Route>
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

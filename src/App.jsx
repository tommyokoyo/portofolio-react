import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ProjectsPage from './pages/ProjectsPage';

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();

    return (
      <AnimatePresence mode='wait'>
         <Routes location={location} key={location.pathname}>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/blog' element={<BlogPage />}></Route>
          <Route path='/blog/:slug' element={<BlogDetailPage />}></Route>
          <Route path='/projects' element={<ProjectsPage />}></Route>
        </Routes>
      </AnimatePresence>
    );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App

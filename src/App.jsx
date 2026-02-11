import HomePage from './pages/HomePage';
import { ThemeProvider } from './hooks/MyTheme';

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AboutMe from './pages/AboutMe';
import BlogGrid from './pages/BlogGrid';
import ProjectsGrid from './pages/ProjectsGrid';
import AboutPage from './pages/AboutPage';
import { useState } from 'react';
import HomeScreen from './pages/HomeScreen';
import { DashBoard } from './pages/DashBoard';

function AnimatedRoutes() {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("Home");

  const location = useLocation();

    return (
      <AnimatePresence mode='wait'>
         <Routes location={location} key={location.pathname}>
          <Route path='/' element={<DashBoard />}></Route>
          <Route path='/about' element={<AboutMe />}></Route>
          <Route path='/aboutMe' element={<AboutPage activeTab={activeTab} setActiveTab={setActiveTab} sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />}></Route>
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

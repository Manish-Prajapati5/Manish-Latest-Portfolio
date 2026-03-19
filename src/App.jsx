import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState, useEffect, useCallback, Suspense, lazy } from "react";
import { Loader } from "lucide-react";

// Lazy load components
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

// Loading component
const LoadingScreen = () => (
  <div className="flex items-center justify-center min-h-screen gap-1 gradient-bg text-3xl ">
    <div className=" animate-spin" ><Loader className="w-10 h-10" /></div> Loading...
  </div>
);

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  // Apply theme to body
  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  // Mouse move handler
  const handleMouseMove = useCallback((e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    setMousePos({ x, y });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <Suspense fallback={<LoadingScreen />}>
        <div className={`min-h-screen gradient-bg bg-cover bg-center bg-fixed transition-all duration-1000 flex flex-col`}>
          {/* Mouse Move Background Effect */}
          <div
            className="mouse-bg-effect"
            style={{
              background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, 
                rgba(59, 130, 246, 0.15) 0%, 
                rgba(139, 92, 246, 0.1) 25%, 
                transparent 50%)`
            }}
          />

          <div className="relative z-10">
            <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;


import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import Scryntax from "./pages/Scryntax";
import '../src/index.css';

export default function App() {
  return (
    <div className="bg-black text-green-400 min-h-screen font-mono w-full overflow-x-hidden">
      <BrowserRouter>
        <nav className="p-2 sm:p-4 lg:p-6 border-b border-green-500 flex flex-col sm:flex-row gap-2 sm:gap-4 lg:gap-6">
          <Link className="hover:text-green-200 transition text-sm sm:text-base lg:text-lg" to="/">[ HOME ]</Link>
          <Link className="hover:text-green-200 transition text-sm sm:text-base lg:text-lg" to="/Scryntax">[ SCRYNTAX ]</Link>
        </nav>
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/Scryntax" element={<PageWrapper><Scryntax /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      className="p-2 sm:p-4 lg:p-6 flex flex-col items-center w-full"
    >
      {children}
    </motion.div>
  );
}
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import Scryntax from "./pages/Scryntax";
import '../src/globals.css'
export default function App() {
  return (
    <div className="bg-black text-green-400 min-h-screen font-mono">
      <BrowserRouter>
        <nav className="p-4 border-b border-green-500 flex gap-6">
          <Link className="hover:text-green-200 transition" to="/">[ HOME ]</Link>
          <Link className="hover:text-green-200 transition" to="/Scryntax">[ SCRYNTAX ]</Link>
        </nav>
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    // AnimatePresence must have exitBeforeEnter (or mode="wait") for page transitions
    <AnimatePresence mode="wait">
      {/* key={location.pathname} ensures a new motion div is mounted on each route */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/Scryntax" element={<PageWrapper><Scryntax /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}
function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }} 
      transition={{ duration: 0.4 }}
      className="p-6 flex flex-col items-center"
      
    >
      {children}
    </motion.div>
  );
}
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { navLinks } from "./datas/navLinks";

import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import Bio from "./pages/Bio";
import NotFound from "./pages/NotFound";
import Architecture from "./pages/Architecture";

function App() {
  return (
    <>
      <Navbar navLinks={navLinks} />
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

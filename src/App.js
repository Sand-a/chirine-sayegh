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
import Design from "./pages/Design";
import ArtRoutes from "./routes/ArtRoutes";
import Contact from "./pages/Contact";
import { contactData } from "./datas/contactData";

import {
  projectsArchitectureData,
  projectsDesignData,
  projectsArtData,
} from "./datas/projectsdata";

function App() {
  return (
    <>
      <Navbar navLinks={navLinks} />
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route
          path="/architecture"
          element={
            <Architecture
              allProjects={projectsArchitectureData}
              icon={"/logo/logo-icon.svg"}
            />
          }
        />
        <Route
          path="/design"
          element={
            <Design
              allProjects={projectsDesignData}
              icon={"/logo/logo-icon.svg"}
            />
          }
        />
        <Route
          path="/art/*"
          element={
            <ArtRoutes projects={projectsArtData} icon={"/icons/flower.svg"} />
          }
        />
        <Route path="*" element={<NotFound />} />{" "}
        <Route path="/contact" element={<Contact data={contactData} />} />
      </Routes>
      <Footer data={contactData} />
    </>
  );
}

export default App;

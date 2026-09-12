import { useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Industries from "./pages/Industries";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Team from "./pages/Team";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    // Disable browser scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // If URL contains a hash such as #contact
    if (location.hash) {
      const id = location.hash.replace("#", "");

      const timeout = setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          // Remove the hash after scrolling
          window.history.replaceState(
            null,
            "",
            window.location.pathname
          );
        }
      }, 100);

      return () => clearTimeout(timeout);
    }

    // No hash: always start at the top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  return (
    <div className="min-h-screen">
      <ScrollManager />

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/services" element={<Services />} />

          <Route
            path="/services/:serviceSlug"
            element={<ServiceDetail />}
          />

          <Route
            path="/industries"
            element={<Industries />}
          />

          <Route
            path="/projects"
            element={<Projects />}
          />

          <Route
            path="/projects/:projectSlug"
            element={<ProjectDetail />}
          />

          <Route path="/team" element={<Team />} />


          <Route
            path="/careers"
            element={<Careers />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingLayout from "./components/landingPage/landingLayout"; // Note the uppercase 'L' and 'N'
import LandingNav from "./components/landingPage/landingNav.jsx";
import About from "./pages/About";
import Header from "./components/Header";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Footer from "../src/components/Footer.jsx";
import aos from "aos";
import "aos/dist/aos.css";
const App = () => {
  // initializing aos
  aos.init({
    easing: "ease-out",
    duration: "800",
  });
  return (
    <div>
      <Router>
        {/* <Header /> */}
        <LandingNav />
        <Routes>
          <Route path="/" element={<LandingLayout />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Project />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

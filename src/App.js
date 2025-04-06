// import React, { useEffect } from 'react';
// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";
// import Projects from "./Pages/Projects";
// import Technologies from "./Pages/Technologies";
// function App() {

//   const navigate = useNavigate();

//   useEffect(() => {
//     const path = window.location.pathname;

//     // Check if path doesn't match any route and redirect to home page
//     if (!['/react-portfolio', '/react-portfolio/about', '/react-portfolio/contact', '/react-portfolio/projects', '/react-portfolio/technologies'].includes(path)) {
//       navigate('/react-portfolio');
//     }
//   }, [navigate]);

//   return (
//     <BrowserRouter basename="/react-portfolio">
//       <Header />
//       <Routes>
//         <Route path="/react-portfolio" element={<Home />} />
//         <Route path="/react-portfolio/about" element={<About />} />
//         <Route path="/react-portfolio/contact" element={<Contact />} />
//         <Route path="/react-portfolio/projects" element={<Projects />} />
//         <Route path="/react-portfolio/technologies" element={<Technologies />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// }
// export default App;

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";

function AppWrapper() {
  const navigate = useNavigate();

  useEffect(() => {
    const path = window.location.pathname;

    // Check if path doesn't match any route and redirect to home page
    if (!['/react-portfolio', '/react-portfolio/about', '/react-portfolio/contact', '/react-portfolio/projects', '/react-portfolio/technologies'].includes(path)) {
      navigate('/');
    }
  }, [navigate]);

  return null; // No need to return anything here, as the component's only role is to handle the effect
}

function App() {
  return (
    <BrowserRouter basename="/react-portfolio">
      <AppWrapper />  {/* Now this is inside BrowserRouter */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/technologies" element={<Technologies />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

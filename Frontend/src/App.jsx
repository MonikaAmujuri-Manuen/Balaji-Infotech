
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products"
import ProductDetail from "./pages/ProductDetail";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import LMS from "./pages/LMS";
import CourseDetail from "./pages/CourseDetail";
import ExerciseDetails from "./pages/ExerciseDetails";
import Contact from "./pages/Contact";
import Education from "./pages/Education";

function App() {
  return (
    <>
    <ScrollToTop />
    <div className="overflow-x-hidden">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products/>} />
        <Route
          path="/products/:slug"
          element={<ProductDetail />}
        />
        <Route path="/services" element={<Services />} />
        <Route
          path="/services/:slug"
          element={<ServiceDetail />}
        />
        <Route path="/education" element={<Education />} />
        <Route path="/lms" element={<LMS />} />
        <Route
          path="/courses/:slug"
          element={<CourseDetail />}
        />
        <Route
          path="/lms/:exerciseSlug"
          element={<ExerciseDetails />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
    </>
  );
}

export default App;


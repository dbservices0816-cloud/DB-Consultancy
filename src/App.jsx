import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { Toaster } from "react-hot-toast";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Consultants from "./components/Consultants";
import Compliance from "./components/Compliance";
import Contact from "./components/Contact";
import AddProfessionalForm from "./components/AddProfessionalForm";
import Heritage from "./components/Heritage";
import Impact from "./components/Impact";
import Leadership from "./components/Leadership";
import Audit from "./components/Audit";

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
        }}
      />

      {/* Navbar */}
      <Navbar />
      {/* <Home />
      <Services />
      <Heritage />
      <Impact />
      <Leadership />
      <Audit />
      
    
      <Compliance />
      <Contact /> */}
      
      
     
      

      {/* Routes */}
     
      <Routes>
        

        {/* ================= USER ROUTES ================= */}

        <Route path="/" element={<Home />} />

        <Route path="/services" element={<Services />} />

        <Route path="/heritage" element={<Heritage />} />

        <Route path="/impact" element={<Impact />} />

        <Route path="/leadership" element={<Leadership />} />

        <Route path="/calculator" element={<Audit />} />

        <Route path="/about" element={<About />} />

        <Route path="/consultants" element={<Consultants />} />

        <Route path="/compliance" element={<Compliance />} />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/add-professional"
          element={<AddProfessionalForm />}
        />

      </Routes>

      {/* Footer */}
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <AppContent />
    </BrowserRouter>
  );
};

export default App;
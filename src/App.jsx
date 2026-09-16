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

// Admin
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import ProtectedAdminRoute from "./admin/ProtectedAdminRoute";


const AppContent = () => {
  const location = useLocation();

  // Hide Navbar and Footer on all admin pages
  const isAdminPage = location.pathname.startsWith("/admin");

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
      {!isAdminPage && <Navbar />}

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


        {/* ================= ADMIN LOGIN ================= */}

        <Route
          path="/admin-login"
          element={<AdminLogin />}
        />


        {/* ================= ADMIN DASHBOARD ================= */}

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedAdminRoute>
              <AdminDashboard />
            </ProtectedAdminRoute>
          }
        />

      </Routes>

      {/* Footer */}
      {!isAdminPage && <Footer />}
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
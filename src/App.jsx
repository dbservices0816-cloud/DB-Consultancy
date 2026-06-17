import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Consultants from "./components/Consultants";
import Compliance from "./components/Compliance";
import Contact from "./components/Contact";
import AddProfessionalForm from "./components/AddProfessionalForm";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// ADMIN
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import ProtectedAdminRoute from "./admin/ProtectedAdminRoute";

const AppContent = () => {
  const location = useLocation();

  // Hide Navbar & Footer on admin pages
  const hideLayout = location.pathname.includes("/admin");

  return (
    <>
      <Toaster position="top-right" />

      {!hideLayout && <Navbar />}

      <Routes>
        {/* USER ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/consultants" element={<Consultants />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/add-professional"
          element={<AddProfessionalForm />}
        />

        {/* ADMIN LOGIN */}
        <Route
          path="/admin-login"
          element={<AdminLogin />}
        />

        {/* ADMIN DASHBOARD */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedAdminRoute>
              <AdminDashboard />
            </ProtectedAdminRoute>
          }
        />
      </Routes>

      {!hideLayout && <Footer />}
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
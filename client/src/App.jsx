import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Services from "./pages/public/Services";
import ServiceDetails from "./pages/public/ServiceDetails";
import ManageServices from "./pages/admin/ManageServices";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/services" />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetails />} />

        <Route path="/admin/services" element={<ManageServices />} />
      </Routes>
    </BrowserRouter>
  );
}

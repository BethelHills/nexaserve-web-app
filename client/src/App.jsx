import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Services from "./pages/public/Services";
import ServiceDetails from "./pages/public/ServiceDetails";
import ManageServices from "./pages/admin/ManageServices";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetails />} />

        <Route path="/admin/services" element={<ManageServices />} />
        <Route path="/" element={<Navigate to="/services" />} />
      </Routes>
    </BrowserRouter>
  );
}

import { Navigate, Route, Routes } from "react-router-dom";
import Services from "./pages/public/Services";
import ServiceDetails from "./pages/public/ServiceDetails";
import ManageServices from "./pages/admin/ManageServices";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/services" replace />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:id" element={<ServiceDetails />} />

      <Route path="/admin" element={<Navigate to="/admin/services" replace />} />
      <Route path="/admin/services" element={<ManageServices />} />
      <Route path="/admin/*" element={<div>Coming soon</div>} />

      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
}

import { Navigate, Route, Routes } from "react-router-dom";
import Services from "./pages/public/Services";
import ServiceDetails from "./pages/public/ServiceDetails";
import DashboardLayout from "./components/layout/DashboardLayout";
import AdminServices from "./pages/admin/AdminServices";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/services" replace />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:id" element={<ServiceDetails />} />

      <Route path="/admin" element={<DashboardLayout />}>
        <Route index element={<Navigate to="/admin/services" replace />} />
        <Route path="services" element={<AdminServices />} />
        <Route path="*" element={<div>Coming soon</div>} />
      </Route>

      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
}

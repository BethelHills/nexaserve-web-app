import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Services from "./pages/public/Services";
import ServiceDetails from "./pages/public/ServiceDetails";
import BookService from "./pages/public/BookService";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageBookings from "./pages/admin/ManageBookings";
import ManageServices from "./pages/admin/ManageServices";
import ManageUsers from "./pages/admin/ManageUsers";
import UserDashboard from "./pages/user/UserDashboard";
import MyBookings from "./pages/user/MyBookings";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/services" />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/book/:id" element={<BookService />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/services" element={<ManageServices />} />
        <Route path="/admin/bookings" element={<ManageBookings />} />
        <Route path="/admin/users" element={<ManageUsers />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/dashboard/bookings" element={<MyBookings />} />
        <Route path="/dashboard/*" element={<UserDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

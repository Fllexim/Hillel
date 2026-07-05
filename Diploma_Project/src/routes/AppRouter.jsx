import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Products from "../pages/Products";
import Preview from "../pages/Preview";
import ProductDetails from "../pages/ProductDetails";

import ProtectedRoute from "../components/ProtectedRoute";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/products"
        element={
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        }
      />

      <Route
        path="/preview"
        element={
          <ProtectedRoute>
            <Preview />
          </ProtectedRoute>
        }
      />

      <Route
        path="/preview/:id"
        element={
          <ProtectedRoute>
            <ProductDetails />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

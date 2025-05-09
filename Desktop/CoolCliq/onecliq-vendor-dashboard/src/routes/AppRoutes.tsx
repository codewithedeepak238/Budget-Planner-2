import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
// import ShopsPage from '../pages/ShopsPage';  // when ready

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      {/* future protected routes */}
      {/* <Route path="/shops" element={
           <ProtectedRoute><ShopsPage/></ProtectedRoute>
         } /> */}

      {/* catch-all: redirect to login */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
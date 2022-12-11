import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ProtectedLayout } from '../components/ProtectedLayout';
import {
  Home,
  Logs,
  Signin,
  Signup,
  Trancas,
  Usuarios,
} from '../packages/pages';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={
            <ProtectedLayout>
              <Home />
            </ProtectedLayout>
          }
        />
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="/trancas" element={<Trancas />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="*" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;

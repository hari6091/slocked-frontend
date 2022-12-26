import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ProtectedLayout } from '../components/ProtectedLayout';
import {
  Home,
  Logs,
  NewLock,
  Signin,
  Signup,
  Trancas,
  SingleUser,
  Usuarios,
  SingleTranca,
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
        <Route path="/userpermissions" element={<SingleTranca />} />
        <Route path="/singleuser" element={<SingleUser />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/newlock" element={<NewLock />} />
        <Route path="*" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;

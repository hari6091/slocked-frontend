import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {
  ProtectedAdminLayout,
  ProtectedLayout,
} from '../components/ProtectedLayout';
import {
  Home,
  NewLock,
  Signin,
  Signup,
  Trancas,
  SingleUser,
  Usuarios,
  SingleTranca,
  EditUser,
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
        <Route
          path="/signup"
          element={
            <ProtectedAdminLayout>
              <ProtectedLayout>
                <Signup />
              </ProtectedLayout>
            </ProtectedAdminLayout>
          }
        />
        <Route
          path="/trancas"
          element={
            <ProtectedAdminLayout>
              <ProtectedLayout>
                <Trancas />
              </ProtectedLayout>
            </ProtectedAdminLayout>
          }
        />
        <Route
          path="/userpermissions/:id"
          element={
            <ProtectedAdminLayout>
              <ProtectedLayout>
                <SingleTranca />
              </ProtectedLayout>
            </ProtectedAdminLayout>
          }
        />
        <Route
          path="/singleuser/:id"
          element={
            <ProtectedAdminLayout>
              <ProtectedLayout>
                <SingleUser />
              </ProtectedLayout>
            </ProtectedAdminLayout>
          }
        />
        <Route
          path="/usuarios"
          element={
            <ProtectedAdminLayout>
              <ProtectedLayout>
                <Usuarios />
              </ProtectedLayout>
            </ProtectedAdminLayout>
          }
        />
        <Route
          path="/newlock"
          element={
            <ProtectedAdminLayout>
              <ProtectedLayout>
                <NewLock />
              </ProtectedLayout>
            </ProtectedAdminLayout>
          }
        />
        <Route
          path="/editUser/:id"
          element={
            <ProtectedAdminLayout>
              <ProtectedLayout>
                <EditUser />
              </ProtectedLayout>
            </ProtectedAdminLayout>
          }
        />
        <Route path="*" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;

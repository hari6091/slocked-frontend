import React from 'react';

import { useAuth } from '../../hooks/useAuth';

export function ProtectedLayout({ children }: { children: JSX.Element }) {
  const auth = useAuth();

  if (!auth.email) {
    return <h1>Faça login para continuar</h1>;
  }
  return children;
}

export function ProtectedAdminLayout({ children }: { children: JSX.Element }) {
  const auth = useAuth();

  if (!auth.email || auth.role !== 'admin') {
    return <h1>Apenas Administradores tem acesso a essa tela.</h1>;
  }
  return children;
}

import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { Button, Container } from './styles';

export function ProtectedLayout({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.email) {
    return (
      <Container>
        <h1>Faça login para continuar</h1>
        <Button onClick={() => navigate('/')}>Login</Button>
      </Container>
    );
  }
  return children;
}

export function ProtectedAdminLayout({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.email || auth.role !== 'admin') {
    return (
      <Container>
        <h1>Apenas Administradores tem acesso a essa tela.</h1>
        <Button onClick={() => navigate('/home')}>Home</Button>
      </Container>
    );
  }
  return children;
}

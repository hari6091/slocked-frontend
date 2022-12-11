import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Lock } from '@material-ui/icons';
import { Box, Grid } from '@mui/material';

import { useAuth } from '../../../hooks/useAuth';
import * as C from './styles';

function Signin() {
  const { authenticate } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!email || !senha) {
      setError('Preencha todos os campos');
      return;
    }
    try {
      await authenticate(email, senha);
      navigate('/home');
    } catch {
      setError('E-mail ou senha incorretos');
    }
  };

  return (
    <Grid
      container
      height="100vh"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <title>SLOCKED</title>

      <Grid
        container
        item
        xs={12}
        sm={12}
        md={4}
        direction="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Box maxWidth="400px">
          <C.Title>SLOCKED</C.Title>
          <C.Subtitle>
            Digite suas credenciais para acessar o sistema
          </C.Subtitle>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={8}
        container
        justifyContent="center"
        minWidth="400px"
      >
        <C.BoxLogin p="20px" boxShadow="0 1px 2px #0003">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            <Box bgcolor="white" borderRadius="100px" p="8px">
              <Lock style={{ fontSize: 50 }} />
            </Box>
            <C.Title2>Login</C.Title2>
          </Box>

          <Box display="flex" justifyContent="center" alignItems="center">
            <Box display="flex" flexDirection="column" gap={4} width="70%">
              <C.labelInput>Usuário</C.labelInput>
              <C.Input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <C.labelInput>Senha</C.labelInput>
              <C.Input
                type="password"
                value={senha}
                onChange={(e) => {
                  setSenha(e.target.value);
                }}
              />
              <C.labelError>{error}</C.labelError>
              <C.Button itemID="entrar" onClick={handleLogin}>
                Confirmar
              </C.Button>
            </Box>
          </Box>
        </C.BoxLogin>
      </Grid>
    </Grid>
  );
}

export default Signin;

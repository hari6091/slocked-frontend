import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Grid } from '@mui/material';

import { Header } from '../../../components';
import { useAuth } from '../../../hooks/useAuth';
import * as C from './styles';

function Home() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <title>SLOCKED - HOME</title>

      <Header />
      <Grid container justifyContent="space-between" mt="56px" p="40px">
        <Grid
          container
          item
          md={12}
          lg={5}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <C.CustomBox2 maxWidth="550px">
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-evenly"
              width="100%"
              alignItems="center"
            >
              <C.Title>Trancas:</C.Title>
              <Box
                display="flex"
                flexDirection="column"
                width="100%"
                alignItems="center"
                gap={2}
              >
                <Box display="flex" justifyContent="space-between" width="95%">
                  <C.Subtitle>Sala</C.Subtitle>
                  <C.Subtitle>ID</C.Subtitle>
                </Box>
                <C.Card>
                  <C.CardContent>Sala</C.CardContent>
                  <C.CardContent>ID</C.CardContent>
                </C.Card>
              </Box>
            </Box>
          </C.CustomBox2>
        </Grid>
        <Grid justifyContent="center" alignItems="center" textAlign="center">
          <Grid item md={12} lg={7}>
            <C.CustomBox border="1px solid #000">
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-evenly"
                alignItems="center"
                width="100%"
              >
                <Box textAlign="left" width="50%">
                  <C.Title>Usuário</C.Title>

                  <C.Subtitle>Cargo/Função:</C.Subtitle>
                  <C.Content>Professor</C.Content>

                  <C.Subtitle>Ingresso:</C.Subtitle>
                  <C.Content>DD/MM/AAAA</C.Content>

                  <C.Subtitle>Nome:</C.Subtitle>
                  <C.Content>Ciclano Fulano Beltrano</C.Content>
                </Box>
                <Box
                  bgcolor="#d9d9d9"
                  width="360px"
                  height="360px"
                  borderRadius="40px"
                />
              </Box>
              <Box width="70%" textAlign="center" display="flex">
                <Box width="50%" textAlign="start">
                  <C.Button2
                    onClick={() => {
                      navigate('/perfil:id');
                    }}
                  >
                    Ver Perfil
                  </C.Button2>
                </Box>
                <Box width="50%" textAlign="end">
                  <C.Button
                    onClick={() => {
                      logout();
                      navigate('/');
                    }}
                  >
                    Sair
                  </C.Button>
                </Box>
              </Box>
            </C.CustomBox>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;

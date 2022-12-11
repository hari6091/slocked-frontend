import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AddBox, DeleteForever } from '@material-ui/icons';
import { Box, Grid, IconButton } from '@mui/material';

import { Header } from '../../../components';
import { useAuth } from '../../../hooks/useAuth';
import * as C from './styles';

function SingleUser() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <title>SLOCKED - Single User</title>

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
                <Box display="flex" gap={15}>
                  <C.Subtitle>Sala</C.Subtitle>
                  <C.Subtitle>ID</C.Subtitle>
                  <C.Subtitle>Remover</C.Subtitle>
                </Box>
                <C.Card>
                  <Box
                    padding="12px"
                    width="100%"
                    display="flex"
                    alignItems="center"
                    gap={15}
                  >
                    <C.CardContent>C18</C.CardContent>
                    <C.CardContent>123123123</C.CardContent>
                    <IconButton>
                      <DeleteForever />
                    </IconButton>
                  </Box>
                </C.Card>
                <C.Button>
                  Adicionar Tranca <AddBox style={{ fontSize: '32px' }} />
                </C.Button>
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
                      navigate('/perfil');
                    }}
                  >
                    Editar Perfil
                  </C.Button2>
                </Box>
                <Box width="50%" display="flex" justifyContent="end">
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

export default SingleUser;

import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AddBox, DeleteForever } from '@material-ui/icons';
import { Box, Grid, IconButton } from '@mui/material';

import { Header } from '../../../components';
import { useAuth } from '../../../hooks/useAuth';
import * as C from './styles';

function SingleTranca() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <title>SLOCKED - Single Tranca</title>

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
              <C.Title>Sala ABCDEF</C.Title>
              <Box
                display="flex"
                flexDirection="column"
                width="100%"
                alignItems="center"
                gap={2}
              >
                <Box
                  width="100%"
                  display="flex"
                  justifyContent="space-around"
                  alignItems="center"
                  gap={15}
                >
                  <C.Subtitle>Nome do Usuário</C.Subtitle>
                  <C.Subtitle>Remover</C.Subtitle>
                </Box>
                <C.Card>
                  <Box
                    padding="12px"
                    width="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-around"
                    gap={15}
                  >
                    <C.CardContent>Nome do Usuário</C.CardContent>
                    <IconButton>
                      <DeleteForever />
                    </IconButton>
                  </Box>
                </C.Card>
                <C.Button>
                  Adicionar Usuário <AddBox style={{ fontSize: '32px' }} />
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
                justifyContent="left"
                alignItems="center"
                width="100%"
              >
                <Box textAlign="left" width="50%">
                  <C.Title>Sala</C.Title>

                  <C.Subtitle>Cadastrada em:</C.Subtitle>
                  <C.Content>DD/MM/AAAA</C.Content>

                  <C.Subtitle>Status:</C.Subtitle>
                  <C.Content>Fechada</C.Content>

                  <C.Subtitle>Usuários com acesso:</C.Subtitle>
                  <C.Content>10 funcionários</C.Content>
                </Box>
              </Box>
              <Box width="70%" textAlign="center" display="flex">
                <Box width="100%" textAlign="start">
                  <C.Button2
                    onClick={() => {
                      navigate('/perfil');
                    }}
                  >
                    Editar Informações
                  </C.Button2>
                </Box>
              </Box>
            </C.CustomBox>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default SingleTranca;

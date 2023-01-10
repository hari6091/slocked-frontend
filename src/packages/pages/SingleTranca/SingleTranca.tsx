import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AddBox, DeleteForever, Search } from '@material-ui/icons';
import { Box, Grid, IconButton, Modal, Typography } from '@mui/material';

import { Header } from '../../../components';
import * as C from './styles';

function SingleTranca() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

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
                <C.Button onClick={() => setOpen(true)}>
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
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Buscar Usuário:
          </Typography>
          <Box display="flex" flexDirection="column">
            <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
              <C.Input />
              <C.Button>
                <Search style={{ padding: '8px' }} />
              </C.Button>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column">
            <Box
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <Typography variant="subtitle1" component="h3">
                Sicrano Fulano Beltrano
              </Typography>

              <IconButton>
                <AddBox style={{ fontSize: '32px' }} />
              </IconButton>
            </Box>
            <Box
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <Typography variant="subtitle1" component="h3">
                Sicrano Fulano Beltrano
              </Typography>

              <IconButton>
                <AddBox style={{ fontSize: '32px' }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default SingleTranca;

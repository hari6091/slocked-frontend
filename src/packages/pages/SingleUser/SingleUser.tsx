import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { AddBox, DeleteForever, Search } from '@material-ui/icons';
import { Box, Grid, IconButton, Modal, Typography } from '@mui/material';

import { Header } from '../../../components';
import { useAuth } from '../../../hooks/useAuth';
import useProfile, { MyUser } from '../../../hooks/useProfile';
import { dataCadastro } from '../Home/Home';
import * as C from './styles';

function SingleUser() {
  const { logout } = useAuth();
  const { getSingleUser } = useProfile();
  const navigate = useNavigate();

  const [user, setUser] = useState<MyUser>();

  const { id } = useParams();

  const loadUser = useCallback(async () => {
    const getUser = await getSingleUser(id);
    setUser(getUser);
  }, [id, getSingleUser]);

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                <Box
                  width="100%"
                  display="flex"
                  justifyContent="space-around"
                  gap={5}
                >
                  <C.Button
                    onClick={() => {
                      setOpen(true);
                    }}
                  >
                    <Box display="flex" alignItems="center" gap={2}>
                      Add Tranca <AddBox style={{ fontSize: '32px' }} />
                    </Box>
                  </C.Button>
                  <C.Button
                    onClick={() => {
                      setOpen(true);
                    }}
                  >
                    Add Grupo de Trancas
                    <AddBox style={{ fontSize: '32px' }} />
                  </C.Button>
                </Box>
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
                  <C.Title>
                    Usuário
                    <C.Content>
                      {user?.role === 'admin'
                        ? 'Administrador'
                        : 'Usuário comum' ?? 'Carregando...'}
                    </C.Content>
                  </C.Title>

                  <C.Subtitle>Cargo/Função:</C.Subtitle>
                  <C.Content>
                    {user?.disciplinaOUcargo ?? 'Carregando...'}
                  </C.Content>

                  <C.Subtitle>Ingresso:</C.Subtitle>
                  <C.Content>{dataCadastro(user?.createdAt)}</C.Content>

                  <C.Subtitle>Nome:</C.Subtitle>
                  <C.Content>{user?.name ?? 'Carregando...'}</C.Content>
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
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Buscar Sala:
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
                Sala 123456
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
                Sala ABCDEF
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

export default SingleUser;

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { AddBox, DeleteForever, Search } from '@material-ui/icons';
import { Box, Grid, IconButton, Modal, Typography } from '@mui/material';

import { Header } from '../../../components';
import useProfile from '../../../hooks/useProfile';
import useSalas, { ISala } from '../../../hooks/useSalas';
import { dataCadastro } from '../Home/Home';
import * as C from './styles';

function SingleTranca() {
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const navigate = useNavigate();

  const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const { getSingleSala, deleteSala, deleteSalaUser } = useSalas();
  const { addUserSala, users } = useProfile();
  const [sala, setSala] = useState<ISala>();
  const [userSelectedId, setUserSelectedId] = useState<string>();

  const { id } = useParams();

  const loadSala = useCallback(async () => {
    const getSala = await getSingleSala(id);
    setSala(getSala);
  }, [id, getSingleSala]);

  useEffect(() => {
    loadSala();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeleteSala = async () => {
    await deleteSala(id);
    navigate('/trancas');
  };

  const handleGetUserIdAndOpenModal = async (userPressed) => {
    setUserSelectedId(userPressed);
    setOpenDeleteSalaUser(true);
  };

  const handleDeleteSalaUser = async () => {
    await deleteSalaUser(sala?.id, userSelectedId);
    setOpenDeleteSalaUser(false);
    loadSala();
  };

  const [openDeleteSalaUser, setOpenDeleteSalaUser] = useState(false);

  const [filter, setFilter] = useState<string>();

  const usersFiltrados = useMemo(() => {
    const lowerFilter = filter?.toLowerCase();
    return filter
      ? users?.filter((user) =>
          user.name.toLowerCase().includes(lowerFilter ?? ''),
        )
      : users;
  }, [filter, users]);

  const usersListados = sala?.users?.map((user) => {
    return user.name;
  });

  const handleAddSalaToUser = async (userId: string | undefined) => {
    await addUserSala(sala?.id, userId);
    loadSala();
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
          <C.CustomBox2 maxWidth="600px">
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-evenly"
              width="100%"
              alignItems="center"
            >
              <C.Title>{sala?.name}</C.Title>

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

                {sala?.users?.map((user) => {
                  return (
                    <C.Card key={user.name}>
                      <Box
                        padding="12px"
                        width="100%"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-around"
                        gap={15}
                      >
                        <C.CardContent>{user.name}</C.CardContent>
                        <Box width="20%">
                          <IconButton
                            onClick={() => {
                              handleGetUserIdAndOpenModal(user.salaUser.userId);
                            }}
                          >
                            <DeleteForever />
                          </IconButton>
                        </Box>
                      </Box>
                    </C.Card>
                  );
                })}
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
                <Box textAlign="left" width="70%">
                  <C.Title>Informações:</C.Title>

                  <C.Subtitle>Cadastrada no sistema em:</C.Subtitle>
                  <C.Content>{dataCadastro(sala?.createdAt)}</C.Content>

                  <C.Subtitle>Status:</C.Subtitle>
                  <C.Content>{sala?.status}</C.Content>

                  <C.Subtitle>Usuários com acesso:</C.Subtitle>
                  <C.Content>{sala?.users?.length} funcionários</C.Content>
                </Box>
              </Box>
              <Box
                width="100%"
                textAlign="center"
                display="flex"
                justifyContent="center"
              >
                <Box width="50%" textAlign="start">
                  <C.Button onClick={() => setOpen(true)}>
                    Adicionar Usuário <AddBox style={{ fontSize: '32px' }} />
                  </C.Button>
                </Box>
                <Box width="33%" textAlign="end">
                  <C.Button2
                    onClick={() => {
                      setOpenDelete(true);
                    }}
                  >
                    Deletar Sala
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
              <C.Input onChange={(e) => setFilter(e.target.value)} />
              <C.Button>
                <Search style={{ padding: '8px' }} />
              </C.Button>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column">
            {usersFiltrados
              ?.filter(
                (userAdicionado) =>
                  !usersListados?.includes(userAdicionado.name),
              )
              .map((user) => {
                return (
                  <Box
                    display="flex"
                    justifyContent="space-around"
                    alignItems="center"
                    key={user.id}
                  >
                    <Typography variant="subtitle1" component="h3" width="45%">
                      {user.name}
                    </Typography>

                    <Typography variant="subtitle1" component="h3" width="45%">
                      {user.disciplinaOUcargo}{' '}
                    </Typography>

                    <IconButton onClick={() => handleAddSalaToUser(user.id)}>
                      <AddBox style={{ fontSize: '32px' }} />
                    </IconButton>
                  </Box>
                );
              })}
          </Box>
        </Box>
      </Modal>

      <Modal
        open={openDelete}
        onClose={() => {
          setOpenDelete(false);
        }}
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign="center"
          >
            Tem certeza que quer deletar essa sala? Está ação não pode ser
            desfeita e TODOS os dados serão perdido para SEMPRE.
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-around"
            gap={1}
            mt="12px"
          >
            <C.Button
              onClick={() => {
                setOpenDelete(false);
              }}
            >
              Cancelar
            </C.Button>
            <C.Button2 onClick={handleDeleteSala}>
              Sim, quero deletar.
            </C.Button2>
          </Box>
        </Box>
      </Modal>

      <Modal
        open={openDeleteSalaUser}
        onClose={() => {
          setOpenDeleteSalaUser(false);
        }}
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign="center"
          >
            Tem certeza que quer deletar esse usuário deste sala?
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            gap={1}
            mt="12px"
          >
            <C.Button
              onClick={() => {
                setOpenDeleteSalaUser(false);
              }}
            >
              Cancelar
            </C.Button>
            <C.Button2 onClick={handleDeleteSalaUser}>
              Sim, quero deletar.
            </C.Button2>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default SingleTranca;

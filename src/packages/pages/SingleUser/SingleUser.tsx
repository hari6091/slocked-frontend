/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { AddBox, DeleteForever, Search } from '@material-ui/icons';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Box, Grid, IconButton, Modal, Typography } from '@mui/material';

import { Header } from '../../../components';
import useProfile, { MyUser, MyUserSalas } from '../../../hooks/useProfile';
import useSalas from '../../../hooks/useSalas';
import { dataCadastro } from '../Home/Home';
import * as C from './styles';

function SingleUser() {
  const {
    getSingleUser,
    deleteUser,
    getUserSalas,
    deleteUserSala,
    addUserSala,
    addUserSalaGroup,
  } = useProfile();
  const { salas } = useSalas();
  const navigate = useNavigate();

  const [filter, setFilter] = useState<string>();

  const [user, setUser] = useState<MyUser>();
  const [salaUser, setSalaUser] = useState<MyUserSalas[]>();
  const [salaSelectedId, setSalaSelectedId] = useState<string>();

  const [open, setOpen] = useState(false);
  const [grupoOpen, setGrupoOpen] = useState(false);
  const [openDeleteUser, setOpenDeleteUser] = useState(false);
  const [openDeleteUserSala, setOpenDeleteUserSala] = useState(false);

  const { id } = useParams();

  const loadUser = useCallback(async () => {
    const getUser = await getSingleUser(id);
    setUser(getUser);
  }, [id, getSingleUser]);

  const loadSalaUser = useCallback(async () => {
    const getUser = await getUserSalas(user?.id);
    setSalaUser(getUser);
  }, [getUserSalas, user?.id]);

  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => {
    loadSalaUser();
  }, [user]);

  const handleDeleteUser = async () => {
    await deleteUser(id);
    navigate('/usuarios');
  };

  const handleDeleteUserSala = async () => {
    await deleteUserSala(salaSelectedId, user?.id);
    setOpenDeleteUserSala(false);
    loadSalaUser();
  };

  const salasFiltradas = useMemo(() => {
    const lowerFilter = filter?.toLowerCase();
    return filter
      ? salas?.filter(
          (sala) =>
            sala.name.toLowerCase().includes(lowerFilter ?? '') ||
            sala.numero.toLowerCase().includes(lowerFilter ?? ''),
        )
      : salas;
  }, [filter, salas]);

  const handleAddUserToSala = async (salaId: string | undefined) => {
    await addUserSala(salaId, user?.id);
    loadSalaUser();
  };

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

  const salasListadas = salaUser?.map((sala) => {
    return sala.name;
  });

  const setGroup = new Set();

  const deduplicateGroups = salas?.filter((sala) => {
    const duplicatedGroup = setGroup.has(sala.grupo);
    setGroup.add(sala.grupo);
    return !duplicatedGroup;
  });

  const filterGroups = useMemo(() => {
    const lowerFilter = filter?.toLowerCase();
    return filter
      ? deduplicateGroups?.filter((sala) =>
          sala.grupo.toLowerCase().includes(lowerFilter ?? ''),
        )
      : deduplicateGroups;
  }, [filter, deduplicateGroups]);

  const handleAddGroupUserToSala = async (grupo: string | undefined) => {
    await addUserSalaGroup(grupo, user?.id);
    loadSalaUser();
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
                    setGrupoOpen(true);
                  }}
                >
                  Add Grupo de Trancas
                  <AddBox style={{ fontSize: '32px' }} />
                </C.Button>
              </Box>
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
                {salaUser?.map((sala) => {
                  return (
                    <C.Card key={sala.name}>
                      <Box
                        padding="12px"
                        width="100%"
                        maxWidth="550px"
                        display="flex"
                        alignItems="center"
                        gap={8}
                      >
                        <Box width="40%">
                          <C.CardContent>{sala.name}</C.CardContent>
                        </Box>
                        <Box width="40%">
                          <C.CardContent>{sala.numero}</C.CardContent>
                        </Box>
                        <Box>
                          <IconButton
                            onClick={() => {
                              setSalaSelectedId(sala.id);
                              setOpenDeleteUserSala(true);
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
                justifyContent="space-evenly"
                alignItems="center"
                width="100%"
              >
                <Box textAlign="left" width="50%">
                  <C.Title>
                    Usuário
                    <C.Subtitle>Nome:</C.Subtitle>
                    <C.Content>{user?.name ?? 'Carregando...'}</C.Content>
                  </C.Title>

                  <C.Subtitle>Cargo/Função:</C.Subtitle>
                  <C.Content>
                    {user?.disciplinaOUcargo ?? 'Carregando...'}
                  </C.Content>

                  <C.Subtitle>Ingresso:</C.Subtitle>
                  <C.Content>{dataCadastro(user?.createdAt)}</C.Content>

                  <C.Content>
                    {user?.role === 'admin'
                      ? 'Administrador'
                      : 'Usuário comum' ?? 'Carregando...'}
                  </C.Content>
                </Box>
                <Box>
                  <AccountCircleIcon
                    style={{
                      width: '360px',
                      height: '360px',
                      color: '#d9d9d9',
                    }}
                  />
                </Box>
              </Box>
              <Box
                width="100%"
                textAlign="center"
                display="flex"
                justifyContent="space-around"
              >
                <Box width="60%" textAlign="start">
                  <C.Button
                    onClick={() => {
                      navigate(`/editUser/${user?.uuid}`);
                    }}
                  >
                    Editar Perfil
                  </C.Button>
                </Box>
                <Box width="20%" display="flex" justifyContent="end">
                  <C.Button2
                    onClick={() => {
                      setOpenDeleteUser(true);
                    }}
                  >
                    Deletar Usuário
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
            Buscar Sala:
          </Typography>
          <Box display="flex" flexDirection="column">
            <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
              <C.Input
                onChange={(e) => {
                  setFilter(e.target.value);
                }}
              />
              <C.Button>
                <Search style={{ padding: '8px' }} />
              </C.Button>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column">
            {salasFiltradas
              ?.filter(
                (salaAdicionada) =>
                  !salasListadas?.includes(salaAdicionada.name),
              )
              .map((sala) => {
                return (
                  <Box
                    display="flex"
                    justifyContent="space-around"
                    alignItems="center"
                    key={sala.id}
                  >
                    <Box width="40%">
                      <Typography variant="subtitle1" component="h3">
                        {sala.name}
                      </Typography>
                    </Box>
                    <Box width="40%">
                      <Typography variant="subtitle1" component="h3">
                        {sala.numero}
                      </Typography>
                    </Box>
                    <Box>
                      <IconButton onClick={() => handleAddUserToSala(sala.id)}>
                        <AddBox style={{ fontSize: '32px' }} />
                      </IconButton>
                    </Box>
                  </Box>
                );
              })}
          </Box>
        </Box>
      </Modal>

      <Modal
        open={grupoOpen}
        onClose={() => {
          setGrupoOpen(false);
        }}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Buscar Grupo de Salas:
          </Typography>
          <Box display="flex" flexDirection="column">
            <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
              <C.Input
                onChange={(e) => {
                  setFilter(e.target.value);
                }}
              />
              <C.Button>
                <Search style={{ padding: '8px' }} />
              </C.Button>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column">
            {filterGroups?.map((sala) => {
              return (
                <Box
                  display="flex"
                  justifyContent="space-around"
                  alignItems="center"
                  key={sala.uuid}
                >
                  <Box width="80%">
                    <Typography variant="subtitle1" component="h3">
                      {sala.grupo}
                    </Typography>
                  </Box>
                  <Box>
                    <IconButton
                      onClick={() => handleAddGroupUserToSala(sala.grupo)}
                    >
                      <AddBox style={{ fontSize: '32px' }} />
                    </IconButton>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Modal>

      <Modal
        open={openDeleteUser}
        onClose={() => {
          setOpenDeleteUser(false);
        }}
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign="center"
          >
            Tem certeza que quer deletar esse usuário? Está ação não pode ser
            desfeita e TODOS os dados serão perdido para SEMPRE.
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            gap={5}
            mt="12px"
          >
            <C.Button
              onClick={() => {
                setOpenDeleteUser(false);
              }}
            >
              Cancelar
            </C.Button>
            <Box width="30%">
              <C.Button2 onClick={handleDeleteUser}>
                Sim, quero deletar.
              </C.Button2>
            </Box>
          </Box>
        </Box>
      </Modal>

      <Modal
        open={openDeleteUserSala}
        onClose={() => {
          setOpenDeleteUserSala(false);
        }}
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign="center"
          >
            Tem certeza que quer deletar essa sala deste usuário?
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            gap={1}
            mt="12px"
          >
            <Box width="70%">
              <C.Button
                onClick={() => {
                  setOpenDeleteUserSala(false);
                }}
              >
                Cancelar
              </C.Button>
            </Box>
            <Box width="30%">
              <C.Button2 onClick={handleDeleteUserSala}>
                Sim, quero deletar.
              </C.Button2>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default SingleUser;

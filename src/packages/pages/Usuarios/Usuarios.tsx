import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PersonAdd, Search } from '@material-ui/icons';
import { Box } from '@mui/material';

import { Header } from '../../../components';
import useProfile, { MyUser } from '../../../hooks/useProfile';
import { Card } from '../../ui-kit';
import * as C from './styles';

function Usuarios() {
  const navigate = useNavigate();

  const { users } = useProfile();

  const [filter, setFilter] = useState<string>();

  const usersFiltrados = useMemo(() => {
    const lowerFilter = filter?.toLowerCase();
    return filter
      ? users?.filter(
          (user) =>
            user.name.toLowerCase().includes(lowerFilter ?? '') ||
            user.email.toLowerCase().includes(lowerFilter ?? ''),
        )
      : users;
  }, [filter, users]);

  const card = (user: MyUser) => (
    <Card
      key={user.id}
      title={`Nome: ${user.name}`}
      subtitle={`Email: ${user.email}`}
      acesso={`Acesso: ${user.role}`}
      info={`Cargo: ${user.disciplinaOUcargo}`}
      buttonContent="Ver acessos"
      onClick={() => {
        navigate(`/singleuser/${user.uuid}`);
      }}
    />
  );
  return (
    <>
      <title>SLOCKED - Usuários</title>

      <Header />
      <C.CustomGrid container mt="56px" p="32px">
        <C.Title>Usuários</C.Title>
        <Box
          width="100%"
          display="flex"
          justifyContent="space-around"
          alignItems="center"
        >
          <Box width="40%">
            <Box display="flex" flexDirection="column">
              <C.Subtitle>Pesquisar usuário pelo nome ou email</C.Subtitle>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                gap={1}
              >
                <C.Input onChange={(e) => setFilter(e.target.value)} />
                <C.Button>
                  <Search style={{ padding: '8px' }} />
                </C.Button>
              </Box>
            </Box>
          </Box>

          <Box
            width="40%"
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
            justifyContent="center"
          >
            <C.Subtitle>Adicionar um novo usuário</C.Subtitle>
            <C.Button
              onClick={() => {
                navigate('/signup');
              }}
            >
              <PersonAdd style={{ fontSize: '28px' }} />
              Novo Usuário
            </C.Button>
          </Box>
        </Box>
        <Box
          p="32px"
          display="flex"
          gap={5}
          flexWrap="wrap"
          justifyContent="center"
        >
          {usersFiltrados?.map((user) => {
            return card(user);
          })}
        </Box>
      </C.CustomGrid>
    </>
  );
}

export default Usuarios;

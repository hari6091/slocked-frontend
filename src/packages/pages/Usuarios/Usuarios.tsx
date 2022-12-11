import React from 'react';
import { useNavigate } from 'react-router-dom';

import { PersonAdd, Search } from '@material-ui/icons';
import { Box } from '@mui/material';

import { Header } from '../../../components';
import { Card } from '../../ui-kit';
import * as C from './styles';

function Usuarios() {
  const navigate = useNavigate();

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
              <C.Subtitle>Pesquisar usuário por nome ou matricula</C.Subtitle>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                gap={1}
              >
                <C.Input />
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
          <Card
            title="Username"
            subtitle="0000000"
            info="Lá ele"
            buttonContent="Ver permissão de acesso"
            onClick={() => {
              navigate('/userpermissions:id');
            }}
          />
        </Box>
      </C.CustomGrid>
    </>
  );
}

export default Usuarios;

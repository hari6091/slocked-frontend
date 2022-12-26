import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Lock, Search } from '@material-ui/icons';
import { Box } from '@mui/material';

import { Header } from '../../../components';
import { Card } from '../../ui-kit';
import * as C from './styles';

function Trancas() {
  const navigate = useNavigate();

  return (
    <>
      <title>SLOCKED - Trancas</title>

      <Header />
      <C.CustomGrid container mt="56px" p="32px">
        <C.Title>Trancas</C.Title>
        <Box
          width="100%"
          display="flex"
          justifyContent="space-around"
          alignItems="center"
        >
          <Box width="40%">
            <Box display="flex" flexDirection="column">
              <C.Subtitle>Pesquisar tranca por sala ou id</C.Subtitle>
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
            <C.Subtitle>Cadastrar uma nova tranca</C.Subtitle>
            <C.Button
              onClick={() => {
                navigate('/newlock');
              }}
            >
              <Lock style={{ fontSize: '28px' }} />
              Nova Tranca
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
            title="Sala x"
            subtitle="0000000"
            info="Lá ele"
            buttonContent="Ver usuários com acesso"
            onClick={() => {
              navigate('/userpermissions');
            }}
          />
        </Box>
      </C.CustomGrid>
    </>
  );
}

export default Trancas;

import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';

import { Header } from '../../../components';
import { Card } from '../../ui-kit';
import * as C from './styles';

function Logs() {
  const navigate = useNavigate();

  return (
    <>
      <title>SLOCKED - Logs</title>

      <Header />
      <C.CustomGrid container mt="56px" p="32px">
        <Box>
          <C.Title>Logs</C.Title>
          <Box
            p="32px"
            display="flex"
            gap={5}
            flexWrap="wrap"
            justifyContent="center"
          >
            <Card
              title="Log 001"
              buttonContent="Ver Log"
              onClick={() => {
                navigate('/verlog');
              }}
            />
          </Box>
        </Box>
      </C.CustomGrid>
    </>
  );
}

export default Logs;

import React from 'react';

import { Box } from '@mui/material';

import { Header } from '../../../components';
import { Card } from '../../ui-kit';
import * as C from './styles';

function Logs() {
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
            <Card title="Log 001" />
          </Box>
        </Box>
      </C.CustomGrid>
    </>
  );
}

export default Logs;

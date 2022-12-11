import React from 'react';

import { Box } from '@mui/material';

import { Link } from './styles';

function HeaderWebContent() {
  return (
    <Box display="flex" justifyContent="space-between" width="75%">
      <Link data-testid="home" href="/home" underline="none" color="#fff">
        Home
      </Link>
      <Link
        data-testid="horarios"
        href="/usuarios"
        underline="none"
        color="#fff"
      >
        Usuários
      </Link>
      <Link itemID="contatos" href="/trancas" underline="none" color="#fff">
        Trancas
      </Link>
      <Link itemID="contatos" href="/logs" underline="none" color="#fff">
        Logs
      </Link>
    </Box>
  );
}

export default HeaderWebContent;

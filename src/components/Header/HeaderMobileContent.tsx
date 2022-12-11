import React, { useState } from 'react';

import {
  Home,
  Lock,
  ExitToApp,
  NotificationImportant,
  People,
} from '@material-ui/icons';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton, Popover } from '@mui/material';

import { LinkMobile } from './styles';

function HeaderMobileContent({ onClick }: { onClick?: () => void }) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const open = Boolean(anchorEl);
  const id = open ? 'popover' : undefined;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleClick}
        data-testid="hamburger-button"
      >
        <MenuIcon
          style={{
            fontSize: '2.5rem',
            color: '#fff',
            marginRight: '8px',
          }}
        />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box display="flex" flexDirection="column" p="24px" gap={3}>
          <Box display="flex" flexDirection="row" gap={1}>
            <Home />
            <LinkMobile
              data-testid="home-popover"
              href="/home"
              underline="none"
              color="#000"
            >
              Home
            </LinkMobile>
          </Box>
          <Box display="flex" flexDirection="row" gap={1}>
            <People />
            <LinkMobile
              data-testid="horarios-popover"
              href="/usuarios"
              underline="none"
              color="#000"
            >
              Usuários
            </LinkMobile>
          </Box>
          <Box display="flex" flexDirection="row" gap={1}>
            <Lock />
            <LinkMobile
              data-testid="contatos-popover"
              href="/trancas"
              underline="none"
              color="#000"
            >
              Trancas
            </LinkMobile>
          </Box>
          <Box display="flex" flexDirection="row" gap={1}>
            <NotificationImportant />
            <LinkMobile
              data-testid="contatos-popover"
              href="/logs"
              underline="none"
              color="#000"
            >
              Logs
            </LinkMobile>
          </Box>
          <Box display="flex" flexDirection="row" gap={1}>
            <ExitToApp />
            <LinkMobile
              data-testid="sair-popover"
              href="/"
              underline="none"
              color="#000"
              onClick={onClick}
            >
              Sair
            </LinkMobile>
          </Box>
        </Box>
      </Popover>
    </>
  );
}

export default HeaderMobileContent;

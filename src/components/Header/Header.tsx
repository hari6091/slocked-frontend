import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { Lock } from '@material-ui/icons';
import { Box, Grid } from '@mui/material';

import HeaderMobileContent from './HeaderMobileContent';
import HeaderWebContent from './HeaderWebContent';
import { CustomGrid } from './styles';

function Header({ onClick }: { onClick?: () => void }) {
  const isDesktop = useMediaQuery({ minWidth: '1000px' });

  return (
    <Grid container justifyContent="center">
      <Box width="70%">
        <CustomGrid
          container
          item
          xs={12}
          display="flex"
          alignItems="center"
          width="100%"
          py="16px"
          px={isDesktop ? 'auto' : '32px'}
          justifyContent={isDesktop ? 'space-evenly' : 'space-between'}
        >
          <Box bgcolor="white" borderRadius="100px" p="8px">
            <Lock style={{ fontSize: 50 }} />
          </Box>
          {isDesktop ? (
            <HeaderWebContent />
          ) : (
            <HeaderMobileContent onClick={onClick} />
          )}
        </CustomGrid>
      </Box>
    </Grid>
  );
}

export default Header;

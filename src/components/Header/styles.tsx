import { Link as CustomLink, Grid } from '@mui/material';
import styled from 'styled-components';

export const Link = styled(CustomLink)`
  font-size: 2rem;
  font-weight: 700;
  font-family: 'Roboto';
`;

export const LinkMobile = styled(CustomLink)`
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Roboto';
`;

export const CustomGrid = styled(Grid)`
  font-size: 1.2rem;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.Primary900};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.Neutral0};
`;

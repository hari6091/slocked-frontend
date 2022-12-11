import { Grid } from '@mui/material';
import styled from 'styled-components';

export const Title = styled.h1`
  font: ${({ theme }) => theme.typography.Field};
  color: ${({ theme }) => theme.colors.Neutral0};
`;

export const Subtitle = styled.p`
  font: ${({ theme }) => theme.typography.Text};
  color: ${({ theme }) => theme.colors.Neutral0};
  font-size: 24px;
`;

export const CustomGrid = styled(Grid)`
  font-size: 1.2rem;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.Primary900};
  border-radius: 15px;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 15px;
  border: none;
  height: 32px;
  font: ${({ theme }) => theme.typography.Text};
  padding: 12px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  width: auto;
  height: 56px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.Primary500};
  border: none;
  gap: 12px;
  font: ${({ theme }) => theme.typography.Text};
  color: ${({ theme }) => theme.colors.Neutral0};
  cursor: pointer;
  :hover {
    filter: brightness(90%);
  }
`;

import { Box } from '@mui/material';
import styled from 'styled-components';

export const Title = styled.h1`
  font: ${({ theme }) => theme.typography.Field};
  font-size: 56px;
  color: ${({ theme }) => theme.colors.Primary500};
`;

export const Title2 = styled.h1`
  font: ${({ theme }) => theme.typography.Field};
  color: ${({ theme }) => theme.colors.Neutral0};
`;

export const Subtitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #000;
`;

export const labelError = styled.label`
  font-size: 20px;
  color: red;
`;

export const BoxLogin = styled(Box)`
  background-color: ${({ theme }) => theme.colors.Primary900};
  height: 70vh;
  width: 70vh;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Input = styled.input`
  border-radius: 15px;
  border: 1px;
  height: 32px;
  font: ${({ theme }) => theme.typography.Text};
  padding: 12px;
`;

export const labelInput = styled.label`
  font: ${({ theme }) => theme.typography.Text};
  font-size: 28px;
  text-align: left;
  color: ${({ theme }) => theme.colors.Neutral0};
`;

export const Button = styled.button`
  height: 48px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.Primary500};
  border: none;
  font: ${({ theme }) => theme.typography.Text};
  color: ${({ theme }) => theme.colors.Neutral0};
`;

import { Box } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 64px;
  color: ${({ theme }) => theme.colors.Neutral0};
`;

export const Subtitle = styled.p`
  font: ${({ theme }) => theme.typography.Strong};
  color: ${({ theme }) => theme.colors.Neutral0};
  font-size: 32px;
`;

export const Content = styled.p`
  font: ${({ theme }) => theme.typography.Text};
  color: ${({ theme }) => theme.colors.Neutral0};
  font-size: 28px;
`;

export const Card = styled.div`
  font: ${({ theme }) => theme.typography.Text};
  background-color: ${({ theme }) => theme.colors.Neutral0};
  color: #000;
  width: 100%;
  height: 100px;
  display: flex;
  border-radius: 25px;
  justify-content: space-between;
  align-items: center;
  max-width: 550px;
`;

export const CardContent = styled.p`
  font: ${({ theme }) => theme.typography.Text};
  color: #000;
  font-size: 28px;
  padding-left: 12px;
  padding-right: 12px;
`;

export const CustomBox = styled(Box)`
  background-color: ${({ theme }) => theme.colors.Primary900};
  padding: 32px;
  border-radius: 12px;
  width: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const CustomBox2 = styled(Box)`
  background-color: ${({ theme }) => theme.colors.Primary900};
  padding: 32px;
  border-radius: 12px;
  width: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  height: 48px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.Primary500};
  border: none;
  font: ${({ theme }) => theme.typography.Text};
  color: ${({ theme }) => theme.colors.Neutral0};
  cursor: pointer;
  :hover {
    filter: brightness(90%);
  }
`;

export const Button2 = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.Neutral0};
  border: none;
  font: ${({ theme }) => theme.typography.Text};
  color: #000;
  cursor: pointer;
  :hover {
    filter: brightness(90%);
  }
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 15px;
  height: 20px;
  font: ${({ theme }) => theme.typography.Text};
  padding: 12px;
`;

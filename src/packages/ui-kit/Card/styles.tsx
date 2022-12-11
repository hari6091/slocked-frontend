import styled from 'styled-components';

export const Card = styled.div`
  width: 220px;
  background: ${({ theme }) => theme.colors.Neutral500};
  border-radius: 10px;
  border: none;
  display: flex;
  justify-content: center;
  text-align: left;
  align-items: flex-start;
  flex-direction: column;
  padding: 8px;
`;

export const Title = styled.p`
  font: ${({ theme }) => theme.typography.Text};
  font-weight: bold;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 52px;
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

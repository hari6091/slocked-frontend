import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Button = styled.button`
  height: 52px;
  width: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
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

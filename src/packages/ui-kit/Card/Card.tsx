import React from 'react';

import { Box } from '@mui/material';

import * as Styled from './styles';

export interface CardProps {
  title: string;
  subtitle?: string;
  acesso?: string;
  info?: string;
  grupo?: string;
  buttonContent?: string;
  onClick?: () => void;
}

function Card({
  title,
  subtitle,
  acesso,
  info,
  grupo,
  buttonContent,
  onClick,
}: CardProps) {
  const isPorta = acesso === 'ATIVO' || acesso === 'INATIVO';

  return (
    <Styled.Card data-testid="Card">
      <Styled.Title>{title}</Styled.Title>
      <Styled.Title>{subtitle}</Styled.Title>
      <Styled.Title>{grupo}</Styled.Title>
      {isPorta ? (
        <Box
          width="50%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Styled.Title>{acesso}</Styled.Title>
          <Box
            width="15px"
            height="15px"
            borderRadius="15px"
            bgcolor={acesso === 'ATIVO' ? 'green' : 'red'}
          />
        </Box>
      ) : (
        <Styled.Title>{acesso}</Styled.Title>
      )}
      <Styled.Title>{info}</Styled.Title>
      {buttonContent && (
        <Styled.Button onClick={onClick}>{buttonContent}</Styled.Button>
      )}
    </Styled.Card>
  );
}

export default Card;

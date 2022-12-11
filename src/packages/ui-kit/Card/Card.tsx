import React from 'react';

import * as Styled from './styles';

export interface CardProps {
  title: string;
  subtitle?: string;
  info?: string;
  buttonContent: string;
  onClick: () => void;
}

function Card({ title, subtitle, info, buttonContent, onClick }: CardProps) {
  return (
    <Styled.Card data-testid="Card">
      <Styled.Title>{title}</Styled.Title>
      <Styled.Title>{subtitle}</Styled.Title>
      <Styled.Title>{info}</Styled.Title>
      <Styled.Button onClick={onClick}>{buttonContent}</Styled.Button>
    </Styled.Card>
  );
}

export default Card;

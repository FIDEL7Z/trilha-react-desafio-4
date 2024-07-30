
import React from 'react';
import { ButtonContainer } from './styles';
import { IButtonProps } from './types';

const Button: React.FC<IButtonProps> = ({ title, onClick, isvalid, disabled, ...props }) => {
  return (
    <ButtonContainer onClick={onClick} isvalid={isvalid} disabled={disabled} {...props}>
      {title}
    </ButtonContainer>
  );
};

export default Button;

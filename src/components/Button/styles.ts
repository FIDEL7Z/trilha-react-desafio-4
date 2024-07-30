import styled from 'styled-components';

interface ButtonContainerProps {
  isvalid?: boolean;
  disabled?: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100%;
  height: 42px;
  background-color: ${(props) => (props.isvalid && !props.disabled ? '#81259D' : '#CCC')};
  color: #FFF;
  border: 1px solid #81259D;
  border-radius: 21px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  &:hover {
    opacity: ${(props) => (props.disabled ? 0.6 : 0.9)};
  }
`;

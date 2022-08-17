import { ReactNode } from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowRightIcon } from '../../assets/arrow-right.svg';

interface ButtonProps {
  children: ReactNode;
}

const TextStyled = styled.div`
  padding: 0 34px;
`;

const ButtonStyled = styled.button`
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 16px;
  background: #ecab03;
  border-radius: 4px;
  border: none;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;

  color: #ffffff;
  mix-blend-mode: normal;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  box-shadow: 0 0 0 #fff;
  transition: box-shadow 200ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    box-shadow: 0 0 8px #eee;
  }

  &:active {
    box-shadow: 0 0 4px #eee;
  }
`;

const Button = ({ children }: ButtonProps) => {
  return (
    <ButtonStyled>
      <TextStyled>{children}</TextStyled>
      <ArrowRightIcon />
    </ButtonStyled>
  );
};

export default Button;

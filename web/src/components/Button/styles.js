import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  border: 0;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  padding: 0.75rem;

  font-family:  "Poppins";
  font-size: 0.875rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  
  display: flex;
  align-items: center;
justify-content: center;
gap: 5px;

  font-weight: 500;

  transition: .2s background;
  
  &:hover {
    background: ${({ theme }) => theme.COLORS.TOMATO_200};
  }

  &:disabled {
    background: ${({ theme }) => theme.COLORS.TOMATO_400};
    cursor: not-allowed;
  }

  


`;

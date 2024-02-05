import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  
`;

export const DropButton = styled.div`
  width: 100%;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 5px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.20);

  position: relative;
  z-index: 1;

  background: ${({ theme }) => theme.COLORS.DARK_900};

  font-family: "Roboto";
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  
`;

export const DropList = styled.div`
  background: ${({ theme }) => theme.COLORS.DARK_1000};
  font-family: "Roboto";
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  width: 100%;
  position: absolute;
  border-radius: 0 0 5px 5px;
    
    top: 94%;
  > div {
    padding: 1rem;
  }


`;

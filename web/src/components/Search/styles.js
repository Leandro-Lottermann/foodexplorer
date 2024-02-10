import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    

    background: ${({ theme }) => theme.COLORS.DARK_900};
    width: 580px;
    padding: 16px;

    border-radius: 5px;

    > svg {
      display: block;
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    > input {
      display: block;
      background: none;
      border: none;
      width: 300px;
      color: ${({ theme }) => theme.COLORS.LIGHT_500};

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
      }
    }
  }
`;

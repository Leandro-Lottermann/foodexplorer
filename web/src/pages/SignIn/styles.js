import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  
  ///

  > div {
    display: flex;

    gap: 11px;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: Roboto;
    font-size: 37.243px;
    font-weight: 700;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: row;
    justify-content: space-around;

    > div {
      gap: 19px;
      transform: translateY(-50px);
    }
  }
`;

export const FormSignIn = styled.form`
  width: 316px;
  margin-top: 73px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > h1 {
    display: none;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    background: ${({ theme }) => theme.COLORS.DARK_700};
    width: 476px;
    padding: 64px;

    border-radius: 16px;
    > h1 {
      display: inline-block;
      color: var(--Light-Light-100, #fff);
      text-align: center;

      font-family: Poppins;
      font-size: 2rem;

      font-weight: 500;
    }
  }
`;

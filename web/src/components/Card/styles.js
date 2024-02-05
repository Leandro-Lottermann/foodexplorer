import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  position: relative;

  height: 292px;
  width: 210px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  background: ${({ theme }) => theme.COLORS.DARK_200};
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};

  padding: 24px;

  > svg {
    fill: ${({ theme }) => theme.COLORS.LIGHT_300};
    position: absolute;
    right: 12px;
    top: 12px;
  }

  > img {
    width: 88px;
  }

  > h1 {
    font-family: Poppins;
    font-size: 14px;

    font-weight: 500;
  }

  > span {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-family: Roboto;
    font-size: 1rem;
    letter-spacing: 0.5px;
  }

  

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;


    > div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
  }
  }
 

  > p {
    display: none;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    height: 462px;
    width: 304px;
    gap: 15px;

    > img {
      width: 176px;
    }

    > h1 {
      font-size: 1.5rem;
    }

    > span {
      font-size: 2rem;
    }
    > p {
      display: block;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};

      font-family: Roboto;
      text-align: center;
      font-size: 0.875rem;
    }

    > div {
      flex-direction: row;
      padding: 0 25px;
      gap: 15px;

      > div {
        font-size: 1.25rem;
      }
    }

    > svg {
      top: 16px;
      right: 16px;
    }
  }
`;




import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";
import { SignOut } from "@phosphor-icons/react";


export const Container = styled.header`
  grid-area: header;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background: ${({ theme }) => theme.COLORS.DARK_700};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px;


 > button {
  display: none;
 }

 > svg:last-child {
  display: none;
 }

  > a {
    display: flex;

    align-items: center;
    justify-content: center;

    > div {
      display: flex;
      align-items: center;
      justify-content: center;

      > img {
        width: 24px;
      }

      > h1 {
        font-family: Roboto;
        font-size: 1.375rem;
        font-weight: 700;
        margin-left: 11px;
        white-space: nowrap;
        line-break: anywhere;
      }
    }

    > p {
      color: ${({ theme }) => theme.COLORS.CAKE_200};
      font-family: Roboto;
      font-size: 0.75rem;
      margin-left: 11px;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
  justify-content: space-evenly;
 

   > svg:first-child {
      display: none;
    }
> svg:last-child {
  display: block;
 }


    > a {
      flex-direction: column;
      align-items: flex-end;
      > div {
        > h1 {
          font-size: 1.5rem;
        }
      }
    }

    > button {
      display: flex;
      
      max-width: 216px;
      
    }
  }
`;

export const Cart = styled.div`
  position: relative;

  > span {
    position: absolute;

    top: -15%;
    right: -15%;
    width: 20px;
    height: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.COLORS.TOMATO_100};
    border-radius: 50%;

    font-family: Poppins;
    font-size: 0.875rem;

    font-weight: 500;

    
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      display: none;
    }
`;

export const Search = styled.div`
  display: none;
  > svg {
    display: none;
  }

  > input {
    display: none;
  }

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

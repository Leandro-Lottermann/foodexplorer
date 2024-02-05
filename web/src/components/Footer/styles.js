import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  grid-area: footer;

  > div {
    
    display: flex;

    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
    font-family: Roboto;
    font-size: 1rem;
    font-weight: 700;
    line-height: normal;

    > img {
      width: 22px;
      margin-right: 11px;
    }
  }

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    text-align: right;
    font-family: Roboto;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-rows: 114px auto 77px;
  grid-template-columns: 100%;
  grid-template-areas:
    "header"
    "content"
    "footer";

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    grid-template-rows: 104px auto 77px;
  }
`;

export const Content = styled.div`
  grid-area: content;
  padding: 44px 16px 24px 24px;

  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    margin-top: 62px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

export const Banner = styled.span`
  position: relative;
  height: 120px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);

  > img {
    position: absolute;

    bottom: 0;
    left: -30px;

    width: 191px;
  }

  > section {
    align-self: flex-end;
    font-family: Poppins;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    max-width: 215px;
    font-size: 0.75rem;
    > h1 {
      font-size: 1.125rem;
      font-weight: 600;
    }
  }
`;

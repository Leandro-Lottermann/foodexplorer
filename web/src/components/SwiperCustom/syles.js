import styled from "styled-components";
import { Swiper } from "swiper/react";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
     width: 100%;

     > h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-family: Poppins;
      font-weight: 400;
      font-size: 1.125rem;
      margin-bottom: 24px;
     }

     @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      > h1 {
        font-size: 2rem;
      }

     }
`

export const MeuSwiper = styled(Swiper)`
  > div > div {
    width: auto;
  }

  .swiper-button-prev {
    display: none;
  }

  .swiper-button-next {
    display: none;
  }

`
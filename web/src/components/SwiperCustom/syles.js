import styled from "styled-components";
import { Swiper } from "swiper/react";

export const Container = styled.div`
     width: 100%;

     > h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-family: Poppins;
      font-weight: 400;
      font-size: 1.125rem;
      margin-bottom: 24px;
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
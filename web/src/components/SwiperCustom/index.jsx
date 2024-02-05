import { Container, MeuSwiper } from "./syles";
import { Card } from "../Card";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {  SwiperSlide } from "swiper/react";
import { Pagination, Navigation,} from "swiper/modules";

export function SwiperCustom({ title, dishes }) {
  return (
    <Container>
      <h1>{title}</h1>
      <MeuSwiper
      navigation={true}
      modules={[ Navigation]}
      slidesPerView="auto"
      spaceBetween={16}
      
      
      >
        {dishes.map((d) => (
          <SwiperSlide key={d.id} >
            <Card name={d.name} img={d.img} price={d.price} favorited={d.favorited} description={d.description}/>
          </SwiperSlide>
        ))}
      </MeuSwiper>
    </Container>
  );
}

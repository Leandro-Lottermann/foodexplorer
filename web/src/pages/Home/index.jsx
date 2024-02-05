import { Container, Content, Banner } from "./styles";

import imgBanner from "../../assets/img-banner.png";
import imgTest from "../../assets/Mask-group-1.png";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SwiperCustom } from "../../components/SwiperCustom";





export function Home() {
  const dishes = [
    {id: 1, name: "Salada de Atum", description: "Delecioso atum temperado com alho e óleo",  img:  imgTest, price: 22.59, favorited: false},
    {id: 2, name: "Salada de Atum", description: "Delecioso atum temperado com alho e óleo",  img:  imgTest, price: 22.59, favorited: false},
    {id: 3, name: "Salada de Atum", description: "Delecioso atum temperado com alho e óleo",  img:  imgTest, price: 22.59, favorited: false},
    {id: 4, name: "Salada de Atum", description: "Delecioso atum temperado com alho e óleo",  img:  imgTest, price: 22.59, favorited: false},
    {id: 5, name: "Salada de Atum", description: "Delecioso atum temperado com alho e óleo",  img:  imgTest, price: 22.59, favorited: true},
    {id: 6, name: "Salada de Atum", description: "Delecioso atum temperado com alho e óleo",  img:  imgTest, price: 22.59, favorited: false},
    {id: 7, name: "Salada de Atum", description: "Delecioso atum temperado com alho e óleo",  img:  imgTest, price: 22.59, favorited: false},
    {id: 8, name: "Salada de Atum", description: "Delecioso atum temperado com alho e óleo",  img:  imgTest, price: 22.59, favorited: false},
    {id: 9, name: "Salada de Atum", description: "Delecioso atum temperado com alho e óleo",  img:  imgTest, price: 22.59, favorited: false},
    {id: 10, name: "Salada de Atum", description: "Delecioso atum temperado com alho e óleo",  img:  imgTest, price: 22.59, favorited: false},
    {id: 11, name: "Salada de Atum", description: "Delecioso atum temperado com alho e óleo",  img:  imgTest, price: 22.59, favorited: false},
    {id: 12, name: "Salada de Atum", description: "Delecioso atum temperado com alho e óleo",  img:  imgTest, price: 22.59, favorited: false},
    {id: 13, name: "Salada de Atum", description: "Delecioso atum temperado com alho e óleo",  img:  imgTest, price: 22.59, favorited: false},

  ]
  return (
    <Container>
      <Header />
      <Content>

        <Banner>
          <img src={imgBanner} alt="Imagem do Banner" />
          <section>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </section>
        </Banner>

        <div>
          <SwiperCustom title="Refeições" dishes={dishes}/>
          <SwiperCustom title="Pratos principais" dishes={dishes}/>
        </div>
      </Content>

      <Footer />
    </Container>
  );
}

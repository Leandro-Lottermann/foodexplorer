import { Container } from "./styles";
import { MagnifyingGlass } from "@phosphor-icons/react";

export function Search() {
  return (
    <Container>
      
        <MagnifyingGlass size={24} />
        <input type="text" placeholder="Busque por pratos ou ingredientes" />
      
    </Container>
  );
}

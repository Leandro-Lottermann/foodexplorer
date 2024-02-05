import { Container } from "./styles";
import Logo from "../../assets/gray-logo.svg";

export function Footer() {
  return (
    <Container>
      <div>
        <img src={Logo} />
        <p>food explorer</p>
      </div>

      <p>&copy; 2024 - Todos os direitos reservados</p>
    </Container>
  );
}

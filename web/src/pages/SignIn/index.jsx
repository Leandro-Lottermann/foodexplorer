import { Container, FormSignIn } from "./styles";

import Logo from "../../assets/blue-logo.svg";



import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <Container>
       <div>
        <img src={Logo} />
        <p>food explorer</p>
      </div>

      <FormSignIn>
        <h1>Faça login</h1>

          <Input title="Email" placeholder="Exemplo: exemplo@exemplo.com.br"/>

          <Input title="Senha" placeholder="No mínimo 6 caracteres" type="password"/>

          <Button title="Criar conta"/>

          <a href="#">Criar uma conta</a>
      </FormSignIn>
    </Container>
  );
}

import { Container, FormSignUp } from "./styles";

import Logo from "../../assets/blue-logo.svg";


import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
  return (
    <Container>
       <div>
        <img src={Logo} />
        <p>food explorer</p>
      </div>

      <FormSignUp>
        <h1>Crie sua conta</h1>
          <Input title="Seu nome" placeholder="Exemplo: Maria da Silva"/>

          <Input title="Email" placeholder="Exemplo: exemplo@exemplo.com.br"/>

          <Input title="Senha" placeholder="No mínimo 6 caracteres" type="password"/>

          <Button title="Criar conta"/>

          <a href="#">Já tenho uma conta</a>
      </FormSignUp>
    </Container>
  );
}

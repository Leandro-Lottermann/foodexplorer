// import { Search } from "../Search";
import { Container, Cart, Search  } from "./styles";
import Logo from "../../assets/blue-logo.svg";
import { List, Receipt, MagnifyingGlass, SignOut } from "@phosphor-icons/react";
import { Button } from "../Button";

export function Header({ requests = 0 }) {
  const isAdmin = false;
  const count = 0;


  return (
    <Container>
      <List size={24} />
      <a>
        <div>
          <img src={Logo} />
          <h1>food explorer</h1>
        </div>

        {isAdmin && <p>admin</p>}
      </a>

      <Search>
        <MagnifyingGlass size={24} />
        <input type="text" placeholder="Busque por pratos ou ingredientes" />
      </Search>

      <div>
        {!isAdmin && (
          <Cart>
            <Receipt size={32} />
            <span>{requests}</span>
          </Cart>
        )}
      </div>

      

      { isAdmin? <Button title="Novo prato"/> : <Button title="Pedido" withContador count={count} icon={Receipt}/>}

      <SignOut data-btn-signout size={32}/>
    </Container>
  );
}

// import { Search } from "../Search";
import { Container, Cart, SearchContainer  } from "./styles";
import { Search } from "../Search";
import Logo from "../../assets/blue-logo.svg";
import { List, Receipt, MagnifyingGlass, SignOut } from "@phosphor-icons/react";
import { Button } from "../Button";


export function Header({ requests = 0, setOpenMenu }) {
  const isAdmin = true;
  const count = 0;


  return (
    <Container>
      
      <List size={24} onClick={() => {setOpenMenu()}}/>
      <a>
        <div>
          <img src={Logo} />
          <h1>food explorer</h1>
        </div>

        {isAdmin && <p>admin</p>}
      </a>

<SearchContainer>
  <Search />
</SearchContainer>
      
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

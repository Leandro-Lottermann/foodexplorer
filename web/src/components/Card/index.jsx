import { useState } from "react";
import { Button } from "../Button";
import { Container } from "./styles";
import { Heart, PencilSimple, Plus, Minus } from "@phosphor-icons/react";

export function Card({ admin, img, name, price, description, favorited }) {
    const [ count, setCount ] = useState(1)
  const stringValue = `R$ ${price.toString().replace(".", ",")}`;
  
  let stringCount = count.toString().padStart(2, "0");

  return (
    <Container>
      {admin ? (
        <PencilSimple size={24} />
      ) : (
        <Heart size={24} weight={favorited ? "fill" : "regular"} />
      )}
      <img src={img} alt="" />

      <h1>{name} &rsaquo; </h1>

      <p>{description}</p>

      <span>{stringValue}</span>

      {

        !admin &&
        <div>
        <div>
          <Minus size={24} onClick={() => {setCount(p => {
            if(p > 1) {
                return p - 1;
            } else {
                return 1;
            }
          })}}/>
          <div>{stringCount}</div>
          <Plus size={24} onClick={() => {setCount(p => p + 1)}}/>
        </div>

        <Button title="incluir" />
      </div>
      }
    </Container>
  );
}

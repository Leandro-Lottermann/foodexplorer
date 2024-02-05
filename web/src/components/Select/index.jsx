import { Container, DropButton, DropList } from "./styles";
import { useState } from "react";
import { CaretDown, CaretUp} from "@phosphor-icons/react";


export function Select() {
    const [ isOpen, setIsOpen ] = useState(false);
    const list = ["Primeiro", "Segundo", "Terceiro"]
    return(
        <Container>
            <DropButton onClick={e => {setIsOpen(!isOpen)}}>
                Aqui tem algo
                <CaretDown size={24} />
            </DropButton>
            {
                isOpen && (
                    <DropList isOpen>
                        {list.map((e, i) => (
                            <div key={i}>{e}</div>
                        ))}
                    </DropList>
                )
            }
        </Container>
    )
}
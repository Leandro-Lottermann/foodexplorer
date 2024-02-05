import { Container } from "./styles"

export function Button ({ title, icon: Icon, withContador, count, ...rest }) {
    
    return (
        <Container type="button" { ...rest }>
            { Icon && <Icon size={32}/>}
            { title } 
            { withContador && ` (${count})`}
            
        </Container>
    )
}
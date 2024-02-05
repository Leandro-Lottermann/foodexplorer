import { Container } from './styles.js';

export function Input({ title, ...rest }) {
    return (
        <Container>
            <label htmlFor="input">{title} </label>
            <input id='input' {...rest}/>
        </Container>
    )
}
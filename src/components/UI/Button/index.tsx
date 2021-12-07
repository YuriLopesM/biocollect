import { Container } from './styles';
import ButtonProps from './interface'

export function Button({
    background = "green",
    color = "detail",
    children,
    ...rest
}: ButtonProps) {
    return (
        <Container
            background={background}
            color={color}
            {...rest}
        >
            { children }
        </Container>
    )
}
import CardProps from "./interface";
import { Container } from "./styles";

export function Card({
    icon,
    text
}: CardProps) {
    return (
        <Container>
            {icon}
            <p>{text}</p>
        </Container>
    )
}
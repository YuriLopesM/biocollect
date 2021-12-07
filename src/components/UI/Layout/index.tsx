import { Header } from '../Header';

import LayoutProps from "./interface"
import { Container } from "./styles"

export function Layout({ children }: LayoutProps) {
    return ( 
        <Container>
            <Header />
            { children }
        </Container>
    )
}
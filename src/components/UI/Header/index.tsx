import Link from 'next/link';

import { Button } from '../Button'

import { Container } from './styles'

export function Header() {
    return (
        <Container>
            <nav>
                <div className="logo">
                    <img src="./assets/logo.svg" />
                    <strong><span>Bio</span>Collect</strong>
                </div>
                <ul>
                    <li>
                        <Link href="#">
                            <a>Nossos programas</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Como funciona</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Sobre nós</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                <Button
                    background="background"
                    color="green"
                >
                    Login
                </Button>
                <Button>
                    Cadastre-se
                </Button>
            </main>
        </Container>
    )
}
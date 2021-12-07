import Image from 'next/image'
import { Button } from '../UI/Button'
import { Container } from './styles'

export function Conscience() {
    return (
        <Container>
            <figure>
                <Image 
                    src="/assets/Salad.png"
                    alt="Salad"
                    layout="fill"
                    objectFit="contain"
                    quality={100}
                    priority
                />
            </figure>
            <main>
                <h1>- Desperdício, <span>+ Consciência</span></h1>
                <p>No Brasil, cerca de <strong>10% de todos os alimentos</strong> são perdidos ainda no campo, sendo que o percentual piora para outras etapas da cadeia produtiva.</p>
                <p>Com isto em mente, nossos programas focam em pequenos agricultores e pessoas que não possuem a viabilidade de fazer a compostagem correta.</p>
                <div className="button-container">
                    <Button>
                        Assista nosso documentário
                    </Button>
                    <Button 
                        background="lightest_gray"
                        color="gray"
                    >
                        Conecte-se no blog
                    </Button>
                </div>
            </main>
        </Container>
    )
}   
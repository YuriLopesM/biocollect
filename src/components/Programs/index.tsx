import Image from 'next/image';
import { Container } from "./styles";

export function Programs() {
    return (
        <Container>
            <div>
                <h1>Nossos programas, <span>suas soluções</span></h1>
                <p>Possuímos diferentes tipos de coletas, que se encaixam com calendários separados de coleta em diversas regiões do sul do país.</p>
            </div>
            <main>
                <figure>
                    <Image 
                        src="/assets/FruitSeller.svg"
                        width={328}
                        height={328}
                        priority
                    />
                    <span>Produtos orgânicos</span>
                </figure>
                <figure>
                    <Image 
                        src="/assets/CowFarmer.svg"
                        width={328}
                        height={328}
                        priority
                    />
                    <span>Dejetos animais</span>
                </figure>
                <figure>
                    <Image 
                        src="/assets/StartUp.svg"
                        width={328}
                        height={328}
                        priority
                    />
                    <span>Compostas individuais</span>
                </figure>
                
            </main>
        </Container>
    )
}
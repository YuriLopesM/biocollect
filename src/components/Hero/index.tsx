import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/UI/Button';
import { Card } from '@/components/UI/Card';
import { Container } from './styles';

import VerifiedIcon from '@assets/VerifiedIcon.svg';
import RecycleIcon from '@assets/RecycleIcon.svg';
import AgricultureIcon from '@assets/AgricultureIcon.svg';

export function Hero() {
    return (
        <Container>
            <div className="wrapper">
                <section>
                    <h1>Coleta sustentável com retorno para <span>seu bolso</span></h1>
                    <p>Participe da nossa rota de coleta orgânica, colaborando com o meio ambiente e ganhando descontos em fertilizante e energia.</p>

                    <div className="cta">
                        <Button>Cadastre-se</Button>
                        <span>
                            Possui uma conta?&nbsp;
                            <Link href="#">
                                <a>Faça login</a>
                            </Link>
                        </span>
                    </div>
                </section>
                <figure>
                    <Image
                        src="/assets/Farmer.svg"
                        alt="Farmer"
                        layout="fill"
                        objectFit="contain"
                        quality={100}
                        priority
                    />
                </figure>
            </div>
            <footer>
                <Card
                    icon={<RecycleIcon width={32} height={32} />}
                    text="Recicle e conserve"
                />
                <Card
                    icon={<AgricultureIcon width={32} height={32} />}
                    text="Apoio ao agro familiar"
                />
                <Card
                    icon={<VerifiedIcon width={32} height={32} />}
                    text="Garantido pela ISO 14001"
                />
            </footer>
        </Container>
    )
}
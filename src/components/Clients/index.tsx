import { Container } from "./styles";

export function Clients() {
    return (
        <Container>
            <h1>Veja o que <span>nossos clientes</span> dizem</h1>
            <section>
                <div>
                    <p>A BioCollect salvou minha vida, sem eles não teria o que fazer com os dejetos da minha safra.</p>
                    <em>João, Fazendeiro</em>
                </div>
                <div>
                    <p>Diminuímos nosso incidente de Metano liberado em cerca de 80%. Estão de parabéns pelo serviço!</p>
                    <em>Maria, Pecuarista</em>
                </div>
                <div>
                    <p>Estou muito feliz com o resultado, fora que o fertilizante é de alta qualidade. Recomendo.</p>
                    <em>Valdir, Fazendeiro</em>
                </div>
            </section>
        </Container>
    )
}
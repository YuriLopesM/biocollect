import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    background: ${props => props.theme.colors.background};
    position: relative;

    .wrapper {
        height: 100vh;
        display: flex;
        align-items: center;

        section {
            width: 50%;
            min-height: 50%;

            display: flex;
            flex-direction: column;
            gap: 1.5rem;

            h1 {
                line-height: 2.75rem;
            }

            .cta {
                margin-top: 1rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 1rem;
                width: 70%;

                button {
                    font-size: 1.125rem;
                    width: 100%;
                }
                
                span {
                    font-size: 1rem;
                    font-weight: 500;

                    color: ${props => props.theme.colors.dark_gray};

                    a {
                        font-weight: 600;
                        color: ${props => props.theme.colors.black};
                    }
                }
            }
        }

        figure {
            width: 50%;
            min-height: 80%;

            display: flex;
            align-items: center;
            justify-content: center;

            position: relative;
        }
    }

    footer {
        width: 100%;

        position: absolute;
        bottom: 2rem;

        display: flex;
        gap: 2rem;
        justify-content: center;
    }
`
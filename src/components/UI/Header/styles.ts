import styled from "styled-components";
import { opacify } from "polished";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 0;
    background: rgba( 255, 255, 255, 0.25);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);

    position: fixed;
    top: 0;
    width: 70%;

    z-index: 999;
    
    nav {
        display: flex;
        align-items: center;
        gap: 3rem;

        .logo {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            strong {
                font-size: 1.25rem;

                span {
                    color: ${props => props.theme.colors.green};
                }
            }
        }

        ul {
            display: flex;
            gap: 1.5rem;

            font-weight: 400;
            color: ${props => props.theme.colors.gray};

            li {
                transition: color .3s ease-in;

                &:hover {
                    color: ${props => props.theme.colors.green};
                }
            }
        }
    }

    main {
        display: flex;
        gap: 2rem;
    }
`
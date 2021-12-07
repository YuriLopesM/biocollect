import { shade } from "polished";
import styled from "styled-components";

export const Container = styled.div`
    svg {
        fill: ${props => props.theme.colors.green};
    }
    
    background: ${props => props.theme.colors.background};
    border: solid 1px ${props => props.theme.colors.light_gray};
    border-radius: 0.5rem;
    padding: 1rem;

    display: flex;
    align-items: center;
    gap: 1rem;

    cursor: pointer;

    p {
        color: ${props => props.theme.colors.dark_gray};
    }

    transition: background .3s ease-in;

    &:hover {
        background: ${props => shade(0.1, props.theme.colors.background)};
    }
`
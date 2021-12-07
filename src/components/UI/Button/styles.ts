import styled from 'styled-components';
import ButtonProps from './interface';

import { tint } from 'polished';

export const Container = styled.button<ButtonProps>`
    background: ${props => props.background && props.theme.colors[props.background]};
    color: ${props => props.color && props.theme.colors[props.color]};
    border: 0;
    border-radius: 0.5rem;
    padding: 0.75em 1em;

    font-weight: 600;

    transition: background-color 0.3s;  
    
    &:hover {
        background: ${props => props.background && tint(0.2, props.theme.colors[props.background])};
    }
`
import styled from "styled-components";

export const Container = styled.div`
    margin: 0 15%;

    h1 {
        font-weight: 700;
        font-size: 2.5rem;
        color: ${props => props.theme.colors.black};


        span {
            color: ${props => props.theme.colors.green}
        }
    }
     
    p {
        color: ${props => props.theme.colors.gray};
        line-height: 1.5rem;
    }
`
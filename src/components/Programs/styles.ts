import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    
    padding: 5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
        padding: 0 15%; 

        p {
            text-align: center;
        }
    }


    main {
        width: 100%;

        position: relative;

        display: flex;
        justify-content: space-between;
        padding: 2rem 0;
        
        figure {
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;

            span {
                font: 400 1.25rem Inter, Roboto, sans-serif;
                color: ${props => props.theme.colors.dark_gray};
            }
        }

    }
`
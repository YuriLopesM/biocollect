import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    
    padding: 5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5rem;

    figure {
        position: relative;
        width: 70%;
        height: 100%;
    }

    main {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        h1 {
            margin-bottom: 0.5rem;
        }



        .button-container {
            width: 100%;
            display: flex;
            justify-content: center;
            gap: 2.5rem;
            margin: 1rem 0;
        }
    }
`;
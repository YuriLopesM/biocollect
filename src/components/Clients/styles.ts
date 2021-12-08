import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    padding: 8rem 0;
    
    position: relative;

    section {
        width: 100%;
        min-height: 200px;
        height: 60%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);


        div {
            max-width: 400px;
            min-height: 200px;
            background: ${props => props.theme.colors.detail};
            padding: 1.5rem 2rem;
            border: 1px solid ${props => props.theme.colors.light_gray};
            border-radius: 0.5rem;

            display: flex;
            flex-direction: column;
            justify-content: space-between;

            transition: transform .3s ease-in, background .3s;
            cursor: pointer;
            
            p {
                color: ${props => props.theme.colors.dark_gray};
                font-weight: 500;
                transition: color .3s;
            }

            em {
                display: inline-block;
                width: 100%;
                text-align: right;
            }

            &:hover {
                transform: scale(1.05);
                background: ${props => props.theme.colors.lightest_gray};

            }

        }
    }
`
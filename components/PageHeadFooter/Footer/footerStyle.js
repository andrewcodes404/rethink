import styled from 'styled-components'
export const StyledFooter = styled.div`
    background-color: black;
    /* height: 100px; */
    display: flex;
    flex-direction: column-reverse;
    /* justify-content: space-between; */
    justify-content: center;
    align-items: center;
    padding: 1rem;

    @media (min-width: 767px) {
        flex-direction: row;
        justify-content: space-between;
        padding: 2rem 1rem;
    }

    .footer-logo {
        width: 110px;
    }

    .social-wrapper {
        display: flex;
        padding: 10px 0;
    }

    .copyright {
        display: flex;
        justify-content: center;

        small {
            color: green;
        }
    }

    .privacy {
        display: flex;
        flex-direction: column;

        justify-content: center;
        margin-right: 20px;

        a {
            color: green;
            &:hover {
                color: yellow;
            }
        }
    }

    .social-icon {
        width: 70px;
        padding: 10px;
        /* margin: 0 5px; */
        cursor: pointer;

        .social-svg {
            transition: 0.4s;
        }

        &:hover {
            .social-svg {
                fill: yellow;
            }
        }
    }
`

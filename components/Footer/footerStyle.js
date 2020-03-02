import styled from 'styled-components'
export const StyledFooter = styled.div`
    background-color: black;
    /* height: 100px; */
    display: flex;
    flex-direction: column-reverse;

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
        @media (min-width: 767px) {
            margin-right: 40px;
        }
    }

    .social-wrapper {
        display: flex;
        padding: 10px 0;
        width: 95%;
        margin: 0 auto;
        @media (min-width: 767px) {
            width: unset;
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
        width: 35px;
        margin-right: 10px;

        @media (min-width: 567px) {
            width: 50px;
            padding: 10px;
        }

        cursor: pointer;
        transition: 0.4s;

        &:hover {
            .linkedIn-green_svg__st0,
            .instagram-green_svg__st0 {
                stroke: gold;
            }

            #twitter-green_svg__Layer_1,
            #facebook-green_svg__Layer_1,
            #mail-green_svg__Layer_1 {
                path {
                    stroke: gold;
                    border: 1px solid blue;
                }
            }
        }
    }

    .mail {
        &:hover {
            svg {
                g {
                    path {
                        fill: gold;
                    }
                }
            }
        }
    }

    .copyright {
        display: flex;
        justify-content: center;
        align-items: center;

        small {
            color: green;
        }

        margin-bottom: 30px;

        @media (min-width: 767px) {
            margin: 0;
        }
    }
`

export const SvgWrapper = styled.div`
    svg {
        g {
            g {
                .cls-1 {
                    fill: none;
                    stroke: red;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-width: 1.25px;
                }
            }
        }
    }
`

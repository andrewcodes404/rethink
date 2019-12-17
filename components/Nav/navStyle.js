import styled from 'styled-components'

export const HeightForNav = styled.div`
    height: 70px;
`

export const StyledNav = styled.div`
    background-color: black;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
    height: 70px;

    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;

    .header-logo-wrapper {
        width: 160px;
        /* margin-bottom: 20px; */
        @media (min-width: 767px) {
            margin-bottom: 0;
        }
        position: relative;
    }

    .header-logo {
        position: absolute;
        z-index: 1;
    }

    .menu-btn-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        position: relative;
        margin-right: 20px;
    }

    .menu-btn {
        position: absolute;
        z-index: 1;
        @media (min-width: 767px) {
            display: none;
        }

        .cls-1 {
            fill: none;
        }

        .cls-2 {
            fill: #21a056;
            transition: 0.4s;
        }

        width: 35px;
        cursor: pointer;
        transition: 0.4s;
        &:hover {
            .cls-2 {
                fill: ${props => props.theme.yellow};
            }
        }
    }

    .show-nav {
        @media (max-width: 767px) {
            display: flex;
            height: 100vh;
            a {
                display: block;
            }
        }
    }

    nav {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 0vh;
        overflow: hidden;
        transition: 1s;

        background-color: rgba(0, 0, 0, 0.8);
        flex-direction: column;
        justify-content: center;

        a {
            transition: 0.5s;
            padding: 5px 0;
            color: white;
            display: none;
            text-align: center;
            font-size: 30px;
            &:hover {
                background-color: ${props => props.theme.yellow};
            }

            @media (min-width: 767px) {
                font-size: 40px;
            }
        }

        .active-link {
            color: ${props => props.theme.green};
            @media (min-width: 767px) {
                color: ${props => props.theme.yellow};
            }
        }

        .active {
            color: gold;

            &:after {
                color: white;
            }
        }

        @media (min-width: 767px) {
            display: flex;
            position: unset;
            height: unset;

            a {
                font-size: 16px;
                display: inline;
                color: white;
                &:hover {
                    background-color: unset;
                    color: ${props => props.theme.green};
                }

                &:not(:last-child):after {
                    content: '  |  ';
                }
            }

            .admin-link {
                display: inline;
                background-color: black;
                &:hover {
                    background-color: black;
                }
                span {
                    font-size: 16px;
                    margin-bottom: 0;
                    line-height: 1;

                    color: ${props => props.theme.yellow};
                    &:hover {
                        background-color: black;
                        color: ${props => props.theme.green};
                    }

                    &:after {
                        content: '  |  ';
                    }
                }
            }
        }
    }
`

import styled from 'styled-components'

export const StyledProfileBar = styled.div`
    .profile-wrapper {
        overflow: hidden;
        /* height: 250px; */
        margin: 0;
        padding: 20px 10px;

        @media (min-width: 767px) {
            padding: 40px 0;
        }
        position: relative;

        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .profile-bkg-img {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;

        img {
            object-fit: cover;
            height: 100%;
            filter: brightness(0.4);
        }
        /* width: unset; */
    }

    .profile-card {
        margin: 0 auto;

        @media (min-width: 967px) {
            padding: 10px 0;
            width: 800px;
        }
    }

    .profile-title {
        font-size: 48px;
        margin: 0;
        color: white;
        font-weight: 300;
        margin-bottom: 20px;
        width: 100%;
    }

    .profile-info {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .profile-img {
        width: 100px;
        display: none;
        flex-direction: column;
        justify-content: center;

        @media (min-width: 967px) {
            display: flex;
        }
    }

    .profile-text {
        @media (min-width: 600px) {
            width: 600px;
            columns: 2;
        }
    }

    .profile-message {
        padding: 15px 0 0;
        margin: 0 auto;
        text-align: center;
        a,
        a:link,
        a:visited,
        a:active {
            letter-spacing: 1.2px;
            color: ${props => props.theme.yellow};
            font-size: 13px;
            font-weight: 200;
            transition: 0.4s;
            &:hover {
                color: green;
            }
        }

        @media (min-width: 467px) {
            a,
            a:link,
            a:visited,
            a:active {
                font-size: 20px;
            }
        }

        @media (min-width: 767px) {
            padding: 30px 0 0;
            a,
            a:link,
            a:visited,
            a:active {
                font-size: 30px;
            }
        }
    }
`

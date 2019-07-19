import styled from 'styled-components'
export const StyledHero = styled.div`
    /* height: calc(100vh - 160px); */
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    text-align: center;
    overflow: hidden;

    .bkg-img-black {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: black;
        z-index: -2;
    }

    .bkg-img {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: black;
        z-index: -1;
        overflow: hidden;
        img {
            object-fit: cover;
            object-position: bottom;
            height: 100%;
            filter: brightness(0.7) saturate(130%);
        }

        video {
            display: block;
            width: 100%;
            height: 100%;
            object-position: center;
            object-fit: cover;
            /* filter: brightness(0.7) saturate(130%); */
            /* filter: opacity(0) */
            transition: 1s;
            filter: opacity(0);
        }
    }

    .fade-in {
        video {
            filter: opacity(1) brightness(0.7) saturate(160%);
        }
    }

    .hero-content {
        width: ${props => props.theme.contentWidthMob};
        max-width: 830px;
        text-align: center;

        .hero-logo {
            width: 80%;
            max-width: 650px;
            margin: 0 auto 30px;
        }

        h1 {
            /* margin-bottom: 30px; */
            max-width: 680px;
            margin: 0 auto 30px;
        }
    }
`

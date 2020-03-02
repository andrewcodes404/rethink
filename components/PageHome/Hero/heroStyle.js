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
            margin: 0 auto 10px;
        }

        h1 {
            /* margin-bottom: 30px; */
            padding-top: 20px;
            border-top: 3px solid white;

            max-width: 640px;
            margin: 0 auto 30px;
        }
    }
`

export const StyledIconBar = styled.div`
  /* background-color: ${props => props.theme.green}; */

display: none;

@media (min-width:767px) {
  display: block;
};

  background-color: rgba(0, 136, 0, .5);
  width: 100%;
  max-width: 1600px;
  position: absolute;
  bottom: 0;
  overflow: hidden;
  .icon-bar-content {
    width: 90%;
    max-width: ${props => props.theme.maxWidth};

    margin: 0 auto;
    /* height: 150px; */
    /* padding: 8px 0; */
    display: flex;
    justify-content: space-between;

    .icon-card {
      /* height: 110px; */
      padding: 10px 0 15px;
      width: 140px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* border: 1px solid red; */
    }

    .card-img {
      width: 50px;

      margin: 5px auto;
    }
    .card-text {
      padding: 0;
      margin: 0;
      height: 34px;
      text-align: center;
    }
  }
`

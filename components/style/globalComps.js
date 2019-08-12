import styled from 'styled-components'

export const ModalCompanyCard = styled.div`
    transition: 1s;

    @keyframes shake {
        10%,
        90% {
            transform: translate3d(-1px, 0, 0) rotate(10deg);
        }

        20%,
        80% {
            transform: translate3d(2px, 0, 0) rotate(-10deg);
        }

        30%,
        50%,
        70% {
            transform: translate3d(-4px, 0, 0) rotate(10deg);
        }

        40%,
        60% {
            transform: translate3d(4px, 0, 0) rotate(-10deg);
        }
    }

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .card {
        width: 90%;
        max-width: 700px;
        background: white;
        padding: 20px;
    }

    .logo {
        width: 300px;
        height: 200px;
        margin: 0 auto;

        img {
            object-fit: contain;
            height: 100%;
        }
    }
    .content {
        width: 90%;
        margin: 20px auto 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h2 {
            margin-bottom: 0;
            text-transform: capitalize;
        }
        .social-wrapper {
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }

        .social-icon {
            width: 40px;
            margin: 0 10px;
            &:hover {
                animation: shake 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
                transform-origin: center;
            }

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .some-height {
            width: 15px;
            height: 70px;
            /* border: 1px solid #000; */
        }

        .website {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            /* margin-left: 20px; */
            /* margin-top: 20px; */

            p {
                margin: 0;
                line-height: ;
            }
        }
    }
`

export const Logos = styled.div`
    width: 90%;
    margin: 20px auto 50px;
    display: flex;
    flex-wrap: wrap;

    max-width: 420px;
    justify-content: center;

    @media (min-width: 768px) {
        flex-direction: row;
        max-width: 620px;
    }

    @media (min-width: 1080px) {
        align-items: center;
        justify-content: flex-start;
        max-width: 760px;
    }

    min-height: 180px;
`
export const Logo = styled.div`
    width: 130px;
    height: 170px;
    display: flex;
    flex-direction: column;

    justify-content: space-between;
    margin-bottom: 10px;
    cursor: pointer;
    transition: 0.3s;

    @media (min-width: 768px) {
        width: 150px;
        height: 170px;
    }

    .logo {
        position: relative;
        height: 130px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        .index {
            position: absolute;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.5);
            padding: 2px 4px 2px 2px;
            border-bottom-right-radius: 5px;
            color: white;
        }
    }

    .buttons {
        display: none;
        /* display: flex; */
        width: 90%;
        margin: 0 auto;
        transition: 0.6s;
        justify-content: space-between;

        .btn-event {
            width: 45%;
            font-size: 14px;
            padding: 2px;
            text-transform: lowercase;
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        20% {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    &:hover {
        .buttons {
            animation: fadeIn 0.8s;
            display: flex;
        }
    }
`

export const AlertModal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2;
    .modal-card {
        background: white;
        padding: 40px;
        text-align: center;
        p {
            margin-bottom: 50px;
        }
    }
    .modal-btn {
        background: green;
        padding: 10px;
        margin: 10px;
        cursor: pointer;

        &:hover {
            color: white;
        }
    }
`

export const Spinner = styled.div`
    @keyframes spin {
        10%,
        90% {
            transform: rotate(25deg);
        }

        20%,
        80% {
            transform: rotate(-25deg);
        }

        30%,
        50%,
        70% {
            transform: rotate(70deg);
        }

        40%,
        60% {
            transform: rotate(-70deg);
        }
    }

    width: 100px;
    height: 100px;
    padding: 10px;
    background: green;
    animation: spin 5s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite both;
    transform-origin: center;
`

export const LinkIntext = styled.div`
    p {
        font-weight: bold;
        position: relative;
    }

    a,
    a:link,
    a:visited,
    a:active {
        color: ${props => props.theme.black};

        text-decoration: underline;

        @media (min-width: 686px) {
            text-decoration: none;
            &:before {
                /* transition: 1s; */
                content: '';
                position: absolute;
                width: 400px;
                height: 5px;
                left: 11px;
                top: 16px;
                background: ${props => props.theme.yellow};
                z-index: -1;
            }
        }
    }
`

export const ImageBanner = styled.div`
  transition: 0.4s;
  position: relative;
  height: 200px;
  @media (min-width:767px) {
    height: ${props => (props.height ? props.height : '300px')};
  };
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;





  .image-banner-bkg-img {
    transition: .4s;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;

    img {
      transition: .4s;
      object-fit: cover;
      /* object-position: center; */
      object-position: ${props => (props.position ? props.position : 'center')};
      height: 100%;
      filter: ${props =>
          props.darker ? 'brightness(60%)' : 'brightness(100%)'};
    }
  }

  &:hover {
    h2 {
      transition: .4s;
      color: ${props => props.theme.yellow};
    }

/*
    .image-banner-bkg-img {
      img {
        filter: ${props =>
            props.darker ? 'brightness(100%)' : 'brightness(100%)'};
      }
    } */
  }
`

export const BackgroundCoverImage = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    img {
        object-fit: cover;
        object-position: bottom;
        height: 100%;

        filter: ${props =>
            props.darker ? 'brightness(80%)' : 'brightness(100%)'};
    }
`

export const RegisterButton = styled.button`
  outline: inherit !important;
  margin: 10px;
  cursor: pointer;
  transition: 0.4s;

  /* color: ${props => props.theme.grey}; */
  a,
  a:link,
  a:visited,
  a:active {
    color: ${props => props.theme.grey};
  }

  background-color: ${props => props.theme.green};
  &:hover {
    background-color: ${props => props.theme.grey};
    a,
  a:link,
  a:visited,
  a:active {
    color: ${props => props.theme.green};
  }
  }
  font-size: 24px;
  text-transform: uppercase;
  padding: 5px 10px;
  border: unset;
`

export const SponsorButton = styled.button`
    outline: inherit !important;
    margin: 10px;
    cursor: pointer;
    transition: 0.4s;

    a,
    a:link,
    a:visited,
    a:active {
        color: black;
    }
    background-color: ${props => props.theme.yellow};

    &:hover {
        background-color: ${props => props.theme.grey};
        a,
        a:link,
        a:visited,
        a:active {
            color: ${props => props.theme.green};
        }
    }
    font-size: 24px;
    text-transform: uppercase;
    padding: 5px 10px;
    border: unset;
`

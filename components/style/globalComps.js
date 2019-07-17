import styled from 'styled-components'

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

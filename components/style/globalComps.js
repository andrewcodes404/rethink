import styled from 'styled-components'

// Cards----
// Cards----
// Cards----

export const CardContainerWrapper = styled.div`
    .container-title {
        margin: 40px auto;

        @media (min-width: 746px) {
            margin: 60px 0;
        }
    }
    margin-bottom: 50px;
`

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */

    .card-with-title {
        width: 90%;
        max-width: 400px;
        /* height: 300px; */
        padding: 15px;
        margin: 15px;

        @media (min-width: 746px) {
            width: 45%;
            /* height: 400px; */
        }

        h2 {
            margin-bottom: 15px;
        }

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .card-with-title--card {
        width: 100%;
        margin: 0 auto 15px;
        padding: 15px;

        min-height: 240px;
        height: 60%;
    }

    .large {
        width: 45%;
        margin: 0 auto 15px;
        padding: 15px;
        @media (min-width: 746px) {
            width: 45%;

            padding: 15px;
            margin: 15px;
        }
    }
    .medium {
        width: 45%;
        margin: 0 auto 15px;
        padding: 15px;
        @media (min-width: 746px) {
            width: 23%;
            margin: 6px;
        }
    }
    .small {
        width: 30%;
        padding: 0 10px;
        margin: 5px;
        @media (min-width: 746px) {
            width: 19%;
        }
    }
`

export const CardSpeakerContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const CardSpeaker = styled.div`
    box-shadow: 8px 9px 18px -2px rgba(222, 222, 222, 1);
    cursor: pointer;
    border-top: 1px solid #f3f3f3;
    border-left: 1px solid #f3f3f3;
    transition: 0.4s;

    width: 60%;
    max-width: 230px;
    padding: 0 10px;
    margin: 0 5px 35px;

    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    2
    /* align-items: center; */

    @media (min-width: 520px) {
        width: 42%;
        max-width: 330px;
    }
    @media (min-width: 746px) {
        width: 30%;
    }

    @media (min-width: 1100px) {
        width: 23%;
    }

    .headshot-wrapper {
        width: 150px;
        height: 150px;
        margin: 20px auto;

        img {
            object-fit: cover;
            height: 100%;
        }
    }

    p {
        margin: 0 0 5px 0;
        line-height: 1.4;
    }

    .name {
        font-size: 16px;
    }

    .company {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 30px;
    }

    &:hover {
        box-shadow: 18px 23px 35px -10px rgba(194, 194, 194, 1);
        border-top: 1px solid #fafafa;
        border-left: 1px solid #fafafa;
        img {
            transform: scale(1.02);
        }
    }
`

export const Card = styled.div`
    /* box-shadow: 8px 9px 18px -8px rgba(222, 222, 222, 1); */
    box-shadow: 8px 9px 18px -2px rgba(222, 222, 222, 1);
    cursor: pointer;
    border-top: 1px solid #f3f3f3;
    border-left: 1px solid #f3f3f3;
    transition: 0.3s;

    .img-wrapper-lrg {
        img {
            width: 90%;
            height: 90%;
            object-fit: scale-down;
        }
        width: 80%;
        margin: auto;
        height: 100%;

        @media (min-width: 746px) {
            width: 80%;
            height: 100%;
            margin: 0 auto;
            text-align: center;
        }
    }

    .img-wrapper-lrg2 {
        img {
            width: 90%;
            height: 90%;
            object-fit: scale-down;
        }
        @media (min-width: 746px) {
            width: 100%;
            height: 230px;
            margin: 0 auto;
            text-align: center;
        }
    }

    .img-wrapper-med {
        img {
            width: 90%;
            height: 90%;
            object-fit: scale-down;
        }
        @media (min-width: 746px) {
            width: 100%;
            height: 180px;
            margin: 0 auto;
            text-align: center;
        }
    }

    .img-wrapper-sml {
        @media (min-width: 746px) {
            width: 100%;
            height: 180px;
            margin: 0 auto;
        }

        img {
            width: 90%;
            height: 90%;
            object-fit: scale-down;
        }
    }

    &:hover {
        box-shadow: 18px 23px 35px -10px rgba(194, 194, 194, 1);
        border-top: 1px solid #fafafa;
        border-left: 1px solid #fafafa;
        img {
            transform: scale(1.02);
        }
    }
`

// Cards----
// Cards----
// Cards----

// Modals ---
// Modals ---
// Modals ---

export const ModalCloseBtn = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    line-height: 0;
    border: 1px solid #000;
    /* padding: 5px; */
    border-radius: 10px;
    font-size: 15px;
    /* color: white;
        background: black; */
    transition: 0.4s;

    &:hover {
        transform: rotate(90deg);
        background: ${props => props.theme.green};
        color: white;
        border: unset;
    }
`

export const ModalCompanyCardStyle = styled.div`
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
    /* overflow: scroll; */

    .card {
        position: relative;
        width: 90%;
        max-width: 700px;
        background: white;
        padding: 20px;
        position: relative;
        overflow: scroll;
        margin: 40px 0;

        ::-webkit-scrollbar {
            width: 0px;
            background: transparent; /* make scrollbar transparent */
        }
    }

    .close-modal-button {
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
        line-height: 0;
        border: 1px solid #000;
        /* padding: 5px; */
        border-radius: 10px;
        font-size: 15px;
        /* color: white;
        background: black; */
        transition: 0.4s;

        &:hover {
            transform: rotate(90deg);
            background: ${props => props.theme.green};
            color: white;
            border: unset;
        }
    }

    .logo {
        width: 50%;
        margin: 0 auto;

        @media (min-width: 746px) {
            width: 300px;
            height: 200px;
            margin: 0 auto;
        }

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
        }

        .website {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            p {
                margin: 0;
                line-height: 1;
            }
        }
    }
`

export const ModalSpeakerCardStyle = styled.div`
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
    /* overflow: scroll; */

    .card {
        position: relative;
        width: 90%;
        max-width: 700px;
        background: white;
        padding: 20px;
        position: relative;
        overflow: scroll;
        margin: 40px 0;

        ::-webkit-scrollbar {
            width: 0px;
            background: transparent; /* make scrollbar transparent */
        }
    }

    .close-modal-button {
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
        line-height: 0;
        border: 1px solid #000;
        /* padding: 5px; */
        border-radius: 10px;
        font-size: 15px;
        /* color: white;
        background: black; */
        transition: 0.4s;

        &:hover {
            transform: rotate(90deg);
            background: ${props => props.theme.green};
            color: white;
            border: unset;
        }
    }

    .logo {
        width: 50%;
        margin: 0 auto 40px;

        @media (min-width: 746px) {
            width: 200px;
            height: 200px;
        }

        img {
            object-fit: cover;
            height: 100%;
        }
    }
    .content {
        width: 90%;
        margin: 20px auto 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h3 {
            margin: 0 0 8px;
            line-height: 1;
        }

        p {
            margin: 0 0 10px;
            line-height: 1;
        }

        .title {
            font-style: italic;
            font-size: 18px;
        }

        .company {
            font-weight: bold;
        }

        .bio {
            margin-top: 15px;
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
        }

        .website {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            p {
                margin: 0;
                line-height: 1;
            }
        }
    }
`

// Modals ---
// Modals ---
// Modals ---

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
    text-align: center;
    margin: 60px 0;
    p,
    h2,
    h3 {
        font-weight: bold;
        position: relative;
        display: inline;
        margin: 0 auto;
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
                top: 20px;
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
      filter: ${props => (props.darker ? 'brightness(60%)' : 'brightness(100%)')};
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
        filter: ${props => (props.darker ? 'brightness(100%)' : 'brightness(100%)')};
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

        filter: ${props => (props.darker ? 'brightness(80%)' : 'brightness(100%)')};
    }
`

export const GreenButton = styled.button`
  outline: inherit !important;
  margin: 10px;
  cursor: pointer;
  transition: 0.4s;

  /* color: ${props => props.theme.grey}; */
  a,
  a:link,
  a:visited,
  a:active {
    transition: 0.4s;
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

export const YellowButton = styled.button`
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

export const CarouselWrapper = styled.div`
    position: relative;
    margin: 20px auto;

    @media (min-width: 767px) {
        max-width: unset;
    }

    @media (min-width: 1024px) {
    }

    .alice-carousel {
        max-width: 850px;
        margin: 0 auto;
    }

    .button-wrapper {
        margin: 0 auto;
        position: absolute;

        top: 25%;
        left: -40px;
        right: -40px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (min-width: 767px) {
            top: 40%;
        }

        .next-btn {
            line-height: 1;
            display: inline-block;
            border: none;
            margin: 0 10px;
            color: lightgrey;
            font-size: 30px;
            cursor: pointer;
            text-align: center;
            transition: 0.4s;
            &:hover {
                color: green;
            }

            @media (min-width: 1024px) {
                font-size: 60px;
            }
        }
    }
`

export const CarouselItem = styled.div`
    width: 300px;
    margin: -30px auto 0;

    @media (min-width: 1024px) {
        width: unset;
        padding: 7px;
    }

    .logo {
        width: 200px;
        max-width: 200px;
        height: 200px;
        padding: 20px;
        /* margin: 0 auto 20px; */
        overflow: hidden;
        @media (min-width: 1024px) {
            width: unset;
        }
        img {
            object-fit: scale-down;
            height: 100%;
        }
    }
    .headshot {
        width: 200px;
        max-width: 200px;
        height: 200px;
        margin: 0 auto 20px;
        overflow: hidden;
        @media (min-width: 1024px) {
            width: unset;
        }

        img {
            object-fit: cover;
            height: 100%;
        }
    }
    .text {
        color: black;
        width: 200px;
        margin: 0 auto;
        p {
            margin: 0 0 5px 0;
            color: black;
            padding: 0;
            line-height: 1;
            font-size: 15px;
            font-weight: normal;
        }
        h4 {
            /* font-size: 16px;
            border: 1px solid #000; */
            margin: 0 0 5px 0;
            color: black;
            font-weight: lighter;
        }
    }
`

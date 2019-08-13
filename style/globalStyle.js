import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
  * {
     -moz-box-sizing: border-box;
      box-sizing: border-box;
  }

  img {
      width: 100%;
      vertical-align: bottom;
      height: auto;
  }



  body {
      /* font-family: commuters-sans, sans-serif; */
      /* font-family: 'Open Sans', sans-serif; */
      font-family: 'Montserrat', sans-serif;
      /* overflow: hidden; */
      /* overflow-x: hidden; */
      position: relative;

  }


  .push-down {
    flex: 1;
  }
  h1 {
      font-size: 18px;
      color: white;
      font-weight: 400;
      line-height: 1.2;
      margin: 0;
      @media (min-width: 767px) {
        font-size: 26px;
        line-height: 1.5;
      }

    }

  h2 {
    font-size: 28px;
    margin: 0px;
    position: relative;
    font-weight: bold;

    @media (min-width: 767px) {
      font-size: 50px;
      margin: 0px 0 40px;
    }

  }

  .no-highlight:before{
   background: none;
  }

  h3 {
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 14px;

    @media (min-width:767px) {
      font-size: 24px;
      margin-bottom: 30px;
    };
  }

  h4 {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.3;
    margin: 0;
    color: white;
  }

  h5{
    font-size: 19px;
    font-weight: 500;
    line-height: 1.3;
    margin: 0;
    
  }

  p {
    font-size: 16px;
    margin-bottom: 20px;
    font-weight: 200;
    @media (min-width:767px) {
      font-size: 20px;
      margin-bottom: 30px;
    };
  }

  li {
        line-height: 1.3;
    font-size: 16px;
    
    font-weight: 200;
    @media (min-width:767px) {
      font-size: 20px;
      margin-bottom: 5px;
    };
  }

blockquote{
  font-size: 18px;
  font-style: italic;
  font-weight: 200;
  position: relative;
  @media (min-width:767px) {
    font-size: 28px;
  };
}

blockquote:before{
    content: "";
    position: absolute;
    width: 5px;
    height: 100%;
    left: -40px;
    top: 0;
    background: ${props => props.theme.green};
    z-index: -1;
}


  .list-item {
    font-size: 16px;
    margin: 0;
    line-height: 1.2;

    @media (min-width:767px) {
      font-size: 20px;
    margin: 0;
    line-height: 1.4;
    };
  }
  .white {
    color: white;
  }

  a,
  a:link,
  a:visited,
  a:active {
    transition: .2s;
    text-decoration: none;
    color: black;
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.green};
    }
  }


  .link-yellow{
     a,
    a:link,
    a:visited,
    a:active {
      transition: .2s;
      text-decoration: none;
      color: ${props => props.theme.yellow};
      cursor: pointer;
      &:hover {
        color: black;
      }
    }
  }

  .link-green{
      a,
    a:link,
    a:visited,
    a:active {
      transition: .2s;
      text-decoration: none;
      color: ${props => props.theme.green};
      cursor: pointer;
      &:hover {
        color: black;
      }
    }

  }


  .green-btn {
        background: green;
        padding: 10px;
  
        cursor: pointer;

        &:hover {
            color: white;
        }
    }

    .red-btn {
      display: inline-block;
        background: firebrick;
        padding: 10px;
        
        cursor: pointer;

        &:hover {
            color: white;
        }
    }

  .bold{
    font-weight: 600;
  }

  .text-center{
    text-align: center;
  }
  .text-content-title-wrapper {
    padding: 30px 0 0;
    margin: 0 auto;
    width: ${props => props.theme.contentWidthMob};
    max-width: ${props => props.theme.maxWidth};
    @media (min-width: 767px) {
      padding: 60px 0 20px;
      width: ${props => props.theme.contentWidthTab};
    }
  }

  .content-wrapper {
    width: ${props => props.theme.contentWidthMob};
    max-width: ${props => props.theme.maxWidth};
      margin: 0 auto;
     @media (min-width: 767px) {
      width: ${props => props.theme.contentWidthTab};
    }
  }

  .text-content {
    max-width: ${props => props.theme.textMaxWidth};
    margin: 0 auto;
  }

  [data-aos="new-animation"] {
    opacity: 0;
    transition-property: transform, opacity;

    &.aos-animate {
      opacity: 1;
  }

  @media screen and (min-width: 768px) {
    transform: translateX(100px);

    &.aos-animate {
      transform: translateX(0);
    }
  }
}

[data-aos="my-anim"] {
    /* opacity: 0; */
    transition-property: transform, opacity;
    transition: 1s;
    /* transform: translateX(100px); */

    &:before {
        transition: 1s;
        content: "";
        position: absolute;
        width: 0px;
        height: 8px;
        left: 9px;
        top: 22px;
        background: ${props => props.theme.yellow};
        z-index: -1;
      }


    &.aos-animate {
      /* opacity: 1; */
      &:before {
      width: 100px;
      }

@media (min-width:767px) {
  &:before {
        transition: 1s;
        content: "";
        position: absolute;
        width: 0px;
        height: 15px;
        left: 30px;
        top: 39px;
        background: ${props => props.theme.yellow};
        z-index: -1;
      }


    &.aos-animate {
      /* opacity: 1; */
      &:before {
        width: 130px;
      }
};


  }

  /* @media screen and (min-width: 768px) {
    transform: translateX(100px);

    &.aos-animate {
      transform: translateX(0);
    }
  } */
}
}

`

export default GlobalStyle

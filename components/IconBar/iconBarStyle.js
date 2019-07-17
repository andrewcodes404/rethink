import styled from 'styled-components'
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

import styled from 'styled-components'
export const StyledContact = styled.div`
    position: relative;
    /* color: white; */

    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 967px) {
        min-height: 80vh;
    }

    .founder-header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;

        @media (min-width: 600px) {
            text-align: left;
            width: 55%;
            max-width: 600px;
            flex-direction: row;
            justify-content: space-between;
        }
    }

    .founder-title {
        display: flex;
        flex-direction: column;

        h2 {
            margin: 0;
        }
    }

    .founder-portrait-cont {
        /* padding: 40px; */
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .linkedIn {
        width: 200px;
        border: 1px solid red;
    }

    .founder-portrait-img {
        width: 140px;
        border-radius: 70px;
        overflow: hidden;
        filter: saturate(70%);

        @media (min-width: 767px) {
            width: 150px;
            border-radius: 75px;
        }
    }

    .founder-text {
        /* border: 1px solid red; */
    }
`

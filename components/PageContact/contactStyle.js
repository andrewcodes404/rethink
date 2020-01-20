import styled from 'styled-components'

export const Founder = styled.div`
    width: 80%;
    margin: 0 auto;
`

export const StyledContact = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 967px) {
        min-height: 80vh;
    }

    .get-in-touch {
        width: 80%;
        margin: 0 auto 30px;
        h2 {
            margin-bottom: 20px;
            @media (min-width: 567px) {
                margin-bottom: 70px;
            }
        }

        p {
            margin: 0 0 5px;
        }

        a {
            color: green;
            font-weight: bold;
        }

        margin-bottom: 40px;

        .full-details {
            a {
                color: black;
                font-weight: normal;

                border-bottom: 3px solid gold;
            }
        }
    }

    .social-wrapper {
        display: flex;
        justify-content: space-between;
        /* margin: 0 auto 60px; */
        margin: 60px 0;
        width: 80%;
        max-width: 230px;
    }

    .social-icon {
        width: 30px;

        cursor: pointer;

        transition: 0.4s;

        &:hover {
            .linkedIn-green_svg__st0,
            .instagram-green_svg__st0 {
                stroke: gold;
            }

            #twitter-green_svg__Layer_1,
            #facebook-green_svg__Layer_1,
            #mail-green_svg__Layer_1 {
                path {
                    stroke: gold;
                    fill: gold;
                    border: 1px solid blue;
                }
            }
        }
    }

    .info {
        display: flex;
        margin-bottom: 60px;

        flex-direction: column;
        max-width: 650px;

        @media (min-width: 768px) {
            flex-direction: row;
            max-width: unset;
        }
    }

    .location {
        margin-bottom: 30px;
    }

    .location,
    .event-times {
        width: 400px;

        h3 {
            margin: 0 0 10px;
        }
        p {
            margin: 0 0 5px;
        }

        @media (min-width: 567px) {
            width: 450px;
        }
    }

    .images {
    }
    .image {
        width: 80%;
        margin: 0 auto 30px;
    }
    /* Founder --- */
    /* Founder --- */
    /* Founder --- */

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

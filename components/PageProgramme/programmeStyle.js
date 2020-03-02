import styled from 'styled-components'

export const DayBtns = styled.div`
    display: flex;
    border-bottom: 5px solid lightgrey;

    .btn {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px 20px 10px 30px;
        cursor: pointer;

        &:hover {
            color: gold;
        }
    }

    h2,
    p {
        margin: 0 0 5px 0;
        transition: 0.2s;
    }

    .active {
        color: green;
        background: lightgrey;

        &:hover {
            h2 {
                color: gold;
            }
        }

        .corner {
            background: lightgrey;
            border-top: 50px solid white;
            border-right: 40px solid lightgrey;
        }
    }
`

export const ProgrammeStyled = styled.div`
    margin-bottom: 50px;
    .session {
        border-bottom: 1px solid grey;
        h3 {
            margin: 0;
            line-height: 1.4;
        }

        p {
            margin: 0;
            line-height: 1.4;
        }
    }

    .session-header {
        display: flex;
        justify-content: space-between;
        margin: 20px 0;
    }

    .session-header--item1 {
        width: 100%;
        display: flex;
        align-items: center;
    }

    .theme-icon {
        width: 15%;
        margin-right: 20px;
        @media (min-width: 746px) {
            width: 70px;
            margin-right: 40px;
        }
    }
    .theme-title {
        width: 85%;
        display: flex;

        flex-direction: column;

        @media (min-width: 746px) {
            flex-direction: row;
        }
    }
    .theme-title--time {
        min-width: 120px;
        margin-bottom: 5px;
        @media (min-width: 746px) {
            min-width: 160px;
        }
        margin-right: 10px;
    }

    .theme-title--text {
    }

    .session-header--item2 {
        display: flex;
        align-items: center;
    }

    .disclosure-trangle {
        font-size: 30px;
        margin-left: 20px;
        @media (min-width: 746px) {
            font-size: 40px;
            margin-left: 30px;
        }

        cursor: pointer;
        transform: rotate(90deg);
        color: ${props => props.theme.grey};

        transition: 0.4s ease-out;
        &:hover {
            filter: brightness(50%);
        }
    }
    .disclosure-triangle--down {
        transform: rotate(0);
        color: ${props => props.theme.green};
    }

    .session-content {
        width: 90%;
        margin: 0 auto;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.4s ease-out;
    }
    .show-session {
        height: 100%;
        max-height: 2000px;
        transition: max-height 0.4s ease-in;
    }

    .sub-title {
        font-size: 22px;
        font-weight: bold;
        padding-bottom: 15px;
    }

    .text-section {
        margin-bottom: 30px;
    }
    .text-small {
        font-size: 16px;
        @media (min-width: 767px) {
            font-size: 18px;
        }
    }

    .hostSpeaker {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
        span {
            line-height: 1.6;
        }

        @media (min-width: 767px) {
            flex-direction: row;
            span:not(:last-child) {
                padding-right: 10px;
            }
        }
        cursor: pointer;
        span {
            border-bottom: 1px solid white;
            transition: 0.2s;
        }

        &:hover {
            span {
                color: green;
                border-bottom: 1px solid green;
            }
        }
    }

    .hostSpeaker--hyphen {
        display: none;
        @media (min-width: 767px) {
            display: inline;
        }
    }
`

export const SponsorsAndSupportersWrapper = styled.div`
    @media (min-width: 746px) {
        display: flex;
    }

    margin-bottom: 60px;
`

export const SponsorsAndSupporters = styled.div`
    @media (min-width: 746px) {
        width: 50%;
    }

    .logos {
        display: flex;
    }
    .logo {
        width: 90px;
        height: 90px;
        margin-right: 20px;

        @media (min-width: 746px) {
            width: 110px;
            height: 110px;
            margin-right: 30px;
        }
        img {
            object-fit: scale-down;
            width: 100%;
            height: 100%;
        }
        cursor: pointer;
        transition: 0.2s;

        border: 1px solid white;
        &:hover {
            border: 4px solid green;
            box-sizing: border-box;
            transition: 0.2s;
            padding: 2px;
        }
    }
`

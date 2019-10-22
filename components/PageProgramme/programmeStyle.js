import styled from 'styled-components'

export const ProgrammeStyled = styled.div`
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

    .sponsors-and-supporters {
        @media (min-width: 746px) {
            display: flex;
            /* justify-content: space-between; */
        }
    }

    .sponsors {
        @media (min-width: 746px) {
            margin-right: 60px;
        }
    }

    .sponsors,
    .supporters {
        @media (min-width: 746px) {
            max-width: 50%;
        }
    }

    .logos {
        display: flex;
        flex-wrap: wrap;
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
    }
`

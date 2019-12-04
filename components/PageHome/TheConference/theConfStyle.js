import styled from 'styled-components'
export const StyledConf = styled.div`
    .conf-activities {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        @media (min-width: 767px) {
            flex-direction: row;
            flex-wrap: wrap;
        }
    }
`

export const StyledActivtyCard = styled.div`
    width: 100%;
    margin-bottom: 10px;
    @media (min-width: 767px) {
        width: 46%;
        margin-bottom: 0;
    }

    text-align: center;
    padding: 20px;
    background-color: ${props => props.theme.lightgrey};

    .activity-icon {
        width: 50px;
        margin: 0 auto;
        padding: 7px;
        border-radius: 25px;
        background-color: ${props => (props.color === 'green' ? props.theme.green : props.theme.yellow)};

        @media (min-width: 767px) {
            width: 90px;
            border-radius: 45px;
            padding: 15px;
        }
    }
`
